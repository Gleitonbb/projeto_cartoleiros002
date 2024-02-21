const caixaJogadores = document.querySelector("#caixa_Jogadores")
 
const jogadores = [
    {nome:"Gleiton", time:"Flamengo", pontuacao: 850},
    {nome:"Ingrid", toime:"Flamengo", pontuacao:830},
    {nome:"Taty", time:"Vasco", pontuacao: 1100},
    {nome:"Vinicio", time:"São Paulo", pontuacao:1050},
    {nome:"Nadya", time:"Flamengo", pontuacao:680},
    {nome:"Caio", time:"Paumeiras", pontuacao:755},
    {nome:"Danilo", time:"Paumeiras", pontuacao:900},
]

    jogadores.sort((a, b)=>b.pontuacao - a.pontuacao)
    

     jogadores.sort((upu, pos)=>{
     const Div = document.createElement("div")
     Div.setAttribute("id","j0")    
     Div.setAttribute("class","jogador jo")
     Div.innerHTML = [`Jogador: ${upu.nome} Time do coração:${upu.time} Pontuação: ${upu.pontuacao}`]
     caixaJogadores.appendChild(Div)
   

 }) 
