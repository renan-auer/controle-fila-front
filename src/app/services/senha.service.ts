import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SenhaService {

  constructor(private http: HttpClient) { }


  baseUrl = environment.URL_API + "/api/senha"

  obterSenhaAtual(){
    return this.http.get(this.baseUrl + "/atual", {headers:{'Content-Type':'application/json'}})
  }

  gerarNova(tipoSenha: String){
    return this.http.post(this.baseUrl + "/gerar-nova", {tipoSenha}, {headers:{'Content-Type':'application/json'}})
  }

  chamarProxima(){
    return this.http.post(this.baseUrl + "/chamar-proxima", {}, {headers:{'Content-Type':'application/json'}})
  }

  resetar(){
    return this.http.post(this.baseUrl + "/resetar", {}, {headers:{'Content-Type':'application/json'}})
  }

}
