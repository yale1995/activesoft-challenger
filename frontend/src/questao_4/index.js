async function chamarPromise (x){
  let message
  try {
    if(x > 7) message = 'Deu certo'

    else{
      throw new Error('Número menor que 7')
    }

  } catch (err) {
    message = 'Deu errado'

    console.log(message, err)
  }

  return message
}

function acaoBotao(){
  chamarPromise(2).then(res => alert(res)).catch(err => alert(err))
}

async function acaoBotao2(){
  const mensagem =  await chamarPromise(5)

  return alert(mensagem)
}

function Questao4() {
    return (
      <div>
        <h1>Questão 4</h1>
        <button onClick={acaoBotao}>Ativar</button>
        <button onClick={acaoBotao2}>Ativar2</button>
      </div>
    );
  }
  
export default Questao4;