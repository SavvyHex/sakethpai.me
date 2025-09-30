---
title: "OTW Bandit"
description: "Level 1"
prevLink: "./level-0"
prevTitle: "Level 0"
nextLink: "./level-2"
nextTitle: "Level 2"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit1
```

### Password

```bash
ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If
```

### Walkthrough

If we list the files of the directory, using the `ls` command, we get the following output:

```bash
-
```

But if we try to read it like last time

```bash
cat -
```

Our cursor simply moves to the next line. This is because the character `-` is used to accept input. So `cat -` would print whatever you enter back out into the terminal. To circumvent this issue, we can use the path of the file instead of just the file name.

```bash
cat ./-
```

We then get the flag.

### Flag

||  263JGJPfgU6LtdEvgfWU1XP5yac29mFx  ||