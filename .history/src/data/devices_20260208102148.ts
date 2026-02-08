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
	平板: [
		{
			name: "iPad Pro M4 11 inch (2024)",
			image: "/images/device/iPad.png",
			specs: "Pencil Pro / OLED",
			description: "双层串联OLED确实很惊艳, 但主要还是记笔记.",
			link: "https://support.apple.com/zh-cn/119892",
		},
	],
};

