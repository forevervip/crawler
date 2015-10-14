package com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.util.AnalysisUtils;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;
import com.waoooh.crawler.utils.StrUtils;
import com.waoooh.crawler.utils.TagUtils;

import java.util.List;

/**
 * Created by lulu on 15/9/8.
 */
public class DefaultFormattedResultFactory implements AnalysisFactory {

    @Override
    public Object make(Object[] objects) {

        String rawResult = (String) objects[0];
        TagDescription tagDescription = (TagDescription) objects[1];

        if (!StrUtils.isCollectionEmpty(tagDescription.getExceptBeanList())) {

            List<ExceptBean> list = tagDescription.getExceptBeanList();

            if (list != null) {

                String content = null;

                for (ExceptBean exceptBean : list) {

                    rawResult = AnalysisUtils.removeExValue(exceptBean, rawResult);

                }

            }

        }

        return rawResult;

    }

}
