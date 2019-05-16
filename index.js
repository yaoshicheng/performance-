var stackChart ;

function getTimingData(){
	var timing = window.performance.timing;
	var dns = timing.domainLookupEnd  - timing.domainLookupStart;
	var tcp = timing.connectEnd   - timing.connectStart;
	var request = timing.responseEnd   - timing.responseStart;
	var domresolve = timing.domComplete   - timing.domInteractive;
	var whiteScreen = timing.domLoading   - timing.fetchStart;
	var domready = timing.domContentLoadedEventEnd - timing.fetchStart;
	var onload = timing.loadEventEnd - timing.fetchStart;
	console.log({
		dns,tcp,request,domresolve,whiteScreen,domready,onload
	})
	return [dns,tcp,request,domresolve,whiteScreen,domready,onload]
}
var data = getTimingData();
option = {
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data: ['DNS查询耗时 ','TCP链接耗时','request请求耗时','解析dom树耗时','白屏时间','domready时间','onload时间']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis:  {
        type: 'value'
    },
    yAxis: {
        type: 'category',
        data: ['DNS查询耗时 ','TCP链接耗时','request请求耗时','解析dom树耗时','白屏时间','domready时间','onload时间']
    },
    series: [
        {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'insideRight'
                }
            },
            data: data
        },
    ]
};
let container = document.getElementById('stackContainer');

if(stackChart){
	stackChart.dispose();
}
stackChart = echarts.init(container);
stackChart.setOption(option);