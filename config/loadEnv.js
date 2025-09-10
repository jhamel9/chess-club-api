// /config/loadEnv.js
const path = require('path');
const fs = require('fs');

// Load environment variables from .env file
const envPath = path.resolve(__dirname, '../.env');

if (fs.existsSync(envPath)) {
  require('dotenv').config({ path: envPath });
  console.log('✅ Environment variables loaded from:', envPath);
} else {
  console.error('❌ .env file not found at:', envPath);
  process.exit(1);
}

// Verify required variables
const requiredVars = ['SPREADSHEET_ID', 'GOOGLE_APPLICATION_CREDENTIALS'];
const missingVars = requiredVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Missing required environment variables:', missingVars);
  process.exit(1);
}

console.log('✅ All required environment variables are present');
module.exports = process.env;