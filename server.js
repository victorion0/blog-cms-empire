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
    <div class="astra-launch-banner" style="
  text-align: center;
  padding: 140px 20px 120px;
  max-width: 900px;
  margin: 0 auto;
  font-family: inherit;
  background: linear-gradient(135deg, #f8f9fc 0%, #ffffff 100%);
  border-radius: 16px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.06);
">
  <h1 style="
    font-size: 58px;
    font-weight: 800;
    color: #1e1e1e;
    margin: 0 0 16px;
    line-height: 1.1;
    letter-spacing: -1px;
  ">
    BLOG CMS BACKEND LIVE!
  </h1>

  <h2 style="
    font-size: 38px;
    font-weight: 700;
    color: #0274be;            /* Astra's official 2025 primary blue */
    margin: 0 0 32px;
  ">
    Make 1m with Victor
  </h2>

  <p style="
    font-size: 21px;
    color: #555d66;
    margin-bottom: 48px;
    line-height: 1.7;
  ">
    API endpoint → <code style="
      background: #eef5ff;
      color: #0274be;
      padding: 4px 10px;
      border-radius: 6px;
      font-weight: 600;
    ">/api/posts</code>
  </p>

  <a href="/api/posts" class="astra-button" style="
    display: inline-block;
    background: #0274be;
    color: #ffffff !important;
    font-size: 19px;
    font-weight: 600;
    padding: 16px 40px;
    border-radius: 50px;
    text-decoration: none;
    box-shadow: 0 10px 30px rgba(2, 116, 190, 0.3);
    transition: all 0.35s ease;
  ">
    SEE POSTS
  </a>

  <p style="
    margin-top: 70px;
    color: #8898aa;
    font-size: 16px;
  ">
    Built by Victor • 2025
  </p>
</div>

<!-- Optional: Add to Astra → Customizer → Additional CSS for that perfect Astra hover glow -->
<style>
  .astra-button:hover {
    background: #015f9e;
    transform: translateY(-4px);
    box-shadow: 0 15px 40px rgba(2, 116, 190, 0.4);
  }
  @media (max-width: 768px) {
    .astra-launch-banner h1 { font-size: 46px; }
    .astra-launch-banner h2 { font-size: 32px; }
    .astra-launch-banner { padding: 100px 20px; }
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