// 设备数据配置文件

export interface Device {
	name: string;
	image: string;
	specs: string;
	description: string;
	link: string;
}

// 设备类别类型，支持品牌和自定义类别
export type DeviceCategory = {
	[categoryName: string]: Device[];
} & {
	自定义?: Device[];
};

export const devicesData: DeviceCategory = {
	笔记本电脑: [
		{
			name: "Thinkbook 16p gen4 (2023)",
			image: "/images/device/laptop.png", // 路径: public/images/device/laptop.png
			specs: "i9-13900H / 4060",
			description: "足够使用, 足够商务. 生产力工具必不可少.",
			link: "https://www.bilibili.com/video/BV1dm4y1t7TN/",
		},
		{
			name: "MacBook Air M4 13inch (2024)",
			image: "/images/device/mba.png",
			specs: "Apple M4 / 8 + 256",
			description: "足够轻便, 单核很强. 有win之后的最佳之选.",
			link: "https://support.apple.com/zh-cn/122209",
		},
	],
	显示器: [
		{
			name: "泰坦军团 P275MV PLUS",
			image: "/images/device/TitanArmy.png",
			specs: "4K双模 / MiniLED / HDR1400",
			description: "4K 办公, 用了都说好.",
			link: "https://www.titanarmy.cn/goods/details/index/id/381/cid/26.html",
		},
		{
			name: "Hisense 27G5-Pro",
			image: "/images/device/Hisense.png",
			specs: "2K-180Hz / FastIPS",
			description: "2K 高刷 IPS, 性价比之选.",
			link: "https://mall.hisense.com/items/5947",
		},
	],
	外设: [
		{
			name: "腹灵OG98机械键盘",
			image: "/images/device/OG98.png",
			specs: "3模 / 98键 / 冰薄荷轴 / 复古简约",
			description: "办公游戏主力.",
			link: "https://item.jd.com/10089298868662.html?pcdk=sl_xFc6peZJVlW8F_RjHbb3vDKIWIclTdL1RICaKQMc8SFULaIlY8R7C6fZB2gKP.NnCI.sen1",
		},
		{
			name: "Cherry K37 薄膜键盘",
			image: "/images/device/Cherry.png",
			specs: "薄膜 / 更安静 / 防水",
			description: "安静(不完全)耐用, 手感不差.",
			link: "https://item.jd.com/100174873289.html?pcdk=sl_xFc6peZJVlW8F_RjHbahYe5BKTs3VTuyRLoe8EdLEVVXZ9PeeF5eeUzBzIHBQ.NnCI.sen1",
		},
		{
			name: "漫步者G5MPro鼠标",
			image: "/images/device/Mouse.png",
			specs: "快拆微动 / 磁吸充电 / 4k回报率",
			description: "到手直接换静音微动, 室友都说好.",
			link: "https://item.jd.com/100156049726.html?pcdk=_G3mdJS2Dlbza53_l4Bnsz9573vIAr78UdL0axZ7M2gTZDvdFT303Rh14IyQG-PH.NnCI.sen1",
		},
	],
	平板: [
		{
			name: "iPad Pro M4 11 inch (2024)",
			image: "/images/device/iPad.png",
			specs: "Pencil Pro / OLED",
			description: "双层串联OLED确实很惊艳, 但主要还是记笔记.",
			link: "https://support.apple.com/zh-cn/119892",
		},
	],
	手机: [
		{
			name: "iPhone SE3",
			image: "/images/device/iPhone.png",
			specs: "A15 / 小屏",
			description:
				"有电脑就几乎完全不用手机, 够用就行. 手大, 但喜欢小屏.",
			link: "https://support.apple.com/zh-cn/111866",
		},
	],
};

