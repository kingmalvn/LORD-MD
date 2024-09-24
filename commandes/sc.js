"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { zokou } = require("../framework/zokou");

zokou({ nomCom: "sc", catégorie:"Général", reaction: "✨", nomFichier: __filename }, async (dest, zk, commandeOptions) => {
  const githubRepo = 'https://api.github.com/repos/kingmalvn/RAVENS-MD';
  const img = 'https://telegra.ph/file/dc73e16b9988c7c56b56f.jpg';

  try {
    const response = await fetch(githubRepo);
    const data = await response.json();

    if (data) {
      const repoInfo = {
        stars: data.stargazers_count,
        forks: data.forks_count,
        lastUpdate: data.updated_at,
        owner: data.owner.login,
      };

      const releaseDate = new Date(data.created_at).toLocaleDateString('en-GB');
      const lastUpdateDate = new Date(data.updated_at).toLocaleDateString('en-GB');

      const gitdata = `Hello,,,👋This is *RAVENS-MD* the best bot in the universe developed by *Malvin King*,,fork and give a star 🌟 to my script
      
      ┏❏ RAVENS MD SCRIPT  ❐
┃🗼 *REPOSITORY:* ${data.html_url}
┃✨ *STARS:* ${repoInfo.stars}
┃🧧 *FORKS:* ${repoInfo.forks}
┃📅 *RELEASE DATE:* ${releaseDate}
┃🕐 *UPDATE ON:* ${repoInfo.lastUpdate}
┃👨‍💻 *OWNER* :malvin_king
┃🆔️ *SESSION_ID*: https://ravenssession-1127b51d295b.herokuapp.com/pair
┃
┃👋😎 *SUPPORT*: https://whatsapp.com/channel/0029Vac8SosLY6d7CAFndv3Z
┗❏`;

      await zk.sendMessage(dest, { image: { url: img }, caption: gitdata });
    } else {
      console.log("Could not fetch data");
    }
  } catch (error) {
    console.log("Error fetching data:", error);
  }
});
