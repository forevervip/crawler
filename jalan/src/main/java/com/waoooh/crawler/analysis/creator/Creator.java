package com.waoooh.crawler.analysis.creator;

import com.sun.tools.javac.tree.JCTree;
import com.waoooh.crawler.analysis.sentence.Sentence;
import com.waoooh.crawler.page.tagchunk.TagDescription;

import java.util.Objects;

/**
 * Created by lulu on 15/9/4.
 */
public interface Creator {


    public Object getResult();

    public Object buildStartTag_1();

    public Object buildEndTag_2();

    public Object buildRawResult_3();

    public Object buildFormattedResult_4();

    public void setTagDescription(TagDescription description);

    public void setSentence(Sentence sentence);

    public Sentence getSentence();


}
