package com.waoooh.crawler.page;

import com.sun.jndi.cosnaming.CNCtx;
import com.sun.tools.doclets.formats.html.SourceToHTMLConverter;
import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.consts.HtmlEncodeConst;
import com.waoooh.crawler.consts.SourceConst;
import com.waoooh.crawler.consts.TagConst;
import com.waoooh.crawler.page.tagchunk.TagDescription;
import com.waoooh.crawler.page.tagchunk.TagStartEndBean;
import com.waoooh.crawler.page.tagchunk.entity.SourceBean;
import com.waoooh.crawler.page.tagchunk.entity.TagDescriptionEntity;
import com.waoooh.crawler.page.tagchunk.identifier.detail.extag.ExceptBean;
import com.waoooh.crawler.properties.PropertyHolder;
import com.waoooh.crawler.utils.HttpUtils;
import com.waoooh.crawler.utils.StrUtils;
import com.waoooh.crawler.utils.TagUtils;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.util.*;

/**
 * Created by lulu on 15/8/29.
 */
public class FindTest {

    private static int pageCount = 1;

    private static String seeContinue = "[span:class=\"s12_30b\"|val]";

    private static long countall = 1;

    protected static final Logger logger = LoggerFactory.getLogger(FindTest.class);

    public static void main(String... args) throws IOException {


        Properties pro = PropertyHolder.getPro();


        //FileReader reader = new FileReader(new File("/Users/lulu/IdeaProjects/crawler/jalan/src/main/resources/dljs/qsjs_outV2.txt"));

        BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(new File("/Users/lulu/IdeaProjects/crawler/jalan/src/main/resources/dljs/qsjs_outV2.txt"))));

        String line = null;
        while ((line = reader.readLine()) != null) {

            if (line.startsWith("http")) {
                String url = line;

                logger.info("Base Url is :" + url);
                execute(url, pro);
            } else {
                logger.info("From here is : " + line);
            }
        }


    }

    private static void execute(String url, Properties pro) throws IOException {

        long sysstart = System.currentTimeMillis();
        String str = HttpUtils.httpClient(url);
        //String str = "";

        //String str = HttpUtils.httpConnectClient(url);

        String next = pro.get("[Crawler]next").toString();

        Iterator keys = pro.keySet().iterator();

//        Enumeration e =  pro.propertyNames();
//
//        while (e.hasMoreElements()) {
//            String name = (String)e.nextElement();
//            logger.info(name);
//        }


        String beanstart = getTagDetial(TagDescriptionEntity.getInstance(next).recognize()).getTagStart();
        int page = 1;

        int count = 1;

        // 判断是否进入大循环体系
        TagStartEndBean bean = getTagDetial(TagDescriptionEntity.getInstance(seeContinue).recognize());
        String continueStart = bean.getTagStart();
        String continueEnd = bean.getTagEnd();

        String continueStr = StrUtils.getBetweenStrByTagStyle(false, str, continueStart, continueEnd, true);
        if (StrUtils.isEmpty(continueStr)) {
            return;
        } else {
            if (!continueStr.contains("軒ありました")) {
                logger.info("No Data in the Site! Will continue to fetch data.");
                return;
            }
        }


        do {


            do {


                logger.info("[all] :" + countall++);
                logger.info("[count] :" + count);
                while (keys.hasNext()) {
                    String key = (String) keys.next();

                    if (!"[Crawler]next".equals(key)) {

                        //if (!"pagelink".equals(key)) {
                        String value = (String) pro.get(key);

                        boolean flg = false;
                        if ("[Crawler]pagelink".equals(key)) {
                            flg = false;
                        } else {
                            flg = true;
                        }
                        printOut(key, value, str, flg);
                        //} else {

                        //}
                    }
                }

                str = StrUtils.cutUntilFirstAndOffset(str, beanstart);

                count++;

                logger.info("-------------------------------------------------------");

                if (str.indexOf(beanstart) < 0) {
                    break;
                }
                keys = pro.keySet().iterator();




            } while (true);

            logger.info("Now page is : " + String.valueOf(page));
            page++;

            //String tempurl = "http://www.jalan.net/010000/LRG_010200/SML_010202/?kenCd=010000&lrgCd=010200&smlCd=010202";

            if (page > pageCount) {
                break;
            }
            String[] arr = StrUtils.split(url, "?");

            String tempUrl = arr[0].concat("page").concat(String.valueOf(page)).concat(".html?").concat(arr[1]);

            str = HttpUtils.httpClient(tempUrl);


        } while (page <= pageCount);

        logger.info("ALL page count: " + pageCount + 1);
        logger.info("All time is : " + (System.currentTimeMillis() - sysstart) / 1000);
    }

    private static TagStartEndBean getTagDetial(TagDescription td) {
        //String grammar = key;
        //TagDescription td = TagDescriptionEntity.getInstance(grammar).recognize();


        String start = getStart(td);

        TagStartEndBean bean = new TagStartEndBean();
        bean.setTagStart(start);


        //if (Const.MAX.equals(td.getSearchStrategy())) {
        //    bean.setTagEnd(TagUtils.getSimpleEndTag());
        //} else {
        bean.setTagEnd(TagUtils.getEndTag(td.getTagName()));
        //}


        return bean;
    }

    private static String getStart(TagDescription td) {

        List<SourceBean> sbList = td.getSourceBean();

        StringBuffer sbb = new StringBuffer();

        String source = "";

        if (!StrUtils.isCollectionEmpty(sbList)) {
            for (SourceBean sb : sbList) {
                sbb.append(sb.getSourceName());
                sbb.append(Const.EQUAL);
                sbb.append(Const.QUOT);
                sbb.append(sb.getSourceValue());
                if (Const.EQUAL.equals(sb.getStrategy())) {
                    sbb.append(Const.QUOT);
                }
                sbb.append(Const.ONE_SPACE);
            }

            source = StrUtils.cutDownTail(sbb.toString(), 1);
        }


        String start = Const.$LT + td.getTagName() + Const.ONE_SPACE + source;

        return start.trim();

    }

    private static void printOut(String introName, String key, String str, boolean printFlg) {

        // 解析成为TagDescription 的实例
        TagDescription description = getDes(key);

        // 直接解析tag的场合
        if (!description.getTagName().startsWith(Const.SHARP)) {

            // 切分MAX 以及普通的tag的内容
            TagStartEndBean bean = getTagDetial(description);

            String out = "";

            if (Const.MAX.equals(description.getSearchStrategy())) {

                String leftstr = "";
                String contentstr = "";

                leftstr = str;

                do {

                    // 先获得当前需要的内容
                    contentstr = StrUtils.getBetweenStrByTagStyle(false, leftstr, bean.getTagStart(), bean.getTagEnd(), false);

                    // 获得剩余的str内容
                    leftstr = StrUtils.cutUntilFirstAndOffset(leftstr, bean.getTagStart());
                } while (leftstr.indexOf(bean.getTagStart()) > 0);

                if (!StrUtils.isEmpty(contentstr)) {
                    String getNo = StrUtils.getBetweenStr(false, contentstr, Const.LEFT_BRACKET, Const.RIGHT_BRACKET).replace(Const.S_QUOT, Const.WHITESPACE);

                    String[] arr = getNo.split(Const.COMMA);

                    pageCount = Integer.parseInt(arr[1].trim());
                } else {

                    pageCount = 1;

                }

            } else {


                if (SourceConst.VAL.equals(description.getContent())) {

                    out = StrUtils.getBetweenStrByTagStyle(false, str, bean.getTagStart(), bean.getTagEnd(), true);


                    List<ExceptBean> list = description.getExceptBeanList();

                    String tagName = "";
                    String scope = "";

                    if (list != null) {

                        String content = "";

                        for (ExceptBean exceptBean : list) {

                            boolean flag = false;

                            String tag = "";
                            String end = "";

                            // TODO check
                            if (TagConst.SCOPE_ALL.equals(exceptBean.getScope())) {


                                end = Const.$LT.concat(Const.SLASH).concat(exceptBean.getTagName()).concat(Const.$GT);

                            } else {

                                end = Const.$GT;

                            }

                            do {

                                tag = Const.$LT.concat(exceptBean.getTagName());
                                content = StrUtils.getBetweenStr(true,
                                        out, tag, end);
                                out = StrUtils.replaceStrArrayByWhiteSpace(out, new String[]{content});

                                if (TagConst.SCOPE_TAG.equals(exceptBean.getScope())) {

                                    out = StrUtils.replaceStrArrayByWhiteSpace(out,
                                            new String[]{Const.$LT.concat(Const.SLASH).concat(exceptBean.getTagName().concat(Const.$GT))});
                                }

                            } while (out.contains(tag));


                        }

                    }


                } else {


                    String end = TagUtils.getSimpleEndTag();

                    out = StrUtils.getBetweenStrByTagStyle(true, str, bean.getTagStart(), end, false);

                    String start = description.getContent().concat(Const.EQUAL).concat(Const.QUOT);

                    end = Const.QUOT;

                    out = StrUtils.getBetweenStr(false, out, start, end);
                    out = StrUtils.getBetweenStr(false, out, Const.SLASH, "/?");

                    out = "http://www.jalan.net/".concat(out);

                    //out = StrUtils.cutDownTail(out, 1);


                }
            }

            if (printFlg) {
                if (!StrUtils.isEmpty(out)) {
                    logger.info(introName + " :" + StrUtils.replaceStrArrayByWhiteSpace(out.replace(HtmlEncodeConst.GT, ">"), new String[]{Const.ENTER, Const.TAB, Const.LINE_BREAK}));
                } else {
                    logger.info(introName + " :" + "nothing");
                }
            }
        } else {

            // 需要递归嵌套解析tag的场合
            // 简要删除#
            description.setTagName(description.getTagName().replace(Const.SHARP, Const.WHITESPACE));

            do {

                if (!Const.ASTERISK.equals(description.getTagName())) {

                    String start = getStart(description);

                    String end = "";

                    // 使用default的val或者 指定了使用val的场合

                    if (StrUtils.isEmpty(description.getContent())
                            || SourceConst.VAL.equals(description.getContent())) {

                        end = TagUtils.getEndTag(description.getTagName());

                        str = StrUtils.getBetweenStrByTagStyle(false, str, start, end, true);
                    } else {

                        // 不是使用VAL，而是使用source中特有的标示进行读取的时候 如使用src, onclick 之类...
                        // TODO
                        end = TagUtils.getSimpleEndTag();

                        String sourceName = description.getContent();

                        sourceName = sourceName.concat(Const.EQUAL).concat(Const.QUOT);

                        str = StrUtils.getBetweenStrByTagStyle(false, str, sourceName, end, false);


                    }


                }

                description = description.nextChild();


            } while (description != null);

            if (printFlg) {
                if (!StrUtils.isEmpty(str)) {
                    logger.info(introName + " :" + StrUtils.replaceStrArrayByWhiteSpace(str.replace(HtmlEncodeConst.GT, ">"), new String[]{Const.ENTER, Const.TAB, Const.LINE_BREAK}));
                } else {
                    logger.info(introName + " :" + "nothing!");
                }
            }


        }

    }

    /**
     * 通过grammar获得TagDescription的实例
     *
     * @param grammar
     * @return
     */
    private static TagDescription getDes(String grammar) {
        return TagDescriptionEntity.getInstance(grammar).recognize();
    }


}
