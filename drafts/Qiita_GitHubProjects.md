---
title: GitHub ProjectsのタイムラインをTODO用に活用してみる
tags: # 1以上、5以下。あとで手修正で足した方が安全
  - QiitaCLI
  - QiitaEngineerFesta2024
private: false
updated_at: ''
id: 
organization_url_name: null
slide: false
ignorePublish: false
---

## 運用中
https://github.com/users/shimajima-eiji/projects/8

## GitHub ProjectsでリッチなTODO管理がしたい
これが今日の本旨だ。
あくまで個人タスクのTODO管理をするぐらいの目標だったが、しっかりと運用すれば小規模なプロジェクト管理程度ならGitHubで完結できそう。
今期ではプロジェクト管理やナレッジ管理はJIRAやnotionを活用していたが、これをGitHub ProjectsやGitHub Wikiで完結していくことを目標にしたい。

### 脱線・現実的な話としてGitHubだけで完結できるのか？
難しいと思われる。
多くの場合プロジェクト管理ツールは使い方を覚えるのが大変なので結局Excel神話になったり、GitHub Wikiはナレッジ管理として使うには機能面に不満がある。
なんなら、GitHub WikiはユースケースによってはGitHub Discussionsが競合になるので、似たような機能があることで運用が分かりにくくなる事もよくはない。
細かいことをいうと、GitHub Wikiはプライベートリポジトリでは（無料のため）使えない。

## 仕様確認： GitHub ProjectsのタイムラインとリポジトリのIssue/Milestoneとの関連
まず、

