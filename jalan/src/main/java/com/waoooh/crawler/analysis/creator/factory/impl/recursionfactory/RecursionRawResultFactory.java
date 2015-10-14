package com.waoooh.crawler.analysis.creator.factory.impl.recursionfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.utils.StrUtils;

import java.util.Objects;

/**
 * Created by lulu on 15/9/13.
 */
public class RecursionRawResultFactory implements AnalysisFactory {

    @Override
    public Object make(Object... objects) {

        // 参数1 为Sentence
        String pageContent = (String) objects[0];

        // 参数2 为StartTag
        String startTag = (String) objects[1];

        // 参数3 为EndTag
        String endTag = (String) objects[2];

        // 直接利用startTag和endTag进行内容的卡取
        // 获得的时候采用保留头尾start和end的方式进行截取
        String rawResult = StrUtils.
                getBetweenStrByTagStyle(
                        true,
                        pageContent,
                        startTag,
                        endTag,
                        true);

        return rawResult;
    }
}
