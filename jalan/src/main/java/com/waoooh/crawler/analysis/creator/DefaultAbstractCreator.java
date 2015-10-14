package com.waoooh.crawler.analysis.creator;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.page.tagchunk.TagDescription;

/**
 * Created by lulu on 15/9/4.
 */
public abstract class DefaultAbstractCreator implements Creator {


    /* grammar解析出来的tagDescription */
    private TagDescription tagDescription;

    /* html页面解析出来的结果Sentence */
    private Sentence sentence;

    /* start tag 解析用的factory */
    private AnalysisFactory defaultStartTagFactory;

    /* end tag 解析用的factory */
    private AnalysisFactory defaultEndTagFactory;

    /* raw result 分析用的factory */
    private AnalysisFactory defaultRawResultFactory;

    /* formatted result 分析用的factory */
    private AnalysisFactory defaultFormattedResultFactory;

    /******************************************************************************************************************/
    /******************************************************************************************************************/
    /******************************************************************************************************************/
    /******************************************************************************************************************/
    public void setStartTagFactory(AnalysisFactory startTagFactory) {
        this.defaultStartTagFactory = startTagFactory;
    }

    public void setEndTagFactory(AnalysisFactory endTagFactory) {
        this.defaultEndTagFactory = endTagFactory;
    }

    public void setRawResultFactory(AnalysisFactory rawResultFactory) {
        this.defaultRawResultFactory = rawResultFactory;
    }

    public void setFormattedFactory(AnalysisFactory formattedFactory) {
        this.defaultFormattedResultFactory = formattedFactory;

    }

    /******************************************************************************************************************/
    /******************************************************************************************************************/
    /******************************************************************************************************************/
    /******************************************************************************************************************/

    @Override
    public void setTagDescription(TagDescription tagDescription) {
        this.tagDescription = tagDescription;
    }

    @Override
    public void setSentence(Sentence sentence) {
        this.sentence = sentence;
    }

    @Override
    public Sentence getSentence() {
        return this.sentence;
    }

    @Override
    public Object getResult() {
        return buildFormattedResult_4();
    }

    @Override
    public Object buildStartTag_1() {

        return defaultStartTagFactory.make(this.tagDescription);

    }

    @Override
    public Object buildEndTag_2() {

        return defaultEndTagFactory.make(this.tagDescription);

    }

    @Override
    public Object buildRawResult_3() {

        return defaultRawResultFactory.make(this.sentence, buildStartTag_1(), buildEndTag_2(), this.tagDescription);

    }

    @Override
    public Object buildFormattedResult_4() {
        return defaultFormattedResultFactory.make(buildRawResult_3().toString(), this.tagDescription);
    }


}
