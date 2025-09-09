---
title: "OTW Bandit Part 1"
description: "Covers levels 0 to 17"
---

This is a writeup for the [Over the Wire Bandit Wargames](https://overthewire.org/wargames/bandit/) from level 0 to level 17. The bandit wargames is a great way to get started with the Linux CLI.

## Table of Contents

1. [How to Play](#how-to-play)
2. [Level 0](#level-0)

## How to Play

To play the bandit wargame, simply open a terminal and SSH into the wargame using the command:

```bash
ssh bandit.labs.overthewire.org -p 2220 -l <level>
```

Where `<level>` should be replaced with the level of wargame you're currently playing.

After that command has been executed, you will be prompted to add the bandit server to your list of known hosts. Enter "yes".

![alt text](/posts/images/OTW_bandit/fingerprint.png)

You will then be prompted for a password. Note that **the password for each level is the flag for the previous level**.

## Level 0

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit0
```

### Password

```bash
bandit0
```

### Walkthrough

If we list the files of the directory, using the `ls` command, we get the following output:

![alt text](/posts/images/OTW_bandit/level0/l0.png)

After reading the contents using the command

```bash
cat readme
```

We get the flag.

### Flag

||  ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If  ||