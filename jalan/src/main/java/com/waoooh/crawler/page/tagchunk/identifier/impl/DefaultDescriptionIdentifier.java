package com.waoooh.crawler.page.tagchunk.identifier.impl;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagDesciptionException;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagNameException;
import com.waoooh.crawler.page.tagchunk.identifier.detail.Segmentation;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Content_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Description_Description_BY_SPACE_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Source_Value_Splitter;
import com.waoooh.crawler.page.tagchunk.identifier.detail.impl.leaf.Tag_Description_Splitter;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;

/**
 * Created by lulu on 15/8/18.
 */
public class DefaultDescriptionIdentifier extends AbstractIdentifier {


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

        //StrUtils.getBetweenStr(false, description, Const.LEFT_BRACKET, Const.RIGHT_M_BRACKET);

        // 非递归模式
        if (!localDescription.startsWith(Const.SHARP)) {

            return true;

        }

        return false;
    }

    /**
     * 进行Description的识别，转换为相应的TagDescription
     *
     * @param tagDescription
     */
    @Override
    public void identify(TagDescription tagDescription, String description) {

//        String[] arrs = null;
//
//        String localDescription = StrUtils.cutDownHeadAndTail(description, 1);
//
//        //arrs = localDescription.split(Const.COLON);
//
//        Segmentation splitter = Tag_Description_Splitter.getInstance();
//
//        splitter.$(Description_Content_Splitter.getInstance())
//                .$(Description_Description_BY_SPACE_Splitter.getInstance())
//                .$(Source_Value_Splitter.getInstance());
//
//
//        String tagName = "";
//
//        arrs = splitter.split(localDescription,FORCE);
//        if (OK(arrs)) {
//
//            tagName = arrs[0].trim();
//
//            if (!TagConst.containTag(tagName)) {
//                throw new InvalidTagNameException(tagName + " is not supported by Tag of system right now!");
//            }
//
//            // 设定tagName
//            tagDescription.setTagName(tagName);
//
//            // 利用 | 进行分割
//            splitter = splitter.next();
//            arrs = splitter.split(arrs[0],FORCE);
//
//            if (OK(arrs)) {
//
//                String content = arrs[1].trim();
//
//                // 如果source常数类中包含此内容
//                if (SourceConst.containSource(content)) {
//
//                    tagDescription.setContent(content);
//
//                    String[] emArrs;
//
//                    // 下一步进行等号判断
//                    splitter = splitter.next();
//                    if (splitter.isSupported(arrs[0])) {
//                        emArrs = splitter.split(arrs[0],FORCE);
//                    } else {
//
//                        splitter = splitter.next();
//                        emArrs = new String[]{arrs[0]};
//                    }
//
//                    List<SourceBean> list = Lists.newArrayList();
//                    for (String str : emArrs) {
//
//                        arrs = splitter.split(str,FORCE);
//
//                        if (OK(arrs)) {
//
//                            for (String equalStr : arrs) {
//
//                                String strategy = "";
//                                if (arrs[1].contains(Const.QUOT)) {
//
//                                    String val = arrs[1];
//
//                                    if (val.startsWith(Const.ASTERISK)) {
//                                        strategy = Const.$LIKE;
//                                    } else if (val.endsWith(Const.ASTERISK)) {
//                                        strategy = Const.LIKE$;
//                                    } else {
//                                        strategy = Const.EQUAL;
//                                    }
//
//
//                                } else {
//                                    throw new InvalidTagDesciptionException("there is no \" int the source value! ");
//                                }
//                                list.add(SourceBean.getInstance(arrs[0], arrs[1], strategy));
//
//                            }
//
//                            tagDescription.setSourceBeanList(list);
//
//                        }
//
//                    }
//
//                } else {
//                    throw new InvalidTagNameException(content + " is not supported by Source of system right now!");
//                }
//
//
//            } else {
//                throw new InvalidTagDesciptionException("use VERTICAL(|) to split description error!");
//            }
//
//
//        } else {
//            throw new InvalidTagDesciptionException("use COLON(:) to split description error!");
//        }

    }
}
