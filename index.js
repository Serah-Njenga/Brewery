let fetchData;
 fetch("http://localhost:3000/Brewery") 
 .then((result) => result.json())
 .then((res) => {
    fetchData = res;
    start(res);
 })

 .catch((error) => console.log(error));

function myCards(Beer) {
    const parentDiv = document.createElement("div");
    parentDiv.className = "cards";
    const Img = document.createElement("img"); 
    Img.src = Beer.image;
    Img.style = "width:100%";
    const smalldiv = document.createElement("div");
    smalldiv.className = "small";
    const h4 = document.createElement("h4");
    h4.innerText = Beer.state
    const paragraph = document.createElement("p");
    paragraph.innerText = "Beer.brewery_type";
    const buyButton = document.createElement("Button");
    buyButton.innerText = "Buy";
    const sellButton = document.createElement("Button");
    sellButton.innerText = "Sell"


    parentDiv.appendChild(Img)
    parentDiv.appendChild(smalldiv)
    smalldiv.appendChild(h4)
    smalldiv.appendChild(paragraph)
    smalldiv.appendChild(buyButton)
    smalldiv.appendChild(sellButton)
   
    
    return parentDiv;
    }

    const start = (Brewery) => {
    
        const mainDiv = document.createElement("Div");
        mainDiv.className = "main";
        
        document.body.appendChild(mainDiv);
        
        Brewery.forEach(Brewery => {
            const everything = myCards(Brewery);
            mainDiv.append(everything);
        })
        
        };

        const buyButton = addEventListener("click", () => {
            buyButton.style.display = "block"; 

        });
        const sellButton =addEventListener("click", () => {
            sellButton.style.display = "block";
        });

