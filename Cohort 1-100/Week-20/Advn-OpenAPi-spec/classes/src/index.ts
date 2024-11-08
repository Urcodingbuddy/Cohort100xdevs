
import { once, measure } from "helpful-decorators";


class DataClass {
    private timeZone: string;

    constructor(timeZone: string){
        this.timeZone = timeZone;
    }

    
    // get("/todos"){
    //     const body = req.body.title;
        
    // }

    // @ts-ignore
    @measure
    getTime(){
        var d = new Date();
        console.log("Once")
        return d.getTime();
    }
}

const dataObject = new DataClass("IND");
dataObject.getTime();
dataObject.getTime();
dataObject.getTime();
dataObject.getTime();
