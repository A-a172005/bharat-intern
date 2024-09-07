var inputvalue=document.querySelector('#cityinput');
var btn=document.querySelector('#add');
var city=document.querySelector('#cityoutput');
var descrip=document.querySelector('#description');
var temp=document.querySelector('#temp');
var wind=document.querySelector('#wind');
apik ="4761b3f3bf57638f711c0d0ee39cd6e2";
function convertion(val)
{
    return (val-273).toFixed(3)  //to celcius
}

btn.addEventListener('click',function()
{
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputvalue.value+'&appid='+apik)
    .then(res => res.json())

    .then(data =>
    {
        var nameval = data['name']
        var descrip = data['weather']['0']['description']
        var temprature = data['main']['temp']
        var wndspeed = data['wind']['speed']


        city.innerHTML=`Weather of <span>${nameval}<span>`
        temp.innerHTML=`Temprature: <span>${ convertion(temprature)} C</span>`
        description.innerHTML=`Sky conditions: <span>${descrip}<span>`
        wind.innerHTML=`Wind speed: <span>${wndspeed} km/h<span>`

    })

    .catch(err => alert('you entered wrong city name'))  // to catch error
})