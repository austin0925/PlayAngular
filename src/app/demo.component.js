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
/* tslint:disable:member-ordering */
var core_1 = require("@angular/core");
var hero_service_1 = require("./hero.service");
var DemoComponent = (function () {
    function DemoComponent(heroService) {
        this.heroService = heroService;
        this.demos = [
            'Just a FormControl',
            'FormControl in a FormGroup',
            'Simple FormBuilder group',
            'Group with multiple controls',
            'Nested FormBuilder group',
            'PatchValue',
            'SetValue',
            'FormArray',
            'Final'
        ].map(function (n) { return n + ' Demo'; });
        this.final = this.demos.length;
        this.demo = this.final; // current demo
        this.isLoading = false;
    }
    DemoComponent.prototype.getHeroes = function () {
        var _this = this;
        this.isLoading = true;
        this.heroes = this.heroService.getHeroes()
            .finally(function () { return _this.isLoading = false; });
        this.selectedHero = undefined;
    };
    DemoComponent.prototype.select = function (hero) { this.selectedHero = hero; };
    DemoComponent.prototype.selectDemo = function (demo) {
        this.demo = demo + 1;
        this.getHeroes();
    };
    return DemoComponent;
}());
DemoComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'my-app',
        templateUrl: 'demo.component.html'
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], DemoComponent);
exports.DemoComponent = DemoComponent;
//# sourceMappingURL=demo.component.js.map