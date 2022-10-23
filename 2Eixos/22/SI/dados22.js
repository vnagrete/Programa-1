//

var Eixos = []
var c = 1
var eixo = {
    comprimento : comprimento,
    inclinação : inclinação
}
var Motor = []
var motor = {
    pot : pot,
    rotação : rotação
}
var desenhoeixos=document.getElementById("tela")
var ctx=desenhoeixos.getContext("2d")
var dadoseixos=document.getElementById("tela3")
var ctx3=dadoseixos.getContext("2d")

//Imagens do sistema
var imagemeixos=document.getElementById("eixosr")
var ctx11=imagemeixos.getContext("2d")
var imagemdadoseixos=document.getElementById("dadoseixosr")
var ctx12=imagemdadoseixos.getContext("2d")

function entpot()
{
    var pot = document.getElementById('pot').value
    var rotação = document.getElementById('rotação').value
    document.getElementById('potdeterminada').innerHTML = "A potência de entrada no eixo 1 é: " + pot + " kN"
    document.getElementById('rotdeterminada').innerHTML = "A rotação de entrada no eixo 1 é: " + rotação + " rpm"
    motor = {
        pot : Number(pot),
        rotação : Number(rotação)
    }
    Motor.unshift(motor)// Adiciona ao início do array

    document.getElementById('botãoenviar').removeAttribute('disabled')
    document.getElementById('botãocorrigir').removeAttribute('disabled')
}

function desenhoinicial ()
{
    let centrox = 260
    let centroy = 260

    ctx.fillStyle = "black"
    ctx.font = "18px arial"
    ctx.fillText("Configuração ilustrativa!",20,30)

    ctx.font = "12px arial"

    //Setas 
    ctx.beginPath()
    ctx.lineWidth = 2 
    ctx.strokeStyle = "red"
    ctx.fillStyle = "red"
    ctx.moveTo(10,desenhoeixos.height-20) //Linha reta X
    ctx.lineTo(45,desenhoeixos.height-20)
    ctx.moveTo(10,desenhoeixos.height-60) //Linha reta Y
    ctx.lineTo(10,desenhoeixos.height-20)
    ctx.moveTo(45,desenhoeixos.height-20) //Seta de X
    ctx.lineTo(37,desenhoeixos.height-24)
    ctx.moveTo(45,desenhoeixos.height-20)
    ctx.lineTo(37,desenhoeixos.height-16)
    ctx.fillText("X",35,desenhoeixos.height-30,15)
    ctx.moveTo(10,desenhoeixos.height-60) //Seta de Y
    ctx.lineTo(6,desenhoeixos.height-52)
    ctx.moveTo(10,desenhoeixos.height-60)
    ctx.lineTo(14,desenhoeixos.height-52)
    ctx.fillText("Y",19,desenhoeixos.height-52,15)
    ctx.stroke() 
    ctx.closePath()
   
    ctx.beginPath() //Eixo 1
    ctx.fillStyle = "black"
    ctx.arc(centrox,centroy,10,0,Math.PI*2,true)
    ctx.fill()
    ctx.closePath()     
    ctx.beginPath()
    ctx.lineWidth = 1 
    ctx.strokeStyle = "red"
    ctx.moveTo(centrox,centroy)
    ctx.lineTo(centrox+40,centroy)
    ctx.fillText("Eixo a",centrox - 50,centroy)
    ctx.stroke() 
    ctx.closePath()

    ctx.beginPath() //Eixo 2
    ctx.fillStyle = "black"
    ctx.arc(centrox+60*Math.cos(45*Math.PI/180),centroy-60*Math.sin(45*Math.PI/180),10,0,Math.PI*2,true)
    ctx.fill()
    ctx.closePath()

    ctx.beginPath() //Linha do Eixo 2
    ctx.lineWidth = 1 
    ctx.strokeStyle = "red"
    ctx.moveTo(centrox,centroy)
    ctx.fillText("Inclinação 1" + " (45°)",centrox + 25,centroy - 5)   
    ctx.lineTo(centrox+60*Math.cos(45*Math.PI/180),centroy-60*Math.sin(45*Math.PI/180))
    centrox = centrox+60*Math.cos(45*Math.PI/180)
    centroy = centroy-60*Math.sin(45*Math.PI/180)
    ctx.moveTo(centrox,centroy)
    ctx.lineTo(centrox+40,centroy)
    ctx.fillText("Eixo b",centrox - 50,centroy)
    ctx.stroke() 
    ctx.closePath()

}

function enviardados ()
{ 

    if (document.getElementById('comprimento').value < 100)
    {
        alert("O comprimento do eixo deve ser de no mínimo 100 mm!")
    }
    else if (document.getElementById('inclinação').value < 0 || document.getElementById('inclinação').value > 180)
    {
        alert("A inclinação do eixo deve estar entre 0° e 180°!")
    }
    else
    {
        if (c == 1)
        {
            ctx.clearRect(0,0,desenhoeixos.width,desenhoeixos.height)
        }

        document.getElementById('inclinação').removeAttribute('disabled')
    
        c = c + 1
        var controle = 3
        if (c == 2)
        {
            document.getElementById('tabeladadosdoeixo').innerHTML = "Eixo b"  
        }

        let comprimento = document.getElementById('comprimento').value
        let inclinação = document.getElementById('inclinação').value
        eixo = {
            comprimento : Number(comprimento),
            inclinação : Number(inclinação)
        }
        Eixos.push(eixo)
        document.getElementById('formeixos').reset()
    
        if (c == controle)
        {
            document.getElementById('botãoenviar').setAttribute('disabled','true')
            document.getElementById('tabeladadosdoeixo').innerHTML = "Eixo c"

            document.getElementById('botãoenviar2').removeAttribute('disabled')
            document.getElementById('botãocorrigir2').removeAttribute('disabled')
        }
    }
}

function desenhareixos()
{
    let centrox = 260
    let centroy = 260
    ctx.font = "11px arial"

    //Setas 
    ctx.beginPath()
    ctx.lineWidth = 2 
    ctx.strokeStyle = "red"
    ctx.fillStyle = "red"
    ctx.moveTo(10,desenhoeixos.height-20) //Linha reta X
    ctx.lineTo(45,desenhoeixos.height-20)
    ctx.moveTo(10,desenhoeixos.height-60) //Linha reta Y
    ctx.lineTo(10,desenhoeixos.height-20)
    ctx.moveTo(45,desenhoeixos.height-20) //Seta de X
    ctx.lineTo(37,desenhoeixos.height-24)
    ctx.moveTo(45,desenhoeixos.height-20)
    ctx.lineTo(37,desenhoeixos.height-16)
    ctx.fillText("X",35,desenhoeixos.height-30,15)
    ctx.moveTo(10,desenhoeixos.height-60) //Seta de Y
    ctx.lineTo(6,desenhoeixos.height-52)
    ctx.moveTo(10,desenhoeixos.height-60)
    ctx.lineTo(14,desenhoeixos.height-52)
    ctx.fillText("Y",19,desenhoeixos.height-52,15)
    ctx.stroke() 
    ctx.closePath() 

    if (c == 2)
   {
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.strokeStyle = "black"
        ctx.arc(centrox,centroy,10,0,Math.PI*2,true)
        ctx.fillText('a',centrox - 5,centroy + 25) 
        ctx.fill()
        ctx.stroke()
        ctx.closePath()

        ctx.beginPath()
        ctx.lineWidth = 1 
        ctx.strokeStyle = "red"
        ctx.moveTo(centrox,centroy)
        ctx.lineTo(centrox+40,centroy)
        ctx.stroke() 
        ctx.closePath() 
   }
   else if (c == 3)
   {
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180),10,0,Math.PI*2,true)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.lineWidth = 1 
        ctx.strokeStyle = "red"
        ctx.moveTo(centrox,centroy)
        if (Eixos[c-2].inclinação == 180)
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox - 10,centroy - 15)   
        }
        else if (Eixos[c-2].inclinação >= 35 && Eixos[c-2].inclinação <= 55)
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 25,centroy - 5)   
        }
        else
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 15,centroy - 15)
        }
        ctx.lineTo(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180))
        centrox = centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180)
        ctx.moveTo(centrox,centroy)
        ctx.lineTo(centrox+40,centroy)
        ctx.stroke() 
        ctx.closePath()
   }
   else if (c == 4)
   {
        centrox = centrox+60*Math.cos(Eixos[c-3].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-3].inclinação*Math.PI/180)
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180),10,0,Math.PI*2,true)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.lineWidth = 1 
        ctx.strokeStyle = "red"
        ctx.moveTo(centrox,centroy)
        if (Eixos[c-2].inclinação == 180)
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox - 10,centroy - 15)
        }
        else if (Eixos[c-2].inclinação >= 35 && Eixos[c-2].inclinação <= 55)
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 25,centroy - 5)
        }
        else
        {
            ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 15,centroy - 15)
        }
        ctx.lineTo(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180))
        centrox = centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180)
        ctx.moveTo(centrox,centroy)
        ctx.lineTo(centrox+40,centroy)
        ctx.stroke() 
        ctx.closePath()
   }
   else if (c == 5)
   {
        centrox = centrox+60*Math.cos(Eixos[c-4].inclinação*Math.PI/180)+60*Math.cos(Eixos[c-3].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-4].inclinação*Math.PI/180)-60*Math.sin(Eixos[c-3].inclinação*Math.PI/180)
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180),10,0,Math.PI*2,true)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.lineWidth = 1 
        ctx.strokeStyle = "red"
        ctx.moveTo(centrox,centroy)
        ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 15,centroy - 15)
        ctx.lineTo(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180))
        centrox = centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180)
        ctx.moveTo(centrox,centroy)
        ctx.lineTo(centrox+40,centroy)
        ctx.stroke() 
        ctx.closePath()
   }
   else if (c == 6)
   {
        centrox = centrox+60*Math.cos(Eixos[c-5].inclinação*Math.PI/180)+60*Math.cos(Eixos[c-4].inclinação*Math.PI/180)+60*Math.cos(Eixos[c-3].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-5].inclinação*Math.PI/180)-60*Math.sin(Eixos[c-4].inclinação*Math.PI/180)-60*Math.sin(Eixos[c-3].inclinação*Math.PI/180)
        ctx.beginPath()
        ctx.fillStyle = "black"
        ctx.arc(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180),10,0,Math.PI*2,true)
        ctx.fill()
        ctx.closePath()

        ctx.beginPath()
        ctx.lineWidth = 1 
        ctx.strokeStyle = "red"
        ctx.moveTo(centrox,centroy)
        ctx.fillText(Eixos[c-2].inclinação + "°",centrox + 15,centroy - 15)
        ctx.lineTo(centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180),centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180))
        centrox = centrox+60*Math.cos(Eixos[c-2].inclinação*Math.PI/180)
        centroy = centroy-60*Math.sin(Eixos[c-2].inclinação*Math.PI/180)
        ctx.moveTo(centrox,centroy)
        ctx.lineTo(centrox+40,centroy)
        ctx.stroke() 
        ctx.closePath()
   }
   let imgeixos = ctx.getImageData(0, 0, desenhoeixos.width, desenhoeixos.height); //Copia os dados para o canvas do resultado
   ctx11.putImageData(imgeixos, 0, 0);
}

function dadosdoeixo()
{
    ctx3.font = "15px Arial"

    //Desenho dos dados
    ctx3.beginPath()
    ctx3.lineWidth = 2 
    ctx3.strokeStyle = "black"
    ctx3.fillStyle = "black"
    ctx3.fillText("Dados:",20,20)
    if (c == 2)
    {
        ctx3.fillText("Eixo \'a\' :",20,65)
        ctx3.fillText("Comprimento: " + Eixos[0].comprimento + " mm",20,100)
        ctx3.fillText("Inclinação: " + Eixos[0].inclinação + "°",20,130)
    }
    if (c == 3 )
    {
        ctx3.fillText("Eixo \'b\' :",200,70)
        ctx3.fillText("Comprimento: " + Eixos[1].comprimento + " mm",200,100)
        ctx3.fillText("Inclinação: " + Eixos[1].inclinação + "°",200,130) 
        c = 1
    }

    ctx3.stroke() 
    ctx3.closePath() 

    let imgdadoseixos = ctx3.getImageData(0, 0, dadoseixos.width, dadoseixos.height); //Copia os dados para o canvas do resultado
    ctx12.putImageData(imgdadoseixos, 0, 0);
    
}

