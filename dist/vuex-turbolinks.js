(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('lodash.clonedeep')) :
	typeof define === 'function' && define.amd ? define(['lodash.clonedeep'], factory) :
	(global['vuex-turbolinks'] = factory(global.cloneDeep));
}(this, (function (cloneDeep) { 'use strict';

cloneDeep = cloneDeep && cloneDeep.hasOwnProperty('default') ? cloneDeep['default'] : cloneDeep;

var plugin = function plugin(store) {
  var storeState = cloneDeep(store.state);

  document.addEventListener('turbolinks:visit', function () {
    store.replaceState(cloneDeep(storeState));
  });
};

return plugin;

})));
