$(document).ready(function() {

    $.ajax({
        url: "http://api-pacientes.herokuapp.com/pacientes",
        type: "GET",
        dataType: "JSON",
        success: function (resposta) {
            resposta.forEach(function(paciente) {
                adicionaPacienteNaTabela(paciente);
            });
        },
        error: function () {
            console.log("Erro");
        }
    });

});