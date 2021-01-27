<template>
	<el-table size="mini" :data="tableData" border stripe style="width: 100%;height: 100%">
		<hm-table-column
			v-if="item.label !== '0'"
			v-for="(item, index) in tableHeader"
			:class="`${item.label}`"
			:key="`table-${item.prop}-${item.value}-${index}-${Math.random()}`"
			:columnData="item"
		></hm-table-column>
		<el-table-column label="操作" v-if="isShowOpeColumn" fixed="right" :data="tableData">
			<template slot-scope="scope">
				<slot name="operate" :data="scope.row" />
			</template>
		</el-table-column>
	</el-table>
</template>

<script>
import hmTableColumn from './hm-table-column'
export default {
	name: 'hm-table',
	components: {
		hmTableColumn
	},
	props: {
		tableData: {
			type: Array,
			default: () => []
		},
		tableHeader: {
			type: Array,
			default: () => []
		},
		isShowOpeColumn: Boolean
	}
}
</script>

<style scoped></style>
