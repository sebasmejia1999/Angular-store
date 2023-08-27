import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipesComponent } from './pipes/pipes.component';
import { EstadosPipe } from './pipes/estados.pipe';
import { CompraModule } from './compra/compra.module';
import { FormulariosComponent } from './formularios/formularios.component';

@NgModule({
  declarations: [
    AppComponent,
    PipesComponent,
    EstadosPipe,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    CompraModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
