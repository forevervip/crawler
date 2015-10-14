package com.waoooh.crawler.analysis.creator.factory.impl.srcfactory;

import com.waoooh.crawler.analysis.creator.factory.AnalysisFactory;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.utils.StrUtils;

/**
 * Created by lulu on 15/9/12.
 */
public class SrcFormattedResultFactory implements AnalysisFactory {


    @Override
    public Object make(Object[] objects) {

        // 取得前面截取的内容
        String rawResult = (String) objects[0];

        // 取得解析来的TagDescription
        TagDescription tagDescription = (TagDescription) objects[1];

        // 查找到需要匹配的src标签
        // div:name="123"|img
        // 关键任务是匹配tag中的 标签为提示标签名称的内容,默认应该没有多个的
        // 使用“只匹配第一个出现的关键字“逻辑即可，
        StringBuilder sbStart = new StringBuilder(tagDescription.getContent());
        // append 等号
        sbStart.append(Const.EQUAL);
        // append 引号
        sbStart.append(Const.QUOT);

        String result = StrUtils.getBetweenStr(false, rawResult, sbStart.toString(), Const.QUOT);

        return result;
    }
}
