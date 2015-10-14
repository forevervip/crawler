package com.waoooh.crawler.utils;

import com.waoooh.crawler.consts.Const;

/**
 * Created by lulu on 15/8/16.
 */
public class TagUtils {


    /**
     * 从一个tag的名称 获得tag的结束符
     *
     * @param tagStart
     * @return
     */
    public static String getEndTag(String tagStart) {

        StringBuilder sb = new StringBuilder();

        sb.append(Const.$LT);
        sb.append(Const.SLASH);
        sb.append(tagStart);
        sb.append(Const.$GT);
        return sb.toString();

    }

    /**
     * 简单返回一个>作为tag的结尾
     *
     * @return ">"
     */
    public static String getSimpleEndTag() {
        return Const.$GT;
    }


}
