function calcularFunc(tipo, valor){
    console.log(tipo, valor)

    if(tipo ==='acao'){
        if(valor === 'c'){
            //Limpar tela
            //document.getElementById('resultado').value = '';
            document.getElementById('resultado').value = null;

        }
        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '%'){
            document.getElementById('resultado').value += valor;

        }
        if(valor === '='){
           var valor =   eval(document.getElementById('resultado').value)

           document.getElementById('resultado').value = valor;

        }

    } else if(tipo ==='valor'){
    
        //var valor_campo = document.getElementById('resultado').value;
        //document.getElementById('resultado').value = valor_campo + valor;

        document.getElementById('resultado').value += valor;
    }
}