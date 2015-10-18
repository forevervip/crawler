package com.waoooh.crawler.utils.t_getime;

import java.util.List;

/**
 * Created by yanglu on 2015/10/17.
 */
public class RegionObject {

    private int level;

    private String area_code;

    private String area_name_en;

    private String area_name_local;

    private List<RegionObject> regionObjectList;

    public boolean hasChildren() {
        return this.regionObjectList == null;
    }

    public int getLevel() {
        return level;
    }

    public void setLevel(int level) {
        this.level = level;
    }

    public String getArea_code() {
        return area_code;
    }

    public void setArea_code(String area_code) {
        this.area_code = area_code;
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

    public List<RegionObject> getRegionObjectList() {
        return regionObjectList;
    }

    public void setRegionObjectList(List<RegionObject> regionObjectList) {
        this.regionObjectList = regionObjectList;
    }
}
