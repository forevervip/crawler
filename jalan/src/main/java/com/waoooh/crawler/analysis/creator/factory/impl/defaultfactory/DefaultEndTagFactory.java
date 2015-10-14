package com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory;

import com.waoooh.crawler.analysis.creator.DefaultAbstractCreator;
import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.utils.TagUtils;

import java.util.Objects;

/**
 * Created by lulu on 15/9/8.
 */
public class DefaultEndTagFactory implements AnalysisFactory {

    @Override
    public Object make(Object[] objects) {

        TagDescription tagDescription = (TagDescription) objects[0];
        return TagUtils.getEndTag(tagDescription.getTagName());
    }

}
