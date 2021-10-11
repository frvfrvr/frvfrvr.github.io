---
layout: post
title: Userbot a key to empower Telegram groups
description: Host events, build a game that keeps people playing everyday, form a group to assist on outreach.
---
```
It's been a while since I've been assigned to manage a community and did an outreach through games and events. I've been told that it's a relaxed job, don't need to do full time on it. 

Yet I was eager to accomplish one goal - **to build a self-sustaining local community.**

Before I took the job, the group used to be eeriely quiet, that made me reluctant to host any games on his behalf. That and lack of support and enthusiasm from admin caused some active users to flock away.

To solve, I laid out my own blueprint on how the group will work in coming months:

Host events, build a game that keeps people playing everyday, form a group to assist on outreach.

Any activity is better than no activity. 

So after hosting two successful events, I start thinking of a game so it will still be ongoing while I focus on planning on next step. That's when on yearend, I started an endless dice games that gives people reward upon reaching certain points. It used to be manual at first, went from 5 players daily to 35+ players daily in March. 

At this point, there are times the assigned tipper is offline when everyone needs him, so automation is needed.

Enter this bot.

![Buddybot](https://raw.githubusercontent.com/frvfrvr/frvfrvr.github.io/master/images/tgbot1.png)


I planned this as early as January and even went to make it until March.

Bots were a solution to this problem, but during the manual run, we use a Tip bot to tip rewards. Bots can't communicate to Tip bot straight, then I've read this [article](https://telegra.ph/How-a-Userbot-superacharges-your-Telegram-Bot-07-09). Userbots made this possible. I used a Python library Pyrogram for its very readable scripts and easy to read documentation. Developed the whole March. I built a working prototype that tips users automatically upon reaching points. Then with the help of testers (now assigned as game moderators), I've added anti-looting measures such as minimum message to reach daily before playing. This pushed me to complete it as early as April when users found something suspicious in particular players just went to play and never talk to anyone. It gives a bad vibe that group was just a game center, away from being a friendly community. I've talked them out and they left without repurcussions, if anything, one person donated back the rewards. 

In April, I added more games from my previous events so it will be faster to use.

A week before release, I've done a dry run to see the workings of the bot and bug hunting.
At April 25, the bot has become stable and ready to host games with help of community.
```
