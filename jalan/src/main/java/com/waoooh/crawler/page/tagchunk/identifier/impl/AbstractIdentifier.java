package com.waoooh.crawler.page.tagchunk.identifier.impl;

import com.waoooh.crawler.page.tagchunk.identifier.DescriptionIdentifier;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/8/19.
 */
public abstract class AbstractIdentifier implements DescriptionIdentifier {

    private static final int COUNT_CHECK = 2;

    protected static final boolean FORCE = true;
    protected static final boolean OPTIONAL = false;

    protected boolean OK(String[] arrays) {
        return StrUtils.isArrayLegal(arrays, COUNT_CHECK);
    }

}
