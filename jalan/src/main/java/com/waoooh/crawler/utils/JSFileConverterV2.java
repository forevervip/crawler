package com.waoooh.crawler.utils;

import com.waoooh.crawler.utils.bean.GroupNameIDBean;
import com.waoooh.crawler.utils.bean.IProcessStrBean;
import com.waoooh.crawler.utils.bean.SentenceBean;

import java.io.*;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by yanglu on 2015/8/12.
 */
public class JSFileConverterV2 {

    private final static String BASE_URL = "http://www.jalan.net/";

    private final static String KEN = "";

    private final static String COMMA = ",";
    private final static String SEMICOLON = ";";

    private final static String LEFT_BRACKET = "(";
    private final static String LEFT_BRACKET_DOUBLE_QUOTE = "(\"";
    private final static String RIGHT_BRACKET = ")";

    private final static String QUOTE = "\"";

    private final static String START_WORD = "KenData";

    private final static String WHITESPACE = "";

    private final static String ENTER = "\r\n";
    private final static String TAB = "\t";
    private final static String noiseArray = "new Array";
    private final static String noiseLrgData = "new LrgData";

    private final static String GROUP_KEY = "group_name";

    private final static String AND = "&";
    private final static String QUESTION_MARK = "?";

    private static int level = 1;

    private static Map<Integer, String> map = new HashMap<Integer, String>();

    private static Map<String, String> paramMap = new HashMap<String, String>();

    static {

        map.put(1, "");
        map.put(2, "LRG_");
        map.put(3, "SML_");

        paramMap.put("", "?kenCd=");
        paramMap.put("LRG_", "lrgCd=");
        paramMap.put("SML_", "smlCd=");

    }


    String LRG = "LRG_";

    public static void main(String... args) throws Exception {
        executeMakeFile();
    }

    private static void executeMakeFile() throws Exception {
        String filepath = "/Users/lulu/IdeaProjects/jalan/src/main/resources/dljs/jalan_common_qs_format.js";

        //FileReader fr = new FileReader(new File(filepath));

        FileInputStream fis = new FileInputStream(filepath);
        InputStreamReader isr = new InputStreamReader(fis, "UTF-8");

        BufferedReader bfr = new BufferedReader(isr);

        FileOutputStream fos = new FileOutputStream("/Users/lulu/IdeaProjects/jalan/src/main/resources/dljs/qsjs_outV2.txt");
        OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
        BufferedWriter bfw = new BufferedWriter(osw);

        String line = null;
        String[] arrays = null;

        String BIG_GROUP = "";

        StringBuilder sentence = new StringBuilder();

        boolean goOnNext = false;

        GroupNameIDBean bean = new GroupNameIDBean();
        SentenceBean sentenceBean = new SentenceBean();


        while (null != (line = bfr.readLine())) {

            if (containStr(line, START_WORD) || goOnNext) {

                if (!goOnNext) {
                    goOnNext = true;
                    bean = new GroupNameIDBean();
                    sentence = new StringBuilder();
                    line = cutUntilFirstForStr(line, LEFT_BRACKET);
                }

                sentence.append(cutDownStrByWhiteSpace(line, new String[]{ENTER, TAB}));

                if (line.endsWith(SEMICOLON)) {

                    //sentence.append(cutDownStrByWhiteSpace(line, ENTER));

                    goOnNext = false;

                    sentenceBean.setSentence(cutDownStrByWhiteSpace(sentence.toString(), new String[]{noiseArray, noiseLrgData}));

                    bean = recursiveMakeList(sentenceBean, bean);

                    printList(bean, bfw);


                }
            }

        }

        fis.close();
        bfr.close();
        bfw.close();
        fos.close();
        osw.close();
    }

    /**
     * 对GroupNameIDBean 的内容打印入口方法
     *
     * @param bean
     * @param bfw
     * @return
     * @throws IOException
     */
    public static StringBuffer printList(GroupNameIDBean bean, BufferedWriter bfw) throws IOException {

        fetchUrl(bean.getListBean(),
                "http://www.jalan.net/" + bean.getGroupId(),
                bean.getGroupName(),
                bean.getParams(),
                bfw);

        return null;
    }

