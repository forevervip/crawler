package com.waoooh.crawler.consts;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lulu on 15/8/16.
 */
public class TagConst {

    public static final String TD = "td";

    public static final String DIV = "div";

    public static final String IMG = "img";

    public static final String ASTERISK = "*";

    public static final String SCOPE_ALL = "all";

    public static final String SCOPE_TAG = "tag";



    private static Map<String, String> tagMap = new HashMap<>();



    static {

        Field[] fields = TagConst.class.getDeclaredFields();

        for (Field field : fields) {
            if (Modifier.isStatic(field.getModifiers()) && field.getType().equals(String.class)) {

                try {
                    tagMap.put(field.get(null).toString(), field.getName());
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        }

    }


    public static boolean containTag(String tag) {
        return tagMap.get(tag) != null;
    }

    public static void main(String... args) {

        String x = "";

        tagMap.isEmpty();


    }

}
