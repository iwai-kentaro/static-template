# インストールするもの

## Volta
Node.jsのバージョン管理ツールを使用しています。
複数のバージョンのNode.jsをインストールしたり、切り替え等々ができます。
https://docs.volta.sh/guide/getting-started
からインストールお願いします。
※Windows の方は、Windows インストーラーが用意されているのでダウンロードして実行し指示に従います。
nodeの使用バージョンはpackage.jsonを参照してください。

## Node
npmライブラリに依存しているためVoltaで14.16.1と 20.8.1をインストールしてください。
volta install node@14.16.1
volta install node@ 20.8.1

## Docker
https://www.docker.com/get-started
から使用しているデバイスに沿ってインストールしてください。

# コマンドファイル
## start.commandをダブルクリック
選択肢を数字入力で選択し各タスク実行。8でexit。

1.npm-install
node moduleインストールコマンド
npm ci

2.docker-run
Docker起動コマンド
WPをインストール
docker compose up -d

3.npm-run-dev
環境実行コマンド

4.docker-stop
Docker終了コマンド
docker compose stop

5.docker-stop-all
Dockerコンテナ全て終了コマンド
docker stop $(docker ps -q)

6.prettier
prettier実行コマンド
npm run prettier

7.exit
何もせずプロセスを終了する

# 環境準備の順番
※bashが使用できる場合、vscode上のターミナルから実行でも問題ありません。

## 共通
1. インストールしたDocker Desktopを起動する。
2. 5を入力。docker stop $(docker ps -q)
全てのコンテナを終了する。
もしくは、対象のコンテナがEXITED(UNDEFINED)でない場合、再生ボタンの隣の停止ボタン（■）をクリックし停止しておく

## 初回
1. start.commandをダブルクリック。
2. ターミナルが起動するので、1を入力。node moduleインストール。
3. 2を入力。Dockerの準備とWPのインストール。
4. 3を入力。環境を起動する。

## 終了時（初回二回目以降共通）
1. 動いているターミナルでプロセス終了。ctrl+c
2. start.commandをダブルクリック
3. ターミナルが起動するので、3を入力。Docker終了コマンド。

## 二回目以降
1. start.commandをダブルクリック。
2. 2を入力。Dockerを起動。
3. 3を入力。環境を起動する。

# Docker上のWPの操作

通常のコーディング => http://localhost:3000/
localhost:3000にアクセスすることでBrowsersyncが適用されます。
Browsersyncは変更ファイルを監視して、自動でブラウザリロードを行ってくれるツールです。
設定はbs-config.jsを参照してください。

ダッシュボードの操作 => http://localhost:8000/
localhost:8000にアクセスをすることで、Browsersyncを介さないサーバー接続ができます。


# 初回gitのコマンド
1. git init => git初期化
2. git remote add origin URL
3. git add . =>gitにステージング
4. git commit -m "" => commitを作成
5. git push --set-upstream origin main  => 初回push => git push => 2回目以降のpush
6. git branch <ブランチ名> => ブランチ作成<>は必要なし 例:feature/test
7. git checkout <ブランチ名> => ブランチに移動
8. git push => ブランチの変更をpush

git push => 2回目以降のpush
