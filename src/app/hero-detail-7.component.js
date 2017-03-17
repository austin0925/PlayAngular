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
var data_model_1 = require("./data-model");
var HeroDetailComponent7 = (function () {
    function HeroDetailComponent7(fb) {
        this.fb = fb;
        this.states = data_model_1.states;
        this.createForm();
    }
    HeroDetailComponent7.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            address: this.fb.group(new data_model_1.Address()),
            power: '',
            sidekick: ''
        });
    };
    HeroDetailComponent7.prototype.ngOnChanges = function () {
        this.heroForm.reset({
            name: this.hero.name,
            address: this.hero.addresses[0] || new data_model_1.Address()
        });
    };
    /* First version of ngOnChanges
    ngOnChanges()
    */
    HeroDetailComponent7.prototype.ngOnChanges1 = function () {
        this.heroForm.reset();
        this.heroForm.setValue({
            name: this.hero.name,
            address: this.hero.addresses[0] || new data_model_1.Address()
        });
    };
    return HeroDetailComponent7;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", data_model_1.Hero)
], HeroDetailComponent7.prototype, "hero", void 0);
HeroDetailComponent7 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-detail-7',
        templateUrl: './hero-detail-5.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], HeroDetailComponent7);
exports.HeroDetailComponent7 = HeroDetailComponent7;
var _a;
//# sourceMappingURL=hero-detail-7.component.js.map