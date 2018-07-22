(function(){

  function DOM(elements){
    if(!(this instanceof DOM)){
      return new DOM(elements);
    }
    this.elements = document.querySelectorAll(elements);
  }

  DOM.prototype.on = function on(typeAction, callback){
    Array.prototype.forEach.call(this.elements, function(element){
      element.addEventListener(typeAction, callback, false);
    });
  }

  DOM.prototype.get = function get(index){
    if(!index){
      return this.elements[0];
    }
      
    return this.elements[index];
  }

  DOM.prototype.forEach = function forEach(){
    return Array.prototype.forEach.apply(this.elements, arguments);
  }

  DOM.prototype.map = function map() {
     return Array.prototype.map.apply(this.elements, arguments);
  }

  DOM.prototype.filter = function filter() {
      return Array.prototype.filter.apply(this.elements, arguments);
  }

  DOM.prototype.reduce = function reduce() {
     return Array.prototype.reduce.apply(this.elements, arguments);
  }

  DOM.prototype.reduceRight = function reduceRight() {
    return Array.prototype.reduceRight.apply(this.elements, arguments);
  }

  DOM.prototype.some = function some() {
    return Array.prototype.some.apply(this.elements, arguments);
  }

  DOM.prototype.every = function every() {
    return Array.prototype.every.apply(this.elements, arguments);
  }

  DOM.isArray = function isArray(param){
    return Object.prototype.toString.call(param) === '[object Array]';
  }

   DOM.isFunction = function isFunction(param) {
     return Object.prototype.toString.call(param) === '[object Object]';
   }

    DOM.isObject = function isObject(param) {
      return Object.prototype.toString.call(param) === '[object Function]';
    }

      DOM.isNumber = function isNumber(param) {
        return Object.prototype.toString.call(param) ===
          '[object Number]';
      }

       DOM.isString = function isString(param) {
         return Object.prototype.toString.call(param) ===
           '[object String]';
       }

        DOM.isBoolean = function isBoolean(param) {
          return Object.prototype.toString.call(param) ===
            '[object Boolean]';
        }

         DOM.isNull = function isNull(param) {
           return Object.prototype.toString.call(param) ===
             '[object Null]' || Object.prototype.toString.call(param) ===
               '[object Undefined]';

         }

         window.DOM = DOM

})();

