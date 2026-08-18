const Aluno = (props) => {
  return (
    <>
    <h5>PROPS</h5>
      <p>O nome do Aluno é:{props.nome}</p>
      <p>A Idade do Aluno é:{props.idade}</p>
    </>
  )
}

export default Aluno
