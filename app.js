// サイト構造の設定
const siteStructure = {
    about: {
        name: 'About',
        pages: [
            { name: 'サイトの使い方', file: 'about/site-usage.md' },
            { name: 'サイトの運用方法', file: 'about/site-management.md' }
        ]
    },
    portal: {
        name: 'Portal',
        stylePages: [
            { name: 'タイポグラフィ', file: 'portal/style-typography.md' },
            { name: 'カラー', file: 'portal/style-color.md' },
            { name: '余白', file: 'portal/style-spacing.md' },
            { name: '角の形状', file: 'portal/style-border.md' },
            { name: '画像', file: 'portal/style-image.md' }
        ],
        componentPages: [
            { name: 'アイコン', file: 'portal/component-icon.md' },
            { name: 'テキスト', file: 'portal/component-text.md' },
            { name: 'ボタン', file: 'portal/component-button.md' },
            { name: 'レイアウト', file: 'portal/component-layout.md' },
            { name: 'モーダル', file: 'portal/component-modal.md' },
            { name: 'テーブル', file: 'portal/component-table.md' },
            { name: 'ローディング', file: 'portal/component-loading.md' },
            { name: 'フォーム', file: 'portal/component-form.md' }
        ]
    },
    wms: {
        name: 'WMS',
        stylePages: [
            { name: 'タイポグラフィ', file: 'wms/style-typography.md' },
            { name: 'カラー', file: 'wms/style-color.md' },
            { name: '余白', file: 'wms/style-spacing.md' },
            { name: '角の形状', file: 'wms/style-border.md' },
            { name: '画像', file: 'wms/style-image.md' }
        ],
        componentPages: [
            { name: 'アイコン', file: 'wms/component-icon.md' },
            { name: 'テキスト', file: 'wms/component-text.md' },
            { name: 'ボタン', file: 'wms/component-button.md' },
            { name: 'レイアウト', file: 'wms/component-layout.md' },
            { name: 'モーダル', file: 'wms/component-modal.md' },
            { name: 'テーブル', file: 'wms/component-table.md' },
            { name: 'ローディング', file: 'wms/component-loading.md' },
            { name: 'フォーム', file: 'wms/component-form.md' }
        ]
    },
    logo: {
        name: 'ロゴ',
        pages: [
            { name: 'ロゴガイドライン', file: 'logo/guideline.md' }
        ]
    },
    writing: {
        name: 'ライティング',
        pages: [
            { name: 'ライティングガイド', file: 'writing/guide.md' }
        ]
    },
    hht: {
        name: 'HHT操作音',
        pages: [
            { name: 'HHT操作音ガイド', file: 'hht/operation-sound.md' }
        ]
    }
};

class DocumentationSite {
    constructor() {
        this.styleNav = document.getElementById('style-nav');
        this.componentNav = document.getElementById('component-nav');
        this.contentArea = document.getElementById('content-area');
        this.currentSection = 'portal';
        this.currentFile = null;
        
        this.init();
    }
    
    init() {
        this.buildHeaderNavigation();
        this.buildSideNavigations(this.currentSection);
        this.loadDefaultContent();
    }
    
    buildHeaderNavigation() {
        const nav = document.querySelector('.header-nav ul');
        nav.innerHTML = '';
        
        Object.keys(siteStructure).forEach(key => {
            const section = siteStructure[key];
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.href = '#';
            a.textContent = section.name;
            a.dataset.section = key;
            a.className = key === this.currentSection ? 'active' : '';
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                this.switchSection(key, a);
            });
            
            li.appendChild(a);
            nav.appendChild(li);
        });
    }
    
    buildSideNavigations(sectionKey) {
        const section = siteStructure[sectionKey];
        
        // Style ナビゲーションを構築
        this.styleNav.innerHTML = '';
        if (section && section.stylePages) {
            section.stylePages.forEach((page, index) => {
                this.createNavItem(page.name, page.file, this.styleNav, index === 0);
            });
        } else if (section && section.pages) {
            // About, ライティング, HHT操作音などの場合、左側に表示
            section.pages.forEach((page, index) => {
                this.createNavItem(page.name, page.file, this.styleNav, index === 0);
            });
        }
        
        // Component ナビゲーションを構築
        this.componentNav.innerHTML = '';
        if (section && section.componentPages) {
            section.componentPages.forEach(page => {
                this.createNavItem(page.name, page.file, this.componentNav);
            });
        }
    }
    
    createNavItem(name, file, container, isActive = false) {
        const div = document.createElement('div');
        div.className = 'nav-item';
        
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = name;
        a.dataset.file = file;
        
        if (isActive) {
            a.classList.add('active');
        }
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            this.loadContent(file, a);
        });
        
        div.appendChild(a);
        container.appendChild(div);
    }
    
    switchSection(sectionKey, headerElement) {
        // ヘッダーのアクティブ状態を更新
        document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active'));
        headerElement.classList.add('active');
        
        // サイドナビゲーションを更新
        this.currentSection = sectionKey;
        this.buildSideNavigations(sectionKey);
        
        // 最初のページを読み込み
        this.loadFirstPageOfSection(sectionKey);
    }
    
    loadFirstPageOfSection(sectionKey) {
        const section = siteStructure[sectionKey];
        let firstPage = null;
        
        if (section.stylePages && section.stylePages.length > 0) {
            firstPage = section.stylePages[0];
        } else if (section.pages && section.pages.length > 0) {
            firstPage = section.pages[0];
        }
        
        if (firstPage) {
            const firstNavLink = document.querySelector(`a[data-file="${firstPage.file}"]`);
            this.loadContent(firstPage.file, firstNavLink);
        }
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
        // すべてのサイドナビゲーションアイテムからactiveクラスを削除
        const navLinks = document.querySelectorAll('.sidebar a');
        navLinks.forEach(link => link.classList.remove('active'));
        
        // クリックされたアイテムにactiveクラスを追加
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }
    
    loadDefaultContent() {
        // デフォルトでPortalセクションの最初のページを読み込み
        this.loadFirstPageOfSection('portal');
    }
}

// DOMが読み込まれたらアプリケーションを初期化
document.addEventListener('DOMContentLoaded', () => {
    new DocumentationSite();
});