import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { YesNoPipe } from './pipes/yes-no.pipe';

@NgModule({
  declarations: [AppComponent, TodosComponent, AboutComponent, YesNoPipe],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
