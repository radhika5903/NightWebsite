const cats = document.getElementById('cat')
const catfacturl = "https://catfact.ninja/fact"
const button = document.getElementById('btn')


async function catfact()
{
    const response = await fetch(catfacturl);
    const data = await response.json();
    console.log(data)
    cats.innerText = data.fact
}

btn.addEventListener('click' , ()=>{
    console.log("The cat (Felis catus), also referred to as domestic cat or house cat, is a small domesticated carnivorous mammal. It is the only domesticated species of the family Felidae");
    catfact()
})