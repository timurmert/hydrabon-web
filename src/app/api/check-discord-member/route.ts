import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const { discordUsername } = data ?? {};

    if (!discordUsername) {
      return NextResponse.json({ error: 'Discord kullanıcı adı gerekli' }, { status: 400 });
    }

    const botToken = process.env.DISCORD_BOT_TOKEN;
    const guildId = process.env.DISCORD_SERVER_ID;

    if (!botToken || !guildId) {
      console.error('DISCORD_BOT_TOKEN or DISCORD_SERVER_ID not set');
      return NextResponse.json({ 
        error: 'Sunucu yapılandırma hatası',
        isMember: false 
      }, { status: 500 });
    }

    // Discord username formatını temizle (@ işaretini kaldır)
    const cleanUsername = discordUsername.replace('@', '').toLowerCase().trim();

    try {
      // Discord API'den sunucu üyelerini ara
      const searchResponse = await fetch(
        `https://discord.com/api/v10/guilds/${guildId}/members/search?query=${encodeURIComponent(cleanUsername)}&limit=10`,
        {
          headers: {
            'Authorization': `Bot ${botToken}`,
            'Content-Type': 'application/json',
          },
        }
      );

      if (!searchResponse.ok) {
        const errorText = await searchResponse.text();
        console.error('Discord API error:', searchResponse.status, errorText);
        
        // API hatası durumunda kullanıcıyı geçirebiliriz (opsiyonel)
        return NextResponse.json({ 
          error: 'Discord sunucusu kontrol edilemedi',
          isMember: false,
          canProceed: false
        }, { status: 502 });
      }

      const members = await searchResponse.json();

      // Kullanıcıyı bul ve ID'sini al
      const foundMember = members.find((member: any) => {
        const memberUsername = member.user?.username?.toLowerCase();
        const memberGlobalName = member.user?.global_name?.toLowerCase();
        const memberNick = member.nick?.toLowerCase();
        
        return (
          memberUsername === cleanUsername ||
          memberGlobalName === cleanUsername ||
          memberNick === cleanUsername ||
          `${memberUsername}#${member.user?.discriminator}` === cleanUsername
        );
      });

      const isMember = !!foundMember;
      const userId = foundMember?.user?.id || null;

      return NextResponse.json({ 
        isMember,
        userId,
        message: isMember 
          ? 'Kullanıcı sunucuda bulundu' 
          : 'Kullanıcı sunucuda bulunamadı'
      });

    } catch (fetchError) {
      console.error('Discord fetch error:', fetchError);
      return NextResponse.json({ 
        error: 'Discord API ile bağlantı kurulamadı',
        isMember: false,
        canProceed: false
      }, { status: 502 });
    }

  } catch (error) {
    console.error('Check Discord member error:', error);
    return NextResponse.json({ 
      error: 'Beklenmeyen bir hata oluştu',
      isMember: false 
    }, { status: 500 });
  }
}

