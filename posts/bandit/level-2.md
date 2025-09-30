---
title: "OTW Bandit"
description: "Level 2"
prevLink: "./level-1"
prevTitle: "Level 1"
nextLink: "./level-3"
nextTitle: "Level 3"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit2
```

### Password

```bash
263JGJPfgU6LtdEvgfWU1XP5yac29mFx
```

### Walkthrough

If we list the files of the directory, using the `ls` command, we get the following output:

```bash
--spaces in this filename--
```

Which we can't read directly, since there are spaces in the file name. To read a file which has spaces, we use the following command.

```bash
cat ./--spaces\ in\ this\ filename--
```

We also use the file path `./` because the file starts with `--`, which is used for command flags in the linux CLI, such as `cat --help`.

We then get the flag.

### Flag

||  MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx  ||