module.exports = {
    title: '马成的日志',
    description: '马成的日志',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            {text: '博客文章', link: '/前言'},
        ],
        displayAllHeaders: true,// 默认值：false
        sidebar: [
            '/',
            ['/目录', '目录'],
            ['/前言', '前言'],
            ['/拆解', '拆解']
        ],
        '/zh/': {
            // 多语言下拉菜单的标题
            selectText: '选择语言',
            // 该语言在下拉菜单中的标签
            label: '简体中文',
            // 编辑链接文字
            editLinkText: '在 GitHub 上编辑此页',
            // Service Worker 的配置
            serviceWorker: {
                updatePopup: {
                    message: "发现新内容可用.",
                    buttonText: "刷新"
                }
            },
        },
        // 假定是 GitHub. 同时也可以是一个完整的 GitLab URL
        repo: 'macheng2017/article',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '我有更好的表述,我要改善此页面！',
        repoLabel: '查看源码',
        lastUpdated: '最后更新时间', // string | boolean
        smoothScroll: true,
    }
}
