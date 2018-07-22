(function($) {
    'use strict';
  
    var $input = $('[data-js="form-car]');
    var $companyname = $('[data-js="company-name"]');
    var $companytel = $('[data-js="company-tel"]');
    
    var ajax = new XMLHttpRequest();
    var data;
  
  var app = (function(){
    return {
      init: function() {
        this.empresaInfo();
        this.initEvents();
      },
  
      initEvents: function initEvents() {
        $('[data-js="form-car"]').on('submit', this.handleForm);
      },
  
      handleForm: function handleForm(e) {
        e.preventDefault();
        var $tableCar = $('[data-js="table-car"]').get();
        $tableCar.appendChild(app.createNewCar());
      },
  
      createNewCar: function createNewCar() {
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

        $tdMarca.textContent = $('[data-js="marca"]').get().value;
        $tdModelo.textContent = $('[data-js="modelo"]').get().value;
        $tdAno.textContent = $('[data-js="ano"]').get().value;
        $tdPlaca.textContent = $('[data-js="placa"]').get().value;
        $tdCor.textContent = $('[data-js="cor"]').get().value;

        $tr.style.background = '#51a3a3';
        $tr.style.color = '#fff';
            
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
        ajax.open('GET', 'json/company.json', true);
        ajax.send();
        ajax.addEventListener('readystatechange', this.getEmpresaInfo, false);
      },
  
      getEmpresaInfo: function getEmpresaInfo(){
        if(!app.isReady.call(this)){
          return;
        }
                 
          data = JSON.parse(this.responseText);
          
          $companyname.get().innerHTML = data.name;
          $companytel.get().innerHTML = data.phone;
      },
  
        isReady: function isReady() {
          return this.readyState === 4 && this.status === 200;
        }
      };
    })();
  
      app.init();
  
  })(window.DOM);
  