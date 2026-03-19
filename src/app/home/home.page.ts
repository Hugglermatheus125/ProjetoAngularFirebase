import { Component } from '@angular/core';
import { AuthenticateService } from '../services/auth.service';
import { CrudService } from '../services/crud.service';
import { Storage, getDownloadURL, ref, uploadBytesResumable } from '@angular/fire/storage';
import { MessageService } from '../services/message.service';
import { Router } from '@angular/router';
import { Livro } from './livro.interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  livros: Livro[] = [
    {
      isbn: '123',
      titulo: 'O dono da fazenda e a egua da maldade',
      sinopse: 'Livro de um conto do conhecido cuzera e sua amada',
      paginas: '267',
      data_lancamento: '20/07/2008',
      autor: [
        {nome: 'Cuzera de Capela', email: 'cuzeracapela@eguamail.com'}
      ],
      categoria: [
        {nome: 'Dark Romance'},
        {nome: 'Ficcao'},
      ],
      editora: {nome: 'CAVALO CONTOS', site: 'editoracavalos@gmail.com'}
    },

    {
      isbn: '124',
      titulo: 'Sombras da Noite',
      sinopse: 'Uma jornada misteriosa em um vilarejo esquecido',
      paginas: '198',
      data_lancamento: '10/03/2015',
      autor: [{nome: 'Ana Silva', email: 'ana@email.com'}],
      categoria: [{nome: 'Terror'}],
      editora: {nome: 'Lua Negra', site: 'www.luanegra.com'}
    },

    {
      isbn: '125',
      titulo: 'O Último Código',
      sinopse: 'Um hacker descobre um segredo global',
      paginas: '320',
      data_lancamento: '01/11/2018',
      autor: [{nome: 'Carlos Tech', email: 'carlos@tech.com'}],
      categoria: [{nome: 'Tecnologia'}, {nome: 'Suspense'}],
      editora: {nome: 'Digital Books', site: 'www.digitalbooks.com'}
    },

    {
      isbn: '126',
      titulo: 'Amor em Paris',
      sinopse: 'Romance entre dois desconhecidos na França',
      paginas: '210',
      data_lancamento: '14/02/2020',
      autor: [{nome: 'Juliana Rosa', email: 'juju@email.com'}],
      categoria: [{nome: 'Romance'}],
      editora: {nome: 'LoveBooks', site: 'www.lovebooks.com'}
    },

    {
      isbn: '127',
      titulo: 'A Ilha Perdida',
      sinopse: 'Exploradores encontram uma ilha misteriosa',
      paginas: '275',
      data_lancamento: '09/09/2012',
      autor: [{nome: 'Pedro Lima', email: 'pedro@email.com'}],
      categoria: [{nome: 'Aventura'}],
      editora: {nome: 'Explora Mundo', site: 'www.explora.com'}
    },

    {
      isbn: '128',
      titulo: 'Mentes Brilhantes',
      sinopse: 'Histórias de grandes cientistas',
      paginas: '300',
      data_lancamento: '22/08/2016',
      autor: [{nome: 'Dr. Souza', email: 'souza@email.com'}],
      categoria: [{nome: 'Educativo'}],
      editora: {nome: 'EducaMais', site: 'www.educamais.com'}
    },

    {
      isbn: '129',
      titulo: 'Guerra Final',
      sinopse: 'O mundo em um conflito devastador',
      paginas: '410',
      data_lancamento: '30/06/2019',
      autor: [{nome: 'Marcos Guerra', email: 'guerra@email.com'}],
      categoria: [{nome: 'Ação'}],
      editora: {nome: 'WarBooks', site: 'www.warbooks.com'}
    },

    {
      isbn: '130',
      titulo: 'Mistérios do Oceano',
      sinopse: 'Segredos escondidos nas profundezas',
      paginas: '260',
      data_lancamento: '05/05/2014',
      autor: [{nome: 'Lara Mar', email: 'lara@email.com'}],
      categoria: [{nome: 'Aventura'}],
      editora: {nome: 'BlueSea', site: 'www.bluesea.com'}
    },

    {
      isbn: '131',
      titulo: 'Vida Saudável',
      sinopse: 'Guia completo para bem-estar',
      paginas: '180',
      data_lancamento: '12/01/2021',
      autor: [{nome: 'Dr. Fit', email: 'fit@email.com'}],
      categoria: [{nome: 'Saúde'}],
      editora: {nome: 'HealthBooks', site: 'www.health.com'}
    },

    {
      isbn: '132',
      titulo: 'O Despertar',
      sinopse: 'Uma nova era começa',
      paginas: '350',
      data_lancamento: '18/07/2017',
      autor: [{nome: 'Neo Silva', email: 'neo@email.com'}],
      categoria: [{nome: 'Ficção Científica'}],
      editora: {nome: 'FutureEdit', site: 'www.future.com'}
    },

    {
      isbn: '133',
      titulo: 'Caminhos da Fé',
      sinopse: 'Reflexões espirituais profundas',
      paginas: '220',
      data_lancamento: '03/03/2013',
      autor: [{nome: 'Padre João', email: 'joao@email.com'}],
      categoria: [{nome: 'Religião'}],
      editora: {nome: 'LuzDivina', site: 'www.luz.com'}
    },

    {
      isbn: '134',
      titulo: 'Segredos da Mente',
      sinopse: 'Como funciona o cérebro humano',
      paginas: '290',
      data_lancamento: '27/10/2018',
      autor: [{nome: 'Clara Mendes', email: 'clara@email.com'}],
      categoria: [{nome: 'Psicologia'}],
      editora: {nome: 'MindBooks', site: 'www.mind.com'}
    },

    {
      isbn: '135',
      titulo: 'Planeta Vermelho',
      sinopse: 'Missão para Marte',
      paginas: '330',
      data_lancamento: '11/11/2022',
      autor: [{nome: 'Space X', email: 'space@email.com'}],
      categoria: [{nome: 'Ficção Científica'}],
      editora: {nome: 'Cosmos', site: 'www.cosmos.com'}
    },

    {
      isbn: '136',
      titulo: 'Arte Moderna',
      sinopse: 'Evolução da arte contemporânea',
      paginas: '210',
      data_lancamento: '19/04/2011',
      autor: [{nome: 'Lucas Arte', email: 'arte@email.com'}],
      categoria: [{nome: 'Arte'}],
      editora: {nome: 'ArtHouse', site: 'www.arthouse.com'}
    },

    {
      isbn: '137',
      titulo: 'História do Brasil',
      sinopse: 'Dos descobrimentos aos dias atuais',
      paginas: '500',
      data_lancamento: '07/09/2010',
      autor: [{nome: 'Historiador BR', email: 'hist@email.com'}],
      categoria: [{nome: 'História'}],
      editora: {nome: 'BrasilEdit', site: 'www.brasil.com'}
    },

    {
      isbn: '138',
      titulo: 'Culinária Fácil',
      sinopse: 'Receitas rápidas e práticas',
      paginas: '150',
      data_lancamento: '25/12/2020',
      autor: [{nome: 'Chef Maria', email: 'chef@email.com'}],
      categoria: [{nome: 'Culinária'}],
      editora: {nome: 'CookBooks', site: 'www.cook.com'}
    },

    {
      isbn: '139',
      titulo: 'O Enigma',
      sinopse: 'Um mistério impossível de resolver',
      paginas: '280',
      data_lancamento: '02/02/2016',
      autor: [{nome: 'Detetive X', email: 'x@email.com'}],
      categoria: [{nome: 'Suspense'}],
      editora: {nome: 'MysteryHouse', site: 'www.mystery.com'}
    },

    {
      isbn: '140',
      titulo: 'Treinamento Extremo',
      sinopse: 'Guia para atletas',
      paginas: '240',
      data_lancamento: '15/06/2019',
      autor: [{nome: 'Coach Pro', email: 'coach@email.com'}],
      categoria: [{nome: 'Esporte'}],
      editora: {nome: 'SportBooks', site: 'www.sport.com'}
    },

    {
      isbn: '141',
      titulo: 'Viagem pelo Mundo',
      sinopse: 'Experiências em diversos países',
      paginas: '360',
      data_lancamento: '08/08/2015',
      autor: [{nome: 'Traveler Joe', email: 'joe@email.com'}],
      categoria: [{nome: 'Turismo'}],
      editora: {nome: 'TravelEdit', site: 'www.travel.com'}
    },

    {
      isbn: '142',
      titulo: 'O Código Perdido',
      sinopse: 'Segredos escondidos na história',
      paginas: '310',
      data_lancamento: '21/09/2017',
      autor: [{nome: 'Dan Clone', email: 'dan@email.com'}],
      categoria: [{nome: 'Suspense'}],
      editora: {nome: 'SecretBooks', site: 'www.secret.com'}
    },

    {
      isbn: '143',
      titulo: 'Robôs do Futuro',
      sinopse: 'A revolução da inteligência artificial',
      paginas: '270',
      data_lancamento: '13/03/2023',
      autor: [{nome: 'AI Master', email: 'ai@email.com'}],
      categoria: [{nome: 'Tecnologia'}],
      editora: {nome: 'TechWorld', site: 'www.techworld.com'}
    }
  ];
}