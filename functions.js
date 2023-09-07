
const funcion_series = () => {
    const url = "https://gateway.marvel.com/v1/public/comics?ts=1&apikey=28bfea47e9dfebb99eb345f7006521c4&hash=6e7bf39a11e12436c2dfedfda7ed397d"
    let serie
    let divisor_serie
    let autor
    const contenedor_series = document.getElementById("series") 
    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.data.results.forEach(element => {
                divisor_serie = document.createElement("div")
                serie = document.createElement("a")
                autor = document.createElement("p")
                autor.textContent = element.creators.items[0].name
                serie.textContent = element.title
                serie.href = element.urls[0].url
                contenedor_series.appendChild(divisor_serie)
                divisor_serie.appendChild(serie)
                divisor_serie.appendChild(autor)

                console.log([element.title,element.urls[0].url])
            });
            
        })

}