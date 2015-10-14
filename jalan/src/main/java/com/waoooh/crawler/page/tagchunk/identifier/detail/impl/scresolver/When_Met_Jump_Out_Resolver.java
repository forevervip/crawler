package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.scresolver;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.DescriptionIdentifier;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.SpecialCaseResolver;
import com.waoooh.crawler.page.tagchunk.identifier.detail.exception.SplitterNotIncludedException;
import com.waoooh.crawler.utils.StrUtils;

import java.util.Objects;
import java.util.WeakHashMap;

/**
 * Created by lulu on 15/8/20.
 */
@Deprecated
public class When_Met_Jump_Out_Resolver implements SpecialCaseResolver {

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
        this.segmentation.deleteNextSegmentation();
    }

    public When_Met_Jump_Out_Resolver(Object object) {
        this.blocker = (String) object;
    }

    @Override
    public String[] replaceReturn(Object object) {
        String str = (String) object;

        Segmentation segmentation = this.segmentation;

        if (!StrUtils.isEmpty(str)) {

            if (str.equals(getBlocker())) {
                resolve(null);
                return new String[]{getBlocker().toString()};
            } else {
                return str.split(segmentation.getS());
            }

        } else {
            throw new SplitterNotIncludedException("resolver can not handle the null or '' !");
        }


    }

    public static When_Met_Jump_Out_Resolver getInstance(Object ob) {
        return new When_Met_Jump_Out_Resolver(ob);
    }
}
