package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public class TagDesTagDesFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        // do nothing
        List<String[]> list = bean.getRawNeverFormatted();

        // 此处获得是dt:*|val , dd:*|val 这样的arrays
        String[] array = list.get(0);

        List<String> strs = Lists.newArrayList();

        for (String str : array) {

            // cut down { and }
            strs.add(StrUtils.replaceStrArrayByWhiteSpace(str, new String[]{Const.LEFT_B_BRACKET, Const.RIGHT_B_BRACKET}));

        }

        bean.setOutOfUse(strs);


    }

    public TagDesTagDesFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
