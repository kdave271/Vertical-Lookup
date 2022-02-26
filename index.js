import express from "express"
import main from "./verticalLookup"
const cors = require('cors')
const app = express()

app.post('/',main);