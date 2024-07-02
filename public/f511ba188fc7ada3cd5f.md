---
title: エンジニア入門中の初学者はどこにアウトプットすべきなのか？
tags:
  - 初心者
  - レビュー
  - アウトプット
  - AIイラスト
  - QiitaEngineerFesta2024
private: false
updated_at: '2024-07-02T09:21:16+09:00'
id: f511ba188fc7ada3cd5f
organization_url_name: null
slide: false
ignorePublish: false
---

![動かないやつ.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/122800/a85eb1f1-ff18-23cd-3239-12657061d175.png)

ここでいう「アウトプット」は書いて終わり！ではなく「見せること（見られること）」を前提にするという意味でのアウトプットと定義しておく
そのため、書きやすさは当然のこと、書いたものを見てもらえる事も重要なファクターとしているし、入門者は勉強用のつもりでもあるので、後で振り返りやすいかどうかもポイントとしてあげている

## 各ブログ風Saasを比較
まず、大別すると以下で考える事ができる

| サービス名 | おすすめ度 | 書き心地 | オープン性 | 情報保全性 | ポイント |
| --- | --- | --- | --- | --- | --- |
| Qiita | ★★★ | WebエディタもCLIも使える。オリジナルのマークダウン記法が楽しい。またQiitaというブランドがあるので、心理的ハードルという意味では普通に記事を書く以上にプレッシャーを感じるかもしれない | 限定公開・非公開（下書き）が制御できる | 古い記事にはシステムからアナウンスがある | まずはここが基本 |
| Zenn | ★★★ | WebエディタもCLIも使える。オリジナルのマークダウン記法やデザイン絵文字が使えるのもポイント。コメント文化はQiitaに劣るので、良さにも悪さにもとれる。| ほぼQiitaといっしょ。というかQiitaCLIが後発か | Qiita同様 |
| note | ★★☆ | エンジニアサービスではないが、エンジニアサービスとして活用することもできる。 | 限定公開や、一部公開して限定エリアを制御するという書き方もできてしまうほど多機能 | おそらく誰も管理してないし、できてない | エンジニア系サービスに限定しない使い方ができるのは強みといえる。非エンジニアも対象にしたい技術的コンテンツなどは特に。 |
| X | ★★☆ | 書き心地というより、ユーザの環境としてはやりやすいだろう。特に双方向性にリアルタイムなコミュニケーションを求める場合は、インタラクティブ性は他のサービスの追随を許さないが、長文を書く事に適さない上振り返りが行えないため本格的な運用 | 公開範囲という意味では条件的には他と変わらないのだが、如何せん閲覧ユーザーが圧倒的に多い | アカウント全体の運用を考えながら発信する必要があるため、意識できているアカウントとそうでないユーザーのアカウントでは雲泥の差がある。保全性も保証はない | 一応ミニブログカテゴリである |

この指標は何を目的にするかによって異なるが、特に理由がなければQiitaかZennが使いやすいだろう。

### ちょっと複雑な事がしたいなら、Zennかnoteの二択
たとえば、Zennやnoteは共通して「記事を売れる」というのがポイントになってくる。
実際に有料記事にすると、おいそれとは読まれない（買ってまで読みたいと思わない）ので、これを逆手に取って「不特定多数に公開したくはないが、有益なコンテンツ」を書いておくという方法はありだ。

くわえて、Zennなら仮想的に記事をシリーズ化させる事ができる。
本という機能を使うと、後に製本化を考えた時に電子媒体で頒布しやすくなるが、ここで取り上げたいのは記事を指定する流れで読み進めるようにしたい時に非常に強力で、過去の自分が書いた記事を後で振り返るというユースケースを考えた時に、あらかじめ読む順番が分かりやすくまとまっていると復習の助けになる。
恥ずかしながら講義は経験者目線で意味のある仕組みになっているが、未経験者にとっては毎回講義の内容も学ぶ内容も変わるので非常に忙しいという印象しか持たないだろう。
集中講義ですら今日やった内容が来週にまた出てくる、という事もあるので、こういった「不測の事態」に備えるためにも、学んだ内容をまとめるというのは重要な事である。

## なぜQiitaとZennが同列なのか？
Qiitaは自身の学習とは別に、アウトプットのモチベーションを上げるための施策がある。
それが今回のエンジニアフェスであり、アドベントカレンダーである。
かくいう私も「Qiitaでアウトプット賞があるならイベント参加するか！」というモチベーションで本格的にアウトプットをしているのだが、記事化することで自らにも学びがあるので結果的に良い状態を保てている。
Qiitaでモチベーションを高めて、Zennに投稿するというのが最強ムーブ感あるが、Qiitaに投稿する事も前提のはずなのでここはうまく活用する必要がある。

