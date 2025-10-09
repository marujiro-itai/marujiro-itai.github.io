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
        sections: {
            style: {
                name: 'Style',
                pages: [
                    { name: 'カラー', file: 'portal/style-color.md' },
                    { name: '余白', file: 'portal/style-spacing.md' },
                    { name: '角の形状', file: 'portal/style-border.md' },
                    { name: '画像', file: 'portal/style-image.md' }
                ]
            },
            component: {
                name: 'Component',
                pages: [
                    { name: 'アイコン', file: 'portal/component-icon.md' },
                    { name: 'テキスト', file: 'portal/component-text.md' },
                    { name: 'ボタン', file: 'portal/component-button.md' },
                    { name: 'レイアウト', file: 'portal/component-layout.md' },
                    { name: 'モーダル', file: 'portal/component-modal.md' },
                    { name: 'テーブル', file: 'portal/component-table.md' },
                    { name: 'ローディング', file: 'portal/component-loading.md' },
                    { name: 'フォーム', file: 'portal/component-form.md' }
                ]
            }
        }
    },
    wms: {
        name: 'WMS',
        sections: {
            style: {
                name: 'Style',
                pages: [
                    { name: 'カラー', file: 'wms/style-color.md' },
                    { name: '余白', file: 'wms/style-spacing.md' },
                    { name: '角の形状', file: 'wms/style-border.md' },
                    { name: '画像', file: 'wms/style-image.md' }
                ]
            },
            component: {
                name: 'Component',
                pages: [
                    { name: 'アイコン', file: 'wms/component-icon.md' },
                    { name: 'テキスト', file: 'wms/component-text.md' },
                    { name: 'ボタン', file: 'wms/component-button.md' },
                    { name: 'レイアウト', file: 'wms/component-layout.md' },
                    { name: 'モーダル', file: 'wms/component-modal.md' },
                    { name: 'テーブル', file: 'wms/component-table.md' },
                    { name: 'ローディング', file: 'wms/component-loading.md' },
                    { name: 'フォーム', file: 'wms/component-form.md' }
                ]
            }
        }
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
        this.headerNav = document.querySelector('.header-nav');
        this.sidebarNav = document.getElementById('sidebar-nav');
        this.contentArea = document.getElementById('content-area');
        this.currentSection = 'about';
        this.currentFile = null;
        
        this.init();
    }
    
    init() {
        this.buildHeaderNavigation();
        this.buildSideNavigation(this.currentSection);
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
    
    buildSideNavigation(sectionKey) {
        this.sidebarNav.innerHTML = '';
        const section = siteStructure[sectionKey];
        
        if (!section) return;
        
        if (section.pages) {
            // シンプルなページリスト（About、ライティング、HHT操作音）
            section.pages.forEach(page => {
                this.createNavItem(page.name, page.file);
            });
        } else if (section.sections) {
            // セクション分けされたページ（Portal、WMS）
            Object.keys(section.sections).forEach(sectionKey => {
                const subsection = section.sections[sectionKey];
                
                // セクションヘッダー
                const sectionHeader = document.createElement('div');
                sectionHeader.className = 'nav-section-header';
                sectionHeader.textContent = subsection.name;
                this.sidebarNav.appendChild(sectionHeader);
                
                // セクション内のページ
                subsection.pages.forEach(page => {
                    this.createNavItem(page.name, page.file, true);
                });
            });
        }
    }
    
    createNavItem(name, file, isSubItem = false) {
        const div = document.createElement('div');
        div.className = isSubItem ? 'nav-item nav-sub-item' : 'nav-item';
        
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = name;
        a.dataset.file = file;
        
        a.addEventListener('click', (e) => {
            e.preventDefault();
            this.loadContent(file, a);
        });
        
        div.appendChild(a);
        this.sidebarNav.appendChild(div);
    }
    
    switchSection(sectionKey, headerElement) {
        // ヘッダーのアクティブ状態を更新
        document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active'));
        headerElement.classList.add('active');
        
        // サイドナビゲーションを更新
        this.currentSection = sectionKey;
        this.buildSideNavigation(sectionKey);
        
        // 最初のページを読み込み
        this.loadFirstPageOfSection(sectionKey);
    }
    
    loadFirstPageOfSection(sectionKey) {
        const section = siteStructure[sectionKey];
        let firstPage = null;
        
        if (section.pages && section.pages.length > 0) {
            firstPage = section.pages[0];
        } else if (section.sections) {
            const firstSectionKey = Object.keys(section.sections)[0];
            const firstSection = section.sections[firstSectionKey];
            if (firstSection.pages && firstSection.pages.length > 0) {
                firstPage = firstSection.pages[0];
            }
        }
        
        if (firstPage) {
            const firstNavLink = this.sidebarNav.querySelector(`a[data-file="${firstPage.file}"]`);
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
        const navLinks = this.sidebarNav.querySelectorAll('a');
        navLinks.forEach(link => link.classList.remove('active'));
        
        // クリックされたアイテムにactiveクラスを追加
        if (activeElement) {
            activeElement.classList.add('active');
        }
    }
    
    loadDefaultContent() {
        // デフォルトでAboutセクションの最初のページを読み込み
        this.loadFirstPageOfSection('about');
    }
}

// DOMが読み込まれたらアプリケーションを初期化
document.addEventListener('DOMContentLoaded', () => {
    new DocumentationSite();
});