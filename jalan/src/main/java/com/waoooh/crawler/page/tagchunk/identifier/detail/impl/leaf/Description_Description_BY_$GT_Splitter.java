package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.AbstractSplitter;

/**
 * Created by lulu on 15/8/19.
 */
public class Description_Description_BY_$GT_Splitter extends AbstractSplitter {

    private static final String splitter = Const.$GT;

    @Override
    public String getS() {
        return splitter;
    }

    public Description_Description_BY_$GT_Splitter(boolean force) {
        super.setForceExecute(force);
    }

    public static Segmentation getInstance(boolean force) {
        return new Description_Description_BY_$GT_Splitter(force);
    }
}

