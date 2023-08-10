// se importa express para inicial app 
// luego iniciamos morgan para que use el dev 
// personalizado

import express from 'express'
import morgan from 'morgan'

const app = express()

app.use(morgan('dev'));
export default app;