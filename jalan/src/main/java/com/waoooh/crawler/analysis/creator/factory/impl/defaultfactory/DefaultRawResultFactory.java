package com.waoooh.crawler.analysis.creator.factory.impl.defaultfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/9/8.
 */
public class DefaultRawResultFactory implements AnalysisFactory {

    /**
     * 利用startTag以及endTag进行卡取相应标签，获得标签体的内容。
     * 此时仅仅定位最大的外围标签，没有获得详细需要的内容。
     *
     * @param objects [0]Sentence实例 [1]startTag标签开头 [2]endTag 结尾标签
     * @return
     */
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