function corrigirdados()
{
    document.getElementById('botãoenviar').removeAttribute('disabled')
    document.getElementById('inclinação').setAttribute('disabled','true')
    document.getElementById('botãoenviar2').setAttribute('disabled','true')
    document.getElementById('botãocorrigir2').setAttribute('disabled','true')
    ctx.clearRect(0,0,desenhoeixos.width,desenhoeixos.height)
    desenhoinicial()
    ctx3.clearRect(0,0,dadoseixos.width,dadoseixos.height)
    ctx11.clearRect(0,0,imagemeixos.width,imagemeixos.height)
    ctx12.clearRect(0,0,imagemdadoseixos.width,imagemdadoseixos.height)
    Eixos = []
    c = 1
    document.getElementById('tabeladadosdoeixo').innerHTML = "Eixo a"
}


/*

DIVISÃO DE ENTRADA DE DADOS

*/

var Engrenagens = []
var Distancias = []
var contadoreixos = 1
var proximoeixo = 1
var numengrenagens = 1
var CE = -1 //Contador de engrenagens
var CT = 0 //Contador de trocas de eixo (serve para saber quantas engrenagens o sistema tem assim que o eixo é trocado)
var scalex = 1  // Fator de modificação da escala em X
var scaley = 1  // Fator de modificação da escala em Y
var engrenagem = {
    diametro : diametro,
    fi : fi, //Ângulo de pressão normal
    psi : psi,//Ângulo de hélice
    h : h,
    sentido : sentido,
}
var distancias = {
    d1 : d1,
    d2 : d2,
    d3 : d3,
}
var desenhoengrenagens=document.getElementById("tela2")
var ctx2=desenhoengrenagens.getContext("2d")
var dadosengrenagens=document.getElementById("tela4")
var ctx4=dadosengrenagens.getContext("2d")

//Imagens do sistema
var imagemeixoa=document.getElementById("eixoar")
var ctx13=imagemeixoa.getContext("2d")
var dadoseixoa=document.getElementById("dadoseixoa")
var ctx14=dadoseixoa.getContext("2d")

var imagemeixob=document.getElementById("eixobr")
var ctx15=imagemeixob.getContext("2d")
var dadoseixob=document.getElementById("dadoseixob")
var ctx16=dadoseixob.getContext("2d")

function desenhoinicial2()
{
    let rectx = 100
    let recty = 250

    ctx2.fillStyle = "black"
    ctx2.font = "18px arial"
    ctx2.fillText("Configuração ilustrativa!",20,30)

    ctx2.font = "12px arial"
    
    //Setas 
    ctx2.beginPath()
    ctx2.lineWidth = 2 
    ctx2.strokeStyle = "red"
    ctx2.fillStyle = "red"
    ctx2.moveTo(10,desenhoengrenagens.height-20) //Linha reta Z
    ctx2.lineTo(45,desenhoengrenagens.height-20)
    ctx2.moveTo(10,desenhoengrenagens.height-60) //Linha reta Y
    ctx2.lineTo(10,desenhoengrenagens.height-20)
    ctx2.moveTo(45,desenhoengrenagens.height-20) //Seta de Z
    ctx2.lineTo(37,desenhoengrenagens.height-24)
    ctx2.moveTo(45,desenhoengrenagens.height-20)
    ctx2.lineTo(37,desenhoengrenagens.height-16)
    ctx2.fillText("Z",35,desenhoengrenagens.height-30,15)
    ctx2.moveTo(10,desenhoengrenagens.height-60) //Seta de Y
    ctx2.lineTo(6,desenhoengrenagens.height-52)
    ctx2.moveTo(10,desenhoengrenagens.height-60)
    ctx2.lineTo(14,desenhoengrenagens.height-52)
    ctx2.fillText("Y",19,desenhoengrenagens.height-52,15)
    ctx2.stroke() 
    ctx2.closePath() 

    ctx2.beginPath() // Eixo
    ctx2.fillStyle = "black"
    ctx2.fillRect(rectx,recty,250,20)
    ctx2.fill()
    ctx2.closePath()

    ctx2.beginPath() // Mancais (O -10 serve para centralizar o desenho com a coordenada certa)
    ctx2.fillStyle = "red"
    ctx2.strokeStyle = "red"
    ctx2.lineWidth = 2
    ctx2.fillRect(rectx+ 50  - 10,recty,20,20) //Mancal 1
    ctx2.clearRect(rectx+ 50 +2 - 10,recty+2,16,16)
    ctx2.moveTo(rectx+ 50 +1 - 10,recty+1)
    ctx2.lineTo(rectx+ 50 +19 - 10,recty+19)
    ctx2.moveTo(rectx+ 50 +1 - 10,recty+19)
    ctx2.lineTo(rectx+ 50 +19 - 10,recty+1)

    ctx2.fillRect(rectx+ 200  - 10,recty,20,20) // Mancal 2
    ctx2.clearRect(rectx+ 200 +2 - 10,recty+2,16,16)
    ctx2.moveTo(rectx+ 200 +1 - 10,recty+1)
    ctx2.lineTo(rectx+ 200 +19 - 10,recty+19)
    ctx2.moveTo(rectx+ 200 +1 - 10,recty+19)
    ctx2.lineTo(rectx+ 200 +19 - 10,recty+1)
    ctx2.fill()
    ctx2.stroke()
    ctx2.closePath()

    ctx2.beginPath() // Engrenagem 1
    ctx2.fillStyle = "black"
    ctx2.lineWidth = 2
    ctx2.strokeStyle = "black"

    let espaçamento  = 50/4
    
    ctx2.fillRect(rectx+ 125  - 10,recty-(50/2),20,20 + 50)
    ctx2.clearRect(rectx+ 125 +2 - 10,recty-(50/2) + 2,16,20 + 50 - 4)

    ctx2.moveTo(rectx+ 125 +1 - 10,recty-(50/2)+1)
    ctx2.lineTo(rectx+ 125 +19 - 10,recty-(50/2)+1+18)
    ctx2.moveTo(rectx+ 125 +1 - 10,recty-(50/2)+1+espaçamento)
    ctx2.lineTo(rectx+ 125 +19 - 10,recty-(50/2)+1+espaçamento+18)
    ctx2.moveTo(rectx+ 125 +1 - 10,recty-(50/2)+1+espaçamento+espaçamento)
    ctx2.lineTo(rectx+ 125 +19 - 10,recty-(50/2)+1+espaçamento+espaçamento+18)
    ctx2.moveTo(rectx+ 125 +1 - 10,recty-(50/2)+1+espaçamento+espaçamento+espaçamento)
    ctx2.lineTo(rectx+ 125 +19 - 10,recty-(50/2)+1+espaçamento+espaçamento+espaçamento+18)
    ctx2.moveTo(rectx+ 125 +1 - 10,recty-(50/2)+1+espaçamento+espaçamento+espaçamento+espaçamento)
    ctx2.lineTo(rectx+ 125 +19 - 10,recty-(50/2)+1+espaçamento+espaçamento+espaçamento+espaçamento+18)

    ctx2.fill()
    ctx2.stroke()
    ctx2.closePath()


    ctx2.beginPath() // Cotas
    ctx2.fillStyle = "black"
    ctx2.lineWidth = 2
    ctx2.strokeStyle = "black"

    ctx2.moveTo(rectx + 125,recty - (50/2) - 5)//Barra direita da cota da engrenagem 1
    ctx2.lineTo(rectx + 125,recty - (50/2) - 25)

    ctx2.moveTo(rectx,recty - (50/2) - 15)//Barra transversal da cota da engrenagem 1
    ctx2.lineTo(rectx + 125,recty -(50/2) - 15)
    ctx2.fillText( 'D3',rectx + 125/2 - 10,recty - (50/2) - 20)
    
    ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
    ctx2.lineTo(rectx,recty - (50/2) - 25)

    ctx2.moveTo(rectx,recty + 25)//Barra esquerda da cota geral
    ctx2.lineTo(rectx,recty + 115 + (100/2))

    ctx2.moveTo(rectx + 250,recty + 25)//Barra direita da cota do eixo
    ctx2.lineTo(rectx + 250,recty + 115 + (100/2))

    ctx2.moveTo(rectx,recty + 105 + (100/2))//Barra transversal da cota do eixo
    ctx2.lineTo(rectx + 250,recty + 105 + (100/2))
    ctx2.fillText('Comp. eixo',rectx + (250/2) - 30,recty + 100 + (100/2))
    
    
    ctx2.moveTo(rectx + 50 ,recty + 25)//Barra direita da cota do mancal 1
    ctx2.lineTo(rectx + 50 ,recty + 50 + (100/2)) 
        
    ctx2.moveTo(rectx ,recty + 40 + (100/2))//Barra transversal da cota do mancal 1
    ctx2.lineTo(rectx + 50 ,recty + 40 + (100/2))
    ctx2.fillText('D1' ,rectx + 50/2 - 8,recty + 35 + (100/2)) 

    ctx2.moveTo(rectx + 200 ,recty + 25)//Barra direita da cota do mancal 2
    ctx2.lineTo(rectx + 200 ,recty + 80 + (100/2))
        
    ctx2.moveTo(rectx,recty + 70 + (100/2))//Barra transversal da cota do mancal 2
    ctx2.lineTo(rectx + 200 ,recty + 70 + (100/2))
    ctx2.fillText('D2' ,rectx + 200/2 - 10,recty + 65 + (100/2))

    ctx2.fill()
    ctx2.stroke()
    ctx2.closePath()

}

function confirmar2 () 
{
    proximoeixo = proximoeixo + 1
    
    if (proximoeixo == 2)
    {
        numengrenagens = 1
    }

    c = 1
    contadoreixos = contadoreixos + 1

    CT = Engrenagens.length
    
    document.getElementById('nengrenagens').innerHTML = "Número de engrenagens: " + numengrenagens
    if (contadoreixos == 1)
    {
        document.getElementById('cabeçadoformulario').innerHTML = "Eixo a"
    }
    else if (contadoreixos == 2)
    {
        document.getElementById('cabeçadoformulario').innerHTML = "Eixo b" 
    }

    document.getElementById('tabeladadosdaengrenagem').innerHTML = "Engrenagem " + c
    document.getElementById('confirmar2').setAttribute('disabled','true')
    document.getElementById('botãoenviar2').removeAttribute('disabled')

    ctx2.scale(1,1)
    ctx2.clearRect(0,0,desenhoengrenagens.width,desenhoengrenagens.height)

    desenhoinicial2()
    
}

function esconderpsi()
{
    document.getElementById('psi').setAttribute('disabled','true')   
}
function mostrarpsi()
{
    document.getElementById('psi').removeAttribute('disabled') 
}
function detdiametro() //Atualiza o diâmetro ao editar os valores de z e m
{
    let z = Math.abs(document.getElementById('z').value) //Número de dentes

    //Módulo
    if (CT == 0)
    {
        var mdetd = Math.abs(document.getElementById('m').value) 
    }
    else if (CT == 1)
    {
        var mdetd = Engrenagens[0].m
    }

    let diametro = mdetd*z //(diametro)

    if (diametro == 0)
    {
        document.getElementById('diametro').innerHTML = "Diâmetro: "
    }
    else
    {
        document.getElementById('diametro').innerHTML = "Diâmetro: " + diametro + " mm"
    }
}

