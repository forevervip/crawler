package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.identifier.IdentifierConst;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public class SourceItSelfFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        //List<String> list = bean.getInUse();
        //SourceBean sourceBean = SourceBean.getInstance(arr[0],arr[1],null);

        List<String[]> listArr = bean.getRawNeverFormatted();

        List<SourceBean> listSourceBean = Lists.newArrayList();


        for (String[] arr : listArr) {

            if (StrUtils.isArrayLegal(arr, 2)) {

                String key = arr[IdentifierConst.ARRS_0].trim();
                String val = StrUtils.replaceStrArrayByWhiteSpace(arr[IdentifierConst.ARRS_1],
                        new String[]{Const.QUOT});
                String strategy = "";

                if (val.startsWith(Const.ASTERISK)) {
                    strategy = Const.$LIKE;
                } else if (val.endsWith(Const.ASTERISK)) {
                    strategy = Const.LIKE$;
                    val = StrUtils.cutDownTail(val, 1);
                } else {
                    strategy = Const.EQUAL;
                }

                SourceBean sourceBean = new SourceBean(key, val, strategy);

                listSourceBean.add(sourceBean);

            }

        }

        getTagDescription().setSourceBeanList(listSourceBean);


    }

    public SourceItSelfFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
