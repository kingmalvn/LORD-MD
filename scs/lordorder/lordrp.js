import pkg, { prepareWAMessageMedia } from '@whiskeysockets/baileys';
const { generateWAMessageFromContent, proto } = pkg;
import axios from 'axios';
import config from '../../config.cjs';

const searchRepo = async (m, Matrix) => {
  const prefix = config.PREFIX;
const cmd = m.body.startsWith(prefix) ? m.body.slice(prefix.length).split(' ')[0].toLowerCase() : '';
const text = m.body.slice(prefix.length + cmd.length).trim();

  const validCommands = ['repo', 'sc', 'script'];

  if (validCommands.includes(cmd)) {
    const repoUrl = `https://api.github.com/repos/kingmalvn/LORD-MD`;
    
    await handleRepoCommand(m, Matrix, repoUrl);
  }
};

const handleRepoCommand = async (m, Matrix, repoUrl) => {
  try {
    const response = await axios.get(repoUrl);
    const repoData = response.data;

    const {
      full_name,
      name,
      forks_count,
      stargazers_count,
      created_at,
      updated_at,
      owner,
    } = repoData;

    const messageText = `╭═════❐ 𝙻𝙾𝚁𝙳 𝙼𝙳 𝚁𝙴𝙿𝙾 ❐═⊷ 
┃❃╭──────────────
┃❃│ 🤖 ʙᴏᴛ ɴᴀᴍᴇ: ${name}
┃❃│ 📌 ᴠᴇʀꜱɪᴏɴ : 8.1.3
┃❃│ ✨ ꜱᴛᴀʀꜱ:  ${stargazers_count}
┃❃│ 🧧 ꜰᴏʀᴋꜱ: ${forks_count}
┃❃│ 📅 ʀᴇʟᴇᴀꜱᴇ ᴅᴀᴛᴇ: ${new Date(created_at).toLocaleDateString()}
┃❃│ 🕐 ᴜᴩᴅᴀᴛᴇ ᴏɴ:* ${new Date(updated_at).toLocaleDateString()}
┃❃│ 👱 ᴏᴡɴᴇʀ : *𝙻𝙾𝚁𝙳 мαℓνιи*
┃❃│ 💞 ᴛʜᴇᴍᴇ: 𝚁𝙰𝚅𝙴𝙽𝚂
┃❃│ 
┃❃│  𝙻𝙾𝚁𝙳 𝙼𝙳 𝙸𝚂 𝙾𝙽𝙻𝙸𝙽𝙴
┃❃╰───────────────
╰═════════════════⊷ `;

    const repoMessage = generateWAMessageFromContent(m.from, {
      viewOnceMessage: {
        message: {
          messageContextInfo: {
            deviceListMetadata: {},
            deviceListMetadataVersion: 2,
          },
          interactiveMessage: proto.Message.InteractiveMessage.create({
            body: proto.Message.InteractiveMessage.Body.create({
              text: messageText,
            }),
            footer: proto.Message.InteractiveMessage.Footer.create({
              text: '© l𝙻𝙾𝚁𝙳 мαℓνιи',
            }),
            header: proto.Message.InteractiveMessage.Header.create({
              ...(await prepareWAMessageMedia({
                image: {
                  url: '',
                },
              }, { upload: Matrix.waUploadToServer })),
              title: '',
              gifPlayback: true,
              subtitle: '',
              hasMediaAttachment: false,
            }),
            nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
              buttons: [
                {
                  name: 'quick_reply',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Contact Owner',
                    id: `${prefix}owner`,
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Click Here To Fork',
                    url: repoUrl.replace('api.', '').replace('repos/', '/forks/'),
                  }),
                },
                {
                  name: 'cta_url',
                  buttonParamsJson: JSON.stringify({
                    display_text: 'Join Our Cchannel',
                    url: 'https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z',
                  }),
                },
              ],
            }),
            contextInfo: {
              mentionedJid: [m.sender],
              forwardingScore: 9999,
              isForwarded: true,
            },
          }),
        },
      },
    }, {});

    await Matrix.relayMessage(repoMessage.key.remoteJid, repoMessage.message, {
      messageId: repoMessage.key.id,
    });
    await m.React('✅');
  } catch (error) {
    console.error('Error processing your request:', error);
    m.reply('Error processing your request.');
    await m.React('❌');
  }
};

export default searchRepo;
