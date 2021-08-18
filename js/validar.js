const INPUT_NOME = document.getElementById('nome');
const INPUT_TELEFONE = document.getElementById('telefone');
const INPUT_MENSAGEM = document.getElementById('mensagem');

const ERRO_NOME = document.getElementById('erro_nome')
const ERRO_TELEFONE = document.getElementById('erro_telefone')
const ERRO_MENSAGEM = document.getElementById('erro_mensagem')

const MODAL_CONTATO = document.getElementById('modal_contato')

function validarForm() {
  event.preventDefault()

  let validacao = true

  if (INPUT_NOME.value.length < 3) {
    INPUT_NOME.classList.remove('is-valid');
    INPUT_NOME.classList.add('is-invalid');
    ERRO_NOME.classList.remove('d-none')

    validacao = false
  }

  if (INPUT_TELEFONE.value.length < 9) {
    INPUT_TELEFONE.classList.remove('is-valid');
    INPUT_TELEFONE.classList.add('is-invalid');
    ERRO_TELEFONE.classList.remove('d-none')

    validacao = false
  }

  if (INPUT_MENSAGEM.value.length < 15) {
    INPUT_MENSAGEM.classList.remove('is-valid');
    INPUT_MENSAGEM.classList.add('is-invalid');
    ERRO_MENSAGEM.classList.remove('d-none')

    validacao = false
  }

  if (validacao === true) {
    MODAL_CONTATO.classList.remove('d-none')

    document.getElementById('form-contato').reset();
  }
}

INPUT_NOME.addEventListener('keydown', function () {

  if (INPUT_NOME.value.length >= 3) {
    INPUT_NOME.classList.remove('is-invalid');
    INPUT_NOME.classList.add('is-valid');
    ERRO_NOME.classList.add('d-none')
  }

  if (INPUT_NOME.value.length < 2) {
    INPUT_NOME.classList.remove('is-valid');
    INPUT_NOME.classList.remove('is-invalid');
    ERRO_NOME.classList.add('d-none');
  }
}
)

INPUT_TELEFONE.addEventListener('keydown', function (){

  if (INPUT_TELEFONE.value.length >= 8) {
    INPUT_TELEFONE.classList.remove('is-invalid');
    INPUT_TELEFONE.classList.add('is-valid');
    ERRO_TELEFONE.classList.add('d-none');
  }

  if (INPUT_TELEFONE.value.length < 2) {
    INPUT_TELEFONE.classList.remove('is-valid');
    INPUT_TELEFONE.classList.remove('is-invalid');
    ERRO_TELEFONE.classList.add('d-none');
  }

}
)

INPUT_MENSAGEM.addEventListener('keydown', function (){

  if (INPUT_MENSAGEM.value.length >= 14) {
    INPUT_MENSAGEM.classList.add('is-valid');
    INPUT_MENSAGEM.classList.remove('is-invalid');
    ERRO_MENSAGEM.classList.add('d-none');
  }

  if (INPUT_MENSAGEM.value.length < 2) {
    INPUT_MENSAGEM.classList.remove('is-valid');
    INPUT_MENSAGEM.classList.remove('is-invalid');
    ERRO_MENSAGEM.classList.add('d-none');
  }

}
)


function modal_contato_fechar() {
  MODAL_CONTATO.classList.add('d-none')
}
