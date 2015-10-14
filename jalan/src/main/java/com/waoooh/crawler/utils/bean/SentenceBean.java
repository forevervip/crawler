package com.waoooh.crawler.utils.bean;

/**
 * Created by yanglu on 2015/8/14.
 */
public class SentenceBean implements IProcessStrBean {

    private String sentence;


    public void setSentence(String sentence) {
        this.sentence = sentence;
    }

    public String getSentence() {

        return sentence;
    }

    @Override
    public void setValue(String ob) {
        this.sentence = ob;

    }


    @Override
    public void refresh() {

    }

    @Override
    public String getValue() {
        return this.sentence;
    }
}
