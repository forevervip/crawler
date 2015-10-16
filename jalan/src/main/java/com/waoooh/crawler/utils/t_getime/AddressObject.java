package com.waoooh.crawler.utils.t_getime;

/**
 * Created by yanglu on 2015/10/15.
 */
public class AddressObject {

    private String area_name_1;
    private String area_name_2;
    private String area_name_3;

    private String area_code_1;
    private String area_code_2;
    private String area_code_3;

    private String area_roman_1;

    private String area_roman_2;

    public String getArea_roman_3() {
        return area_roman_3;
    }

    public void setArea_roman_3(String area_roman_3) {
        this.area_roman_3 = area_roman_3;
    }

    public String getArea_roman_1() {
        return area_roman_1;
    }

    public void setArea_roman_1(String area_roman_1) {
        this.area_roman_1 = area_roman_1;
    }

    public String getArea_roman_2() {
        return area_roman_2;
    }

    public void setArea_roman_2(String area_roman_2) {
        this.area_roman_2 = area_roman_2;
    }

    private String area_roman_3;

    public String getArea_name_1() {
        return area_name_1;
    }

    public void setArea_name_1(String area_name_1) {
        this.area_name_1 = area_name_1;
    }

    public String getArea_name_2() {
        return area_name_2;
    }

    public void setArea_name_2(String area_name_2) {
        this.area_name_2 = area_name_2;
    }

    public String getArea_name_3() {
        return area_name_3;
    }

    public void setArea_name_3(String area_name_3) {
        this.area_name_3 = area_name_3;
    }

    public String getArea_code_1() {
        return area_code_1;
    }

    public void setArea_code_1(String area_code_1) {
        this.area_code_1 = area_code_1;
    }

    public String getArea_code_2() {
        return area_code_2;
    }

    public void setArea_code_2(String area_code_2) {
        this.area_code_2 = area_code_2;
    }

    public String getArea_code_3() {
        return area_code_3;
    }

    public void setArea_code_3(String area_code_3) {
        this.area_code_3 = area_code_3;
    }

    public String toString() {

        return "area_code_1:".concat(this.area_code_1).concat("\n")
                .concat("area_code_2:").concat(this.area_code_2).concat("\n")
                .concat("area_code_3:").concat(this.area_code_3).concat("\n")
                .concat("-------------------").concat("\n")
                .concat("area_name_1:").concat(this.area_name_1).concat("\n")
                .concat("area_name_2:").concat(this.area_name_2).concat("\n")
                .concat("area_name_3:").concat(this.area_name_3).concat("\n")
                .concat("-------------------").concat("\n")
                .concat("area_roman_1:").concat(this.area_roman_1).concat("\n")
                .concat("area_roman_2:").concat(this.area_roman_2).concat("\n")
                .concat("area_roman_3:").concat(this.area_roman_3).concat("\n");


    }
}
