import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './heroes/hero/hero.component';
import { ListaComponent } from './heroes/lista/lista.component';
import { CounterModule } from './counter/counter.module';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    ListaComponent
  ],
  imports: [
    BrowserModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
