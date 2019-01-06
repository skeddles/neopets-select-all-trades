// ==UserScript==
// @name         Neopets Select All Trades
// @namespace    http://samkeddy.com
// @version      1.0
// @description  Adds a check all button to trades
// @author       Sam Keddy (skeddles)
// @match        http://www.neopets.com/island/tradingpost.phtml
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var table = document.querySelector('form[action="/island/process_tradingpost.phtml"] table tbody');

    var newRow = document.createElement('tr');
    newRow.innerHTML = '<td style="text-align: center"><input type="checkbox" id="check-all-trades"/><label for="check-all-trades">ALL</label></td><td></td>'
    table.appendChild(newRow);

    var checkbox = document.getElementById('check-all-trades');

    var itemBoxes = table.querySelectorAll('input[name="selected_items[]"]');

    checkbox.addEventListener('change',e => {

        if (e.target.checked) {
            itemBoxes.forEach(i => {
                i.checked = true;
            });
        } else {
            itemBoxes.forEach(i => {
                i.checked = false;
            });

        }
    });
})();