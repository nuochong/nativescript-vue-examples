'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.mapCss = function(data, debug) {
  var map = {};
  var sets = data.split('}');
  //sets是对应的css样式文件内容
  for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
    var set = sets_1[_i];
    /**
     * set这里获取到所有的类似样式
     * JS: .fa-bell-slash:before {
     * JS:   content: "\\f1f6";
     * JS: '
     */

    var pair = set.split(/:before\s*{/);
    var keyGroups = pair[0];
    var keys = keyGroups.split(',');

    if (pair[1]) {
      /**
       * JS: '4444444444' '
       * JS:   content: "\\eb61";
       * JS: '
       */
      //console.log('xxx',pair[1])
      var value = exports.cleanValue(pair[1]); //debug
      /**
       * value如下
       * JS: 'xxxxxxx' '\\uf021'
       * JS: 'xxxxxxx' '\\uf022'
       * JS: 'xxxxxxx' '\\uf023'
       */

      if (!value) {
        continue;
      }
      //console.log('key',key)
      for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
        var key = keys_1[_a];

        /**
         * key如下
         * JS: .fa-paw'
         * JS: 'xxxxxxx' '
         * JS: .fa-spoon'
         * JS: 'xxxxxxx' '
         * JS: .fa-cube'
         * JS: 'xxxxxxx' '
         * JS: .fa-cubes'
         */

        key = key
          .trim()
          .slice(1)
          .split(':before')[0];

        map[key] = String.fromCharCode(parseInt(value.substring(2), 16));
        if (debug) {
          console.log(key + ': ' + value);
        }
      }
    }
  }
  //console.log('map', map);
  return map;
};
//fix:regular bug
exports.cleanValue = function(val) {
  //var matches = val.match(/content:\s*"\\([^"]+)"/i);
  const matches = val.match(/content\s*:\s*"\\([^"]+)"/i);
  if (matches) {
    //return "\\uf" + matches[1];
    return `\\u${matches[1]}`;
  }
  return void 0;
};
//# sourceMappingURL=lib.js.map
