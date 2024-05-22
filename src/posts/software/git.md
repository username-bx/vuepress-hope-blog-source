---
title: git 常用命令
shortTitle: git
icon: pen-to-square
date: 2024-05-23
tag:
  - git
auther: Tang Yuan
head:
  - - meta
    - name: keywords
      content: git
---


# git 常用命令

## 1. git push

###　1．推送分支 推送时可以改变名字，可以让本地分支名和远程分支名不一样

```shell
    git push origin localBranch:remoteBranch
```

### 2. 推送分支 (简化版) 远程分支将和本地分支一个名
```shell
    git push origin localBranch
```

### 3. 删除远程分支
```shell
    git push origin -d remoteBranch
```




## 2. git tag 


### 1. 新建标签
```shell
    git tag xxxxxx
```

### 2. 查询标签
```shell
    git tag
```

### 3. 删除本地标签
```shell
    git tag -d xxxxxx
```

### 4. 推送标签
```shell
    git push origin xxxxxx
```

###　5. 删除远程标签
```shell
    git tag push origin -d xxx
```


## 3. git fetch

### 1. 提取之前，请删除远程不再存在的所有远程跟踪参考
```shell
    git fetch -p
```

### 2. 命令用于删除本地 Git 仓库中与远程仓库 origin 不再关联的分支
```shell
    git remote prune origin
```