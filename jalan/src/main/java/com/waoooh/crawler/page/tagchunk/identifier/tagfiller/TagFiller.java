package com.waoooh.crawler.page.tagchunk.identifier.tagfiller;

import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;

/**
 * Created by lulu on 15/8/21.
 */
public interface TagFiller {

    public void fill(SplitSpreader spreader);

    public void setTagDescription(TagDescription description);

    public TagDescription getTagDescription();

    public void setRule(TagFillRuler ruler);


}
