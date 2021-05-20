import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../services/senha.service';

@Component({
  selector: 'app-senha-atual',
  templateUrl: './senha-atual.component.html',
  styleUrls: ['./senha-atual.component.css']
})
export class SenhaAtualComponent implements OnInit {

  audio
  senhaAtual: String
  constructor(
    private senhaService: SenhaService
  ) { }


  ngOnInit(): void {
    this.audio = new Audio('../../assets/bip.mp3');
    this.senhaAtual = "000";
    this.getSenhaAtual()
    setInterval(() => {
      this.getSenhaAtual()
    }, 3000);
  }

  getSenhaAtual() {
    this.senhaService.obterSenhaAtual().subscribe((data: any) => {
      if (data.codigo != this.senhaAtual) {
        this.audio.play();
      }
      this.senhaAtual = data.codigo
    })
  }
}
