import fetch from 'node-fetch'

let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ _Use these commands without the prefix_

▢ If you have more audios
send me by wa.me/917560920774 the *audio + command* with which it will respond
*No* _18+ voices_


┌─⊷ *REG MEN*
▢ Bot
▢ Good morning
▢ Good afternoon
▢ Good night
└──────────────
┌─⊷ *VIDEO/GIF*
▢ Nice night
└──────────────`
const pp = await (await fetch('https://i.ibb.co/qMG1JPY/fg.jpg')).buffer()
    
    conn.sendHydrated(m.chat, m2, '▢ VECTOR  ┃ ᴮᴼᵀ\n▢ Follow me in Instagram\nhttps://www.instagram.com/abd_khadher___\n', pp, 'wa.me/917560920774', 'WHATSAPP', null, null, [
     ['⏍ Info', '.botinfo'],
      ['⌬ Groups', '.groups']
    ], m)
    
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['menu2'] 
handler.register = true
export default handler
