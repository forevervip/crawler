package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.AbstractSplitter;
import org.apache.http.annotation.ThreadSafe;
import sun.plugin2.os.windows.SECURITY_ATTRIBUTES;

/**
 * Created by lulu on 15/8/19.
 */
public class Tag_Description_Splitter extends AbstractSplitter {

    private static final String splitter = Const.COLON;

    private int exactLocation;

    @Override
    public String getS() {
        return splitter;
    }

    public Tag_Description_Splitter(boolean force) {
        super.setForceExecute(force);
    }

    public static Segmentation getInstance(boolean force) {
        return new Tag_Description_Splitter(force);
    }


}

