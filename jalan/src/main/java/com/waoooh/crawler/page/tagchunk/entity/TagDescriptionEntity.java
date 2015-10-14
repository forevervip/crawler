package com.waoooh.crawler.page.tagchunk.entity;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;
import com.waoooh.crawler.page.tagchunk.manager.TagRecognizeManager;
import com.waoooh.crawler.page.tagchunk.manager.TagRecognizeManagerV2;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;
import java.util.Map;

/**
 * Created by lulu on 15/8/16.
 */
public class TagDescriptionEntity implements TagDescription {

    private boolean skipMode;

    /* html标签的tag名称 */
    private String tagName;

    /* 包含的source的key value内容 */
    private List<SourceBean> sourceBeans;

    /* sourceBean中的strategy为主要使用 */
    private String searchStrategy;

    /* 标签内的全部内容 作为下一个标签识别的输入 也可以时val的内容 */
    private String description;

    /* 此标签需要获得的内容的存储 */
    private String content;

    /* 下一个同级标签 */
    private TagDescription nextDescription;

    /* 下一个子标签 */
    private TagDescription nextChildDescription;

    private List<ExceptBean> exceptBeans;

    @Override
    public String getTagName() {
        return this.tagName;
    }

    @Override
    public void setTagName(String tagName) {
        this.tagName = tagName;
    }

    @Override
    public List<SourceBean> getSourceBean() {
        return this.sourceBeans;
    }

    @Override
    public void setSourceBeanList(List<SourceBean> beans) {
        this.sourceBeans = beans;
    }

    @Override
    public String getSearchStrategy() {
        return this.searchStrategy;
    }

    @Override
    public void setSearchStrategy(String strategy) {
        this.searchStrategy = strategy;
    }

    @Override
    public String getContent() {
        return this.content;
    }

    @Override
    public void setContent(String content) {
        this.content = content;
    }

    @Override
    public boolean hasNext() {
        return nextDescription != null;
    }

    @Override
    public boolean hasNextChild() {
        return nextChildDescription != null;
    }

    @Override
    public TagDescription next() {
        return nextDescription;
    }

    @Override
    public TagDescription nextChild() {
        return nextChildDescription;
    }

    @Override
    public TagDescription addNextChild(TagDescription tagDescription) {
        this.nextChildDescription = tagDescription;
        return this.nextChildDescription;
    }

    public TagDescriptionEntity(String description) {
        this.description = description;
    }

    @Override
    public void addNext(TagDescription tagDescription) {
        this.nextDescription = tagDescription;
    }


    /**
     * 识别tag的内容，读取到TagDescription中去
     *
     * @return
     */
    @Override
    public TagDescription recognize() {

        //this.tagName = TagRecognizeManager.getTagName(this.description);

        if (this.description.startsWith(Const.LEFT_M_BRACKET) && this.description.endsWith(Const.RIGHT_M_BRACKET)) {
            this.description = StrUtils.replaceStrArrayByWhiteSpace(this.description,
                    StrUtils.newArr(Const.LEFT_M_BRACKET, Const.RIGHT_M_BRACKET));
        } else {
            // TODO
            throw new RuntimeException();
        }

        if (!TagConst.ASTERISK.equals(tagName)) {
            TagRecognizeManagerV2.makeRecognize(this, this.description);
        }
        return this;
    }

    @Override
    public void setExceptBeanList(List<ExceptBean> exceptionBeanList) {
        this.exceptBeans = exceptionBeanList;
    }

    @Override
    public List<ExceptBean> getExceptBeanList() {
        return this.exceptBeans;
    }


    public static TagDescription getInstance(String str) {

        return new TagDescriptionEntity(str);
    }

    public static void main(String... args) {

        //String str = "[td:class=\"s12_33b*\" name=\"*lulucway\"/val]";

        //String str = "[#div:class=\"hotel-picture\" href=\"123*\" > div:class=\"sub2\" > * > img:*|src]";

        //String str = "[a:href=\"#\,dd:class="def"|val"&onClick=\"javascript:selectpage\"|val(ex={span.all,a.tag})]";

        //String str = "[li:data-locate=\"hotel-access\"|val]";
        //String str = "[dt:*|val(ex={span.all,a.tag}),dd:*|val]";
        String str = "[#d1:class=\"abc\" href=\"link\" > * > d3:class=\"123\"|val(ex={span.all,a.tag}),d4:class=\"456\"|src(ex={tr.all,td.tag})]";

        TagDescription des = TagDescriptionEntity.getInstance(str).recognize();
        //TagDescription des = TagDescriptionEntity.getInstance("div:class=\"hotel-picture\" > div:class=\"main\" > * > img.src").recognize();

        String x = "";

    }


}
