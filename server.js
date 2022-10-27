const express = require('express');

const app = express();

const PORT = process.env.PORT || 3001;
app.use(express.json());

app.get("/",(req,res)=>{
    res.status(200).json({
        status: 'success',
        data: {
            slackUsername: "Menez",
            backend: true,
            age: 25,
            bio: "Hi my name is Henry Ugochukwu Agu, i am a backend developer with one year experience and desire to network, learn more and become a pro developer"
        }
    })
})



app.listen(PORT,()=>{
    console.log(`Server is listening at port ${PORT}`);
})