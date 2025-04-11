import app from "./app";
import dotenv from "dotenv";

dotenv.config();

const PORT: number = Number(process.env.port) || 3000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
