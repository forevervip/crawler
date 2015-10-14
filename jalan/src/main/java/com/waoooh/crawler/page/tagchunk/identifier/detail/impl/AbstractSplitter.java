package com.waoooh.crawler.page.tagchunk.identifier.detail.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.SpecialCaseResolver;
import com.waoooh.crawler.page.tagchunk.identifier.detail.spreader.SplitSpreader;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.exception.DuplicateResolverAndForceException;
import com.waoooh.crawler.page.tagchunk.identifier.detail.exception.SplitterNotIncludedException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.TagFiller;
import com.waoooh.crawler.utils.StrUtils;
import sun.security.provider.ConfigFile;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by lulu on 15/8/19.
 */
public abstract class AbstractSplitter implements Splitter {

    private Segmentation nextSegmentation;

    private SpecialCaseResolver resolver;

    private boolean recursionExceptFlag = false;

    private TagFiller filler;

    private TagDescription description;

    private boolean isForceSplit = false;

    private SplitSpreader grammarSpreader;

    @Override
    public void setNextSegmentation(Segmentation segmentation) {
        this.nextSegmentation = segmentation;
    }

    @Override
    public Segmentation getNextSegmentation() {
        return this.nextSegmentation;
    }

    @Override
    public Segmentation $(Segmentation segmentation) {
        this.nextSegmentation = segmentation;
        if (this.recursionExceptFlag) {
            this.nextSegmentation.exceptAll(this.resolver);
        }

        if (this.description != null) {
            this.nextSegmentation.RTD(this.description);
        }

        return this.nextSegmentation;
    }

    @Override
    public SplitSpreader split(SplitSpreader spreader) {

        this.grammarSpreader = spreader;

        spreader.setS(getS());

        if (isForceSplit && resolver != null) {
            throw new DuplicateResolverAndForceException("isForce is set so SpecialResolver should not be set !");
        }


        List<String> listStr = grammarSpreader.getSplitStr();

        List<String[]> listStrArray = new ArrayList<>();

        for (String str : listStr) {

            if (resolver == null) {

                // 防止出现trim不足的场合 如果有是用space进行split的话 则会出现错误。
                str = str.trim();

                // TODO contains 这里需要是smartSplit的contains的方式才可以 需要修改
                if (str.contains(getS())) {

                    // 核心的split部分 采用java自己的split有时候无法解决一些拆分的splitter 如 “|”
                    // listStrArray.add((str.split(getS())));
                    // 采用smart split
                    //listStrArray.add(StrUtils.split(str, getS()));

                    // 如果需要进行一些format的话 在子类中进行处理
                    str = beforeSplit(str);

                    // 采用自定义的smartSplit进行切分
                    listStrArray.add(StrUtils.smartSplit(str, getS()));

                    grammarSpreader.setSplitStatus(true);
                } else {

                    if (isForceSplit) {
                        throw new SplitterNotIncludedException(getS() + " is not included in the " + str);
                    } else {

                        // 如果没有splitter的场合  而且又不是强制进行split的场合 直接返回由str组成的单一string的数组
                        // 此数组只有String[0]的一个项目返回，后面处理的时候需要考虑不要有数组越界的情况。
                        listStrArray.add(new String[]{str});
                        grammarSpreader.setSplitStatus(false);

                    }
                }
            } else {

                listStrArray.add(resolver.replaceReturn(str));

                // TODO
                grammarSpreader.setSplitStatus(true);
            }

        }

        grammarSpreader.setSplittedArray(listStrArray);

        return grammarSpreader;


    }

    @Override
    public Segmentation next() {
        return nextSegmentation;
    }

    @Override
    public boolean isSupported(String str) {
        return str.contains(getS());
    }

    @Override
    public Segmentation except(SpecialCaseResolver resolver) {
        this.resolver = resolver;
        resolver.addSegmentation(this);
        return this;
    }

    @Override
    public Segmentation exceptAll(SpecialCaseResolver resolver) {
        this.resolver = resolver;
        this.recursionExceptFlag = true;
        resolver.addSegmentation(this);

        return this;
    }

    @Override
    public boolean isSplitterValid() {
        return false;
    }

    @Override
    public boolean hasNext() {
        return nextSegmentation != null;
    }

    @Override
    public void deleteNextSegmentation() {
        this.nextSegmentation = null;
    }

    @Override
    public Segmentation setTagFiller(TagFiller filler) {
        this.filler = filler;
        return this;
    }

    @Override
    public SplitSpreader executeFill(SplitSpreader spreader) {

        //filler.setFilledObject(description);

        this.split(spreader);

        if (this.filler != null) {
            // filler 中是用的TagDescription需要从此处传递
            this.filler.setTagDescription(this.description);


            this.filler.fill(grammarSpreader);


            if (this.nextSegmentation != null) {
                //this.nextSegmentation.setNextSpreader(grammarSpreader);
                this.nextSegmentation.executeFill(grammarSpreader);
            }


        }

        return grammarSpreader;

    }

    @Override
    public Segmentation RTD(TagDescription description) {
        this.description = description;

        // 增加在RTD的时候需要对子链的description的插入
        if (nextSegmentation != null) {
            nextSegmentation.RTD(description);
        }

        return this;
    }

    @Override
    public void setForceExecute(boolean isForce) {
        this.isForceSplit = isForce;
    }

    @Override
    public void setNextSpreader(SplitSpreader spreader) {
        this.grammarSpreader = spreader;
    }


    protected String beforeSplit(String str) {
        return str;
    }
}
