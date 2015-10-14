package com.waoooh.crawler.utils;

import com.google.common.collect.Lists;
import com.waoooh.crawler.consts.Const;

import java.rmi.registry.LocateRegistry;
import java.util.Collection;
import java.util.List;
import java.util.Objects;

/**
 * Created by lulu on 15/8/16.
 */
public class StrUtils {

    /**
     * 把str中的arrays中的内容替换位whitespace("")
     *
     * @param str
     * @param arrays
     * @return
     */
    public static String replaceStrArrayByWhiteSpace(String str, String[] arrays) {

        for (String cut : arrays) {
            str = str.replace(cut, Const.WHITESPACE);
        }
        return str;

    }


    /**
     * 从字符串str中取得第一个等于untilFirst的字符串之前的所有内容
     *
     * @param str
     * @param untilFirst
     * @return
     */
    public static String getUntilFirst(String str, String untilFirst) {

        int index = str.indexOf(untilFirst);

        if (index >= 0) {
            return str.substring(0, index);
        }
        return "";

    }

    /**
     * 获取第一个遇到　untilFirst字段的位置，然后获得后面所有的内容
     *
     * @param str
     * @param untilFirst
     * @return
     */
    public static String cutUntilFirstAndOffset(String str, String untilFirst) {

        int index = str.indexOf(untilFirst);

        if (index >= 0) {
            return str.substring(index + untilFirst.length(), str.length());
        }

        return str;
    }

    /**
     * 获取第一个遇到　untilFirst字段的位置，包括此字段获得后面所有的内容
     *
     * @param str
     * @param untilFirst
     * @return
     */
    public static String cutUntilFirstWithoutOffset(String str, String untilFirst) {

        int index = str.indexOf(untilFirst);

        if (index >= 0) {
            return str.substring(index, str.length());
        }

        return str;
    }

    /**
     * 字符串为null或者""的场合，返回true，否则返回false
     *
     * @param str
     * @return
     */
    public static boolean isEmpty(String str) {
        if (null == str || Const.WHITESPACE.equals(str)) {
            return true;
        }

        return false;
    }

    /**
     * 判断传入的Collection是否为null或者size为0
     *
     * @param collection
     * @return
     */
    public static boolean isCollectionEmpty(Collection collection) {
        if (null == collection || collection.size() == 0) {
            return true;
        }
        return false;
    }

    /**
     * 获得str字符串中，第一个出现containStr1 还是containStr2。
     *
     * @param str
     * @param containStr1
     * @param containStr2
     * @return
     */
    public static String nextStr(String str, String containStr1, String containStr2) {

        int index1 = str.indexOf(containStr1);
        int index2 = str.indexOf(containStr2);

        if (index1 < 0 && index2 < 0) {
            return null;
        }

        if (index1 < 0) {
            return containStr2;
        } else if (index2 < 0) {
            return containStr1;
        } else {

            if (index1 < index2) {
                return containStr1;
            } else {
                return containStr2;
            }

        }

    }


    /**
     * 获得两个字符串之间的内容。
     * 如果出现嵌套则获取做外层的内容。会从str的第一个from开始到达to为止。
     *
     * @param withEdgeFlg
     * @param str
     * @param from
     * @param to
     * @return
     */
    public static String getBetweenStr(boolean withEdgeFlg, String str, String from, String to) {

        int intFrom = str.indexOf(from);
        int intTo = str.indexOf(to);


        if (intFrom < 0 || intTo < 0) {
            return null;
        }

/*        if (intFrom >= intTo) {
            return null;
        }*/

        int fromLength = from.length();
        int toLength = from.length();

        int cutFrom = str.indexOf(from);
        int cutTo = 0;

        String tempStr = cutUntilFirstWithoutOffset(str, from);

        String calStr = tempStr;

        int fromCount = 0;
        int toCount = 0;

        int warn = 150;

        do {
            String next = nextStr(tempStr, from, to);
            if (next.equals(from)) {
                fromCount++;
            } else if (next.equals(to)) {
                toCount++;
            } else {
                return null;
            }

            cutTo = tempStr.indexOf(next) + cutTo + next.length();


            tempStr = cutUntilFirstAndOffset(tempStr, next);

            warn--;

            if (warn == 0) {
                return null;
            }
        } while ((fromCount - toCount) != 0);

        if (!withEdgeFlg) {
            cutTo = cutTo - to.length() - from.length();

            calStr = cutUntilFirstAndOffset(calStr, from);

        }

        return calStr.substring(0, cutTo);

    }