慣れてきたらQiitaCLI+ZennCLIを併用するという選択肢ができるので、勉強する目標も同時に設定できそうだ。
とはいえ、toBの研修ならまだしもtoCのプログラミングスクールでWebアプリを作るコースだとCUIを使う事は教わらない事が多いので、CLI系はハードルが高いのがネック。将来的にはコマンド系を使えないエンジニアは疑問ではあるので、Qiitaを読む人には頑張って欲しい。

## どうやってアウトプットの質を高めるのか？
本旨はアウトプットの場所に言及するものだが、どうやってアウトプットするか？という観点ではどうか。

1. ツールの使い方を覚える
1. マークダウンを学ぶ
1. マークダウン拡張記法を知る
1. 画像や動画を入れる

まず、書く事自体が勉強になるので、プログラミングとは別に書き方を学ぶ必要がある。
書き方を学ぶと、書く事への抵抗やハードルを下げられるので、よく使うマークダウン記法に順番をつけて使っていくのがおすすめ。
とはいえ、マークダウンには限界がある。マークダウンでできない事は画像なりを使っていくという方針だ。

画像を使うというとハードルが高い印象があるが、実はそうではない。
品質にこだわるからハードルが高いという印象を持ってしまうので、フリーキャンパスに図を書いてメモのように使う、というのをここでは「画像」と表記する。

### もう一つの選択肢になるかも？気になっているサービス「Markdown AI」
今回のQiitaエンジニアフェスで[MarkdownAI](https://qiita.com/official-events/142fdd0d69ff6bb2d547)というサービスの存在を知ったのだが、使ってみた感じよくわからないというのが正直な感想だ。
書いたマークダウンをホスティングできるサービス？というぐらいしか分かっておらず、Qiitaで書くのと何が違うんだろう？
Qiitaでマークダウンを使って記事（サイト）を書く、という発想であれば、MarkdownAIはサイトをマークダウンで作る、というものなんだろうというぐらいは理解したが、たとえばGitHub PagesなどでREADME.mdだけでサイトを構築すると同じような事ができてしまう。
MarkdownAIの良さとは？現状は今後に期待というところだろうか。
とりあえずわからないなりにサイトを作ってみたので公開しておく。

https://storage.googleapis.com/topdowncom/content/eRh94YfRvxUUQJWP5yUEYuYUEx82/445984f7-5207-49cd-9782-269f434b0a4e/index.html

こちらもQiita-ZennCLI連携の話と同じく選択肢を増やそうという趣旨になるが、GitHub Pagesの環境を設定するよりは分かりやすいし運用しやすいので一定の効果はありそうだ。

## 今日のプロンプトなど
勉強という意味でいいな、と思ったんでせっかくだから活用していこう、のコーナー。やらないと続かないので、エンジニアフェス中は意識的に取り入れていきたい

### ヘッダ
- Seaart
- [モデル](https://www.seaart.ai/ja/models/detail/760db40b0570d7241f9608f6ab1616b6)
- [LoRA](https://www.seaart.ai/ja/models/detail/ef7d35c4650e865a2e003bbe0e4bb498)
- プロンプト:`プログラマー, ブログ, タイトル, ヘッダー, キャッチー, 最高_品質, ノートパソコン, オペレーター, 一人の女の子, デスク, プログラミング, 勉強, 学生, 教室`

### フッタ
- Seaart
- [モデル](https://www.seaart.ai/ja/models/detail/760db40b0570d7241f9608f6ab1616b6)
- [LoRA](https://www.seaart.ai/ja/models/detail/ef7d35c4650e865a2e003bbe0e4bb498)
- プロンプト: `プログラマー, ブログ, タイトル, ヘッダー, キャッチー, 最高_品質, ノートパソコン, オペレーター, 一人の女の子, デスク, プログラミング, 学生, 教室, 笑顔`
- ネガティブプロンプト: (未変更) `verybadimagenegative_v1.3, ng_deepnegative_v1_75t, (ugly face:0.8),cross-eyed,sketches, (worst quality:2), (low quality:2), (normal quality:2), lowres, normal quality, ((monochrome)), ((grayscale)), skin spots, acnes, skin blemishes, bad anatomy, DeepNegative, facing away, tilted head, {Multiple people}, lowres, bad anatomy, bad hands, text, error, missing fingers, extra digit, fewer digits, cropped, worstquality, low quality, normal quality, jpegartifacts, signature, watermark, username, blurry, bad feet, cropped, poorly drawn hands, poorly drawn face, mutation, deformed, worst quality, low quality, normal quality, jpeg artifacts, signature, watermark, extra fingers, fewer digits, extra limbs, extra arms,extra legs, malformed limbs, fused fingers, too many fingers, long neck, cross-eyed,mutated hands, polar lowres, bad body, bad proportions, gross proportions, text, error, missing fingers, missing arms, missing legs, extra digit, extra arms, extra leg, extra foot, ((repeating hair))`

![フッター.png](https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/122800/59e4b272-e24d-3e93-9a5f-ea8ca2bb3069.png)
