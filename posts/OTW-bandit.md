---
title: "OTW Bandit"
description: "Linux Fundamentals"
---

This is a writeup for the [Over the Wire Bandit Wargames](https://overthewire.org/wargames/bandit/) for all the levels. The bandit wargames is a great way to get started with the Linux CLI.

# How to Play

To play the bandit wargame, simply open a terminal and SSH into the wargame using the command:

```bash
ssh bandit.labs.overthewire.org -p 2220 -l <level>
```

Where `<level>` should be replaced with the level of wargame you're currently playing.

After that command has been executed, you will be prompted to add the bandit server to your list of known hosts. Enter "yes".

You will then be prompted for a password. Note that **the password for each level is the flag for the previous level**.

# Levels

## Level 0

Cat 1.0

### Commands

```bash
cat readme
```

### Flag

||  ZjLjTmM6FvvyRnrb2rfNWOZOTa6ip5If  ||

## Level 1

Cat 2.0

### Commands

```bash
cat ./-
```

### Flag

||  263JGJPfgU6LtdEvgfWU1XP5yac29mFx  ||

## Level 2

Cat 3.0

### Commands

```bash
cat ./--spaces\ in\ this\ filename--
```

### Flag

||  MNk8KNH3Usiio41PRUEoDFPqfxLPlSmx  ||

## Level 3

List all

### Commands

```bash
cd inhere
ls -a
cat ...Hiding-From-You
```

### Flag

||  2WmrDFRmJIq3IPxneAaMGhap0pFhF3NJ  ||

## Level 4

File types

### Commands

```bash
cd inhere
file ./*
cat ./-file07
```

### Flag

||  4oQYVPkxZOOEOO5pTW81FB8j8lxXGUQw  ||

## Level 5

Finding files

### Commands

```bash
cd inhere
find . -type f -size 1033c -readable
cat ./maybehere07/.file2
```

### Flag

||  HWasnPhtq9AVKe0dmk45nxy20cvUa6EG  ||

## Level 6

Find 2.0

### Commands

```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
cat /var/lib/dpkg/info/bandit7.password
```

### Flag

||  morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj  ||

## Level 7

Grep

### Commands

```bash
grep "millionth" data.txt
```

### Flag

||  dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc  ||

## Level 8

Uniq

### Commands

```bash
cat data.txt | sort | uniq -u
```

### Flag

||  4CKMh1JI91bUIZZPXDqGanal4xvAg0JM  ||

## Level 9

Strings

### Commands

```bash
strings -d data.txt | grep '=='
```

### Flag

||  FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey  ||

## Level 10

Base64

### Commands

```bash
base64 -d data.txt
```

### Flag

|| dtR173fZKb0RRsDFSGsg2RWnpNVj3qRr ||

## Level 11

ROT13

### Commands

```bash
cat data.txt | tr 'A-Za-z' "N-ZA-Mn-za-m"
```

### Flag

|| 7x16WNeHIi5YkIhWsfFIqoognUTyj9Q4 ||