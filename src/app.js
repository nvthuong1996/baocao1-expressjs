import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import global from './global';

import express_session from 'express-session';
import indexRouter from './routes/index';
import loginRouter from './routes/login';
import crawlerRouter from './routes/crawlerAPI';
import signupRouter from './routes/signupAPI';
import accountRouter from './routes/accountAPI';
import conversionRouter from './routes/conversion';
import webhooksRouter from './routes/webhooks';
import linkgrouplopRouter from './routes/grouplop';



const session = express_session({
  secret : "secret",
});

import {auth_passport} from './auth';

import model from "./model";

//test
import * as test from "./test";
//test.setMenu();


// import thread_setting from './messenger-api-helpers/thread-setup';

// thread_setting.setDomainWhitelisting();
// thread_setting.setGetStarted();
// thread_setting.setPersistentMenu();


//model.sequelize.sync({force: true}).then(() => {
//   // Table created
  
//});

//import {createConversionFromMonHoc} from "./tool/updateMonHocvaTKB";


//createConversionFromMonHoc();

var app = express();


//Authenticate
app.use(session)
.use(auth_passport.initialize())
.use(auth_passport.session());


// view engine setup
app.set('views', './views');

app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static('./public'));


app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/api/qldt', crawlerRouter);
app.use('/api/signup', signupRouter);
app.use('/api/account', accountRouter);
app.use('/conversion', conversionRouter);
app.use('/webhook', webhooksRouter);
app.use('/grouplop', linkgrouplopRouter);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

export {app,session};
