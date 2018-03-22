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
		
		this.selectedTab=1;
		this.selectTab=function(id){
			this.selectedTab=id;
		};
		
		this.on_submit=function(){
			this.list.push(this.cafe);
			this.cafe={};
			alert("Votre café a bien été ajouté à la liste !");
		};
	
	}])
})();


