import { Injectable } from '@angular/core';
import { PedidoModel } from '../models/pedido.modelo';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import 'firebase/firestore';
import Swal from 'sweetalert2'
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private basedatos = 'Pedidos';

 

  private itemsCollection: AngularFirestoreCollection<any>;
  constructor(private firestore: AngularFirestore,
              private _router: Router ) {
    this.itemsCollection = this.firestore.collection(this.basedatos);
   }

  listPedidos(){
    
   return  this.itemsCollection.valueChanges();
  }

  crearPedido ( pedido: PedidoModel ){
    this.itemsCollection.add(pedido).then( ()=>{
      Swal.fire({
      icon: 'success',
      title: `Se ingreso pedido de ${pedido.nombremascota}`,
      showConfirmButton: false,
      allowOutsideClick: false,
      timer: 1500
      }).finally( () =>{
        
      this._router.navigate(['./list']);
      } );
    });
    
    
  }
}
