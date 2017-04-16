# [angular quick start](https://github.com/angular/quickstart)

## Introduce

angular2 現在已經完全整併成angular所以沒有angular 1了

angular 的基本語法是 [typescript](https://goo.gl/ASPxWm)

typescript 是微軟2014 發表的技術，可以看一下官網的[宣傳影片](http://video.ch9.ms/ch9/4ae3/062c336d-9cf0-498f-ae9a-582b87954ae3/B881_mid.mp4)。

微軟也提供了[PlayGround](https://www.typescriptlang.org/play/)，可以快速練習語法。

把 javascirpt的語法做了目前物件導向完整的強化，當然也支援各種技術。

另外angular也提供了[github專案](https://github.com/angular/quickstart)，可以快速載下來啟動。

## Editor

* [VSCODE](https://code.visualstudio.com/)也是微軟提供出來很強大的編輯器

## Architech

![](readmeSrc/overview2.png)

## Module

### src/app/app.module.ts

```typescript
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
@NgModule({
  imports:      [ BrowserModule ],
  providers:    [ Logger ],
  declarations: [ AppComponent ],
  exports:      [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
```

### src/main.ts
```typescript
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
```

## Component

### example 

#### src/app/app.component.ts
```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1>`
})
export class AppComponent { name = 'Angular'; }

```

#### index.html (inside <body>)
```html
<my-app>Loading AppComponent content here ...</my-app>

```

### first module

@NgModule decorator 需要先定義好，並且把相關使用到的元件一併載入。

* imports - modules (ex: NgIf, NgFor...)
* declarations - components (the root component, the top of the app's component tree)
* bootstrap - host web page

### src/main.ts (dynamic)
```typescript

// The browser platform with a compiler
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// The app module
import { AppModule } from './app/app.module';

// Compile and launch the module
platformBrowserDynamic().bootstrapModule(AppModule);
```

## Declare directives and components

### src/app/highlight.directive.ts

```typescript
import { Directive, ElementRef } from '@angular/core';

@Directive({ selector: '[highlight]' })
/** Highlight the attached element in gold */
export class HighlightDirective {
  constructor(el: ElementRef) {
    el.nativeElement.style.backgroundColor = 'gold';
    console.log(
      `* AppRoot highlight called for ${el.nativeElement.tagName}`);
  }
}
```


```typescript
template: '<h1 highlight>{{title}}</h1>'
```
這邊的程式碼是指定在directive使用的使用位置


```typescript
declarations: [
  AppComponent,
  HighlightDirective,
],
```
Directive也需要一起宣告

## Service providers

### src/app/user.service.ts
```typescript
import { Injectable } from '@angular/core';

@Injectable()
/** Dummy version of an authenticated user service */
export class UserService {
  userName = 'Sherlock Holmes';
}
```

### src/app/title.component.ts
```typescript
import { Component, Input } from '@angular/core';
import { UserService } from './user.service';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
})
export class TitleComponent {
  @Input() subtitle = '';
  title = 'Angular Modules';
  user = '';

  constructor(userService: UserService) {
    this.user = userService.userName;
  }
}
```

