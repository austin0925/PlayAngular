"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:component-class-suffix */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var HeroDetailComponent1 = (function () {
    function HeroDetailComponent1() {
        this.name = new forms_1.FormControl();
    }
    return HeroDetailComponent1;
}());
HeroDetailComponent1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-detail-1',
        templateUrl: './hero-detail-1.component.html'
    })
], HeroDetailComponent1);
exports.HeroDetailComponent1 = HeroDetailComponent1;
//# sourceMappingURL=hero-detail-1.component.js.map