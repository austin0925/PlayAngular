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
var HeroDetailComponent8 = (function () {
    function HeroDetailComponent8(fb) {
        this.fb = fb;
        this.states = data_model_1.states;
        this.createForm();
        this.logNameChange();
    }
    HeroDetailComponent8.prototype.createForm = function () {
        this.heroForm = this.fb.group({
            name: ['', forms_1.Validators.required],
            secretLairs: this.fb.array([]),
            power: '',
            sidekick: ''
        });
    };
    HeroDetailComponent8.prototype.logNameChange = function () { };
    HeroDetailComponent8.prototype.ngOnChanges = function () {
        this.heroForm.reset({
            name: this.hero.name
        });
        this.setAddresses(this.hero.addresses);
    };
    Object.defineProperty(HeroDetailComponent8.prototype, "secretLairs", {
        get: function () {
            return this.heroForm.get('secretLairs');
        },
        enumerable: true,
        configurable: true
    });
    ;
    HeroDetailComponent8.prototype.setAddresses = function (addresses) {
        var _this = this;
        var addressFGs = addresses.map(function (address) { return _this.fb.group(address); });
        var addressFormArray = this.fb.array(addressFGs);
        this.heroForm.setControl('secretLairs', addressFormArray);
    };
    HeroDetailComponent8.prototype.addLair = function () {
        this.secretLairs.push(this.fb.group(new data_model_1.Address()));
    };
    return HeroDetailComponent8;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", data_model_1.Hero)
], HeroDetailComponent8.prototype, "hero", void 0);
HeroDetailComponent8 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'hero-detail-8',
        templateUrl: './hero-detail-8.component.html'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof forms_1.FormBuilder !== "undefined" && forms_1.FormBuilder) === "function" && _a || Object])
], HeroDetailComponent8);
exports.HeroDetailComponent8 = HeroDetailComponent8;
var _a;
//# sourceMappingURL=hero-detail-8.component.js.map