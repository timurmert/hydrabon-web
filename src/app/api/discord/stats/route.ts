import { NextResponse } from 'next/server';

const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;

export async function GET() {
  try {
    if (!DISCORD_BOT_TOKEN || !DISCORD_GUILD_ID) {
      return NextResponse.json(
        { error: 'Discord credentials not configured' },
        { status: 500 }
      );
    }

    // Discord API'den sunucu bilgilerini çek
    const guildResponse = await fetch(`https://discord.com/api/v9/guilds/${DISCORD_GUILD_ID}?with_counts=true`, {
      headers: {
        'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    if (!guildResponse.ok) {
      throw new Error('Failed to fetch guild data');
    }

    const guildData = await guildResponse.json();

    // Rolleri çek
    const rolesResponse = await fetch(`https://discord.com/api/v9/guilds/${DISCORD_GUILD_ID}/roles`, {
      headers: {
        'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
        'Content-Type': 'application/json',
      },
    });

    type DiscordApiRole = {
      id: string;
      name: string;
      color: number;
      permissions: string;
    };
    const rolesData: DiscordApiRole[] = await rolesResponse.json();

    // Aylık mesaj istatistiği (sabit değer)
    const monthlyMessages = "10.000+";

    // Verileri formatla
    const communityStats = {
      totalMembers: guildData.member_count || guildData.approximate_member_count,
      onlineMembers: guildData.presence_count || guildData.approximate_presence_count || 487,
      boostLevel: guildData.premium_tier || 3,
      boostCount: guildData.premium_subscription_count || 14,
      monthlyMessages: monthlyMessages,
      roles: rolesData
        .filter((role: DiscordApiRole) => role.name !== '@everyone')
        .map((role: DiscordApiRole) => ({
          id: role.id,
          name: role.name,
          color: `#${role.color.toString(16).padStart(6, '0')}`,
          memberCount: 0, // Discord API'den doğrudan rol üye sayısı alınamaz
          permissions: role.permissions,
          requirements: '', // Manuel olarak belirlenecek
        })),
      lastUpdated: new Date().toISOString(),
    };

    return NextResponse.json(communityStats);
  } catch (error) {
    console.error('Discord API Error:', error);
    
    // Fallback data - mevcut static veriler
    const fallbackStats = {
      totalMembers: "850+",
      onlineMembers: 487,
      boostLevel: 3,
      boostCount: 14,
      monthlyMessages: "10.000+",
      lastUpdated: new Date().toISOString(),
      error: 'Using fallback data'
    };

    return NextResponse.json(fallbackStats);
  }
}

// Cache için revalidate
export const revalidate = 300; // 5 dakikada bir güncelle