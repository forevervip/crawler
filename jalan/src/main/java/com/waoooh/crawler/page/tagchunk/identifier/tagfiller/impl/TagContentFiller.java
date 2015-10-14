package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.ExBean_Exbean_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.ExBean_Scope_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Source_Value_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Tag_Description_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.impl.SplitSpreaderimpl;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.ALL_TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl.Front_TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;
import sun.text.resources.no.CollationData_no;

import java.util.List;

/**
 * 对于div:class="name"|val(ex={span.all,a.tag})部分的val(ex={span.all,a.tag} 的读入解析
 * Created by lulu on 15/8/21.
 */
public class TagContentFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        List<String> list = bean.getInUse();

        String content = list.get(0);

        if (!content.contains(Const.LEFT_BRACKET) && !content.contains(Const.RIGHT_BRACKET)) {

            getTagDescription().setContent(content);

        } else {

            getTagDescription().setContent(StrUtils.getUntilFirst(content, Const.LEFT_BRACKET));

            // 去掉左括号前的内容（tag）
            content = StrUtils.cutUntilFirstWithoutOffset(content, Const.LEFT_BRACKET);

            // check括号是否正确 即取括号内部的内容
            String bracketContent = StrUtils.getBetweenStr(false, content, Const.LEFT_BRACKET, Const.RIGHT_BRACKET);

            if (StrUtils.isEmpty(bracketContent)) {
                throw new InvalidDescriptionException("Embedded Execute error in Tag Content Description, cause no bracket in pairs!");
            }


            // 继续进行内部的tag解析
            embeddedExecute(bracketContent);

        }

    }

    public TagContentFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


    /**
     * 再content设置的同时，如果有(ex={span[all],a[tag]})这样的语法则需要继续进行tag解析
     * 解析1: ex = ...  获取ex标签使用 = 分割
     * 解析2: 去除{} 后使用 , 分割
     *
     * @param grammar
     */
    private void embeddedExecute(String grammar) {

        // 首先切分ex 的内容 其实没啥用。。。
        Segmentation splitter = Source_Value_Splitter.getInstance(true).
                RTD(getTagDescription()).
                setTagFiller(new ExTagNameFiller(new Front_TagFillRuler()));

        splitter.$(ExBean_Exbean_Splitter.getInstance(true)).
                setTagFiller(new ExTagBeanFiller(new ALL_TagFillRuler())).

                $(ExBean_Scope_Splitter.getInstance(true)).
                setTagFiller(new ExTagBeanSelfFiller(new ALL_TagFillRuler()));

        SplitSpreader splitSpreader = SplitSpreaderimpl.getInstance(grammar);

        splitter.executeFill(splitSpreader);

    }


}
