# Portal - 余白

Portalサイトで使用する余白（マージン・パディング）システムの定義です。

## 📏 基本余白システム

### 4pxベースシステム
```css
:root {
  --space-1: 4px;   /* 0.25rem */
  --space-2: 8px;   /* 0.5rem */
  --space-3: 12px;  /* 0.75rem */
  --space-4: 16px;  /* 1rem */
  --space-5: 20px;  /* 1.25rem */
  --space-6: 24px;  /* 1.5rem */
  --space-8: 32px;  /* 2rem */
  --space-10: 40px; /* 2.5rem */
  --space-12: 48px; /* 3rem */
  --space-16: 64px; /* 4rem */
}
```

## 🎯 使用ガイドライン

### コンポーネント内余白
- **ボタン**: padding: 12px 24px
- **カード**: padding: 24px
- **フォーム要素**: padding: 12px 16px

### レイアウト余白
- **セクション間**: margin: 48px 0
- **コンテンツブロック**: margin: 24px 0
- **段落**: margin: 16px 0

---

*最終更新: 2025-01-09*