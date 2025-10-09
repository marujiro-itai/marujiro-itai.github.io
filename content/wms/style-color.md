# WMS - カラー

WMS（倉庫管理システム）で使用するカラーシステムの定義とガイドラインです。

## 🎨 WMS専用カラーパレット

WMSでは業務効率と視認性を重視したカラーシステムを採用しています。

### プライマリカラー
- **WMSブルー**: #1976d2
  - メインアクション、重要な情報表示
  - Portalより少し濃いブルーで業務の安定感を表現

- **WMSダークブルー**: #1565c0
  - ホバー状態、アクティブ状態
  - 主要機能の強調表示

### 業務ステータスカラー

#### 在庫状態
- **在庫充分**: #4caf50 (緑) - 安全在庫以上
- **在庫注意**: #ff9800 (オレンジ) - 安全在庫付近
- **在庫不足**: #f44336 (赤) - 安全在庫未満

#### 作業ステータス
- **未着手**: #9e9e9e (グレー)
- **作業中**: #2196f3 (ブルー)  
- **完了**: #4caf50 (グリーン)
- **保留**: #ff9800 (オレンジ)
- **エラー**: #f44336 (レッド)

## 📊 データ表示用カラー

### 優先度レベル
- **最高優先**: #d32f2f (濃い赤)
- **高優先**: #f57c00 (オレンジ)
- **中優先**: #1976d2 (ブルー)
- **低優先**: #388e3c (グリーン)

### 温度管理表示
- **冷凍**: #0277bd (濃いブルー)
- **冷蔵**: #0288d1 (ブルー)
- **常温**: #388e3c (グリーン)
- **注意温度**: #f57c00 (オレンジ)

## 🔍 背景とテキストの組み合わせ

### 推奨組み合わせ
```css
/* メインコンテンツ */
background: #fafafa;
color: #212121;

/* データテーブル */
background: #ffffff;
color: #424242;

/* ヘッダー */
background: #1976d2;
color: #ffffff;

/* サイドバー */
background: #263238;
color: #eceff1;
```

## ⚡ 業務効率を考慮した設計

### 高コントラスト
長時間の作業を考慮し、目に優しい高コントラストな配色を採用。

### 色覚異常対応
- 赤緑色覚異常を考慮したカラーパレット
- 色だけでなくアイコンやパターンでも情報を伝達

### 疲労軽減
- 彩度を抑えた落ち着いた色調
- 白背景の活用で目の疲労を軽減

## 🎯 実装例

### CSS変数定義
```css
:root {
  /* WMSプライマリカラー */
  --wms-primary: #1976d2;
  --wms-primary-dark: #1565c0;
  --wms-primary-light: #42a5f5;
  
  /* 業務ステータス */
  --status-sufficient: #4caf50;
  --status-warning: #ff9800;
  --status-shortage: #f44336;
  --status-processing: #2196f3;
  --status-complete: #4caf50;
  
  /* 背景色 */
  --bg-primary: #fafafa;
  --bg-secondary: #ffffff;
  --bg-header: #1976d2;
  --bg-sidebar: #263238;
  
  /* テキスト色 */
  --text-primary: #212121;
  --text-secondary: #757575;
  --text-on-primary: #ffffff;
}
```

### 在庫状況表示の例
```css
.stock-status {
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
}

.stock-sufficient {
  background-color: var(--status-sufficient);
  color: white;
}

.stock-warning {
  background-color: var(--status-warning);
  color: white;
}

.stock-shortage {
  background-color: var(--status-shortage);
  color: white;
}
```

## 📱 モバイル・ハンディターミナル対応

### 高視認性カラー
ハンディターミナルでの使用を考慮した、小さな画面でも見やすいカラー設計。

### バックライト配慮
- 暗い倉庫環境での視認性を確保
- バックライトの色温度に影響されにくい配色選択

---

*最終更新: 2025-01-09*