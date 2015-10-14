package com.waoooh.crawler.analysis.sentence;

/**
 * Created by lulu on 15/9/8.
 */
public interface Sentence {

    public void setPageContent(String pageContent);

    public String getPageContent();

    public void setLeftPageContent(String leftPageContent);

    public String getLeftPageContent();
}
