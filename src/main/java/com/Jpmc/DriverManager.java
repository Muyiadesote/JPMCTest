package com.Jpmc;

import org.openqa.selenium.WebDriver;

/**
 * Created by Musti on 18/09/2019.
 */
public class DriverManager {

    public static ThreadLocal<WebDriver> dr = new ThreadLocal<WebDriver>();

    public static WebDriver getDriver() {

        return dr.get();

    }

    public static void setWebDriver(WebDriver driver) {

        dr.set(driver);
    }

}
