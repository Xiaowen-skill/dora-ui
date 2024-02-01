<template>
	<button class="dora-button" :class="typeClass" :style="customStyle" @mouseover="mouseover" @mouseleave="mouseleave">
		<slot />
	</button>
</template>
<script setup>
/* 这是一个button按钮组件 */
import { defineProps, ref, computed, nextTick } from "vue";
// 定义需要的props
const props = defineProps({
	// 按钮的类型
	type: {
		type: String,
		default: "default",
	},
	// 圆角
	round: {
		type: Boolean,
		default: false,
	},
	// 朴素
	plain: {
		type: Boolean,
		default: false,
	},
	// 禁用
	disabled: {
		type: Boolean,
		default: false,
	},
	// 大小
	size: {
		type: String,
		default: "default",
	},
	// 自定义颜色
	color: {
		type: String,
		default: "",
	},
	// 文字链接
	link: {
		type: Boolean,
		default: false,
	},
});
// 根据类型来设置按钮的样式
const typeClass = computed(() => {
	return {
		[`dora-button-${props.type}`]: props.type,
		'is-plain': props.plain,
		'is-round': props.round,
		'is-disabled': props.disabled,
		[`dora-button-${props.size}`]: props.size,
		'is-link': props.link,
	}
})
// 自定义颜色
let customColor = ref(props.color ? props.color : "");
let customStyle = ref({});
let getCustomStyle =() => {
	if (customColor.value) {
		// 判断是否有plain
		if (props.plain && props.disabled) {
			customStyle.value = {
				backgroundColor: '#fff',
				borderColor: lighten(customColor.value, 20),
				color: lighten(customColor.value, 20),
			}
		} else if (props.link && props.disabled) {
			customStyle.value = {
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				color: lighten(customColor.value, 20),
			}
		} else if (props.disabled) {
			customStyle.value = {
				backgroundColor: lighten(customColor.value, 20),
				borderColor: lighten(customColor.value, 20),
				color: '#fff',
			}
		} else if (props.plain) {
			customStyle.value = {
				backgroundColor: '#fff',
				borderColor: customColor.value,
				color: customColor.value,
			}
		}else if (props.link) {
			customStyle.value = {
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				color: customColor.value,
			}
		}  else {
			// 改变颜色
			customStyle.value = {
				backgroundColor: customColor.value,
				borderColor: customColor.value,
				color: '#fff'
			}
		}
	} else {
		customStyle.value = {};
	}
}
getCustomStyle();
// 鼠标移入
let mouseover = () => {
	if (customColor.value) {
		if (props.plain && props.disabled) {
			customStyle.value = {
				backgroundColor: '#fff',
				borderColor: lighten(customColor.value, 20),
				color: lighten(customColor.value, 20),
			}
		} else if (props.link && props.disabled) {
			customStyle.value = {
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				color: lighten(customColor.value, 20),
			}
		} else if (props.disabled) {
			customStyle.value = {
				backgroundColor: lighten(customColor.value, 20),
				borderColor: lighten(customColor.value, 20),
				color: '#fff',
			}
		} else if (props.plain) {
			customStyle.value = {
				backgroundColor: customColor.value,
				borderColor: customColor.value,
				color: '#fff',
			}
		}else if (props.link) {
			customStyle.value = {
				backgroundColor: 'transparent',
				borderColor: 'transparent',
				color: lighten(customColor.value, 20),
			}
		} else{
			customStyle.value = {
				backgroundColor: lighten(customColor.value, 10),
				borderColor: lighten(customColor.value, 10),
				color: '#fff'
			}
		}

	}
}
// 鼠标移出
let mouseleave = () => {
	getCustomStyle();
}
// 计算hover的颜色
function lighten(color, percent) {
	let num = parseInt(color.replace("#",""), 16),
			amt = Math.round(2.55 * percent),
			R = (num >> 16) + amt,
			B = ((num >> 8) & 0x00FF) + amt,
			G = (num & 0x0000FF) + amt;
	return "#" + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (B<255?B<1?0:B:255)*0x100 + (G<255?G<1?0:G:255)).toString(16).slice(1);
}

</script>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";

</style>