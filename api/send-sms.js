const Twilio = require('twilio');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const {
    name = '',
    phone = '',
    email = '',
    product = '',
    message = ''
  } = req.body || {};

  const accountSid = process.env.TWILIO_ACCOUNT_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const fromNumber = process.env.TWILIO_FROM_NUMBER;
  const toNumber = process.env.OWNER_PHONE;

  if (!accountSid || !authToken || !fromNumber || !toNumber) {
    return res.status(500).json({ error: 'SMS service not configured. Set TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_FROM_NUMBER and OWNER_PHONE.' });
  }

  const client = Twilio(accountSid, authToken);

  const bodyText = `New contact form submission:\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nProduct: ${product}\nMessage: ${message}`;

  try {
    await client.messages.create({
      from: fromNumber,
      to: toNumber,
      body: bodyText
    });

    return res.json({ success: true });
  } catch (err) {
    console.error('Twilio send error:', err);
    return res.status(500).json({ error: 'Failed to send SMS' });
  }
};
