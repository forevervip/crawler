package com.waoooh.crawler.utils;

import java.io.*;
import java.util.Properties;

/**
 * Created by yanglu on 2015/8/12.
 */
public class JSFileConverter {


    public static void main(String... args) throws IOException {

        String filepath = "C:\\Users\\yanglu\\Desktop\\qsjs.txt";

        //FileReader fr = new FileReader(new File(filepath));

        FileInputStream fis = new FileInputStream(filepath);
        InputStreamReader isr = new InputStreamReader(fis, "UTF-8");

        BufferedReader bfr = new BufferedReader(isr);
        BufferedWriter bfw = new BufferedWriter(new OutputStreamWriter(new FileOutputStream("C:\\Users\\yanglu\\Desktop\\qsjs_out.txt"), "UTF-8"));

        String line = null;

        boolean bigflg = false;
        int times = 0;
        String groupname = "";
        String groupid = "";

        String membername = "";
        String memberid = "";

        String[] arrays = null;

        String writeline = "";

        String BASE_URL = "http://www.jalan.net/";
        String LRG = "LRG_";

        String BIG_GROUP = "";
        while (null != (line = bfr.readLine())) {

            if (line.startsWith("//")) {
                bigflg = true;
                times = 0;

            } else {
                if ("".equals(line)) {
                    continue;
                }
                // read big lrg group
                if (times == 1) {


                    arrays = line.split(",");

                } else {
                    // read group member

                    if (line.startsWith(",")) {
                        line = line.substring(1, line.length());
                    }

                    arrays = line.split(",");


                }


                for (int i = 0; i < arrays.length; i++) {

                    if ((i % 2) == 0) {
                        // group japanese name
                        groupname = arrays[i];

                    } else {

                        // group id
                        groupid = arrays[i];
                    }

                    if (!"".equals(groupid) && !"".equals(groupname)) {
                        if (times == 1) {
                            BIG_GROUP = groupid;
                            if ("".equals(writeline)) {
                                writeline = groupname + "=" + groupid;
                            } else {
                                writeline = writeline + "\r\n" + groupname + "=" + groupid;
                            }
                        } else {

                            if ("".equals(writeline)) {
                                writeline = "\t" + groupname + "=" + BASE_URL + BIG_GROUP + "/" + LRG + groupid + "/";
                            } else {
                                writeline = writeline + "\r\n" + "\t" + groupname + "=" + BASE_URL + BIG_GROUP + "/" + LRG + groupid + "/";
                            }


                        }

                        groupid = "";
                        groupname = "";

                    }

                }

                bfw.write(writeline + "\r\n");
                writeline = "";

            }
            times++;

        }

        fis.close();
        bfr.close();
        bfw.close();
    }

}