    /**
     * 获得两个字符串之间的内容。
     * 如果出现嵌套则获取做外层的内容。会从str的第一个from开始到达to为止。
     * 可以自动识别Tag的模式。
     *
     * @param withEdgeFlg 是否包含form 和 to一起展现出来
     * @param str         需要识别的字段
     * @param from        开始字符，必须是可以识别str中的一个tag的非完全字段
     * @param to          结束字符，tag的完全结束字符，如：</td>
     * @param flag        true：模糊标签匹配模式 false：普通from to模式
     * @return
     */
    public static String getBetweenStrByTagStyle(boolean withEdgeFlg, String str, String from, String to, boolean flag) {

        if (!flag) {
            return getBetweenStr(withEdgeFlg, str, from, to);
        }

        // 进入正轨：
        // from中没有< 和 >的场合 不是tag 无法继续进行
        if (!from.contains(Const.$LT) && (!from.contains(Const.$GT))) {
            return null;
        }

        String wrapFrom = "";
        // 单独的一个tag的场合
        if (from.contains(Const.$LT) && from.contains(Const.$GT) && !from.contains(Const.ONE_SPACE)) {
            wrapFrom = getUntilFirst(from, Const.$GT);
        } else {
            // 获得tag的<td 这样的头
            wrapFrom = getUntilFirst(from, Const.ONE_SPACE);
        }

        if (StrUtils.isEmpty(wrapFrom)) {
            return null;
        }


        int intFrom = str.indexOf(from);
        int intTo = str.indexOf(to);


        if (intFrom < 0 || intTo < 0) {
            return null;
        }

/*        if (intFrom >= intTo) {
            return null;
        }*/

        int fromLength = from.length();
        int toLength = from.length();

        int cutFrom = str.indexOf(from);
        int cutTo = 0;

        String tempStr = cutUntilFirstWithoutOffset(str, from);

        String calStr = tempStr;

        int fromCount = 0;
        int toCount = 0;

        int warn = 150;

        do {
            String next = nextStr(tempStr, wrapFrom, to);
            if (next.equals(wrapFrom)) {
                fromCount++;
            } else if (next.equals(to)) {
                toCount++;
            } else {
                return null;
            }


            cutTo = tempStr.indexOf(next) + cutTo + next.length();


            tempStr = cutUntilFirstAndOffset(tempStr, next);

            warn--;

            if (warn == 0) {
                return null;
            }
        } while ((fromCount - toCount) != 0);

        if (!withEdgeFlg) {
            cutTo = cutTo - to.length() - calStr.indexOf(Const.$GT) - 1;

            calStr = cutUntilFirstAndOffset(calStr, Const.$GT);

        }
        return calStr.substring(0, cutTo);

    }


    /**
     * 判断数组正确性，是否为空。
     *
     * @param arrays     数组
     * @param checkCount 必须要大于等于的length
     * @return
     */
    public static boolean isArrayLegal(String[] arrays, int checkCount) {

        if (null == arrays || arrays.length < checkCount) {
            return false;
        }

        return true;
    }

    /**
     * 切除首尾相等数量字段并返回。
     *
     * @param str
     * @param count
     * @return
     */
    public static String cutDownHeadAndTail(String str, int count) {

        return str.substring(count, str.length() - count);

    }

    /**
     * 切除首位数量字段并返回。
     *
     * @param str
     * @param count
     * @return
     */
    public static String cutDownHead(String str, int count) {

        return str.substring(count, str.length());

    }

    /**
     * 切除尾部数量字段并返回。
     *
     * @param str
     * @param count
     * @return
     */
    public static String cutDownTail(String str, int count) {

        return str.substring(0, str.length() - count);

    }

    public static String[] newArr(String... args) {

        return args;

    }


    /**
     * 可以按照任何字符进行split
     *
     * @param str
     * @return
     */
    public static String[] split(String str, String split) {

        String[] arr = null;

        List<String> list = Lists.newArrayList();


        String strcontent = null;
        if (str.indexOf(split) >= 0) {


            do {

                strcontent = StrUtils.getUntilFirst(str, split);

                list.add(strcontent);

                str = StrUtils.cutUntilFirstAndOffset(str, split);

            } while (str.indexOf(split) > 0);

            list.add(str);

            String[] xx = new String[list.toArray().length];

            Object[] ob = list.toArray();

            for (int i = 0; i < ob.length; i++) {

                xx[i] = (String) ob[i];

            }

            return xx;

        } else {
            return new String[0];
        }

    }

