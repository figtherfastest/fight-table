<template>
	<el-table-column :prop="columnData.prop" :label="columnData.label" :class="`66666${columnData.label}`" align="center" show-overflow-tooltip>
		<hm-table-column
			v-for="(item, index) in columnData.children"
			v-show="columnData.children && columnData.children.length > 0"
			:key="`column-${item.prop}-${index}-${Math.random()}`"
			:columnData="item"
			show-overflow-tooltip
		>
		</hm-table-column>
	</el-table-column>
</template>

<script>
export default {
	name: 'hm-table-column',
	props: {
		columnData: {
			type: Object,
			default: () => []
		}
	}
}
</script>

<style scoped></style>
