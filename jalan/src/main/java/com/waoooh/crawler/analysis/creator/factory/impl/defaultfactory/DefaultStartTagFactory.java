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

    /**
     * 返回需要解析的开始的html的tag 如"<a href="abc" "
     * 但并不会对tag进行封口，开口状态，后面只需要 startwith的适配即可
     *
     * @param objects
     * @return
     */
    @Override
    public Object make(Object[] objects) {

        TagDescription tagDescription = (TagDescription) objects[0];

        // StringBuilder startTag = new StringBuilder();

        return AnalysisUtils.getDefaultStartTag(tagDescription);

    }

}
