import { formatPrice } from "./scripts/CurrencyFormat.js";

const baseUrl = "https://platzi-avo.vercel.app"
const url= `${baseUrl}/api/avo`;

const appNode = document.querySelector("#app");

//web api
window
    .fetch(url)
    .then((response)=>{
        return response.json();
    })
    .then((resJson)=>{
        const allAvocados = [];
        const avocados = resJson.data;
        avocados.forEach(item => {
            //Creando los nodos
            const container = document.createElement("div");
            
            //Imagen
            const image = document.createElement("img");
            image.src = `${baseUrl}${item.image}`;
            image.className = "h-16 w-16 md:h-24 md:w-24 rounded-full mx-auto md:mx-0 md:mr-6"

            //Titulo
            const title = document.createElement("h2");
            title.textContent = item.name;
            title.className = "text-green-500";
            title.classList.add("text-xl");
            title.addEventListener('click', () =>{
                window.alert("Hola compra un aguacatito porfi");
            });

            //Precio
            const price = document.createElement("div");
            price.textContent = formatPrice(item.price);
            price.className = 'text-gray-600'
            //Juntando Precio y Titulo
            const priceAndTitle = document.createElement('div')
            priceAndTitle.className = 'text-center md:text-left'
            priceAndTitle.append(title, price)

            //Juntando Todo
            const card = document.createElement('div')
            card.className = "md:flex bg-white rounded-lg p-6 hover:bg-gray-300"
            card.append(image, priceAndTitle)


            allAvocados.push(card);

            
        });
        
        appNode.append(...allAvocados);
    });
 