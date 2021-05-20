import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../services/senha.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrls: ['./client-dashboard.component.css']
})
export class ClientDashboardComponent implements OnInit {

  senhaAtual: String
  tipoSenha: String = "PREFERENCIAL"

  gerandoSenha: Boolean = false
  senhaGerada: String
  constructor(
    private senhaService: SenhaService
  ) { }

  ngOnInit(): void {
    this.senhaAtual = "000";
    this.getSenhaAtual()
    setInterval(() => {
      this.getSenhaAtual()
    }, 5000);
  }
  getSenhaAtual() {
    this.senhaService.obterSenhaAtual().subscribe((data: any) => {
      this.senhaAtual = data.codigo
    })
  }

  gerarNova(tipoSenha) {
    if (!tipoSenha)
      return

    this.gerandoSenha = true
    setTimeout(() => {
      this.senhaService.gerarNova(tipoSenha).subscribe((data: any) => {
        this.getSenhaAtual()
        this.senhaGerada = data.codigo
        this.gerandoSenha = false
      }, err=> {
        this.gerandoSenha = false
      })
    }, 2000);
  }


}
