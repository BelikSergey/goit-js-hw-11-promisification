(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{L1EO:function(n,t,o){},QfWi:function(n,t,o){"use strict";o.r(t);o("L1EO"),o("JBxO"),o("FdtR");var i=function(n){var t,o,i=(t=200,o=500,Math.floor(Math.random()*(o-t+1)+t));return new Promise((function(t,o){setTimeout((function(){Math.random()>.3?t({id:n.id,time:i}):o(n.id)}),i)}))},a=function(n){var t=n.id,o=n.time;console.log("Transaction "+t+" processed in "+o+"ms")},c=function(n){console.warn("Error processing transaction "+n+". Please try again later.")};i({id:70,amount:150}).then(a).catch(c),i({id:71,amount:230}).then(a).catch(c),i({id:72,amount:75}).then(a).catch(c),i({id:73,amount:100}).then(a).catch(c)}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.0c33cc43204b4afa87da.js.map