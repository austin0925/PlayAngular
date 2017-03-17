"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* tslint:disable:component-class-suffix */
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var HeroDetailComponent3 = (function () {
    function HeroDetailComponent3(fb) {
        this.fb = fb;
        this.createForm();
    }
    HeroDetailComponent3.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: '',
        });
    };
    return HeroDetailComponent3;
}());
HeroDetailComponent3 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-detail-3',
        templateUrl: './hero-detail-3.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], HeroDetailComponent3);
exports.HeroDetailComponent3 = HeroDetailComponent3;
var _a;
//# sourceMappingURL=hero-detail-3a.component.js.map