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
├── add-page.sh        # ページ作成スクリプト
├── images/            # 画像ファイル
│   ├── screenshots/   # スクリーンショット
│   └── diagrams/      # 図表・ダイアグラム
└── content/           # マークダウンファイル
    ├── _template.md   # 新規ページテンプレート
    ├── home.md
    ├── overview.md
    ├── guide.md
    ├── tutorial.md
    ├── content-management.md
    ├── image-usage.md
    ├── api.md
    └── faq.md
```

## 新しいページの追加

### 自動化スクリプトを使用
```bash
./add-page.sh "ページ名" "filename"
```

### 手動で追加
1. `content/` フォルダに `.md` ファイルを作成
2. `app.js` の `markdownFiles` 配列に追加：

```javascript
const markdownFiles = [
    { name: '表示名', file: 'filename.md' }
];
```

## 画像の追加

1. `images/` フォルダに画像ファイルを配置
2. マークダウンで参照：
```markdown
![説明](images/filename.png)
```

## GitHub Pages でのアクセス

サイトは `https://yourusername.github.io/repository-name` でアクセスできます。

## ライセンス

MIT License