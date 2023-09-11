---
layout: post
title: Showcasing my first Streamlit app DigiCitiesPH
description: My learnings with Selenium and web scraping
---
A year ago, I have completed a final project in online data science course where I have to gather the data from the website called [Digital Cities PH](https://www.digitalcitiesph.com/) and back then, I don't have the grasp of Selenium and generally web scraping or extracting. It was all selecting text and manual encoding to Excel. While it's possible to extract these using a Python module Pandas, that's only for Wikipedia or HTML tables as far as I have known and this was not.

![](https://i.imgur.com/2gMlBcc.png)

Each city profile has four categories and clicking one of them does not change the URL, which if it does would make it possible for BeautifulSoup to scrape static pages. This demonstrates the content is loaded dynamically.

For the contents under it, it is structured in `div>ul>li` tags not `table>tr>th` tags. Not only that, but also each column from one collapsible metric is `div` tag.

![](https://i.imgur.com/9PiO8ct.png)

That was tip of the iceberg for data from all the cities in one province has to be gathered, so large province like Cebu with 53 cities / municipalities would be time consuming to manually encode them.

![](https://i.imgur.com/5BUmnzQ.png)

I planned to create a web extractor and the closest Python web framework that can do this is [Streamlit](https://streamlit.io/). First it was data science oriented web framework that means it can run and handle Python visualization libraries on the fly. That "on the fly" aspect came to mind when I think of applying Selenium into the web app. However, in most web apps made in Streamlit, you either have to upload the data locally or rely on established APIs. This might be the first proper Streamlit app intergrated with Selenium if it gets published, at least that's what I know.

Selenium is usually run on script alone or on Jupyter Notebook and requires installation of browser's WebDriver. When I first used it from Requests and BeautifulSoup, I had no idea. The tutorials helped but I forgot I was aiming to intergrate it into Streamlit and the keyword I was looking for was "headless mode" which doesn't require web browser window to launch.

Now for the web scraping part, I used Chrome extensions Selenium IDE and SelectorGadget. Selenium IDE for recording the text from actions and export it to Python unittest script and SelectorGadget for selecting XPath of relative elements and that one was tricky to use until I saw the demo where you have to select and reject unrelated elements to pinpoint the XPath of element you're looking for.

![](https://i.imgur.com/9e6SIcz.png)

All of this work wouldn't be possible without note-taking app [Obsidian](https://obsidian.md/). It is also a personal knowledge base and has mindmapping interface called Canvas. This is where I mindmap a web scraping routine plan and gave myself several options on how to do it efficiently.

![](https://i.imgur.com/JN6hZ2i.png)

Finally after...

- planning a web scraping routine,
- recording actions in Selenium IDE,
- exporting them in Python unittest script,
- following a Selenium setup tutorial, modifying the script to suit my needs, no more Pytest classes just straight to assign driver to WebDriver and go scrape, and added WebDriverWait until element load.
- I found downloading latest version of WebDriver hassle and solved it with WebDriver-manager module.

I can build a Streamlit app on top of this. I imagined what UI looked like for web extractor app and placed widgets with help of [its cheatsheet](https://docs.streamlit.io/library/cheatsheet). I looked for [similar](https://github.com/snehankekre/streamlit-selenium-chrome) [implementations](https://github.com/Franky1/Streamlit-Selenium) that utilized Selenium in Streamlit. Thanks to them, I also applied [caching](https://docs.streamlit.io/library/api-reference/performance/st.cache_data) to web extracting functions after initial test was slow due to loading the functions of same variables from the start instead of loading the result of those functions. I also ran into issues in exporting the result data to CSV but the Excel export worked alright so I published it to Community Cloud. The extraction mode has Simple and Advanced. I saved the other missing details for Advanced mode which is not available yet as of this writing. Last I added [external dependencies](https://docs.streamlit.io/streamlit-community-cloud/deploy-your-app/app-dependencies) for Selenium such as Chromium and its WebDriver to `packages.txt` along the required modules in `requirements.txt`.

Upon publishing to Community Cloud, the first issue I encountered was Chromium and Webdriver version mismatch. This is common issue that was why I used Webdriver-manager module for this. That was also why it still had a mismatch. In my local machine (*yes it works on my machine*), I installed an older version of Chrome to match with what WDM has.

![](https://i.imgur.com/o9zbfRs.png)

I checked the module's source code itself and saw that source for ChromeDriver binaries is outdated and now in newer site with JSON endpoints. I tried figuring it out to keep updated without WDM until I found [chromedriver-py](https://github.com/breuerfelix/chromedriver-py). Its code has the latest site as its source and it worked out. I replaced WDM with it in `requirements.txt` afterwards.

Another issue I encountered was the extraction routine might be so fast it stopped responding after not waiting to load the next city profile page. It already had waiting mechanism with WebDriverWait but for the app, that was too fast... I appended `time.sleep(10)` before start of routine to fix it.

Then I implemented logging to check if it was successfully extracting each city profile of the province. There are some cities in provinces that didn't get extracted properly (Security Error maybe?). I tried a workaround by adding a skip error option and creating a git branch for this fix since at this point, the web app has been used by several users.

After fixing those issues and polishing the web app execution, I finalized it and kept other non-working features disabled in the meantime.

You can try [my web app here](https://digicitiesph.streamlit.app/).

![](https://i.imgur.com/vOhsxhE.png)

***tl;dr*** I worked on a final project that uses data from the website. Typing manually is hassle so I want to scrape it fast. I tried BeautifulSoup but Selenium worked on dynamic web pages. I used Selenium IDE to record actions on what to scrape from each page and exported to Python script then modified it a bit. I installed WebDriver for Selenium but had version mismatch. Used a Python module to solve this. Made a Streamlit app from tutorials and published it. Python module for latest webdriver replaced with another that works with Streamlit. Disabled features that I can't solved. People used the tool.
