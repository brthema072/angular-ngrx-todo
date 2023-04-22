import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './pages/todos/todos.component';
import { AboutComponent } from './pages/about/about.component';
import { YesNoPipe } from './pipes/yes-no.pipe';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { TodoEffectService } from './store/todo-effect.service';
import { appReducer } from './store/app.reducer';

@NgModule({
  declarations: [AppComponent, TodosComponent, AboutComponent, YesNoPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({ app: appReducer }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    EffectsModule.forRoot([TodoEffectService]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
