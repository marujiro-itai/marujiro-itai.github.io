// マークダウンファイルの設定
const markdownFiles = [
    { name: 'ホーム', file: 'home.md' },
    { name: '概要', file: 'overview.md' },
    { name: 'ガイド', file: 'guide.md' },
    { name: 'API', file: 'api.md' },
    { name: 'FAQ', file: 'faq.md' }
];

class DocumentationSite {
    constructor() {
        this.navigationList = document.getElementById('navigation-list');
        this.contentArea = document.getElementById('content-area');
        this.currentFile = null;
        
        this.init();
    }
    
    init() {
        this.buildNavigation();
        this.loadDefaultContent();
    }
    
    buildNavigation() {
        this.navigationList.innerHTML = '';
        
        markdownFiles.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.href = '#';
            a.textContent = item.name;
            a.dataset.file = item.file;
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.loadContent(item.file, a);
            });
            
            li.appendChild(a);
            this.navigationList.appendChild(li);
        });
    }
    
    async loadContent(filename, navElement = null) {
        try {
            // ローディング表示
            this.contentArea.innerHTML = '<div class="loading">読み込み中...</div>';
            
            // アクティブなナビゲーションアイテムを更新
            if (navElement) {
                this.updateActiveNavigation(navElement);
            }
            
            // マークダウンファイルを取得
            const response = await fetch(`content/${filename}`);
            
            if (!response.ok) {
                throw new Error(`ファイルが見つかりません: ${filename}`);
            }
            
            const markdownText = await response.text();
            
            // マークダウンをHTMLに変換
            const htmlContent = marked.parse(markdownText);
            
            // コンテンツを表示
            this.contentArea.innerHTML = htmlContent;
            this.currentFile = filename;
            
        } catch (error) {
            console.error('コンテンツの読み込みエラー:', error);
            this.contentArea.innerHTML = `
                <div class="error">
                    <h2>エラー</h2>
                    <p>${error.message}</p>
                    <p>マークダウンファイルが存在しない可能性があります。<code>content/</code>フォルダに<code>${filename}</code>を作成してください。</p>
                </div>
            `;
        }
    }
    
    updateActiveNavigation(activeElement) {
        // すべてのナビゲーションアイテムからactiveクラスを削除
        const navLinks = this.navigationList.querySelectorAll('a');
        navLinks.forEach(link => link.classList.remove('active'));
        
        // クリックされたアイテムにactiveクラスを追加
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }
    
    loadDefaultContent() {
        // デフォルトコンテンツまたは最初のファイルを読み込み
        if (markdownFiles.length > 0) {
            const firstNavItem = this.navigationList.querySelector('a');
            this.loadContent(markdownFiles[0].file, firstNavItem);
        }
    }
}

// DOMが読み込まれたらアプリケーションを初期化
document.addEventListener('DOMContentLoaded', () => {
    new DocumentationSite();
});