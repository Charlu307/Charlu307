function calculateInterest() {
    const capital = parseFloat(document.getElementById('capital').value);
    const rate = parseFloat(document.getElementById('rate').value) / 100; // Convertir a decimal
    const time = parseFloat(document.getElementById('time').value);
    const type = document.getElementById('type').value;
    let interest = 0;
    let finalAmount = 0;

    if (type === 'simple') {
        interest = capital * rate * time;
        finalAmount = capital + interest;
        document.getElementById('result').innerHTML = `
    <h3>Resultado (Interes Simple):</h3>
    <p>Interes Ganado: ${interest.toFixed(2)}</p>
    <p>Monto Final: ${finalAmount.toFixed(2)}</p>
  `;
    } else if (type === 'compound') {
        finalAmount = capital * Math.pow((1 + rate), time);
        interest = finalAmount - capital;
        document.getElementById('result').innerHTML = `
    <h3>Resultado (Interes Compuesto):</h3>
    <p>Interes Ganado: ${interest.toFixed(2)}</p>
    <p>Monto Final: ${finalAmount.toFixed(2)}</p>
  `;
    }
}

function alternarEstilo() {

    let boton = document.querySelectorAll("styleSheet1");
    return 
    
}



