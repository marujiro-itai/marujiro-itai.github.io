# 画像の使用方法

このページでは、サイトでの画像の配置方法と使用方法について説明します。

## 📁 画像ファイルの配置

### 推奨ディレクトリ構成

```
images/
├── screenshots/     # スクリーンショット
├── diagrams/       # 図表・フローチャート
├── icons/          # アイコン類
├── logos/          # ロゴ画像
└── general/        # その他の画像
```

### ファイル命名規則

- **説明的な名前**: `github-pages-settings.png`
- **小文字とハイフン**: `user-interface-overview.jpg`
- **日付付き**: `architecture-diagram-2024-01.svg`

## 🖼️ マークダウンでの画像表示

### 基本的な記法

```markdown
![代替テキスト](images/filename.png)
```

### 具体例

以下は実際の使用例です：

#### スクリーンショット
```markdown
![GitHub Pages設定画面](images/screenshots/github-pages-settings.png)
```

#### 図表・ダイアグラム
```markdown
![サイトアーキテクチャ](images/diagrams/site-architecture.svg)
```

#### 説明付きの画像
```markdown
![ユーザーインターフェース概要](images/screenshots/ui-overview.png)
*図1: メインページのユーザーインターフェース*
```

## 🎨 画像の最適化

### ファイルサイズの目安

- **スクリーンショット**: 50-200KB
- **アイコン**: 5-20KB  
- **図表**: 20-100KB
- **写真**: 100-500KB

### 推奨フォーマット

| 用途 | フォーマット | 理由 |
|------|-------------|------|
| スクリーンショット | PNG | 鮮明なテキスト表示 |
| 写真 | JPEG | ファイルサイズが小さい |
| アイコン・ロゴ | SVG | スケーラブル |
| 図表 | PNG/SVG | 線がきれい |

## 📱 レスポンシブ画像

大きな画像は自動的にコンテンツ幅に合わせてリサイズされます。

### CSS での制御

現在のスタイルシートには以下の設定があります：

```css
#content-area img {
    max-width: 100%;
    height: auto;
    border-radius: 4px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
```

## 🔗 外部画像の使用

### 外部サービスの利用

```markdown
![外部画像](https://example.com/image.jpg)
```

### 注意点

- **HTTPS必須**: GitHub Pagesはhttpsなので、外部画像もhttps必須
- **可用性**: 外部サービスがダウンした場合に画像が表示されない
- **パフォーマンス**: 外部読み込みによる速度低下

## 🚀 画像アップロードの手順

### 方法1: VS Code での追加

1. VS Codeでプロジェクトを開く
2. `images/` フォルダに画像をドラッグ&ドロップ
3. 適切なサブフォルダに移動
4. Git で追加・コミット・プッシュ

### 方法2: コマンドラインでの追加

```bash
# 画像を適切なフォルダにコピー
cp ~/Downloads/screenshot.png images/screenshots/

# Gitに追加
git add images/screenshots/screenshot.png
git commit -m "Add screenshot for tutorial"
git push
```

### 方法3: GitHub Web インターフェース

1. GitHubリポジトリページで「Add file」→「Upload files」
2. 画像ファイルをドラッグ&ドロップ
3. `images/` フォルダ内の適切な場所を指定
4. コミットメッセージを入力してコミット

### 実際の例

以下は、GitHub経由でアップロードされた実際の画像です：

![アップロードされたサンプル画像](images/screenshots/sample.png)
*実際にアップロードされたsample.png画像*

## 📋 画像使用のベストプラクティス

### アクセシビリティ

```markdown
![具体的な説明](images/example.png)
```

- **代替テキスト必須**: 画像の内容を具体的に説明
- **装飾的な画像**: 内容に関係ない場合は空の代替テキスト `![](image.png)`

### SEO対策

- **ファイル名**: 内容を表す英単語を使用
- **代替テキスト**: 検索エンジンが理解しやすい説明

### パフォーマンス

- **適切なサイズ**: 表示サイズに合わせてリサイズ
- **圧縮**: 品質を保ちつつファイルサイズを最小化
- **形式選択**: 用途に応じた最適なフォーマット

## 🛠️ 実用的な例

### チュートリアル記事での使用

```markdown
## 設定手順

### ステップ1: GitHub Pages の有効化

1. リポジトリの「Settings」タブに移動
   
   ![GitHub Settings タブ](images/screenshots/github-settings-tab.png)

2. 「Pages」セクションを見つける
   
   ![Pages設定セクション](images/screenshots/pages-section.png)

3. 設定を以下のように変更：
   
   ![Pages設定の詳細](images/screenshots/pages-configuration.png)
```

### API ドキュメントでの使用

```markdown
## システム構成

以下の図は、システム全体のアーキテクチャを示しています：

![システムアーキテクチャ図](images/diagrams/system-architecture.svg)

*図1: マークダウンベースドキュメントサイトのアーキテクチャ*
```

## 📝 まとめ

- **配置場所**: `images/` フォルダとサブフォルダを活用
- **命名規則**: 説明的で統一された名前を使用
- **最適化**: 適切なフォーマットとサイズで配信
- **アクセシビリティ**: 代替テキストを必ず設定
- **レスポンシブ**: 自動的にデバイスに合わせてリサイズ

これらの方法を使って、視覚的に魅力的で分かりやすいドキュメントを作成しましょう！

---

*最終更新: 2025-01-08*