package com.waoooh.crawler.utils;

import org.omg.CosNaming.NamingContextExtPackage.StringNameHelper;

/**
 * Created by yanglu on 2015/8/14.
 */
public class Test {

    public static void main(String... args) {

        String str = "\"大阪東部(寝屋川・守口・門真・東大阪)\",\"273500\",((\"東大阪";

        System.out.println(getIndexAfter(str));

    }


    private static int getIndexAfter(String str) {

        int from = str.indexOf(",", str.indexOf(",") + 1);

        int seco = str.indexOf("(", from);

        int seco2 = str.indexOf(")", from);

        if (seco < 0 && seco2 < 0) {
            return -1;
        } else {
            if ((seco < seco2) && seco >= 0) {
                return seco;
            } else {
                return seco2;
            }
        }

    }

}
