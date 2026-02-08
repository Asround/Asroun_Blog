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
			description: "足够使用, 足够商务.",
			link: "https://www.bilibili.com/video/BV1dm4y1t7TN/",
		},
		{
			name: "MacBook Air M4 13inch (2024)",
			image: "/images/device/mba.png",
			specs: "Apple M4 / 8 + 256",
			description: "足够轻便, 单核很强.",
			link: "https://support.apple.com/zh-cn/122209",
		},
	],
	显示器: [
		{
			name: "泰坦军团",
			image: "/images/device/mba.png",
			specs: "Apple M4 / 8 + 256",
			description: "足够轻便, 单核很强.",
			link: "https://www.bilibili.com/video/BV1dm4y1t7TN/",
		},
	],
	Router: [
		{
			name: "GL-MT3000",
			image: "/images/device/mt3000.png",
			specs: "1000Mbps / 2.5G",
			description:
				"Portable WiFi 6 router suitable for business trips and home use.",
			link: "https://www.gl-inet.cn/products/gl-mt3000/",
		},
	],
};

