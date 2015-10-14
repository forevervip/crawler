package com.waoooh.crawler.analysis.creator.impl;

import com.waoooh.crawler.analysis.creator.DefaultAbstractCreator;
import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.page.tagchunk.TagDescription;


import java.util.List;

/**
 * Created by lulu on 15/9/4.
 */
public class ValCreatorImpl extends DefaultAbstractCreator {

    public ValCreatorImpl(AnalysisFactory startTagF,
                          AnalysisFactory endTagF,
                          AnalysisFactory rawResultF,
                          AnalysisFactory formattedResultF,
                          TagDescription tagDescription,
                          Sentence sentence) {

        // Factory 设置
        super.setStartTagFactory(startTagF);
        super.setEndTagFactory(endTagF);
        super.setRawResultFactory(rawResultF);
        super.setFormattedFactory(formattedResultF);

        // description和Sentence设置
        super.setTagDescription(tagDescription);
        super.setSentence(sentence);
    }

}
