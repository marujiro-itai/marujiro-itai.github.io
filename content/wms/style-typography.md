# WMS - タイポグラフィ

WMS（倉庫管理システム）で使用するタイポグラフィシステムです。

## フォントファミリー

業務システムでの視認性を重視し、Noto Sans Japaneseを採用しています。

| JP | EN | NUMBER |
|----|----|--------|
| Regular Noto Sans JP | Regular Noto Sans | 1234567890 |
| Medium Noto Sans JP | Medium Noto Sans | 1234567890 |
| Bold Noto Sans JP | Bold Noto Sans | 1234567890 |

## WMS特有のフォント設計

### 数値表示の最適化
- **在庫数量**: Bold Noto Sans、16px
- **品番**: Medium Noto Sans、14px  
- **ロケーション**: Regular Noto Sans、12px

### ハンディターミナル対応
小さな画面でも読みやすいよう、最小フォントサイズは12pxに設定。

## フォントサイズ

### データ表示用

| 種類 | サイズ | 用途 |
|------|--------|------|
| Data Large | 18px / 1.125rem | 重要な数値（在庫数等） |
| Data Medium | 16px / 1rem | 一般的な数値 |
| Data Small | 14px / 0.875rem | 詳細データ |
| Label | 12px / 0.75rem | ラベル・説明 |

### システム表示用

| 種類 | サイズ | 用途 |
|------|--------|------|
| Alert | 16px / 1rem | エラー・警告メッセージ |
| Status | 14px / 0.875rem | ステータス表示 |
| Button | 14px / 0.875rem | ボタンテキスト |
| Menu | 13px / 0.8125rem | メニュー項目 |

## 色の使い分け

### ステータス別テキストカラー

```css
/* 通常状態 */
color: #212121;

/* 警告状態 */
color: #FF6F00;

/* エラー状態 */  
color: #D32F2F;

/* 成功状態 */
color: #388E3C;

/* 無効状態 */
color: #9E9E9E;
```

---

*最終更新: 2025-01-09*