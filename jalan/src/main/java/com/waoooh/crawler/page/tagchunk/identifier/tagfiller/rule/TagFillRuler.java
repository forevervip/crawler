package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule;

import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;

/**
 * Created by lulu on 15/8/21.
 */
public interface TagFillRuler {

    public void beforeExecute();

    public void afterExecute();

    public FillBean execute(Object object, Object split);

    public int getIntRule();
}
