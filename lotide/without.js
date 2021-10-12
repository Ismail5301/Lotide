const without = function (source, itemsremoved){
  let newarr = source;

  for (i=0; i<itemsremoved.length; i++){    //looping through itemsremoved array
  
  let index = newarr.indexOf(itemsremoved[i]) 
  if (index !== -1)  {
    newarr.splice(index, 1)                //removing array items via index
    
  }
  
}
return newarr;
}

module.exports = without;

