<template>

	<div class="gray-bg ">
		<div class="wrapper wrapper-content animated fadeInRight">
			<div class="row">
				<div class="col-sm-12">
					<div class="ibox float-e-margins">
						<div class="ibox-title">
							<h5>请填写需要生成的<span class="text-navy">应用信息</span>，选择需要使用的<span class="text-navy">中间件</span>、<span class="text-navy">基础产品</span></h5>
						</div>
						<div class="ibox-content">
							<form method="get" class="form-horizontal">
								<div class="form-group">
									<label class="col-sm-2 control-label">Aone应用名</label>
									<div class="col-sm-10">
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Group</label>
									<div class="col-sm-10">
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Artifact</label>
									<div class="col-sm-10">
										<input type="text" class="form-control">
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Java Version</label>
									<div class="col-sm-10">
										<el-select v-model="form.region" :select2Style="select2Style" placeholder="请选择活动区域">
											<el-option label="1.7" value="1.7"></el-option>
											<el-option label="1.8" value="1.8"></el-option>
										</el-select>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">应用类型</label>
									<div class="col-sm-10">
										<n3-radio-group v-model="radioValue" type="primary" style="margin-top: 7px;">
											<n3-radio label="left">微服务应用（Pandora Boot）</n3-radio>
											<n3-radio label="middle">集成Spring Boot<span class="text-navy">（推荐）</span></n3-radio>
											<n3-radio label="right">传统War应用</n3-radio>
										</n3-radio-group>
									</div>
								</div>
								<div class="hr-line-dashed"></div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Docker模板</label>
									<div class="col-sm-10">
										<n3-radio-group v-model="radioValues" type="primary" style="margin-top: 7px;">
											<n3-radio label="a">是</n3-radio>
											<n3-radio label="b">否</span></n3-radio>
										</n3-radio-group>
									</div>
								</div>
								<div class="hr-line-dashed"></div>
								<div class="form-group">
									<label class="col-sm-2 control-label">Web框架<br><small class="text-navy">请按需勾选</small></label>
									<div class="col-sm-10" style="margin-top: 10px;">
										<div class="col-sm-4">
											<n3-checkbox label="one">
												<span>Spring MVC</span>
												<span class="text-navy style">（推荐）</span>
												<p style="padding: 6px 17px;">Spring Web框架</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="two" disabled>
												<span>webX3</span>
												<p style="padding: 6px 17px;">集团通用Web框架</p>
											</n3-checkbox>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">中间件<br><small class="text-navy">请按需勾选</small></label>
									<div class="col-sm-10" style="margin-top: 10px;">
										<div class="col-sm-4">
											<n3-checkbox label="two">
												<span>HSF</span>
												<p style="padding: 6px 17px;">阿里高性能服务框架</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="one">
												<span>TDDL</span>
												<p style="padding: 6px 17px;">分库分表数据库服务</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="two">
												<span>ONS</span>
												<p style="padding: 6px 17px;">分布式消息服务</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="two">
												<span>HSF</span>
												<p style="padding: 6px 17px;">阿里高性能服务框架</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="one">
												<span>TDDL</span>
												<p style="padding: 6px 17px;">分库分表数据库服务</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="two">
												<span>ONS</span>
												<p style="padding: 6px 17px;">分布式消息服务</p>
											</n3-checkbox>
										</div>
									</div>
								</div>
								<div class="form-group">
									<label class="col-sm-2 control-label">基础产品<br><small class="text-navy">请按需勾选</small></label>
									<div class="col-sm-10" style="margin-top: 10px;">
										<div class="col-sm-4">
											<n3-checkbox label="one">
												<span>Spring MVC</span>
												<span class="text-navy style">（推荐）</span>
												<p style="padding: 6px 17px;">Spring Web框架</p>
											</n3-checkbox>
										</div>
										<div class="col-sm-4">
											<n3-checkbox label="two" disabled>
												<span>webX3</span>
												<p style="padding: 6px 17px;">集团通用Web框架</p>
											</n3-checkbox>
										</div>
									</div>
								</div>
								<div class="hr-line-dashed"></div>
								<div class="form-group" style="text-align:center;">
									<div class="col-sm-12">
										<button class="btn btn-white" type="submit">重置</button>
										<button class="btn btn-primary" type="submit">生成工程</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<!--<script>-->
	<!--export default {-->
		<!--data() {-->
			<!--return {-->
				<!--form: {-->
					<!--name: '',-->
					<!--region: '',-->
					<!--date1: '',-->
					<!--date2: '',-->
					<!--delivery: false,-->
					<!--type: [],-->
					<!--resource: '',-->
					<!--desc: ''-->
				<!--}-->
			<!--}-->
		<!--},-->
		<!--methods: {-->
			<!--onSubmit() {-->
				<!--console.log('submit!');-->
			<!--}-->
		<!--}-->
	<!--}-->

<!--</script>-->


<script>
	export default {
		name: 'survey',

		data() {
			return {
				select2Style: {// select2-style样式
					width: '100%'
				},
				form: {
					name: '',
					region: '',
					date1: '',
					date2: '',
					delivery: false,
					type: [],
					resource: '',
					desc: ''
				},
				options: {
					proposal: [
						{ id: '1.8', text: '1.8' },
						{ id: '1.5', text: '1.5' }
					]
				},
				radioValue: 'middle',
				radioValues: 'a',
				checkboxValue: ['one']
			}
		},
		methods: {
		},
		mounted() {
//        var that = this;
		}
	}
</script>
<style scoped>
	.el-radio{
		color:#666;
		font-size:12px;
		margin-top:7px;
	}
	.style{
		margin-left: 20px;
		top: 7px;
		position: relative;
	}
	.col-sm-4{
		padding-left: 0px;
	}

</style>
