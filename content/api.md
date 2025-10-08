# API リファレンス

このページでは、サイトのJavaScript APIと設定オプションについて説明します。

## DocumentationSite クラス

メインのアプリケーションクラスです。

### コンストラクタ

```javascript
new DocumentationSite()
```

サイトを初期化し、ナビゲーションを構築してデフォルトコンテンツを読み込みます。

### メソッド

#### `loadContent(filename, navElement)`

指定されたマークダウンファイルを読み込んでコンテンツエリアに表示します。

**パラメータ:**
- `filename` (string): 読み込むマークダウンファイル名
- `navElement` (HTMLElement, optional): アクティブにするナビゲーション要素

**戻り値:** Promise

**例:**
```javascript
const site = new DocumentationSite();
site.loadContent('example.md');
```

#### `updateActiveNavigation(activeElement)`

ナビゲーションのアクティブ状態を更新します。

**パラメータ:**
- `activeElement` (HTMLElement): アクティブにする要素

## 設定オプション

### markdownFiles 配列

ナビゲーションに表示するマークダウンファイルを定義します。

```javascript
const markdownFiles = [
    { 
        name: '表示名',    // ナビゲーションに表示される名前
        file: 'file.md'   // content/ フォルダ内のファイル名
    }
];
```

**プロパティ:**
- `name` (string): ナビゲーションに表示される名前
- `file` (string): content/ フォルダ内のマークダウンファイル名

### カスタムイベント

サイトは以下のカスタムイベントをサポートします：

#### contentLoaded

コンテンツが正常に読み込まれた時に発生します。

```javascript
document.addEventListener('contentLoaded', (event) => {
    console.log('コンテンツが読み込まれました:', event.detail.filename);
});
```

#### contentError

コンテンツの読み込みでエラーが発生した時に発生します。

```javascript
document.addEventListener('contentError', (event) => {
    console.error('読み込みエラー:', event.detail.error);
});
```

## CSS クラス

### レイアウト関連

- `.container`: メインコンテナ
- `.sidebar`: サイドバーナビゲーション
- `.content`: メインコンテンツエリア

### 状態クラス

- `.active`: アクティブなナビゲーションアイテム
- `.loading`: 読み込み中の表示
- `.error`: エラー表示

### コンテンツスタイル

- `#content-area`: メインコンテンツの表示エリア
- `.markdown-content`: マークダウンコンテンツのラッパー

## 拡張例

### カスタムローダーの追加

```javascript
class CustomDocumentationSite extends DocumentationSite {
    async loadContent(filename, navElement = null) {
        // カスタムローディング処理
        this.showCustomLoader();
        
        try {
            await super.loadContent(filename, navElement);
            this.hideCustomLoader();
        } catch (error) {
            this.handleCustomError(error);
        }
    }
    
    showCustomLoader() {
        // カスタムローダー表示
    }
    
    hideCustomLoader() {
        // カスタムローダー非表示
    }
    
    handleCustomError(error) {
        // カスタムエラーハンドリング
    }
}
```

### 検索機能の追加

```javascript
class SearchableDocumentationSite extends DocumentationSite {
    constructor() {
        super();
        this.addSearchBox();
    }
    
    addSearchBox() {
        const searchBox = document.createElement('input');
        searchBox.type = 'text';
        searchBox.placeholder = '検索...';
        searchBox.addEventListener('input', (e) => {
            this.filterNavigation(e.target.value);
        });
        
        this.navigationList.parentNode.insertBefore(searchBox, this.navigationList);
    }
    
    filterNavigation(query) {
        const navItems = this.navigationList.querySelectorAll('li');
        navItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            const visible = text.includes(query.toLowerCase());
            item.style.display = visible ? 'block' : 'none';
        });
    }
}
```