//document.getElementById(".link").style.display = "none";

const getElID = document.getElementById("button");
if(getElID){
    getElID.addEventListener('click', function viewDiv(){ 
        document.getElementById("loader").style.display = "inline"; 
        document.getElementById("link").style.display = "inline";

    });
}
    
const divImages = document.querySelector(".divImages");
const btn = document.querySelector("#button");


// async function fetchToDo() {

//     const URL = "https://dog.ceo/api/breeds/image/random/20";
//     try {
//         const res = await fetch(URL);
//         const data = await res.json();
      
//         if (data) {
//             console.log(data);
//         }
//     } catch (error) {
//         console.error(error.message);
//     }
//     console.log("Function done");

// }

// fetchToDo();


btn.addEventListener("click", async()=>{
    
    const res = await fetch("https://dog.ceo/api/breeds/image/random/20");
    const data = await res.json();

    async function fetchToDo() {

        const URL = "https://dog.ceo/api/breeds/image/random/20";
        try {
            // const res = await fetch(URL);
            // const data = await res.json();
          
            if (data) {
                console.log(data);
            }
        } catch (error) {
            console.error(error.message);
        }
        console.log("Function done");

        
        
    }
    fetchToDo();

    data.message.forEach(photo => {divImages.innerHTML +=`<img src='${photo}' id = "dog-image" >`;})
    document.getElementById("loader").style.display = "none";
    
;})