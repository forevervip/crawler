package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * 对于div:class="name1" class="name2" class="name3"|val(ex={span.all,a.tag})部分的
 * {span.all,a.tag}的解析读入
 * <p>
 * Created by lulu on 15/8/21.
 */
public class ExTagBeanFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        // do nothing
        List<String[]> list = bean.getRawNeverFormatted();

        String[] array = list.get(0);

        List<String> strs = Lists.newArrayList();

        for (String str : array) {

            // cut down { and }
            strs.add(StrUtils.replaceStrArrayByWhiteSpace(str, new String[]{Const.LEFT_B_BRACKET, Const.RIGHT_B_BRACKET}));

        }

        bean.setOutOfUse(strs);


    }

    public ExTagBeanFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
