# SMS Setup (Twilio)

This project includes a serverless API route to send SMS when the contact form is submitted. It uses Twilio.

Required environment variables (set these in Vercel or your hosting):

- `TWILIO_ACCOUNT_SID` — your Twilio Account SID
- `TWILIO_AUTH_TOKEN` — your Twilio Auth Token
- `TWILIO_FROM_NUMBER` — a Twilio phone number in E.164 format (e.g. `+12025551234`)
- `OWNER_PHONE` — the recipient phone number you want SMS sent to (e.g. `+91XXXXXXXXXX`)

Files:

- `api/send-sms.js` — Vercel API route that sends SMS via Twilio

Notes:

- Vercel serverless functions are ephemeral; do not store secrets in repo. Use Vercel Environment Variables.
- Twilio may require verification of the `OWNER_PHONE` on trial accounts.
- For high volume or international SMS, ensure your Twilio account is configured and funded.
