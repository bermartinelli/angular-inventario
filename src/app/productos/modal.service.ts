import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  modalProductos: boolean =false;
  notificarUpload = new EventEmitter<any>();

  constructor() { }

 get _notificarUpload(): EventEmitter<any>{
  return this._notificarUpload;
 }

  abrirModalProductos() {
    this.modalProductos = true;
  }

  cerrarModalProductos() {
    this.modalProductos = false;
  }

}