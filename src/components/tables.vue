<template>
	<div class="table-wrapes">
		<hm-table :tableData="tableDataOption" :tableHeader="tableHeader" :isShowOpeColumn="isShowOpeColumn" v-if="tableData.length > 0">
			<span slot="operate" slot-scope="{ data }">
				<slot name="operate" :data="data"></slot>
			</span>
		</hm-table>
		<div class="no-data" v-else>暂无数据</div>
		<div class="look-more" v-show="looMoreState" @click="tableShowAll">
			查看更多
			<i class="iconfont iconjiantou"></i>
		</div>
	</div>
</template>
<script>
import hmTable from './hm-table'
export default {
	name: 'tables',
	components: {
		hmTable
	},
	data() {
		return {
			tableHeader: [],
			tableData: [],
			tableDataOption: [],
			tableDataFake: {},
			looMoreState: false
		}
	},
	props: {
		tableOptions: {
			type: Array,
			default: () => []
		},
		isShowOpeColumn: {
			type: Boolean,
			default: false
		},
		isTableShowMore: {
			type: Boolean,
			default: false
		}
	},
	watch: {
		tableOptions: {
			handler(val) {
				this.tableHeader = []
				this.tableData = []
				this.tableDataFake = {}
				this.tableHeader = val[0]
				this.operateTableContent()
			},
			immediate: true,
			deep: true
		}
	},
	methods: {
		// table 展示全部
		tableShowAll() {
			this.tableDataOption = this.tableData
			this.looMoreState = false
		},
		operateTableContent() {
			try {
				this.tableOptions.forEach((options, index) => {
					this.fixData(options, index, false)
				})
			} finally {
				this.operateData()
			}
		},
		fixData(tableOptions, index, isDiGui = false) {
			if (!this.tableDataFake[index] && isDiGui === false) {
				this.tableDataFake[index] = []
			}
			tableOptions.forEach(resp => {
				if (resp.children && resp.children.length > 0) {
					this.fixData(resp.children, index, true)
				} else {
					this.tableDataFake[index].push(resp)
				}
			})
		},
		operateData() {
			Object.values(this.tableDataFake).forEach(responce => {
				let temporyObj = {}
				responce.forEach(resp => {
					if (resp.label === '0') {
						temporyObj[resp.prop] = resp.value
						temporyObj['other'] = resp
						temporyObj['isShowColumn'] = '0'
						// temporyObj = Object.assign({}, resp, { [resp.prop]: resp.value })
					} else {
						temporyObj[resp.prop] = resp.value
					}
				})
				this.tableData.push(temporyObj)
			})
			if (this.isTableShowMore && this.tableData.length > 5) {
				this.tableDataOption = this.tableData.slice(0, 5)
				this.looMoreState = true
			} else {
				this.tableDataOption = this.tableData
			}
		}
	}
}
</script>

<style scoped lang="scss">
.table-wrapes {
	width: 100%;
	.no-data {
		width: 100%;
		height: 80px;
		border-radius: 5px;
		border: 1px solid #d8d8d8;
		text-align: center;
		line-height: 80px;
		font-size: 18px;
		color: #ebebeb;
	}
	.look-more {
		width: 100%;
		height: 50px;
		border-bottom-left-radius: 3px;
		border-bottom-right-radius: 3px;
		font-size: 16px;
		color: #717171;
		text-align: center;
		line-height: 50px;
		border: 1px solid #ebeef5;
		border-top: none;
		&:hover {
			cursor: pointer;
		}
		.iconfont {
			font-size: 14px;
		}
	}
}
</style>
