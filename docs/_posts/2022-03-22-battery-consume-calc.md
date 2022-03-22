---
layout: post
title: Battery Benchmarking Macbook Air (M1, 2020) with own tool
description: Using my tool coded in Python to benchmark battery consumption
---
As of this writing, my battery health was at 99%, 8 battery cycles and in Normal condition since I received the laptop in mid January 2022. I was also using free version of Al Dente to limit my battery charge to 80%.

The 2020 Apple Silicon (M1) model of Macbook Air introduced first model to run on ARM hardware and this was the start of Apple going full ARM transition since iPhones had already been on ARM for a long time. Taking advantage of the new processor, Apple managed to optimize its battery performance akin to what true potential of real portable computing device would become: portability without compromises. Being able to achieve same performance as it is on plugged desktop computer is a goal laptops long for because the average battery consumption of a laptop is 4-8 hours. To tackle that short usage time, Macbook M1 was tested to take [15-18 hours of web browsing and video playback use](https://support.apple.com/kb/SP825?locale=en_US) in a single charge. I'll be honest, if this keeps up, it would finally define what a laptop should be.

I used this laptop for the first time in mid January 2022 and first thing I've tested is the battery usage. Because of its advertised battery usage, I've been looking at the Battery Health settings every other time. Last time I got my hands on a Macbook was around 2011-2012 when that device's last OS version was OS X Tiger and ran on Intel processor.

![](https://i.imgur.com/JCHxm8P.png)

While I can see the time on graph, I can't see particular details of the chart, expecting it to show up when hovering one of the bars. That's when I made a program to benchmark my battery consumption.

![](https://i.imgur.com/vHd32be.png)

I initially coded it in Python for a day and added features through February. Testing the code took the longest since I have to wait a while for my laptop to consume 1-2% before I get to see the errors. Yes, like the Apple engineers thought [Macbook's battery indicator was broken](https://9to5mac.com/2021/07/09/m1-macbook-battery-life/).

Let's go to the M1 Macbook Air battery consumption benchmarks:

- Macbook Air (M1, 2020) - 16GB RAM, 256GB SSD - macOS Big Sur 11.6.3
- The idle battery consumption: It consumes 3-5% a day, with lowest consuming only 1% in February 25. In average day, it consumes 1% every 6 hours.

![Average battery consumption on idle](https://i.imgur.com/AscgnMx.png)

- Battery charges 1% every 1-2 minutes.

![Average time it takes to charge](https://i.imgur.com/SBK0RsT.png)

- For battery cycles, testing on whole 7th battery cycle, from February 18 09:49:12AM to March 10 12:12:50PM. 20 days, 2 hours, 23 minutes, and 38 seconds. 95% idle, 5% active use.

![](https://i.imgur.com/75ZFPo1.png)
![](https://i.imgur.com/37vnYIP.png)

This is the average time it took to consume 1% when I wrote this post.

![](https://i.imgur.com/SSLJ8mZ.png)

These are the processes consuming a total of 8 GB out of 16 GB RAM and Brave Browser topping that with 16 active tabs open as I have yet installed the tab suspender extension. *Truly recommended 16 GB option for future-proofing.*

![](https://i.imgur.com/1W79TKh.png)

If you're interested to test the benchmark tool, you can check [my Github repository](https://github.com/frvfrvr/battery-consume-calc) and run the Python script. I will upload the binary builds later so you don't need to install Python specially for macOS Monterey users having Python not installed by default.
