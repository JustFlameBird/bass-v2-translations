lang = {
    DEFAULT: (key) => `${key} has not been translated for en-US yet.`,
    DEFAULT_LANGUAGE: 'Default Language',
    // PREFIX COMMAND
    PREFIX_REMINDER: (prefix = `@${this.client.user.tag}`) => `Current prefix${Array.isArray(prefix) ?
        `es on this server are: ${prefix.map(pre => `\`${pre}\``).join(', ')}` :
        ` in this server is set to: \`${prefix}\``
    }`,
    PREFIX_SET: (prefix) => `Prefix has been changed to \`${prefix}\``,
    CURRENT_PREFIX: (cprefix) => `Current prefix is: \`${cprefix}\``,
    PREFIX_DESCRIPTION: 'Changes servers prefix/shows current prefix',
    PREFIX_LENGTH: '**You cannot set prefix longer than 10 characters!**',
    // SHIT
    COOLDOWN_TITLE: 'Cooldown',
    COOLDOWN: (remaining) => `You have to wait ${remaining} second${remaining === 1 ? '' : 's'} more.`,
    COMMAND_DISABLED_SERVER: 'This command has been disabled on this server.',
    COMMAND_DISABLED_GLOBAL: 'This command is currently not available.',
    MISSING_BOTPERMS: (missing) => `I dont have required permissions to complete this command, missing: **${missing}**.`,
    NSFW: 'This command can only be used in NSFW channels!',
    NO_PERMISSIONS: 'You dont have permissions to use this command!',
    MISSING_REQUIRED_SETTINGS: (settings) => `This server is missing the **${settings.join(', ')}** server setting${settings.length !== 1 ? 's' : ''} and thus this command cannot complete.`,
    RUNIN: (types) => `This command is only available in \`${types}\` channels!`,
    RUNIN_NONE: (name) => `Command \`${name}\` is not configured to run in any channel.`,
    // EVAL
    EVAL_DESCRIPTION: 'Evaluates given code',
    EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
    EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
    EVAL_SENDFILE: (time, type) => `Output was too long... sent the result as a file.\n**Type**:${type}\n${time}`,
    EVAL_CONSOLE: (time, type) => `Output was too long... sent the result to console.\n**Type**:${type}\n${time}`,
    // PING
    PING: '**Pong!**\nRoundtrip took: \`Calculating...\`.\nHeartbeat: \`Calculating...\`.\nDatabase: \`Calculating...\`.\nREST: \`Calculating...\`.',
    PONG: (diff, ping, db, rest) => `**Pong!**\nRoundtrip took: \`${diff}ms\`.\nHeartbeat: \`${ping}ms\`.\nDatabase: \`${db}ms\`.\nREST: \`${rest}\`.`,
    PING_DESCRIPTION: 'Pong!',
    // INVITE
    INVITE_DESCRIPTION: 'Invite Bass to your server',
    BASS_INVITE: 'Invite bass to your server!',
    // INFO
    INFO_DESCRIPTION: 'Info about Bass',
    // HELP
    HELP_DESCRIPTION: 'This message',
    HELP_NO_EXTENDED: 'No extended help available.',
    HELP_USAGE: (usage) => `Usage :: ${usage}`,
    HELP_EXTENDED: 'Extended Help ::',
    HELP_BOT_OWNER_ONLY: `Bot Owner`,
    HELP_MANAGE_GUILD: `Manage server`,
    HELP_SERVER_OWNER: `Server Owner`,
    HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}command and it will output valid usage\nFor example: ${prefix}volume`,
    //HELP_SYNTAX: (prefix) => `${prefix}command - Description *(Required permissions)*\nTo get informations about command usage do ${prefix}help (commandname)\nUsing command that requires args, without giving them will also give command usage info`,
    HELP_COMMANDS_STRING: `Commands`,
    HELP_COMMAND_NOT_FOUND: (command) => `Command \`${command}\` was not found.`,
    HELP_TITLE: 'Bass help',
    HELP_LINKS: 'Links',
    HELP_SUPPORT_SERVER: 'Support Server',
    HELP_INVITE: 'Invite',
    HELP_VOTE: 'Vote',
    // STATS
    STATS_DESCRIPTION: 'Shows stats about Bass',
    CLUSTER: 'Cluster',
    ERROR: 'Error',
    SHARDS: 'Shards',
    SERVERS: 'Servers',
    USERS: 'Users',
    CONNECTIONS: 'Connections',
    PLAYERS: 'Players',
    TOTAL: 'Total',
    CLUSTERS: 'Clusters',
    //EVENTS_RECIEVED: 'Events recieved',
    //COMMANDS_USED: 'Commands used',
    EVENTS_RECIEVED: 'Events',
    COMMANDS_USED: 'Commands',
    MESSAGES_RECIEVED: 'Messages R',
    MESSAGES_SENT: 'Messages S',
    TOOK: (time) => `Took ${time}`,
    STATS: 'Bass Stats',
    // LANG
    LANG_NOT_FOUND: (lang, langsavailable) => `Language \`${lang}\` was not found.\nAvailable languages: \`${langsavailable}\``,
    LANG_LANGUAGE_SET: (lang) => `Language has been changed to \`${lang}\`!`,
    CURRENT_LANGUAGE: (clang, langsavailable) => `**Current language is:** \`${clang}\`\n\nAvailable languages: \`${langsavailable}\``,
    LANG_DESCRIPTION: 'Changes server language/shows current language',
    // TRANSLATORS / CONTRIBUTORS
    TRANSLATORS_DESCRIPTION: 'Shows every translator that helped translating Bass to other languages',
    CONTRIBUTORS_DESCRIPTION: 'Shows everyone that contributed to the Bass project',
    // SAY
    SAY_DESCRIPTION: 'Bass repeats given message',
    // SHARD
    SHARD_DESCRIPTION: 'Shows info about shards/clusters',
    EMBED_SHARD_DESCRIPTION: (shard, shards, cluster, clusters) => `This server runs on shard \`${shard}/${shards}\` and cluster \`${cluster}/${clusters}\``,
    // SUPPORT
    BASS_SUPPORT_SERVER: 'Bass support server',
    // MUSIC
    NODE_BUSY: 'Sorry, but audio node on this server **is currently busy**, please wait a few seconds and try again.',
    NODE_NOTHING_PLAYING: '**Nothing is playing on this server.**\nMaybe play something?',
    NODE_NOTHING_PLAYED: '**Nothing was played.**',
    NODE_PROCESSING: 'Audio node is processing your request...',
    H4DEEP_DESCRIPTION: 'Toggles 4deep audio filter',
    NODE_4DEEP_ENABLED: '**Enabled filter** `4deep`.',
    NODE_4DEEP_DISABLED: '**Disabled filter** `4deep`.',
    H8D_DESCRIPTION: 'Toggles 8D audio filter',
    NODE_8D_ENABLED: '**Enabled filter** `8D`.',
    NODE_8D_DISABLED: '**Disabled filter** `8D`.',
    ECHO_DESCRIPTION: 'Toggles echo audio filter',
    NODE_ECHO_ENABLED: '**Enabled filter** `Echo`.',
    NODE_ECHO_DISABLED: '**Disabled filter** `Echo`.',
    NIGHTCORE_DESCRIPTION: 'Toggles nightcore audio filter',
    NODE_NIGHTCORE_ENABLED: '**Enabled filter** `Nightcore`.',
    NODE_NIGHTCORE_DISABLED: '**Disabled filter** `Nightcore`.',
    VAPORWAVE_DESCRIPTION: 'Toggles vaporwave audio filter',
    NODE_VAPORWAVE_ENABLED: '**Enabled filter** `Vaporwave`.',
    NODE_VAPORWAVE_DISABLED: '**Disabled filter** `Vaporwave`.',
    CHORUS_DESCRIPTION: 'Toggles chorus audio filter',
    NODE_CHORUS_ENABLED: '**Enabled filter** `Chorus`.',
    NODE_CHORUS_DISABLED: '**Disabled filter** `Chorus`.',
    KARAOKE_DESCRIPTION: 'Toggles karaoke audio filter',
    NODE_KARAOKE_ENABLED: '**Enabled filter** `Karaoke`.',
    NODE_KARAOKE_DISABLED: '**Disabled filter** `Karaoke`.',
    PULSATOR_DESCRIPTION: 'Toggles pulsator audio filter',
    NODE_PULSATOR_ENABLED: '**Enabled filter** `Pulsator`.',
    NODE_PULSATOR_DISABLED: '**Disabled filter** `Pulsator`.',
    TREMOLO_DESCRIPTION: 'Toggles tremolo audio filter',
    NODE_TREMOLO_ENABLED: '**Enabled filter** `Tremolo`.',
    NODE_TREMOLO_DISABLED: '**Disabled filter** `Tremolo`.',
    HSURROUND_DESCRIPTION: 'Toggles surround audio filter',
    NODE_SURROUND_ENABLED: '**Enabled filter** `Surround`.',
    NODE_SURROUND_DISABLED: '**Disabled filter** `Surround`.',
    H8BIT_DESCRIPTION: 'Toggles 8bit audio filter',
    NODE_8BIT_ENABLED: '**Enabled filter** `8-bit`.',
    NODE_8BIT_DISABLED: '**Disabled filter** `8-bit`.',
    BITRATE_DESCRIPTION: 'Changes music bitrate/quality',
    NODE_CHANGED_BITRATE: (amount) => `Bitrate has been changed to \`${amount}kbps\``,
    NODE_INVALID_BITRATE: 'Please give a proper bitrate from \`8\` to \`512\` (kbps)',
    CLEAR_DESCRIPTION: 'Clears queue',
    CLEARED_QUEUE: 'Queue has been cleared.',
    LOOP_DESCRIPTION: 'Loops current song/queue',
    LOOP_SONG: '**Enabled song loop.**',
    LOOP_QUEUE: '**Enabled queue loop.**',
    LOOP_ALREADY_SONG: 'Song is already looped!',
    LOOP_ALREADY_QUEUE: 'Queue is already looped!',
    LOOP_DISABLED: '**Disabled loop.**',
    LOOP_INVALID: (prefix) => `**Please give a proper loop type** \`(0 - disable, 1 - song, 2 - queue)\`\nFor example: \`${prefix}loop 2\``,
    NOWPLAYING_DESCRIPTION: 'Shows currently playing song',
    NOWPLAYING: 'Now Playing',
    PAUSE_DESCRIPTION: 'Pauses song',
    PAUSED: '**Paused.**',
    RESUME_DESCRIPTION: 'Resumes song',
    RESUMED: '**Resumed.**',
    SHUFFLE_DESCRIPTION: 'Shuffles queue',
    SHUFFLE_SHUFFLING: '**Shuffling queue...**',
    SHUFFLE_SHUFFLED: '**Shuffled queue.**',
    QUEUE_DESCRIPTION: 'Shows current song queue',
    QUEUE_FETCHING: '**Fetching queue...**',
    QUEUE_MORE: (length) => `*.. And ${length} more*`,
    QUEUE_NOWPLAYING: 'Now playing',
    QUEUE_UPNEXT: 'Up next',
    QUEUE_NOTHING: '**Nothing**',
    QUEUE_LENGTH: 'Queue length:',
    QUEUE_FILTERS: 'Filters:',
    QUEUE_BASS_STRENGTH: 'Bass Strength:',
    QUEUE_LOOP: '**Loop:**',
    QUEUE_SONG: 'Song:',
    QUEUE_YES: 'yes',
    QUEUE_NO: 'no',
    QUEUE: 'Queue:',
    SKIP_DESCRIPTION: 'Skips currently playing song',
    SKIPPED: 'Skipped',
    STOP_DESCRIPTION: 'Stops playing, clears queue and leaves voice channel',
    STOPPED: 'Stopped.',
    PREV_DESCRIPTION: 'Shows recently played song',
    RECENTLY_PLAYED: 'Recently played:',
    VOLUME_DESCRIPTION: 'Changes volume',
    VOLUME_CHANGED: (prev, amount) => `**Volume have been changed from \`${prev}%\` to \`${amount}%\`.**`,
    VOLUME_SAME: (amount) => `**Volume is already set to \`${amount}%\`!**`,
    GIVE_PROPER_VOLUME: (current) => `Please give a proper volume from 0 to 500 (%)\nCurrent volume is: \`${current}%\``,
    BASS_DESCRIPTION: 'Changes bass boost strength',
    GIVE_PROPER_BASS: (current) => `Please give a proper bass boost from 0 to 60 (dB)\nCurrent bass boost is: \`+${current}dB\``,
    NODE_BASS_CHANGED_DONATOR: (amount) => `**Changed bass boost strength to** \`+${amount}dB\`\nThank you for supporting Bass!`,
    PLAY_DESCRIPTION: 'Plays song',
    JOINING_VC_ERROR: 'An unknown error occoured upon trying to join your voice channel.\nPlease try again.',
    QUEUED: (url, title) => `Added [${title}](${url}) to queue.`,
    QUEUED_NOW: (url, title) => `[${title}](${url}) will now play.`,
    QUEUE_ENDED: 'Queue ended, i have left the voice channel.',
    PLAYING_ERROR: (error) => `Error occured while trying to play.\nError message: \`${error}\``,
    PLAYING_EVENT_WITH: (bass, volume, bitrate, filters) => `Bitrate: \`${bitrate}kbps\`, Volume: \`${volume}%\`\nFilters applied: *${filters.join(', ') || '*-*'}*\nBass Boost strength: \`+${bass}dB\``,
    PLAY_NO_SONG: 'Please give name or URL of song you want to play.',
    PLAY_NO_VC: 'You are not in a voice channel.',
    PLAY_OTHER_VC: 'You are not in same voice channel as me. Please join my voice channel and try again.',
    PLAY_NO_PERMS_SPEAK: 'I do not have permissions to speak in your voice channel.',
    PLAY_NO_PERMS_CONNECT: 'I do not have permissions to join your voice channel.',
    SEARCHING_ERROR: (error) => `Error occured while searching.\nError message: \`${error}\``,
    SEARCHING_NOT_FOUND: 'No results found for your search query.',
    PLAY_WRONGURL: 'URL You provided seems to be wrong.',
    PLAY_PROCESSING: 'Processing...',
    PLAY_BACKEND_ERROR: 'Backend for processing search results/playlists seems to be down or returned an error.\nPlease send this information to our support server at **https://discord.gg/By3bvFc**!',
    PLAY_QUEUED_PLAYLIST: (size) => `Loaded ${size} songs.`,
    LEAVING_VC: 'Stopping playing and leaving voice channel in 15 seconds if no one will join.',
    LEFT_VC: 'I have stopped playing and left the voice channel due to inactivity.',
    // SUPPORT
    SUPPORT_DESCRIPTION: 'Support server for help with Bass',
    // TTS
    TTS_DESCRIPTION: 'Sends Text to Speech in file',
    TTS_WRONG_LANG: (langs, prefix) => `**Please give supported language!**\nSupported languages: \`${langs.join(', ')}\`\nExample usage: \`${prefix}tts Hello | en\``,
    TTS_ERROR: 'Error occured while getting the file.',
    TTS_WRONG_TXT_LENGTH: 'Text length must be greater than 0 characters and must not exceed 200 characters.',
    TTS_NO_ARGS: (prefix, langs) => `**Please give text and language to generate tts for.**\nExample usage: \`${prefix}tts Hello | en\`\nAvailable languages: \`${langs.join(', ')}\``,
    // IDK
    NONE_VC: 'You have to be in my voice channel to use that command.',
    NONE_NVC: 'I cannot join your voice channel!',
    NONE_NOVC: 'You are not in voice channel!',
    NONE_VCFULL: 'Your voice channel is full!',
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
    REQUESTED_BY: 'Requested by',
    OK: 'OK',
    ERROR: 'ERROR'
};
