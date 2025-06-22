const jokesContent=document.querySelector('.jokes-content');
const button = document.getElementById("btn");
const apiUrl = "https://icanhazdadjoke.com/";
// function generateJoke(){

//  fetch(apiUrl, {headers: {Accept: 'application/json',},}).then((res)=>{
//     // console.log(res);
//     return res.json();
//  }).then((data)=>{
//     jokesContent.textContent=(data.joke);
//  })
//  .catch((error)=>{
//     console.log(error);
//  });
// }
// generateJoke();
async function generateJoke(){
    try{
    const res =  await fetch(apiUrl, {headers: {Accept: 'application/json',},});
    // console.log(res);
    const data =await res.json();
    // console.log(data.joke);
    jokesContent.textContent=data.joke;
    }
    catch(error){
        jokesContent.textContent=error;
        // console.log(error);
    }
}
generateJoke();
button.addEventListener('click', generateJoke)