function enviardados2 ()
{
    if (document.querySelector('input[name="sentidodahelice"]:checked') == null)
    {
        alert("Selecione o sentido da hélice!")
    }
    else if (document.querySelector('input[name="sentidoderotação"]:checked') == null)
    {
        alert("Selecione o sentido de rotação!")
    }
    else if (c == 1 && document.getElementById('d1').value == document.getElementById('d2').value)
    {
        alert("Existem dois elementos em uma mesma posição!")
    }
    else if (c == 1 && document.getElementById('d1').value == document.getElementById('d3').value)
    {
        alert("Existem dois elementos em uma mesma posição!")
    }
    else if (c == 1 && document.getElementById('d2').value == document.getElementById('d3').value)
    {
        alert("Existem dois elementos em uma mesma posição!")
    }
    else if (document.getElementById('d1').value > Eixos[(contadoreixos - 1)].comprimento)
    {
        alert("O valor de D1 é maior que o comprimento do eixo!")
    } 
    else if (document.getElementById('d2').value > Eixos[(contadoreixos - 1)].comprimento)
    {
        alert("O valor de D2 é maior que o comprimento do eixo!")
    }
    else if (document.getElementById('d3').value > Eixos[(contadoreixos - 1)].comprimento)
    {
        alert("O valor de D3 é maior que o comprimento do eixo!")
    }
    else
    {
        var controle = numengrenagens + 1
        
        //NUMERO DE DENTES
        let z = Math.abs(document.getElementById('z').value) //Número de dentes

        //MODULO
        if (contadoreixos == 1) //Lê o valor de m e desabilita para o par
        {
            var m = Math.abs(document.getElementById('m').value) //Módulo
            document.getElementById('m').setAttribute('disabled','true')
        }
        else 
        {
            var m = Engrenagens[0].m
        }

        //DIAMETRO
        let diametro = m*z //(diametro)

        //FI
        if (contadoreixos == 1) //Lê o valor de fi e desabilita para o resto do sistema (não será usado)
        {
            var fi = Math.abs(document.getElementById('fi').value) //(fi)
            document.getElementById('fi').setAttribute('disabled','true')
        }
        else
        {
            var fi = Engrenagens[0].fi
        }

        //SENTIDO
        if (contadoreixos == 1) //Lê o sentido de rotação inicial e define o restante (Sentido)
        {  
            var sentido = document.querySelector('input[name="sentidoderotação"]:checked').value 
            if (sentido == "horario")
            {
                document.getElementById('sentido2').setAttribute('checked','true') 
                document.getElementById('sentido').setAttribute('disabled','true')
            }
            else if (sentido == "antihorario")
            {
                document.getElementById('sentido').setAttribute('checked','true')
                document.getElementById('sentido2').setAttribute('disabled','true')
            }
        }
        else if (contadoreixos == 2) // Deve entrar uma lógica que varia de acordo com o sistema
        {
            
            if (Engrenagens[0].sentido == "horario") // Nesse caso sempore vão existir 2 engrenagens nesse eixo
            {
                var sentido = "antihorario"
            }
            else if (Engrenagens[0].sentido == "antihorario")
            {
                var sentido = "horario"
            }

            document.getElementById('sentido').removeAttribute('disabled')
            document.getElementById('sentido2').removeAttribute('disabled')
            document.getElementById('sentido').removeAttribute('checked')
            document.getElementById('sentido2').removeAttribute('checked')
        }

        //H
        if (contadoreixos == 1) //Lê o sentido de hélice e define o par (h)
        {  
            var h = document.querySelector('input[name="sentidodahelice"]:checked').value 
            if (h == "destra")
            {
                document.getElementById('hs').setAttribute('checked','true')
                document.getElementById('hd').setAttribute('disabled','true')
                document.getElementById('h').setAttribute('disabled','true')
            }
            else if (h == "sestra")
            {
                document.getElementById('hd').setAttribute('checked','true')
                document.getElementById('hs').setAttribute('disabled','true')
                document.getElementById('h').setAttribute('disabled','true')
            }
            else if (h == "reta")
            {
                document.getElementById('h').setAttribute('checked','true')
                document.getElementById('hd').setAttribute('disabled','true')
                document.getElementById('hs').setAttribute('disabled','true')
            }
        }
        else if (contadoreixos == 2) // Deve entrar uma lógica que varia de acordo com o sistema
        {
            document.getElementById('hd').removeAttribute('checked')
            document.getElementById('hs').removeAttribute('checked')
            document.getElementById('h').removeAttribute('checked')
            document.getElementById('hd').removeAttribute('disabled')
            document.getElementById('hs').removeAttribute('disabled')
            document.getElementById('h').removeAttribute('disabled')

            if (Engrenagens[0].h == "destra")
            {
                var h = "sestra"

                document.getElementById('hd').setAttribute('checked','true')
                document.getElementById('hs').setAttribute('disabled','true')
                document.getElementById('h').setAttribute('disabled','true')
            }
            else if (Engrenagens[0].h == "sestra")
            {
                var h = "destra"

                document.getElementById('hs').setAttribute('checked','true')
                document.getElementById('hd').setAttribute('disabled','true')
                document.getElementById('h').setAttribute('disabled','true')
            }
            else if (Engrenagens[0].h == "reta")
            {
                var h = "reta"

                document.getElementById('h').setAttribute('checked','true')
                document.getElementById('hd').setAttribute('disabled','true')
                document.getElementById('hs').setAttribute('disabled','true')
            } 

            document.getElementById('hd').removeAttribute('checked')
            document.getElementById('hs').removeAttribute('checked')
            document.getElementById('h').removeAttribute('checked')
            document.getElementById('hd').removeAttribute('disabled')
            document.getElementById('hs').removeAttribute('disabled')
            document.getElementById('h').removeAttribute('disabled')
        }

        //PSI
        if (h == "reta") //Lê psi e desabilita se for engrenagem reta (h)
        {
            var psi = 0  
        }
        else //Lê psi e define o do par 
        {
            if (contadoreixos == 1)
            {
                var psi = Math.abs(document.getElementById('psi').value)
                document.getElementById('psi').setAttribute('disabled','true')
            }
            else if (contadoreixos == 2)
            {
                var psi = Engrenagens[0].psi
                document.getElementById('psi').removeAttribute('disabled') 
            }
        }

        //DISTANCIAS
        let d1 = Math.abs(document.getElementById('d1').value)
        let d2 = Math.abs(document.getElementById('d2').value)
        let d3 = Math.abs(document.getElementById('d3').value)
        
        var engrenagem = {
            z : z,
            m : m,
            diametro : Number(diametro),
            fi : fi, //Ângulo de pressão normal
            psi : psi,//Ângulo de hélice
            h : h,// Sentido da hélice
            sentido : sentido, //Sentido de rotação
        }
        var distancias = {
            d1 : Number(d1),
            d2 : Number(d2),
            d3 : Number(d3),
        }
        Engrenagens.push(engrenagem)
        Distancias.push(distancias)

        document.getElementById('diametro').innerHTML = "Diâmetro: "
        document.getElementById("formengrenagens").reset()
        
        CE = CE + 1 //Variável que conta o numero total de engrenagens, começa como -1
        c = c + 1

        desenharsistema() //Faz o desenho do sistema
        dadosdaengrenagem() //Mostra os dados

        if (contadoreixos == 1)
        {
            let imgeixoa = ctx2.getImageData(0, 0, desenhoengrenagens.width, desenhoengrenagens.height); //Copia os dados para o canvas do resultado
            ctx13.putImageData(imgeixoa, 0, 0);

            let imgdadoseixoa = ctx4.getImageData(0, 0, 280, dadosengrenagens.height); //Copia os dados para o canvas do resultado
            ctx14.putImageData(imgdadoseixoa, 0, 0);
        }
        else if (contadoreixos == 2)
        {
            let imgeixob = ctx2.getImageData(0, 0, desenhoengrenagens.width, desenhoengrenagens.height); //Copia os dados para o canvas do resultado
            ctx15.putImageData(imgeixob, 0, 0);

            let imgdadoseixob = ctx4.getImageData(280, 0, 820, dadosengrenagens.height); //Copia os dados para o canvas do resultado
            ctx16.putImageData(imgdadoseixob, 0, 0);
        }
        else if (contadoreixos == 3)
        {
            let imgeixoc = ctx2.getImageData(0, 0, desenhoengrenagens.width, desenhoengrenagens.height); //Copia os dados para o canvas do resultado
            ctx17.putImageData(imgeixoc, 0, 0);

            let imgdadoseixoc = ctx4.getImageData(820, 0, dadosengrenagens.width, dadosengrenagens.height); //Copia os dados para o canvas do resultado
            ctx18.putImageData(imgdadoseixoc, 0, 0);
        }
        
        if (c == controle)
        {
            if (contadoreixos == Eixos.length)
            {
                document.getElementById('botãoenviar2').setAttribute('disabled','true')
                document.getElementById('botãocalcular').removeAttribute('disabled')
            }
            else
            {
                document.getElementById('botãoenviar2').setAttribute('disabled','true')
                document.getElementById('tabeladadosdaengrenagem').innerHTML = "Engrenagem " + (c-1)
                document.getElementById('confirmar2').removeAttribute('disabled')
            }
        } 
    }
}

function desenharsistema ()
{
    let rectx = 100
    let recty = 250

    ctx2.fillStyle = "black"
    ctx2.font = "14px arial"
    ctx2.scale(1,1)
    ctx2.save() //Salva os dados de escala

    if (c < 3)
    {
        ctx2.clearRect(0,0,desenhoengrenagens.width,desenhoengrenagens.height)
    }


    //Setas 
    ctx2.beginPath()
    ctx2.lineWidth = 2 
    ctx2.strokeStyle = "red"
    ctx2.fillStyle = "red"
    ctx2.moveTo(10,desenhoengrenagens.height-20) //Linha reta Z
    ctx2.lineTo(45,desenhoengrenagens.height-20)
    ctx2.moveTo(10,desenhoengrenagens.height-60) //Linha reta Y
    ctx2.lineTo(10,desenhoengrenagens.height-20)
    ctx2.moveTo(45,desenhoengrenagens.height-20) //Seta de Z
    ctx2.lineTo(37,desenhoengrenagens.height-24)
    ctx2.moveTo(45,desenhoengrenagens.height-20)
    ctx2.lineTo(37,desenhoengrenagens.height-16)
    ctx2.fillText("Z",35,desenhoengrenagens.height-30,15)
    ctx2.moveTo(10,desenhoengrenagens.height-60) //Seta de Y
    ctx2.lineTo(6,desenhoengrenagens.height-52)
    ctx2.moveTo(10,desenhoengrenagens.height-60)
    ctx2.lineTo(14,desenhoengrenagens.height-52)
    ctx2.fillText("Y",19,desenhoengrenagens.height-52,15)
    ctx2.stroke() 
    ctx2.closePath()

    //Define uma nova escala caso os elementos sejam maiores que o canvas
    if (Eixos[(contadoreixos - 1)].comprimento > 450)
    {
        let scalex = 450/(Eixos[(contadoreixos - 1)].comprimento)
        rectx = rectx/scalex
        ctx2.scale(scalex,scaley)
    }
    if (Engrenagens[CE].diametro > 300)
    {
        let scaley = 300/Engrenagens[CE].diametro
        recty = recty/scaley
        ctx2.scale(scalex,scaley)
    }
    
    ctx2.beginPath() // Cotas
    ctx2.fillStyle = "black"
    ctx2.lineWidth = 2
    ctx2.strokeStyle = "black"
    cotas(rectx,recty,CE,CT)
    ctx2.fill()
    ctx2.stroke()
    ctx2.closePath()
    

    if (c < 3)
    {
        ctx2.beginPath() // Eixo
        ctx2.fillStyle = "black"
        ctx2.fillRect(rectx,recty,Eixos[(contadoreixos - 1)].comprimento,20)
        ctx2.fill()
        ctx2.closePath()

        ctx2.beginPath() // Mancais (O -10 serve para centralizar o desenho com a coordenada certa)
        ctx2.fillStyle = "red"
        ctx2.strokeStyle = "red"
        ctx2.lineWidth = 2
        ctx2.fillRect(rectx+Distancias[CT].d1 - 10,recty,20,20) //Mancal 1
        ctx2.clearRect(rectx+Distancias[CT].d1+2 - 10,recty+2,16,16)
        ctx2.moveTo(rectx+Distancias[CT].d1+1 - 10,recty+1)
        ctx2.lineTo(rectx+Distancias[CT].d1+19 - 10,recty+19)
        ctx2.moveTo(rectx+Distancias[CT].d1+1 - 10,recty+19)
        ctx2.lineTo(rectx+Distancias[CT].d1+19 - 10,recty+1)

        ctx2.fillRect(rectx+Distancias[CT].d2 - 10,recty,20,20) // Mancal 2
        ctx2.clearRect(rectx+Distancias[CT].d2+2 - 10,recty+2,16,16)
        ctx2.moveTo(rectx+Distancias[CT].d2+1 - 10,recty+1)
        ctx2.lineTo(rectx+Distancias[CT].d2+19 - 10,recty+19)
        ctx2.moveTo(rectx+Distancias[CT].d2+1 - 10,recty+19)
        ctx2.lineTo(rectx+Distancias[CT].d2+19 - 10,recty+1)
        
        ctx2.fill()
        ctx2.stroke()
        ctx2.closePath() 

        ctx2.beginPath() // Engrenagem 1
        ctx2.fillStyle = "black"
        ctx2.lineWidth = 2
        ctx2.strokeStyle = "black"
        engrenagens(rectx,recty,Distancias[CE].d3,Engrenagens[CE].diametro,CE); //SI
        ctx2.fill()
        ctx2.stroke()
        ctx2.closePath() 
    }
    //Engrenagem 2
    if (c == 3)
    {
        if (Distancias[CE].d4 == 0 || Distancias[CE].d4 == Eixos[(contadoreixos - 1)].comprimento) //Correção na barra da cota
        {
            ctx2.beginPath()
            ctx2.fillStyle = "black"
            ctx2.lineWidth = 2
            ctx2.strokeStyle = "black"
            engrenagens(rectx,recty,Distancias[CE].d4,Engrenagens[CE].diametro,CE); //SI
            ctx2.clearRect(rectx+Distancias[CE].d4 - 10, recty+(Engrenagens[CE].diametro/2)+20,20,5)
            ctx2.clearRect(rectx+Distancias[CE].d4 - 10, recty-(Engrenagens[CE].diametro/2),20,-5)
            ctx2.fill()
            ctx2.stroke()
            ctx2.closePath()
        }
        else
        {
            ctx2.beginPath()
            ctx2.fillStyle = "black"
            ctx2.lineWidth = 2
            ctx2.strokeStyle = "black"
            engrenagens(rectx,recty,Distancias[CE].d4,Engrenagens[CE].diametro,CE); //SI
            ctx2.fill()
            ctx2.stroke()
            ctx2.closePath()  
        }
    }
    ctx2.restore() // Restaura os dados de escala originais para não bugar o clear
}

