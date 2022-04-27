/*
Questão 13-40 do Shigley 7ª ed (675)
A questão informa a engrenagem motora
O torque do motor: 1200 lbf.in
A direção da força: Sentido anti horário
Eixo x positivo para a direita e z positivo para fora

Eixo A
Engrenagem 2 (motor): 
Passo diametral (pdn2) = 8 dentes/in
z2 = 14 dentes
ângulo de pressão normal (fi2) = 20°
ângulo de hélice (psi2) = 30°
helice direita

Eixo B
Engrenagem 3: 
Passo diametral (pdn3) = 8 dentes/in
z3 = 36 dentes
ângulo de pressão normal (fi3) = 20°
ângulo de hélice (psi3) = 30°
helice esquerda

Engrenagem 4: 
Passo diametral (pdn4) = 5 dentes/in
z4 = 15 dentes
ângulo de pressão normal (fi4) = 20°
ângulo de hélice (psi4) = 15°
helice esquerda

Eixo C
Engrenagem 5: 
Passo diametral (pdn5) = 5 dentes/in
z5 = 45 dentes
ângulo de pressão normal (fi5) = 20°
ângulo de hélice (psi5) = 15°
helice direita

O eixo A é composto pelos mancais A e B
da2z = -2 in
daBz = -4 in

O eixo B é composto pelos mancais C e D
dc3z = -6.5 in
dc4z = -3 in
dcDz = -8 in

O eixo C é composto pelos mancais E e F
de5z = -3.25 in
deFz = -6.5 in

Distâncias em Y

da2y = di2/2
dc3y = di3/2
dc4y = di4/2
de5y = di5/2
*/

//Deve ser determinada a engrenagem motora do sistema, e seu sentido deve ser determinado, pois a apartir dele será determinado o sentido das demais engrenagens do sistema

let t = 1200
//Engrenagem 2
let pdn2 = 8 //Passo diametral normal
let z2 = 14  //Número de dentes
let fi2 = 20*(Math.PI/180) //Ângulo de pressão normal
let psi2 = 30*(Math.PI/180) //Ângulo de hélice
let h2 = 'helice direita'
let sentido2 = 'anti horario'

//Engrenagem 3
let pdn3 = 8 
let z3 = 36 
let fi3 = 20*(Math.PI/180)
let psi3 = 30*(Math.PI/180)
let h3 = 'helice esquerda'
let sentido3

//Engrenagem 4
let pdn4 = 5 
let z4 = 15
let fi4 = 20*(Math.PI/180)
let psi4 = 15*(Math.PI/180)
let h4 = 'helice esquerda'
let sentido4

//Engrenagem 5
let pdn5 = 5 
let z5 = 45 
let fi5 = 20*(Math.PI/180)
let psi5 = 15*(Math.PI/180)
let h5 = 'helice direita'
let sentido5

//DIÂMETROS
let di2 = z2/(pdn2 * Math.cos(psi2))
let di3 = z3/(pdn3 * Math.cos(psi3))
let di4 = z4/(pdn4 * Math.cos(psi4))
let di5 = z5/(pdn5 * Math.cos(psi5))

// eixo A é composto pelos mancais A e B
let dA2z = -2 
let dABz = -4 
let dA2y = di2/2

//O eixo B é composto pelos mancais C e D
let dC3z = -6.5 
let dC4z = -3 
let dCDz = -8.5 
let dC3y = -di3/2
let dC4y = di4/2

//O eixo C é composto pelos mancais E e F
let dE5z = -3.25 
let dEFz = -6.5 
let dE5y = -di5/2


//ANALISE DAS FORÇAS
//Par 2-3
motora23 = 2 

let fit2 = Math.atan(Math.tan(fi2)/Math.cos(psi2)) //Ângulo de pressão tangencial

sentido2 == 'anti horario' ? sentido3 = 'horario' : sentido3 = 'anti horário' //Definição do sentido de rotação de 3 a partir do sentido de rotação de 2

//Essa primeira análise é feita a partir da engrenagem definida como motora

let F23x = t/(di2/2) //Determonação da força tangencial
let F23y = F23x*(Math.tan(fit2)) //Determinação da força radial
let F23z = F23x*(Math.tan(psi2)) //Determinação da força axial
let F23 = []

