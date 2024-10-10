
import express, { Request, Response, NextFunction } from "express";

const app = express();

let requestCount = 0;

function middleware(req: Request, res: Response, next: NextFunction) {
    requestCount++;
    next()
}

app.use(middleware);

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world");
})

app.get("/requestCount", (req: Request, res: Response) => {
    res.json({
        requestCount,
    })
})

app.listen(3000, "0.0.0.0", () => {
    console.log(`Running on PORT: 3000\nLive on link: http://localhost:3000`)
});

