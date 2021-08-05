import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/Producto.model';
import { ProductoServiceService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-lista-componente',
  templateUrl: './lista-componente.component.html',
  styleUrls: ['./lista-componente.component.css'],
})
export class ListaComponenteComponent implements OnInit {
  productList: producto[] = [];

  constructor(private service: ProductoServiceService) {}

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos() {
    this.service.get().subscribe(data => {
        console.log(data);
        this.productList = data;
      },error => {
        console.log(error);
      }
    );
  }
}
