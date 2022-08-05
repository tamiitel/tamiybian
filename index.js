const fetchData = async (id) => {
    try {
        console.log('id',id)
        const res= await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        const data = await res.json()
        console.log (data)
        const pokemon = {
            id: id,
            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`,
            imgJuego: data.sprites.front_default,
            imgCvg: data.sprites.other.dream_world.front_default,
            nombre: data.name,
            exp:data.base_experience, 
            hp:data.stats[0].base_stat, 
            atk:data.stats[1].base_stat, 
            def:data.stats[2].base_stat,
            speed:data.stats[5].base_stat}
           
    console.log(pokemon);
    return(pokemon);
    
    }
    catch(error){
        console.log(error)
    }
}
const printCards =async() => {
    let pokemons = []
    let html=''
    for(let i=1;i<=300;i++){
      pokemons.push(await fetchData(i))
    } 
    pokemons.forEach(pokemon => {
        html+=`<div class="col-4">
    <div class="card">
        <h1>${pokemon.nombre}</h1>
        <img src="${pokemon.img}" alt"${pokemon.nombre}"/>
        <h3>${pokemon.exp}</h3>
        <ol>
            <li>HP:${pokemon.hp}</li>
            <li>ATK:${pokemon.atk}</li>
            <li>DEF:${pokemon.def}</li>
            <li>SPEED:${pokemon.speed}</li>
        
        </ol>
    </div>
    </div>`
    });
    


  


const contenedorApp = document.querySelector('#app');
contenedorApp.innerHTML = html;

}
printCards();
 
    

        
