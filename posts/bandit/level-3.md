---
title: "OTW Bandit"
description: "Level 3"
prevLink: "./level-2"
prevTitle: "Level 2"
nextLink: "./level-4"
nextTitle: "Level 4"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit3
```

### Password

```bash
MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx
```

### Walkthrough

If we list the files of the directory, using the `ls` command, we get the following output:

```bash
inhere
```

We must then enter the folder using

```bash
cd inhere
```

And then again use the `ls` command to see the contents. However, we do not get any output. This may be because there is a **hidden file**. A hidden file is one that starts with a `.` and doesn't appear when we use the `ls` command. To see those files, we use the `-a` flag with `ls`, which shows all files.

```bash
ls -a
```

We get this output:

```bash
.  ..  ...Hiding-From-You
```

As predicted, the file name starts with a period. The first two, which are `.` and `..` represent the current location and the parent destination, respectively. We simply read the file using the `cat` command.

```bash
cat ...Hiding-From-You
```

We then get the flag.

### Flag

||  2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ  ||