    /**
     * 递归获得GroupNameIDBean的内容，按照list进行递归
     *
     * @param embeanList
     * @param url
     * @param groupName
     * @param param
     * @param bfw
     * @return
     * @throws IOException
     */
    private static List<String> fetchUrl(
            List<GroupNameIDBean> embeanList,
            String url,
            String groupName,
            String param,
            BufferedWriter bfw) throws IOException {


        for (GroupNameIDBean emBean : embeanList) {
            if (!emBean.getListBean().isEmpty()) {
                fetchUrl(emBean.getListBean(),
                        url + "/" + emBean.getUrlPattern() + emBean.getGroupId(),
                        groupName + "/" + emBean.getGroupName(),
                        param + emBean.getParams(),
                        bfw);
            } else {
                String outputUrl = groupName + "/" + emBean.getGroupName() + "\r\n";

                outputUrl = outputUrl + url + "/" + emBean.getUrlPattern() + emBean.getGroupId();
                outputUrl = outputUrl + param + emBean.getParams().substring(0, emBean.getParams().length() - 1);

                writeFile(outputUrl, bfw);
            }
        }


        return null;
    }

    /**
     * 输入文件方法
     *
     * @param line
     * @param bfw
     * @throws IOException
     */
    private static void writeFile(String line, BufferedWriter bfw) throws IOException {

        bfw.write(line + "\r\n");


    }

    /**
     * 剪切cutDownStr中定义的所有参数，替换为“”
     *
     * @param str
     * @param cutDownStr
     * @return
     */
    public static String cutDownStrByWhiteSpace(String str, String[] cutDownStr) {

        for (String cut : cutDownStr) {
            str = str.replace(cut, WHITESPACE);
        }
        return str;


    }

    /**
     * 对读取的内容进行递归调用，生成GroupNameIDBean，层层递进
     *
     * @param sentenceBean
     * @param bean
     * @return
     * @throws Exception
     */
    private static GroupNameIDBean recursiveMakeList(SentenceBean sentenceBean, GroupNameIDBean bean) throws Exception {

        // 得到第一个( or (" or )
        String bracket = nextBracket(sentenceBean);

        cutUntilFirst(sentenceBean, bracket);

        if (LEFT_BRACKET.equals(bracket)) {

            // 追溯到第一个左括号 cut掉前面的信息
            if (sentenceBean.getValue().startsWith(LEFT_BRACKET_DOUBLE_QUOTE)) {

                // 移位到第一个"的位置
                cutUntilFirst(sentenceBean, QUOTE);
                bean.setLeft_bracket_count(bean.getLeft_bracket_count() + 1);

                String[] array = getGroupArray(sentenceBean);

                if (null != array) {
                    bean.setGroupName(cutDownStrByWhiteSpace(array[0], new String[]{QUOTE, LEFT_BRACKET, RIGHT_BRACKET}));
                    bean.setGroupId(cutDownStrByWhiteSpace(array[1], new String[]{QUOTE, LEFT_BRACKET, RIGHT_BRACKET}));
                    //level++;

                    bean.setUrlPattern(map.get(level));

                    bean.setParams(paramMap.get(map.get(level)) + bean.getGroupId() + AND);

                    do {
                        recursiveMakeList(sentenceBean, bean);

                    } while (bean.getLeft_bracket_count() != bean.getRight_bracket_count());

                    bean.setLeft_bracket_count(0);
                    bean.setRight_bracket_count(0);

                } else {

                    throw new Exception("getGroupArray error!");
                }


            } else {

                // 只是一个(的场合 说明还有内部的内容，需要继续深入递归
                List<GroupNameIDBean> list = bean.getListBean();

                cutUntilFirstPlusOffset1(sentenceBean, LEFT_BRACKET);
                bean.setList_left_bracket_count(bean.getList_left_bracket_count() + 1);
                level++;
                do {


                    GroupNameIDBean addBean = recursiveMakeList(sentenceBean, new GroupNameIDBean());

                    list.add(addBean);
                    System.out.println(addBean.getGroupName() + addBean.getGroupId() + "is added to the bean!");

                    if (RIGHT_BRACKET.equals(nextBracket(sentenceBean))) {
                        bean.setList_right_bracket_count(bean.getList_right_bracket_count() + 1);
                        cutUntilFirstPlusOffset1(sentenceBean, RIGHT_BRACKET);
                    }
                } while (bean.getList_left_bracket_count() != bean.getList_right_bracket_count());

                level--;
                bean.setList_left_bracket_count(0);
                bean.setList_right_bracket_count(0);


            }

        } else if (RIGHT_BRACKET.equals(bracket)) {

            cutUntilFirstPlusOffset1(sentenceBean, RIGHT_BRACKET);

            bean.setRight_bracket_count(bean.getRight_bracket_count() + 1);


            return bean;

        } else {

        }

        return bean;
    }

