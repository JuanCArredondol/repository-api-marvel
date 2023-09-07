
const funcion_comics = () => {
    const url = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=28bfea47e9dfebb99eb345f7006521c4&hash=6e7bf39a11e12436c2dfedfda7ed397d"
    let comic
    let divisor_comic
    let autor
    const contenedor_series = document.getElementById("comics") 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.data.results.forEach(element => {
                divisor_comic = document.createElement("div")
                comic = document.createElement("a")
                autor = document.createElement("p")
                autor.textContent = "No Author"
                if (parseInt(element.creators.available) >0)
                    autor.textContent = element.creators.items[0].name
                comic.textContent = element.title
                comic.href = element.urls[0].url
                contenedor_series.appendChild(divisor_comic)
                divisor_comic.appendChild(comic)
                divisor_comic.appendChild(autor)

            });
            console.log("Status:200")
            
        })
        .catch((error) => console.log("Status:100"))

}