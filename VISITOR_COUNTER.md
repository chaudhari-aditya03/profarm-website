# Visitor Counter

This project includes a small Node.js server that stores visitor count in `data.json` and exposes:

- `POST /visit` — increments the visitor count
- `GET /count` — returns the current count as JSON

Run locally:

```bash
npm install
npm start
```

Embed example (iframe):

```html
<iframe src="https://your-domain.com/counter-embed.html" style="border:0;width:220px;height:60px;" loading="lazy"></iframe>
```

Notes:
- Serve the project (and `server.js`) on the same domain, or configure CORS for cross-origin embeds.
- For production, replace the file-based storage with a proper DB for concurrency and durability.
