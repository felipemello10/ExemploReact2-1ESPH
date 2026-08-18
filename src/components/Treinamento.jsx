const Treinamento = (props) => {
  return (
    <>
      <h5>PROPS TREINAMENTO</h5>
        <p>O Id do aluno é: {props.id}</p>
        <p>O Nome do aluno é: {props.nome}</p>
        <p>O Email do aluno é: {props.email}</p>
        <p>O Telefone do aluno é: {props.telefone}</p>
    </>
  )
}

export default Treinamento
