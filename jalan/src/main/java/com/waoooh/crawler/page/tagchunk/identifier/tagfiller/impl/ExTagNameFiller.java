package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public class ExTagNameFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        // do nothing

    }

    public ExTagNameFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }


}
