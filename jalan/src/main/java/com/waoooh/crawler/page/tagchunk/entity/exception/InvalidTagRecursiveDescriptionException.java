package com.waoooh.crawler.page.tagchunk.entity.exception;

import com.waoooh.crawler.exception.BaseBusinessException;

/**
 * Created by lulu on 15/8/17.
 */
public class InvalidTagRecursiveDescriptionException extends BaseBusinessException {

    public InvalidTagRecursiveDescriptionException(String str) {
        super(str);
    }
}
