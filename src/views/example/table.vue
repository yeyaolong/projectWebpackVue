<!--
    后台 列表 页面
    @author：huhl
    @createTime：2018-04-10 12:20
 -->
<template lang="html">
	<section class="tablePack">
		<el-row>
			<el-col :span="24">
			<!--表单-->
				<el-form :inline="true" :model="formInline" class="demo-form-inline">
					<el-form-item label="姓名">
						<el-input v-model="formInline.user.name" placeholder="姓名" style="width: 140px;"></el-input>
					</el-form-item>
					<el-form-item label="年份">
						<el-date-picker
							v-model="formInline.user.date"
							align="right"
							type="year"
							placeholder="选择年份">
						</el-date-picker>
					</el-form-item>
					<el-form-item label="地址">
						<el-cascader expand-trigger="hover" :options="options" v-model="formInline.user.address"></el-cascader>
					</el-form-item>
					<el-form-item label="籍贯">
						<el-select v-model="formInline.user.place" placeholder="请选择">
							<el-option
							v-for="item in places"
							:label="item.label"
							:value="item.value"
							:key="item.id">
							</el-option>
						</el-select>
					</el-form-item>
					<el-form-item>
						<el-button type="primary" @click="onSubmit">查询</el-button>
						<el-button type="primary" id="download" @click="download()"  download="download.csv">导出数据</el-button>
					</el-form-item>
				</el-form>
				<!--表格-->
				<el-table :data="tableData" border style="width: 100%" v-loading="listLoading"
				element-loading-text="拼命加载中..."
				header-row-class-name="table-header-class" >
					<el-table-column type="selection"></el-table-column>
					<el-table-column prop="date" label="出生日期" width="180"></el-table-column>
					<el-table-column prop="name" label="姓名" width="180"></el-table-column>
					<el-table-column prop="address" label="地址"></el-table-column>
					<el-table-column label="操作">
						<template slot-scope="scope">
							<el-button type="primary" size="small" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
							<el-button type="danger" size="small" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
						</template>
					</el-table-column>
				</el-table>
				<!-- 翻页 -->
				<div class="page">
					<el-pagination
						@current-change="handleCurrentChange"
						:current-page="currentPage"
						:page-size="100"
						layout="prev, pager, next, jumper"
						:total="1000">
					</el-pagination>
				</div>
			</el-col>
		</el-row>

		<!-- 弹层 -->
		<el-dialog title="修改个人信息" :visible.sync="dialogFormVisible">
			<el-form ref="form" :model="form" label-width="80px">
				<el-form-item label="姓名">
					<el-input v-model="form.name"></el-input>
				</el-form-item>
				<el-form-item label="地址">
					<el-input v-model="form.address"></el-input>
				</el-form-item>
				<el-form-item label="出生日期">
					<el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;" ></el-date-picker>
				</el-form-item>
				<el-form-item>
					<el-button type="primary" @click="handleSave" :loading="editLoading">修改</el-button>
					<el-button @click="dialogFormVisible = false">取消</el-button>
				</el-form-item>
			</el-form>
		</el-dialog>
	</section>
</template>

<script>
import { $ajaxExample } from '@/api';
export default {
	data () {
		return {
			field:'',
			formInline: {
				user: {
					name: '',
					date: '',
					address: [],
					place: ''
				}
			},
			tableData: [],
			options: [],
			places: [],
			dialogFormVisible: false,
			editLoading: false,
			form: {
				name: '',
				address: '',
				date: '',
			},
			currentPage: 4,
			table_index: 999,
			listLoading:false
		};
	},
	// dom 还没有生成
	created () {
		var self = this;
		self.getTableDate();
		self.getSearchParams();	
	},
	// dom 已经生成 
	// mounted () {
	// 	var self = this;
	// 	self.$nextTick(() => { 
	// 		self.getTableDate();
	// 		self.getSearchParams();	
	// 	})
	// },
	methods: {
		// 搜索提交
		onSubmit () {
			this.getTableDate();
		},
		// 获取列表数据
		getTableDate(){
			var self = this;
			self.listLoading = true;
			$ajaxExample.getTable({
				"page":self.currentPage,
				"name":self.formInline.user.name,
				"year":self.formInline.user.date,
				"address":self.formInline.user.address,
				"native":self.formInline.user.place
			},function(response){
				self.listLoading = false;
				self.tableData = response.data.list;
			});
		},
		// 获取搜索参数初始化
		getSearchParams(){
			var self = this;
			$ajaxExample.getOptions({},function(response){
				self.options = response.data.list;
				self.places = response.data.places;
			});
		},
		// 删除功能
		handleDelete (index, row) {
			this.$confirm('确认要删除吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				cancelButtonClass: 'cancel'
			}).then(() => {
				this.tableData.splice(index, 1);
				this.$message({
					message: "操作成功！",
					type: 'success'
				});
			}).catch(() => {

			});
		},
		// 编辑点击弹层
		handleEdit (index, row) {
			this.dialogFormVisible = true;
			this.form = Object.assign({}, row);
			this.table_index = index;
		},
		// 编辑保存功能
		handleSave () {
			this.$confirm('确认提交吗？', '提示', {
				confirmButtonText: '确定',
				cancelButtonText: '取消',
				cancelButtonClass: 'cancel'
			}).then(() => {
				this.editLoading = true;
				let date = this.form.date;
				if (typeof date === "object") {
					date = [date.getFullYear(), (date.getMonth() + 1), (date.getDate())].join('-');
					this.form.date = date
				}
				// this.tableData[this.table_index] = this.form;
				this.tableData.splice(this.table_index, 1, this.form);
				this.$message({
					message: "操作成功！",
					type: 'success'
				});
				this.editLoading = false;
				this.dialogFormVisible = false;
			}).catch(() => {

			});
		},
		// 导出数据
		download: function() {
			console.log("xiazai")
		},
		// 分页跳转
		handleCurrentChange(val) {
			this.currentPage = val;
			console.log(`当前页: ${val}`);
			this.getTableDate();
		}
	}
};
</script>


<style lang="scss" scoped>
@import './table.scss';
</style>