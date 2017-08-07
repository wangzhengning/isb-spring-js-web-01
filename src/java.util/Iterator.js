/**
*对Collection集合进行迭代。
*特点：允许在迭代期间，进行元素的删除操作。
**/
var IteratorManage = {
    options:{},
    init:function (){

    }，
    bindEvent:function(){

    }，
    /**
    * 如果仍有元素可以迭代，则返回true
    **/
    hasNext:function(){
        var obj = false;
        return obj;
    },
    /**
    * 返回迭代的下一个元素
    **/
    next:function(){
        var nextElement = null;
        return nextElement;
    },
    /**
    * 从迭代器指向的Collection中移除迭代器返回的最后一个元素
    **/
    remove:function(){
        
    }
}
