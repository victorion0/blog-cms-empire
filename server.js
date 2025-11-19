const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const dotenv = require('dotenv');
const postRoutes = require('./routes/posts');

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// Welcome Page
app.get('/', (req, res) => {
  res.send(`
    <div class="kadence-launch-hero" style="
  text-align: center;
  padding: 160px 20px 140px;
  max-width: 960px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 25px 70px rgba(0,0,0,0.08);
  position: relative;
  overflow: hidden;
">
  <!-- Optional subtle top accent bar — pure Kadence vibe -->
  <div style="position: absolute; top: 0; left: 0; right: 0; height: 8px; background: linear-gradient(90deg, #3176e9, #00c8b4);"></div>

  <h1 style="
    font-size: 62px;
    font-weight: 900;
    color: #1e1e1e;
    margin: 0 0 12px;
    line-height: 1.05;
    letter-spacing: -1.5px;
  ">
    BLOG CMS BACKEND LIVE!
  </h1>

  <h2 style="
    font-size: 40px;
    font-weight: 800;
    color: #3176e9;             /* Kadence default primary blue */
    margin: 0 0 36px;
  ">
    Make 1m with Victor
  </h2>

  <p style="
    font-size: 22px;
    color: #444444;
    margin-bottom: 52px;
    line-height: 1.6;
  ">
    API endpoint: <code style="
      background: #e8f0fe;
      color: #3176e9;
      padding: 6px 14px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 20px;
    ">/api/posts</code>
  </p>

  <a href="/api/posts" class="kadence-button" style="
    display: inline-block;
    background: #3176e9;
    color: #ffffff;
    font-size: 20px;
    font-weight: 700;
    padding: 18px 48px;
    border-radius: 12px;
    text-decoration: none;
    box-shadow: 0 12px 30px rgba(49, 118, 233, 0.35);
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    text-transform: uppercase;
    letter-spacing: 0.5px;
  ">
    See Posts
  </a>

  <p style="
    margin-top: 80px;
    color: #888888;
    font-size: 16px;
    font-weight: 500;
  ">
    Built by Victor — 2025
  </p>
</div>

<!-- Kadence-style hover (add to Kadence → Customizer → Global CSS or Additional CSS) -->
<style>
  .kadence-button:hover {
    background: #1e5ed4;
    transform: translateY(-5px);
    box-shadow: 0 20px 45px rgba(49, 118, 233, 0.45);
  }
  @media (max-width: 768px) {
    .kadence-launch-hero h1 { font-size: 48px; }
    .kadence-launch-hero h2 { font-size: 34px; }
    .kadence-launch-hero { padding: 120px 20px; }
  }
</style>
  `);
});

// Routes
app.use('/api/posts', postRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`BLOG CMS dey run for port ${PORT} – Make 1m with Victor!`);
  console.log(`Test: http://localhost:${PORT}/api/posts`);
});