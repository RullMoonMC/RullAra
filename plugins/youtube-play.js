import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `Use example ${usedPrefix}${command} Dj Gama Naufal`
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let { title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
  await conn.sendHydrated(m.chat, `
*${htki} PLAY ${htka}*

${htjava} *Title:* ${title}
📤﹒✽﹒Tanggal Upload﹒⊹:* ${publishedTime}
🌙﹒✽﹒Durasi﹒⊹:* ${durationH}
👾﹒✽﹒Viewers﹒⊹:* ${viewH}

🔗 *Url:* ${url}
📔 *Description:* ${description}
  `.trim(), wm, thumbnail, url, '୨ Go To Youtube ୧ ', null, null, [
    ['▶ Audio', `${usedPrefix}yta ${url} yes`],
    ['▶ Video', `${usedPrefix}ytv ${url} yes`],
    ['▶ Youtube Search', `${usedPrefix}yts ${url}`]
  ], m)
}
handler.help = ['play', 'play2'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play2?$/i

handler.exp = 0
handler.limit = false
handler.register = true

export default handler
