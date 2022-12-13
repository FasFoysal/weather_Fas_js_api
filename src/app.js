const express = require("express");
const app = express();
const path = require("path");
const requests = require('requests');
const hbs = require("hbs");

const port = process.env.port || 8000;
const viewsPath = path.join(__dirname,"../template");
app.use('/coustom', express.static(path.join(__dirname, '../template/coustom')));
app.use('/bootstrap', express.static(path.join(__dirname, '../node_modules/bootstrap/dist')));
app.use('/design', express.static(path.join(__dirname, '../template/coustom')));
app.use(express.urlencoded())

app.set("view engine","hbs")
app.set('views',viewsPath);
const partialPath = path.join(__dirname, '../template/partials');
hbs.registerPartials(partialPath);

app.get("/",(req,res)=>{
  res.render("index")
})


app.post('/weather',(req,res)=>{

  let location = req.body.loction;
     requests(`http://api.weatherapi.com/v1/current.json?key=8d983a242f4e482e803121409201911&q=${location}&aqi=yes`)
    .on("data", (chunk) =>{
      const jsonToObj =  JSON.parse(chunk);

      const icon = jsonToObj.current.condition.icon;
      const city = jsonToObj.location.name;
      const country = jsonToObj.location.country;
      const temp = jsonToObj.current.temp_c;
      const condition = jsonToObj.current.condition.text;
      const time = jsonToObj.location.localtime;
      res.status(200).render("weather",{img:icon,city:`City: ${city}`,country:`country: ${country}`,temp:`${temp}° C`, condition:`Condition: ${condition}`,time:`Local time: ${time}`})
    })
})
app.get('/weather', (req,res)=>{

     requests("http://api.weatherapi.com/v1/current.json?key=8d983a242f4e482e803121409201911&q=bangladesh&aqi=yes")
    .on("data", (chunk) =>{
      const jsonToObj =  JSON.parse(chunk);
      const icon = jsonToObj.current.condition.icon;
      const city = jsonToObj.location.name;
      const country = jsonToObj.location.country;
      const temp = jsonToObj.current.temp_c;
      const condition = jsonToObj.current.condition.text;
      const time = jsonToObj.location.localtime;
    res.status(200).render("weather",{img:icon,city:`City: ${city}`,country:`country: ${country}`,temp:`${temp}° C`, condition:`Condition: ${condition}`,time:`Local time: ${time}`})
    })

})

app.get("*",(req,res)=>{
  res.send("error")
})

// connect to port 
app.listen(port,()=>{
    console.log(`Server open port in ${port}`)
})