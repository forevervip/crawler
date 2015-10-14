package com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/9/8.
 */
public class DefaultRawResultFactory implements AnalysisFactory {

    @Override
    public Object make(Object[] objects) {

        Sentence sentence = (Sentence) objects[0];
        String startTag = (String) objects[1];
        String endTag = (String) objects[2];

        // 直接利用startTag和endTag进行内容的卡取
        String rawResult = StrUtils.
                getBetweenStrByTagStyle(
                        false,
                        sentence.getPageContent(),
                        startTag,
                        endTag,
                        true);


        return rawResult;
    }

}
