package com.Jpmc.Step_definition;

/**
 * Created by Musti on 19/09/2019.
 */

import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.Properties;
import java.util.concurrent.TimeUnit;

import com.Jpmc.DriverFactory;
import com.Jpmc.DriverManager;
import org.apache.log4j.Logger;
import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;


public class BaseSteps {

    private WebDriver driver;
    private Properties Config = new Properties();
    private FileInputStream fis;
    public Logger log = Logger.getLogger(BaseSteps.class);
    public boolean grid=true;


    public void setUpFramework() {

        configureLogging();
        DriverFactory.setGridPath("http://localhost:4444/wd/hub");
        DriverFactory.setConfigPropertyFilePath(
                System.getProperty("user.dir") + "//src//test//resources//properties//Config.properties");


        if (System.getProperty("os.name").equalsIgnoreCase("mac")) {

            DriverFactory.setChromeDriverExePath(
                    System.getProperty("user.dir") + "//src//test//resources//executables//chromedriverMac_76.0");
            DriverFactory.setGeckoDriverExePath(
                    System.getProperty("user.dir") + "//src//test//resources//executables//geckodriverMac_0.25");

        }else {


            DriverFactory.setChromeDriverExePath(
                    System.getProperty("user.dir") + "//src//test//resources//grid//chromedriverWin_76.0.exe");
            DriverFactory.setGeckoDriverExePath(
                    System.getProperty("user.dir") + "//src//test//resources//grid//geckodriverWin_0.25.exe");
        }
		/*
		 * Initialize properties Initialize logs load executables
		 *
		 */
        try {
            fis = new FileInputStream(DriverFactory.getConfigPropertyFilePath());
        } catch (FileNotFoundException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }
        try {
            Config.load(fis);
            log.info("Config properties file loaded");
        } catch (IOException e) {
            // TODO Auto-generated catch block
            e.printStackTrace();
        }


    }


    public void configureLogging() {
        String log4jConfigFile = System.getProperty("user.dir") + File.separator + "src/test/resources/properties" + File.separator
                + "log4j.properties";
        PropertyConfigurator.configure(log4jConfigFile);
    }

    public void destroyFramework() {

    }

    public void openBrowser(String browser) {

        if(System.getenv("ExecutionType")!=null && System.getenv("ExecutionType").equals("Grid")) {

            grid=true;
        }


        DriverFactory.setRemote(grid);

        if (DriverFactory.isRemote()) {
            DesiredCapabilities cap = null;

            if (browser.equals("firefox")) {

                cap = DesiredCapabilities.firefox();
                cap.setBrowserName("firefox");
                cap.setPlatform(Platform.ANY);

            } else if (browser.equals("chrome")) {

                cap = DesiredCapabilities.chrome();
                cap.setBrowserName("chrome");
                cap.setPlatform(Platform.ANY);
            } else if (browser.equals("ie")) {

                cap = DesiredCapabilities.internetExplorer();
                cap.setBrowserName("iexplore");
                cap.setPlatform(Platform.WIN10);
            }

            try {
                driver = new RemoteWebDriver(new URL(DriverFactory.getGridPath()), cap);
            } catch (MalformedURLException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }

        } else

        if (browser.equals("chrome")) {
            System.out.println("Launching : " + browser);
            System.setProperty("webdriver.chrome.driver",
                    DriverFactory.getChromeDriverExePath());
            driver = new ChromeDriver();
        } else if (browser.equals("firefox")) {
            System.out.println("Launching : " + browser);
            System.setProperty("webdriver.gecko.driver",
                    DriverFactory.getGeckoDriverExePath());
            driver = new FirefoxDriver();

        }

        DriverManager.setWebDriver(driver);
        log.info("Driver Initialized !!!");
        DriverManager.getDriver().manage().window().maximize();
        DriverManager.getDriver().manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);

    }

    public void quit() {

        DriverManager.getDriver().quit();
        log.info("Test Execution Completed !!!");
    }

}