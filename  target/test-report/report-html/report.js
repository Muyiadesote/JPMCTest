$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Features/verifyNews.feature");
formatter.feature({
  "line": 1,
  "name": "As a user, I want to validate news article from guardian news website",
  "description": "on similar resources, so that I can confirm that the news article is not FAKE news",
  "id": "as-a-user,-i-want-to-validate-news-article-from-guardian-news-website",
  "keyword": "Feature"
});
formatter.before({
  "duration": 6722627513,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Launch guardian news website",
  "description": "",
  "id": "as-a-user,-i-want-to-validate-news-article-from-guardian-news-website;launch-guardian-news-website",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I navigate to the guardian news website",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on the news link from the menu",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I select the headlines news",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I should be able to see the news page of that headline",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I should be able to copy and save to file the headline of the news",
  "keyword": "And "
});
formatter.match({
  "location": "verifyNewsTest.i_navigate_to_the_guardian_news_website()"
});
formatter.result({
  "duration": 16688767012,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_click_on_the_news_link_from_the_menu()"
});
formatter.result({
  "duration": 7983222472,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_select_the_headlines_news()"
});
formatter.result({
  "duration": 18801741826,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_should_be_able_to_see_the_news_page_of_that_headline()"
});
formatter.result({
  "duration": 206573258,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_should_be_able_to_copy_and_save_to_file_the_headline_of_the_news()"
});
formatter.result({
  "duration": 813089437,
  "status": "passed"
});
formatter.after({
  "duration": 58757,
  "status": "passed"
});
formatter.before({
  "duration": 4789389745,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To validate the headline news retrieved from guardian news with other resources on google",
  "description": "",
  "id": "as-a-user,-i-want-to-validate-news-article-from-guardian-news-website;to-validate-the-headline-news-retrieved-from-guardian-news-with-other-resources-on-google",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 12,
  "name": "I navigate to google website",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "I search for the headline news from the guardian site",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "I should see a list of other sources with similar news details",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "I am able to confirm that the news article Fake or not",
  "keyword": "And "
});
formatter.match({
  "location": "verifyNewsTest.i_navigate_to_google_website()"
});
formatter.result({
  "duration": 1884201573,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_search_for_the_headline_news_from_the_guardian_site()"
});
formatter.result({
  "duration": 3109941355,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_should_see_a_list_of_other_sources_with_similar_news_details()"
});
formatter.result({
  "duration": 2092409309,
  "status": "passed"
});
formatter.match({
  "location": "verifyNewsTest.i_am_able_to_confirm_that_the_news_article_Fake_or_not()"
});
formatter.result({
  "duration": 2286285404,
  "status": "passed"
});
formatter.after({
  "duration": 48498,
  "status": "passed"
});
});