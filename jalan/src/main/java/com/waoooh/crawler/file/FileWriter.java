package com.waoooh.crawler.file;

import java.io.*;

/**
 * Created by lulu on 15/8/16.
 */
public class FileWriter {

    private String path;
    private String writeStr;

    public FileWriter(String path, String writeStr) {
        this.path = path;
        this.writeStr = writeStr;
    }

    public static FileWriter getInstance(String path, String writeStr) {
        return new FileWriter(path, writeStr);
    }

    public void write() throws IOException {
        FileOutputStream fos = new FileOutputStream(path);
        OutputStreamWriter osw = new OutputStreamWriter(fos, "UTF-8");
        BufferedWriter bfw = new BufferedWriter(osw);

        bfw.write(writeStr);

        bfw.close();
        osw.close();
        fos.close();
    }


}
