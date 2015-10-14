package com.waoooh.crawler.page.tagchunk.entity;

import com.sun.xml.internal.ws.api.ha.StickyFeature;

/**
 * Created by lulu on 15/8/19.
 */
public class SourceBean {

    public SourceBean(String sn, String sv, String sg) {
        this.sourceName = sn;
        this.sourceValue = sv;
        this.strategy = sg;
    }

    private String sourceName;

    private String sourceValue;

    private String strategy;

    public String getStrategy() {
        return strategy;
    }

    public void setStrategy(String strategy) {
        this.strategy = strategy;
    }

    public String getSourceName() {
        return sourceName;
    }

    public void setSourceName(String sourceName) {
        this.sourceName = sourceName;
    }

    public String getSourceValue() {
        return sourceValue;
    }

    public void setSourceValue(String sourceValue) {
        this.sourceValue = sourceValue;
    }

    public static SourceBean getInstance(String sn, String sv, String sg) {
        return new SourceBean(sn, sv, sg);
    }
}
