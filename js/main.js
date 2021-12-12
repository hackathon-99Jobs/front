// captura os elementos da tela
const modal = document.getElementById('modal-cad-aluno');
const proximo = document.getElementById('btn-proximo');
const enviar = document.getElementById('btn-enviar');
const conteudoModal = document.getElementsByClassName('conteudo-modal')
const modalLogin = document.getElementById('modal-login')

//dados do form de alunos
const nome = document.getElementById('nome')
const cpf = document.getElementById('cpf')
const email = document.getElementById('email')
const emailConfirm = document.getElementById('email-confirm')
const senha = document.getElementById('senha')
const senhaConfirm = document.getElementById('senha-confirm')
const redacao = document.getElementById('redacao')

const dados = {};

function chamaModal() {
    modal.classList.toggle('esconde-modal')
}
function chamaModalLogin() {
    modalLogin.classList.toggle('esconde-modal')
}


function alternarTelaConteudoModal() {
    for (let i = 0; i < conteudoModal.length; i++) {
        conteudoModal[i].classList.toggle('esconde')
    }
}
function capturaDados() {
    dados.nome = nome.value;
    dados.cpf = cpf.value;
    dados.senha = senha.value;
    dados.email = email.value;
    dados.redacao = redacao.value;
    dados.turma_id = '1639310406445';
    salvar();
}

function salvar() {
    // REQUISIÇÕES HTTP
    const payload = JSON.stringify(dados)
    var xhr = new XMLHttpRequest();
    setTimeout(()=>{
        xhr.open("POST", 'http://10.0.11.113:3003/cadastro/estudante', true);
        xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        xhr.onreadystatechange = function () { // Chama a função quando o estado mudar.
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                alert("Cadastro efetuado com sucesso!")
                chamaModal();
            }
        }
        xhr.send(payload);
    }, 1000)
}


function telaAdmin(){
    window.location.href = "./pages/admin.html"
}