const form = document.querySelector(".submit");
const nameInput = document.querySelector(".name");
const commentInput = document.querySelector(".comment");
const ulReviews = document.querySelector(".ul-reviews");

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
    // const h4 = document.createElement("h4");
    // h4.innerText = Beer.state
    // const paragraph = document.createElement("p");
    // paragraph.innerText = "10 Barrel Brewing Co - Denver";
    // const buyButton = document.createElement("Button");
    // buyButton.innerText = "Buy";
    const Button = document.createElement("Button");
    Button.innerText = "purchase";
    const h3 = document.createElement("h3");
    h3.innerText = "Address;826 W Bannock St";
    const p2 = document.createElement("p2")
    p2.textcontent = "826 W Bannock St"
    const h6= document.createElement("h6");
    h6.innerText = "City";
    const p3 = document.createElement("p3")
    p3.innerText =  "Denver"; 
    const h5 = document.createElement("h5");
    h5.innerText = "phone";
    const p4 = document.createElement("p4");
    p4.innerText = "303-788-1234";
    
    Button.addEventListener("click",() => {
        Button.style.background = "green";
        Button.style.background = "maroon";
    } )
    
     parentDiv.appendChild(Img)
    parentDiv.appendChild(smalldiv)
    // smalldiv.appendChild(h4)
    // smalldiv.appendChild(address_1)
    // smalldiv.appendChild(paragraph)
    smalldiv.appendChild(h3)
    smalldiv.appendChild(p2)
    smalldiv.appendChild(h6)
    smalldiv.appendChild(p3)
    smalldiv.appendChild(h5)
    smalldiv.appendChild(p4)
    // smalldiv.appendChild(buyButton)
    smalldiv.appendChild(Button)
    
   
    
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

        // const buyButton = addEventListener("click", () => {
        //     buyButton.style.display = "block"; 

        // });
        const Button = addEventListener("click", () => {
            Button.style.display = "block";
            
        });
        
        const comments = (e) => {
            e.preventDefault();
            fetch(`http://localhost:3000/Reviews`, {
            method: 'POST',
            headers: {
             "Content-Type": "application/json"
            },
            body: JSON.stringify(
             {
                       name: nameInput.value,
                       message: commentInput.value,
             }
            )
           })
           .then((result) => result.json())
           .then((res) => console.log(res))
           .catch((error) => console.log(error));
           };
           
           form.addEventListener('click', comments);

        let reviewData;
fetch("http://localhost:3000/Reviews")
.then((result) => result.json())
.then((res) => {
 reviewData = res;
 console.log('results --> ', res);
	reviewList(res);  
}).catch((e) => console.log(e))

 function reviewList (Reviews) {
		Reviews.forEach((r) => {
			const li = document.createElement("li")
			li.className = "lis"
			li.innerHTML = `
			<p>${r.name}</p>
			<p>${r.message}</p>
			`;
			ulReviews.append(li);
		})

	}

        

