
let handler = async(m, { conn, usedPrefix, command }) => {

    let don = `
≡ *DONATION*
Share ABHISHEK-SER Bot Link And Support. Git Link https://github.com/khadherinc/VECTOR`
let img = 'https://pbxt.replicate.delivery/VeNXOQLbg1VKBa4Y5hrVam5kjDfYPTX0ekzTIompeezUWfiWE/out.png'
conn.sendFile(m.chat, img, 'img.jpg', don, m)
}

handler.help = ['donate']
handler.tags = ['main']
handler.command = ['apoyar', 'donate', 'donar'] 

export default handler
