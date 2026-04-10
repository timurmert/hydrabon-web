import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, age, discordUsername, discordUserId, discordAvatarUrl, githubLink, linkedinLink, weeklyHours, motivation } = data ?? {};

    // Validasyon
    if (!firstName || !age || !discordUsername || !weeklyHours || !motivation) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_TEAM_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_TEAM_WEBHOOK_URL or DISCORD_WEBHOOK_URL not set');
      return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
    }

    // Discord kullanıcı mention formatı
    const discordMention = discordUserId ? `<@${discordUserId}>` : String(discordUsername);

    const embed = {
      title: '💻 Yeni Ar-Ge Başvurusu',
      description: 'Ar-Ge birimine yeni bir başvuru geldi!',
      color: 0x3b82f6,
      fields: [
        { name: '👤 İsim', value: String(firstName), inline: false },
        { name: '🎂 Yaş', value: String(age), inline: false },
        { name: '💬 Discord', value: `${discordMention} (${String(discordUsername)})`, inline: false },
        ...(githubLink || linkedinLink ? [{ name: '🔗 GitHub & LinkedIn Profil Link (Varsa)', value: [githubLink, linkedinLink].filter(Boolean).join('\n'), inline: false }] : []),
        { name: '⏰ Haftalık ortalama kaç saat ayırabilirsin?', value: String(weeklyHours), inline: false },
        { name: '💡 HydRaboN Ar-Ge\'den beklentin nedir ve neden katılmak istiyorsun?', value: String(motivation).substring(0, 1024), inline: false },
      ],
      ...(discordAvatarUrl ? { thumbnail: { url: String(discordAvatarUrl) } } : {}),
      footer: { text: 'HydRaboN Ar-Ge Başvuru Sistemi' },
      timestamp: new Date().toISOString(),
    };

    const webhookContent = discordUserId
      ? `🔔 **Yeni Ar-Ge Başvurusu!** ${discordMention}`
      : '🔔 **Yeni Ar-Ge Başvurusu!**';

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Ar-Ge Başvuru Sistemi',
        avatar_url: 'https://hydrabon.com/logo-transparent.png',
        content: webhookContent,
        embeds: [embed],
      }),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error('Discord webhook error', res.status, text);
      return NextResponse.json({ error: 'Başvuru gönderilemedi' }, { status: 502 });
    }

    return NextResponse.json({ ok: true, message: 'Başvurunuz başarıyla gönderildi' });
  } catch (error) {
    console.error('Arge application POST error', error);
    return NextResponse.json({ error: 'Beklenmeyen bir hata oluştu' }, { status: 500 });
  }
}
