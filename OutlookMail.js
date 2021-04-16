// ==UserScript==
// @name         Mail
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://outlook.office.com/mail/*
// @icon         https://www.google.com/s2/favicons?domain=office.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    // Your code here...
    // Press Alt
    function clickDiv(level){
        var divs = document.getElementsByTagName("div")
        for (let i = 0; i < divs.length; i++){
            if (divs[i].title == level){
                divs[i].click()
            }
        }
    }

    document.onkeyup = function(e) {
        //alert(e.keyCode);
        if (e.altKey && e.keyCode == "192"){
            clickDiv("Emailage Support")
        }
        if (e.altKey && e.keyCode == "49"){
            clickDiv("Level 1 Issues")
        }
        if (e.altKey && e.keyCode == "50"){
            clickDiv("Level 2 Issues")
        }
        if (e.altKey && e.keyCode == "51"){
            clickDiv("Level 3 Issues")
        }
    };
})();
