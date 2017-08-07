/**
*有序的Collection
**/
var ListManage = {
    options:{},
    init:function (){

    }，
    bindEvent:function(){

    }，
    /**
    * 向列表的尾部添加指定元素
    **/
    add:function(var addElement){
        var addSuccess = true;
        return addSuccess;
    }
    /**
    * 向列表的指定位置插入元素
    **/
    add:function(var index , var addElement){

    }，
    /**
    * 添加指定Collection中所有元素到此列表的结尾，顺序为Collection的迭代器返回这些元素的顺序。
    **/
    addAll:function(var collectionElements){
      var addSuccess = true;
      return addSuccess;
    },
    /**
    * 将指定Collection中所有元素都插入到列表的指定位置。
    **/
    addAll:function(var index , var collectionElements){
      var addSuccess = true;
      return addSuccess;
    },
    /**
    * 从列表中移除所有原色
    **/
    clear:function(){

    },
    contains:function(var element){
      var isContains = true;
      return isContains;
    },
    containsAll:function(var collectionElements){
      var isContains = true;
      return isContains;
    },
    equals:function(var element){
      var isEquals = true;
      return isEquals;
    },
    get:function(var index){
        var element = null;
        return element;
    },
    hashCode:function(){
      var hashCode = 0;
      return hashCode;
    },
    indexOf:function(var element){
      var index = 0;
      return index;
    },
    isEmpty:function(){
      var isEmpty = false;
      return isEmpty;
    }
    iterator:function(){
      var iterator = null;
      return iterator;
    },
    lastIndexOf:function(var element){
        var lastIndexOf = -1;
        return lastIndexOf;
    },
    listIterator:function(){
        var listIterator = null;
        return listIterator;
    },
    listIterator:function(var index){
        var listIterator = null;
        return listIterator;
    },
    remove:function(var index){
        var element = null;
        return element;
    },
    remove:function(var obj){
        var isRemoved = false;
        return isRemoved;
    },
    removeAll:function(var collectionElements){
        var isRemovedAll = false;
        return isRemovedAll;
    },
    /**
    * 仅在列表中保留指定Collection中所包含的元素。
    **/
    retainAll:function(){

    },
    /**
    * 用指定元素替换，指定位置的值。
    * 返回值为：以前在指定位置的元素。
    **/
    set:function(var index , var element){

    },
    size:function(){
        var size = 0;
        return size;
    },
    subList:function(var fromIndex , var toIndex){
        var subList = null;
        return subList;
    },
    toArray:function(){
        var objArray = null;
        return objArray;
    },
    toArray:function(var arrayObj){
        return arrayObj;
    }
}
