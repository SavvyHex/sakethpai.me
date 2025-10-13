---
title: "OTW Bandit"
description: "Level 4"
prevLink: "./level-3"
prevTitle: "Level 3"
nextLink: "./level-5"
nextTitle: "Level 5"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit4
```

### Password

```bash
2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ
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
-file00  -file01  -file02  -file03  -file04  -file05  -file06  -file07  -file08  -file09
```

According to the website, 

> The password for the next level is stored in the only human-readable file in the inhere directory. 

While we could manually try and `cat` each file, a smarter solution would be to use the `file` command to list the file type of each file in this directory. To do so, we use:

```bash
file ./*
```

After which we get the following output:

```bash
./-file00: Non-ISO extended-ASCII text, with no line terminators, with overstriking
./-file01: data
./-file02: data
./-file03: data
./-file04: data
./-file05: data
./-file06: data
./-file07: ASCII text
./-file08: data
./-file09: data
```

Clearly, `-file07` is the file we want. If we read the contents using:

```bash
cat ./-file07
```

We then get the flag.

### Flag

||  4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw  ||