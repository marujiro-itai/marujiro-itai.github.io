# タイポグラフィ

2025年9月1日 アップデート

---

## フォントファミリー

Google Fontで提供されているウェブフォント、Noto Sans Japaneseを使用してください。

| JP | EN | NUMBER |
|----|----|--------|
| Regular Noto Sans JP | Regular Noto Sans | 1234567890 |
| Medium Noto Sans JP | Medium Noto Sans | 1234567890 |
| Bold Noto Sans JP | Bold Noto Sans | 1234567890 |

## フォントサイズ

### 見出し

| 種類 | サイズ | 用途 |
|------|--------|------|
| H1 | 32px / 2rem | ページタイトル |
| H2 | 24px / 1.5rem | セクション見出し |
| H3 | 20px / 1.25rem | サブセクション |
| H4 | 18px / 1.125rem | 小見出し |

### 本文

| 種類 | サイズ | 用途 |
|------|--------|------|
| Large | 16px / 1rem | 重要な本文 |
| Regular | 14px / 0.875rem | 通常の本文 |
| Small | 12px / 0.75rem | 補足テキスト |
| Caption | 10px / 0.625rem | キャプション |

## 行間

- **見出し**: 1.2 - 1.4
- **本文**: 1.6 - 1.8
- **キャプション**: 1.4 - 1.6

## カラー

### テキストカラー

```css
/* プライマリテキスト */
color: #212121;

/* セカンダリテキスト */
color: #757575;

/* 無効なテキスト */
color: #BDBDBD;

/* 反転テキスト（白背景用） */
color: #FFFFFF;
```

## 使用例

### 見出しの階層

```html
<h1>ページタイトル</h1>
<h2>メインセクション</h2>
<h3>サブセクション</h3>
<h4>詳細項目</h4>
```

### 本文スタイル

```html
<p class="text-large">重要な説明文</p>
<p class="text-regular">通常の説明文</p>
<p class="text-small">補足説明</p>
<p class="text-caption">キャプション</p>
```

---

*最終更新: 2025-01-09*