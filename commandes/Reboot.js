const {zokou}=require("../framework/zokou")







zokou({nomCom:"restart",categorie:"Mods",reaction:"📴"},async(dest,z,com)=>{


  
const{repondre,ms,dev,superUser}=com;

  if(!superUser)
  {
    return repondre("This command is for owner or lord malvin");
  }

  const {exec}=require("child_process")

    repondre("𝚁𝙰𝚅𝙴𝙽𝚂 𝚖𝚍 𝚒𝚜 𝚛𝚎𝚜𝚝𝚊𝚛𝚝𝚒𝚗𝚐..⏳");

  exec("pm2 restart all");
  

  



})
