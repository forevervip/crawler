package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule;

import com.google.common.collect.Lists;
import com.waoooh.crawler.page.tagchunk.identifier.IdentifierConst;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.exception.InvalidRuleException;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public abstract class AbstractTagFillRuler implements TagFillRuler {

    @Override
    public FillBean execute(Object object, Object split) {

        FillBean bean = new FillBean();

        String localSplit = (String)split;

        List<String[]> arrList = (List<String[]>) object;

        if (getIntRule() != IdentifierConst.ALL) {

            // 对于切分的内容需要按照前，后进行筛选的场合如 arr[0] or arr[1]的场合

            List<String> inUseList = Lists.newArrayList();

            List<String> notInUseList = Lists.newArrayList();

            for (String[] arr : arrList) {

                if (StrUtils.isArrayLegal(arr, getIntRule())) {

                    inUseList.add(arr[getIntRule() - 1]);

                    StringBuffer sb = new StringBuffer();
                    for (int i = 0; i < arr.length; i++) {
                        if (i == getIntRule() - 1) {
                            continue;
                        }
                        sb.append(arr[i]);
                        sb.append(localSplit);

                    }

                    notInUseList.add(StrUtils.cutDownTail(sb.toString(),1 ));

                    bean.setInUse(inUseList);
                    bean.setOutOfUse(notInUseList);

                } else {

                    throw new InvalidRuleException("TagFillRuler can not handle this string of " + arr.toString());
                }

            }

            return bean;

        } else {

            bean.setRawNeverFormatted(arrList);
            return bean;

        }

    }

    @Override
    public void beforeExecute() {

    }

    @Override
    public void afterExecute() {

    }
}