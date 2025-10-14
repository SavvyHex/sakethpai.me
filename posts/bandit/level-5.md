---
title: "OTW Bandit"
description: "Level 5"
prevLink: "./level-4"
prevTitle: "Level 4"
nextLink: "./level-6"
nextTitle: "Level 6"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit5
```

### Password

```bash
4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw
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

Now if we enter the `ls` command, we get this output:

```bash
maybehere00  maybehere02  maybehere04  maybehere06  maybehere08  maybehere10  maybehere12  maybehere14  maybehere16  maybehere18
maybehere01  maybehere03  maybehere05  maybehere07  maybehere09  maybehere11  maybehere13  maybehere15  maybehere17  maybehere19
```

According to the website, the file we're looking for has the following properties:
- human-readable
- 1033 bytes in size
- not executable

In this scenario, reading the contents of all files, in all 20 folders is definitely not an option. We not have to use the `find` command to search for files in all folders. We can make use of flags to narrow down our results.

```bash
find . -type f -size 1033c -readable
```

After which we get the following output:

```bash
./maybehere07/.file2
```

Clearly, this is the file we want. If we read the contents using:

```bash
cat ./maybehere07/.file2
```

We then get the flag.

Note that we do get a large number of spaces, this is to increase the file size to 1033 bytes.

### Flag

||  HWasnPhtq9AVKe0dmk45nxy20cvUa6EG  ||