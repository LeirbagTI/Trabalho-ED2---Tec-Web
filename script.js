var enviar = document.getElementById('enviar')

function erroNome(){
    var nome = document.getElementById('input-nome')
    var nomeErro = document.getElementById('erroNome')
    var mensagem = document.getElementById('erroNome')
    
    if(nome.value == ""){
        nomeErro.style.display = "block"
        mensagem.innerHTML = "*Nome não pode estar vazio"
    }
    if(nome.value != ""){
        nomeErro.style.display = "none"
    }
    
}

function erroSobrenome(){
    var sobrenome = document.getElementById('input-sobrenome')
    var sobrenomeErro = document.getElementById('erroSobrenome')
    var mensagem = document.getElementById('erroSobrenome')
    
    if(sobrenome.value == ""){
        sobrenomeErro.style.display = "block"
        mensagem.innerHTML = "*Sobrenome não pode estar vazio"

    }
    if(sobrenome.value != ""){
        sobrenomeErro.style.display = "none"
    }

}

function erroEmail(){
    var email = document.getElementById('input-email')
    var emailErro = document.getElementById('erroEmail')
    var mensagem = document.getElementById('erroEmail')
    
    if(email.value == ""){
        emailErro.style.display = "block"
        mensagem.innerHTML = "*Email não pode estar vazio"
    }

}

function erroSenha(){
    var senha = document.getElementById('input-senha')
    var senhaErro = document.getElementById('erroSenha')
    var mensagem = document.getElementById('erroSenha')
    var input = document.getElementById('input-senha')
    
    if(senha.value == ""){
        senhaErro.style.display = "block"
        mensagem.innerHTML = "*Senha não pode estar vazio"
    }

    else if(senha.value.length < 6){
        senhaErro.style.display = "block"
        mensagem.innerHTML = "*Senha deve ter entre 6 e 8 caracteres"
    }

    else if(senha.value.length > 8){
        senhaErro.style.display = "block"
        mensagem.innerHTML = "*Senha deve ter entre 6 e 8 caracteres"
    }
    else{ 
        mensagem.innerHTML = "✔️"
        input.style.borderColor = 'green'
    }


}

function erroTelefone(){
    var telefone = document.getElementById('input-telefone')
    var telefoneErro = document.getElementById('erroTelefone')
    var mensagem = document.getElementById('erroTelefone')
    
    if(telefone.value == ""){
        telefoneErro.style.display = "block"
        mensagem.innerHTML = "*Telefone não pode estar vazio"

    }
    if(telefone.value != ""){
        telefoneErro.style.display = "none"
    }

}

function erroSexo(){
    var sexo = document.getElementById('input-sexo')
    var sexoErro = document.getElementById('erroSexo')
    var mensagem = document.getElementById('erroSexo')
    var masculino = document.getElementById('input-sexoM')
    var feminino = document.getElementById('input-sexoF')

    var valido = false
    var x = document.myform.sexo
    for(var i = 0; i < x.length; i++){
        if(x[i].checked){
            valido = true
            break
        }
    }
    if(!valido){
        sexoErro.style.display = "block"
        mensagem.innerHTML = "*Por favor, escolha uma opção"
    } else {
        sexoErro.style.display = "none"
    }

}

function validarEmail(){
    var email = document.querySelector('#input-email')
    var mensagem = document.getElementById('erroEmail')
    var input = document.getElementById('input-email')
    
    if(!email.checkValidity()){
        mensagem.style.display = 'block'
        mensagem.innerHTML = "*E-mail invalido"
    }
    if(email.checkValidity()){
        mensagem.innerHTML = "✔️"
        input.style.borderColor = 'green'
    }

    if(email.value == ""){
        mensagem.innerHTML = "*Email não pode estar vazio"
    }
     
  }
  
  function erroCPF(){
    var mensagem = document.getElementById('erroCPF')

    var cpf = document.getElementById('input-cpf').value
    var cpfNumero = cpf.replace('.', '').replace('.', '').replace('-', '')
    var somaNoveNumero = multiplicacao[9, cpfNumero, 10]
    var somaDezNumero = multiplicacao[10, cpfNumero, 11]
    var resultado1 = obterVerificador[somaNoveNumero]
    var resultado2 = obterVerificador[somaDezNumero]

    if((resultado1 + resultado2) === cpfNumero.substr(9,2)){
        mensagem.innerHTML = "✔️"
        input.style.borderColor = 'green'
    }
    else{
        console.log()
        console.log(resultado2)
        mensagem.style.display = 'block'
        mensagem.innerHTML = "*CPF inválido"
    }
}

function obterVerificador(soma){
    var resultado = (soma * 10) % 11
    return resultado.toString()
}

function multiplicacao(quantidadeNumeros, cpfNumero, multiplicado) {
    var primeirosNumeros = cpfNumero.substr(0, quantidadeNumeros)
    var somaDosNumeros = 0

    for(var i = 0; i < primeirosNumeros.length; i++){
        var numero = primeirosNumeros.substr(i, 1)
        somaDosNumeros += numero * multiplicado
        multiplicado--
    }
    return somaDosNumeros
}


function validacao(){
    erroNome()
    erroSobrenome()
    erroCPF()
    erroEmail()
    erroTelefone()
    erroSexo()
    erroSenha()
    
}

enviar.addEventListener("click", validacao)
