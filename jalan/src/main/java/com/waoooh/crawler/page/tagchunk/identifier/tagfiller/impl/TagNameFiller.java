package com.waoooh.crawler.page.tagchunk.identifier.tagfiller.impl;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.identifier.exception.InvalidDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.AbstractTagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.TagFiller;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.bean.FillBean;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.AbstractTagFillRuler;
import com.waoooh.crawler.page.tagchunk.identifier.tagfiller.rule.TagFillRuler;
import com.waoooh.crawler.utils.StrUtils;

import java.util.List;
import java.util.Objects;

/**
 * Created by lulu on 15/8/21.
 */
public class TagNameFiller extends AbstractTagFiller {

    @Override
    public void execute(FillBean bean) {

        List<String> list = bean.getInUse();

//        int i = 0;
//        TagDescription description = getTagDescription();
//
//        for (String str : list) {
//
//            String tagName = str;
//
//            if (tagName.contains(Const.LEFT_BRACKET) && tagName.contains(Const.RIGHT_BRACKET)) {
//                tagName = resolveStrategy(tagName);
//            }
//
//            if (i == 0) {
//                description.setTagName(tagName);
//            } else {
//                description.addNext(TagDescriptionEntity.getInstance(null));
//                description = description.next();
//                description.setTagName(tagName);
//            }
//
//            i++;
//
//        }


        String tagName = list.get(0);

        if (tagName.contains(Const.LEFT_BRACKET) && tagName.contains(Const.RIGHT_BRACKET)) {
            tagName = resolveStrategy(tagName);
        }

        getTagDescription().setTagName(tagName);


    }

    public TagNameFiller(TagFillRuler ruler) {
        super.setRule(ruler);
    }

    /**
     * 对于有在tag中写策略的，写入TagDescription中的策略字段
     *
     * @param tag
     * @return
     */
    private String resolveStrategy(String tag) {

        if (tag.contains(Const.LEFT_BRACKET) && !tag.contains(Const.RIGHT_BRACKET)) {
            throw new InvalidDescriptionException("There is no enough ) in the description of tag Name ");
        } else if (!tag.contains(Const.LEFT_BRACKET) && tag.contains(Const.RIGHT_BRACKET)) {
            throw new InvalidDescriptionException("There is no enough ( in the description of tag Name ");
        }

        String strategy = StrUtils.getBetweenStr(false, tag, Const.LEFT_BRACKET, Const.RIGHT_BRACKET);

        // TODO 策略check需要做
        getTagDescription().setSearchStrategy(strategy);

        return StrUtils.getUntilFirst(tag, Const.LEFT_BRACKET);

    }


}
