// ==UserScript==
// @name         Save & Close
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Click Save and Close on RNW
// @author       You
// @match        https://lexisnexisrisk.custhelp.com/AgentWeb/
// @icon         https://www.google.com/s2/favicons?domain=custhelp.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    window.onkeydown = function( event ) {
        if ( event.keyCode == 27 ) {
            document.getElementsByClassName("ws-toolbar-button Save& Close")[document.getElementsByClassName("ws-toolbar-button Save& Close").length-1].click()
        }
    };
})();
