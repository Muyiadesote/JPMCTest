package com.Jpmc;

import cucumber.api.CucumberOptions;
import org.testng.annotations.Test;
import cucumber.api.testng.TestNGCucumberRunner;



@CucumberOptions(
        features="src/test/resources/Features/verifyNews.feature",
        glue="com.Jpmc.Step_definition")
public class verifyNewsRunner {

    @Test
    public void runCukes() {

        new TestNGCucumberRunner(getClass()).runCukes();

    }
}