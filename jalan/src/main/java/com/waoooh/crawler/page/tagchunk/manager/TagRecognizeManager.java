package com.waoooh.crawler.page.tagchunk.manager;

import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidSourceDefineException;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagDesciptionException;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagNameException;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagRecursiveDescriptionException;
import com.waoooh.crawler.utils.StrUtils;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by lulu on 15/8/17.
 */
public class TagRecognizeManager {


    /**
     * 获得[ddd:]开头的tag的名称。
     *
     * @param strChunk
     * @return
     */
    public static String getTagName(String strChunk) {

        String rtVal = "";

        if (!TagConst.ASTERISK.equals(strChunk.trim())) {

            if (strChunk.contains(Const.COLON)) {
                rtVal = StrUtils.getUntilFirst(strChunk, Const.COLON);
            } else if (strChunk.contains(Const.FULL_PERIOD)) {
                rtVal = StrUtils.getUntilFirst(strChunk, Const.FULL_PERIOD);
            }
            rtVal = StrUtils.replaceStrArrayByWhiteSpace(rtVal, new String[]{Const.LEFT_M_BRACKET});
        } else {
            rtVal = strChunk.trim();
        }


        if (!TagConst.containTag(rtVal)) {
            throw new InvalidTagNameException(rtVal + " is not supported!");
        }

        return rtVal;
    }


    /**
     * 获得description描述内容，获取相应的sourceMap。
     * 单独一个的场合调用一次，多个连续循环的场合递归调用。
     *
     * @param str
     * @return
     */
    public static void makeSourceMapIfRecursive(String str, TagDescription tagDescription) {

        Map<String, String> rtMap = new HashMap<>();

        // 找到得一个：or . 的位置，取得之后的内容，并且cut掉最后的］。
        String next = StrUtils.nextStr(str, Const.COLON,Const.FULL_PERIOD);
        
        String description = StrUtils.replaceStrArrayByWhiteSpace(
                StrUtils.cutUntilFirstAndOffset(str, next),
                new String[]{Const.RIGHT_M_BRACKET});

        TagDescription rawTagDescription = tagDescription;

        // 是否有 > 的判断
        if (description.indexOf(Const.$GT) >= 0) {

            String[] array = description.split(Const.$GT);

            for (int i = 0; i < array.length; i++) {

                String emDescription = array[i].trim();

                if (StrUtils.isEmpty(emDescription)) {
                    new InvalidTagRecursiveDescriptionException("recursive description grammar error!");
                }

                if (i == 0) {
                    makeDescriptionEntity(tagDescription, emDescription);
                    continue;
                }


                TagDescription des = TagDescriptionEntity.getInstance(emDescription).recognize();
                tagDescription.addNextChild(des);
                tagDescription = des;

            }


        } else {

            makeDescriptionEntity(tagDescription, description);

        }


    }

    /**
     * 没有循环的场合，只有唯一一个需要解析的场合。
     * 有循环的场合，第一个描述需要调用此方法.
     *
     * @param tagDescription
     * @param description
     */
    private static void makeDescriptionEntity(TagDescription tagDescription, String description) {
        //if (description.indexOf(Const.EQUAL) <= 0 || description.indexOf(Const.COMMA) < 0) {
        //    throw new InvalidTagDesciptionException("equal(=) or comma(,) count error, pls check rule grammar!");
        //}

        String[] arr = description.split(Const.EQUAL);
        if (null == arr) {
            throw new InvalidTagDesciptionException("split by equal(=) error!");
        }

        String key = "";
        String value = "";
        if (arr.length == 1) {
            if (SourceConst.containSource(arr[0])) {
                // goon

            } else {

                throw new InvalidSourceDefineException("can not find " + arr[0] + "in procedure!");

            }

        } else {

            value = StrUtils.replaceStrArrayByWhiteSpace(arr[1], new String[]{Const.QUOT});

        }


        key = StrUtils.replaceStrArrayByWhiteSpace(arr[0], new String[]{Const.QUOT});


        if (value.startsWith(Const.ASTERISK)) {
            tagDescription.setSearchStrategy(Const.$LIKE);
        } else if (value.endsWith(Const.ASTERISK)) {
            tagDescription.setSearchStrategy(Const.LIKE$);
        } else if (Const.WHITESPACE.equals(value)) {
            tagDescription.setSearchStrategy(Const.GET_SOURCE);
        } else {
            tagDescription.setSearchStrategy(Const.EQUAL);
        }

        Map<String, String> rtMap = new HashMap<>();

        rtMap.put(key, value);
        //tagDescription.setSourceMap(rtMap);
    }
}
