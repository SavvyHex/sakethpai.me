---
title: "OTW Bandit"
description: "Level 8"
prevLink: "./level-7"
prevTitle: "Level 7"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit8
```

### Password

```bash
dfwvzFQi4mU0wfNbFOe9RoWskMLg7eEc
```

### Walkthrough

The website tells us that the flag is the only line of text that occurs only once. With this knowledge, we can simply type a single command, to

1. Read the file
2. Sort its lines
3. Omit repeated lines

All of which can be done using the pipe `|` operator

```bash
cat data.txt | sort | uniq -u
```

We then get only one line, which is our flag

### Flag

||  4CKMh1JI91bUIZZPXDqGanal4xvAg0JM  ||