import * as i0 from '@angular/core';
import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const globalRippleConfig = {
    disabled: true,
    animation: {
        enterDuration: 300,
        exitDuration: 0
    }
};

class TestComponent {
    constructor() { }
    ngOnInit() {
    }
}
TestComponent.ɵfac = function TestComponent_Factory(t) { return new (t || TestComponent)(); };
TestComponent.ɵcmp = i0.ɵɵdefineComponent({ type: TestComponent, selectors: [["plar-test"]], decls: 2, vars: 0, template: function TestComponent_Template(rf, ctx) { if (rf & 1) {
        i0.ɵɵelementStart(0, "p");
        i0.ɵɵtext(1, "test works!");
        i0.ɵɵelementEnd();
    } }, styles: [""] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TestComponent, [{
        type: Component,
        args: [{
                selector: 'plar-test',
                templateUrl: './test.component.html',
                styleUrls: ['./test.component.css']
            }]
    }], function () { return []; }, null); })();

class ToggleModule {
}
ToggleModule.ɵfac = function ToggleModule_Factory(t) { return new (t || ToggleModule)(); };
ToggleModule.ɵmod = i0.ɵɵdefineNgModule({ type: ToggleModule });
ToggleModule.ɵinj = i0.ɵɵdefineInjector({ imports: [[
            CommonModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && i0.ɵɵsetNgModuleScope(ToggleModule, { declarations: [TestComponent], imports: [CommonModule], exports: [TestComponent] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ToggleModule, [{
        type: NgModule,
        args: [{
                declarations: [TestComponent],
                imports: [
                    CommonModule
                ],
                exports: [TestComponent]
            }]
    }], null, null); })();

/*
 * Public API Surface of plario
 */

/**
 * Generated bundle index. Do not edit.
 */

export { TestComponent, ToggleModule, globalRippleConfig };
//# sourceMappingURL=plario.js.map
