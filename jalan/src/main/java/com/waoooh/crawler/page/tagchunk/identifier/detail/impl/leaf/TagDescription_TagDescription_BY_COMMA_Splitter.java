package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.AbstractSplitter;

/**
 * Created by lulu on 15/8/19.
 */
public class TagDescription_TagDescription_BY_COMMA_Splitter extends AbstractSplitter {

    private static final String splitter = Const.COMMA;

    @Override
    public String getS() {
        return splitter;
    }

    public TagDescription_TagDescription_BY_COMMA_Splitter(boolean force) {
        super.setForceExecute(force);
    }

    public static Segmentation getInstance(boolean force) {
        return new TagDescription_TagDescription_BY_COMMA_Splitter(force);
    }
}

