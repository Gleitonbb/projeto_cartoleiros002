const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
 
    const jogadores = [
    {nome:"Gleiton", time:"Flamengo", pontuacao: 850, imagem:"imagem/gleiton.jpg"},
    {nome:"Ingrid", time:"Flamengo", pontuacao:830, imagem:"imagem/ingrid.jpg"},
    {nome:"Taty", time:"Vasco", pontuacao: 1100, imagem:"imagem/taty.jpg"},
    {nome:"Vinicio", time:"São Paulo", pontuacao:1050, imagem:"imagem/vinicio.jpg"},
    {nome:"Nadya", time:"Flamengo", pontuacao:1120, imagem:"imagem/nadya.jpg"},
    {nome:"Nilton", time:"Paumeiras", pontuacao:755, imagem:"imagem/nilton.jpg"},
    {nome:"Danilo", time:"Paumeiras", pontuacao:900, imagem:"imagem/danilo.jpg"},
]

    jogadores.sort((a, b)=>b.pontuacao - a.pontuacao)
    
     
     jogadores.sort((upu, pos)=>{
     const Div = document.createElement("div")  
     const img = document.createElement("img")
     img.setAttribute("src",upu.imagem)
     img.setAttribute("class","imagem")
     Div.setAttribute("id","jo")    
     Div.setAttribute("class","jogador jo")
     Div.innerHTML = `Jogador:${upu.nome}<br/> Time do coração:<strong>${upu.time}<br/></strong> Pontuação:<strong>${upu.pontuacao}</strong>`
     caixa1.appendChild(Div)
     Div.appendChild(img)
    }) 
    

  const JogadorLider = jogadores.filter((upu, pos)=>{
       jogadores.sort((a, b)=>b.pontuacao - a.pontuacao)
       
       if(pos === 0){
         const DivLider = document.createElement("div")
        const img = document.createElement("img")
        img.setAttribute("src",upu.imagem)
        img.setAttribute("class","imagemLider")
        DivLider.setAttribute("id","j0"+pos)    
        DivLider.setAttribute("class","lider li")
        DivLider.innerHTML = `Jogador Lider do Campeonato:${upu.nome}`
        caixa2.appendChild(DivLider)
        caixa2.appendChild(img)
       }
       
  })
     
