import axios from "axios";
import iView from 'iview';
import testData from "./test.js"
export default {
	test:true,
	request:function(method,url,option,success,error){
		if(this.test){
			return
		}
	     method = (method||'get').toLowerCase();
	     option = option||{};
		if(!success){
			success = function(data){
				iView.Modal.success({
                            title:"网络请求",
                            content:"请求成功"
                 });
			}
		}
		if(!error){
			error = function(err){
				iView.Modal.error({
                            title:"网络请求",
                            content:"请求失败\t"+err.toString()
                 });
			}
		}		
		var ajax = axios.create({
			  timeout: 2000,
			  headers: {'X-Custom-Header': 'foobar'}
		});
			ajax[method](url,option).then(function(result){
				success(result);
			}).catch(function(err){
				error(err);
			});
	},
	getOnline:function(url,option,success,error){
		if(this.test){
			success(testData.online);
		}
		this.request("POST",url,option,success,error)
	},
	getAlarm:function(url,option,success,error){
		
		if(this.test){
			success(testData.alarm);
		}
		this.request("POST",url,option,success,error)
	},
}
