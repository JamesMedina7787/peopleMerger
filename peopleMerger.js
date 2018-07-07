var fs = require("fs");
const express = require('express')
const bodyParser = require('body-parser')
var datta = ""
    //otherwise, print a success message
fs.readFile("list1.txt", 'utf-8', function(err,data){
  datta += JSON.stringify(data)
})
fs.readFile("list2.txt", 'utf-8', function(err, data){
   datta += JSON.stringify(data);
fs.writeFile('./newList.txt', datta, function(err){
    if (err) {
        //log that an error happened
        console.log(`there was a problem writing: ${err}`);
        //throw the error for handling by the caller
        throw err;
  }
})

});
// fs.readFile("list2.txt", 'utf-8', function(err, data0){
// var data2 = JSON.parse(data0);
// });
// var myContent = data1 + data2;
// fs.writeFile('./newList.txt', myContent, function(err){
//     if (err) {
//         //log that an error happened
//         console.log(`there was a problem writing: ${err}`);
//         //throw the error for handling by the caller
//         throw err;
//   }
// })
