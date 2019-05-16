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

var legend= {
        data: ['DNS查询耗时 ','TCP链接耗时','request请求耗时','解析dom树耗时','白屏时间','domready时间','onload时间']
    };
