const jokesContent=document.querySelector('.jokes-content');
const button = document.getElementById("btn");
const apiUrl = "https://icanhazdadjoke.com/";
function generateJoke(){

 const joke = fetch(apiUrl, {headers: {Accept: 'application/json',},}).then((res)=>{
    // console.log(res);
    return res.json();
 }).then((data)=>{
    jokesContent.textContent=(data.joke);
 })
 .catch((error)=>{
    console.log(error);
 });
}
generateJoke();
button.addEventListener('click', generateJoke)