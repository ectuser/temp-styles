(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('plario', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.plario = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, common) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);

    var globalRippleConfig = {
        disabled: true,
        animation: {
            enterDuration: 300,
            exitDuration: 0
        }
    };

    var TestComponent = /** @class */ (function () {
        function TestComponent() {
        }
        TestComponent.prototype.ngOnInit = function () {
        };
        return TestComponent;
    }());
    TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
    TestComponent.ɵcmp = i0__namespace.ɵɵdefineComponent({ type: TestComponent, selectors: [["plar-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) {
            if (rf & 1) {
                i0__namespace.ɵɵelementStart(0, "p");
                i0__namespace.ɵɵtext(1, "test works!");
                i0__namespace.ɵɵelementEnd();
            }
        }, styles: [""] });
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(TestComponent, [{
                type: i0.Component,
                args: [{
                        selector: 'plar-test',
                        templateUrl: './test.component.html',
                        styleUrls: ['./test.component.css']
                    }]
            }], function () { return []; }, null);
    })();

    var ToggleModule = /** @class */ (function () {
        function ToggleModule() {
        }
        return ToggleModule;
    }());
    ToggleModule.ɵfac = function ToggleModule_Factory(t) { return new (t || ToggleModule)(); };
    ToggleModule.ɵmod = i0__namespace.ɵɵdefineNgModule({ type: ToggleModule });
    ToggleModule.ɵinj = i0__namespace.ɵɵdefineInjector({ imports: [[
                common.CommonModule
            ]] });
    (function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0__namespace.ɵɵsetNgModuleScope(ToggleModule, { declarations: [TestComponent], imports: [common.CommonModule], exports: [TestComponent] }); })();
    (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && i0__namespace.ɵsetClassMetadata(ToggleModule, [{
                type: i0.NgModule,
                args: [{
                        declarations: [TestComponent],
                        imports: [
                            common.CommonModule
                        ],
                        exports: [TestComponent]
                    }]
            }], null, null);
    })();

    /*
     * Public API Surface of plario
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.TestComponent = TestComponent;
    exports.ToggleModule = ToggleModule;
    exports.globalRippleConfig = globalRippleConfig;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=plario.umd.js.map
