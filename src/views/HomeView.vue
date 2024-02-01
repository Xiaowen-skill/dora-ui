<script setup>
import DoraButton from "@/views/DoraButton.vue"; // 按钮
/* 基础组件 */
let currentIdx = 0;
const baseList = [
	{
		id:0,
		name: "DoraButton",
		chineseName: "按钮",
	},
];
</script>

<template>
	<div class="introduction">
		<div class="info">
			<!--	基础组件	-->
			<div class="sidebar-title">
				基础组件
			</div>
			<div class="info-item" v-for="item in baseList" :key="item.name" :class="{'info-active':currentIdx === item.id}"
			@click="currentIdx = item.id">
				<span>{{ item.name }}</span>
				<span>{{ item.chineseName }}</span>
			</div>
		</div>
		<div class="main">
			<DoraButton />
		</div>
	</div>
</template>
<style scoped lang="scss">
@import "@/assets/styles/main.scss";
.introduction{
	display: flex;
}
.info{
	width: 260px;
	padding: 20px;
	.sidebar-title{
		font-size: 16px;
		font-weight: bold;
		margin-bottom: 10px;
	}
	.info-item{
		display: flex;
		align-items: center;
		padding: 10px;
		border-bottom: 1px solid #eee;
		cursor: pointer;
		border-radius: $border-radius;
		transition: all 0.2s ease;
		span{
			margin-right: 10px;
		}
		&:hover{
			background-color: lighten($primary-color, 10%);
			color: $default-color;
		}
	}
	.info-active{
		background-color: lighten($primary-color, 10%);
		color: $default-color;
	}
}
// 合适的调整当前ui
.main{
	flex: 1;
	padding: 20px;
}

</style>
