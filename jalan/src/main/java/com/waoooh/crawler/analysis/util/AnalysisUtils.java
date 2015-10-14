package com.waoooh.crawler.analysis.util;

import com.waoooh.crawler.analysis.creator.factory.exception.AnalysisFactoryException;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.utils.StrUtils;
import com.waoooh.crawler.utils.TagUtils;

/**
 * Created by lulu on 15/9/9.
 */
public class AnalysisUtils {

    /**
     * 去除exceptBean中的标示的需要去除的标签信息
     *
     * @param exceptBean
     * @param rawResult
     * @return
     */
    public static String removeExValue(ExceptBean exceptBean, String rawResult) {

        String content = null;

        String tag = "";
        String end = "";

        // TODO 需要check一这个scope是否正确
        if (TagConst.SCOPE_ALL.equals(exceptBean.getScope())) {

            // 如果scope 是 all的场合，那么结束的tag End 应该是 </xx>的完成tag结束符
            end = Const.$LT.concat(Const.SLASH).concat(exceptBean.getTagName()).concat(Const.$GT);

        } else {

            // 如果scope 不是all的场合，那么结束符直接是一个>
            end = TagUtils.getSimpleEndTag();

        }

        do {

            // 获得tag的开始
            tag = Const.$LT.concat(exceptBean.getTagName());

            // 获得包括tag开头结尾的所有的内容
            content = StrUtils.getBetweenStr(true,
                    rawResult, tag, end);

            // 去除掉取得的content的内容 从rawResult中
            rawResult = StrUtils.replaceStrArrayByWhiteSpace(rawResult, new String[]{content});

            // 如果是scope ＝ tag的场合，则需要继续删除 </xx>的tag的结束符
            if (TagConst.SCOPE_TAG.equals(exceptBean.getScope())) {

                rawResult = StrUtils.replaceStrArrayByWhiteSpace(rawResult,
                        new String[]{Const.$LT.concat(Const.SLASH).concat(exceptBean.getTagName().concat(Const.$GT))});
            }

        } while (rawResult.contains(tag));

        return rawResult;
    }


    /**
     * 通过TagDescription获得start tag
     *
     * @param tagDescription
     * @return
     */
    public static String getDefaultStartTag(TagDescription tagDescription) {

        StringBuilder startTag = new StringBuilder();

        // 添加"<"
        startTag.append(Const.$LT);

        // Get Tag Name
        String tagName = tagDescription.getTagName();

        if (StrUtils.isEmpty(tagName)) {
            throw new InvalidDescriptionException("TagName is null or ''! ");
        }
        // + <a
        startTag.append(tagName);

        // + space
        startTag.append(Const.ONE_SPACE);

        String source = "";

        StringBuilder sb = new StringBuilder();

        // 看一下sourceBean是否有数据
        if (tagDescription.getSourceBean() != null) {

            for (SourceBean bean : tagDescription.getSourceBean()) {
                sb.append(bean.getSourceName());
                sb.append(Const.EQUAL);
                sb.append(Const.QUOT);
                sb.append(bean.getSourceValue());
                if (Const.EQUAL.equals(bean.getStrategy())) {
                    sb.append(Const.QUOT);
                }
                sb.append(Const.ONE_SPACE);
            }

            source = StrUtils.cutDownTail(sb.toString(), 1);

            startTag.append(source);

        }

        return startTag.toString();
    }


    /**
     * 利用TagDescription 直接获得需要start 和 end的夹击的VAL的内容
     *
     * @param sentence
     * @param tagDescription
     * @return
     */
    public static String getDefaultMiddleValue(Sentence sentence, TagDescription tagDescription) {

        String start = AnalysisUtils.getDefaultStartTag(tagDescription);
        String end = TagUtils.getEndTag(tagDescription.getTagName());

        String rawResult = null;
        if (SourceConst.VAL.equals(tagDescription.getContent())) {
            // 直接利用startTag和endTag进行内容的卡取
            rawResult = StrUtils.
                    getBetweenStrByTagStyle(
                            true,
                            sentence.getPageContent(),
                            start,
                            end,
                            true);

            sentence.setPageContent(sentence.getPageContent().replace(rawResult, Const.WHITESPACE));

            return rawResult.replace(start, Const.WHITESPACE).replace(end, Const.WHITESPACE);
        } else {
            throw new AnalysisFactoryException("Can not analysis tag description by |AnalysisUtils.getDefaultMiddleValue|");
        }

    }

    /**
     * 利用TagDescription 直接获得需要start 和 end的夹击的src的内容
     *
     * @param sentence
     * @param tagDescription
     * @return
     */
    public static String getDefaultMiddleSrc(Sentence sentence, TagDescription tagDescription) {

        String start = AnalysisUtils.getDefaultStartTag(tagDescription);
        String end = TagUtils.getSimpleEndTag();

        String rawResult = null;
        if (!SourceConst.VAL.equals(tagDescription.getContent()) && !Const.WHITESPACE.equals(tagDescription.getContent())) {

            StringBuilder sbStart = new StringBuilder(tagDescription.getContent());
            // append 等号
            sbStart.append(Const.EQUAL);
            // append 引号
            sbStart.append(Const.QUOT);

            String result = StrUtils.getBetweenStr(false, rawResult, sbStart.toString(), Const.QUOT);

            sentence.setPageContent(sentence.getPageContent().
                    replace(StrUtils.getBetweenStrByTagStyle(true, sentence.getPageContent(), start, end, true),
                            Const.WHITESPACE));

            return result;
        } else {
            throw new AnalysisFactoryException("Can not analysis tag description by |AnalysisUtils.getDefaultMiddleSrc|");
        }

    }

}
