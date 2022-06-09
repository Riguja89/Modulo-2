var traverseDomAndCollectElements = function(matchFunc, startEl ) {
  var  resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){resultSet.push(startEl)}
  if (startEl.children.length>0){
      for(var i=0;i<startEl.children.length;i++){
        resultSet=resultSet.concat(traverseDomAndCollectElements(matchFunc,startEl.children[i]));
      }

    console.log(startEl.children.length);
   }
  
return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  if (selector[0]==='#'){return('id')}
  else if(selector[0]==='.'){return('class')}
  else if (selector.includes('>') && selector.split('>').length===2){return ('childcomb')}
  else if (selector.includes(' ') && selector.split(' ').length===2){return ('descecomb')}
  else if(!selector.includes('.')){return('tag')}
  
  else return('tag.class')
};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);
  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = function (el) {
      return el.id && (selector.slice(1).toLowerCase()===el.id.toLowerCase());
    };
   
  } else if (selectorType === "class") {
    matchFunction = function (el) {
      return(((" "+el.className.toLowerCase()+" ").includes(" "+selector.slice(1).toLowerCase()+" "))&&(el.className!=""));
    };
  } else if (selectorType === "tag.class") {

    matchFunction = function (el) {
      return ( (" "+el.className.toLowerCase()+" ").includes(" "+selector.split('.')[1].toLowerCase()+" "))&&(
         (selector.includes((el.tagName+'.').toLowerCase())));
    };
    
  } else if (selectorType === "tag") {
    matchFunction = function (el) {
      return el.tagName && (el.tagName.toLowerCase() === selector.toLowerCase());
    };
  }
  else if (selectorType === "childcomb") {
    matchFunction = function (el) {
      [tag, child]=selector.split(' > ');
      console.log(tag, child);
      return el.tagName && (el.tagName.toLowerCase() === child.toLowerCase())&&(el.parentElement.tagName.toLowerCase()===tag.toLowerCase());
    };
  }
  else if (selectorType === "descecomb") {
    matchFunction = function (el) {
      [tag, child]=selector.split(' ');
      console.log(tag, child);

      var veriPadre = function (el2,tag){
        var respuesta=false;
        if((el2.parentElement.tagName.toLowerCase()===tag.toLowerCase()))
        {return true;}
        else if (el2.parentElement!=null){
          respuesta= veriPadre(el2.parentElement,tag);
        }
        return respuesta;
      };

      if(el.tagName && (el.tagName.toLowerCase() === child.toLowerCase())){
        return veriPadre(el,tag);
      }else return false;
    };
  }
  
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  console.log(elements);
  return elements;
};
