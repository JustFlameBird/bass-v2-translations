﻿lang = {
    DEFAULT: (key) => `${key} şimdilik tr-TR diline çevrilmedi.`,
    DEFAULT_LANGUAGE: 'Varsayılan dil',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Bulunduğunuz sunucu için mevcut prefix${Array.isArray(prefix) ?
        `ler: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` ayarı: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `Prefix \`${prefix}\` olarak değiştirildi`,
    CURRENT_PREFIX: (cprefix) => `Mevcut prefix: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Sunucu prefixini değiştirir/mevcut prefixi gösterir',
    PREFIX_LENGTH: '**Sunucu prefixinin uzunluğu 10 karakterden uzun olamaz!**',
    // SHIT
    COOLDOWN_TITLE: 'Süre',
    COOLDOWN: (remaining) => `${remaining} saniye daha beklemelisiniz.`,
    COMMAND_DISABLED_SERVER: 'Bu komut şu an ki sunucuda devre dışı bırakılmıştır.',
    COMMAND_DISABLED_GLOBAL: 'Bu komut şu anda mevcut değil.',
    MISSING_BOTPERMS: (missing) => `Bu komutu çalıştırmak için gerekli yetkilere sahip değilim, eksik olanlar: **${missing}**.`,
    NSFW: 'Bu komut sadece NSFW kanallarda kullanılabilir!',
    NO_PERMISSIONS: 'Bu komutu kullanmak için yeterli yetkilere sahip değilsiniz!',
    MISSING_REQUIRED_SETTINGS: (settings) => `Bu sunucu **${settings.join(', ')}** ayar${settings.length !== 1 ? 'lar' : ''}ını içermemekte ve komut çalıştırılamaz.`,
    RUNIN: (types) => `Bu komut sadece \`${types}\` kanallarında kullanılabilir!`,
    RUNIN_NONE: (name) => `Komut \`${name}\` herhangi bir kanalda çalıştırılmak için ayarlı değil.`,
    // EVAL
    EVAL_DESCRIPTION: 'Girilen kodu çalıştırır',
    EVAL_ERROR: (time, output, type) => `**Hata**:${output}\n**Türü**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Hata**:${output}\n**Türü**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `Sonuç çok fazla uzun... bunu dosya olarak gönderdim.\n**Türü**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `Sonuç çok fazla uzun... bunu konsola gönderdim.\n**Türü**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nRoundtrip took: \`Hesaplanıyor...\`.\nHeartbeat: \`Hesaplanıyor...\`.\nVeritabanı: \`Hesaplanıyor...\`.\nREST: \`Hesaplanıyor...\`.',
    PONG: (diff, ping, db, rest) => `**Pong!**\nRoundtrip took: \`${diff}ms\`.\nHeartbeat: \`${ping}ms\`.\nVeritabanı: \`${db}ms\`.\nREST: \`${rest}\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Bass\'ı sunucunuza davet edin',
    BASS_INVITE: 'Bass\'ı sunucunuza davet edin!',
    // INFO
    INFO_DESCRIPTION: 'Bass hakkında bilgi',
    // HELP
    HELP_DESCRIPTION: 'Bu mesaj',
    HELP_NO_EXTENDED: 'Hiçbir ayrıntılı yardım seçeneği bulunmamaktadır.',
    HELP_USAGE: (usage) => `Kullanım :: ${usage}`,
    HELP_EXTENDED: 'Ayrıntılı yardım ::',
    HELP_BOT_OWNER_ONLY: `Bot Sahibi`,
    HELP_MANAGE_GUILD: `Sunucuyu yönet`,
    HELP_SERVER_OWNER: `Sunucu sahibi`,
    HELP_SYNTAX: (prefix) => `${prefix}komut - Açıklama *(gerekli yetkiler)*\nKomut kullanımı ile ilgili bilgi almak için ${prefix}komut ve size doğru kullanımı gösterecektir\nÖrmek: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Komutlar`,
    HELP_COMMAND_NOT_FOUND: (command) => `Komut \`${command}\` bulunamadı.`,
    HELP_TITLE: 'Bass yardım',
    HELP_LINKS: 'Linkler',
    HELP_SUPPORT_SERVER: 'Destek sunucusu',
    HELP_INVITE: 'Davet',
    HELP_VOTE: 'Vote',
    // STATS
    STATS_DESCRIPTION: 'Bass ile ilgili istatistikler',
    CLUSTER: 'Cluster',
    ERROR: 'Hata',
    SHARDS: 'Shardlar',
    SERVERS: 'Sunucular',
    USERS: 'Kullanıcılar',
    CONNECTIONS: 'Bağlantılar',
    PLAYERS: 'Oynatıcılar',
    TOTAL: 'Toplam',
    CLUSTERS: 'Clusters',
    //EVENTS_RECIEVED: 'Events recieved',
    //COMMANDS_USED: 'Commands used',
    EVENTS_RECIEVED: 'Etkinlikler',
    COMMANDS_USED: 'Komutlar',
    MESSAGES_RECIEVED: 'Alınan Mesajlar',
    MESSAGES_SENT: 'Gönderilen Mesajlar',
    TOOK: (time) => `${time} sürdü`,
    STATS: 'Bass İstatistik',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `Dil  \`${lang}\` bulunamadı.\nMecvut diller: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `Dil \`${lang}\` olarak değiştirildi!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**Geçerli dil:** \`${clang}\`\n\nMevcut diller: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Sunucu dilini değiştirir/Mevcut sunucu dilini gösterir',
    // TRANSLATORS / CONTRIBUTORS
    TRANSLATORS_DESCRIPTION: 'Bass\'ın diğer dillere çevirilmesinde yardımcı olan tüm çevirmenleri gösterir',
    CONTRIBUTORS_DESCRIPTION: 'Bass projesine destek vermiş kişileri gösterir',
    // SAY
    SAY_DESCRIPTION: 'Bass söylenen mesajı tekrar eder',
    // SHARD
    SHARD_DESCRIPTION: 'Shards/clusters hakkında bilgi gösterir',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `Bu sunucu \`${shard}/${shards}\`. shard üzerinde ve cluster \`${cluster}/${clusters}\`. üzerinde yürütülmektedir`,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Bass destek sunucusu',
    // MUSIC
    NODE_BUSY: 'Üzgünüm, fakat ses yöneticisi bu sunucuda **şu an meşgul**, birkaç saniye bekleyin ve tekrar deneyin.',
    NODE_NOTHING_PLAYING: '**Bu sunucuda hiçbir şey oynatılmıyor.**\nBelki bir şeyler dinlemek istersiniz?',
    NODE_NOTHING_PLAYED: '**Hiçbir şey oynatılmıyordu.**',
    NODE_PROCESSING: 'Ses yöneticisi isteğinizi işliyor...',
    H4DEEP_DESCRIPTION: '4deep filtresini etkinleştirir/kapatır',
    NODE_4DEEP_ENABLED: '`4deep` **filtresi etkinleştirildi**.',
    NODE_4DEEP_DISABLED: '`4deep` **filtresi kapatıldı**.',
    H8D_DESCRIPTION: '8D audio filtresini etkinleştirir/kapatır',
    NODE_8D_ENABLED: '`8D` **filtresi etkinleştirildi**.',
    NODE_8D_DISABLED: '`8D` **filtresi kapatıldı**.',
    ECHO_DESCRIPTION: 'Echo audio filtresini etkinleştirir/kapatır',
    NODE_ECHO_ENABLED: '`Echo` **filtresi etkinleştirildi**..',
    NODE_ECHO_DISABLED: '`Echo` **filtresi kapatıldı**.',
    NIGHTCORE_DESCRIPTION: 'Nightcore audio filtresini etkinleştirir/kapatır',
    NODE_NIGHTCORE_ENABLED: '`Nightcore` **filtresi etkinleştirildi**.',
    NODE_NIGHTCORE_DISABLED: '`Nightcore` **filtresi kapatıldı**.',
    VAPORWAVE_DESCRIPTION: 'Vaporwave audio filtresini etkinleştirir/kapatır',
    NODE_VAPORWAVE_ENABLED: '`Vaporwave` **filtresi etkinleştirildi**.',
    NODE_VAPORWAVE_DISABLED: '`Vaporwave` **filtresi kapatıldı**.',
    CHORUS_DESCRIPTION: 'Chorus audio filtresini etkinleştirir/kapatır',
    NODE_CHORUS_ENABLED: '`Chorus` **filtresi etkinleştirildi**.',
    NODE_CHORUS_DISABLED: '`Chorus` **filtresi kapatıldı**.',
    KARAOKE_DESCRIPTION: 'Karaoke audio filtresini etkinleştirir/kapatır',
    NODE_KARAOKE_ENABLED: '`Karaoke` **filtresi etkinleştirildi**.',
    NODE_KARAOKE_DISABLED: '`Karaoke` **filtresi kapatıldı**.',
    PULSATOR_DESCRIPTION: 'Pulsator audio filtresini etkinleştirir/kapatır',
    NODE_PULSATOR_ENABLED: '`Pulsator` **filtresi etkinleştirildi**.',
    NODE_PULSATOR_DISABLED: '`Pulsator` **filtresi kapatıldı**.',
    TREMOLO_DESCRIPTION: 'Tremolo audio filtresini etkinleştirir/kapatır',
    NODE_TREMOLO_ENABLED: '`Tremolo` **filtresi etkinleştirildi**.',
    NODE_TREMOLO_DISABLED: '`Tremolo` **filtresi kapatıldı**.',
    HSURROUND_DESCRIPTION: 'Surround audio filtresini etkinleştirir/kapatır',
    NODE_SURROUND_ENABLED: '`Surround` **filtresi etkinleştirildi**.',
    NODE_SURROUND_DISABLED: '`Surround` **filtresi kapatıldı**.',
    H8BIT_DESCRIPTION: '8bit audio filtresini etkinleştirir/kapatır',
    NODE_8BIT_ENABLED: '`8-bit` **filtresi etkinleştirildi**.',
    NODE_8BIT_DISABLED: '`8-bit` **filtresi kapatıldı**.',
    BITRATE_DESCRIPTION: 'Changes music bitrate/quality',
    NODE_CHANGED_BITRATE: (amount) => `Ses bithızı \`${amount}kbps\` olarak değiştirildi.`,
    NODE_INVALID_BITRATE: 'Lütfen \`8\` to \`512\` (kbps) arası geçerli bir bithzı belirtiniz',
    CLEAR_DESCRIPTION: 'Bekleme sırasını temizler',
    CLEARED_QUEUE: 'Bekleme sırası temizlendi.',
    LOOP_DESCRIPTION: 'Şu an ki şarkıyı/sırayı döngüye alır',
    LOOP_SONG: '**Müzik döngüsü etkinleştirildi.**',
    LOOP_QUEUE: '**Sıra döngüsü etkinleştirildi.*',
    LOOP_ALREADY_SONG: 'Müzik döngüsü zaten aktif!',
    LOOP_ALREADY_QUEUE: 'Sıra döngüsü zaten aktif!',
    LOOP_DISABLED: '**Döngü kapatıldı.**',
    LOOP_INVALID: (prefix) => `**Lütfen geçerli bir döngü türü belirleyin:** \`(0 - kapalı, 1 - şarkı, 2 - müzik sırası)\`\nFor example: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Şu an ki çalan müziği gösterir',
    NOWPLAYING: 'Şu an Oynatılan',
    PAUSE_DESCRIPTION: 'Müziği durdurur',
    PAUSED: '**Durduruldu.**',
    RESUME_DESCRIPTION: 'Şarkıya devam eder',
    RESUMED: '**Devam ediliyor.**',
    SHUFFLE_DESCRIPTION: 'Müzik sırasını karıştıır',
    SHUFFLE_SHUFFLING: '**Müzik sırası karıştırılıyor...**',
    SHUFFLE_SHUFFLED: '**Müzik sırası karıştırıldı.**',
    QUEUE_DESCRIPTION: 'Geçerli şarkı sırasını gösterir',
    QUEUE_FETCHING: '**Şarkı sırası alınıyor...**',
    QUEUE_MORE: (length) => `*.. ve ${length} daha*`,
    QUEUE_NOWPLAYING: 'Oynatılan',
    QUEUE_UPNEXT: 'Sonraki',
    QUEUE_NOTHING: '**Boş**',
    QUEUE_LENGTH: 'Sıra uzunluğu:',
    QUEUE_FILTERS: 'Filtreler:',
    QUEUE_BASS_STRENGTH: 'Bass gücü:',
    QUEUE_LOOP: '**Döngü:**',
    QUEUE_SONG: 'Şarkı:',
    QUEUE_YES: 'evet',
    QUEUE_NO: 'hayır',
    QUEUE: 'Sıra:',
    SKIP_DESCRIPTION: 'Şu an ki oynatılan şarkıyı geçer',
    SKIPPED: 'Geçildi.',
    STOP_DESCRIPTION: 'Şarkıyı kapatır, sırayı temizler ve sesli kanaldan ayrılır.',
    STOPPED: 'Kapatıldı.',
    PREV_DESCRIPTION: 'Shows recently played song',
    RECENTLY_PLAYED: 'En son oynatılan:',
    VOLUME_DESCRIPTION: 'Sesi değiştirir',
    VOLUME_CHANGED: (prev, amount) => `**Ses seviyesi \`%${prev}\`'den \`%${amount}\` olarak değiştirildi.**`,
    VOLUME_SAME: (amount) => `**Ses seviyesi zaten \`${amount}%\` olarak ayarlı!**`,
    GIVE_PROPER_VOLUME: (current) => `Lütfen 0 ve 500 (%) arası geçerli bir ses seviyesi belirleyin \nŞu an ki ses seviyesi: \`${current}%\``,
    BASS_DESCRIPTION: 'Bass boost seviyesini değiştirir',
    GIVE_PROPER_BASS: (current) => `Lütfen 0 ve 60 (dB) arası geçerli bir boost seviyesi belirleyin \nŞu an ki boost seviyesi: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Boost seviyesi \`+${amount}dB\` olarak değiştirildi** \nBass'a destek olduğunuz için teşekkürler!`,
    PLAY_DESCRIPTION: 'Şarkı oynatır',
    JOINING_VC_ERROR: 'Sesli kanala giriş yapmaya çalışılırken bir hata oluştu.\nLütfen tekrar deneyin.',
    QUEUED: (url, title) => `Şarkı [${title}](${url}) sıraya eklendi.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) şimdi oynatılacak.`,
    QUEUE_ENDED: 'Sıra sona erdi, sesli kanaldan ayrıldım.',
    PLAYING_ERROR: (error) => `Şarkı oynatılırken bir hata oluştu.\nHata mesajı: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bithızı: \`${bitrate}kbps\`, Ses: \`${volume}%\`\nEtkin filtreler: *${filters.join(', ') || '*-*'}*\nBass Boost seviyesi: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Lütfen oynatmak istediğiniz şarkının ismini veya URLsini girin. ',
    PLAY_NO_VC: 'Bir sesli kanalda bulunmanız gerekir.',
    PLAY_OTHER_VC: 'Benimle aynı sesli kanalda değilsiniz. Bulunduğum sesli kanala katılın ve tekrar deneyin.',
    PLAY_NO_PERMS_SPEAK: 'Bu kanalda konuşma yetkim bulunmuyor.',
    PLAY_NO_PERMS_CONNECT: 'Bulunduğunuz kanala katılmak için yetkim bulunmuyor.',
    SEARCHING_ERROR: (error) => `Şarkı aratılırken bir hata oluştu.\Hata mesajı: \`${error}\``,
    SEARCHING_NOT_FOUND: 'Arama isteğinize bağlı hiçbir sonuç bulunamadı.',
    PLAY_WRONGURL: 'Verdiğiniz URL geçersiz gibi görünüyor.',
    PLAY_PROCESSING: 'İşleniyor...',
    PLAY_BACKEND_ERROR: 'Arkaplanda bulunan arama/playlist araçları hizmet dışı veya bir hata döndürdü.\nLütfen bu hatayı destek sunucumuza bildirin: **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `${size} müzik yüklendi.`,
    LEAVING_VC: 'Eğer 15 saniye içerisinde herhangi bir kullanıcı sesli kanala katılmazsa, müzik durdurulup sesli kanaldan çıkılacak.',
    LEFT_VC: 'Hiçbir aktivite olmadığı için, müzik durduruldu ve sesli kanaldan ayrıldım.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Bass ile ilgili destek için sunucu',
    // TTS
    TTS_DESCRIPTION: 'Text to Speech (Yazıdan söze)\'i bir dosyaya gönderir',
    TTS_WRONG_LANG: (langs, prefix) => `**Lütfen desteklenen bir dil belirtin!**\nDesteklenen diller: \`${langs.join(', ')}\`\nÖrnek kullanım: \`${prefix}tts Hello | en\``,
    TTS_ERROR: 'Dosyayı alıntılarken bir hata oluştu.',
    TTS_WRONG_TXT_LENGTH: 'Yazı uzunluğu 0 karakterden fazla ve 200 karakterden kısa olmalıdır.',
    TTS_NO_ARGS: (prefix, langs) => `**Please give text and language to generate tts for.**\nÖrnek kullanım: \`${prefix}tts Hello | en\`\nDesteklenen diller: \`${langs.join(', ')}\``,
    // IDK
    NONE_VC: 'Bu komutu kullanmak için sesli kanalıma katılmanız gerek.',
    NONE_NVC: 'Sesli kanala katılamıyorum!',
    NONE_NOVC: 'Bir sesli kanalda değilsiniz!',
    NONE_VCFULL: 'Sesli kanalınız dolu!',
    // RELOAD
    RELOAD_DESCRIPTION: 'Reloads Bass',
    RELOADED: 'Reloaded',
    RELOADED_MESSAGE: (time) => `Bass has been successfully reloaded in ${time}.`,
    // VOTE
    VOTE_DESCRIPTION: 'Checks your vote status/gives vote link',
    YOU_VOTED: 'You voted!',
    YOU_DIDNT_VOTE: 'You didn\'t vote!',
    VOTED_MESSAGE: (mention, date, votes) => `You voted for Bass in the last 12 hours!\nThank you, ${mention} for supporting Bass by voting!\nYou voted at: \`${date}\`\nYou voted for Bass ${votes} times.\n\n[Vote link](https://top.gg/bot/590948209925423123/vote)`,
    NOT_VOTED_MESSAGE: (date, votes) => `You didn't vote for Bass in the last 12 hours :(\nYour latest vote was at: \`${date}\`\nYou voted for Bass ${votes} times.\n\nYou can vote for Bass [here](https://top.gg/bot/590948209925423123/vote).`,
    // STUFF FOR NEW HELP
    HELP_DESCRIPTION_TITLE_STRING: (prefix) => `The prefix on this server is \`${prefix}\`\nTo get more information about a command try ${prefix}help [command] For ex: ${prefix}help bass or ${prefix}help play`,
    HELP_PATREON: 'Patreon',
    HELP_CATEGORY: 'Category',
    HELP_NAME: 'Name',
    HELP_ALIASES: 'Aliases',
    HELP_CMD_DESCRIPTION: 'Description',
    HELP_REQUIRED_PERMS: 'Required permissions',
    HELP_BOT_REQUIRED_PERMS: 'Required permissions by Bass',
    HELP_COOLDOWN_TITLE: 'Cooldown',
    HELP_COOLDOWN: (uses, seconds) => `${uses} use${uses === 1 ? '' : 's'} per ${seconds} second${seconds === 1 ? '' : 's'}`,
    HELP_EXAMPLECOMMANDUSAGE: 'Example usage',
    HELP_EXAMPLECOMMANDUSAGE_OPTIONAL_REQUIRED: '() - optional, <> - required',
    HELP_EXAMPLEUSAGE: ' (command)',
    EVAL_EXAMPLEUSAGE: ' <code>',
    SAY_EXAMPLEUSAGE: ' <message>',
    TTS_EXAMPLEUSAGE: ' <message> | <language code>',
    LANG_EXAMPLEUSAGE: ' (language)',
    PREFIX_EXAMPLEUSAGE: ' (prefix)',
    BITRATE_EXAMPLEUSAGE: ' <bitrate>',
    LOOP_EXAMPLEUSAGE: ' <loop type>',
    PLAY_EXAMPLEUSAGE: ' <song name or url>',
    VOLUME_EXAMPLEUSAGE: ' (volume)',


    // OTHER
    REQUESTED_BY: 'İsteyen kişi',
    OK: 'OK',
    ERROR: 'HATA'

    // Translated by
    // Eri#1000
};
