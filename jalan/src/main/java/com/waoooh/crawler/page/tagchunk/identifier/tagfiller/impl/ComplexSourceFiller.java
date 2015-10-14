package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;

import java.util.List;

/**
 * 对于div:class="name1" class="name2" class="name3"|val(ex={span.all,a.tag})部分的
 * class="name1" class="name2" class="name3"的解析读入
 * <p>
 * Created by lulu on 15/8/21.
 */
public class ComplexSourceFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        List<String[]> list = bean.getRawNeverFormatted();


        List<String> outputList = Lists.newArrayList();

        for (String[] arr : list) {

            for (String str : arr) {
                outputList.add(str);
            }

        }

        bean.setOutOfUse(outputList);

    }

    public ComplexSourceFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
