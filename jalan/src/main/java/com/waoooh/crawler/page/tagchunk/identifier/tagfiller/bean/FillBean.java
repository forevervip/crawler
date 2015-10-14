package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public class FillBean {

    List<String> inUse;

    List<String> outOfUse;

    List<String[]> rawNeverFormatted;

    public List<String[]> getRawNeverFormatted() {
        return rawNeverFormatted;
    }

    public void setRawNeverFormatted(List<String[]> rawNeverFormatted) {
        this.rawNeverFormatted = rawNeverFormatted;
    }

    public List<String> getInUse() {
        return inUse;
    }

    public void setInUse(List<String> inUse) {
        this.inUse = inUse;
    }

    public List<String> getOutOfUse() {
        return outOfUse;
    }

    public void setOutOfUse(List<String> outOfUse) {
        this.outOfUse = outOfUse;
    }
}
