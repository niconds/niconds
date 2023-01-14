
function calcula(){

    var leituraAtual = window.document.getElementById("leituraAtual").value
    var ultimaCorreta = window.document.getElementById("ultimaCorreta").value
    var dataUltimaCorreta = window.document.getElementById("dataUltimaCorreta").value //Data Ultima Leitura Correta
    var dataLeituraAtual = window.document.getElementById("dataLeituraAtual").value //Data da leitura fornecida pelo cliente
    var dataLeituraErrada = window.document.getElementById("dataLeituraErrada").value //Data Leitura Errada
    var texto = window.document.getElementById("texto")
    var leitura = window.document.getElementById("leitura")
    

    var consumo = (leituraAtual - ultimaCorreta) //consumo funciona

    var leituraCorretaeUltima = new Date(dataLeituraAtual) - new Date(dataUltimaCorreta) // leitura do consumidor - a a ultima leitura correta
    var nLeituraCorretaeUltima = leituraCorretaeUltima / (1000 * 60 * 60 * 24)                         

    var leituraErradaeAtual = new Date(dataLeituraErrada) - new Date(dataUltimaCorreta) //Leitura errada - a ultima correta
    var nLeituraErradaeAtual = leituraErradaeAtual / (1000 * 60 * 60 * 24) 

    var consumoProporcional = Math.round(consumo / nLeituraCorretaeUltima * nLeituraErradaeAtual) //consumo proporcional

    var leituraProporcional = Math.round(Number(consumoProporcional) + Number(leituraAtual)) //leitura proporcional



    texto.innerHTML = `Consumo proporcianal: ${consumoProporcional}`
    leitura.innerHTML = `Leitura proporcianal: ${leituraProporcional}`

}

