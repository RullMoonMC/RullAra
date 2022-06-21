let handler = async (m) => {
    global.db.data.chats[m.chat].isBanned = false
    m.reply(' *Uaaaaawh🥱, Maap kak Moon tadi ketiduran😴* ')
}

handler.tags = ['main']
handler.command = /^(moonon)$/i

handler.admin = true

export default handler
