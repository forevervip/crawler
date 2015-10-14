package com.waoooh.crawler.page.tagchunk.identifier.detail.exception;

import com.waoooh.crawler.exception.BaseBusinessException;

/**
 * Created by lulu on 15/8/19.
 */
public class SplitterNotIncludedException extends BaseBusinessException {
    public SplitterNotIncludedException(String str) {
        super(str);
    }
}
