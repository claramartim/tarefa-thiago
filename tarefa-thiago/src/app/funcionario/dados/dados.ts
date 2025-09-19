import { Component } from '@angular/core';

@Component({
  selector: 'app-dados',
  standalone: false,
  templateUrl: './dados.html',
  styleUrl: './dados.css'
})
export class Dados {

  logado = true;
  logado1 = false;

  mensagem() {
    this.logado = !this.logado;
    this.logado1 = !this.logado1;
  }

  
}