function engrenagens (rectx,recty,distancia,diametro,X)
{
//Obs: O -10 serve para centralizar o desenho com a distancia correta
    ctx2.fillRect(rectx+distancia - 10,recty-(diametro/2),20,20+diametro)
    ctx2.clearRect(rectx+distancia+2 - 10,recty-(diametro/2)+2,16,20+diametro-4)

    let espaçamento  = diametro/4
    let espaçamento2 = (diametro+20)/6
    
    if (Engrenagens[X].h == "destra")
    {

        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+1)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+18)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+18)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+18)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+18)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+espaçamento+18)
    }
    
    else if (Engrenagens[X].h == "sestra")
    {

        ctx2.moveTo(rectx+distancia+19 - 10,recty-(diametro/2)+1)
        ctx2.lineTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+18)
        ctx2.moveTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento)
        ctx2.lineTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+18)
        ctx2.moveTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+18)
        ctx2.moveTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+18)
        ctx2.moveTo(rectx+distancia+19 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+espaçamento)
        ctx2.lineTo(rectx+distancia+1 - 10,recty-(diametro/2)+1+espaçamento+espaçamento+espaçamento+espaçamento+18)
    }
    else if (Engrenagens[X].h == "reta")
    {
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+espaçamento2)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+espaçamento2)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+espaçamento2+espaçamento2)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+espaçamento2+espaçamento2)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2+espaçamento2)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2+espaçamento2)
        ctx2.moveTo(rectx+distancia+1 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2+espaçamento2+espaçamento2)
        ctx2.lineTo(rectx+distancia+19 - 10,recty-(diametro/2)+espaçamento2+espaçamento2+espaçamento2+espaçamento2+espaçamento2)  
    }
}

