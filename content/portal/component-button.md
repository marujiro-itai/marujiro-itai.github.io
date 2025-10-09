# Portal - ボタン

Portalサイトで使用するボタンコンポーネントの設計ガイドラインです。

## 🎯 ボタンの種類

### プライマリボタン
主要なアクションに使用する最も重要なボタンです。

```html
<button class="btn btn-primary">送信</button>
```

- **用途**: フォーム送信、メインアクション
- **1画面に1つまで**: 最重要アクションのみ
- **配色**: プライマリカラー背景 + 白テキスト

### セカンダリボタン
補助的なアクションに使用するボタンです。

```html
<button class="btn btn-secondary">キャンセル</button>
```

- **用途**: キャンセル、戻る、サブアクション
- **配色**: 透明背景 + プライマリカラーボーダー + プライマリカラーテキスト

### テキストボタン
軽微なアクションに使用する控えめなボタンです。

```html
<button class="btn btn-text">詳細を見る</button>
```

- **用途**: 詳細表示、補足アクション
- **配色**: 透明背景 + プライマリカラーテキスト

## 📏 サイズバリエーション

### 大サイズ (Large)
```html
<button class="btn btn-primary btn-lg">大きいボタン</button>
```
- **高さ**: 48px
- **パディング**: 16px 32px
- **フォントサイズ**: 16px

### 標準サイズ (Medium)
```html
<button class="btn btn-primary">標準ボタン</button>
```
- **高さ**: 40px
- **パディング**: 12px 24px
- **フォントサイズ**: 14px

### 小サイズ (Small)
```html
<button class="btn btn-primary btn-sm">小さいボタン</button>
```
- **高さ**: 32px
- **パディング**: 8px 16px
- **フォントサイズ**: 12px

## 🎨 ボタンの状態

### デフォルト状態
通常の表示状態です。

### ホバー状態
```css
.btn-primary:hover {
  background-color: #2980b9;
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
```

### アクティブ状態
クリック時の状態です。

```css
.btn-primary:active {
  background-color: #21618c;
  transform: translateY(0);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
}
```

### 無効状態
操作できない状態です。

```css
.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}
```

## 🔧 実装仕様

### CSS実装例

```css
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 6px;
  font-family: inherit;
  font-weight: 500;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease;
  position: relative;
}

.btn-primary {
  background-color: #3498db;
  color: white;
}

.btn-secondary {
  background-color: transparent;
  color: #3498db;
  border: 1px solid #3498db;
}

.btn-text {
  background-color: transparent;
  color: #3498db;
  border: none;
}

/* サイズ */
.btn-lg {
  height: 48px;
  padding: 0 32px;
  font-size: 16px;
}

.btn {
  height: 40px;
  padding: 0 24px;
  font-size: 14px;
}

.btn-sm {
  height: 32px;
  padding: 0 16px;
  font-size: 12px;
}
```

## 📋 使用ガイドライン

### 配置の原則
- **右揃え**: フォームの送信ボタン等
- **左揃え**: 一般的なアクションボタン
- **中央揃え**: 単独で配置する場合

### ボタンの組み合わせ
```html
<!-- 推奨: プライマリ + セカンダリ -->
<div class="button-group">
  <button class="btn btn-secondary">キャンセル</button>
  <button class="btn btn-primary">保存</button>
</div>
```

### アイコン付きボタン
```html
<button class="btn btn-primary">
  <svg class="btn-icon">...</svg>
  送信
</button>
```

## ♿ アクセシビリティ

### キーボード操作
- **Tab**: フォーカス移動
- **Enter/Space**: ボタン実行

### 実装要件
```html
<!-- 適切なaria属性 -->
<button class="btn btn-primary" 
        aria-label="フォームを送信する"
        type="submit">
  送信
</button>

<!-- ローディング状態 -->
<button class="btn btn-primary" 
        aria-busy="true"
        disabled>
  <span class="loading-spinner" aria-hidden="true"></span>
  送信中...
</button>
```

## 🚫 使用時の注意

### やってはいけないこと
- ❌ 1画面にプライマリボタンを複数配置
- ❌ ボタンテキストが長すぎる（3単語以内推奨）
- ❌ 破壊的アクション（削除等）にプライマリカラーを使用

### 推奨事項
- ✅ アクションを明確に表現するテキスト
- ✅ 適切なサイズとスペーシング
- ✅ 一貫したスタイルの使用

---

*最終更新: 2025-01-09*