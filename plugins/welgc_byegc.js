let handler = async (m, { conn, text, usedPrefix, command, customPrefix }) => {
let stikerwelgc = "./src/welgc.webp"
let stikerbyegc = "./src/byegc.webp"
if (command == 'welcomegc') {
conn.sendFile(m.chat, stikerwelgc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝚅𝙴𝙲𝚃𝙾𝚁🎯', body: '𝙰𝙱𝙳𝚄𝙻 𝙺𝙷𝙰𝙳𝙷𝙴𝚁☘️', sourceUrl: `https://github.com/khadherinc/VECTOR`, thumbnail: imagen1}}})  
}
if (command == 'byegc') {
conn.sendFile(m.chat, stikerbyegc, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: ''𝚅𝙴𝙲𝚃𝙾𝚁🎯', body: '𝙰𝙱𝙳𝚄𝙻 𝙺𝙷𝙰𝙳𝙷𝙴𝚁☘️', sourceUrl: `https://github.com/khadherinc/VECTOR`, thumbnail: imagen1}}})
}}
handler.command = ['welcomegc', 'byegc']
export default handler
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]}
