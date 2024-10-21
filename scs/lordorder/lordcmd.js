


import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;

const alive = async (m, Matrix) => {
  const uptimeSeconds = process.uptime();
  const days = Math.floor(uptimeSeconds / (24 * 3600));
  const hours = Math.floor((uptimeSeconds % (24 * 3600)) / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);
  
  const prefix = /^[\\/!#.]/gi.test(m.body) ? m.body.match(/^[\\/!#.]/gi)[0] : '/';
  const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).toLowerCase() : '';
    if (['command', 'comman', 'commands'].includes(cmd)) {

  const uptimeMessage = `╭═════❐ 𝙻𝙾𝚁𝙳 𝙼𝙳 ❐═⊷ 
┃❃╭──────────────
┃❃│ 🤖 ʙᴏᴛ ɴᴀᴍᴇ: 𝙻𝙾𝚁𝙳 𝙼𝙳
┃❃│ 📌 ᴠᴇʀꜱɪᴏɴ: 8.1.0
┃❃│ 👱 ᴏᴡɴᴇʀ : 𝙻𝚘𝚛𝚍 𝙼𝚊𝚕𝚟𝚒𝚗
┃❃│ 👤 ɴᴜᴍʙᴇʀ: ?😎 
┃❃│ 🪩 ᴘʟᴀᴛғᴏʀᴍ: *ʟɪɴᴜx*
┃❃│ 💾 ʀᴀᴍ : *128GB.14GB*
┃❃│ 📱 ᴅᴀɪʟʏ ᴜsᴇʀs : *♾*
┃❃│ 
┃❃│  𝙻𝙾𝚁𝙳 𝙼𝙳 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴
┃❃╰───────────────
╰═════════════════⊷

> *LORD MD COMMAND LIST*

 *This commands will guide*
 *you on how to use lord md*
 
◤━━━━━━━━━━━◥  
   *LORD SYSTEM*
 ${prefix}𝙿𝚒𝚗𝚐
 ${prefix}𝙰𝚕𝚒𝚟𝚎
 ${prefix}𝙾𝚠𝚗𝚎𝚛
 ${prefix}𝙼𝚎𝚗𝚞
 ${prefix}𝙱𝚞𝚐𝚖𝚎𝚗𝚞
◣━━━━━━━━━━━◢

◤━━━━━━━━━━━◥
   *𝙻𝙾𝚁𝙳 𝙾𝚆𝙽𝙴𝚁*
${prefix}𝙹𝚘𝚒𝚗
${prefix}𝙻𝚎𝚊𝚟𝚎
${prefix}𝙱𝚕𝚘𝚌𝚔 
${prefix}𝚄𝚗𝚋𝚕𝚘𝚌𝚔
${prefix}𝚂𝚎𝚝𝚙𝚙𝚋𝚘𝚝
${prefix}𝙰𝚗𝚝𝚒𝚌𝚊𝚕𝚕
${prefix}𝚂𝚎𝚝𝚜𝚝𝚊𝚝𝚞𝚜
${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎𝚋𝚘𝚝
${prefix}𝙰𝚞𝚝𝚘𝚃𝚢𝚙𝚒𝚗𝚐
${prefix}𝙰𝚕𝚠𝚊𝚢𝚜𝙾𝚗𝚕𝚒𝚗𝚎
${prefix}𝙰𝚞𝚝𝚘𝚁𝚎𝚊𝚍
${prefix}𝚊𝚞𝚝𝚘𝚜𝚟𝚒𝚎𝚠
◣━━━━━━━━━━━◢

◤━━━━━━━━━━━◥
   *LORD GPT*
 ${prefix}𝙰𝚒
 ${prefix}𝙱𝚞𝚐
 ${prefix}𝚁𝚎𝚙𝚘𝚛𝚝
 ${prefix}𝙶𝚙𝚝
 ${prefix}𝙳𝚊𝚕𝚕𝚎
 ${prefix}𝚁𝚎𝚖𝚒𝚗𝚒
 ${prefix}𝙶𝚎𝚖𝚒𝚗𝚒
◣━━━━━━━━━━━◢
 
◤━━━━━━━━━━━◥
  *𝙻𝙾𝚁𝙳 𝙲𝙾𝙽𝚅𝙴𝚁𝚃𝙴𝚁*
 ${prefix}𝙰𝚃𝚃𝙿
 ${prefix}𝙰𝚃𝚃𝙿2
 ${prefix}𝙰𝚃𝚃𝙿3
 ${prefix}𝙴𝙱𝙸𝙽𝙰𝚁𝚈
 ${prefix}𝙳𝙱𝙸𝙽𝙰𝚁𝚈
 ${prefix}𝙴𝙼𝙾𝙹𝙸𝙼𝙸𝚇
 ${prefix}𝙼𝙿3
◣━━━━━━━━━━━◢

◤━━━━━━━━━━━◥
   *𝙻𝙾𝚁𝙳 𝙶𝚁𝙾𝚄𝙿* 
 ${prefix}𝙻𝚒𝚗𝚔𝙶𝚛𝚘𝚞𝚙
 ${prefix}𝚂𝚎𝚝𝚙𝚙𝚐𝚌
 ${prefix}𝚂𝚎𝚝𝚗𝚊𝚖𝚎
 ${prefix}𝚂𝚎𝚝𝚍𝚎𝚜𝚌
 ${prefix}𝙶𝚛𝚘𝚞𝚙
 ${prefix}𝙶𝚌𝚜𝚎𝚝𝚝𝚒𝚗𝚐
 ${prefix}𝚆𝚎𝚕𝚌𝚘𝚖𝚎
 ${prefix}𝙰𝚍𝚍
 ${prefix}𝙺𝚒𝚌𝚔
 ${prefix}𝙷𝚒𝚍𝚎𝚃𝚊𝚐
 ${prefix}𝚃𝚊𝚐𝚊𝚕𝚕
 ${prefix}𝙰𝚗𝚝𝚒𝙻𝚒𝚗𝚔
 ${prefix}𝙰𝚗𝚝𝚒𝚃𝚘𝚡𝚒𝚌
 ${prefix}𝙿𝚛𝚘𝚖𝚘𝚝𝚎
 ${prefix}𝙳𝚎𝚖𝚘𝚝𝚎
 ${prefix}𝙶𝚎𝚝𝚋𝚒𝚘
◣━━━━━━━━━━━◢

◤━━━━━━━━━━━◥
 *𝙻𝙾𝚁𝙳 𝙳𝙾𝚆𝙽𝙻𝙾𝙰𝙳*
${prefix}𝙰𝚙𝚔
${prefix}𝙵𝚊𝚌𝚎𝚋𝚘𝚘𝚔
${prefix}𝙼𝚎𝚍𝚒𝚊𝚏𝚒𝚛𝚎
${prefix}𝙿𝚒𝚗𝚝𝚎𝚛𝚎𝚜𝚝𝚍𝚕
${prefix}𝙶𝚒𝚝𝚌𝚕𝚘𝚗𝚎
${prefix}𝙶𝚍𝚛𝚒𝚟𝚎
${prefix}𝙸𝚗𝚜𝚝𝚊
${prefix}𝚈𝚝𝚖𝚙3
${prefix}𝚈𝚝𝚖𝚙4
${prefix}𝙿𝚕𝚊𝚢
${prefix}𝚂𝚘𝚗𝚐
${prefix}𝚅𝚒𝚍𝚎𝚘
${prefix}𝚈𝚝𝚖𝚙3𝚍𝚘𝚌
${prefix}𝚈𝚝𝚖𝚙4𝚍𝚘𝚌
${prefix}𝚃𝚒𝚔𝚝𝚘𝚔
◣━━━━━━━━━━━◢

◤━━━━━━━━━━━◥
 *𝙻𝙾𝚁𝙳 𝚂𝙴𝙰𝚁𝙲𝙷*
${prefix}𝙿𝚕𝚊𝚢
${prefix}𝚈𝚝𝚜
${prefix}𝙸𝚖𝚍𝚋
${prefix}𝙶𝚘𝚘𝚐𝚕𝚎
${prefix}𝙶𝚒𝚖𝚊𝚐𝚎
${prefix}𝙻𝚢𝚛𝚒𝚌𝚜
◣━━━━━━━━━━━◢


*MORE COMMANDS*
*WILL BE UPLOADED*
*SOON*


`;

  const buttons = [
      {
        "name": "quick_reply",
        "buttonParamsJson": JSON.stringify({
          display_text: "📁 REPO",
          id: `${prefix}repo`
        })
      }
    ];

  const msg = generateWAMessageFromContent(m.from, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.create({
          body: proto.Message.InteractiveMessage.Body.create({
            text: uptimeMessage
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: "©𝙻𝙾𝚁𝙳 мαℓνιи",
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            title: "",
            gifPlayback: true,
            subtitle: "",
            hasMediaAttachment: false 
          }),
          nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
            buttons
          }),
          contextInfo: {
                  mentionedJid: [m.sender], 
                  forwardingScore: 999,
                  isForwarded: true,
                forwardedNewsletterMessageInfo: {
                  newsletterJid: '263780166288',
                  newsletterName: "𝐋𝐎𝐑𝐃 MD",
                  serverMessageId: 143
                }
              }
        }),
      },
    },
  }, {});

  await Matrix.relayMessage(msg.key.remoteJid, msg.message, {
    messageId: msg.key.id
  });
    }
};

export default alive;