    /**
     * 获得从第1位到to为止的内容，取得获得的字符串，然后对IProcessStrBean中的内容更新成从to开始到结尾为止
     *
     * @param bean
     * @param to
     * @return
     */
    private static String cutDownAndGet(IProcessStrBean bean, int to) {
        String str = bean.getValue().substring(0, to);
        bean.setValue(bean.getValue().substring(to, bean.getValue().length()));
        return str;

    }

    private static int getIndexAfter(String str) {

        int from = str.indexOf(",", str.indexOf(",") + 1);

        int seco = str.indexOf("(", from);

        int seco2 = str.indexOf(")", from);

        if (seco < 0 && seco2 < 0) {
            return -1;
        } else {
            if ((seco < seco2) && seco >= 0) {
                return seco;
            } else {
                return seco2;
            }
        }

    }

    /**
     * 切分出"name","id"中的name与id，形成array数组返回。
     * 2015/8/14 bug fix:
     * 由于在　“”中会出现(或者)的情况，所以假如判断括号的方法，当在，之前有括号的场合需要
     *
     * @param bean
     * @return
     */
    private static String[] getGroupArray(IProcessStrBean bean) {

        String str = "";
        if (((bean.getValue().indexOf(LEFT_BRACKET) < bean.getValue().indexOf(COMMA)) && bean.getValue().indexOf(LEFT_BRACKET) >= 0)
                || ((bean.getValue().indexOf(RIGHT_BRACKET) < bean.getValue().indexOf(COMMA)) && bean.getValue().indexOf(RIGHT_BRACKET) >= 0)) {
            str = cutDownAndGet(bean, getIndexAfter(bean.getValue()));

        } else {
            str = getUntilFirst(bean.getValue(), nextBracket(bean));
        }


        String[] array = str.split(COMMA);

        if (null != array && array.length > 1) {

            return array;
        }

        return null;

    }

    /**
     * 获得下一个括号是"("还是")"
     *
     * @param bean
     * @return
     */
    private static String nextBracket(IProcessStrBean bean) {

        // first jump to
        // it should not contain () between " "

        if (bean.getValue().indexOf(LEFT_BRACKET) < 0 && bean.getValue().indexOf(RIGHT_BRACKET) < 0) {
            return null;
        }
        if ((bean.getValue().indexOf(LEFT_BRACKET) < bean.getValue().indexOf(RIGHT_BRACKET)) && bean.getValue().indexOf(LEFT_BRACKET) >= 0) {
            return LEFT_BRACKET;
        } else {
            return RIGHT_BRACKET;
        }
    }

    /**
     * 判断str中是否含有embeddedStr字符串
     *
     * @param str
     * @param embeddedStr
     * @return
     */
    public static boolean containStr(String str, String embeddedStr) {
        if (str.indexOf(embeddedStr) >= 0) {
            return true;
        }

        return false;
    }

    @Deprecated
    public static String[] splitby(String str, String regx) {
        return str.split(regx);
    }


    /**
     * 获得从第一个等于untilFirst开始的字符串，切掉之前的字符串，更新IProcessStrBean中的内容并返回
     *
     * @param bean
     * @param untilFirst
     * @return
     */
    public static String cutUntilFirst(IProcessStrBean bean, String untilFirst) {

        int index = bean.getValue().indexOf(untilFirst);
        bean.setValue(bean.getValue().substring(index, bean.getValue().length()));

        return bean.getValue();

    }

    /**
     * 与 cutUntilFirst 相同，不是用bean传值
     *
     * @param str
     * @param untilFirst
     * @return
     */
    public static String cutUntilFirstForStr(String str, String untilFirst) {

        int index = str.indexOf(untilFirst);


        return str.substring(index, str.length());

    }

    /**
     * 获得第一个出现的untilFirst并且向后offset untilFirst的位数并返回字符串，更新IProcessStrBean
     * @param bean
     * @param untilFirst
     * @return
     */
    public static String cutUntilFirstPlusOffset1(IProcessStrBean bean, String untilFirst) {

        int index = bean.getValue().indexOf(untilFirst);
        String str = bean.getValue().substring(index + untilFirst.length(), bean.getValue().length());
        bean.setValue(str);
        return str;

    }

    public static String getUntilFirst(String str, String untilFirst) {

        int index = str.indexOf(untilFirst);

        return str.substring(0, index + 1);

    }


}


