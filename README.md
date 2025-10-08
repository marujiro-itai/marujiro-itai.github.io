# My Documentation Site

マークダウンファイルを使用したドキュメントサイト

## 特徴

- 📝 マークダウンで簡単にコンテンツを作成
- 🎨 美しいレスポンシブデザイン
- 🚀 GitHub Pagesで簡単にホスティング
- 📱 モバイル対応

## セットアップ

1. このリポジトリをクローンまたはフォーク
2. GitHub Pages を有効化（Settings > Pages）
3. `content/` フォルダにマークダウンファイルを追加
4. `app.js` でナビゲーションを設定

## ファイル構成

```
├── index.html          # メインページ
├── styles.css          # スタイルシート
├── app.js             # JavaScript アプリケーション
└── content/           # マークダウンファイル
    ├── home.md
    ├── overview.md
    ├── guide.md
    ├── api.md
    └── faq.md
```

## 新しいページの追加

1. `content/` フォルダに `.md` ファイルを作成
2. `app.js` の `markdownFiles` 配列に追加：

```javascript
const markdownFiles = [
    { name: '表示名', file: 'filename.md' }
];
```

## GitHub Pages でのアクセス

サイトは `https://yourusername.github.io/repository-name` でアクセスできます。

## ライセンス

MIT License