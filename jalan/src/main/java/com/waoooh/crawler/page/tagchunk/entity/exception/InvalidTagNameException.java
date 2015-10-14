package com.waoooh.crawler.page.tagchunk.entity.exception;

import com.waoooh.crawler.exception.BaseBusinessException;

/**
 * Created by lulu on 15/8/17.
 */
public class InvalidTagNameException extends BaseBusinessException {

    public InvalidTagNameException(String str) {
        super(str);
    }
}
