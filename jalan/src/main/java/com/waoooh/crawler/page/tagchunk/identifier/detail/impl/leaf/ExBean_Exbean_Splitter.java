package com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.AbstractSplitter;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/8/19.
 */
public class ExBean_Exbean_Splitter extends AbstractSplitter {

    private static final String splitter = Const.COMMA;

    @Override
    public String getS() {
        return splitter;
    }

    public ExBean_Exbean_Splitter(boolean force) {
        super.setForceExecute(force);
    }

    public static Segmentation getInstance(boolean force) {
        return new ExBean_Exbean_Splitter(force);
    }


    /**
     * 去除头尾的大括号
     *
     * @param str
     * @return
     */
    @Override
    public String beforeSplit(String str) {

        if (str.startsWith(Const.LEFT_B_BRACKET) && str.endsWith(Const.RIGHT_B_BRACKET)) {
            str = StrUtils.cutDownHeadAndTail(str, 1);
        }

        return str;


    }
}

