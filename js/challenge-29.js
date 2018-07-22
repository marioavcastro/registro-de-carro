(function($) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */


  var $input = $('[data-js="form-car]');
  var $companyname = $('[data-js="company-name"]');
  var $companytel = $('[data-js="company-tel"]');
  var $fragment = document.createDocumentFragment();
  var $tr = document.createElement('tr');
  var $td = document.createElement('td');
  var $image = document.createElement('img');
  var $tdImage = document.createElement('td');
  var $tdMarca = document.createElement('td');
  var $tdModelo = document.createElement('td');
  var $tdAno = document.createElement('td');
  var $tdPlaca = document.createElement('td');
  var $tdCor = document.createElement('td');
  var ajax = new XMLHttpRequest();
  var data;
  


var app = (function(){
  return {
    init: function() {
      this.empresaInfo();
      this.initEvents();
    },

    initEvents: function initEvents() {
      $('[data-js="form-car"]').on('submit', this.handleForm)
    },

    handleForm: function handleForm(e) {
      e.preventDefault();
      var $tableCar = $('[data-js="table-car"]').get();
      $tableCar.appendChild(app.createNewCar());
  
    },

    createNewCar: function createNewCar() {

      $tdMarca.textContent = $('[data-js="marca"]').get().value;
      $tdModelo.textContent = $('[data-js="modelo"]').get().value;
      $tdAno.textContent = $('[data-js="ano"]').get().value;
      $tdPlaca.textContent = $('[data-js="placa"]').get().value;
      $tdCor.textContent = $('[data-js="cor"]').get().value;

      //$image.setAttribute('src', $('[data-js="image"]').get().value);
      $image.src = $('[data-js="image"]').get().value;
      $tdImage.appendChild($image);
      $tr.appendChild($tdImage);
      $tr.appendChild($tdMarca);
      $tr.appendChild($tdModelo);
      $tr.appendChild($tdAno);
      $tr.appendChild($tdPlaca);
      $tr.appendChild($tdCor);

      return $fragment.appendChild($tr);
    },

    empresaInfo: function empresaInfo() {
      ajax.open('GET', 'company.json', true);
      ajax.send();
      ajax.addEventListener('readystatechange', this.getEmpresaInfo, false);
    },

    getEmpresaInfo: function getEmpresaInfo(){
      if(!app.isReady.call(this)){
        return;
      }
        data = JSON.parse(this.responseText);
        
        $companyname.get().textContent = data.name;
        $companytel.get().textContent = data.phone;
      
    },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200;
      }
    
    };
  })();

    app.init();

})(window.DOM);
