import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {

  @Input() contador!:number;
  @Output() emitirContador = new EventEmitter<number>();
  @Output() resetContador = new EventEmitter<number>();

  constructor(){
  }
  ngOnInit(){
    this.resetContador.emit(this.contador);

  }
  multiplicar(){
    this.contador*=2;
    this.emitirContador.emit(this.contador);
  }
  dividir(){
    this.contador/=2;
    this.emitirContador.emit(this.contador);
  }
  resetNieto(nuevoContador:number){
    this.contador = nuevoContador;
    this.resetContador.emit(this.contador);
  }


}
