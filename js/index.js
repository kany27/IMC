let nome;
let peso;
let altura;
let imc = 0;

//Evento de click no botão.
let btn = document.getElementById('btn');
btn.addEventListener('click', function() {
    event.preventDefault();
    //Pegando os valores dentro dos inputs no Form;
    let form = document.querySelector('#pacientes');

    //Valeres dos inputs sendo atribuídos as variáveis;
     nome = form.nome.value;
     peso = form.peso.value;
     altura = form.altura.value;

    //Calculo IMC;
     imc = peso / (altura * altura);

    //Criando um elemento 'tr' (linha da tabela), para adicionar os 'td';
    let pacientes = document.createElement('tr');

    //Criando elementos 'td' no HTML e adicionando em variáveis;
    let nomeTd = document.createElement('td');
    let pesoTd = document.createElement('td');
    let alturaTd = document.createElement('td');
    let imcTd = document.createElement('td'); 
    //Adicionando no conteúdo do 'td' as variáveis dos valores dos inputs;
    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    imcTd.textContent = imc;
    //Adicionando as variáveis com os elementos filhos(td) à variável com o elemento pai(tr) no HTML;
    pacientes.appendChild(nomeTd);
    pacientes.appendChild(pesoTd);
    pacientes.appendChild(alturaTd);
    pacientes.appendChild(imcTd);
    let tabela = document.querySelector('#tabela');
    //Adicionando a variável com o elemento filho(tr) à variável com o elemento pai(tBody) no HTML;
    tabela.appendChild(pacientes);
});



