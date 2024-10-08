const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('set.env'))
    require('dotenv').config({ path: __dirname + '/set.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5aUkNpRVdYcENteFRoSmkwcWFMR1RpQzRpZEVJcFFSSTdvSnE2ZExGST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiREJwcTVpN1BWSXFLSVVQMjAxTVZYeVFqR0RaYm5kc09Ed1lSRFA0SDNUOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJFSFIyNFhKaExPbmVvYmlhVE9rS3dxYW5VbUZyUGF0dEZhdlNHemRXbVdjPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJxb1NhcUcxQ3lHbW1hK250MEVobjVNZEVJazdlSFRBb2trWTR0OXRJUHhFPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNMmxMeGFENGZYeUtnWE5EYmtsUDJ0bXNPMXNheHdUanBkTkYzT2hya0U9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InhxcUtEMkFXWXlZMnZ5ZEdiUUgxT20zT1A4RGVtcThyckNyRllmeGl3QVk9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0d3UFVnbzZhYkFzY2lZYjZSVE1ZSUFLdUdpQld3YUtIdFBJODF3VE1rST0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWXYrOVAvTjlLSlc3NCt5UGh5YmxhQVlsaVlsNUtIVnQ1cnJ6L0pSdDgxMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhIbERnM0JSV3V3WGh6WENJYmJ6UU5vUmx6eUM1NXYzeE5PU2pOSmUyQjV5NC9hQkhydnZ3TTVnT0xlbkJ1TnY5R3JBRy9ob2lYRzh3SmxBK2ZaU0FBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjAwLCJhZHZTZWNyZXRLZXkiOiJxQmR2WXQ0VHdKVjFQQ0U5UnNYVThqck9oc0NuSTd0Sjd2U3A0bzVBNkpvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiI4T09zTURicVJPdTlaOUZUMXZnTjd3IiwicGhvbmVJZCI6IjBkYTcwN2ViLTc2MDMtNGNmNC05ZGEzLWMxMjZjMzI5ZjdhMSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvZjdYT0plS3RMQWJzNUMyTUNXQkNISEhPRDQ9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSmdBZWIzN2pkaytWUWZkMVBxT2FWNDVVekcwPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjI5NVcyWE5HIiwibWUiOnsiaWQiOiIyNjM3ODAxNjYyODg6NDZAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTWFsdmluIEtpbmcifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ096dmtlc0VFS25NeTdjR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6Iml0MU5xRkJVV0lraUFHTnM0SWlRMkJkSUtESkpQZVNvYTJTN3NjOWpZV3c9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImdjYkp6ZzMvY2tmY1d4dUJNQk9UZFJrS0YvUk42S2tJYk1PbHMzd2JEZUVpVEVuS3kyWGlBaFJ0cDJyY1lpbkdqNGRuenhnTU5mREw2bWFVTmRjb0RBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJWRDVWSnJ1WVdrcmc1cHJ6YVhKV1FzUTZIMTg5S2RWUTExWEo0RTN2OHJZTUpBYlV3WnRqMVUzTEFWaVJjclVZam8vODB0VW01Ync4ajNibThkbDlCUT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI2Mzc4MDE2NjI4ODo0NkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJZcmRUYWhRVkZpSklnQmpiT0NJa05nWFNDZ3lTVDNrcUd0a3U3SFBZMkZzIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI3MTk0Njc5fQ==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Malvin King",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "263780166288",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "non",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'non',
    BOT : process.env.BOT_NAME || 'RAVENS MD',
    URL : process.env.BOT_MENU_LINKS || 'https://telegra.ph/file/dc73e16b9988c7c56b56f.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ADM : process.env.ANTI_DELETE_MESSAGE || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9" : "postgres://db_7xp9_user:6hwmTN7rGPNsjlBEHyX49CXwrG7cDeYi@dpg-cj7ldu5jeehc73b2p7g0-a.oregon-postgres.render.com/db_7xp9",
    /* new Sequelize({
     dialect: 'sqlite',
     storage: DATABASE_URL,
     logging: false,
})
: new Sequelize(DATABASE_URL, {
     dialect: 'postgres',
     ssl: true,
     protocol: 'postgres',
     dialectOptions: {
         native: true,
         ssl: { require: true, rejectUnauthorized: false },
     },
     logging: false,
}),*/
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});
