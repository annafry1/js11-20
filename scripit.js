function firstLast6(arr){
    if(arr[0] === 6 || arr[arr.length - 1] === 6){
        return true;
    }
    return false;
}


function has23(arr){
    for (var i = 0; i < arr.length; i ++){
        if(arr[i] === 2 || arr[i] === 3){
            return true;
        }
    }
    return false;
}

function fix23(arr){
    for (var i = 0; i < arr.length; i ++){
        if(arr[i] === 2 && arr[i + 1] === 3){
            arr[i + 1] = 0;
        }
    }
    return arr;
}


function countYZ(str){
    var count = 0;
    for (var i = 0; i < str.length; i ++){
        if(str[i].toLowerCase() === "y" && str[i +1] === " "){
            count ++;
        }
        if(str[i].toLowerCase() === "z" && str[i +1] === " "){
            count ++;
        }
    }
    if(str[str.length - 1].toLowerCase() === "y" || str[str.length - 1].toLowerCase() === "z"){
        count ++;
    }
    return count;
}


function endOther(strA, strB){
    var x = strA.toLowerCase();
    var y = strB.toLowerCase();
    if (x.length > y.length){
        var n = x.lastIndexOf(y);
        if (n === x.length - y.length){
            return true;
        }
    }else{
        n = y.lastIndexOf(x);
        if (n === y.length - x.length){
            return true;
        }
    }
    return false;
}

function starOut(str){
    var k = "";
    for(var i = 0; i < str.length; i ++){
        if(str[i + 1] != "*" && str[i-1] != "*" && str[i] != "*"){
            k += str[i];
        }
    }
    return k;
}


function getSandwich(str){
    var x = str.indexOf("bread");
    var y = str.lastIndexOf("bread");
    if(x != y){
        return str.substring(x + 5, y);
    }
    return "";
}

function canBalance(arr){
    var sideA = 0;
    var sideB = 0;
    for (var i = 0; i < arr.length; i ++){
        sideA += arr[i];
    }
    for (var j = 0; j < arr.length; j ++){
        sideB += arr[j];
        sideA -= arr[j];
        if (sideA === sideB){
            return true;
        }
    }
    return false;
}

function countClumps(arr){
    var count = 0;
    for (var i = 0; i < arr.length; i ++){
        if(arr[i] === arr[i + 1] && arr[i - 1] != arr[i]){
            count ++;
        }
    }
    return count;
}

function evenlySpaced(a, b, c){
    if ((a - b) === (b - c)){
        return true;
    }else if ((a - c) === (b - a)){
        return true;
    }else if ((c - a) === (b - c)){
        return true;
    }
    return false;
}
