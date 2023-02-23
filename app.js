//forEach

function dobleValues(arr){
    let newArray = [];
    arr.forEach(function(value){
        newArray.push(value * 2)

    })
    return newArray
}

function onlyEvenValues(arr){
    let newArray =[];
arr.forEach(function(value){
    if(value % 2 === 0){
        newArray.push(value)
    }
})
return newArray;
}

function showFirstAndLast(arr){
    let newArray = [];
    arr.forEach(function(value){
        newArray.push(value[0] + value[value.length -1])
    })
    return newArray;
}

function addKeyAndValue(arr,key, val){
    let newArray=[];
    arr.forEach(function(value){
        (value[key] = val);
    })
    return arr;
}



function vowelCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    const result = {};
  
    str = str.toLowerCase();
  
    vowels.forEach(function(vowel) {
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === vowel) {
          count++;
        }
      }
      result[vowel] = count;
    });
  
    return result;
  }
  //i dont understad this one ^

  //MAPS

  function doubleValuesWithMap(arr){
    return arr.map(function(value){
        return value * 2;
    })
  }

  
  function valTimesIndex(arr){
    return arr.map(function(value, i){
        return value * i;
    })
  }
  

  function extractKey(arr, key){
return arr.map(function(value){
    return value[key];
})  }

function extractFullName(arr){
    return arr.map(function(value){
        return value.first+ ' ' + value.last;
    })
}

//filter

function filterByValue(arr, key){
    return arr.filter(function(value){
        return value[key] !== undefined
    })
}

function find(arr,key){
    return arr.filter(function(value){
        return value === key
    })
    [0];
    
}

function findInObj(arr, key, searchValue) {
    return arr.filter(function(val) {
      return val[key] === searchValue;
    })[0];
  }


  function doubleOddNumbers(arr){
    return arr.filter(function(value){
        return value % 2 === 0;
    }).map(function(doble){
        return doble * 2;
    })
    
  }