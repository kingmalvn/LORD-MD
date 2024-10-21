
const { lords } = require('../Iord/lords');

lords({ nomCom: 'quote', categorie: 'Fun' }, async (dest, zk, commandeOptions) => {
  const { ms, repondre, verifGroupe, arg } = commandeOptions;
  if (!verifGroupe) {
    repondre('Commande réservée au groupe uniquement');
    return;
  }

  if (!arg[0]) {
    try {
      fetch('https://animechan.xyz/api/random')
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╭═❍    𝙻𝙾𝚁𝙳 𝙼𝙳 𝚂𝚝𝚊𝚝𝚞𝚜  ❍
┃❃╭──────────────
┃❃│ 🎬 Anime: ${quote.anime}
┃❃│ 
┃❃│ 👤 Character: ${quote.character}
┃❃│ 
┃❃│ 💬 Quote: ${quote.quote}
┃❃│  
┃❃╰───────────────
╰═════════════════⊷

Powered by LORD-MD`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  } else {
    const query = arg.join(' ');

    try {
      fetch('https://animechan.xyz/api/random/character?name=' + query)
        .then((response) => response.json())
        .then(async (quote) => {
          repondre(`╭═❍    𝙻𝙾𝚁𝙳 𝙼𝙳 𝚂𝚝𝚊𝚝𝚞𝚜  ❍
┃❃╭──────────────
┃❃│ 🎬 Anime: ${quote.anime}
┃❃│ 
┃❃│ 👤 Character: ${quote.character}
┃❃│ 
┃❃│ 💬 Quote: ${quote.quote}
┃❃│  
┃❃╰───────────────
╰═════════════════⊷

Powered by LORD-MD`);
        });
    } catch (e) {
      repondre('Erreur lors de la génération de la citation : ' + e.message);
    }
  }
});
