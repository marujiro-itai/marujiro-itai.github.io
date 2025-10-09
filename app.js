// サイト構造の設定
const siteStructure = {
    about: {
        name: 'About',
        title: 'About',
        pages: [
            { name: 'サイトの使い方', file: 'about/site-usage.md' },
            { name: 'サイトの運用方法', file: 'about/site-management.md' }
        ]
    },
    portal: {
        name: 'Portal',
        title: 'Portal',
        pages: [
            { name: 'タイポグラフィ', file: 'portal/style-typography.md' },
            { name: 'カラー', file: 'portal/style-color.md' },
            { name: '余白', file: 'portal/style-spacing.md' },
            { name: '角の形状', file: 'portal/style-border.md' },
            { name: '画像', file: 'portal/style-image.md' },
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
        title: 'WMS',
        pages: [
            { name: 'タイポグラフィ', file: 'wms/style-typography.md' },
            { name: 'カラー', file: 'wms/style-color.md' },
            { name: '余白', file: 'wms/style-spacing.md' },
            { name: '角の形状', file: 'wms/style-border.md' },
            { name: '画像', file: 'wms/style-image.md' },
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
        title: 'ロゴ',
        pages: [
            { name: 'ロゴガイドライン', file: 'logo/guideline.md' }
        ]
    },
    writing: {
        name: 'ライティング',
        title: 'ライティング',
        pages: [
            { name: 'ライティングガイド', file: 'writing/guide.md' }
        ]
    },
    hht: {
        name: 'HHT操作音',
        title: 'HHT操作音',
        pages: [
            { name: 'HHT操作音ガイド', file: 'hht/operation-sound.md' }
        ]
    }
};

class DocumentationSite {
    constructor() {
        console.log('Initializing DocumentationSite');
        this.styleNav = document.getElementById('style-nav');
        this.contentArea = document.getElementById('content-area');
        this.currentSection = 'portal';
        this.currentFile = null;
        
        console.log('Elements found:', {
            styleNav: !!this.styleNav,
            contentArea: !!this.contentArea
        });
        
        this.init();
    }
    
    init() {
        console.log('Initializing site...');
        this.buildHeaderNavigation();
        this.buildSideNavigation();
        this.loadDefaultContent();
    }
    
    buildHeaderNavigation() {
        console.log('Building header navigation');
        const nav = document.querySelector('.header-nav ul');
        
        if (!nav) {
            console.error('Header nav ul not found');
            return;
        }
        
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
                console.log('Header nav clicked:', key);
                this.switchSection(key, a);
            });
            
            li.appendChild(a);
            nav.appendChild(li);
        });
        
        console.log('Header navigation built');
    }
    
    buildSideNavigation() {
        console.log('Building side navigation for section:', this.currentSection);
        
        const currentSectionData = siteStructure[this.currentSection];
        if (!currentSectionData) {
            console.error('Current section data not found:', this.currentSection);
            return;
        }
        
        if (!this.styleNav) {
            console.error('Style nav element not found');
            return;
        }
        
        this.styleNav.innerHTML = '';
        
        const pages = currentSectionData.pages || [];
        
        if (pages.length === 0) {
            console.log('No pages found for this section');
            return;
        }
        
        const ul = document.createElement('ul');
        
        pages.forEach((page, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            
            a.href = '#';
            a.textContent = page.name;
            a.dataset.file = page.file;
            
            // 最初のアイテムをアクティブにする
            if (index === 0) {
                a.classList.add('active');
            }
            
            a.addEventListener('click', (e) => {
                e.preventDefault();
                console.log('Side nav item clicked:', page.file);
                this.loadContent(page.file, a);
            });
            
            li.appendChild(a);
            ul.appendChild(li);
        });
        
        this.styleNav.appendChild(ul);
        console.log('Side navigation built with', pages.length, 'items');
    }
    
    switchSection(sectionKey, headerElement) {
        console.log('Switching to section:', sectionKey);
        
        // ヘッダーのアクティブ状態を更新
        document.querySelectorAll('.header-nav a').forEach(a => a.classList.remove('active'));
        if (headerElement) {
            headerElement.classList.add('active');
        }
        
        // 現在のセクションを更新
        this.currentSection = sectionKey;
        
        // サイドナビゲーションを更新
        this.buildSideNavigation();
        
        // 最初のページを読み込み
        this.loadFirstPageOfSection(sectionKey);
    }
    
    loadFirstPageOfSection(sectionKey) {
        console.log('Loading first page of section:', sectionKey);
        
        const section = siteStructure[sectionKey];
        if (!section) {
            console.error('Section not found:', sectionKey);
            return;
        }
        
        const pages = section.pages || [];
        
        if (pages.length > 0) {
            const firstPage = pages[0];
            console.log('Loading first page:', firstPage.file);
            // 対応するナビゲーションアイテムを見つける
            const navLink = document.querySelector(`a[data-file="${firstPage.file}"]`);
            this.loadContent(firstPage.file, navLink);
        } else {
            console.log('No pages found for section:', sectionKey);
            this.contentArea.innerHTML = `
                <h1>${section.name}</h1>
                <p>このセクションにはまだコンテンツがありません。</p>
            `;
        }
    }
    
    async loadContent(filename, navElement = null) {
        console.log('Loading content:', filename);
        
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
            
            console.log('Content loaded successfully:', filename);
            
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
        console.log('Loading default content');
        // デフォルトでPortalセクションの最初のページを読み込み
        this.loadFirstPageOfSection('portal');
    }
}

// DOMが読み込まれたらアプリケーションを初期化
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating DocumentationSite');
    new DocumentationSite();
});