sentido2 == 'anti horario' ? F23.push(-F23x) : F23.push(F23x) //Define sentido da força tangencial

motora23 == 2 ? F23.push(F23y) : F23.push(-F23y) //Define sentido da força radial

//Define sentido da força axial
/*
Anti horário + direita = negativo
Anti horário + esquerda = positivo
Horário + direita = positivo
Horário + esquerda = negativo
*/
if (sentido2 == 'anti horario' && h2 == 'helice direita'){
        F23.push(-F23z)}
else if (sentido2 == 'anti horario' && h2 == 'helice esquerda'){
    F23.push(F23z)}
else if (sentido2 == 'horario' && h2 == 'helice esquerda'){
    F23.push(-F23z)}
else {
    F23.push(F23z)
}

console.log('F23 = ',F23)

//Par 4-5
motora45 = 4

sentido4 = sentido3

let fit4 = Math.atan(Math.tan(fi4)/Math.cos(psi4))

let F45x = di3/di4 * F23x
let F45y = F45x*(Math.tan(fit4))
let F45z = F45x*(Math.tan(psi4))
let F45 = []

sentido4 == 'anti horario' ? F45.push(-F45x) : F45.push(F45x)
motora45 == 4 ? F45.push(F45y) : F45.push(-F45y)
if (sentido4 == 'anti horario' && h4 == 'helice direita'){
        F45.push(-F45z)}
else if (sentido4 == 'anti horario' && h4 == 'helice esquerda'){
        F45.push(F45z)}
else if (sentido4 == 'horario' && h4 == 'helice esquerda'){
        F45.push(-F45z)}
else {
    F45.push(F45z)
}
let F54 = F45.map(function(i) { return -i})

console.log('F54 = ',F54)

/*OBS: COMO OS SINAIS FORAM DEFINIDOS NO VETOR, AO USAR SEUS VALORES DE 
AGORA EM DIANTE É IMPORTANTE USAR O ELEMNETO DO VETOR E NÃO A VARIÁVEL DA
INTENSIDADE DA FORÇA. EXEMPLO: USAR F23[0] NO LUGAR DE F23x*/

//ANÁLISE DOS EIXOS
//Eixo a (somente uma interação por vez)

let F32 = F23.map(function(i) { return -i}) //Será usada a força de 3 em 2

//Determinação do mancal com carregamento axial
let LA23 = []
let LAB = []

i = F32[2] //O valor atribuido ao i será usado posteriormente, não fazer modificações que vá excluir esse valor
if (i > 0) {
    LA23 = [0 , dA2y , dA2z],
    LAB = [0 , 0 , dABz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'a\' é o esquerdo')
}
else {
    LA23 = [0 ,dA2y , -(dABz - dA2z)], 
    LAB = [0 , 0 , -dABz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'a\' é o direito')
}

/* Essa análise é feita não só para determinar qual o mancal irá suportar carga axial, mas também para definir qual será a reação à ser calculada primeiro.
As próximas linhas desse programa foram feitas para calcular as reações do mancal sem carregamento axial primeiro, por questão de organização.
*/


//ANÁLISE DO MOMENTO

//LA23 x F32 + LAB x FB

let pv3 = new Array(3) //mudar para pv1
pv3[0] = (LA23[1]*F32[2]-LA23[2]*F32[1])
pv3[1] = (LA23[2]*F32[0]-LA23[0]*F32[2])
pv3[2] = (LA23[0]*F32[1]-LA23[1]*F32[0])

// Determinação da força de reação no mancal sem carregamento axial

let FA = [0, 0, 0]
let FB = [0, 0, 0]

//Esse if associa o valor da força F32z ao mancal que irá receber carga axial e define o valor da reação no mancal sem carga axial
if (i > 0) {
     FB[0] = (-pv3[1] / LAB[2]),
     FB[1] = (-pv3[0] / -LAB[2])
}
else {
    FA[0] = (-pv3[1]  / LAB[2]),
    FA[1] = (-pv3[0]  / -LAB[2])
}

//Somatório das forças

//F32 + FA + FB

