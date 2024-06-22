import express from  'express'
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello World');
})
//get 5 jokes
app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {id:1,joke:"Why don't scientists trust atoms? Because they make up everything;"},
        {id:2,joke:"Why don't eggs tell jokes? They'd crack each other up!"},
    ]
    res.send(jokes)
});



const port=process.env.PORT||2008;
app.listen(port,()=>{
    console.log(`server is http://localhost:${port}`)
})