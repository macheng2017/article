const {readdirSync} = require('fs')
const {clientID, clientSecret} = require('./token')

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
                children: getPath('js')
            },
            {
                title: '读书笔记',
                children: getPath('book')
            },
            {
                title: 'pm2部署',
                children: getPath('pm2')
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
        lineNumbers: true,
    },
    plugins: [
        [
            'gitalk',
            {
                gitalkConfig: {
                    clientID: clientID,
                    clientSecret: clientSecret,
                    repo: 'article',
                    owner: 'macheng2017',
                    admin: ['macheng2017'],
                    // id: location.pathname, // 无法配置默认用 location.pathname
                    distractionFreeMode: false, // Facebook-like distraction free mode
                },
            },
        ],
    ]
}
