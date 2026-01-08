import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs/promises';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const REFERRER_LOG_FILE = join(__dirname, '..', 'referrer-logs.txt');

app.use(express.json());

// API endpoint to log referrers
app.post('/api/log-referrer', async (req, res) => {
  try {
    const { referrer, timestamp, userAgent, path } = req.body;

    const logEntry = {
      timestamp: timestamp || new Date().toISOString(),
      referrer: referrer || 'Direct/None',
      userAgent: userAgent || req.headers['user-agent'] || 'Unknown',
      path: path || '/',
      ip: req.ip || req.connection.remoteAddress
    };

    const logLine = `${logEntry.timestamp} | Referrer: ${logEntry.referrer} | Path: ${logEntry.path} | IP: ${logEntry.ip} | User-Agent: ${logEntry.userAgent}\n`;

    await fs.appendFile(REFERRER_LOG_FILE, logLine);

    res.json({ success: true, message: 'Referrer logged successfully' });
  } catch (error) {
    console.error('Error logging referrer:', error);
    res.status(500).json({ success: false, message: 'Failed to log referrer' });
  }
});

// GET endpoint to view referrer logs
app.get('/api/referrer-logs', async (req, res) => {
  try {
    if (!existsSync(REFERRER_LOG_FILE)) {
      return res.json({ logs: [], message: 'No logs yet' });
    }

    const logs = await fs.readFile(REFERRER_LOG_FILE, 'utf-8');
    const logLines = logs.trim().split('\n').filter(line => line);

    res.json({
      logs: logLines,
      count: logLines.length
    });
  } catch (error) {
    console.error('Error reading referrer logs:', error);
    res.status(500).json({ success: false, message: 'Failed to read logs' });
  }
});

// Serve static files from the dist directory
const distPath = join(__dirname, '..', 'dist');
app.use(express.static(distPath));

// Serve index.html for all other routes (SPA support)
app.get('*', (req, res) => {
  res.sendFile(join(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Referrer logs will be saved to: ${REFERRER_LOG_FILE}`);
});
