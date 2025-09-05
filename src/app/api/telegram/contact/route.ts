import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST(req: Request) {
  try {
    const { name, email, payment_method } = await req.json();

    const botToken = process.env.TELEGRAM_BOT_TOKEN;
    const chat_id = process.env.TELEGRAM_CHAT_ID;

    const msg =
      "New message from Order form (Dr. Now): %0A%0A" +
      `👤 Name: ${name}%0A` +
      `📧 Email: ${email}%0A` +
      `🔗 Payment Method: ${payment_method}%0A`;

    const url = `https://api.telegram.org/bot${botToken}/sendMessage?chat_id=${chat_id}&text=${msg}`;

    await axios.get(url);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Telegram error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
