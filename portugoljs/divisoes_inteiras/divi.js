function calcularMetadeEResto() {
    const valor = parseInt(document.getElementById("valor").value);

    if (!isNaN(valor)) {
        const metadeInteira = Math.floor(valor / 2);
        const resto = valor % 3;

        document.getElementById("resultMetadeInteira").innerText = `A metade inteira do número é: ${metadeInteira}`;
        document.getElementById("resultResto").innerText = `O resto da divisão por 3 é: ${resto}`;
    } else {
        alert("Por favor, insira um valor numérico válido.");
    }
}