'use strict';

let id = 0;
function generatedId (pre = 'input') {
    id++;
    return pre + '_' + id;
}

exports.generatedId = generatedId;
