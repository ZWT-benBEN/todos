var todos = angular.module('todo',['ngAnimate']);
todos.controller('main',['$scope','$timeout',function($scope,$timeout){
/*	$scope.h='WELCOM Z';
	$scope.huan=function(){
		$scope.h='WELCOM BEN'
	};
	$scope.music=[
	{song:'a',singer:'b'},
	{song:'b',singer:'b'},
	{song:'c',singer:'b'},
	{song:'d',singer:'b'},
	{song:'e',singer:'b'},
	{song:'f',singer:'b'},
	{song:'g',singer:'b'},
	];
	$scope.del = function(num){
		$scope.music.splice(num,1)
	}*/
	/*setInterval(function(){
		
		$timeout(function(){
			var date = new Date();
			var h = date.getHours();
			var m = date.getMinutes();
			var s = date.getSeconds();
			s=(s<10)?('0'+s):s;
			$scope.title = h+':'+m+':'+s;
		},0)
	},500)*/
	$scope.title="TODOS"
	$scope.name="";
	$scope.todox=[];
	if(localStorage.cun){
			$scope.todox=JSON.parse(localStorage.cun)
		}else{
			$scope.todox=[];
		}
	
	/*$scope.count=$scope.todox.length;
	$scope.change = function(bian){
		var num=0;
		if(bian=='quanbu'){
			$scope.count=$scope.todox.length
		}else if(bian=='yiwancheng'){
			var newcun=[];
			for(var i= 0;i<$scope.todox.length;i++){
				if($scope.todox[i].isdone){
					newcun.push($scope.todox[i])
					$scope.count=newcun.length
				}
			}		
		}else if(bian='weiwancheng'){
			nc=[];
			for(var i= 0;i<$scope.todox.length;i++){
				if(!$scope.todox[i].isdone){
					nc.push($scope.todox[i])
					$scope.count=nc.length
				}
			}
		}
	}
	*/
	$scope.clear = function(){
		var zarr=[];
		for(var i = 0;i<$scope.todox.length;i++){
			if(!$scope.todox[i].isdone){
				zarr.push($scope.todox[i]);
			}
		}
		$scope.todox=zarr;
		$scope.count=$scope.todox.length
	}
	
	$scope.save=function(){
		localStorage.cun=JSON.stringify($scope.todox)
	
	}
	$scope.add=function(e){
		var ida;
		var max = -Infinity;
		if($scope.todox.length){	
			for(var i = 0;i<$scope.todox.length;i++){
				if($scope.todox[i].id>max){
					max=$scope.todox[i].id
				}
			}
			ida= max +1;
		}else{
			ida=1;
		}
		if(e.keyCode===13){
			
			$scope.todox.unshift(
				{id:ida,name:$scope.name,isdone:false}
				);
			$scope.save();
			$scope.name="";
			$scope.count=$scope.todox.length
		}
		
	}
	console.table($scope.todox)

	$scope.delete = function(id){
		var index;
		for(var i = 0;i<$scope.todox.length;i++){
			if($scope.todox[i].id==id){
				index=i;
			}	
		}
			$scope.todox.splice(index,1);
			$scope.save();
			$scope.count=$scope.todox.length;
		
	}
	
	$scope.focus=function(e){
		$timeout(function(){
			$(e.currentTarget)
		.find('input')
		.focus()
		},0)
	
	}



}]
)
