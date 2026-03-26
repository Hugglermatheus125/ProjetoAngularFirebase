import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { ILivro } from './acervo-interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

livros: ILivro[] = [
  { 
    isbn: '1234',
    titulo: 'Uma breve istoria',
    categoria: [
      {nome: 'Cientifico'},
      {nome: 'Romance'},
      {nome: 'Terror'}
    ]
  },
  {
    isbn: '1235',
    titulo: 'O Universo em Expansão',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1236',
    titulo: 'Amor em Paris',
    categoria: [
      {nome: 'Romance'},
      {nome: 'Geografia'},

    ]
  },
  {
    isbn: '1237',
    titulo: 'A Casa Sombria',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1238',
    titulo: 'Programação Moderna',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1239',
    titulo: 'Segredos do Coração',
    categoria: [{nome: 'Romance'}]
  },
  {
    isbn: '1240',
    titulo: 'Noite Sem Fim',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1241',
    titulo: 'Inteligência Artificial',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1242',
    titulo: 'Entre Dois Mundos',
    categoria: [{nome: 'Romance'}]
  },
  {
    isbn: '1243',
    titulo: 'O Último Grito',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1244',
    titulo: 'Física Quântica Básica',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1245',
    titulo: 'Destino Cruzado',
    categoria: [{nome: 'Romance'}]
  },
  {
    isbn: '1246',
    titulo: 'Sombras do Passado',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1247',
    titulo: 'Astronomia para Iniciantes',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1248',
    titulo: 'Cartas de Amor',
    categoria: [{nome: 'Romance'}]
  },
  {
    isbn: '1249',
    titulo: 'Pesadelos Reais',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1250',
    titulo: 'Ciência do Futuro',
    categoria: [{nome: 'Cientifico'}]
  },
  {
    isbn: '1251',
    titulo: 'Paixão Proibida',
    categoria: [{nome: 'Romance'}]
  },
  {
    isbn: '1252',
    titulo: 'O Ritual',
    categoria: [{nome: 'Terror'}]
  },
  {
    isbn: '1253',
    titulo: 'Explorando o Espaço',
    categoria: [{nome: 'Cientifico'}]
  }
];



}
