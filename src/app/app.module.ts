import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import localEs from '@angular/common/locales/es';
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { OcultarPipe } from './pipes/ocultar.pipe';

registerLocaleData(localEs);

@NgModule({
  declarations: [AppComponent, CapitalizadoPipe, DomseguroPipe, OcultarPipe],
  imports: [BrowserModule, AppRoutingModule],
  providers: [ { provide: LOCALE_ID, useValue: 'es'} ],
  bootstrap: [AppComponent],
})
export class AppModule {}
