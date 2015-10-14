package com.waoooh.crawler.page.tagchunk.identifier.detail;

import java.util.Objects;

/**
 * Created by lulu on 15/8/20.
 */
public interface SpecialCaseResolver {

    public Object getBlocker();

    public void addSegmentation(Segmentation segmentation);

    public void resolve(Object object);

    public String[] replaceReturn(Object object);
}
