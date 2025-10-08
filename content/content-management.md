# コンテンツ運用ガイド

このページでは、サイトに新しいコンテンツを効率的に追加・管理する方法について説明します。

## 🚀 基本的な追加フロー

新しいページを追加する際の標準的な手順は以下の通りです：

### ステップ1: マークダウンファイルの作成

1. `content/` フォルダに新しい `.md` ファイルを作成
2. テンプレートファイル `_template.md` をコピーして使用することを推奨

```bash
# テンプレートをコピーして新しいファイルを作成
cp content/_template.md content/new-page.md
```

### ステップ2: ナビゲーションへの追加

`app.js` ファイルの `markdownFiles` 配列に新しいエントリを追加：

```javascript
const markdownFiles = [
    { name: 'ホーム', file: 'home.md' },
    { name: '概要', file: 'overview.md' },
    // ... 既存のエントリ
    { name: '新しいページ', file: 'new-page.md' }, // 追加
];
```

### ステップ3: 変更のコミット・プッシュ

```bash
git add .
git commit -m "Add new page: ページ名"
git push
```

## 📁 ファイル管理のベストプラクティス

### ファイル命名規則

- **英数字とハイフンを使用**: `getting-started.md`, `api-reference.md`
- **番号付きで順序管理**: `01-introduction.md`, `02-setup.md`
- **カテゴリプレフィックス**: `tutorial-basics.md`, `guide-advanced.md`

### 推奨ディレクトリ構成

```
content/
├── _template.md          # 新規ページテンプレート
├── 01-getting-started.md # 基本的な内容
├── 02-basic-usage.md
├── 03-advanced-features.md
├── api-reference.md      # リファレンス系
├── troubleshooting.md    # サポート系
└── faq.md
```

## 🎯 コンテンツ作成のガイドライン

### マークダウン構造

標準的なページ構造を維持してください：

```markdown
# ページタイトル

簡潔な説明を1〜2行で記載

## 概要
主な内容の説明

## 詳細
### サブセクション1
### サブセクション2

## 例
具体的な例やコードサンプル

## まとめ
主要なポイントのまとめ
```

### スタイルガイド

- **見出し**: H1は1つのみ、H2以下で階層化
- **コードブロック**: 言語を指定（```javascript, ```bash など）
- **リスト**: 情報を整理して表示
- **強調**: 重要な部分は **太字** を使用

## 🔧 効率化ツール

### 自動化スクリプトの使用

新しいページを素早く作成するためのスクリプトが用意されています：

```bash
# 使用方法
./add-page.sh "ページ名" "filename"

# 例
./add-page.sh "新しいガイド" "new-guide"
```

このスクリプトは以下を実行します：
1. テンプレートファイルをコピー
2. ページタイトルを自動設定
3. 次の手順を表示

### VS Code での効率的な編集

1. **プロジェクト全体を開く**:
   ```bash
   code /path/to/marujiro-itai.github.io
   ```

2. **マークダウンプレビュー**: `Cmd+Shift+V` (Mac) / `Ctrl+Shift+V` (Windows)

3. **Git統合**: Source Control パネルで簡単にコミット・プッシュ

## 📝 コンテンツタイプ別の運用

### チュートリアル系コンテンツ

- ステップバイステップの構成
- 実際のコード例を豊富に含める
- スクリーンショットや図表を活用

### API リファレンス

- 一貫したフォーマットを使用
- パラメータと戻り値を明記
- 使用例を必ず含める

### FAQ・トラブルシューティング

- Q&A形式で構成
- 問題と解決策を明確に分離
- 関連ページへのリンクを含める

## 🌟 高度な運用テクニック

### ナビゲーションのカテゴリ分け

大量のコンテンツがある場合は、カテゴリ別に整理：

```javascript
const markdownFiles = [
    // 基本
    { name: 'はじめに', file: '01-getting-started.md' },
    { name: '基本的な使い方', file: '02-basic-usage.md' },
    
    // チュートリアル
    { name: 'チュートリアル: 基礎', file: 'tutorial-basics.md' },
    { name: 'チュートリアル: 応用', file: 'tutorial-advanced.md' },
    
    // リファレンス
    { name: 'API リファレンス', file: 'api-reference.md' },
    { name: 'FAQ', file: 'faq.md' }
];
```

### 画像とメディアの管理

1. **images フォルダの活用**:
   ```markdown
   ![説明](images/screenshot.png)
   ```

2. **適切なファイルサイズ**: Web用に最適化された画像を使用

3. **代替テキスト**: アクセシビリティのため必ず設定

### バージョン管理のベストプラクティス

- **意味のあるコミットメッセージ**: 
  ```bash
  git commit -m "Add tutorial for advanced features"
  git commit -m "Update API documentation with new methods"
  git commit -m "Fix typos in getting started guide"
  ```

- **ブランチ戦略**: 大きな変更は別ブランチで作業
  ```bash
  git checkout -b feature/new-tutorial
  # 作業...
  git push origin feature/new-tutorial
  # プルリクエストを作成
  ```

## 📊 公開後の管理

### 定期的なメンテナンス

- **リンク切れのチェック**: 外部リンクの確認
- **情報の更新**: 古くなった情報の修正
- **ユーザーフィードバックの反映**: 改善点の適用

### アナリティクス（オプション）

GitHub Pages では Google Analytics などを設定可能：

```html
<!-- index.html の <head> 内に追加 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🔄 ワークフロー例

### 日常的な更新

```bash
# 1. 新しいコンテンツの作成
./add-page.sh "新機能ガイド" "new-features"

# 2. 内容の編集
code content/new-features.md

# 3. ナビゲーションの更新
code app.js

# 4. プレビュー（ローカルサーバー起動）
python3 -m http.server 8000

# 5. 変更のプッシュ
git add .
git commit -m "Add new features guide"
git push
```

### 大規模な改訂

```bash
# 1. フィーチャーブランチの作成
git checkout -b content/major-update

# 2. 複数ファイルの編集
# ... 編集作業 ...

# 3. 段階的なコミット
git add content/page1.md
git commit -m "Update page1 with latest information"

git add content/page2.md
git commit -m "Restructure page2 content"

# 4. プッシュとプルリクエスト
git push origin content/major-update
```

---

このガイドに従って、効率的にコンテンツを管理し、常に最新で有用な情報を提供しましょう！

*最終更新: 2025-01-08*