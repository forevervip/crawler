package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.identifier.IdentifierConst;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.AbstractTagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.exception.InvalidRuleException;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/8/21.
 */
public class Front_TagFillRuler extends AbstractTagFillRuler {


    private static final int rule = IdentifierConst.ARRS_1;


    @Override
    public int getIntRule() {
        return rule;
    }
}
