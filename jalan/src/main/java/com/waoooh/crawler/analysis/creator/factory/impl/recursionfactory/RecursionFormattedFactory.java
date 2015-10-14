package com.waoooh.crawler.analysis.creator.factory.impl.recursionfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.analysis.sentence.impl.SentenceImpl;
import com.waoooh.crawler.analysis.util.AnalysisUtils;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.utils.TagUtils;

/**
 * Created by lulu on 15/9/13.
 */
public class RecursionFormattedFactory implements AnalysisFactory {

    @Override
    public Object make(Object... objects) {

        TagDescription tagDescription = (TagDescription) objects[0];
        String pageContent = (String) objects[1];

        Sentence sentence = new SentenceImpl();
        sentence.setPageContent(pageContent);

        //dt:*|val,dd:*|src 的解析
        //dt:class="vvv"|val,dd:name="aaa" id="123"|src 的解析

        while (tagDescription.hasNext()) {

            // 首先获得val的信息
            String middleValue = AnalysisUtils.getDefaultMiddleValue(sentence, tagDescription);





        }


        return null;
    }
}
