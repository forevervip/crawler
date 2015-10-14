package com.waoooh.crawler.analysis.creator.factory.impl.srcfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.utils.TagUtils;

/**
 * Created by lulu on 15/9/12.
 */
public class SrcEndTagFactory implements AnalysisFactory {

    @Override
    public Object make(Object[] objects) {

        return TagUtils.getSimpleEndTag();
    }

}