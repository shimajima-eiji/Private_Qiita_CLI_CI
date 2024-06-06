---
title: GithubActionsチュートリアル/学習の手引き。shellscriptを書くようにCIを書きたい
tags:
  - CI
  - 初心者向け
  - GitHubActions
private: false
updated_at: '2022-03-26T16:33:01+09:00'
id: fbedd23c0fe0d4d82d5a
organization_url_name: null
slide: false
ignorePublish: false
---
:::note warn
本稿は、これからはじめてCIを勉強する方を対象にしています。
厳密に言えば、それは間違ってるよ！という事もありますが、学習の理解を促進するために敢えてこのように表現しています。
:::

## 本稿の目的
GithubActionsのステップの判定などの情報を探していたんですが、探し方が良くないのか、ググラビリティが低いのか、なかなか分かりやすい日本語の情報が出てきません。
公式ページの情報も、とりあえず手元で動かさないと分からないぐらいには理解が難しいので、チュートリアルを用意しました。

:::note
ある程度実務経験を積んで、ソフトウェアアーキテクチャについて理解が進んだなら、
一番最初に公式情報を閲覧して、手元で動かすぐらいはできるようになりましょう。
:::

とはいえ「プログラマーを目指す初心者がCIなんて勉強しないよねー」という現実は、理由とともに納得しているのですが、CIが分からなくても（あるいは、ツールなどを使えばノンコードで作れたりもするので）あまり需要はない気がしました。
自分でCIを作ろうと考えている人の助けになればいいなと思っています。

### ヒント
本稿では手っ取り早く解説するためにGithubActionsを使っていますが、はじめてCIの学習をするだけならJenkinsから入った方が理解しやすいかもしれません。
CIの知識がないと「なんでこんなことやってるの？」という質問に回答できません。

## 参考情報
公式ドキュメントより「steps コンテキスト」の項目を参照すると、より詳しい情報が得られます。

https://docs.github.com/ja/actions/learn-github-actions/contexts#example-usage-of-the-steps-context

以下、手前味噌で恐縮です。

https://qiita.com/nomurasan/items/90cc5288bb65988a578a

https://nomuraya.tk/2022/03/consultant_learn.html

## GithubActionsの基礎知識
ymlでできています。
GithubActionsはymlの内容を読んで、書かれている内容に従って処理をしていきます。

:::note
ymlとはいわゆるiniやconfigと同じものです。
あるいは、CSVとかXMLとかJSONと同じような、データの集合体です。
:::

:::note warn
yml(yaml)については別途学習をしてください。
:::

## GithubActionsで違うステップに変数を渡す方法
とりあえず公式リファレンスを開いてみて欲しいんですが、見るだけだと分かりにくいので、エッセンスを抽出して解説します。
以下、コード部分は私の感覚で翻訳・書き換えています。

### 変数の渡し方
``` var.yml
- name: steps.generate_number.random_number = (0 or 1)を実行
  id: generate_number
  run:  echo "::set-output name=random_number::$(($RANDOM % 2))"
```

のステップで、`echo "::set-output name=random_number::$(($RANDOM % 2))"`を実施しています。

:::note
違うステップに変数を渡したい場合は、`echo "::set-output ..."`する事を意識しておきましょう。
:::

:::note warn
後述していますが、変数を渡すステップでidを指定しておかないと取り出すことができません。
:::

### 変数の受け取り方
``` if.yml
- name: 前のステップ(id: generate_number)の結果を受け取って正常終了 or 異常終了する
  run: |
    if [[ ${{ steps.generate_number.outputs.random_number }} == 0 ]]; then exit 0; else exit 1; fi
```

:::note
取得する際は`${{ steps.generate_number.outputs.random_number }}`を使います。
内訳は「steps.(ステップのID).(set-outputで指定した変数名: name)」です。
:::

以下をイメージしてみると分かりやすいと思います。

```
steps["ステップのID"] = {変数名: 値}
```

つまり、先述した通り変数を渡したいステップにidがないと取り出すことができません。

## runとuses
:::note warn
まず始めに意識しておきたいのは、runは最終手段ぐらいに考えておいた方が良いでしょう。
基本的にはusesで管理できる方が望ましいです。
:::

と、いきなり言っても分かりにくいので、なぜか？をコードで見ていきましょう。

:::note alert
以下では、`steps`まで省略していますので、コピペする際は全文コピペにならないようにしましょう。
:::

### uses: actions/checkout@v2
GithubActionsの勉強を始めた時に一番最初に障害になる存在だと思います。
これが何やってるのか、分かりにくいですよね？

上記のrunコマンドと組み合わせて、正体を暴いていきます。

