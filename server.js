import express from 'express';
import session from 'express-session';
import passport from 'passport';
import { config } from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';

// Routes
import authRoutes from './routes/auth.js';
import downloadRoutes from './routes/download.js';
import apiRoutes from './routes/api.js';
import adminRoutes from './routes/admin.js';
import userRoutes from './routes/user.js';
import platformRoutes from './routes/platforms.js';

// Database
import { initializeDatabase } from './database/db.js';

config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Trust proxy (Render sits behind a proxy)
app.set('trust proxy', 1);

// Force HTTPS in production
app.use((req, res, next) => {
    if (process.env.NODE_ENV === 'production' && req.headers['x-forwarded-proto'] !== 'https') {
        return res.redirect('https://' + req.headers.host + req.url);
    }
    next();
});

// Session
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { 
        secure: process.env.NODE_ENV === 'production',
        maxAge: 24 * 60 * 60 * 1000 
    }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

// Routes
app.use('/auth', authRoutes);
app.use('/api/download', downloadRoutes);
app.use('/api/v1', apiRoutes);
app.use('/admin', adminRoutes);
app.use('/user', userRoutes);
app.use('/api/platforms', platformRoutes);

// Frontend routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});

app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.get('/developer', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'developer.html'));
});

app.get('/admin-panel', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'admin.html'));
});

// Initialize database and start server
async function startServer() {
    await initializeDatabase();
    app.listen(PORT, () => {
        console.log(`🎭 PHANTOM Media Downloader running on http://localhost:${PORT}`);
    });
}

startServer();
