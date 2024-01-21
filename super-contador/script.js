function contar(){
    var num1 = document.getElementById('start')
    var num2 = document.getElementById('end')
    var num3 = document.getElementById('pass')
    var res = document.getElementById('res')
    //ESSA VERSÃO FOI FEITA COM BASE NA VERSÃO DO PROF, MOSTRADA NA AULA
    if (num1.value.length == 0 || num2.value.length == 0 || num3.value.length == 0){
        res.innerText = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerText = 'Contando: <br>'
        var i = Number(num1.value)
        var f = Number(num2.value)
        var p = Number(num3.value)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1')
            p = 1
        }
        if (i < f) { //contagem crescente
            for (var n = i; n <= f; n += p){
                    res.innerText += n + "👉" //emojis támbem podem ser adicionados co códigos unicode
            }
        } else { //contagem decrescente
            for (var n = i; n >= f; n -= p){
                res.innerText += n + "👉"
                }
            }
    }
    res.innerText += "🚩"
}
