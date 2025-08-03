import { CommunityStats } from '@/types';

export const communityStats: CommunityStats = {
  totalMembers: "1000+",
  onlineMembers: "150+",
  boostLevel: 3,
  boostCount: 20,
  roles: [
    {
      id: '1',
      name: 'Kurucu',
      color: '#ff0000',
      memberCount: 1,
      permissions: ['Administrator'],
      requirements: 'Organizasyon Kurucusu',
    },
    {
      id: '2',
      name: 'YK Başkanı',
      color: '#e03063',
      memberCount: 1,
      permissions: ['Manage Server', 'Manage Channels', 'Manage Roles'],
      requirements: 'Yönetim Kurulu Başkanı',
    },
    {
      id: '3',
      name: 'YK Üyesi',
      color: '#fff300',
      memberCount: 7,
      permissions: ['Manage Messages', 'Priority Speaker'],
      requirements: 'Yönetim Kurulu Üyesi',
    },
    {
      id: '4',
      name: 'Ar-Ge Ekibi',
      color: '#ff8400',
      memberCount: 3,
      permissions: ['Manage Messages', 'Use External Emojis'],
      requirements: 'Ar-Ge Ekibi Üyesi',
    },
    {
      id: '5',
      name: 'Medya Ekibi',
      color: '#ff8400',
      memberCount: 4,
      permissions: ['Manage Messages', 'Attach Files'],
      requirements: 'Medya Ekibi Üyesi',
    },
    {
      id: '6',
      name: 'CS2 Ekibi',
      color: '#ff8400',
      memberCount: 2,
      permissions: ['Manage Messages', 'Timeout Members', 'Kick Members'],
      requirements: 'CS2 Ekibi Üyesi',
    },
  ],
  channels: [
    {
      id: '1',
      name: 'genel',
      type: 'text',
      description: 'Genel sohbet kanalı',
      memberCount: 2547,
    },
    {
      id: '2',
      name: 'duyurular',
      type: 'text',
      description: 'Resmi duyurular ve haberler',
      memberCount: 2547,
    },
    {
      id: '3',
      name: 'espor-sohbet',
      type: 'text',
      description: 'Esports ve turnuva tartışmaları',
      memberCount: 1834,
    },
    {
      id: '4',
      name: 'teknoloji',
      type: 'text',
      description: 'Ar-Ge projeleri ve teknoloji paylaşımları',
      memberCount: 756,
    },
    {
      id: '5',
      name: 'medya-paylaşım',
      type: 'text',
      description: 'Video ve görsel içerik paylaşımları',
      memberCount: 923,
    },
    {
      id: '6',
      name: 'Genel Sohbet',
      type: 'voice',
      description: 'Sesli genel sohbet',
      memberCount: 487,
    },
    {
      id: '7',
      name: 'Oyun Odası',
      type: 'voice',
      description: 'Oyun sırasında sesli iletişim',
      memberCount: 324,
    },
    {
      id: '8',
      name: 'Topluluk Salonu',
      type: 'voice',
      description: 'Genel topluluk sohbetleri için özel kanal',
      memberCount: 156,
    },
  ],
};

export const discordRules = [
  {
    id: '1',
    title: 'Hakaret ve Alaycı Davranış',
    description: 'Hakaret içerikli, hakareti ima eden alaycı, dalga içerikli mesaj veya söylemlerde bulunmak yasaktır.',
  },
  {
    id: '2',
    title: 'Yetki İsteme ve Reklam',
    description: 'Yetkili birisinden yetki istemek, kurucudan izin almadan her türlü reklam yapmak yasaktır.',
  },
  {
    id: '3',
    title: 'Kışkırtıcı Davranış',
    description: 'Kışkırtıcı hareketler yapmak/yazmak yasaktır.',
  },
  {
    id: '4',
    title: 'Spam ve Flood',
    description: 'Herhangi bir metin kanalında spam/flood yapmak yasaktır.',
  },
  {
    id: '5',
    title: 'Ayrımcılık',
    description: 'Din, dil, ırk veya cinsiyet ayrımı içeren konuşmaların içerisinde bulunmak yasaktır.',
  },
  {
    id: '6',
    title: 'Siyasi ve Dini Sohbet',
    description: 'Siyasi veya dini sohbetleri karşılıklı hoşgörü ve düzgün bir üslup çerçevesinde yapmak zorunludur.',
  },
  {
    id: '7',
    title: 'Legal Olmayan İçerik',
    description: 'Sunucu içerisinde legal olmayan konular hakkında konuşmak, paylaşımlarda bulunmak yasaktır.',
  },
  {
    id: '8',
    title: 'Yetki Kötüye Kullanımı',
    description: 'Şaka dahi olsa yetkiyi kötüye kullanmak, insanları rahatsız etmek yasaktır.',
  },
  {
    id: '9',
    title: 'Özel Bilgi Paylaşımı',
    description: 'Kişilerin özel bilgilerini paylaşmak, ailevi veya şahsi olarak ifşalamak, dalga geçmek yasaktır.',
  },
  {
    id: '10',
    title: 'Özel Hayat',
    description: 'Kişiler rahatsız oluyorlarsa özel hayatlarını sormak ve sorgulamak, rahatsız edici davranışlarda bulunmak yasaktır.',
  },
  {
    id: '11',
    title: 'Kavga ve Tartışma',
    description: 'Sunucu içerisinde herhangi bir ses veya yazı kanalında kavga etmek, başlatmak, içerisinde bulunmak, uzatmak yasaktır.',
  },
  {
    id: '12',
    title: 'Yasaklı Kullanıcıların Savunulması',
    description: 'Sunucu içerisinde sunucudan atılmış, yasaklanmış kullanıcıların arkasından savunmalarının yapılması yasaktır.',
  },
  {
    id: '13',
    title: 'Rahatsız Etme',
    description: 'Kişilerin sevmediği hareketleri, sözleri, rahatsız olduğunu belirtmesine rağmen inatla yapmaya, söylemeye devam etmek yasaktır.',
  },
  {
    id: '14',
    title: 'Cinsel Taciz ve NSFW',
    description: 'Erkek/Kız bir bireye yapılan veya ima edilen her türlü taciz içerikli cümleler, NSFW içerikli paylaşımlarda bulunmak yasaktır.',
  },
];

