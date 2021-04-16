// ==UserScript==
// @name         Close ControlE Windows
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Close windows nicely
// @author       You
// @match        https://controle.emailage.com/company
// @icon         https://www.google.com/s2/favicons?domain=emailage.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onkeydown = function( event ) {
        var fb_len = document.getElementsByClassName("fancybox-close").length;
        var dw_len = document.getElementsByClassName("dialogWrap").length;
        var cssText = document.querySelector("#fef").style.cssText
        if ( event.keyCode == 27 ) {
            if (cssText != "display: none;"){
                document.getElementsByClassName("fancybox-close")[0].click();
            } else if (dw_len == 5){
                document.getElementsByClassName("fancybox-close")[3].click();
            } else if (fb_len == 3){
                document.getElementsByClassName("fancybox-close")[1].click();
            }
        }
    };
})();
