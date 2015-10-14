package com.waoooh.crawler.page.tagchunk.identifier.detail.spreader;

import java.util.List;

/**
 * Created by lulu on 15/8/22.
 */
public interface SplitSpreader {

    public List<String[]> getSplittedArray();

    public void setSplittedArray(List<String[]> list);

    public List<String> getSplitStr();

    public void setSplitStr(List<String> list);

    public boolean getSplitStatus();

    public void setSplitStatus(boolean status);

    public void setS(String splitStr);

    public String getS();

}