    /**
     * 利用split进行切割，但是考虑到有（，）｛，｝，的情况产生，所以在完整括号内的split并不被
     * 直接切割，需要保证括号的完整性
     *
     * @param str
     * @param split
     * @return
     */
    public static String[] smartSplit(String str, String split) {
        // {,(,(,),),},{,(,)}

        // 得到{}之间的内容
        //String Bstr = StrUtils.getBetweenStr(true, str, Const.LEFT_BRACKET, Const.RIGHT_BRACKET);


        String[] arr = StrUtils.split(str, split);

        if (null == arr || arr.length == 0) {
            return null;
        }

        List<String> list = Lists.newArrayList();

        int SL = 0;
        int SR = 0;

        int ML = 0;
        int MR = 0;

        int BL = 0;
        int BR = 0;

        int QQ = 0;

        boolean S_ClearFlg = false;
        boolean M_ClearFlg = false;
        boolean B_ClearFlg = false;

        boolean QQ_ClearFlg = false;

        StringBuilder sb = null;
        for (String arrStr : arr) {

            if (null == sb) {
                sb = new StringBuilder();
                sb.append(arrStr);
            } else {
                sb.append(split).append(arrStr);
            }

            SL = SL + StrUtils.howMuch(arrStr, Const.LEFT_BRACKET);
            SR = SR + StrUtils.howMuch(arrStr, Const.RIGHT_BRACKET);

            if (SL == SR) {
                S_ClearFlg = true;

            }

            ML = ML + StrUtils.howMuch(arrStr, Const.LEFT_M_BRACKET);
            MR = MR + StrUtils.howMuch(arrStr, Const.RIGHT_M_BRACKET);

            if (ML == MR) {
                M_ClearFlg = true;
            }

            BL = BL + StrUtils.howMuch(arrStr, Const.LEFT_B_BRACKET);
            BR = BR + StrUtils.howMuch(arrStr, Const.RIGHT_B_BRACKET);

            if (BL == BR) {
                B_ClearFlg = true;
            }

            QQ = QQ + StrUtils.howMuch(arrStr, Const.QUOT);

            if (QQ % 2 == 0) {
                QQ_ClearFlg = true;
            }


            if (S_ClearFlg && M_ClearFlg && B_ClearFlg && QQ_ClearFlg) {
                list.add(sb.toString());
                sb = null;
            }

            B_ClearFlg = false;
            S_ClearFlg = false;
            M_ClearFlg = false;
            QQ_ClearFlg = false;

        }

        if (null != sb) {
            list.add(sb.toString());
        }


        Object[] strArr = list.toArray();
        String[] strxx = new String[strArr.length];

        for (int i = 0; i < strArr.length; i++) {
            strxx[i] = (String) strArr[i];
        }

        return strxx;
    }


    /**
     * 在str中包含有多少个checkStr的字段
     *
     * @param str
     * @param checkStr
     * @return
     */
    public static int howMuch(String str, String checkStr) {

        if (StrUtils.isEmpty(str) || StrUtils.isEmpty(checkStr)) {
            return 0;
        }

        if (str.equals(checkStr)) {
            return 1;
        }

        if (str.length() <= checkStr.length()) {
            return 0;
        }

        String[] arr = StrUtils.split(str, checkStr);

        if (arr == null || arr.length == 0) {
            return 0;
        }

        return arr.length - 1;

    }


    public static void main(String... args) {
        //String x = "<div class=\"hotel-detail-header\"><table border=\"0\" cellpadding=\"0\" cellspacing=\"0\"><tr valign=\"top\"><td class=\"hotel-name\"><h2><a class=\"s16_00 fb\" href=\"/yad318454/?stayCount=1&amp;roomCount=1&amp;adultNum=2&amp;stayDay=&amp;stayYear=&amp;stayMonth=&amp;dateUndecided=1&amp;distCd=01&amp;smlCd=011105&amp;roomCrack=200000&screenId=UWW1402&yadNo=318454&callbackHistFlg=1\" onClick=\"javascript:openYadoSyosaiStatic('318454','1_1', '34_1_1');return false;\">ホテルまほろば</a></h2><img src=\"http://cdn.jalan.jp/jalan/common/image/icon_photo.gif\" alt=\"フォトギャラリー\" width=\"70\" height=\"13\" style=\"margin: 0 0 0 8px;\" align=\"absmiddle\"></td><td nowrap align=\"right\"><span class=\"s14_00 fb\"><img src=\"http://cdn.jalan.jp/images/txt_fee_01b.gif\" alt=\"最安料金(税抜)\" width=\"65\" height=\"9\" style=\"margin: 0 5px 0 0;\" align=\"absmiddle\" border=\"0\">￥21,296～</span><br><span class=\"s11_66\">（￥10,648～/人）</span></td></tr></table></div>";

        //System.out.println(getBetweenStrByTagStyle(true, x, "<div class=\"hotel-detail-header\"", "</div>", true));

        //String x = "<12345567>";

        //System.out.println(cutDownHeadAndTail(x, 1));

        //String x = "abdcefg?hi?jkl?mn";

        //String x = "{,(,(,),),},{,(,)}";

        String x = "li:data-locate=\"hotel-access,\" > * > dt:*|val(ex={span.tag,a.all}),dd:|val";

        System.out.println(System.currentTimeMillis());

        String[] arr = StrUtils.smartSplit(x, ",");

        System.out.println(System.currentTimeMillis());

        String xx = "";

    }


}
