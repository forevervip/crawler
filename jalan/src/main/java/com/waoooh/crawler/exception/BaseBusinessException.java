package com.waoooh.crawler.exception;

/**
 * 全局可以捕获的继承Runtime的Exception
 *
 * Created by lulu on 15/8/16.
 */
public class BaseBusinessException extends RuntimeException {

    public BaseBusinessException(String str) {
        super(str);
    }

}
