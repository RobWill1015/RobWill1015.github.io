// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
const _ = require('lodown-robwillopspark');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./<YOUR_GITHUB_FOLDER/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
    return _.filter(array, function(customers) {
        return customers.gender === 'male';
    }).length;
};

var femaleCount = function(array){
    return _.reduce(array, function(previousResult, customers, index, array) {
     if(customers.gender === 'female'){
       previousResult++;     
     } return previousResult;
    }, 0);  
};

var oldestCustomer = function(array){
   var ages = array.sort(function (a, b){
        return b.age - a.age;
    }); return ages[0].name; 
};  

var youngestCustomer = function (array){
    var ages = array.sort(function(a, b){
        return a.age - b.age;
    }); return ages[0].name;
};

var averageBalance = function(array){
   var averageB =  _.reduce(array, function(previousValue, customer, i, array){
           var remove = customer.balance.slice(1);  //sliced off dollar signs
           //console.log(remove);
           //eliminate special characaters in customers balances
           remove = remove.split(",").join("");// split and join to remove commas
           remove = Number.parseFloat(remove);
           previousValue += remove;
           //console.log(remove);
           return previousValue;
    }, 0);
    return averageB  / array.length; // to get the average 
};

var firstLetterCount = function (array, letter) {
    return _.reduce(array, function(count, array) {
        if(array.name.charAt(0).toLowerCase() === letter.toLowerCase()) {
            count += 1;
            return count;
        }
        return count;
    }, 0);
};


var friendFirstLetterCount = function (array, name, letter) {
    return _.reduce(array, function(count, array) {
        if(array.name === name) {
            for (var i = 0; i < array.friends.length; i ++){
                if(array.friends[i].name.charAt(0).toLowerCase() === letter.toLowerCase()) count += 1;
            }
            return count;
            }
            return count;
            }, 0);
};        


var friendsCount = function (array, name){;
// **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
    var friendCollection = [];
    for(var i = 0; i < array.length; i++){
        for(var j = 0; j < array[i].friends.length; j++){
            if(array[i].friends[j].name === name) {
                friendCollection.push(array[i].name);
            }
        }
    }
    return friendCollection;
};


var topThreeTags = function (array){
//   **Objective**: Find the three most common tags among all customers' associated tags
//   **Input**: `Array`
//   **Output**: `Array`
let tags = _.reduce(array, function(list, array) {
    for(var i = 0; i < array.tags.length; i++) {
        if(array.tags[i] in list) { ++list[array.tags[i]] }
        else {list[array.tags[i]] = 1 }
}   return list;
}, {})
let arr = [];
let int = 0;
    for(var key in tags) {
        if(tags[key] >= int) {
            arr.unshift(key);
            int = tags[key]
        }
    }
        return _.first(arr, 3)
};


var genderCount = function(array){
    let gender = {
        'male': 0,
        'female': 0,
        'non-binary': 0
    };
    return _.reduce(array, function(list, customer){
        list[customer.gender]++;
        return list;
        }, gender);
};


//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
