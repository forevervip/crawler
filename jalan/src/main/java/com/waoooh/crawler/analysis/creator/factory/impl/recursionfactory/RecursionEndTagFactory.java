package com.waoooh.crawler.analysis.creator.factory.impl.recursionfactory;


import com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory.DefaultEndTagFactory;
import com.waoooh.crawler.utils.TagUtils;

/**
 * Created by lulu on 15/9/13.
 */
public class RecursionEndTagFactory extends DefaultEndTagFactory {

    @Override
    public Object make(Object... objects) {

        boolean flag = (boolean) objects[1];

        if (!flag) {
            return super.make(objects);
        } else {

            return TagUtils.getSimpleEndTag();


        }

    }
}
