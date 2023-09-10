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
- following a Selenium setup tutorial, modifying the script to suit my needs, no more Pytest classes just straight to assign driver to WebDriver and go scrape.
- I found downloading latest version of WebDriver hassle and solved it with WebDriver-manager module.

I can ...




After fixing those issues and polishing the web app execution, I finalized it and kept other non-working features disabled in the meantime.


You can see [my web app here](https://digicitiesph.streamlit.app/).

![](https://i.imgur.com/vOhsxhE.png)

I'll write more in this post later.
