---
title: "OTW Bandit"
description: "Level 9"
prevLink: "./level-8"
prevTitle: "Level 8"
---

### Command

```bash
ssh bandit.labs.overthewire.org -p 2220 -l bandit9
```

### Password

```bash
4CKMh1JI91bUIZZPXDqGanal4xvAg0JM
```

### Walkthrough

According to the website, our flag is

1. One of the few human-readable strings (implying there could be binary contents).
2. Preceeded by several '=' characters.

In this case, it probably isn't a good idea to use the `cat` command, as the binary values will mess our terminal up. So, we use the `string` command. Again, we can get the flag using a single command

```bash
strings -d data.txt | grep '=='
```

We get a few lines, out of which we can clearly identify what the flag is.

### Flag

||  FGUW5ilLVJrxX9kMYMmlN4MgbpfMiqey  ||