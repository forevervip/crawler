package com.waoooh.crawler.analysis.creator;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.creator.factory.exception.AnalysisFactoryException;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.utils.StrUtils;
import com.waoooh.crawler.utils.TagUtils;

/**
 * Created by lulu on 15/9/4.
 */
public abstract class RecursionAbstractCreator implements Creator {


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


        boolean CAN_GET_DATA = true;

        // 获得网页的String数据
        String rawResult = sentence.getPageContent();

        // 需要传入TagDescription
        TagDescription tagDescription = this.tagDescription;

        do {

            if (!Const.ASTERISK.equals(tagDescription.getTagName())) {

                String start = (String) defaultStartTagFactory.make(tagDescription);

                String end = "";

                // 使用default的val或者 指定了使用val的场合

                if (StrUtils.isEmpty(tagDescription.getContent())) {

                    // get 普通的end tag
                    end = (String) defaultEndTagFactory.make(tagDescription, false);

                    // 设置为 rawFactory的调用
                    rawResult = (String) defaultRawResultFactory.make(rawResult, start, end);

                    if (StrUtils.isEmpty(rawResult)) {
                        CAN_GET_DATA = false;
                        break;
                    }


                } else {

                    if (tagDescription.hasNextChild()) {
                        throw new AnalysisFactoryException("Recursion factory invalid status for containing values at not end tag description.");
                    }


                }
//                } else {
//
//                    // 不是使用VAL，而是使用source中特有的标示进行读取的时候 如使用src, onclick 之类...
//                    // get simple end tag
//                    end = (String) defaultEndTagFactory.make(tagDescription, true);
//
//                    String sourceName = tagDescription.getContent();
//
//                    sourceName = sourceName.concat(Const.EQUAL).concat(Const.QUOT);
//
//                    // 设置为 rawFactory的调用
//                    rawResult = (String) defaultRawResultFactory.make(rawResult, start, end);
//
//                }


            }


            if (tagDescription.next() != null) {
                tagDescription = tagDescription.nextChild();
            } else {

                rawResult = (String) defaultFormattedResultFactory.make(tagDescription, rawResult);
                break;
            }


        } while (true);


        if (CAN_GET_DATA) {
            return rawResult;
        } else {
            return "";
        }

    }


}
