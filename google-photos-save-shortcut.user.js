// ==UserScript==
// @name         Google Photos Save Shortcut
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Press 's' to save photo from shared album
// @author       You
// @match        https://photos.google.com/share/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 's' && !e.ctrlKey && !e.metaKey && !e.altKey) {
            if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
            const saveButton = document.querySelector('button[jsname="LgbsSe"] span[jsname="V67aGc"]');
            if (saveButton && saveButton.textContent === 'Save') {
                e.preventDefault();
                saveButton.closest('button').click();
            }
        }
    });
})();