//Ainda usando o valor de i definido em (197) .Esse if pode ser usado junto ao da linha 229 futuraente, para reduzir o número de linhas de código.
if (i>0) {
    FA[0] = -(F32[0]  + FB[0]),
    FA[1] = -(F32[1]  + FB[1]),
    FA[2] = -(F32[2]  + FB[2])
}
else {
    FB[0] = -(F32[0]  + FA[0]),
    FB[1] = -(F32[1]  + FA[1]),
    FB[2] = -(F32[2]  + FA[2])
}
console.log('FA = ',FA)
console.log('FB = ',FB)


//Cálculo dos momentos concentrados

let LM32 = [0, di2/2, 0] //Distância do eixo ao ponto de aplicação da força

//LM32 x F32 = M32
let pm3 = new Array(3) //Mudar para pm1
pm3[0] = (LM32[1]*F32[2]-LM32[2]*F32[1])
pm3[1] = (LM32[2]*F32[0]-LM32[0]*F32[2])
pm3[2] = (LM32[0]*F32[1]-LM32[1]*F32[0])

// Gráfico do momento fletor no eixo

/*Equação genérica:
FBx*i + F32*(i-d1) + M32y 

FBx*i| + F32*(i-d1) + M32y 
   1            2         
Considerando que o eixo B é o da esquerda no inicio da questão
*/

let D32B = Math.abs(dABz) - Math.abs(dA2z)
let DBA = Math.abs(dABz)

//Plano XZ

for (i = 0, MFx = [] ; i<=D32B;i = i+0.5){
    x = FB[0]*i
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}

for (i = D32B; i<=(DBA); i = i+0.5){
    x = FB[0]*i + F32[0]*(i-D32B) + pm3[1] 
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}
//Dessa forma, o vetor MFx tem todos os valores dos momentos no eixo X

let MmaxxA
let MpxA = Math.max.apply(null, MFx)// retorna o maior valor positivo
let MnxA = Math.min.apply(null, MFx)// retorna o maior valor negativo
Math.abs(MpxA)>Math.abs(MnxA) ? MmaxxA = MpxA : MmaxxA = MnxA //compara qual o maior
//console.log(MmaxxA)
//Assim tem-se o maior momento no eixo X.

//Plano YZ

for (i = 0, MFy = [] ; i<=D32B;i = i+0.5){
    x = FB[1]*i
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}

for (i = D32B; i<=(DBA); i = i+0.5){
    x = FB[1]*i + F32[1]*(i-D32B) + pm3[0] 
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}
//Dessa forma, o vetor MFy tem todos os valores dos momentos no eixo Y

let MmaxyA
let MpyA = Math.max.apply(null, MFy)// retorna o maior valor positivo
let MnyA = Math.min.apply(null, MFy)// retorna o maior valor negativo
Math.abs(MpyA)>Math.abs(MnyA) ? MmaxyA = MpyA : MmaxyA = MnyA //compara qual o maior
//console.log(MmaxyA)
//Assim tem-se o maior momento no eixo Y.

//Determinação do maior momento fletor no eixo.

if (Math.abs(MmaxxA) > Math.abs(MmaxyA)) {
    console.log('O momento fletor máximo no eixo \'a\' é de '+ MmaxxA.toFixed(2) + ' lbf.in em X')
}
else{
    console.log('O momento fletor máximo no eixo \'a\' é de '+ MmaxyA.toFixed(2) + ' lbf.in em Y') 
}

//DETERMINAÇÃO DOS VETORES DE POSIÇÃO
//Eixo b

//Determinação do mancal com carregamento axial
let LC23 = []
let LC45 = []
let LCD = []

i = F23[2] + F54[2]
if (i > 0) {
    LC23 = [0 , dC3y , dC3z],
    LC45 = [0, dC4y , dC4z],
    LCD = [0 , 0 , dCDz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'b\' é o esquerdo')
}
else {
    LC23 = [0 ,dC3y , -(dCDz - dC3z)], 
    LC45 = [0, dC4y , -(dCDz - dC4z)],
    LCD = [0 , 0 , -dCDz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'b\' é o direito')
}
//O sinal de - nessas expressões serve para inverter a direção do vetor,
//caso contrário o vetor calculado seria o F23D por exemplo.

