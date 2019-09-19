Feature: As a user, I want to check Google on cross browser

  Scenario Outline: Google cross browser
    Given launch browser '<browser>'
    When User navigate to the URL 'https://www.google.com/'
    And User search for the headline news from the guardian site
    Then User should see a list of other sources with similar news details

    Examples:
      | browser |
      | chrome  |
      | firefox |