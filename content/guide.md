# 使用ガイド

このガイドでは、ドキュメントサイトの設定と使用方法について説明します。

## セットアップ

### 1. リポジトリの準備
GitHub Pagesを有効にするために、リポジトリの設定を行います。

1. GitHubリポジトリの「Settings」タブに移動
2. 「Pages」セクションを見つける
3. Source を「Deploy from a branch」に設定
4. Branch を「main」、フォルダを「/ (root)」に設定

### 2. コンテンツの追加

新しいマークダウンファイルを追加するには：

1. `content/` フォルダに新しい `.md` ファイルを作成
2. `app.js` の `markdownFiles` 配列に新しいエントリを追加

```javascript
const markdownFiles = [
    { name: 'ホーム', file: 'home.md' },
    { name: '概要', file: 'overview.md' },
    { name: 'ガイド', file: 'guide.md' },
    { name: 'API', file: 'api.md' },
    { name: 'FAQ', file: 'faq.md' },
    { name: '新しいページ', file: 'new-page.md' } // 新しく追加
];
```

## マークダウン記法

### 基本的な記法

```markdown
# H1 ヘッダー
## H2 ヘッダー
### H3 ヘッダー

**太字**
*斜体*
~~取り消し線~~

[リンク](https://example.com)
![画像](image.jpg)

- リスト項目1
- リスト項目2

1. 番号付きリスト1
2. 番号付きリスト2

> 引用文

`インラインコード`

\`\`\`javascript
// コードブロック
function example() {
    return "Hello, World!";
}
\`\`\`
```

### テーブル

```markdown
| ヘッダー1 | ヘッダー2 | ヘッダー3 |
|-----------|-----------|-----------|
| セル1     | セル2     | セル3     |
| セル4     | セル5     | セル6     |
```

## カスタマイズ

### スタイルの変更
`styles.css` を編集することで、サイトの外観をカスタマイズできます。

### ナビゲーションの順序
`app.js` の `markdownFiles` 配列の順序を変更することで、ナビゲーションの表示順序を変更できます。

## トラブルシューティング

### ファイルが見つからないエラー
- マークダウンファイルが `content/` フォルダに存在することを確認
- `app.js` のファイル名が正しいことを確認
- ファイル名の大文字小文字が一致していることを確認

### GitHub Pagesで表示されない
- リポジトリが public であることを確認
- GitHub Pages の設定が正しいことを確認
- しばらく待ってからアクセス（反映に時間がかかる場合があります）