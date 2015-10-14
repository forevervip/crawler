package com.waoooh.crawler.utils.bean;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yanglu on 2015/8/13.
 */
public class GroupNameIDBean {

    private String groupName;
    private String groupId;

    private String urlPattern;

    private String params = "";

    public String getParams() {
        return params;
    }

    public void setParams(String params) {
        this.params = params;
    }

    public String getUrlPattern() {
        return urlPattern;
    }

    public void setUrlPattern(String urlPattern) {
        this.urlPattern = urlPattern;
    }

    private int left_bracket_count = 0;
    private int right_bracket_count = 0;

    private int list_left_bracket_count = 0;
    private int list_right_bracket_count = 0;

    public int getList_right_bracket_count() {
        return list_right_bracket_count;
    }

    public void setList_right_bracket_count(int list_right_bracket_count) {
        this.list_right_bracket_count = list_right_bracket_count;
    }

    public int getList_left_bracket_count() {
        return list_left_bracket_count;
    }

    public void setList_left_bracket_count(int list_left_bracket_count) {
        this.list_left_bracket_count = list_left_bracket_count;
    }


    public int getLeft_bracket_count() {
        return left_bracket_count;
    }

    public void setLeft_bracket_count(int left_bracket_count) {
        this.left_bracket_count = left_bracket_count;
    }

    public int getRight_bracket_count() {
        return right_bracket_count;
    }

    public void setRight_bracket_count(int right_bracket_count) {
        this.right_bracket_count = right_bracket_count;
    }

    List<GroupNameIDBean> listBean = new ArrayList<GroupNameIDBean>();

    public void setGroupName(String groupName) {
        this.groupName = groupName;
    }

    public void setGroupId(String groupId) {
        this.groupId = groupId;
    }

    public String getGroupName() {
        return groupName;
    }

    public String getGroupId() {
        return groupId;
    }

    public List<GroupNameIDBean> getListBean() {
        return listBean;
    }
}
