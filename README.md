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
