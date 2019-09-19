package com.Jpmc;

import cucumber.api.CucumberOptions;
import cucumber.api.testng.TestNGCucumberRunner;
import org.testng.annotations.Test;

/**
 * Created by Musti on 19/09/2019.
 */

@CucumberOptions(
        features="src/test/resources/Features/verifyNews.feature",
        glue="com.Jpmc.Step_definition")
public class verifyGoogleCrossbrowserRunner {

    @Test
    public void runCukes() {

        new TestNGCucumberRunner(getClass()).runCukes();

    }
}