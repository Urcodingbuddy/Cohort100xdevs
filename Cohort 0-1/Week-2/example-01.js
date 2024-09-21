const express = require("express")
const app = express();
const user = [{
    name: "john",
    kidneys: [{
        healthy: false
    }]
}]

app.use(express.json());

app.get("/", function (req, res) {
    const johnKidneys = user[0].kidneys;
    const numberOfKidneys = johnKidneys.length;
    let numberOfHealthyKidneys = 0;


    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy === true) {
            numberOfHealthyKidneys++;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })


    console.log(johnKidneys)
})


app.post("/", function (req, res) {
    if (req.body && req.body.isHealthy !== undefined) {
        const isHealthy = req.body.isHealthy;
        user[0].kidneys.push({
            healthy: isHealthy
        });

        res.json({
            msg: "Done!"
        });

    }
    else {
        res.status(400).json({
            msg: "Invalid request. Please provide 'isHealthy' as a body parameter."
        });
    }
})

app.put("/", function (req, res) {

    for (let i = 0; i < user[0].kidneys.length; i++) {
        if (!user[0].kidneys[i].healthy) {
            user[0].kidneys[i].healthy = true;
        }
    }
    res.json({});
})




app.delete("/", function (req, res) {
    let numberOfUnhealthyKidneys = user[0].kidneys.filter(kidney => !kidney.healthy).length;
    if (numberOfUnhealthyKidneys > 0) {
        user[0].kidneys = user[0].kidneys.filter(kidney => kidney.healthy);
        res.json({ msg: "done" });
    } else {
        res.status(411).json({
            msg: "You have no bad Kidneys "
        })
    }
})

function IsThereleastOneUnhealthyKidney() {
    return user[0].kidneys.some(kidney => !kidney.healthy);
}

app.listen(3000, '0.0.0.0', () => {
    console.log('Server is running on http://localhost:3000');
});


// Nesting Example -

/*
var user = [
    {
        name: "John",
        age: 25,
        kidney: [{
            healthy: true
        }, {
            healthy: false
        }]
    }]
*/


// app.delete("/", function (req, res) {

//     if(IsThereleastOneUnhealthyKidney()){
//         let newKidney = []
//     user[0].kidneys = user[0].kidneys.filter(kidney => kidney.healthy);
//     newKidney.push({
//         healthy: true
//     })
//     user[0].kidneys = newKidney;
//     res.json({msg : "done"});
//     }else{
//         res.status(411).json({
//             msg: "You have no bad Kidneys "
//         })
//     }
// })