import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatSliderModule } from '@angular/material/slider';

import { ContactosComponent } from './crud/contactos/contactos.component';
import { ContactoComponent } from './crud/contacto/contacto.component';
import { DireccionesComponent } from './crud/direcciones/direcciones.component';
import { DireccionComponent } from './crud/direccion/direccion.component';
import { PedidosComponent } from './crud/pedidos/pedidos.component';
import { PedidoComponent } from './crud/pedido/pedido.component';
import { ProductosComponent } from './crud/productos/productos.component';
import { ProductoComponent } from './crud/producto/producto.component';
import { DireccionsComponent } from './crud/direccions/direccions.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactosComponent,
    ContactoComponent,
    DireccionesComponent,
    DireccionComponent,
    PedidosComponent,
    PedidoComponent,
    ProductosComponent,
    ProductoComponent,
    DireccionsComponent
  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