function cotas (rectx,recty,CE,CT)
{

    //Marcação dos mancais
    ctx2.font = "12px arial"
    if(contadoreixos == 1)
    {
        if (Distancias[CE].d1 == 0)
        {
            ctx2.fillText( 'A',rectx - 25,recty + 15)
        }
        else
        {
            ctx2.fillText( 'A',rectx + Distancias[CE].d1 - 5,recty - 5)
        }
        if (Distancias[CE].d2 == Eixos[(contadoreixos - 1)].comprimento)
        {
            ctx2.fillText( 'B',rectx + Eixos[(contadoreixos - 1)].comprimento + 15,recty + 15)
        }
        else
        {
            ctx2.fillText( 'B',rectx + Distancias[CE].d2 - 5,recty - 5)
        } 
    } 
    if(contadoreixos == 2 && CE == 1)
    {
        if (Distancias[CE].d1 == 0)
        {
            ctx2.fillText( 'C',rectx - 25,recty + 15)
        }
        else
        {
            ctx2.fillText( 'C',rectx + Distancias[CE].d1 - 5,recty - 5)
        }
        if (Distancias[CE].d2 == Eixos[(contadoreixos - 1)].comprimento)
        {
            ctx2.fillText( 'D',rectx + Eixos[(contadoreixos - 1)].comprimento + 15,recty + 15)
        }
        else
        {
            ctx2.fillText( 'D',rectx + Distancias[CE].d2 - 5,recty - 5)
        }   
    } 
    if(contadoreixos == 3)
    {
        if (Distancias[CE].d1 == 0)
        {
            ctx2.fillText( 'E',rectx - 25,recty + 15)
        }
        else
        {
            ctx2.fillText( 'E',rectx + Distancias[CE].d1 - 5,recty - 5)
        }
        if (Distancias[CE].d2 == Eixos[(contadoreixos - 1)].comprimento)
        {
            ctx2.fillText( 'F',rectx + Eixos[(contadoreixos - 1)].comprimento + 15,recty + 15)
        }
        else
        {
            ctx2.fillText( 'F',rectx + Distancias[CE].d2 - 5,recty - 5)
        } 
    } 
    ctx2.font = "14px arial"   

    //Engrenagem 1, eixo e mancais
    if(c < 3)
    {
        ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 1
        ctx2.lineTo(rectx,recty - (Engrenagens[CE].diametro/2) - 25)
    
        ctx2.moveTo(rectx + Distancias[CE].d3,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 1
        ctx2.lineTo(rectx + Distancias[CE].d3,recty - (Engrenagens[CE].diametro/2) - 25)
    
        ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 15)//Barra transversal da cota da engrenagem 1
        ctx2.lineTo(rectx + Distancias[CE].d3,recty -(Engrenagens[CE].diametro/2) - 15)
    
        if (Distancias[CE].d3 == 0)
        {
            ctx2.fillText( Distancias[CE].d3,rectx + Distancias[CE].d3/2 + 5,recty - (Engrenagens[CE].diametro/2) - 20)
        }
        else
        {
            ctx2.fillText( Distancias[CE].d3,rectx + Distancias[CE].d3/2 - 10,recty - (Engrenagens[CE].diametro/2) - 20)
        }
        
        if (Distancias[CE].d3 == 0)
        {
            ctx2.moveTo(rectx,recty + (Engrenagens[CE].diametro/2) + 25)//Barra esquerda da cota geral
            ctx2.lineTo(rectx,recty + 115 + (Engrenagens[CE].diametro/2))  
        }
        else
        {
            ctx2.moveTo(rectx,recty + 25)//Barra esquerda da cota geral
            ctx2.lineTo(rectx,recty + 115 + (Engrenagens[CE].diametro/2))
        }

        if (Distancias[CE].d3 == Eixos[(contadoreixos - 1)].comprimento)
        {
            ctx2.moveTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + (Engrenagens[CE].diametro/2) + 25)//Barra direita da cota do eixo
            ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 115 + (Engrenagens[CE].diametro/2))
        }
        else
        {
            ctx2.moveTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 25)//Barra direita da cota do eixo
            ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 115 + (Engrenagens[CE].diametro/2)) 
        }
    
        ctx2.moveTo(rectx,recty + 105 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do eixo
        ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 105 + (Engrenagens[CE].diametro/2))
        ctx2.fillText(Eixos[(contadoreixos - 1)].comprimento,rectx + (Eixos[(contadoreixos - 1)].comprimento)/2 - 10,recty + 100 + (Engrenagens[CE].diametro/2))
    
    
        ctx2.moveTo(rectx + Distancias[CT].d1,recty + 25)//Barra direita da cota do mancal 1
        ctx2.lineTo(rectx + Distancias[CT].d1,recty + 50 + (Engrenagens[CE].diametro/2)) 
        
        ctx2.moveTo(rectx ,recty + 40 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do mancal 1
        ctx2.lineTo(rectx + Distancias[CT].d1,recty + 40 + (Engrenagens[CE].diametro/2)) 
        if (Distancias[CT].d1 == 0)
        {
            ctx2.fillText(Distancias[CT].d1, rectx + Distancias[CT].d1/2 + 5,recty + 35 + (Engrenagens[CE].diametro/2))
        }
        else
        {
            ctx2.fillText(Distancias[CT].d1, rectx + Distancias[CT].d1/2 - 5,recty + 35 + (Engrenagens[CE].diametro/2))
        }
    
        ctx2.moveTo(rectx + Distancias[CT].d2,recty + 25)//Barra direita da cota do mancal 2
        ctx2.lineTo(rectx + Distancias[CT].d2,recty + 80 + (Engrenagens[CE].diametro/2))
        
        ctx2.moveTo(rectx,recty + 70 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do mancal 2
        ctx2.lineTo(rectx + Distancias[CT].d2,recty + 70 + (Engrenagens[CE].diametro/2))
        ctx2.fillText(Distancias[CT].d2,rectx + Distancias[CT].d2/2 - 10,recty + 65 + (Engrenagens[CE].diametro/2))
    } 


    //Engrenagem 2

    if(c == 3 && Engrenagens[CE].diametro > Engrenagens[CE-1].diametro)
    {
    
        ctx2.clearRect(rectx-1,recty + 24 + (Engrenagens[CE-1].diametro/2),desenhoengrenagens.width,desenhoengrenagens.height) //apagar até final do canvas
        
        if (Distancias[CE-1].d3 > Distancias[CE].d4)
        {
            ctx2.clearRect(rectx-1, 0,desenhoengrenagens.width, recty - (Engrenagens[CE-1].diametro/2) - 12)//apagar até final do canvas
    
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
            ctx2.lineTo(rectx,recty - (Engrenagens[CE].diametro/2) - 25)
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 25)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 15)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE].diametro/2) - 15)
    
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 10,recty - (Engrenagens[CE].diametro/2) - 20) //Cota da engrenagem 2
    
    
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 1
            ctx2.lineTo(rectx,recty - (Engrenagens[CE].diametro/2) - 55)
    
            ctx2.moveTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 5)//Barra direita da cota da engrenagem 1
            ctx2.lineTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE].diametro/2) - 55)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 45)//Barra transversal da cota da engrenagem 1
            ctx2.lineTo(rectx + Distancias[CE-1].d3,recty -(Engrenagens[CE].diametro/2) - 45)
            if (Distancias[CE-1].d3 == 0)
            {
                ctx2.fillText( Distancias[CE-1].d3,rectx + Distancias[CE-1].d3/2 + 5,recty - (Engrenagens[CE].diametro/2) - 50) //Cota da engrenagem 1
            }
            else
            {
                ctx2.fillText( Distancias[CE-1].d3,rectx + Distancias[CE-1].d3/2 - 10,recty - (Engrenagens[CE].diametro/2) - 50) //Cota da engrenagem 1
            }
        }
        else if ((Engrenagens[CE].diametro/2) - (Engrenagens[CE-1].diametro/2) < 30) //Nesse caso deve-se ter um espaçamento mínimo entre as cotas
        {
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
            ctx2.lineTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 45)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE-1].diametro/2) - 45)
    
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 10,recty - (Engrenagens[CE-1].diametro/2) - 50)
        }
        else if (Distancias[CE-1].d3 < Distancias[CE].d4 && Distancias[CE].d4 !== 0)
        {
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
            ctx2.lineTo(rectx,recty - (Engrenagens[CE].diametro/2) - 25)
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 25)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 15)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE].diametro/2) - 15)
    
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 10,recty - (Engrenagens[CE].diametro/2) - 20) //Cota da engrenagem 2
        }
        
        if (Distancias[CE-1].d3 == 0) //Engrenagem 1 na ponta inicial do eixo
        {
            ctx2.moveTo(rectx,recty + (Engrenagens[CE-1].diametro/2) + 25)//Barra esquerda da cota geral
            ctx2.lineTo(rectx,recty + 115 + (Engrenagens[CE].diametro/2))
        }
        else if (Distancias[CE].d4 == 0) //Engrenagem 2 na ponta inicial do eixo
        {
            ctx2.moveTo(rectx,recty + (Engrenagens[CE].diametro/2) + 25)//Barra esquerda da cota geral
            ctx2.lineTo(rectx,recty + 115 + (Engrenagens[CE].diametro/2))  
        }
        else
        {
            ctx2.moveTo(rectx,recty + 25)//Barra esquerda da cota geral
            ctx2.lineTo(rectx,recty + 115 + (Engrenagens[CE].diametro/2))
        }
    
        if (Distancias[CE-1].d3 == Eixos[(contadoreixos - 1)].comprimento) //Engrenagem 1 na ponta final do eixo
        {
            ctx2.moveTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + (Engrenagens[CE-1].diametro/2) + 25)//Barra direita da cota do eixo
            ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 115 + (Engrenagens[CE].diametro/2))
        }
        else if (Distancias[CE].d4 == Eixos[(contadoreixos - 1)].comprimento) // Engrenagem 2 na ponta final do eixo
        {
            ctx2.moveTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + (Engrenagens[CE].diametro/2) + 25)//Barra direita da cota do eixo
            ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 115 + (Engrenagens[CE].diametro/2))
        }
        else
        {
            ctx2.moveTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 25)//Barra direita da cota do eixo
            ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 115 + (Engrenagens[CE].diametro/2)) 
        }
    
        ctx2.moveTo(rectx,recty + 105 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do eixo
        ctx2.lineTo(rectx + Eixos[(contadoreixos - 1)].comprimento,recty + 105 + (Engrenagens[CE].diametro/2))
        ctx2.fillText(Eixos[(contadoreixos - 1)].comprimento,rectx + (Eixos[(contadoreixos - 1)].comprimento)/2 - 10,recty + 100 + (Engrenagens[CE].diametro/2))
    
    
        ctx2.moveTo(rectx + Distancias[CT].d1,recty + 25)//Barra direita da cota do mancal 1
        ctx2.lineTo(rectx + Distancias[CT].d1,recty + 50 + (Engrenagens[CE].diametro/2)) 
        
        ctx2.moveTo(rectx ,recty + 40 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do mancal 1
        ctx2.lineTo(rectx + Distancias[CT].d1,recty + 40 + (Engrenagens[CE].diametro/2)) 
        if (Distancias[CT].d1 == 0)
        {
            ctx2.fillText(Distancias[CT].d1, rectx + Distancias[CT].d1/2 + 5,recty + 35 + (Engrenagens[CE].diametro/2))
        }
        else
        {
            ctx2.fillText(Distancias[CT].d1, rectx + Distancias[CT].d1/2 - 5,recty + 35 + (Engrenagens[CE].diametro/2))
        }
    
        ctx2.moveTo(rectx + Distancias[CT].d2,recty + 25)//Barra direita da cota do mancal 2
        ctx2.lineTo(rectx + Distancias[CT].d2,recty + 80 + (Engrenagens[CE].diametro/2))
        
        ctx2.moveTo(rectx,recty + 70 + (Engrenagens[CE].diametro/2))//Barra transversal da cota do mancal 2
        ctx2.lineTo(rectx + Distancias[CT].d2,recty + 70 + (Engrenagens[CE].diametro/2))
        ctx2.fillText(Distancias[CT].d2,rectx + Distancias[CT].d2/2 - 10,recty + 65 + (Engrenagens[CE].diametro/2))
    }
    
    if (c == 3 && Engrenagens[CE].diametro < Engrenagens[CE-1].diametro)
    {
        if (Distancias[CE].d4 < Distancias[CE-1].d3)
        {
            if ((Engrenagens[CE-1].diametro/2) - (Engrenagens[CE].diametro/2) < 30)
            {
                ctx2.clearRect(rectx-1, 0,desenhoengrenagens.width, recty - (Engrenagens[CE-1].diametro/2) - 3)//apagar cota da engrenagem 1

                ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 1
                ctx2.lineTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 55)
        
                ctx2.moveTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 5)//Barra direita da cota da engrenagem 1
                ctx2.lineTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 55)
        
                ctx2.moveTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 45)//Barra transversal da cota da engrenagem 1
                ctx2.lineTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 45)
        
                ctx2.fillText( Distancias[CE-1].d3,rectx + Distancias[CE-1].d3/2 - 10,recty - (Engrenagens[CE-1].diametro/2) - 50)
            }

            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 25)
            
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 15)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE].diametro/2) - 15)
            
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 5,recty - (Engrenagens[CE].diametro/2) - 20) //Cota da engrenagem 2 
        }
        else
        {
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
            ctx2.lineTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 45)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE-1].diametro/2) - 45)
    
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 5,recty - (Engrenagens[CE-1].diametro/2) - 50)
        }
    }

    if (c == 3 && Engrenagens[CE].diametro == Engrenagens[CE-1].diametro)
    {
        if (Distancias[CE].d4 < Distancias[CE-1].d3)
        {
            ctx2.clearRect(rectx-1, 0,desenhoengrenagens.width, recty - (Engrenagens[CE-1].diametro/2) - 3)
    
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 1
            ctx2.lineTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 5)//Barra direita da cota da engrenagem 1
            ctx2.lineTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 55)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE-1].diametro/2) - 45)//Barra transversal da cota da engrenagem 1
            ctx2.lineTo(rectx + Distancias[CE-1].d3,recty - (Engrenagens[CE-1].diametro/2) - 45)
    
            ctx2.fillText( Distancias[CE-1].d3,rectx + Distancias[CE-1].d3/2 - 10,recty - (Engrenagens[CE-1].diametro/2) - 50) //Cota da engrenagem 1
    
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 25)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 15)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE].diametro/2) - 15)
            
            if (Distancias[CE].d4 == 0)
            {
                ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 + 5,recty - (Engrenagens[CE].diametro/2) - 20) //Cota da engrenagem 2
            }
            else
            {
                ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 10,recty - (Engrenagens[CE].diametro/2) - 20) //Cota da engrenagem 2
            }
        }
        else
        {
            ctx2.moveTo(rectx,recty - 5)//Barra esquerda da cota da engrenagem 2
            ctx2.lineTo(rectx,recty - (Engrenagens[CE].diametro/2) - 55)
    
            ctx2.moveTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 5)//Barra direita da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty - (Engrenagens[CE].diametro/2) - 55)
    
            ctx2.moveTo(rectx,recty - (Engrenagens[CE].diametro/2) - 45)//Barra transversal da cota da engrenagem 2
            ctx2.lineTo(rectx + Distancias[CE].d4,recty -(Engrenagens[CE].diametro/2) - 45)
    
            ctx2.fillText( Distancias[CE].d4,rectx + Distancias[CE].d4/2 - 5,recty - (Engrenagens[CE].diametro/2) - 50)
        }
    }
}

function dadosdaengrenagem ()
{

    ctx4.font = "15px Arial"

    //Desenho dos dados
    ctx4.beginPath()
    ctx4.lineWidth = 2 
    ctx4.strokeStyle = "black"
    ctx4.fillStyle = "black"
    ctx4.fillText("Dados:",20,20)

    if (contadoreixos == 1)
    {
        ctx4.fillText("Eixo \'a\':",20,55)
        if (c < 3)
        {
            ctx4.fillText("Engrenagem 2:",20,75)
            ctx4.fillText("- Número de dentes: " + Engrenagens[CE].z ,20,110)
            ctx4.fillText("- Módulo: " + Engrenagens[CE].m + " mm",20,135)
            ctx4.fillText("- Diâmetro: " + Engrenagens[CE].diametro + " mm",20,160)
            ctx4.fillText("- Sentido da hélice: " + Engrenagens[CE].h,20,185)
            ctx4.fillText("- Ângulo de pressão normal: " + Engrenagens[CE].fi + "°",20,210)
            ctx4.fillText("- Ângulo de hélice: " + Engrenagens[CE].psi + "°",20,235)
            ctx4.fillText("- Sentido de rotação: " + Engrenagens[CE].sentido,20,260)
            ctx4.fillText("- Distância do início do eixo: " + Distancias[CE].d3  + " mm",20,285)
        }
    }
    if (contadoreixos == 2)
    {
        ctx4.fillText("Eixo \'b\':",290,50)
        if (c < 3)
        {
            ctx4.fillText("Engrenagem 3:",290,70)
            ctx4.fillText("- Número de dentes: " + Engrenagens[CE].z ,290,110)
            ctx4.fillText("- Módulo: " + Engrenagens[CE].m + " mm",290,135)
            ctx4.fillText("- Diâmetro: " + Engrenagens[CE].diametro + " mm",290,160)
            ctx4.fillText("- Sentido da hélice: " + Engrenagens[CE].h,290,185)
            ctx4.fillText("- Ângulo de pressão normal: " + Engrenagens[CE].fi + "°",290,210)
            ctx4.fillText("- Ângulo de hélice: " + Engrenagens[CE].psi + "°",290,235)
            ctx4.fillText("- Sentido de rotação: " + Engrenagens[CE].sentido,290,260)
            ctx4.fillText("- Distância do início do eixo: " + Distancias[CE].d3  + " mm",290,285)
        }
    }

    ctx4.stroke() 
    ctx4.closePath()
}

function corrigirdados2 ()
{
    c = 1
    contadoreixos = 1
    numengrenagens = 1
    proximoeixo = 1
    controle = 0
    CE = -1
    CT = 0
    Engrenagens = []
    Distancias = []

    if (document.getElementById('sentido').checked)
    {
        document.getElementById('sentido').removeAttribute('checked')
    }
    if (document.getElementById('sentido2').checked)
    {
        document.getElementById('sentido2').removeAttribute('checked')
    }
    if (document.getElementById('sentido').disabled)
    {
        document.getElementById('sentido').removeAttribute('disabled')
    }
    if (document.getElementById('sentido2').disabled)
    {
        document.getElementById('sentido2').removeAttribute('disabled')
    }
    if (document.getElementById('hd').checked)
    {
        document.getElementById('hd').removeAttribute('checked')
    }
    if (document.getElementById('hs').checked)
    {
        document.getElementById('hs').removeAttribute('checked')
    }
    if (document.getElementById('h').checked)
    {
        document.getElementById('h').removeAttribute('checked')
    }
    if (document.getElementById('hd').disabled)
    {
        document.getElementById('hd').removeAttribute('disabled')
    }
    if (document.getElementById('hs').disabled)
    {
        document.getElementById('hs').removeAttribute('disabled')
    }
    if (document.getElementById('h').disabled)
    {
        document.getElementById('h').removeAttribute('disabled')
    }
    if (document.getElementById('fi').disabled)
    {
        document.getElementById('fi').removeAttribute('disabled')
    }
    if (document.getElementById('psi').disabled)
    {
        document.getElementById('psi').removeAttribute('disabled')
    }
    if (document.getElementById('m').disabled)
    {
        document.getElementById('m').removeAttribute('disabled')
    }

    document.getElementById('confirmar2').setAttribute('disabled','true')
    document.getElementById('botãoenviar2').removeAttribute('disabled')

    document.getElementById('tabeladadosdaengrenagem').innerHTML = "Engrenagem " + c
    document.getElementById('cabeçadoformulario').innerHTML = "Eixo a"
    document.getElementById('nengrenagens').innerHTML = "Número de engrenagens: 1"

    ctx2.clearRect(0,0,desenhoengrenagens.width,desenhoengrenagens.height)
    ctx4.clearRect(0,0,dadosengrenagens.width,dadosengrenagens.height)
    ctx13.clearRect(0,0,imagemeixoa.width,imagemeixoa.height)
    ctx15.clearRect(0,0,imagemeixob.width,imagemeixob.height)
    ctx14.clearRect(0,0,dadoseixoa.width,dadoseixoa.height)
    ctx16.clearRect(0,0,dadoseixob.width,dadoseixob.height)
    desenhoinicial2()
}

