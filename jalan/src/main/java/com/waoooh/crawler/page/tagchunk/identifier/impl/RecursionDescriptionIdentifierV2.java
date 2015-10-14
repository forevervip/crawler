package com.waoooh.crawler.page.tagchunk.identifier.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.*;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.impl.SplitSpreaderimpl;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.ComplexSourceFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.SourceItSelfFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.TagContentFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl.TagNameFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.ALL_TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.Back_TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.Front_TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * 转换为面向对象的做法
 *
 * Created by lulu on 15/8/19.
 */
public class RecursionDescriptionIdentifierV2 extends AbstractIdentifier {
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

        // 递归模式
        if (description.startsWith(Const.SHARP)) {

            return true;

        }

        return false;
    }

    /**
     * 进行Description的识别，转换为相应的TagDescription。
     * 需要循环解析的场合，处理中需要考虑周全。
     *
     * @param tagDescription
     * @param description
     */
    @Override
    public void identify(TagDescription tagDescription, String description) {

        // 初始化SplitSpreader
        SplitSpreader spreader = SplitSpreaderimpl.getInstance(description);

        // 由于description是多个连续的需要解析的tag表达式，所以需要先进行切分
        Segmentation splitter = Description_Description_BY_$GT_Splitter.getInstance(true);

        SplitSpreader spreader1 = splitter.split(spreader);

        List<String[]> strArr = spreader1.getSplittedArray();

        if (StrUtils.isCollectionEmpty(strArr)) {
            throw new InvalidDescriptionException("spreader's splitted Array is null or size is 0!");
        }

        // For test 监视原tagDescription的内容
        TagDescription raw = tagDescription;

        Segmentation splitter1 = Tag_Description_Splitter.getInstance(true).
                RTD(tagDescription).
                setTagFiller(new TagNameFiller(new Front_TagFillRuler()));

        splitter1.$(Description_Content_Splitter.getInstance(false).
                setTagFiller(new TagContentFiller(new Back_TagFillRuler())))

                // 设置false : 由于可能不会有space分割多个source的场合 故设置为false
                .$(Description_Description_BY_SPACE_Splitter.getInstance(false).
                        setTagFiller(new ComplexSourceFiller(new ALL_TagFillRuler())))

                        // 设置false : 由于可能出现最后一个不需要source的解析 则直接false
                .$(Source_Value_Splitter.getInstance(false).
                        setTagFiller(new SourceItSelfFiller(new ALL_TagFillRuler())));


        String[] arr = strArr.get(0);

        int counter = 0;
        for (String localDescription : arr) {

            if (counter > 0) {
                tagDescription =
                        tagDescription.addNextChild(TagDescriptionEntity.getInstance(localDescription));

                splitter1.RTD(tagDescription);
            }


            // 遇到 * 的场合直接在外层设置tagName为* 不进入到里层
            if (Const.ASTERISK.equals(localDescription.trim())) {

                tagDescription.setTagName(Const.ASTERISK);

            } else {
                SplitSpreader spreader2 = SplitSpreaderimpl.getInstance(localDescription);

                splitter1.executeFill(spreader2);
            }
            counter++;
        }

        //System.out.println(tagDescription);


    }


    public static void main(String... args) {


    }
}
