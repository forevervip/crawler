package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.impl;

import com.waoooh.crawler.page.tagchunk.identifier.IdentifierConst;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.AbstractTagFillRuler;

/**
 * Created by lulu on 15/8/21.
 */
public class ALL_TagFillRuler extends AbstractTagFillRuler {


    private static final int rule = IdentifierConst.ALL;


    @Override
    public int getIntRule() {
        return rule;
    }
}
