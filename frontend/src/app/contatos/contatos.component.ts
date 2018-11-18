import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.css']
})
export class ContatosComponent implements OnInit {

  contatos: Array<any> = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
    this.http.get('http://localhost:3000/api/contatos')
    .subscribe((contatos: any) => this.contatos = contatos);
  }

}
