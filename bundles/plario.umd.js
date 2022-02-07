(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define('plario', ['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.plario = {}));
})(this, (function (exports) { 'use strict';

    var globalRippleConfig = {
        disabled: true,
        animation: {
            enterDuration: 300,
            exitDuration: 0
        }
    };

    var rippleConfig = /*#__PURE__*/Object.freeze({
        __proto__: null,
        globalRippleConfig: globalRippleConfig
    });

    /*
     * Public API Surface of plario
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.rippleConfig = rippleConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=plario.umd.js.map
