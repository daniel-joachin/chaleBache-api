import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import cors from 'cors'
import path from 'path'

import potholeRouter from './routes/pothole.js'
import adminRouter from './routes/admin.js'

import db from './config/db.js'

db()

const app = express();

// view engine setup

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())

app.get('/', (req, res) => {
  express.static(path.join(__dirname, "frontEnd","build"))
})

app.use('/admin', adminRouter)
app.use('/api/potholes', potholeRouter);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
});

export default app
