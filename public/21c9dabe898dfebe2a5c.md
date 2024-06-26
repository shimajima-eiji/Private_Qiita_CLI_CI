---
title: '[他にも応用できます]SeleniumIDE・Builderのイケてないキャプチャ機能を改修する'
tags:
  - Selenium
  - bat
private: false
updated_at: '2019-11-14T11:36:59+09:00'
id: 21c9dabe898dfebe2a5c
organization_url_name: null
slide: false
ignorePublish: false
---

画面だけを見てバリデーションできたらいいんですが、Seleniumの画面以外を見る必要があるテストケースの場合に使えます。
Seleniumのキャプチャ機能はあくまでもSeleniumが持っているページオブジェクトの情報しか見れないんですよね。
それってどうなの？というシーンがあった時に使えるテクニックです。

# 前提条件
マルチモニターで実施しないでください。winshotの仕様（？）でスクリーンショットが撮れません。
PrintScreenキーとはまた違うのかな、という気がします。

# 環境
## Selenium側
Firefox46.0.1
SeleniumIDE2.1.1.1-signed
SeleniumBuilder2.3.5
（アウトプットできればなんでもいいです）

## 環境側
windows系(検証環境はwindows10)
FWatch：ファイルの出力を監視してコマンドを実行します
winshot：今ディスプレイ（モニター）で見えている画面を撮ります

# ダウンロードなど
この辺からどうぞ
[FWatch ファイル監視について](http://fwatch.osdn.jp/)
[窓の杜](http://forest.watch.impress.co.jp/library/software/winshot/)

# 実施手順
まずはサクッとインストールしてください。
**インストール先はProgram Files...ではないほうが良いです。半角スペースがエラーの原因になります。**

FWatchから設定します。
まずは開きましょう。アプリを間違えないでください。

![fwatch.png](https://qiita-image-store.s3.amazonaws.com/0/122800/97f70d99-cfa4-8059-5a92-c7f7d831c560.png)

追加ボタンをポチッと

![fwatch_add.png](https://qiita-image-store.s3.amazonaws.com/0/122800/3492390a-171f-981e-a0a8-1672d5609e02.png)

監視するフォルダにseleniumでcaptを撮るフォルダ
アプリケーションのパスに実行するコマンドを入れます。
ここではbatですね。

# batでwinshotを実行する
batの中身はこれです。

```
C:\winshot\WinShot.exe -J -D -X
```

## 参考
[Windowsでコマンドを使って画面キャプチャする方法](http://anosonote.hatenablog.com/entry/2015/07/13/205726)

# 使ってみよう！
とりあえず、なんちゃってで実施しましょうか。
監視フォルダに設定した場所に新しくファイルを作るなりコピーするなりやってみてください。
そうすると、FWatchが動いてアプリケーションのbatをキックし、winshotを実行すると思います。
winshotで取得したファイルはwinshotのインストールフォルダに保存されます。

# seleniumで連携しよう！
手作業でファイルを置きましたが、今度はSelenium側の設定をしましょう。
これは敢えて手順とか書きません。出来ますよね？

# ファイルがスタックされる
WSxxxxxx.JPGでどんどんファイルがたまってくるんですが、なんのこっちゃ分からんです、という状況になります、たぶん。
bat側にテストファイルを理解できるようにしてあげるのが良いでしょう。

Atest_EOF.pngみたいな名前でSeleniumからキャプチャファイルを吐き出して、batはファイル名にEOF.pngが含まれていたら、今まで取得したものをまとめてフォルダ管理する、とか出来るといい感じになります。
フォルダ名はとりあえずAtest_YYYYmmddHHMMSSとかにすると重複することがないでしょう。
（本当はいいネーミングが欲しいんですが、とりあえず暫定で）

# では、やってみましょう
batの中身を色々といい感じに改修していい感じに見せてる例
（全部echoでごまかしてますが、こういう運用とかはいいと思います）

![command.png](https://qiita-image-store.s3.amazonaws.com/0/122800/03e305ee-cbd9-c03b-e91f-0a13ca960665.png)

なんかコマンドエラーになってますが、特に意味はありません。

# まとめ
今回はSeleniumで運用しましたが、FWatchからのwinshotは汎用性高いです。
Linuxシステムで.lockファイルとかつくる仕組みは結構ありますが、考え方はそれに近くて、ファイルを検知したらキックするというだけでかなり価値が高いのではないでしょうか？

windowsでもcronみたいな事を手軽に出来るというのはなかなかない気がします。
この方法もいいですが、もっとスマートな方法もありそうな気がします。

# 読了後いいね！をお願いします。
どれだけの方に読んでもらっているか知りたいので、お手数をおかけしますがご協力いただけると嬉しいです。
