/*Alert quando página for carregada*/
const msg = 'Esse projeto foi realizado durante o curso de HTML5, oferecido pela plataforma Curso em Video.\nAcesse: https://www.cursoemvideo.com';
window.onload = function mensagem() {
	alert(msg);
}

/*mudar foto no menu superior*/
function mudFoto(foto) {
	document.getElementById("icone").src = foto;
}

/*calcular preco total de produtos pedidos*/
function calc_total() {
	var qtd = parseInt(document.getElementById('cQtd').value);
	var tot = qtd * 1500;
	document.getElementById('cTot').value = tot;
}

