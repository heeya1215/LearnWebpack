// #1 - Using NPM + package 모듈 로딩
// var $ = require('jquery');
// console.log("Using NPM");
// console.log("loaded jQuery version is " + $.fn.jquery);

// #2 - Using alias의 경로를 이용한 jquery.js 로딩
// import $ from 'AliasVendor/jquery-2.2.4.min.js';
// console.log("Using alias");
// console.log("loaded jQuery version is " + $.fn.jquery);

// #3 - Using Provide Plugin
console.log("Using Provide Plugin");
console.log("loaded jQuery version is " + $.fn.jquery);
