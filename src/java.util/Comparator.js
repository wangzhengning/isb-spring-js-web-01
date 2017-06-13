var ComparatorManage = {
    options:{},
    init:function (){

    }，
    bindEvent:function(){

    },
    compare:function(Object o1 , Object o2){
        if(o1 > o2){
          return 1;
        }
        else if (o1 < 02) {
          return -1;
        }
        else if (o1 == o2) {
          return 0;
        }else {
          //抛出一个异常
          throw new Error("illegal o1 , o2");
        }
    },
    equals:function(Object o1){

    }
}
