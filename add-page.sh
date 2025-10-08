#!/bin/bash

# 新しいページを作成するスクリプト
# 使用方法: ./add-page.sh "ページ名" "filename"

if [ $# -ne 2 ]; then
    echo "使用方法: $0 \"ページ名\" \"filename\""
    echo "例: $0 \"新しいガイド\" \"new-guide\""
    exit 1
fi

PAGE_NAME="$1"
FILENAME="$2"

# マークダウンファイルを作成
cp content/_template.md "content/${FILENAME}.md"

# ファイルの先頭を更新
sed -i "" "1s/.*/# ${PAGE_NAME}/" "content/${FILENAME}.md"

# app.js にナビゲーションを追加（手動で行う必要があります）
echo "✅ ${FILENAME}.md を作成しました"
echo "📝 次の手順:"
echo "1. content/${FILENAME}.md を編集"
echo "2. app.js の markdownFiles 配列に以下を追加:"
echo "   { name: '${PAGE_NAME}', file: '${FILENAME}.md' }"
echo "3. git add . && git commit -m \"Add ${PAGE_NAME} page\" && git push"