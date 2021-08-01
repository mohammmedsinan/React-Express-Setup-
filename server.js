const express = require("express");
//init the express
const app = express();
//routing the express app
app.get("/api/customers" , (req , res) => {

    const customers = [
        {id:1 , name:"Mohammed" , Age: 18 , job:"Porgrammer"},
        {id:2 , name:"Sinan" , Age: 45 , job:"PioMaters"},
        {id:3 , name:"Sulafh" , Age: 42 , job:"Teacher"},
        {id:4 , name:"Yamamh" , Age: 14 , job:"nothing"},
        {id:5 , name:"jaffer" , Age: 19 , job:"nothing"},
    ];

    res.json(customers);
})
//port that open in bro
const port = 5000;

app.listen(port , () => console.log(`server started on ${port}`))