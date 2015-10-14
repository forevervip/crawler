package com.waoooh.crawler.page.tagchunk.identifier.tagfiller;

import com.google.common.collect.Lists;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;

import java.util.List;

/**
 * Created by lulu on 15/8/21.
 */
public abstract class AbstractTagFiller implements TagFiller {

    private TagDescription tagDescription;
    public TagFillRuler ruler;

    @Override
    public void fill(SplitSpreader spreader) {


        List<String[]> arrList = spreader.getSplittedArray();

        FillBean val = null;

        if (spreader.getSplitStatus()) {
            val = ruler.execute(arrList, spreader.getS());
            execute(val);
        } else {
            val = new FillBean();
            turnArrToStr(val, spreader);
        }


        spreader.setSplitStr(val.getOutOfUse());

    }

    @Override
    public void setTagDescription(TagDescription description) {
        this.tagDescription = description;
    }

    @Override
    public void setRule(TagFillRuler ruler) {

        this.ruler = ruler;

    }

    protected void execute(FillBean val) {
        // to be override
    }

    @Override
    public TagDescription getTagDescription() {
        return this.tagDescription;
    }


    private void turnArrToStr(FillBean bean, SplitSpreader spreader) {

        List<String[]> arrList = spreader.getSplittedArray();

        List<String> strList = Lists.newArrayList();

        String x = ((String[]) arrList.get(0))[0];

        strList.add(x);

        bean.setOutOfUse(strList);

    }
}
