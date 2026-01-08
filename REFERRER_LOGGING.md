# Referrer Logging

This portfolio site now includes referrer logging functionality to track where visitors are coming from.

## How It Works

- When a visitor lands on your site, their referrer information is automatically captured
- The data is sent to a backend API endpoint and logged to a file
- Each log entry includes:
  - Timestamp
  - Referrer URL (or "Direct/None" if no referrer)
  - Page path visited
  - IP address
  - User agent (browser info)

## Setup & Usage

### 1. Install Dependencies

```bash
npm install
```

### 2. Build and Start the Server

```bash
npm start
```

This will:
- Build the frontend application
- Start the Express server on port 3000 (or the PORT environment variable)
- Begin logging referrers to `referrer-logs.txt`

### 3. View Referrer Logs

**Option 1: View the log file directly**
```bash
cat referrer-logs.txt
```

**Option 2: Use the API endpoint**

Visit `http://localhost:3000/api/referrer-logs` in your browser or use curl:
```bash
curl http://localhost:3000/api/referrer-logs
```

This returns a JSON response with all logged referrers.

## Log Format

Each line in `referrer-logs.txt` follows this format:
```
2026-01-08T10:30:45.123Z | Referrer: https://example.com | Path: / | IP: ::1 | User-Agent: Mozilla/5.0...
```

## Development

For development with hot reload:
```bash
npm run dev
```

Note: In development mode (Vite dev server), the referrer logging API won't work unless you set up a proxy or run the backend separately.

## Production Deployment

For production deployment with referrer logging:
1. Build the app: `npm run build`
2. Start the server: `npm run server`
3. Set the PORT environment variable if needed: `PORT=8080 npm run server`

## Privacy Note

The referrer logs include IP addresses and user agent strings. Make sure to handle this data in compliance with privacy regulations (GDPR, CCPA, etc.) in your jurisdiction.
