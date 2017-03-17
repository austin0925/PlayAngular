"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_module_1 = require("./app.module");
var demo_component_1 = require("./demo.component");
var hero_detail_1_component_1 = require("./hero-detail-1.component");
var hero_detail_2_component_1 = require("./hero-detail-2.component");
var hero_detail_3_component_1 = require("./hero-detail-3.component");
var hero_detail_4_component_1 = require("./hero-detail-4.component");
var hero_detail_5_component_1 = require("./hero-detail-5.component");
var hero_detail_6_component_1 = require("./hero-detail-6.component");
var hero_detail_7_component_1 = require("./hero-detail-7.component");
var hero_detail_8_component_1 = require("./hero-detail-8.component");
var DemoModule = (function () {
    function DemoModule() {
    }
    return DemoModule;
}());
DemoModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.ReactiveFormsModule,
            app_module_1.AppModule,
        ],
        declarations: [demo_component_1.DemoComponent,
            hero_detail_1_component_1.HeroDetailComponent1,
            hero_detail_2_component_1.HeroDetailComponent2,
            hero_detail_3_component_1.HeroDetailComponent3,
            hero_detail_4_component_1.HeroDetailComponent4,
            hero_detail_5_component_1.HeroDetailComponent5,
            hero_detail_6_component_1.HeroDetailComponent6,
            hero_detail_7_component_1.HeroDetailComponent7,
            hero_detail_8_component_1.HeroDetailComponent8],
        bootstrap: [demo_component_1.DemoComponent]
    })
], DemoModule);
exports.DemoModule = DemoModule;
//# sourceMappingURL=demo.module.js.map