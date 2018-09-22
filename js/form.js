// Variavel do botão do form
var botaoAdicionar = document.querySelector('#adicionar-paciente');

// Determinando função de event do botão
botaoAdicionar.addEventListener('click', function (event) {
    event.preventDefault();

    // Coletando form para pegar informações dele
    var form = document.querySelector('#form-adiciona');

    // Determinando variaveis e suas respectivas funções
    var paciente = obtemPacienteDoFormulario(form);

    var pacienteTr = montaTr(paciente);

    var erros = validaPaciente(paciente);

    if (erros.length > 0) {
        exibirMensagensDeErro(erros);
        return;
    }

    //Pegando tabela
    var tabela = document.querySelector('#tabela-pacientes');

    // Criando tr na tabela
    tabela.appendChild(pacienteTr);

    form.reset();

    var mensagensErro = document.querySelector("#mensagens-erro");
    mensagensErro.innerHTML = "";

});

function exibirMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erros){
        var li = document.createElement("li");
        li.textContent = erros;
        ul.appendChild(li);
    });
}

//Coletando valores do formulario
function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    };

    return paciente;

}

// Montando Tr
function montaTr(paciente) {
    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    pacienteTr.appendChild(montaTd(paciente.nome, 'info-nome'));
    pacienteTr.appendChild(montaTd(paciente.peso, 'info-peso'));
    pacienteTr.appendChild(montaTd(paciente.altura, 'info-altura'));
    pacienteTr.appendChild(montaTd(paciente.gordura, 'info-gordura'));
    pacienteTr.appendChild(montaTd(paciente.imc, 'info-imc'));

    return pacienteTr;
}

// Montando Td com conteudo e classe
function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente) {

    var erros = [];

    if(paciente.nome == 0) {
        erros.push("Campo nome não pode ser em branco")
    }
    if (!validaPeso(paciente.peso)) {
        erros.push("Peso Inválido");
    }
    if (!validaAltura(paciente.altura)) {
        erros.push("Altura Inválida")
    }
    if(paciente.peso == 0){
        erros.push("Campo peso nao pode ser em branco")
    }
    if(paciente.altura == 0){
        erros.push("Campo altura nao pode ser em branco")
    }
    if(paciente.gordura == 0) {
        erros.push("Campo gordura não pode ser em branco")
    }
    return erros;
}