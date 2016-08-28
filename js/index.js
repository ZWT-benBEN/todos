

$(function(){
    $.setL = function(key,data){
        localStorage[key] = JSON.stringify(data);
    }
    $.getL= function(key){
        return JSON.parse(localStorage[key])
    }

 
 /* data = [
        {id:1,name:maiche,isdel:0}
    ]*/


    var database=[];

    var render = function(){
        if(!localStorage['data']){
            return;
        }
        database= $.getL('data');
        $('.todo').empty();
        for(var i= 0; i<database.length;i++){
            var v = database[i];
            var sanyuan = v.isdel? 'wancheng':'';
            $( '<li class="todos '+( v.isdel? 'wancheng':'')+'" data-id="'+ v.id+'"> <div class="check"></div> <p> '+v.name+'</p> <div class="del"></div> <input type="text" value="'+v.name+'"> </li>').prependTo($('.todo'));
        }
    }
    render()

    $('.header input').focus();
    $('.header input').on('keyup',function(e){
        var x= $(this).val().trim();
        if(x === ''){
            return;
        }
        if(e.keyCode===13){
           /*$( '<li class="todos"> <div class="check"></div> <p> '+x+'</p> <div class="del"></div> <input type="text" value="'+x+'"> </li>').prependTo($('.todo'));*/
          
            $(this).val('').focus();
            var id;
            if(database.length===0){
                 id= 1;
            }else{
                id= database[database.length-1].id+1;
            }
            database.push(
                {id:id,name: x,isdel:0}
            )
            $.setL('data',database);
            render();

        }
    })


    var lis= $('.todo  li');
    var uls= $('.todo')
    uls.on('click','.check',function(){
        var li = $(this).closest('li')
        li.toggleClass('wancheng');
        var id = Number(li.attr('data-id'));
        if(li.hasClass('wancheng')){
            var x= 1;
        }else{
            var x = 0;
        }
        for (var i=0;i<database.length;i++){
            if(database[i].id === id){
                database[i].isdel = x;
            }
        }
        $.setL('data',database)
    });
    uls.on('click','.del',function(){
        $(this).parent().remove();
        var li = $(this).closest('li');
        var id = Number(li.attr('data-id'));
        li.remove();
        var newbase=[];
        for(var i = 0;i<database.length;i++){
            if(database[i].id !== id){
                newbase.push(database[i])
            }
        }
        database = newbase;
        $.setL('data',database);
    });
    uls.on('click','p',function(){
        var v= $(this).text();
        var li = $(this).closest('li');
        li.addClass('shuru')
        li.find('input').focus().val(v);
    })
    uls.on('blur','input',function(){
        var tet=$(this).val();
        var li = $(this).closest('li');
        var id = Number(li.attr('data-id'))
         li.find('p').text(tet)
        li.removeClass('shuru');
        for(var i = 0; i<database.length;i++){
            if(database[i].id === id){
                database[i].name=tet
            }
        }
        $.setL('data',database)
    })


})


/*localStorage.data = 'benben';
console.log(localStorage.data)

var arr=['benben','diudiu','ningning','jingjing']

localStorage.name=JSON.stringify(arr);
var t = JSON.parse(localStorage.name);
console.log(t)*/





/*事件委托
$(function(){
    $('h1').on('click',function(){
        $(' <div class="xiao"></div>').appendTo('.box')
    })

    $('.box').on('click',function(e){
        var el = e.target;
        console.log(el);
        if(el==this){
            return;
        }
        $(el).css('background','pink')

    })
}*/

