//Index.js
let nome;
let peso;
let altura;
let imc;

//Evento de click no botão.
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    event.preventDefault();
    //Pegando os valores dentro dos inputs no Form;
    let form = document.querySelector('#pacientes');
    //Extraindo dados do paciente;
    let paciente = daddosDoPaciente(form);
    //Criando um elemento 'tr' (linha da tabela), para adicionar os 'td';
     let pacientes = document.createElement('tr');
     //Criando elementos 'td' no HTML e adicionando em variáveis;
     let nomeTd = document.createElement('td');
     let pesoTd = document.createElement('td');
     let alturaTd = document.createElement('td');
     let imcTd = document.createElement('td'); 
     //Adicionando no conteúdo do 'td' as variáveis dos valores dos inputs;
     nomeTd.textContent = paciente.nome;
     pesoTd.textContent = paciente.peso;
     alturaTd.textContent = paciente.altura;
     imcTd.textContent = imc.toFixed(2);
     //Adicionando as variáveis com os elementos filhos(td) à variável com o elemento pai(tr) no HTML;
     pacientes.appendChild(nomeTd);
     pacientes.appendChild(pesoTd);
     pacientes.appendChild(alturaTd);
     pacientes.appendChild(imcTd);
     let tabela = document.querySelector('#tabela');
     //Adicionando a variável com o elemento filho(tr) à variável com o elemento pai(tBody) no HTML;
     tabela.appendChild(pacientes);
});

function daddosDoPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }
    return paciente;
};
//Calculando IMC
function calculaIMC(peso, altura) {
    imc = peso / (altura * altura);
    return imc;
}


//Fazendo raquisições AJAX com jQuery.

// $(document).ready(function() {
//    $("#id-cep").blur(function() {
//        let cep = $(this).val();
//        let url = "https://viacep.com.br/ws/" + cep + "/json/";
//        $.get(url, function(resultado) {
//            $("#id-bairro").val(resultado.bairro);
//            $("#id-cidade").val(resultado.localidade);
//            $("#id-rua").val(resultado.logradouro);
//        })
//    })
// })




