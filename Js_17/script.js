/* let userValue = prompt('Введите число');
if(userValue === null || Number.isNaN(+userValue) || userValue.trim()===''){
    console.log('Ошибка введённых данных');
}
else{
    console.log('ok');
} */
/* try{
    doSom();
} catch(err){
  console.dir(err.name);
}
finally{
    console.log('1000-7');
}
console.log('Magic');
 */
let apiKey = "69eea7577f7bdf59547ca01ebad31937";
 let city = "Minsk"; 
let url = `http://api.openweathermap.org/data/2.5/weather?id=15&q=${city}&lang=ru&units=metric&appid=${apiKey}`;

let sity = document.querySelector('.city');
let weather = document.querySelector('.weather');
let speed = document.querySelector('.speed');
let img = document.querySelector('img');
function update(w){
sity.innerText = w.name;
weather.innerText = w.weather[0].description;
speed.innerText = w.wind.speed;
img.src = 'http://api.openweathermap.org/img/w/' + w.weather[0].icon + '.png';
}

fetch(url)
.then(response => response.json())
.then(w => update(w))
.catch(err => console.log(err.name))

