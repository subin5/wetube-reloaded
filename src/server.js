import express from "express";
import Morgan from "Morgan";
import session from "express-session";
import MongoStore from "connect-mongo";
import rootRouter from "./routers/rootRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/VideoRouter";
import apiRouter from "./routers/apiRouter";
import { localsMiddleware } from "./middlewares";
import flash from "express-flash";

// create an application
const app = express();
const logger = Morgan("dev");
app.use(logger);


// setting the application
app.set("view engine", "pug")
app.set("views", process.cwd() + "/src/views")
app.use(logger);
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: "false",
    saveUninitialized: "false",
    store: MongoStore.create({ mongoUrl: process.env.DB_URL }),
})
);
app.use(flash());
app.use((_, res, next) => {
    res.header('Cross-Origin-Opener-Policy', 'same-origin');
    res.header('Cross-Origin-Embedder-Policy', 'require-corp');
    next();
});
app.use(localsMiddleware);
app.use("/uploads", express.static("uploads"));
app.use("/static", express.static("assets"));
app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);
app.use("/api", apiRouter);

export default app;
