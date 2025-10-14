---
title: "OTW Bandit"
description: "Level 7"
prevLink: "./level-6"
prevTitle: "Level 6"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit7
```

### Password

```bash
morbNTDkSW6jIlUc0ymOdMaLnOlFVAaj
```

### Walkthrough

This level appears to be fairly straighforward, with the website even telling us that the flag is in `data.txt`. However, if we read the file, we find that there are a large number of lines of text, each one in the format

```bash
[word] [flag]
```

However, the website gives us a hint by explaining that the string we want is next to the word "millionth", so we can use the following command to get the flag

```bash
grep "millionth" data.txt
```

As expected, we get only one line of output, with the word "millionth", followed by the flag itself.

### Flag

||  dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc  ||