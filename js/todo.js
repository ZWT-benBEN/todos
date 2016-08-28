var todo = angular.module('todo',[])
todo.controller('main',['$scope',function($scope){
	$scope.todox=[
	{id:1,name:'笨',isdone:false},
	{id:2,name:'笨1',isdone:true},
	{id:3,name:'笨2',isdone:false}
	]
	
	$scope.delete = function(id){
		var index;
		for(var i = 0;i<$scope.todox.length;i++){
			if($scope.todox[i].id==id){
				index=i;
			}	
		}
			$scope.todox.splice(index,1)
		
	}
	
	
}])
