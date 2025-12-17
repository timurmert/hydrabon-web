import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { firstName, age, discordUsername, discordUserId, team, note } = data ?? {};

    // Validasyon
    if (!firstName || !age || !discordUsername || !team) {
      return NextResponse.json({ error: 'Zorunlu alanlar eksik' }, { status: 400 });
    }

    const webhookUrl = process.env.DISCORD_TEAM_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      console.error('DISCORD_TEAM_WEBHOOK_URL or DISCORD_WEBHOOK_URL not set');
      return NextResponse.json({ error: 'Sunucu yapılandırma hatası' }, { status: 500 });
    }

    // Birim isimleri
    const teamNames: Record<string, string> = {
      discord: 'Discord (Topluluk)',
      rnd: 'Ar-Ge (Yazılım)',
      esports: 'Espor',
      media: 'Medya'
    };

    const teamName = teamNames[team] || team;

    // Discord embed renkleri
    const teamColors: Record<string, number> = {
      discord: 0x5865f2, // Discord Blue
      rnd: 0x3b82f6, // Blue
      esports: 0xf97316, // Orange
      media: 0xa855f7 // Purple
    };

    const embedColor = teamColors[team] || 0x5865f2;

    // Discord kullanıcı mention formatı
    const discordMention = discordUserId ? `<@${discordUserId}>` : String(discordUsername);

    const embed = {
      title: '🎯 Yeni Ekip Başvurusu',
      description: `**${teamName}** birimine yeni bir başvuru geldi!`,
      color: embedColor,
      fields: [
        { 
          name: '👤 İsim', 
          value: String(firstName), 
          inline: true 
        },
        { 
          name: '🎂 Yaş', 
          value: String(age), 
          inline: true 
        },
        { 
          name: '💬 Discord Kullanıcısı', 
          value: discordMention, 
          inline: true 
        },
        { 
          name: '🎮 Başvurulan Birim', 
          value: teamName, 
          inline: false 
        },
        ...(note ? [{
          name: '📝 Not',
          value: String(note).substring(0, 1024), // Discord limit
          inline: false
        }] : []),
      ],
      footer: {
        text: 'HydRaboN Ekip Başvuru Sistemi'
      },
      timestamp: new Date().toISOString(),
    };

    // Webhook mesajı - Kullanıcıyı etiketle
    const webhookContent = discordUserId 
      ? `🔔 **Yeni Ekip Başvurusu!** ${discordMention}` 
      : '🔔 **Yeni Ekip Başvurusu!**';

    const res = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: 'Ekip Başvuru Sistemi',
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
    console.error('Team application POST error', error);
    return NextResponse.json({ error: 'Beklenmeyen bir hata oluştu' }, { status: 500 });
  }
}

