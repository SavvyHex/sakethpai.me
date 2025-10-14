---
title: "OTW Bandit"
description: "Level 6"
prevLink: "./level-5"
prevTitle: "Level 5"
prevLink: "./level-7"
prevTitle: "Level 7"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit6
```

### Password

```bash
HWasnPhtq9AVKe0dmk45nxy20cvUa6EG
```

### Walkthrough

According to the website, the file has the following properties:
- Anywhere on the server
- Owned by user bandit7
- Owned by group bandit6
- 33 bytes in size

Keeping all of this in mind, we can type one single command to list all files which come under these criteria.

```bash
find / -user bandit7 -group bandit6 -size 33c
```

However, if we do this, we get a bunch of files which we don't have permission to access. While we could manually go through the list, we could also refine our command by feeding the errors to `/dev/null`

```bash
find / -user bandit7 -group bandit6 -size 33c 2>/dev/null
```

And we get the desired file as

```bash
/var/lib/dpkg/info/bandit7.password
```

Which, after reading, we get the flag.

### Flag

||  morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj  ||