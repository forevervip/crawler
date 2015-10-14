package com.waoooh.crawler.page.tagchunk.identifier;

import com.waoooh.crawler.page.tagchunk.TagDescription;

/**
 * Created by lulu on 15/8/18.
 */
public interface DescriptionIdentifier {

    /**
     * 是否支持此类tag描述任务
     *
     * @return
     */
    public boolean isSupported(String description);

    /**
     * 进行Description的识别，转换为相应的TagDescription
     *
     * @param tagDescription
     */
    public void identify(TagDescription tagDescription, String description);
}
