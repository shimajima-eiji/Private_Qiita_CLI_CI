# Private_Qiita_CLI_CI運用手引き
QiitaCLIを使って記事を書く（publishする）前に、`npx qiita pull -f`を実行するワークフローを実施すること。  
これをやらないとコンフリクトが発生して修正が面倒くさいことになる。  
以下ボタンよりリンク先に飛べるので、「Run workflow」を実行する。

[![Manual Qiita Sync](https://github.com/shimajima-eiji/Private_Qiita_CLI_CI/actions/workflows/qiita-sync.yml/badge.svg)](https://github.com/shimajima-eiji/Private_Qiita_CLI_CI/actions/workflows/qiita-sync.yml)

### やらかした場合
とりあえず上記ワークフローを実施する。  
過去に書いた記事はgit logから参照できるので一つずつ修正のこと。  
GitHub WebUIを使った方がやりやすいかもしれない。

## 参照元
https://github.com/increments/qiita-cli

## ナレッジ（Issues。解決方法がわかってるものは起票後、即クローズ）
https://github.com/shimajima-eiji/Private_Qiita_CLI_CI/issues

※検証で使った記事は不要になったので別記事として再利用している
