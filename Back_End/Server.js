const express=require('express')
const app=express();


app.get('/',(req,res)=>{
    console.log('Defaults Router');
})


app.listen(3000,()=>{
    console.log('Server started Running on port:3000');
})