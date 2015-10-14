package com.waoooh.crawler.page.tagchunk.identifier.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Content_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Description_BY_SPACE_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Source_Value_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Tag_Description_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.impl.SplitSpreaderimpl;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.ComplexSourceFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.SourceItSelfFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.TagContentFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.TagNameFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.ALL_TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.Back_TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.Front_TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/8/18.
 */
public class DefaultDescriptionIdentifierV3 extends AbstractIdentifier {


    /**
     * 是否支持此类tag描述任务
     *
     * @param description
     * @return
     */
    @Override
    public boolean isSupported(String description) {

        // 去除中括号
        //String localDescription = StrUtils.cutDownHeadAndTail(description, 1);

        //StrUtils.getBetweenStr(false, description, Const.LEFT_BRACKET, Const.RIGHT_M_BRACKET);

        // 非递归模式
        if (!description.startsWith(Const.SHARP)) {

            return true;

        }

        return false;
    }

    /**
     * 进行Description的识别，转换为相应的TagDescription
     * 形如 [td:class="s12_33b*"|val] 的解析。
     * 形如 [td:class="s12_33b*" id="key"|val] 的解析
     *
     * @param tagDescription
     */
    @Override
    public void identify(TagDescription tagDescription, String description) {

        String[] arrs = null;

        String localDescription = StrUtils.cutDownHeadAndTail(description, 1);

        /*
        arrs = localDescription.split(Const.COLON);
        需要解决的问题：
        现在tagDescription已经通过RTD方法传入了链中，
        但是需要解析的grammer字符串还没有串联起来，需要在每一个splitter中加入
        grammer字符串的入口和出口，使得每个splitter知道解析哪一个，解析完的是否要
        初始化第一个splitter 把TagDescription链式传入，后面的子节点不用维护
        */


        // 先进行的是tag:xxx的 ":" 的split
        Segmentation splitter = Tag_Description_Splitter.getInstance(true).
                RTD(tagDescription).
                setTagFiller(new TagNameFiller(new Front_TagFillRuler()));

        // 继续进行的是 | 的 split
        splitter.$(Description_Content_Splitter.getInstance(true).
                setTagFiller(new TagContentFiller(new Back_TagFillRuler())))

                // 继续进行的是多个description之间的使用space的split
                .$(Description_Description_BY_SPACE_Splitter.getInstance(false).
                        setTagFiller(new ComplexSourceFiller(new ALL_TagFillRuler())))

                        // source中的利用=的split
                .$(Source_Value_Splitter.getInstance(false).
                        setTagFiller(new SourceItSelfFiller(new ALL_TagFillRuler())));


        // TODO 这里的","的分割位置是否正确没有check
        // check一下是否有用逗号分割开的内容，考虑逗号分割内容为同级的内容，需要在tag的同级进行增加
        String[] arr = StrUtils.smartSplit(description, Const.COMMA);
        if (StrUtils.isArrayLegal(arr, 2)) {

            int i = 0;
            for (String strArr : arr) {

                if (i > 0) {

                    TagDescription description1 = TagDescriptionEntity.getInstance(strArr);
                    // 加入新的TagDescription到现有的tagDescription的同级内容下（非子项目）
                    tagDescription.addNext(description1);
                    splitter.RTD(description1);
                }

                SplitSpreader spreader = SplitSpreaderimpl.getInstance(strArr);
                splitter.executeFill(spreader);

                i++;
            }

        } else {
            SplitSpreader spreader = SplitSpreaderimpl.getInstance(description);
            splitter.executeFill(spreader);

        }


    }
}