export const faqItems = [
  {
    id: '1',
    question: 'HydRaboN topluluğu nedir? Biz kimiz, ne yapabilirim?',
    answer: 'HydRaboN 2018 yılında kurulmuş, Discord, Instagram, YouTube, TikTok, WhatsApp, Steam, Valorant, CS2 gibi birçok platformda/platform için aktiflik gösteren bir topluluktur. Burada sevdiğiniz oyunları oynayabilir, çekilişlere katılabilir, kaliteli insanlardan kaliteli yardımlar alabilir, hayati dostluklar kurabilir, Ar-Ge birimine katılabilir ve yetkili kadromuza dahil olabilirsiniz.',
  },
  {
    id: '2',
    question: 'Neden kaplan, neden turuncu?',
    answer: 'HydRaboN olarak en baştan beri bizleri temsil eden turuncu enerjiyi, neşeyi ve yaratıcılığı; kaplan ise güç, cesaret ve liderliği temsil etmektedir.',
  },
  {
    id: '3',
    question: 'HydRaboN\'un faaliyetleri hangi alanlarda yoğunlaşıyor?',
    answer: 'Ar-Ge, Discord, Medya ve benzeri alanlara eşit ağırlık vermekte olup, her alanda profesyonelce ilerlemekteyiz. Gerek maddi gerekse eğitim bakımından üst düzey kalitede desteklenen ekiplerimizle faaliyetlerimizi sürdürmekteyiz.',
  },
  {
    id: '4',
    question: 'Nasıl yetkili olabilirim? Avantajları nelerdir?',
    answer: 'Discord sunucumuzda "Yetkili Alım" kanalından başvurunuzu yapabilirsiniz. Yetkili olarak HydRaboN\'un prestijli topluluğunun merkezinde yer alır, yönetim sorumluluğu üstlenir ve topluluğun geleceğine yön veren seçkin isimlerden biri olabilirsiniz.',
  },
  {
    id: '5',
    question: 'Bir sorunla karşılaştığımda kimlerden yardım alabilirim?',
    answer: 'Discord sunucumuzda "Ticket Oluştur" kanalından ticket oluşturarak hızlı bir şekilde yetkililerimizden yardım alabilirsiniz.',
  },
  {
    id: '6',
    question: 'Kural dışı davranış sergileyen kullanıcılar ne yaptırımla karşılaşıyor?',
    answer: 'Yaptığı eyleme göre uygulanacak işlem farklı olmakla beraber, genellikle önce yazılı/sözlü uyarı ardından zaman aşımları, devamı halinde atılma veya yasaklanma durumları ile karşılaşıyor.',
  },
  {
    id: '7',
    question: 'Çekilişlere nasıl katılabilirim ve ne sıklıkla oluyor?',
    answer: 'Genellikle aylık, özel zamanlarda günlük ve haftalık olarak gerçekleşmektedir. Katılım için Discord sunucumuzda "Çekiliş" kanalındaki yönergeleri takip edebilirsiniz.',
  },
  {
    id: '8',
    question: 'Reklam yapma veya kendi projelerimi paylaşma imkanım var mı?',
    answer: 'Kurucumuzdan onay alınması dahilinde yapılabilir. Bu konuda Discord sunucumuzda "Ticket Oluştur" kanalından iletişime geçebilirsiniz.',
  },
  {
    id: '9',
    question: 'Şikayet veya önerilerimi nereye iletebilirim?',
    answer: 'Discord sunucumuzda "Ticket Oluştur" kanalından ticket oluşturarak hızlı bir şekilde yetkililerimize şikayet ve önerilerinizi iletebilirsiniz.',
  },
];

export const serverStats = {
  totalMessages: 1250000,
  dailyActive: 487,
  weeklyActive: 1834,
  monthlyActive: 2256,
  averageOnline: 345,
  peakOnline: 892,
}; 