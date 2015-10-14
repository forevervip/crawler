package com.waoooh.crawler.page.tagchunk.identifier.detail;

import java.util.List;

/**
 * Created by lulu on 15/8/19.
 */
public interface SplitterGroup extends Segmentation{

    public void setSegmentationList(List<Segmentation> list);

    public List<Segmentation> getSegmentationList();
}
