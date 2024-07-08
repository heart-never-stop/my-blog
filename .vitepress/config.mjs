import { defineConfig } from "vitepress";

export default defineConfig({
	base: "",
	title: "心脏永不暂停",
	description: "A VitePress Site11",
	themeConfig: {
		outlineTitle: "目录",
		outline: "deep",
		nav: [
			{ text: "首页 ", link: "/" },
			{
				text: "环境管理",
				items: [
					{ text: "git", link: "/env/git/" },
					{ text: "node", link: "/env/node/" },
					{ text: "java", link: "/env/java/" },
				],
			},
		],

		sidebar: [
			{
				text: "环境配置",
				items: [
					{ text: "git", link: "/env/git/" },
					{ text: "node", link: "/env/node/" },
					{ text: "java", link: "/env/java/" },
				],
			},
		],

		socialLinks: [
			{ icon: "github", link: "https://github.com/heart-never-stop" },
		],

		search: {
			provider: "local",
			options: {
				translations: {
					button: {
						buttonText: "搜索文档",
						buttonAriaLabel: "搜索文档",
					},
					modal: {
						noResultsText: "无法找到相关结果",
						resetButtonTitle: "清除查询条件",
						footer: {
							selectText: "选择",
							navigateText: "切换",
						},
					},
				},
			},
		},
	},
});
