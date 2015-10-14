package com.waoooh.crawler.utils;

import com.waoooh.crawler.consts.Const;
import com.waoooh.crawler.file.FileWriter;
import com.waoooh.crawler.page.FindTest;
import org.apache.http.HttpEntity;
import org.apache.http.client.config.CookieSpecs;
import org.apache.http.client.config.RequestConfig;
import org.apache.http.client.methods.CloseableHttpResponse;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpRequestRetryHandler;
import org.apache.http.impl.client.HttpClients;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.io.*;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;

/**
 * Created by yanglu on 2015/8/12.
 */
public class HttpUtils {
    private static Logger logger = LoggerFactory.getLogger(HttpUtils.class);

    // 仅使用唯一的一个httpclient 因为是ThreadSafe的哇！
    private static CloseableHttpClient httpclient;

    final static int BUFFER_SIZE = 4096 * 2;

    static {

        // 定义Request的config
        RequestConfig requestConfig = RequestConfig
                .custom()
                        // 采用最高agree的default
                        // cookie policy不采用"compatibility"以及"best-match"(4.4后已被deprecated) 直接采用"default" 具体看CookieSpecs.DEFAULT
                .setCookieSpec(CookieSpecs.DEFAULT)
                        // 一律设置50秒timeout 未来properties化。。。
                .setConnectionRequestTimeout(50000)
                .setConnectTimeout(50000)
                .setSocketTimeout(50000).build();

        // httpClient 4.0以后deprecate了 HttpClient的直接声明 且CloseableHttpClient为线程安全
        // So采用伪单例模式
        httpclient = HttpClients
                .custom()
                        // retry回数暂时设置为3, 未来考虑properties中获取吧。。
                        // 幂等使用false..
                .setRetryHandler(
                        new DefaultHttpRequestRetryHandler(3, false))
                .setDefaultRequestConfig(requestConfig).build();
    }

    public static void main(String... args) throws IOException {
        //String url = "http://www.jalan.net/130000/LRG_137100/";

        String baseurl = "http://jlp.yahooapis.jp/FuriganaService/V1/furigana?appid=dj0zaiZpPUs1enYwbW43OXBsdSZzPWNvbnN1bWVyc2VjcmV0Jng9YmE-&grade=1&sentence=";

        BufferedReader reader = new BufferedReader(new InputStreamReader(new FileInputStream(new File("/Users/lulu/IdeaProjects/crawler/jalan/src/main/resources/dljs/qsjs_outV2.txt"))));

        String line = null;

        int lineno = 1;

        String path ="/Users/lulu/IdeaProjects/crawler/jalan/src/main/resources/dljs/xmlfile/xmlfile";
        while ((line = reader.readLine()) != null) {

            if (!line.startsWith("http")) {
                String name = line;

                logger.info("Base Url is :" + name);

                String url = baseurl.concat(name);

                String str = HttpUtils.httpClient(url);

                System.out.println(str);

                FileWriter.getInstance(path+ lineno + ".txt", str).write();


            }

            lineno ++;
        }








        // String str_out1 = StrUtils.replaceStrArrayByWhiteSpace(str, new String[]{Const.ENTER, Const.LINE_BREAK});
        // String str_out2 = StrUtils.replaceStrArrayByWhiteSpace(str, new String[]{Const.ENTER, Const.LINE_BREAK});




        //FileWriter.getInstance("/Users/lulu/IdeaProjects/jalan/src/main/resources/dljs/out2.txt", str).write();

        System.out.println();


    }

    /**
     * @param url
     * @return website content
     */
    public static String httpClient(String url) throws IOException {

        //
        HttpGet httpGet = new HttpGet(url.toString());

        //
        CloseableHttpResponse response = null;


        //StringBuffer resBuffer = null;
        long start = 0L;
        StringBuilder sb = null;
        InputStream resStream = null;
        String restr = "";
        try {
            logger.debug("GET httpClient START: " + url);

            start = System.currentTimeMillis();
            // 获得api返回的结果
            response = httpclient.execute(httpGet);
            logger.debug("GET httpClient END: " + url);

            // 获得entity
            HttpEntity entity = response.getEntity();

            // 流化
            resStream = entity.getContent();

            System.out.println("get client stream : " + (System.currentTimeMillis() - start) / 1000);

            start = System.currentTimeMillis();


            //sb = converStreamToString(resStream);
            restr = InputStreamTOString(resStream);

        } catch (Exception e) {
            // TODO
            System.out.println(e);

        } finally {
            resStream.close();
        }

        System.out.println("get client convert to string : " + (System.currentTimeMillis() - start) / 1000);
        //return sb.toString();
        return restr;
    }

    /**
     * @param url
     * @return website content
     */
    public static String httpConnectClient(String url) throws IOException {

        URL purl = new URL(url);

        HttpURLConnection pcon = (HttpURLConnection) purl.openConnection();

        long start = System.currentTimeMillis();
        InputStream is = pcon.getInputStream();
        System.out.println("get connection stream : " + (System.currentTimeMillis() - start) / 1000);

        start = System.currentTimeMillis();
        StringBuilder sb = converStreamToString(is);
        System.out.println("get connection convert to string : " + (System.currentTimeMillis() - start) / 1000);

        return sb.toString();
    }


    public static StringBuilder converStreamToString(InputStream is) throws IOException {

        BufferedReader reader = null;
        String all = "";

        try {
            //reader = new BufferedReader(new InputStreamReader(is, "shift-jis"));
            reader = new BufferedReader(new InputStreamReader(is, "utf8"));

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        }

        StringBuilder sb = new StringBuilder();

        String line = null;


        try {
            while ((line = reader.readLine()) != null) {
                sb.append(line);
                //all.concat(line);
            }

            reader.close();
        } catch (IOException e1) {
            e1.printStackTrace();
        } finally {
            try {
                is.close();
            } catch (IOException e2) {
                e2.printStackTrace();
            }

        }

        return sb;


    }

    /**
     * 将InputStream转换成String
     *
     * @param in InputStream
     * @return String
     * @throws Exception
     */
    public static String InputStreamTOString(InputStream in) throws Exception {

        ByteArrayOutputStream outStream = new ByteArrayOutputStream();
        byte[] data = new byte[BUFFER_SIZE];
        int count = -1;
        while ((count = in.read(data, 0, BUFFER_SIZE)) != -1)
            outStream.write(data, 0, count);

        data = null;
        // return new String(outStream.toByteArray(), "shift-jis");
        return new String(outStream.toByteArray(), "utf8");
    }

}
