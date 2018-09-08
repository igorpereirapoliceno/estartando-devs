		// instanciando os pacientes da tabela 
		var pacientes = document.querySelectorAll(".paciente");

        // loop que percorre os pacientes da tabela e calcula o imc 
		for(var i = 0; i < pacientes.length; i = i + 1){

		//variavel referente ao indice do paciente 	
			var paciente = pacientes[i];

		

		// variaveis alemento td 
		var tdPeso = paciente.querySelector(".info-peso");
		var tdAltura = paciente.querySelector(".info-altura");
		var tdImc = paciente.querySelector(".info-imc");
        
		// variaves dados da tabela 
		var peso = tdPeso.textContent;
		var altura = tdAltura.textContent;
        
		var pesoEhValida = true;
		var alturaEhValida = true;
        
		//VALIDAÇÃO ALTURA E PESO 
		if(peso >= 200 || peso <= 0){
             console.log('peso inválido');
			 pesoEhValida = false;
			 tdImc.textContent = "Peso invalido";
			 paciente.classList.add('paciente-invalido');
		}
		if(altura >= 3.00 || altura <= 0){
			console.log('altura inválida');
			alturaEhValida = false;
			tdImc.textContent = "altura invalida";
			paciente.classList.add('paciente-invalido');
		}

		// calculo  imc
		if(pesoEhValida && alturaEhValida){
           tdImc.textContent = calculaImc(peso , altura );
		   }
		}
        
		function calculaImc(peso , altura){
			var imc = 0;
			imc = peso / (altura * altura);
			return imc.toFixed(2);
		}

		