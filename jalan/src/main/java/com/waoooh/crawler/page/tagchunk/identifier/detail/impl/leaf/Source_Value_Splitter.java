package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.AbstractSplitter;

/**
 * Created by lulu on 15/8/19.
 */
public class Source_Value_Splitter extends AbstractSplitter {

    private static final String splitter = Const.EQUAL;

    @Override
    public String getS() {
        return splitter;
    }

    public Source_Value_Splitter(boolean force) {
        super.setForceExecute(force);
    }

    public static Segmentation getInstance(boolean force) {
        return new Source_Value_Splitter(force);
    }
}