//OBS: A engrenagem 1 do eixo 2 fará par com a engrenagem do eixo 1
//OBS: A engrenagem 1 do eixo 3 fará par com a engrenagem 2 do eixo 2

//DIVISÃO DE DADOS PARA CÁLCULOS

//Gráficos de momento fletor
var grafico1 = document.getElementById("grafico1")
var ctx5=grafico1.getContext("2d")

var grafico2 = document.getElementById("grafico2")
var ctx6=grafico2.getContext("2d")

var grafico3 = document.getElementById("grafico3")
var ctx7=grafico3.getContext("2d")

var grafico4 = document.getElementById("grafico4")
var ctx8=grafico4.getContext("2d")


var titulo1 = 'Momento fletor em X no eixo a'
var titulo2 = 'Momento fletor em Y no eixo a'

var titulo3 = 'Momento fletor em X no eixo b'
var titulo4 = 'Momento fletor em Y no eixo b'

function momento(canvas,X,Y,titulo)
{
    var myChart = new Chart(canvas, 
    {
        type: 'line',
        data: 
        {
            labels: X,
            datasets: 
            [{
                data: Y,
                borderWidth: 2,
                pointBorderWidth: 0.5,
                backgroundColor: 'black',
                borderColor: 'black',
                text: titulo
            }], 
        },
        options: 
        {
            responsive: true,

            scales:
            {
                x: 
                {
                    grid:
                    {
                        display: true,
                        color: 'grey',
                        lineWidth: 2,
                    },
                    ticks:
                    {
                        color: 'black',
                    },
                    title:
                    {
                        display: true,
                        text:'Z (m)',
                        padding:
                        {
                            top: 5,
                            bottom: 5,
                        },
                        color: 'black',
                        font: 
                        {
                            titleFont: 'Arial',
                            size: 12,
                        },
                    },
                },
                y: 
                {
                    grid:
                    {
                        display: true,
                        color: 'grey',
                        lineWidth: 2,
                    },
                    ticks: 
                    {
                        color: 'black',
                    },
                    title:
                    {
                        display: true,
                        text: 'Momento  fletor  (N.m)',
                        padding:
                        {
                            top: 5,
                            bottom: 5,
                        },
                        color: 'black',
                        font: 
                        {
                            titleFont: 'Arial',
                            size: 13,
                        },
                    },
                },
            },
            plugins: 
            {
                title: 
                {
                    display: true,
                    text: titulo,
                    padding:
                    {
                        top: 10,
                        bottom: 30,
                    },
                    color: 'black',
                    font: 
                    {
                        titleFont: 'Arial',
                        size: 16,
                    },
                },
                legend:
                {
                    display: false,
                },
            }
            
        }
    });

}

