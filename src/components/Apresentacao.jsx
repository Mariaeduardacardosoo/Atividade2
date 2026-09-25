function Apresentacao() {
    const nome = "Maria Eduarda";
    const idade = 20;
    const hobby = "Ler";

    return (
        <div>
            <h1>Apresentação</h1>
            <p><strong>Nome:</strong> {nome}</p>
            <p><strong>Idade:</strong> {idade} anos</p>
            <p><strong>Hobby:</strong> {hobby}</p>
        </div>
    );
}

export default Apresentacao;