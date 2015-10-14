package com.waoooh.crawler.consts;

import java.lang.reflect.Field;
import java.lang.reflect.Modifier;
import java.util.HashMap;
import java.util.Map;

/**
 * Created by lulu on 15/8/16.
 */
public class SourceConst {

    public static final String SRC = "src";
    public static final String VAL = "val";
    public static final String ONCLICK = "onclick";


    private static Map<String, String> srcMap = new HashMap<>();


    static {

        Field[] fields = SourceConst.class.getDeclaredFields();

        for (Field field : fields) {
            if (Modifier.isStatic(field.getModifiers()) && field.getType().equals(String.class)) {

                try {
                    srcMap.put(field.get(null).toString(), field.getName());
                } catch (IllegalAccessException e) {
                    e.printStackTrace();
                }
            }
        }

    }


    public static boolean containSource(String tag) {
        return srcMap.get(tag) != null;
    }

    public static void main(String... args) {

        String x = "";

        srcMap.isEmpty();


    }

}