//ANÁLISE DO MOMENTO

//LC23 x F23 + LC45 x F54 + LCD x FD

let pv1 = new Array(3)
pv1[0] = (LC23[1]*F23[2]-LC23[2]*F23[1])
pv1[1] = (LC23[2]*F23[0]-LC23[0]*F23[2])
pv1[2] = (LC23[0]*F23[1]-LC23[1]*F23[0])

let pv2 = new Array(3)
pv2[0] = (LC45[1]*F54[2]-LC45[2]*F54[1])
pv2[1] = (LC45[2]*F54[0]-LC45[0]*F54[2])
pv2[2] = (LC45[0]*F54[1]-LC45[1]*F54[0])

/* Não é possível fazer o produto vetorial de um vetor de incógnitas 
com um vetor de números e continuar com o cálculo normalmente.
Então: Como o vetor distância LDC sempre estará no eixo Z (não serão 
considerados eixos inclinados), a resultante do produto vetorial entre 
LDC e FD sempre será um vetor do tipo [-LDCz FDy, LDCk FDx, 0]. Assim, 
o valor das componentes da reação em D será: Dx = (-pv1y - pv2y) / LCDz
                                             Dy = (-pv1x - pv2x) / -LCDz
*/

//OBS: A primeira reação a ser calculada é a do mancal sem carga axial, 
//então o vetor diatância a ser usado deve ser a do mancal com carregamento axial

let FC = [0, 0, 0]
let FD = [0, 0, 0]

if (i > 0) {
     FD[0] = ((-pv1[1] - pv2[1]) / LCD[2]),
     FD[1] = ((-pv1[0] - pv2[0]) / -LCD[2])
}
else {
    FC[0] = ((-pv1[1] - pv2[1]) / LCD[2]),
    FC[1] = ((-pv1[0] - pv2[0]) / -LCD[2])
}

//Somatório das forças

//F23 + F54 + FC + FD

if (i>0) {
    FC[0] = -(F23[0] + F54[0] + FD[0]),
    FC[1] = -(F23[1] + F54[1] + FD[1]),
    FC[2] = -(F23[2] + F54[2] + FD[2])
}
else {
    FD[0] = -(F23[0] + F54[0] + FC[0]),
    FD[1] = -(F23[1] + F54[1] + FC[1]),
    FD[2] = -(F23[2] + F54[2] + FC[2])
}
console.log('FC = ',FC)
console.log('FD = ',FD)

//Esse if determina a ordem que os termos da equação serão tratados,
//Caso a força de C precise ser encontrada, ele isolará FC e vice-versa

/* Nesse ponto temos o valor das forças aplicadas e forças de reação nos mancais*/


//Cálculo dos momentos concentrados

let LM23 = [0, -di3/2, 0] //Distância do eixo ao ponto de aplicação da força
let LM54 = [0, di4/2, 0]

/*OBS: Deve ser feita alguma alteração posterior para determinar o sinal 
desses termos de forma automática*/

//LM23 x F23 = M23
let pm1 = new Array(3)
pm1[0] = (LM23[1]*F23[2]-LM23[2]*F23[1])
pm1[1] = (LM23[2]*F23[0]-LM23[0]*F23[2])
pm1[2] = (LM23[0]*F23[1]-LM23[1]*F23[0])

//LM45 X F54 = M45
let pm2 = new Array(3)
pm2[0] = (LM54[1]*F54[2]-LM54[2]*F54[1])
pm2[1] = (LM54[2]*F54[0]-LM54[0]*F54[2])
pm2[2] = (LM54[0]*F54[1]-LM54[1]*F54[0])

//OBS: Os momentos concentrados em X irão entrar na análise do plano ZY,
// e os de Y irão entrar na do plano ZX


// Gráfico do momento fletor no eixo

/*Equação genérica:
FDx*i + F23*(i-d1) + M23y + F54x*(i-d2) + M54y

FDx*i| + F23*(i-d1) + M23y |+ F54x*(i-d2) + M54y|
   1            2                     3
Considerando que o eixo D é o da esquerda no inicio da questão
*/

