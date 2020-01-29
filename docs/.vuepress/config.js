const {readdirSync} = require('fs')

const getPath = path => {
    return readdirSync(`docs/${path}`).map(dir => {
        return `${path}/${dir}`
    })
}

module.exports = {
    title: '马成的日志',
    description: '马成的日志',
    themeConfig: {
        nav: [
            {text: 'Home', link: '/'},
            // {text: '博客文章', link: '/前言'},
        ],
        sidebar: [
            {
                title: '一些闪念',
                children: getPath('idea')
            },
            {
                title: 'JavaScript',
                children: getPath('JavaScript')
            },
            {
                title: 'pm2部署',
                children: getPath('pm2')
            },
            {
                title: '读书笔记',
                children: getPath('book')
            },
            {
                title: 'vue学习笔记',
                children: getPath('vue')
            },
        ],
        sidebarDepth: 2,
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
        editLinkText: '帮我改善此文章',
        repoLabel: '查看源码',
        lastUpdated: '最后更新时间', // string | boolean
        smoothScroll: true,
    },
    plugins: [
        [
            'vuepress-plugin-comment',
            {
                choosen: 'valine',
                // options选项中的所有参数，会传给Valine的配置
                options: {
                    el: '#valine-vuepress-comment',
                    appId: 'Vj7qW5iXCwm1X1axuwN40U8Y-gzGzoHsz',
                    appKey: 'PWnIyT3P2Pm5G41To80nib3a'
                }
            }
        ]
    ]
}
