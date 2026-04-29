import Dados from "./Dados"

function Start() {
  const iniciar = () => {
    Dados.programa = prompt('Digite o código do progama(021 a 025):', '')

    if(Dados.programa == '021')
      Dados.gabarito = Dados.gabarito021
    else if(Dados.programa == '022')
      Dados.gabarito = Dados.gabarito022
    else if(Dados.programa == '023')
      Dados.gabarito = Dados.gabarito023
    else if(Dados.programa == '024')
      Dados.gabarito = Dados.gabarito024
    else if(Dados.programa == '025')
      Dados.gabarito = Dados.gabarito025
    else {
      alert('Código de programa inválido!\nDigite um código entre 021 e 025!')
      iniciar()
    }

    Dados.pergunta = 1
    Dados.tentativa = 1
    Dados.pontuacao = 0

    document.getElementById('tela1').value = `${Dados.programa}->${Dados.pergunta}`
    document.getElementById('tela2').value = `Tentativa ${Dados.tentativa} de 3`
  }

  return(
    <input type="button" id="botaoStart" value="START/RESET" onClick={iniciar} />
  )
}

export default Start