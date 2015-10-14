package com.waoooh.crawler.page.tagchunk;

import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;

import java.util.List;
import java.util.Map;

/**
 * Created by lulu on 15/8/16.
 */
public interface TagDescription {

    public String getTagName();

    public void setTagName(String tagName);

    public List<SourceBean> getSourceBean();

    public void setSourceBeanList(List<SourceBean> bean);

    public String getSearchStrategy();

    public void setSearchStrategy(String strategy);

    public String getContent();

    public void setContent(String content);

    public String toString();

    public boolean hasNext();

    public boolean hasNextChild();

    public TagDescription next();

    public void addNext(TagDescription tagDescription);

    public TagDescription nextChild();

    public TagDescription addNextChild(TagDescription tagDescription);

    /**
     * 识别Tag的启动命令
     *
     * @return
     */
    public TagDescription recognize();

    public void setExceptBeanList(List<ExceptBean> exceptionBeanList);

    public List<ExceptBean> getExceptBeanList();

}
