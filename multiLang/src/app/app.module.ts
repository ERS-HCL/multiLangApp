import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { AppComponent } from './app.component';

import { httpLoaderFactory } from './service/http-loader-factory.service';
import { SelectLangComponent } from './select-lang/select-lang.component';
import { ContainerComponent } from './container/container.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectLangComponent,
    ContainerComponent
  ],
  imports: [
    HttpModule,
    HttpClientModule,
    BrowserModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
     }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
