document.querySelector('.search-box').addEventListener('input',async(param)=>{
    const CityName = param.target.value;
    console.log(CityName);

    let Days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let Months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const TodayTime = new Date();
    const ApiURL = `https://api.openweathermap.org/data/2.5/weather?q=${CityName}&units=metric&appid=01525b1923322486597bf9c18edb85a3`;

    try{
        let Data = await fetch(ApiURL);
        let JSONData=await Data.json();
        console.log(JSONData);

        document.querySelector('.city').innerHTML=JSONData.name + "," +JSONData.sys.country;
        document.querySelector('.date').innerHTML = Days[TodayTime.getDay()] + "" + TodayTime.getDate() + " " + Months[TodayTime.getMonth()] + " " + TodayTime.getFullYear();

        document.querySelector('.temp').innerHTML = JSONData.main.temp + '°c';
        document.querySelector('.weather').innerHTML = JSONData.weather[0].main;
        document.querySelector('.hi-low').innerHTML = JSONData.main.temp_min + "°c/" + JSONData.main.temp_max + "°c";
    }catch(err){
        console.log(err.message);
    }

})