import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  lista_compras: any = [
    { nome: 'figado',
      preco: 26.0,
      marca: 'friboi',
      promocao: true
    },
    { nome: 'chocolate',
      preco: 2.5,
      marca: 'lakita',
      promocao: false
    },
    { nome: 'refrigerante',
      preco: 5.0,
      marca: 'it',
      promocao: false
    },
    { nome: 'chiclete',
      preco: 2.5,
      marca: 'tridente',
      promocao: true
    }
  ];

}