function calculo()
{
    document.getElementById("botãocalcular").setAttribute('disabled','true')
    document.getElementById("botãocorrigir2").setAttribute('disabled','true')
    document.getElementById("botãocorrigir").setAttribute('disabled','true')
    document.getElementById("entpot").setAttribute('disabled','true')
    document.getElementById("resultados").style.display = "inline"
    document.getElementById("botãosalvar").style.display = "flex"
    //
    let pot = Motor[0].pot //Potencia de entrada em kW
    let n = Motor[0].rotação //Rotação de entrada em rpm

    //Engrenagem 2
    let fi2 = Engrenagens[0].fi*(Math.PI/180) //Ângulo de pressão normal
    let psi2 = Engrenagens[0].psi*(Math.PI/180) //Ângulo de hélice
    let h2 = Engrenagens[0].h
    let sentido2 = Engrenagens[0].sentido
    let di2 = Engrenagens[0].diametro /1000
    
    //Engrenagem 3
    
    let fi3 = Engrenagens[1].fi*(Math.PI/180)
    let psi3 = Engrenagens[1].psi*(Math.PI/180)
    let h3 =  Engrenagens[1].h
    let sentido3 = Engrenagens[1].sentido
    let di3 = Engrenagens[1].diametro /1000
    let de3 = Distancias[1].d3 /1000   
    
    // eixo a é composto pelos mancais A e B
    let compeixoa = Eixos[0].comprimento /1000
    
    if (Distancias[0].d1 < Distancias[0].d2)
    {
        var dA = Distancias[0].d1 /1000 //Conseiderando A como mancal esquerdo
        var dB = Distancias[0].d2 /1000
    }
    else if (Distancias[0].d1 > Distancias[0].d2)
    {
        var dA = Distancias[0].d2 /1000 //Conseiderando A como mancal esquerdo
        var dB = Distancias[0].d1 /1000
    }
    let de2 = Distancias[0].d3 /1000

    let dA2z = de2 - dA 
    let dABz = dB - dA 
    let R2 = di2/2
    
    //O eixo b é composto pelos mancais C e D
    let compeixob = Eixos[1].comprimento /1000
    
    if (Distancias[1].d1 < Distancias[1].d2)
    {
        var dC = Distancias[1].d1 /1000 //Conseiderando C como mancal esquerdo
        var dD = Distancias[1].d2 /1000
    }
    else if (Distancias[1].d1 > Distancias[1].d2)
    {
        var dC = Distancias[1].d2 /1000 //Conseiderando C como mancal esquerdo
        var dD = Distancias[1].d1 /1000  
    }

    let dC3z = de3 - dC 
    let dCDz = dD - dC
    let R3 = di3/2
    let inclinaçãob = Eixos[1].inclinação*(Math.PI/180) //Inclinação do eixo b em relação ao eixo a (referência a X positivo)
    
    function eqs (F,x,l,mom)
    {
        k = F*(x-l)+mom
        return k
    }
    
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    //ANALISE DAS FORÇAS
    //Par 2-3 
    
    let fit2 = Math.atan(Math.tan(fi2)/Math.cos(psi2)) //Ângulo de pressão tangencial
    
    sentido2 == 'antihorario' ? sentido3 = 'horario' : sentido3 = 'antihorário' //Definição do sentido de rotação de 3 a partir do sentido de rotação de 2
    
    //Essa primeira análise é feita a partir da engrenagem definida como motora
    
    let F23t = (60000*pot)/(Math.PI*di2*n) //Determinação da força tangencial
    let F23r = F23t*(Math.tan(fit2)) //Determinação da força radial
    let F23a = F23t*(Math.tan(psi2)) //Determinação da força axial
    let F23 = []
    
    let alfa1 = inclinaçãob - 90*(Math.PI/180) //Referente a força tangencial
    let alfa2 = inclinaçãob //Referente a força radial
    let alfa3 = inclinaçãob - 180*(Math.PI/180)
    
    //Esse if irá determinar o sinal e as componentes X e Y da força F23
    if (sentido2 == 'horario'){
        F23.push(F23t*Math.cos(alfa1)+F23r*Math.cos(alfa2)),
        F23.push(F23t*Math.sin(alfa1)+F23r*Math.sin(alfa2))
    }  
    else {
        F23.push(-F23t*Math.cos(alfa1)+F23r*Math.cos(alfa2)),
        F23.push(-F23t*Math.sin(alfa1)+F23r*Math.sin(alfa2))
    }
    
    //Define sentido da força axial
    /*
    Anti horário + direita = negativo
    Anti horário + esquerda = positivo
    Horário + direita = positivo
    Horário + esquerda = negativo
    */
    if (sentido2 == 'antihorario' && h2 == 'destra')
    {
        F23.push(-F23a)
    }
    else if (sentido2 == 'antihorario' && h2 == 'sestra')
    {
        F23.push(F23a)
    }
    else if (sentido2 == 'horario' && h2 == 'sestra')
    {
        F23.push(-F23a)
    }
    else 
    {
        F23.push(F23a)
    }
    
    document.getElementById('f23').innerHTML = 'F23 = [ ' + F23[0].toFixed(2) + ', ' + F23[1].toFixed(2) + ', ' + F23[2].toFixed(2) + ' ]' + ' N'
    
    
    /*OBS: COMO OS SINAIS FORAM DEFINIDOS NO VETOR, AO USAR SEUS VALORES DE 
    AGORA EM DIANTE É IMPORTANTE USAR O ELEMNETO DO VETOR E NÃO A VARIÁVEL DA
    INTENSIDADE DA FORÇA. EXEMPLO: USAR F23[0] NO LUGAR DE F23x*/
    
    //ANÁLISE DOS EIXOS
    //Eixo a 
    
    let F32 = F23.map(function(i) { return -i}) //Será usada a força de 3 em 2
    document.getElementById('f32').innerHTML = 'F32 = [ ' + F32[0].toFixed(2) + ', ' + F32[1].toFixed(2) + ', ' + F32[2].toFixed(2) + ' ]' + ' N'

    
    //Determinação do mancal com carregamento axial
    let LM32 = []
    let LMOa = []
    
    i = F32[2] //O valor atribuido ao i será usado posteriormente, não fazer modificações que vá excluir esse valor
    if (de2 > dA && de2 < dB) // A - 32 - B
    {
        if (i > 0) 
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , -(dABz - dA2z)],
            LMOa = [0 , 0 , -dABz],
            document.getElementById('mancala').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'a\' é o direito') //B
        }
        else if (i < 0)
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , dA2z], 
            LMOa = [0 , 0 , dABz],
            document.getElementById('mancala').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'a\' é o esquerdo') //A
        }
        else if (i == 0)
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , dA2z], 
            LMOa = [0 , 0 , dABz],
            document.getElementById('mancala').innerHTML = ('Não existem forças axiais no eixo \'a\'') //A
        }
    }
    else if (de2 < dA) // 32 - A - B
    {
        if (i == 0)
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , dA2z], 
            LMOa = [0 , 0 , dABz],
            document.getElementById('mancala').innerHTML = ('Não existem forças axiais no eixo \'a\'') //A
        }
        else
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , dA2z], 
            LMOa = [0 , 0 , dABz],
            document.getElementById('mancala').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'a\' é o esquerdo') //A
        }
    }
    else if (de2 > dB) // A - B - 32
    {
        if (i == 0)
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , -(dABz - dA2z)],
            LMOa = [0 , 0 , -dABz],
            document.getElementById('mancala').innerHTML = ('Não existem forças axiais no eixo \'a\'') //B
        }
        else
        {
            LM32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , -(dABz - dA2z)],
            LMOa = [0 , 0 , -dABz],
            document.getElementById('mancala').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'a\' é o direito') //B
        }
    }
    
    /* Essa análise é feita não só para determinar qual o mancal irá suportar carga axial, mas também para definir qual será a reação à ser calculada primeiro.
    As próximas linhas desse programa foram feitas para calcular as reações do mancal sem carregamento axial primeiro, por questão de organização.
    */
    
    
    //ANÁLISE DO MOMENTO
    
    //LA23 x F32 + LAB x FB
    
    let pv1 = new Array(3)
    pv1[0] = (LM32[1]*F32[2]-LM32[2]*F32[1])
    pv1[1] = (LM32[2]*F32[0]-LM32[0]*F32[2])
    pv1[2] = (LM32[0]*F32[1]-LM32[1]*F32[0])
    
    
    
    /* Não é possível fazer o produto vetorial de um vetor de incógnitas 
    com um vetor de números e continuar com o cálculo normalmente.
    Então: Como o vetor distância LDC sempre estará no eixo Z (não serão 
    considerados eixos inclinados), a resultante do produto vetorial entre 
    LBA e FB sempre será um vetor do tipo [-LBAz FBy, LBAk FBx, 0]. Assim, 
    o valor das componentes da reação em D será: Dx = (-pv1y - pv2y) / LBAz
                                                 Dy = (-pv1x - pv2x) / -LBAz
    */
    
    // Determinação da força de reação no mancal sem carregamento axial
    
    let FA = [0, 0, 0]
    let FB = [0, 0, 0]
    
    //Esse if associa o valor da força F32z ao mancal que irá receber carga axial e define o valor da reação no mancal sem carga axial
    if (de2 > dA && de2 < dB)
    {
        if (i > 0) 
        {
            FA[0] = (-pv1[1]  / LMOa[2]),
            FA[1] = (-pv1[0]  / -LMOa[2])
        }
        else if (i < 0)
        {
            FB[0] = (-pv1[1] / LMOa[2]),
            FB[1] = (-pv1[0] / -LMOa[2]) 
        }
        else if (i == 0)
        {
            FB[0] = (-pv1[1] / LMOa[2]),
            FB[1] = (-pv1[0] / -LMOa[2]) 
        }
    }
    else if (de2 < dA)
    {
        FB[0] = (-pv1[1] / LMOa[2]),
        FB[1] = (-pv1[0] / -LMOa[2]) 
    }
    else if (de2 > dB)
    {
        FA[0] = (-pv1[1]  / LMOa[2]),
        FA[1] = (-pv1[0]  / -LMOa[2])
    }
    
    //Somatório das forças
    
    //F32 + FA + FB
    
    //Ainda usando o valor de i definido anteriormente.
    if (de2 > dA && de2 < dB)
    {
        if (i > 0) 
        {
            FB[0] = -(F32[0]  + FA[0]),
            FB[1] = -(F32[1]  + FA[1]),
            FB[2] = -(F32[2]  + FA[2])
        }
        else if (i < 0)
        {
            FA[0] = -(F32[0]  + FB[0]),
            FA[1] = -(F32[1]  + FB[1]),
            FA[2] = -(F32[2]  + FB[2])
        }
        else if (i == 0)
        {
            FA[0] = -(F32[0]  + FB[0]),
            FA[1] = -(F32[1]  + FB[1]),
            FA[2] = -(F32[2]  + FB[2])  
        }
    }
    else if (de2 < dA)
    {
        FA[0] = -(F32[0]  + FB[0]),
        FA[1] = -(F32[1]  + FB[1]),
        FA[2] = -(F32[2]  + FB[2])
    }
    else if (de2 > dB)
    {
        FB[0] = -(F32[0]  + FA[0]),
        FB[1] = -(F32[1]  + FA[1]),
        FB[2] = -(F32[2]  + FA[2])
    }
    
    document.getElementById('fa').innerHTML = 'FA = [ ' + FA[0].toFixed(2) + ', ' + FA[1].toFixed(2) + ', ' + FA[2].toFixed(2) + ' ]' + ' N'
    document.getElementById('fb').innerHTML = 'FB = [ ' + FB[0].toFixed(2) + ', ' + FB[1].toFixed(2) + ', ' + FB[2].toFixed(2) + ' ]' + ' N'
    
    //Esse if determina a ordem que os termos da equação serão tratados,
    //Caso a força de A precise ser encontrada, ele isolará FA e vice-versa
    
    /* Nesse ponto temos o valor das forças aplicadas e forças de reação nos mancais*/
    
    //Cálculo dos momentos concentrados
    
    let La32 = [R2*Math.cos(alfa2) , R2*Math.sin(alfa2) , 0] //Distância do eixo ao ponto de aplicação da força
    
    //LM32 x F32 = M32
    let pm1 = new Array(3) 
    pm1[0] = (La32[1]*F32[2]-La32[2]*F32[1])
    pm1[1] = (La32[2]*F32[0]-La32[0]*F32[2])
    pm1[2] = (La32[0]*F32[1]-La32[1]*F32[0])
    
    //OBS: Os momentos concentrados em X irão entrar na análise do plano ZY,
    // e os de Y irão entrar na do plano ZX
    
    // Gráfico do momento fletor no eixo
    
    //Considerando que o eixo B é o da esquerda 
    
    //Esse for irá variar a distancia de 0,5 em 0,5in e calcular o momento em cada um desses pontos no eixo
    
    //Definindo os valores de l para eixos com uma engrenagem
    
    let d1 = dA
    let d2 = dB
    let d3 = de2
    
    
    if (d1 < d3)//Mancal esquerdo antes da engrenagem 1
    {
        l1 = d1
    
        if (d3 > d2) // Engrenagem 1 depois do mancal direito
        {
            l2 = d2 - d1
            l3 = d3 - d2
            l4 = compeixoa - d3
        }
        else if (d3 < d2)//Engrenagem 1 entre mancais
        {
            l2 = d3 - d1
            l3 = d2 - d3
            l4 = compeixoa - d2
        }
    }
    if (d1 > d3) //Engrenagem 1 antes do mancal esquerdo
    {
        l1 = d3
        l2 = d1 - d3
        l3 = d2 - d1
        l4 = compeixoa - d2
    }
    
    //Plano XZ
    
    //Cálculo da equação de momento fletor em um eixo
    //Momento em Y entra com sinal OPOSTO
    
    for (x = 0, MFxa=[], Xa=[]; x <= l1+l2+l3+l4; x=x+0.01)
    {
        if (x>= 0 && x<= l1)
        {
            i = 0
            MFxa.push(i)
            Xa.push(x)
        }
        
        if (x>= l1 && x<= l1+l2)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F32[0],x,l1,-pm1[1]) //Engrenagem 1
            }
            else if (d3 > d1)
            {
                i= 0 + eqs(FA[0],x,l1,0) //Mancal esquerdo
            }
            MFxa.push(i)
            Xa.push(x)
        }
    
        if (x>= l1+l2 && x<= l1+l2+l3)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F32[0],x,l1,-pm1[1]) + eqs(FA[0],x,l1+l2,0) //Engrenagem 1 e mancal esquerdo
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FA[0],x,l1,0) + eqs(FB[0],x,l1+l2,0) //Mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FA[0],x,l1,0) + eqs(F32[0],x,l1+l2,-pm1[1]) //Mancal esquerdo e engrenagem 1
            }
            MFxa.push(i)
            Xa.push(x)
        }
    
        if (x>= l1+l2+l3 && x<= l1+l2+l3+l4)
        {
            if (l1+l2+l3 == compeixoa)
            {
                i = 0
            }
            else if (d3 < d1)   
            {
                i= 0 + eqs(F32[0],x,l1,-pm1[1]) + eqs(FA[0],x,l1+l2,0) + eqs(FB[0],x,l1+l2+l3,0) //Engrenagem 1 , mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FA[0],x,l1,0) + eqs(FB[0],x,l1+l2,0) + eqs(F32[0],x,l1+l2+l3,-pm1[1]) //Mancal esquerdo , mancal direito e engrenagem 1
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FA[0],x,l1,0) + eqs(F32[0],x,l1+l2,-pm1[1]) + eqs(FB[0],x,l1+l2+l3,0) //Mancal esquerdo , engrenagem 1 e mancal direito
            }
            MFxa.push(i)
            Xa.push(x)
        }
    }
    
    let MmaxxA
    let MpxA = Math.max.apply(null, MFxa)// retorna o maior valor positivo
    let MnxA = Math.min.apply(null, MFxa)// retorna o maior valor negativo
    Math.abs(MpxA)>Math.abs(MnxA) ? MmaxxA = MpxA : MmaxxA = MnxA //compara qual o maior

    Xa = Xa.map(function(i) { return i.toFixed(2)}) //Formatação do gráfico
    momento(ctx5,Xa,MFxa,titulo1) //Faz o grafico do momento em X

    //window.alert(MmaxxA)
    //Assim tem-se o maior momento no eixo X.
    
    //Plano YZ
    //Momento em X entra com MESMO sinal
    
    for (x = 0, MFya=[]; x <= l1+l2+l3+l4; x=x+0.01)
    {
        if (x>= 0 && x<= l1)
        {
            i = 0
            MFya.push(i)
        }
        
        if (x>= l1 && x<= l1+l2)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F32[1],x,l1,pm1[0]) //Engrenagem 1
            }
            else if (d3 > d1)
            {
                i= 0 + eqs(FA[1],x,l1,0) //Mancal esquerdo
            }
            MFya.push(i)
        }
    
        if (x>= l1+l2 && x<= l1+l2+l3)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F32[1],x,l1,pm1[0]) + eqs(FA[1],x,l1+l2,0) //Engrenagem 1 e mancal esquerdo
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FA[1],x,l1,0) + eqs(FB[1],x,l1+l2,0) //Mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FA[1],x,l1,0) + eqs(F32[1],x,l1+l2,pm1[0]) //Mancal esquerdo e engrenagem 1
            }
            MFya.push(i)
        }
    
        if (x>= l1+l2+l3 && x<= l1+l2+l3+l4)
        {
            if (l1+l2+l3 == compeixoa)
            {
                i = 0
            }
            else if (d3 < d1)   
            {
                i= 0 + eqs(F32[1],x,l1,pm1[0]) + eqs(FA[1],x,l1+l2,0) + eqs(FB[1],x,l1+l2+l3,0) //Engrenagem 1 , mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FA[1],x,l1,0) + eqs(FB[1],x,l1+l2,0) + eqs(F32[1],x,l1+l2+l3,pm1[0]) //Mancal esquerdo , mancal direito e engrenagem 1
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FA[1],x,l1,0) + eqs(F32[1],x,l1+l2,pm1[0]) + eqs(FB[1],x,l1+l2+l3,0) //Mancal esquerdo , engrenagem 1 e mancal direito
            }
            MFya.push(i)
        }
    }
    
    let MmaxyA
    let MpyA = Math.max.apply(null, MFya)
    let MnyA = Math.min.apply(null, MFya)
    Math.abs(MpyA)>Math.abs(MnyA) ? MmaxyA = MpyA : MmaxyA = MnyA 
    //window.alert(MmaxyA)
    
    momento(ctx6,Xa,MFya,titulo2)//Gráfico do momento em Y
    
    //Determinação do maior momento fletor no eixo.
    
    if (Math.abs(MmaxxA) > Math.abs(MmaxyA)) 
    {
        document.getElementById('momaxa').innerHTML = 'O momento fletor máximo no eixo \'a\' é de '+ MmaxxA.toFixed(2) + ' N.m em X'
    }
    else
    {
        document.getElementById('momaxa').innerHTML = 'O momento fletor máximo no eixo \'a\' é de '+ MmaxyA.toFixed(2) + ' N.m em Y'
    }
    
    
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    
    //DETERMINAÇÃO DOS VETORES DE POSIÇÃO
    //Eixo b
    
    //Determinação do mancal com carregamento axial

    let LM23 = []
    let LMOb = []

    i = F23[2] //O valor atribuido ao i será usado posteriormente, não fazer modificações que vá excluir esse valor
    if (de3 > dC && de3 < dD) // C - 23 - D
    {
        if (i > 0) 
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , -(dCDz - dC3z)],
            LMOb = [0 , 0 , -dCDz],
            document.getElementById('mancalb').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'b\' é o direito') //D
        }
        else if (i < 0)
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , dC3z], 
            LMOb = [0 , 0 , dCDz],
            document.getElementById('mancalb').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'b\' é o esquerdo') //C
        }
        else if (i == 0)
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , dC3z], 
            LMOb = [0 , 0 , dCDz],
            document.getElementById('mancalb').innerHTML = ('Não existem forças axiais no eixo \'b\'') //C
        }
    }
    else if (de3 < dC) // 23 - C - D
    {
        if (i == 0)
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , dC3z], 
            LMOb = [0 , 0 , dCDz],
            document.getElementById('mancalb').innerHTML = ('Não existem forças axiais no eixo \'b\'') //C
        }
        else
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , dC3z], 
            LMOb = [0 , 0 , dCDz],
            document.getElementById('mancalb').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'b\' é o esquerdo') //C
        }
    }
    else if (de3 > dD) // C - D - 23
    {
        if (i == 0)
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , -(dCDz - dC3z)],
            LMOb = [0 , 0 , -dCDz],
            document.getElementById('mancalb').innerHTML = ('Não existem forças axiais no eixo \'b\'') //D
        }
        else
        {
            LM23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , -(dCDz - dC3z)],
            LMOb = [0 , 0 , -dCDz],
            document.getElementById('mancalb').innerHTML = ('O mancal que irá suportar o carregamento axial no eixo \'a\' é o direito') //D
        }
    }
    
    //ANÁLISE DO MOMENTO
    
    //LC23 x F23 + LCD x FD
    
    let pv2 = new Array(3)
    pv2[0] = (LM23[1]*F23[2]-LM23[2]*F23[1])
    pv2[1] = (LM23[2]*F23[0]-LM23[0]*F23[2])
    pv2[2] = (LM23[0]*F23[1]-LM23[1]*F23[0])

    let FC = [0, 0, 0]
    let FD = [0, 0, 0]
    
    
    if (de3 > dC && de3 < dD)
    {
        if (i > 0) 
        {
            FC[0] = (-pv2[1]  / LMOb[2]),
            FC[1] = (-pv2[0]  / -LMOb[2])
        }
        else if (i < 0)
        {
            FD[0] = (-pv2[1] / LMOb[2]),
            FD[1] = (-pv2[0] / -LMOb[2]) 
        }
        else if (i == 0)
        {
            FD[0] = (-pv2[1] / LMOb[2]),
            FD[1] = (-pv2[0] / -LMOb[2]) 
        }
    }
    else if (de3 < dC)
    {
        FD[0] = (-pv2[1] / LMOb[2]),
        FD[1] = (-pv2[0] / -LMOb[2]) 
    }
    else if (de3 > dD)
    {
        FC[0] = (-pv2[1]  / LMOb[2]),
        FC[1] = (-pv2[0]  / -LMOb[2])
    }

    //Somatório das forças
    
    //F23 + FC + FD
    
    
    if (de3 > dC && de3 < dD)
    {
        if (i > 0) 
        {
            FD[0] = -(F23[0]  + FC[0]),
            FD[1] = -(F23[1]  + FC[1]),
            FD[2] = -(F23[2]  + FC[2])
        }
        else if (i < 0)
        {
            FC[0] = -(F23[0]  + FD[0]),
            FC[1] = -(F23[1]  + FD[1]),
            FC[2] = -(F23[2]  + FD[2])
        }
        else if (i == 0)
        {
            FC[0] = -(F23[0]  + FD[0]),
            FC[1] = -(F23[1]  + FD[1]),
            FC[2] = -(F23[2]  + FD[2])  
        }
    }
    else if (de3 < dC)
    {
        FC[0] = -(F23[0]  + FD[0]),
        FC[1] = -(F23[1]  + FD[1]),
        FC[2] = -(F23[2]  + FD[2])
    }
    else if (de3 > dD)
    {
        FD[0] = -(F23[0]  + FC[0]),
        FD[1] = -(F23[1]  + FC[1]),
        FD[2] = -(F23[2]  + FC[2])
    }

    document.getElementById('fc').innerHTML = 'FC = [ ' + FC[0].toFixed(2) + ', ' + FC[1].toFixed(2) + ', ' + FC[2].toFixed(2) + ' ]' + ' N'
    document.getElementById('fd').innerHTML = 'FD = [ ' + FD[0].toFixed(2) + ', ' + FD[1].toFixed(2) + ', ' + FD[2].toFixed(2) + ' ]' + ' N'
    
    //Cálculo dos momentos concentrados
    
    let Lb23 = [R3*Math.cos(alfa3) , R3*Math.sin(alfa3) , 0] 
    
    //LM23 x F23 = M23
    let pm2 = new Array(3)
    pm2[0] = (Lb23[1]*F23[2]-Lb23[2]*F23[1])
    pm2[1] = (Lb23[2]*F23[0]-Lb23[0]*F23[2])
    pm2[2] = (Lb23[0]*F23[1]-Lb23[1]*F23[0])
    
    // Gráfico do momento fletor no eixo
    
    //Considerando que o eixo D é o da esquerda 
    
    //Definindo os valores de l para eixos com duas engrenagens
    
    d1 = dC
    d2 = dD
    d3 = de3
    
    if (d1 < d3)//Mancal esquerdo antes da engrenagem 1
    {
        l1 = d1
    
        if (d3 > d2) // Engrenagem 1 depois do mancal direito
        {
            l2 = d2 - d1
            l3 = d3 - d2
            l4 = compeixob - d3
        }
        else if (d3 < d2)//Engrenagem 1 entre mancais
        {
            l2 = d3 - d1
            l3 = d2 - d3
            l4 = compeixob - d2
        }
    }
    if (d1 > d3) //Engrenagem 1 antes do mancal esquerdo
    {
        l1 = d3
        l2 = d1 - d3
        l3 = d2 - d1
        l4 = compeixob - d2
    }

    //Plano XZ
    
    //Cálculo da equação de momento fletor em um eixo
    //Momento em Y entra com sinal OPOSTO
    
    for (x = 0, MFxb=[], Xb=[]; x <= l1+l2+l3+l4; x=x+0.01)
    {
        if (x>= 0 && x<= l1)
        {
            i = 0
            MFxb.push(i)
            Xb.push(x)
        }
        
        if (x>= l1 && x<= l1+l2)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F23[0],x,l1,-pm2[1]) //Engrenagem 1
            }
            else if (d3 > d1)
            {
                i= 0 + eqs(FC[0],x,l1,0) //Mancal esquerdo
            }
            MFxb.push(i)
            Xb.push(x)
        }
    
        if (x>= l1+l2 && x<= l1+l2+l3)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F23[0],x,l1,-pm2[1]) + eqs(FC[0],x,l1+l2,0) //Engrenagem 1 e mancal esquerdo
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FC[0],x,l1,0) + eqs(FD[0],x,l1+l2,0) //Mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FC[0],x,l1,0) + eqs(F23[0],x,l1+l2,-pm2[1]) //Mancal esquerdo e engrenagem 1
            }
            MFxb.push(i)
            Xb.push(x)
        }
    
        if (x>= l1+l2+l3 && x<= l1+l2+l3+l4)
        {
            if (l1+l2+l3 == compeixob)
            {
                i = 0
            }
            else if (d3 < d1)   
            {
                i= 0 + eqs(F23[0],x,l1,-pm2[1]) + eqs(FC[0],x,l1+l2,0) + eqs(FD[0],x,l1+l2+l3,0) //Engrenagem 1 , mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FC[0],x,l1,0) + eqs(FD[0],x,l1+l2,0) + eqs(F23[0],x,l1+l2+l3,-pm2[1]) //Mancal esquerdo , mancal direito e engrenagem 1
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FC[0],x,l1,0) + eqs(F23[0],x,l1+l2,-pm2[1]) + eqs(FD[0],x,l1+l2+l3,0) //Mancal esquerdo , engrenagem 1 e mancal direito
            }
            MFxb.push(i)
            Xb.push(x)
        }
    }
    
    let MmaxxB
    let MpxB = Math.max.apply(null, MFxb)
    let MnxB = Math.min.apply(null, MFxb)
    Math.abs(MpxB)>Math.abs(MnxB) ? MmaxxB = MpxB : MmaxxB = MnxB 
    //window.alert(MmaxxB)

    Xb = Xb.map(function(i) { return i.toFixed(2)}) //Formatação do gráfico
    momento(ctx7,Xb,MFxb,titulo3)
    

    //Plano YZ

    //Momento em X entra com MESMO sinal
    
    for (x = 0, MFyb=[]; x <= l1+l2+l3+l4; x=x+0.01)
    {
        if (x>= 0 && x<= l1)
        {
            i = 0
            MFyb.push(i)
        }
        
        if (x>= l1 && x<= l1+l2)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F23[1],x,l1,pm2[0]) //Engrenagem 1
            }
            else if (d3 > d1)
            {
                i= 0 + eqs(FC[1],x,l1,0) //Mancal esquerdo
            }
            MFyb.push(i)
        }
    
        if (x>= l1+l2 && x<= l1+l2+l3)
        {
            if (d3 < d1)
            {
                i= 0 + eqs(F23[1],x,l1,pm2[0]) + eqs(FC[1],x,l1+l2,0) //Engrenagem 1 e mancal esquerdo
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FC[1],x,l1,0) + eqs(FD[1],x,l1+l2,0) //Mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FC[1],x,l1,0) + eqs(F23[1],x,l1+l2,pm2[0]) //Mancal esquerdo e engrenagem 1
            }
            MFyb.push(i)
        }
    
        if (x>= l1+l2+l3 && x<= l1+l2+l3+l4)
        {
            if (l1+l2+l3 == compeixob)
            {
                i = 0
            }
            else if (d3 < d1)   
            {
                i= 0 + eqs(F23[1],x,l1,pm2[0]) + eqs(FC[1],x,l1+l2,0) + eqs(FD[1],x,l1+l2+l3,0) //Engrenagem 1 , mancal esquerdo e mancal direito
            }
            else if (d3 > d1 && d3 > d2)
            {
                i= 0 + eqs(FC[1],x,l1,0) + eqs(FD[1],x,l1+l2,0) + eqs(F23[1],x,l1+l2+l3,pm2[0]) //Mancal esquerdo , mancal direito e engrenagem 1
            }
            else if (d3 > d1 && d3 < d2)
            {
                i= 0 + eqs(FC[1],x,l1,0) + eqs(F23[1],x,l1+l2,pm2[0]) + eqs(FD[1],x,l1+l2+l3,0) //Mancal esquerdo , engrenagem 1 e mancal direito
            }
            MFyb.push(i)
        }
    }

    let MmaxyB
    let MpyB = Math.max.apply(null, MFyb)
    let MnyB = Math.min.apply(null, MFyb)
    Math.abs(MpyB)>Math.abs(MnyB) ? MmaxyB = MpyB : MmaxyB = MnyB 
    //window.alert(MmaxyB)

    momento(ctx8,Xb,MFyb,titulo4) //Gráfico do momento fletor em Y
    
    //Determinação do maior momento fletor no eixo.
    
    if (Math.abs(MmaxxB) > Math.abs(MmaxyB)) 
    {
        document.getElementById('momaxb').innerHTML = 'O momento fletor máximo no eixo \'b\' é de '+ MmaxxB.toFixed(2) + ' N.m em X'
    }
    else
    {
        document.getElementById('momaxb').innerHTML = 'O momento fletor máximo no eixo \'b\' é de '+ MmaxyB.toFixed(2) + ' N.m em Y'
    } 

}

function salvar()
{
    document.getElementById("divimprimir").style.display = "none"
    document.getElementById("botãosalvar").style.display = "none"
    document.getElementById("resultados").style.border = "none"
    document.getElementById("resultados").style.marginLeft = "0%"
    window.print()
    document.getElementById("divimprimir").style.display = "inline"
    document.getElementById("botãosalvar").style.display = "flex"
    document.getElementById("resultados").style.border = "solid"
    document.getElementById("resultados").style.borderWidth = "thin"
    document.getElementById("resultados").style.marginLeft = "25%"
}

//A4	297 x 210 mm	3508 x 2480 px
