package com.waoooh.crawler.page.tagchunk.identifier.detail;

import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.TagFiller;

/**
 * Created by lulu on 15/8/19.
 */
public interface Segmentation {

    public String getS();

    public SplitSpreader split(SplitSpreader spreader);

    public boolean isSplitterValid();

    public void setNextSegmentation(Segmentation nextSegmentation);

    public Segmentation getNextSegmentation();

    public Segmentation $(Segmentation segmentation);

    public void deleteNextSegmentation();

    public Segmentation next();

    public boolean isSupported(String str);

    public boolean hasNext();

    public Segmentation except(SpecialCaseResolver resolver);

    public Segmentation exceptAll(SpecialCaseResolver resolver);

    public void setForceExecute(boolean isForce);

    public Segmentation RTD(TagDescription description);

    public Segmentation setTagFiller(TagFiller filler);

    public SplitSpreader executeFill(SplitSpreader spreader);

    public void setNextSpreader(SplitSpreader spreader);




}
