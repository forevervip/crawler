package com.waoooh.crawler.utils.t_getime;

import java.security.SecureRandom;

/**
 * Created by yanglu on 2015/10/18.
 */
public class DataBean {

    private String linkageid;

    private String name;

    private String area_name_en;

    private String area_name_local;

    private String area_code_path;

    private String style;

    private String parentid;

    private String area_code;

    private String parent_code;

    private String child;

    private String arrchildid;

    private String keyid;

    private String listorder;

    private String description;

    private String setting;

    private String siteid;

    private String status;

    private String update_userid;

    private String update_time;

    private final String SINGLE_QUOTE = "'";

    private String attachQuote(String str) {
        return SINGLE_QUOTE.concat(str).concat(SINGLE_QUOTE);
    }

    public static DataBean I() {
        return new DataBean();
    }

    private String switchNull(String str) {
        if (null == str) {
            return "null";
        }

        return attachQuote(str);
    }

    public DataBean custom(
            String key,             // ■ 1 AI主key
            String name,            // ■ 2 中文名
            String area_name_en,    // ■ 3 英文名
            String area_name_local, // ■ 4 日文名
            String area_code,       // ■ 5 区域code
            String parentid,        // ■ 6 如果存在子节点 则填写'0' 如果没有子节点（叶子节点）填写 直接上级节点的linkageid值
            String child,           // ■ 7 child 是否叶子节点, 是的话填写'0' 不是填写'1'
            String arrchildid,      // ■ 8 填写该节点下的所有子节点的linkageid值 中间以,分隔
            String keyid            // ■ 9 填写 ROOT节点的linkageid值
    )

    {

        // ■　1
        this.linkageid = switchNull(key);

        // ■　2
        this.name = switchNull(name);

        // ■　3
        this.area_name_en = switchNull(area_name_en);

        // ■　4
        this.area_name_local = switchNull(area_name_local);

        // 区域路径，填写 ''
        this.area_code_path = switchNull("");

        // 填写 ''
        this.style = switchNull("");

        // ■　5 区域编码
        this.area_code = switchNull(area_code);

        // ■  6　如果存在子节点 则填写'0' 如果没有子节点（叶子节点）填写 直接上级节点的linkageid值
        this.parentid = switchNull(parentid);

        // 填写''
        this.parent_code = switchNull("");

        // ■  7　child 是否叶子节点, 是的话填写'0' 不是填写'1'
        this.child = switchNull(child);

        // ■  8  填写该节点下的所有子节点的linkageid值 中间以,分隔
        this.arrchildid = switchNull(arrchildid);

        // ■  9
        this.keyid = switchNull(keyid);

        this.listorder = switchNull("0");

        this.description = switchNull("");

        this.setting = switchNull("");

        this.siteid = switchNull("0");

        this.status = switchNull("1");

        this.update_userid = switchNull("");

        this.update_time = switchNull("");

        return this;

    }

    public String toString() {
        return
                "(".concat(linkageid).
                        concat(",").
                        concat(name).concat(",").
                        concat(area_name_en).concat(",").
                        concat(area_name_local).concat(",").
                        concat(area_code_path).concat(",").
                        concat(style).concat(",").
                        concat(parentid).concat(",").
                        concat(area_code).concat(",").
                        concat(parent_code).concat(",").
                        concat(child).concat(",").
                        concat(arrchildid).concat(",").
                        concat(keyid).concat(",").
                        concat(listorder).concat(",").
                        concat(description).concat(",").
                        concat(setting).concat(",").
                        concat(siteid).concat(",").
                        concat(status).concat(",").
                        concat(update_userid).concat(",").
                        concat(update_time).
                        concat(")")
                ;
    }


    public String getLinkageid() {
        return linkageid;
    }

    public void setLinkageid(String linkageid) {
        this.linkageid = linkageid;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArea_name_en() {
        return area_name_en;
    }

    public void setArea_name_en(String area_name_en) {
        this.area_name_en = area_name_en;
    }

    public String getArea_name_local() {
        return area_name_local;
    }

    public void setArea_name_local(String area_name_local) {
        this.area_name_local = area_name_local;
    }

    public String getArea_code_path() {
        return area_code_path;
    }

    public void setArea_code_path(String area_code_path) {
        this.area_code_path = area_code_path;
    }

    public String getStyle() {
        return style;
    }

    public void setStyle(String style) {
        this.style = style;
    }

    public String getParentid() {
        return parentid;
    }

    public void setParentid(String parentid) {
        this.parentid = parentid;
    }

    public String getArea_code() {
        return area_code;
    }

    public void setArea_code(String area_code) {
        this.area_code = area_code;
    }

    public String getParent_code() {
        return parent_code;
    }

    public void setParent_code(String parent_code) {
        this.parent_code = parent_code;
    }

    public String getChild() {
        return child;
    }

    public void setChild(String child) {
        this.child = child;
    }

    public String getArrchildid() {
        return arrchildid;
    }

    public void setArrchildid(String arrchildid) {
        this.arrchildid = arrchildid;
    }

    public String getKeyid() {
        return keyid;
    }

    public void setKeyid(String keyid) {
        this.keyid = keyid;
    }

    public String getListorder() {
        return listorder;
    }

    public void setListorder(String listorder) {
        this.listorder = listorder;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getSetting() {
        return setting;
    }

    public void setSetting(String setting) {
        this.setting = setting;
    }

    public String getSiteid() {
        return siteid;
    }

    public void setSiteid(String siteid) {
        this.siteid = siteid;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getUpdate_userid() {
        return update_userid;
    }

    public void setUpdate_userid(String update_userid) {
        this.update_userid = update_userid;
    }

    public String getUpdate_time() {
        return update_time;
    }

    public void setUpdate_time(String update_time) {
        this.update_time = update_time;
    }
}
