<template>
	<div class="dora-btn">
		<div class="base-btn">
			<div class="title">一、 基础用法</div>
			<div class="btn-one">
				<div class="info">1.使用type来定义按钮的颜色样式。 </div>
				<DoraButton>Default</DoraButton>
				<DoraButton type="primary">Primary</DoraButton>
				<DoraButton type="success">Success</DoraButton>
				<DoraButton type="info">Info</DoraButton>
				<DoraButton type="warning">Warning</DoraButton>
				<DoraButton type="danger">Danger</DoraButton>
			</div>
			<div class="btn-one">
				<div class="info">2.使用round来定义按钮的圆角样式。 </div>
				<DoraButton round>Round</DoraButton>
				<DoraButton type="primary" round>Primary</DoraButton>
				<DoraButton type="success" round>Success</DoraButton>
				<DoraButton type="info" round>Info</DoraButton>
				<DoraButton type="warning" round>Warning</DoraButton>
				<DoraButton type="danger" round>Danger</DoraButton>
			</div>
			<div class="btn-one">
				<div class="info">3.使用plain来定义按钮的朴素样式。 </div>
				<DoraButton plain>Plain</DoraButton>
				<DoraButton type="primary" plain>Primary</DoraButton>
				<DoraButton type="success" plain>Success</DoraButton>
				<DoraButton type="info" plain>Info</DoraButton>
				<DoraButton type="warning" plain>Warning</DoraButton>
				<DoraButton type="danger" plain>Danger</DoraButton>
			</div>
		</div>
		<div class="base-btn">
			<div class="title">二、 禁用状态</div>
			<div class="btn-one">
				<div class="info">使用disabled来定义按钮的禁用样式。 </div>
				<DoraButton disabled>Disabled</DoraButton>
				<DoraButton type="primary" disabled>Primary</DoraButton>
				<DoraButton type="success" disabled>Success</DoraButton>
				<DoraButton type="info" disabled>Info</DoraButton>
				<DoraButton type="warning" disabled>Warning</DoraButton>
				<DoraButton type="danger" disabled>Danger</DoraButton>
			</div>
			<div class="btn-one">
				<DoraButton plain disabled>Plain</DoraButton>
				<DoraButton type="primary" plain disabled>Primary</DoraButton>
				<DoraButton type="success" plain disabled>Success</DoraButton>
				<DoraButton type="info" plain disabled>Info</DoraButton>
				<DoraButton type="warning" plain disabled>Warning</DoraButton>
				<DoraButton type="danger" plain disabled>Danger</DoraButton>
			</div>
		</div>
		<div class="base-btn">
			<div class="title">三、 按钮大小</div>
			<div class="btn-one">
				<div class="info">使用small，default,large改变按钮大小 </div>
				<DoraButton size="small">Small</DoraButton>
				<DoraButton size="default">Default</DoraButton>
				<DoraButton size="large">Large</DoraButton>
				<DoraButton type="primary" size="small">Small</DoraButton>
				<DoraButton type="primary" size="default">Default</DoraButton>
				<DoraButton type="primary" size="large">Large</DoraButton>
			</div>
		</div>
		<div class="base-btn">
			<div class="title">四、 自定义颜色</div>
			<div class="btn-one">
				<DoraButton color="#bd4fa4">Default</DoraButton>
				<DoraButton color="#bd4fa4" disabled>Default</DoraButton>
				<DoraButton color="#bd4fa4" plain>Default</DoraButton>
				<DoraButton color="#bd4fa4" plain disabled>Default</DoraButton>
				<DoraButton color="#1a14eb" round>Default</DoraButton>
				<DoraButton color="#1a14eb" round disabled>Default</DoraButton>
			</div>
		</div>
		<div class="base-btn">
			<div class="title">五、 文字链接按钮</div>
			<div class="btn-one">
				<DoraButton link>Default</DoraButton>
				<DoraButton type="primary" link>Primary</DoraButton>
				<DoraButton type="success" link>Success</DoraButton>
				<DoraButton type="info" link>Info</DoraButton>
				<DoraButton type="warning" link>Warning</DoraButton>
				<DoraButton type="danger" link>Danger</DoraButton>
			</div>
			<div class="btn-one">
				<DoraButton link disabled>Default</DoraButton>
				<DoraButton type="primary" link disabled>Primary</DoraButton>
				<DoraButton type="success" link disabled>Success</DoraButton>
				<DoraButton type="info" link disabled>Info</DoraButton>
				<DoraButton type="warning" link disabled>Warning</DoraButton>
				<DoraButton type="danger"  link disabled>Danger</DoraButton>
			</div>
		</div>
	</div>
</template>
<script setup>
import DoraButton from "@/components/DoraButton/DoraButton.vue";
</script>
<style scoped lang="scss">
.dora-btn{
	.base-btn{
		.title{
			font-size: 20px;
			font-weight: bold;
			margin-bottom: 14px;
		}
		.info{
			margin-bottom: 14px;
		}
		.btn-one{
			margin-bottom: 14px;
			.dora-button{
				margin-right: 14px;
			}
		}
	}
}
</style>