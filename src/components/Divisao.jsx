function Divisao({ a, b }) {
    return (
        <p>
            Divisão: {a} ÷ {b} = {b !== 0 ? a / b : "não é possível dividir por zero"}
        </p>
    );
}

export default Divisao;