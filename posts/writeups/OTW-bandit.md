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

## Level 12

Compressed into a ball

### Commands

```bash
mkdir /tmp/data
cp data.txt /tmp/data
cd /tmp/data
file data.txt
xxd -r data.txt data1
file data1
mv data1 data2.gz
gzip -d data2.gz
file data2
mv data2 data3.bz2
bzip2 -d data3.bz2
file data3
mv data3 data4.gz
gzip -d data4.gz
file data4
tar -xvf data4
file data5.bin
tar -xvf data5.bin
file data6.bin
mv data6.bin data7.bz2
bzip2 -d data7.bz2
file data7
tar -xvf data7
file data8.bin
mv data8.bin data8.gz
gzip -d data8.gz
file data8
cat data8
```

### Flag

|| FO5dwFsc0cbaIiH0h8J2eUks2vdTDwAn ||


## Level 13

Advanced SSH

### Commands

```bash
scp -P 2220 bandit13@bandit.labs.overthewire.org:sshkey.private .
chmod 700 sshkey.private
ssh -i sshkey.private bandit14@bandit.labs.overthewire.org -p 2220
```

### Flag

|| MU4VWeTyJk8ROof1qqmcBPaLh7lDCPvS ||

## Level 14

Netcat

### Commands

```bash
cat /etc/bandit_pass/bandit14
nc localhost 30000
```

### Flag

|| 8xCjnmgoKbGLhHFAZlGE5Tmu4M2tKJQo ||

## Level 15

OpenSSL

### Commands

```bash
openssl s_client -connect localhost:30001 -ign_eof
```

### Flag

|| kSkvUpMQ7lBYyCM4GBPvCvT1BfWRy0Dx ||

## Level 16

nmap

### Commands

```bash
nmap -sV localhost -p 31000-32000
```

### Flag

|| NA ||

## Level 17

diff

### Commands

```bash
diff passowords.new passwords.old
```

### Flag

|| x2gLTTjFwMOhQ8oWNbMN362QKxfRqGlO ||

## Level 18

bashrc

### Commands

```bash
ssh -T bandit.labs.overthewire.org -p 2220 -l bandit18
cat readme
```

### Flag

|| cGWpMaKXVwDUNgPAVJbWYuGHVn9zl3j8 ||

## Level 19

do-as

### Commands

```bash
./bandit20-do cat /etc/bandit_pass/bandit20
```

### Flag

|| 0qXahG8ZjOVMN9Ghs7iOWsCfZyXOUbYO ||

## Level 20

suconnect