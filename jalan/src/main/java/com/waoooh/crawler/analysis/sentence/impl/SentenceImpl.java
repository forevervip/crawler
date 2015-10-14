package com.waoooh.crawler.analysis.sentence.impl;

import com.waoooh.crawler.analysis.sentence.Sentence;

/**
 * Created by lulu on 15/9/8.
 */
public class SentenceImpl implements Sentence {

    private String pageContent;

    @Override
    public String getPageContent() {
        return pageContent;
    }

    @Override
    public void setLeftPageContent(String leftPageContent) {

    }

    @Override
    public String getLeftPageContent() {
        return null;
    }

    @Override
    public void setPageContent(String pageContent) {
        this.pageContent = pageContent;
    }
}
