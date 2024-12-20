import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'
// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  lang: 'zh-CN',
  lastUpdated: true,
  cleanUrls: true,
  metaChunk: true,
  title: "Lumega wiki",
  description: "lumega 在线文档(NeOmega 核心功能)",
  titleTemplate: ':title - lumega 在线文档(NeOmega 核心功能)',
  head: [['link', { rel: 'icon', href: '/lumega.ico' }]],
  srcDir: 'src',
  //base: '/vitepress-carbon-template/', if running on github-pages, set repository name here

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
			{text: '安装', link: '/安装说明.md'},
			{text: '快速开始', link: '/lua插件编写/快速开始/60分钟闪电战.md'},
			{text: '调试代码', link: '/lua插件编写/调试lua代码/调试代码.md'},
			{text: '接口列表', items: [
        {text: '列表', link: '/lua插件编写'},
        {
          items:[
            {text: '读取配置', link: '/lua插件编写/配置读取和升级相关API/配置读取和升级.md'},
            {text: '菜单', link: '/lua插件编写/菜单相关API/菜单相关API.md'},
            {text: '命令收发', link: '/lua插件编写/命令收发api/coromega_cmd.md'},
            {text: '机器人', link: '/lua插件编写/机器人和服务器信息/coromega_botUq.md'},
            {text: '玩家与命令', link: '/lua插件编写/玩家交互与命令方块API/cmd_player.md'},
            {text: 'botAction', link: '/lua插件编写/botAction/botAction.md'},
            {text: '建造', link: '/lua插件编写/方块和命令块放置相关/coromega_place_command_block.md'},
            {text: '建筑操作', link: '/lua插件编写/建筑操作/08_structure.md'},
            {text: '导入器', link: '/lua插件编写/导入器_strucure_canvas相关API/导入器_strucure_canvas相关API.md'},
            {text: '数据包', link: '/lua插件编写/数据包监听相关API/数据包监听相关API.md'},
            {text: '跨插件通信', link: '/lua插件编写/跨插件api调用/跨插件api调用.md'},
            {text: '系统功能', link: '/lua插件编写/system/coromega_system.md'},
            {text: '存储', link: '/lua插件编写/存储相关/coromega_storage.md'},
            {text: 'cqhttp', link: '/lua插件编写/cqhttp相关API/cqhttp相关API.md'},
            {text: 'http', link: '/lua插件编写/http相关/http.md'},
            {text: 'websocket', link: '/lua插件编写/websocket/websocket.md'},
            {text: '加密哈希Base64', link: '/lua插件编写/密码_哈希_base64/密码_哈希_base64.md'},
            {text: '软API', link: '/lua插件编写/软API/软API.md'},
            {text: '代码分发保护', link: '/lua插件编写/在分发时保护你的代码/在分发时保护你的代码.md'},
            {text: '其他', link: '/lua插件编写/其他/common.md'},]
			  },
      ]},
//      { text: 'Examples', link: '/markdown-examples' }
		],

    search: {
      provider: 'local'
    },
    
    sidebar: [
      {
				text: '安装 NeOmega',
				link: '/安装说明.md',
			},
			{
				text: '编写Lua插件:快速开始',
				link: '/lua插件编写/快速开始/60分钟闪电战.md',
			},
			{
				text: '编写Lua插件:调试代码',
				link: '/lua插件编写/调试lua代码/调试代码.md',
			},
			{
				text: '编写Lua插件:接口列表',
				link: '/lua插件编写',
        collapsed: false,
				items: [
          {
            items:[
              {text: '读取配置', link: '/lua插件编写/配置读取和升级相关API/配置读取和升级.md'},
              {text: '菜单', link: '/lua插件编写/菜单相关API/菜单相关API.md'},
              {text: '命令收发', link: '/lua插件编写/命令收发api/coromega_cmd.md'},
              {text: '机器人', link: '/lua插件编写/机器人和服务器信息/coromega_botUq.md'},
              {text: '玩家与命令', link: '/lua插件编写/玩家交互与命令方块API/cmd_player.md'},
              {text: 'botAction', link: '/lua插件编写/botAction/botAction.md'},
              {text: '建造', link: '/lua插件编写/方块和命令块放置相关/coromega_place_command_block.md'},
              {text: '建筑操作', link: '/lua插件编写/建筑操作/08_structure.md'},
              {text: '导入器', link: '/lua插件编写/导入器_strucure_canvas相关API/导入器_strucure_canvas相关API.md'},
              {text: '数据包', link: '/lua插件编写/数据包监听相关API/数据包监听相关API.md'},
              {text: '跨插件通信', link: '/lua插件编写/跨插件api调用/跨插件api调用.md'},
              {text: '系统功能', link: '/lua插件编写/system/coromega_system.md'},
              {text: '存储', link: '/lua插件编写/存储相关/coromega_storage.md'},
              {text: 'cqhttp', link: '/lua插件编写/cqhttp相关API/cqhttp相关API.md'},
              {text: 'http', link: '/lua插件编写/http相关/http.md'},
              {text: 'websocket', link: '/lua插件编写/websocket/websocket.md'},
              {text: '加密哈希Base64', link: '/lua插件编写/密码_哈希_base64/密码_哈希_base64.md'},
              {text: '软API', link: '/lua插件编写/软API/软API.md'},
              {text: '代码分发保护', link: '/lua插件编写/在分发时保护你的代码/在分发时保护你的代码.md'},
              {text: '其他', link: '/lua插件编写/其他/common.md'},]
          },
        ]},
//      {
//        text: 'Examples',
//        items: [
//          { text: 'Markdown Examples', link: '/markdown-examples' },
//          { text: 'Runtime API Examples', link: '/api-examples' }
//        ]
//      }
    ],

//    outline: [2, 3],

    logo: {
      src: '/lumega.ico'
    },


    editLink: {
      pattern: 'https://github.com/rnhws/neomega-doc/edit/neo/src/:path',
      text: '编辑此页面'
    },

    lastUpdated: {
      formatOptions: { dateStyle: 'short', timeStyle: 'short' }
    },

    //socialLinks: [
      //{ icon: 'github', link: 'https://github.com/brenoepics/vitepress-carbon' }
    //]

    footer: {
      message: `主要支持：2401PT 其他贡献见 贡献者 标签`,
      copyright:
        'Copyright © 2024 <a href="https://github.com/rnhws">rnhws</a>,All Rights Reserved.',
    },
  }
})
