SCRIPT_DIR=$(cd $(dirname $0); pwd)
cd $SCRIPT_DIR
select VAR in npm-install npm-run-dev php-stop exit
#doからdoneまでループ処理
do
    echo "あなたが選んだ項目は"$VAR"です。"
    #ループから抜けだすための分岐selectで使用したVARを使用する。「4」を選択すれば条件が成立する。
    if [ "$VAR" = "npm-install" ]; then
    npm ci
    elif [ "$VAR" = "npm-run-dev" ]; then
    npm run dev
    elif [ "$VAR" = "php-stop" ]; then
    # phpサーバーを停止する
    if [ -f php-server.pid ]; then
        PID=$(cat php-server.pid)
        kill $PID
        rm php-server.pid
        echo "phpサーバーを停止しました。"
    else
        echo "phpサーバーのPIDファイルが見つかりません。"
    fi
    elif [ "$VAR" = "exit" ]; then
    exit
	break
    fi
done
