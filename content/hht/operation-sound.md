# HHT操作音ガイド

HHT（ハンディターミナル）の操作音に関するガイドラインです。

## 🔊 操作音の役割

### ユーザビリティの向上
- **操作確認**: 正常に操作が受け付けられたことの確認
- **エラー通知**: 誤操作や問題発生の即座な通知
- **効率向上**: 視覚に頼らない操作の支援

### 現場環境への配慮
- **騒音環境**: 倉庫等の騒がしい環境での聞き取りやすさ
- **集中作業**: 作業の妨げにならない適切な音量とタイミング

## 🎵 音の種類と用途

### 成功音
- **用途**: 正常な操作完了時
- **特徴**: 短く、明るいトーン
- **頻度**: 440Hz、0.1秒
- **音量**: 中程度

```
ピッ（短く明快な音）
```

### エラー音
- **用途**: 操作エラー、警告時
- **特徴**: 低めの音で注意を喚起
- **頻度**: 220Hz、0.3秒
- **音量**: やや大きめ

```
ブー（やや長めの低音）
```

### 確認音
- **用途**: 重要な操作の実行前確認
- **特徴**: 2段階の音で確認を促す
- **パターン**: ピッピッ（短音2回）
- **音量**: 中程度

### スキャン音
- **用途**: バーコード読み取り成功時
- **特徴**: 上昇する音階で成功感を演出
- **パターン**: ピピーッ（上昇音）
- **音量**: 中程度

## ⚙️ 音設定の仕様

### 音量レベル
1. **無音**: 0% - 静音モード
2. **小音**: 30% - 静かな環境向け
3. **標準**: 60% - 通常の作業環境
4. **大音**: 90% - 騒音の多い環境

### カスタマイズ可能項目
- **操作音のON/OFF**: 個別設定可能
- **音量調整**: 5段階調整
- **音の種類**: 複数パターンから選択

## 📱 実装ガイドライン

### HTML5 Audio API
```javascript
// 成功音の再生
const successSound = new Audio('/sounds/success.wav');
successSound.volume = 0.6;
successSound.play();

// エラー音の再生
const errorSound = new Audio('/sounds/error.wav');
errorSound.volume = 0.8;
errorSound.play();
```

### 音声ファイル仕様
- **フォーマット**: WAV（非圧縮）
- **サンプリング率**: 44.1kHz
- **ビット深度**: 16bit
- **チャンネル**: モノラル
- **ファイルサイズ**: 50KB以下推奨

## 🎯 UX設計指針

### タイミング
- **即座の反応**: 操作後0.1秒以内に音で反応
- **適切な間隔**: 連続操作時の音の重複を避ける
- **状況判断**: 周囲の環境に応じた自動音量調整

### アクセシビリティ
- **聴覚障害対応**: 音と併せて振動やライト表示
- **高齢者配慮**: 聞き取りやすい周波数帯域の選択
- **個人設定**: ユーザー個別の音響設定保存

## 🔧 実装例

### 設定画面
```html
<div class="sound-settings">
  <h3>操作音設定</h3>
  
  <div class="setting-item">
    <label>成功音</label>
    <input type="range" min="0" max="100" value="60" id="successVolume">
    <button onclick="playTestSound('success')">テスト再生</button>
  </div>
  
  <div class="setting-item">
    <label>エラー音</label>
    <input type="range" min="0" max="100" value="80" id="errorVolume">
    <button onclick="playTestSound('error')">テスト再生</button>
  </div>
  
  <div class="setting-item">
    <label>スキャン音</label>
    <input type="range" min="0" max="100" value="60" id="scanVolume">
    <button onclick="playTestSound('scan')">テスト再生</button>
  </div>
</div>
```

### JavaScript実装例
```javascript
class SoundManager {
  constructor() {
    this.sounds = {
      success: new Audio('/sounds/success.wav'),
      error: new Audio('/sounds/error.wav'),
      scan: new Audio('/sounds/scan.wav'),
      confirm: new Audio('/sounds/confirm.wav')
    };
    
    this.loadSettings();
  }
  
  play(soundType) {
    const sound = this.sounds[soundType];
    if (sound && this.settings[soundType].enabled) {
      sound.volume = this.settings[soundType].volume / 100;
      sound.currentTime = 0;
      sound.play().catch(e => console.log('Sound play failed:', e));
    }
  }
  
  loadSettings() {
    this.settings = JSON.parse(localStorage.getItem('soundSettings')) || {
      success: { enabled: true, volume: 60 },
      error: { enabled: true, volume: 80 },
      scan: { enabled: true, volume: 60 },
      confirm: { enabled: true, volume: 60 }
    };
  }
}
```

## 📊 音響設計の考慮事項

### 周波数特性
- **人間の聴覚**: 1000-4000Hzが最も聞き取りやすい
- **年齢考慮**: 高齢者は高周波数が聞こえにくい
- **環境騒音**: 倉庫等の低周波ノイズとの区別

### 音の心理効果
- **上昇音階**: 成功、完了の印象
- **下降音階**: エラー、失敗の印象
- **短音**: 軽快、効率的な印象
- **長音**: 重要、注意の印象

## 🧪 テストとバリデーション

### 現場テスト項目
- **聞き取りやすさ**: 実際の作業環境での確認
- **疲労度**: 長時間使用での音疲れ
- **識別性**: 異なる音の区別のしやすさ

### A/Bテストの実施
- **音の種類**: 複数パターンでの比較
- **音量レベル**: 最適な音量の検証
- **タイミング**: 最適な再生タイミングの検証

---

*最終更新: 2025-01-09*