require('dotenv').config();
const express=require('express');
const app=express();
const port=4000;
const githubData={Mobiles: {
    title: "Mobiles",
    keywords: [],
    filters: {
      Brand: {
        filterName: "Brand",
        filterList: [
          "Apple",
          "Samsung",
          "Redmi",
          "Jio",
          "OnePlus",
          "Realme",
          "Oppo",
          "Vivo",
          "Mi",
        ],
      },
    },
},
}

app.get('/',(req,res)=>{
    res.send('Hello World!');

});
app.get('/twitter',(req,res)=>{
    res.send('roshanmahto');

});
app.get('/login',(req,res)=>{
    res.send('<h1>please loogin at chai aur code</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send('<h2>chai to pina h youtube</h2>')
})
app.get('/github',(req,res)=>{
    res.json(githubData)
})
app.listen(process.env.PORT,()=>{   
    console.log(`Example app listening on port${port}`);

})