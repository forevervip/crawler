package com.waoooh.crawler.page.tagchunk.identifier.detail.stereotype;

import java.lang.annotation.*;

/**
 * Created by lulu on 15/8/19.
 */
@Retention(RetentionPolicy.CLASS)
@Target({ ElementType.TYPE})
@Documented
public @interface Order {

    String value();
}