let D23D = Math.abs(dCDz) - Math.abs(dC3z)
let D2345 = Math.abs(dC3z) - Math.abs(dC4z)
let DC45 = Math.abs(dC4z)

//Plano XZ

for (i = 0, MFx = [] ; i<=D23D;i = i+0.5){
    x = FD[0]*i
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}

for (i = D23D; i<=(D23D+D2345); i = i+0.5){
    x = FD[0]*i + F23[0]*(i-D23D) + pm1[1] 
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}

for (i = (D23D+D2345); i<=(D23D+D2345+DC45); i = i+0.5){
    x = FD[0]*i + F23[0]*(i-D23D) + pm1[1] + F54[0]*(i-(D23D+D2345)) + pm2[1] 
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}
//Dessa forma, o vetor MFx tem todos os valores dos momentos no eixo X

let MmaxxB
let MpxB = Math.max.apply(null, MFx)// retorna o maior valor positivo
let MnxB = Math.min.apply(null, MFx)// retorna o maior valor negativo
Math.abs(MpxB)>Math.abs(MnxB) ? MmaxxB = MpxB : MmaxxB = MnxB //compara qual o maior
//console.log(Mmaxx)

//Assim tem-se o maior momento no eixo X.


//Plano YZ

for (i = 0, MFy = [] ; i<=D23D;i = i+0.5){
    x = FD[1]*i
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}

for (i = D23D; i<=(D23D+D2345); i = i+0.5){
    x = FD[1]*i + F23[1]*(i-D23D) + pm1[0] 
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}

for (i = (D23D+D2345); i<=(D23D+D2345+DC45); i = i+0.5){
    x = FD[1]*i + F23[1]*(i-D23D) + pm1[0] + F54[1]*(i-(D23D+D2345)) + pm2[0] 
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}
//Dessa forma, o vetor MFy tem todos os valores dos momentos no eixo y

let MmaxyB
let MpyB = Math.max.apply(null, MFy)// retorna o maior valor positivo
let MnyB = Math.min.apply(null, MFy)// retorna o maior valor negativo
Math.abs(MpyB)>Math.abs(MnyB) ? MmaxyB = MpyB : MmaxyB = MnyB //compara qual o maior
//console.log(MmaxyB)

//Assim tem-se o maior momento no eixo Y.

//Determinação do maior momento fletor no eixo.

if (Math.abs(MmaxxB) > Math.abs(MmaxyB)) {
    console.log('O momento fletor máximo no eixo \'b\' é de '+ MmaxxB.toFixed(2) + ' lbf.in em X')
}
else{
    console.log('O momento fletor máximo no eixo \'b\' é de '+ MmaxyB.toFixed(2) + ' lbf.in em Y') 
}


//DETERMINAÇÃO DOS VETORES DE POSIÇÃO
//Eixo c

//Determinação do mancal com carregamento axial
let LE45 = []
let LEF = []

i = F45[2]
if (i > 0) {
    LE45 = [0 , dE5y , dE5z],
    LEF = [0 , 0 , dEFz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'c\' é o esquerdo')
}
else {
    LE45 = [0 ,dE5y , -(dEFz - dE5z)], 
    LEF = [0 , 0 , -dEFz],
    console.log('O mancal que irá suportar o carregamento axial no eixo \'c\' é o direito')
}

//ANÁLISE DO MOMENTO

//LE45 x F45 + LEF x FF

let pv4 = new Array(3)
pv4[0] = (LE45[1]*F45[2]-LE45[2]*F45[1])
pv4[1] = (LE45[2]*F45[0]-LE45[0]*F45[2])
pv4[2] = (LE45[0]*F45[1]-LE45[1]*F45[0])

// Determinação da força de reação no mancal sem carregamento axial

let FE = [0, 0, 0]
let FF = [0, 0, 0]

if (i > 0) {
     FF[0] = (-pv4[1] / LEF[2]),
     FF[1] = (-pv4[0] / -LEF[2])
}
else {
    FE[0] = (-pv4[1]  / LEF[2]),
    FE[1] = (-pv4[0]  / -LEF[2])
}

//Somatório das forças

//F45 + FE + FF

