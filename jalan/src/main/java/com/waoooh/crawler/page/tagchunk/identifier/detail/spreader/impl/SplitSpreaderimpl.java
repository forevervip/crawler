package com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;

import java.util.List;

/**
 * Created by lulu on 15/8/23.
 */
public class SplitSpreaderimpl implements SplitSpreader {

    private List<String[]> splittedArray;

    private List<String> splitStr;

    private String newStr;

    private boolean splitStatus;

    private String s;

    @Override
    public List<String[]> getSplittedArray() {
        return this.splittedArray;
    }

    @Override
    public void setSplittedArray(List<String[]> list) {
        this.splittedArray = list;
    }

    @Override
    public List<String> getSplitStr() {
        return this.splitStr;
    }

    @Override
    public void setSplitStr(List<String> list) {
        this.splitStr = list;
    }

    @Override
    public boolean getSplitStatus() {
        return this.splitStatus;
    }

    @Override
    public void setSplitStatus(boolean status) {
        this.splitStatus = status;
    }

    @Override
    public void setS(String splitStr) {
        this.s = splitStr;
    }

    @Override
    public String getS() {
        return this.s;
    }

    public SplitSpreaderimpl(String newStr) {
        this.newStr = newStr;
        splitStr = Lists.newArrayList();
        splitStr.add(newStr);


    }


    public static SplitSpreader getInstance(String newStr) {
        return new SplitSpreaderimpl(newStr);
    }
}
