package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.scresolver;

import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.SpecialCaseResolver;
import com.waoooh.crawler.page.tagchunk.identifier.detail.exception.SplitterNotIncludedException;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/8/20.
 */
@Deprecated
public class Ignore_NotMatch_Resolver implements SpecialCaseResolver {

    private Segmentation segmentation;

    private String blocker;

    @Override
    public Object getBlocker() {
        return this.blocker;
    }

    public void addSegmentation(Segmentation segmentation) {
        this.segmentation = segmentation;
    }

    @Override
    public void resolve(Object object) {
        this.blocker = (String) object;
    }

    public Ignore_NotMatch_Resolver(Object object) {
        this.blocker = (String) object;
    }

    @Override
    public String[] replaceReturn(Object object) {
        String str = (String) object;

        Segmentation segmentation = this.segmentation;

        if (!StrUtils.isEmpty(str)) {

            // 直接不需要切分，返回一个1个长度的单独数组回去即ignore了原来splitter的处理
            return new String[]{str};

        } else {
            throw new SplitterNotIncludedException("resolver can not handle the null or '' !");
        }


    }

    public static Ignore_NotMatch_Resolver getInstance(Object ob) {
        return new Ignore_NotMatch_Resolver(ob);
    }
}
