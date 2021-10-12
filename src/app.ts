import express from 'express'
import morgan from 'morgan'
import passport from 'passport'
import cors from 'cors'
import passportMiddleware from './middlewares/passport'
import authRoutes from './routes/auth.route'
import specialRoutes from './routes/special.route'
import sumarRoutes from './routes/sumador.route'


//Initializations
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(cors());
//app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(passport.initialize());
passport.use(passportMiddleware);
// Routes
app.get('/', (req, res) => {
    res.send(`THIS IS API: http://localhost:${app.get('port')}`);
});

app.use(authRoutes);
app.use(specialRoutes);
app.use('/api',sumarRoutes);


export default app;