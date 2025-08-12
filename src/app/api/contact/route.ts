import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { name, email, area, subject, message, discord } = data ?? {};

    if (!name || !email || !area || !subject || !message) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_WEBHOOK_URL not set');
      return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
    }

    const embed = {
      title: 'Yeni İletişim Mesajı',
      color: 0x5865f2,
      fields: [
        { name: 'Ad Soyad', value: String(name), inline: true },
        { name: 'E-posta', value: String(email), inline: true },
        { name: 'Alan', value: String(area), inline: true },
        { name: 'Konu', value: String(subject), inline: false },
        { name: 'Mesaj', value: String(message), inline: false },
        ...(discord ? [{ name: 'Discord', value: String(discord), inline: true }] : []),
      ],
      timestamp: new Date().toISOString(),
    };

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Websitesi İletişim Formu',
        content: null,
        embeds: [embed],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Discord webhook error', res.status, text);
      return NextResponse.json({ error: 'Mesaj gönderilemedi' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Contact POST error', error);
    return NextResponse.json({ error: 'Beklenmeyen bir hata oluştu' }, { status: 500 });
  }
}


