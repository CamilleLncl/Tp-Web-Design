(function(){
	angular.module("store",[]);
})();

(function(){	
	angular.module("store")
	.controller("storeController",["$http",function($http){
		var _this=this;
		this.list=[];
		
		$http.get("./data/data.json")
			.success(function(data){
				console.log(data);
				_this.list=data;
			});
			
		this.order_by="";
	
		this.tri=function(ref_order){console.log('-tri-',ref_order);
			if(_this.order_by===ref_order)
				_this.order_by="-"+ref_order;
			else _this.order_by=ref_order;
			
		};
	
	}])
})();

(function(){
	angular.module("store");
	
	
	
	var _this=this;
})();
