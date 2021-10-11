import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactosComponent } from './crud/contactos/contactos.component';
import { DireccionsComponent } from './crud/direccions/direccions.component';
import { PedidosComponent } from './crud/pedidos/pedidos.component';
import { ProductosComponent } from './crud/productos/productos.component';
import { ContactoComponent } from './crud/contacto/contacto.component';
import { DireccionComponent } from './crud/direccion/direccion.component';
import { PedidoComponent } from './crud/pedido/pedido.component';
import { ProductoComponent } from './crud/producto/producto.component';

const routes: Routes = [
  {  path: '', redirectTo: 'home', pathMatch: 'full' },
  {  path: 'home', loadChildren: './home/home.module#HomePageModule' },

  {  path: 'contactos', component: ContactosComponent },
  {  path: 'direccions', component: DireccionsComponent },
  {  path: 'pedidos', component: PedidosComponent },
  {  path: 'productos', component: ProductosComponent },

  {  path: 'contacto/:id', component: ContactoComponent },
  {  path: 'direccion/:id', component: DireccionComponent },
  {  path: 'pedido/:id', component: PedidoComponent },
  {  path: 'producto/:id', component: ProductoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