if (i>0) {
    FE[0] = -(F45[0]  + FF[0]),
    FE[1] = -(F45[1]  + FF[1]),
    FE[2] = -(F45[2]  + FF[2])
}
else {
    FF[0] = -(F45[0]  + FE[0]),
    FF[1] = -(F45[1]  + FE[1]),
    FF[2] = -(F45[2]  + FE[2])
}
console.log('FE = ',FE)
console.log('FF = ',FF)

//Cálculo dos momentos concentrados

let LM45 = [0, -di5/2, 0] //Distância do eixo ao ponto de aplicação da força

//LM32 x F32 = M32
let pm4 = new Array(3)
pm4[0] = (LM45[1]*F45[2]-LM45[2]*F45[1])
pm4[1] = (LM45[2]*F45[0]-LM45[0]*F45[2])
pm4[2] = (LM45[0]*F45[1]-LM45[1]*F45[0])

// Gráfico do momento fletor no eixo

/*Equação genérica:
FFx*i + F45*(i-d1) + M45y 

FFx*i| + F45*(i-d1) + M45y 
   1            2         
Considerando que o eixo F é o da esquerda no inicio da questão
*/

let D45F = Math.abs(dEFz) - Math.abs(dE5z)
let DFE = Math.abs(dEFz)

//Plano XZ

for (i = 0, MFx = [] ; i<=D45F;i = i+0.5){
    x = FF[0]*i
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}

for (i = D45F; i<=(DFE); i = i+0.5){
    x = FF[0]*i + F45[0]*(i-D45F) + pm4[1] 
    MFx.push(x)
    //console.log(i)
    //console.log(MFx)
}
//Dessa forma, o vetor MFx tem todos os valores dos momentos no eixo X

let MmaxxC
let MpxC = Math.max.apply(null, MFx)// retorna o maior valor positivo
let MnxC = Math.min.apply(null, MFx)// retorna o maior valor negativo
Math.abs(MpxC)>Math.abs(MnxC) ? MmaxxC = MpxC : MmaxxC = MnxC //compara qual o maior
//console.log(MmaxxC)
//Assim tem-se o maior momento no eixo X.

//Plano YZ

for (i = 0, MFy = [] ; i<=D45F;i = i+0.5){
    x = FF[1]*i
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}

for (i = D45F; i<=(DFE); i = i+0.5){
    x = FF[1]*i + F45[1]*(i-D45F) + pm4[0] 
    MFy.push(x)
    //console.log(i)
    //console.log(MFy)
}
//Dessa forma, o vetor MFy tem todos os valores dos momentos no eixo Y

let MmaxyC
let MpyC = Math.max.apply(null, MFy)// retorna o maior valor positivo
let MnyC = Math.min.apply(null, MFy)// retorna o maior valor negativo
Math.abs(MpyC)>Math.abs(MnyC) ? MmaxyC = MpyC : MmaxyC = MnyC //compara qual o maior
//console.log(MmaxyAC)
//Assim tem-se o maior momento no eixo Y.

//Determinação do maior momento fletor no eixo.

if (Math.abs(MmaxxC) > Math.abs(MmaxyC)) {
    console.log('O momento fletor máximo no eixo \'c\' é de '+ MmaxxC.toFixed(2) + ' lbf.in em X')
}
else{
    console.log('O momento fletor máximo no eixo \'c\' é de '+ MmaxyC.toFixed(2) + ' lbf.in em Y') 
}


/*OBS 
mudar nome do vetor distancia do mancal de LA etc para LM... (197,)
mudar distância do eixo para o ponto de aplicação de LM para La,Lb,Lc etc...(259,)
(121) estabelecer método para determinar a engrenagem motora do sistema e analisar os impactos disso no memsmo
(138) deve ser adicionado um if na definição do sentido da força axial para, caso a engrenagem usada tenha dentes retos, ela seja igual a zero
(158) fazer um if para determinar qual engrenagem será a motora no restante dos sistemas a partir de apenas uma
(169) essas linhas de código podem ser substituídas usando o mesmo if da linha 158, assim ao determinar qual será a engrenagem motora do par e o sentido de rotação,
já será determinado qual o sentdo da força axial, se ela existir.
*/
//(276)