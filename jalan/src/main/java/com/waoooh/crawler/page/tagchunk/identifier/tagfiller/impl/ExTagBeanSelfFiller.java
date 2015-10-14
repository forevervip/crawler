package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * 对于div:class="name1" class="name2" class="name3"|val(ex={span.all,a.tag})部分的
 * span.all,
 * a.tag 的解析读入
 * Created by lulu on 15/8/21.
 */
public class ExTagBeanSelfFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        // do nothing
        List<String[]> list = bean.getRawNeverFormatted();

        List<ExceptBean> exceptBeans = Lists.newArrayList();

        for (String[] array : list) {

            if (StrUtils.isArrayLegal(array, 2)) {

                ExceptBean exBean = new ExceptBean();

                exBean.setTagName(array[0]);
                exBean.setScope(array[1]);

                exceptBeans.add(exBean);


            } else {
                throw new InvalidDescriptionException("ExTagBeanSelfFiller array size error !");
            }

        }

        getTagDescription().setExceptBeanList(exceptBeans);


    }

    public ExTagBeanSelfFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
