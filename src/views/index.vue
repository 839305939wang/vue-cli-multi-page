<template>
	<div class="main_container">
		<Row type="flex" :gutter="1" :style="{height:'220px'}">
			<Col span="6" :class="{chart:true}">
			<Card>
				<div class="chart" ref="online">

				</div>
			</Card>
			</Col>
			<Col span="6" :class="{chart:true}">
			<Card>
				<div class="chart" ref="badChat">

				</div>
			</Card>
			</Col>
			<Col span="12" :class="{chart:true}">
			<Card>
				<div class="chart" ref="alarmChart">

				</div>
			</Card>
			</Col>
		</Row>
		<Row type="flex" :gutter="1" :style="{height:'220px'}">
			<Col span="16" :class="{chart:true}">
			<Tabs value="name1">
				<Tab-pane label="基本信息" name="name1">标签一的内容</Tab-pane>
				<Tab-pane label="CPU" name="name2">标签二的内容</Tab-pane>
				<Tab-pane label="内存" name="name3">标签三的内容</Tab-pane>
			</Tabs>
			</Col>
			<Col span="8" :class="{list:true}">
			<Table :columns="columns1" :data="data1"></Table>
			</Col>
		</Row>
		<Row type="flex" :gutter="1" :style="{height:'160px'}">
			<Col span="16" :class="{chart:true}"></Col>
		</Row>
	</div>
</template>

<script>
	export default {
		data() {
				return {
					columns1: [{
						title: '设备',
						key: 'device'
					}, {
						title: '报警名称',
						key: 'name'
					}, {
						title: '告警级别',
						key: 'level'
					},
					 {
						title: '状态',
						key: 'status'
					}
					, {
						title: '操作',
						key: 'action',
						fixed: 'right',
						width: 120,
						render: (h, params) => {
							return h('div', [
								h('Button', {
									props: {
										type: 'text',
										size: 'small'
									}
								}, '查看'),
								h('Button', {
									props: {
										type: 'text',
										size: 'small'
									}
								}, '编辑')
							]);
						}
					}],
					data1: [{
						device: "172.12.1.12",
						name: '温度过高',
						level: 1,
						status:0
					}, {
						device: "172.12.1.12",
						name: '温度过高',
						level: 1,
						status:0
					}, {
						device: "172.12.1.12",
						name: '温度过高',
						level: 1,
						status:0
					}, {
						device: "172.12.1.12",
						name: '温度过高',
						level: 1,
						status:0
					}]
				}
			},
			mounted() {
				this.onlineChart();
				this.badChart();
				this.alarmChart();
			},
			methods: {
				autoSize() { //计算页面
					var innerHeight = window.innerHeight - 60;

				},
				onlineChart() {
					let self = this;
					this.$store.dispatch("GET_ONLINE", function() {
						let option = {
							title: {
								text: '设备在线统计',
								x: 'center',
								textStyle: {
									color: '#666',
									//字体风格,'normal','italic','oblique'
									fontStyle: 'normal',
									//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
									fontWeight: 'bold',
									//字体系列
									fontFamily: 'sans-serif',
									//字体大小　　　
									fontSize: 14
								}
							},
							tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							color: ["#19be6b", "#a5b3ac"],
							legend: {
								orient: 'horizontal',
								bottom: 'bottom',
								data: self.$store.state.online.legend
							},
							series: [{
								name: '访问来源',
								type: 'pie',
								radius: '55%',
								center: ['50%', '50%'],
								label: {
									normal: {
										show: true,
										position: 'top',
										formatter: '{c}台'
									},
								},
								data: self.$store.state.online.data,
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								},

							}]
						};
						var chart = self.$refs["online"];
						self.echart.init(chart).setOption(option);
					})
				},
				badChart() {
					let self = this;
					this.$store.dispatch("GET_ONLINE", function() {
						let option = {
							title: {
								text: '故障统计',
								x: 'center',
								textStyle: {
									color: '#666',
									//字体风格,'normal','italic','oblique'
									fontStyle: 'normal',
									//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
									fontWeight: 'bold',
									//字体系列
									fontFamily: 'sans-serif',
									//字体大小　　　
									fontSize: 14
								}
							},
							tooltip: {
								trigger: 'item',
								formatter: "{a} <br/>{b} : {c} ({d}%)"
							},
							color: ["#19be6b", "#a5b3ac"],
							legend: {
								orient: 'horizontal',
								bottom: 'bottom',
								data: self.$store.state.online.legend
							},
							series: [{
								name: '访问来源',
								type: 'pie',
								radius: '55%',
								center: ['50%', '50%'],
								label: {
									normal: {
										show: true,
										position: 'top',
										formatter: '{c}台'
									},
								},
								data: self.$store.state.online.data,
								itemStyle: {
									emphasis: {
										shadowBlur: 10,
										shadowOffsetX: 0,
										shadowColor: 'rgba(0, 0, 0, 0.5)'
									}
								},

							}]
						};
						var chart = self.$refs["badChat"];
						self.echart.init(chart).setOption(option);
					})
				},
				alarmChart() {
					let self = this;
					let option = {
						title: {
							text: '告警变化统计',
							x: 'center',
							textStyle: {
								color: '#666',
								//字体风格,'normal','italic','oblique'
								fontStyle: 'normal',
								//字体粗细 'normal','bold','bolder','lighter',100 | 200 | 300 | 400...
								fontWeight: 'bold',
								//字体系列
								fontFamily: 'sans-serif',
								//字体大小　　　
								fontSize: 14
							}
						},
						tooltip: {
							trigger: 'axis'
						},
						legend: {
							bottom: "bottom",
							data: ['一级告警']
						},
						grid: {
							top: "25px",
							left: '3%',
							right: '4%',
							bottom: '20px',
							containLabel: true
						},
						toolbox: {
							feature: {
								saveAsImage: {}
							}
						},
						xAxis: {
							type: 'category',
							data: self.$store.state.alarm.time
						},
						yAxis: {
							type: 'value'
						},
						series: [{
							name: '一级告警',
							type: 'line',
							step: 'start',
							data: self.$store.state.alarm.data
						}]
					};

					var chart = self.$refs["alarmChart"];
					self.$store.dispatch("GET_ALARM", function() {
						self.echart.init(chart).setOption(option);
					})
					setInterval(function() {
						self.$store.dispatch("GET_ALARM", function() {
							self.echart.init(chart).setOption(option);
						})
					}, 3000)

				}
			}
	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}
	
	.main_container {
		overflow-x: hidden;
	}
	
	.ivu-row-flex>.ivu-col>.ivu-card {
		height: 100%;
		position: relative;
	}
	
	.ivu-card-head {
		padding: 5px
	}
	
	.ivu-row-flex>.ivu-col>.ivu-card>.ivu-card-body {
		height: 100%;
		height: 100%;
	}
	
	.chart {
		height: 100%;
	}
</style>