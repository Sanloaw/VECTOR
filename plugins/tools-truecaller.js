//𝙑𝙀𝘾𝙏𝙊𝙍 BY 𝘼𝘽𝘿𝙐𝙇 𝙆𝙃𝘼𝘿𝙃𝙀𝙍
import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
  if (!text) throw 'GIVE ME NUMBER';

  try {
    let res = await fetch(`https://inrl-web.onrender.com/api/truecaller?number=${text}`);

    if (!res.ok) {
      throw new Error(`API request failed with status ${res.status}`);
    }

    let json = await res.json();

    console.log('JSON response:', json);

    
    json.creator = 'ABDUL KHADHER';

    let milf = '';
    for (let prop in json) {
      milf += `• *${prop}:* ${json[prop]}\n`;
    }

    m.reply(milf);
  } catch (error) {
    console.error(error);
    // Handle the error appropriately
  }
};

handler.help = ['true'];
handler.tags = ['tools'];
handler.command = /^(true|caller)$/i;

export default handler;
