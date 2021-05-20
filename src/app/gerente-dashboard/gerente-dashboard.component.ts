import { Component, OnInit } from '@angular/core';
import { SenhaService } from '../services/senha.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-gerente-dashboard',
  templateUrl: './gerente-dashboard.component.html',
  styleUrls: ['./gerente-dashboard.component.css']
})
export class GerenteDashboardComponent implements OnInit {

 
  constructor(
    private senhaService: SenhaService,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
  }

  chamar() {
    this.senhaService.chamarProxima().subscribe(data=> {
      if(data == null) {
        alert("Não há mais senhas!");
      }

      //this.toastService.success('A próxima senha foi chamada!', 'Sucesso');
    })
  }

  resetar() {
    this.senhaService.resetar().subscribe(data=> {
      this.toastService.success('A sequencia de senhas foi resetada!', 'Sucesso');
    })
  }

}
