package com.waoooh.crawler.properties;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

/**
 * Created by lulu on 15/8/29.
 */
public class PropertyHolder {

    private static Properties ruleProps = new Properties();

    public static Properties getPro() {
        return ruleProps;

    }

    static {
        try {
            ruleProps.load(Thread.currentThread().getContextClassLoader().getResourceAsStream("jalan.rule.properties"));
        } catch (FileNotFoundException e) {
            throw new RuntimeException(".properties not found");
        } catch (IOException e) {
            throw new RuntimeException(".properties file error");
        }
    }

}
