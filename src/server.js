import express from "express";
import Morgan from "Morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/VideoRouter";
import { localsMiddleware } from "./middlewares";

// create an application
const app = express();
const logger = Morgan("dev");
app.use(logger);


// setting the application
app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: "false",
    saveUninitialized: "false",
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
})
);

app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;