``` uses.yml
- name: このリポジトリをcloneする
  uses: actions/checkout@v2

- name: "git clone (このリポジトリ)が正しく実行されたか検証する"
  run: ls
```

これを実行すると、現在のリポジトリの内容がlsで表示されます。
ここから、`uses`をコメントアウトなり削除なりすると、`run: ls`の結果が何も表示されないことが確認できます。

:::note
手元で確認してみてください。
:::

### usesをrunで書く
先述した通り、runは最終手段です。
usesでできるということは、runで同じ結果が作れます。

やってみましょう。

``` run.yml
- name: このリポジトリをcloneする
  # uses: actions/checkout@v2
  run: git clone (リポジトリ.git)

- name: "git clone (このリポジトリ)が正しく実行されたか検証する"
  run: ls
```

同じ結果になるはずです。

:::note
手元で確認してみてください。
:::

とても簡単な例で解説したので、usesでもrunでもどっちでも良くない？という感覚になっていると思います。
では、usesを使うと便利になる例を示します。

## pythonのバージョンを強制したい
コード量を比較してください。
やっていることは同じです。

### uses
``` python_setuses.yml
- name: pythonをインストール
  uses: actions/setup-python@v3
  with:
    python-version: '3.9'

- name: pythonの環境構築と実行
  env:
    curl: https://raw.githubusercontent.com/shimajima-eiji/__Operation-Maintenance/main/for_Development/curl_tester.py3
  run: |
    python -m pip install --upgrade pip
    python -m pip install pathlib
    curl -sf "${curl}" | python
```

### run
```python_setrun.yml
- name: pythonをインストール
  id: check_python
  env:
    minor: 9
  run: |
    pyc=$(python3)

    # python3のマイナーバージョンが9未満の時だけ実施する
    if [ "$(python3 --version | cut -d"." -f2)" -lt "${minor}" ]
    then
      sudo apt update && sudo apt install software-properties-common
      sudo add-apt-repository ppa:deadsnakes/ppa
      sudo apt install python3.${minor}
      pyc=python3.${minor}
      sudo apt update && sudo apt install python3.${minor}-distutils
    fi
    
    echo "::set-output name=pyc::${pyc}"

- name: pythonスクリプト実行
  env:
    # id: check_pythonの出力からpycを取得してenvに入れる
    pyc: ${{ steps.check_python.outputs.pyc }}
    curl: https://raw.githubusercontent.com/shimajima-eiji/__Operation-Maintenance/main/for_Development/curl_tester.py3
  run: |
    ${pyc} -m pip install --upgrade pip
    ${pyc} -m pip install pathlib
    curl -sf "${curl}" | ${pyc}
```

既にrunのコードが複雑怪奇になっていますね。
新しい概念が出ているので解説します。

#### stepをまたいで変数をやり取りする場合は、変数の受け渡し処理が必要
- 渡す側のステップ **（id: check_python）** で`echo "::set-output name=pyc::${pyc}"`
- 受け取る側のステップで`${{ steps.check_python.outputs.pyc }}`

を実施しています。
idはなんでもいいですが、渡す側のステップにidがないと、受け取る側のステップで指定することができません。

## usesやrunを２つ以上使ったり、組み合わせたりする（複数のステップを実施する）
ようやく実践編です。
だいたい単一コマンドを実行しただけでは終わりません。

ここではCIに求められがちな
- 特定の処理があった時に

1. git cloneして
1. 結果を書き換えて
1. git pushする

をやってみましょう。

```
- name: git clone
  uses: actions/checkout@v2
  with:
    repository: shimajima-eiji/shimajima-eiji
  
- name: ファイル書き換え（ここではREADME.mdを書き換える）
  run: date >README.md
  
- name: git push
  uses: EndBug/add-and-commit@v9
```

:::note alert
これを実行すると、README.mdを書き換えます。
:::

:::note alert
これを実行すると、コントリビューターに[actions-user](https://github.com/actions-user)が追加されます。
（ユーザーは書き換えることができます）
:::

runで書いたら、と思うと結構大変になりますよね。
特に`git push`の処理。

## usesの意味
これは、Githubの `ユーザー名/リポジトリ名@バージョン`です。
試しに、`uses: actions/checkout@v2`を探しにいきましょう。

https://github.com/actions/checkout/releases

最近v3が出たようですね。

pushは以下。

https://github.com/EndBug/add-and-commit/releases

こちらは最新がv9でした。

### Q.自作できるのでは？
:::note
A.できます。
:::

https://note.com/tably/n/n46041458d6b3

## 応用例
長くなりすぎたので、別記事にします。

https://nomuraya.tk/2022/03/githubactions.html
