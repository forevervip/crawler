package com.waoooh.crawler.page.tagchunk.manager;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidSourceDefineException;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagDesciptionException;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagNameException;
import com.waoooh.crawler.page.tagchunk.entity.exception.InvalidTagRecursiveDescriptionException;
import com.waoooh.crawler.page.tagchunk.identifier.DescriptionIdentifier;
import com.waoooh.crawler.page.tagchunk.identifier.impl.*;
import com.waoooh.crawler.utils.StrUtils;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by lulu on 15/8/17.
 */
public class TagRecognizeManagerV2 {

    private static List<DescriptionIdentifier> identifierList;

    static {

        identifierList = Lists.newArrayList();
        identifierList.add(new DefaultDescriptionIdentifierV3());
        identifierList.add(new RecursionDescriptionIdentifierV3());

    }

    public static void makeRecognize(TagDescription tagDescription, String description) {

        for (DescriptionIdentifier identifier : identifierList) {

            if (identifier.isSupported(description)) {
                identifier.identify(tagDescription, description);
            }


        }


    }

}
