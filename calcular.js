const calcularBtn = document.getElementById('calcular-btn');
calcularBtn.addEventListener('click', calcularFaturamento);

async function calcularFaturamento() {
	
	const response = await fetch('faturamento.json');
	const faturamento = await response.json();
	const menorFaturamento = Math.min(...faturamento);
	const maiorFaturamento = Math.max(...faturamento);
	const somaFaturamento = faturamento.reduce((total, valor) => total + valor, 0);
	const diasComFaturamento = faturamento.filter(valor => valor > 0).length;
	const mediaMensal = somaFaturamento / diasComFaturamento;
	const diasAcimaMedia = faturamento.filter(valor => valor > mediaMensal).length;

	
	document.getElementById('menor-faturamento').textContent = menorFaturamento;
	document.getElementById('maior-faturamento').textContent = maiorFaturamento;
	document.getElementById('dias-acima-media').textContent = diasAcimaMedia;
}
