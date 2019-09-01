"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mapCss = function (data, debug) {
    var map = {};
    var sets = data.split('}');
    for (var _i = 0, sets_1 = sets; _i < sets_1.length; _i++) {
        var set = sets_1[_i];
        var pair = set.split(/:before\s*{/);
        var keyGroups = pair[0];
        var keys = keyGroups.split(',');
        if (pair[1]) {
            var value = exports.cleanValue(pair[1]);
            if (!value) {
                continue;
            }
            for (var _a = 0, keys_1 = keys; _a < keys_1.length; _a++) {
                var key = keys_1[_a];
                key = key.trim().slice(1).split(':before')[0];
                map[key] = String.fromCharCode(parseInt(value.substring(2), 16));
                if (debug) {
                    console.log(key + ": " + value);
                }
            }
        }
    }
    return map;
};
exports.cleanValue = function (val) {
    var matches = val.match(/content:\s*"\\f([^"]+)"/i);
    if (matches) {
        return "\\uf" + matches[1];
    }
    return void 0;
};
//# sourceMappingURL=lib.js.map