package com.waoooh.crawler.analysis.director.impl;

import com.waoooh.crawler.analysis.creator.Creator;
import com.waoooh.crawler.analysis.director.Director;

/**
 * Created by lulu on 15/9/12.
 */
public class DefaultDirector implements Director {

    private Creator creator;

    @Override
    public void direct() {

    }

    public DefaultDirector(Creator creator) {
        this.creator = creator;
    }

    public static void main(String... args) {


    }
}
