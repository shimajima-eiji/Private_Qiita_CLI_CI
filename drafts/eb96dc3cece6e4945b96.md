---
title: QiitaCLIの仕様まとめ
tags:
  - QiitaCLI
private: false
updated_at: '2024-06-13T12:58:34+09:00'
id: eb96dc3cece6e4945b96
organization_url_name: null
slide: false
ignorePublish: false
---

## `npx qiita login`
- 対話型でアクセストークン（read/write）を渡すと、以降のnpx qiitaコマンド

## `npx qiita publish`
- 新規投稿の記事は`--all`オプションをつけると対象にできる
- FrontFormatterのid欄が空（null）かつupdated_atが''である記事を更新する
