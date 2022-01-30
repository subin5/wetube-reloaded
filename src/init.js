import "dotenv/config";
import "./db"; // connect database
import "./models/Video";
import "./models/User";
import "./models/Comment";
import app from "./server";

const PORT = 4000;

// open the application to outside
const handleListening = () => 
    console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening);