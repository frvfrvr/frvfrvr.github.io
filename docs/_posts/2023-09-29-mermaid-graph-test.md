---
layout: post
title: Mermaid graph test
description: Testing Mermaid flowchart
---


```mermaid
flowchart TD
    A([User]) --> B[Streamlit App]
    B --> C[Selenium]
    C -- extracts each city data\nof province from --> D[(Digital Cities PH\n Website)] 
    D -- transforms each city data\n to respective categories in tables --> E[Pandas]
    E -- load the tables for preview --> B
    B -- exports tables to CSV/Excel --> A

```