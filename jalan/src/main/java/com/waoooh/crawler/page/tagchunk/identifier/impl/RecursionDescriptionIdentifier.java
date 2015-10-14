package com.waoooh.crawler.page.tagchunk.identifier.impl;

import com.sun.tools.doclets.formats.html.SourceToHTMLConverter;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.identifier.DescriptionIdentifier;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.SpecialCaseResolver;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Content_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Description_BY_$GT_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Source_Value_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Tag_Description_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.scresolver.Ignore_NotMatch_Resolver;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.scresolver.When_Met_Jump_Out_Resolver;
import com.waoooh.crawler.utils.StrUtils;
import sun.text.resources.no.CollationData_no;

/**
 * Created by lulu on 15/8/19.
 */
public class RecursionDescriptionIdentifier extends AbstractIdentifier {
    /**
     * 是否支持此类tag描述任务
     *
     * @param description
     * @return
     */
    @Override
    public boolean isSupported(String description) {

        // 去除中括号
        String localDescription = StrUtils.cutDownHeadAndTail(description, 1);

        // 递归模式
        if (localDescription.startsWith(Const.SHARP)) {

            return true;

        }

        return false;
    }

    /**
     * 进行Description的识别，转换为相应的TagDescription。
     * 需要循环解析的场合，处理中需要考虑周全。
     *
     * @param tagDescription
     * @param description
     */
    @Override
    public void identify(TagDescription tagDescription, String description) {

//        Segmentation splitter = Description_Description_BY_$GT_Splitter.getInstance();
//
//        // 加入一个scResolver
//        SpecialCaseResolver met_asteristk_and_not_continue_resolver = When_Met_Jump_Out_Resolver.getInstance(Const.ASTERISK);
//
//        SpecialCaseResolver ignore_Resolver = Ignore_NotMatch_Resolver.getInstance(null);
//
//        String[] arrs = splitter.split(description, FORCE);
//
//        Segmentation fromSplitter = splitter;
//
//        splitter.$(Tag_Description_Splitter.getInstance())
//                // 直接遇到＊的场合跳过处理
//                .except(met_asteristk_and_not_continue_resolver).
//
//                $(Description_Content_Splitter.getInstance())
//                // 用 ｜ 来切 description和content ，遇到没有｜ 的场合利用resolver跳过
//                .except(ignore_Resolver)
//
//                .$(Source_Value_Splitter.getInstance())
//                .except(met_asteristk_and_not_continue_resolver);
//
//        // Tag_Description
//        if (splitter.hasNext()) {
//            splitter = splitter.next();
//        }
//
//        // TODO
//        for (String str : arrs) {
//
//
//            //splitter.split(str,OPTIONAL);
//
//        }


    }


    public static void main(String ...args) {


        String x = "asdf";
        String[] xx = x.split("|");

        System.out.println(xx);
    }
}
