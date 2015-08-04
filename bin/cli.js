#!/usr/bin/env node
/* 
* @Author: mustafa
* @Date:   2015-08-04 04:46:31
* @Last Modified by:   mustafa
* @Last Modified time: 2015-08-04 05:33:09
*/

'use strict';
var ks = require("../index.js");

var _k = new ks();
_k.setup(_k);
_k.listen(2000);