package com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.util.AnalysisUtils;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/9/8.
 */
public class DefaultStartTagFactory implements AnalysisFactory {

    @Override
    public Object make(Object[] objects) {


        TagDescription tagDescription = (TagDescription) objects[0];

        StringBuilder startTag = new StringBuilder();

        //return AnalysisUtils.getDefaultStartTag(startTag, tagDescription);
        return null;


    }

}
