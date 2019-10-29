//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*eslint-disable no-redeclare */
function objectValues(object) {
let arr = [];
for (var key in object) {
arr.push(object[key]);
} 
 return arr;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
let arr2 = [];
for (var key in object) {
    arr2.push(key);
} 
return arr2.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
let arr3 = [];
for (var key in object) {
    if (typeof object[key] === 'string') {
        arr3.push(object[key]);
    }
}
return arr3.join(' ');
}
//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    
   if(Array.isArray(collection)) {
       return 'array';
   } else if (typeof collection === 'object'){
       return 'object';
   }
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  
  return  string[0].toUpperCase() + string.slice(1);

}
console.log('hello');
//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    var splitStr = string.split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
        return splitStr.join(' ');
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!' 
function welcomeMessage(object) {
    var greet = 'Welcome ';
    
for (var key in object) {
    return greet += object[key][0].toUpperCase() + object[key].slice(1) + '!';
    
} 
} 
console.log(welcomeMessage({name: 'lara'}));
//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'
function profileInfo(object) {
let beginMessage;
let endMessage;
    for (var key in object) {
        beginMessage = object[key];
    for (var key in object) {
        endMessage = object[key];
    } return beginMessage[0].toUpperCase() + beginMessage.slice(1) + ' is a ' + endMessage[0].toUpperCase() + endMessage.slice(1);
    }
} 

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// maybeNoises() : Should take an object, if this object has a noises array return them as a string separated by a space, 
// if there are no noises return 'there are no noises' (3, 0, 3)

      
function maybeNoises(object) {
    let errorMess = 'there are no noises';
    for (var key in object) {
        var arr = object[key]
        if(arr.length > 0) {
            return arr.join(' ')
        }
    }
        return errorMess;
}
//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, 
// otherwise return false. (3, 0, 3)
function hasWord(string, word) {
let object = {string, word};
for(var key in object) {
    if(string.includes(word)){
        return true;
    }
    return false
    }
}


//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// addFriend() : Should take a name and an object and add the name to the object's friends array then return the object 
function addFriend (name, object) {
for(var key in object){
    object[key].push(name);
} return object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise (3, 0, 3)
function isFriend(name, object) {
if(object.hasOwnProperty('friends')) {
    for(let i = 0; i < object.friends.length; i++) {
        if(name === object.friends[i]) {
            return true
        }
    }
} return false
}
//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with 
function nonFriends(name, array) {
    var nameList = [];
    var result = [];
    var current = null;
        for(var i=0; i<array.length; i++){
            if(name === array[i].name){
                current = array[i];
            }else{
                nameList.push(array[i].name);
            }
        }
            if(current === null){
                return nameList;
            }
        for(var i=0; i<nameList.length; i++){
            if(current.friends.indexOf(nameList[i]) == -1){
                result.push(nameList[i]);
            }
        }
                return result;
}
    
 

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. 
// If <key> does not exist on <object> create it.

function updateObject(object, key, value) {
    object[key] = value;
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// removeProperties() : Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array> 

function removeProperties(obj, array) {
   if (array.length > 0) {
        for (var x in obj) {
            for (var y = 0; y < array.length; y++) {
                if (array[y] === x || array[y] == obj[x]) delete obj[x]
            }
        }
    }
    return obj;
}
//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// dedup() : Should take an array and return an array with all the duplicates removed (2, 0, 2)

function dedup(array) {
const uniques = new Set(array);
const backToArray = [...uniques];
return backToArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}