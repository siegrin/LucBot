/*

GK KASI CREDIT YT SIEGRIN, GK USAH RE UPLOAD
SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
JASA RUN HEROKU BISA PC wa.me/6289530298948 BIAR BOT NYA GAK TERLALU DELAY
		
*/   
const {
WAConnection: _WAConnection,
MessageType,
Presence,
MessageOptions,
Mimetype,
WALocationMessage,
WA_MESSAGE_STUB_TYPES,
WA_DEFAULT_EPHEMERAL,
ChatModification,
WAMessageProto,
ReconnectMode,
ProxyAgent,
GroupSettingChange,
waChatKey,
relayWAMessage,
mentionedJid,
processTime,
Browsers } = require("@adiwajshing/baileys")
const simple = require('./lib/bot/simple.js')
const { spawn, exec, execSync } = require("child_process")
const translate = require('@vitalets/google-translate-api')
const WAConnection = simple.WAConnection(_WAConnection)
const toHur = require('@develoka/angka-terbilang-js')
const twitterGetUrl = require("twitter-url-direct")
const imageToBase64 = require('image-to-base64')
const ID3Writer = require('browser-id3-writer');	
const brainly = require('brainly-scraper')
const qrcode = require("qrcode-terminal")
const moment = require("moment-timezone")
const { EmojiAPI } = require("emoji-api")
const Fb = require('fb-video-downloader');
const speed = require('performance-now')
const imgbb = require('imgbb-uploader')	
const ffmpeg = require('fluent-ffmpeg')
const FormData = require('form-data')
const googleImage = require('g-i-s')
const fetch = require('node-fetch');
const ig = require('insta-fetcher')
const vapor = require('vapor-text')
const cheerio = require('cheerio')
const request = require('request');
const qrcodes = require('qrcode');
const yts = require( 'yt-search')
const CFonts  = require('cfonts')
const Math_js = require('mathjs')
const ggs = require('google-it')
const fsx = require("fs-extra")
const axios = require("axios")
const ms = require('parse-ms')
const gis = require('g-i-s')
const emoji = new EmojiAPI()
const got = require("got");
const toMs = require('ms')
const fs = require("fs")

//===============================================================================//
const { jadibot, stopjadibot } = require('./jadibot.js')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/bot/functions')
const registerimage = JSON.parse(fs.readFileSync('./lib/image/registerimage.json'))
const { addCommands, checkCommands, deleteCommands } = require('./lib/bot/commandsrespon.js')
const { setTtt, getWins, getWin, getLose, generateBoard } = require('./lib/bot/tictactoe.js')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/bot/fetcher')
const { sleep, isAfk, cekafk, addafk } = require('./lib/bot/offline')
const { yta,
 aiovideodl,
 ttdownloader,
 chara,
 lirik,
 pinterest,
 upload,
 igDownloader,
 linkwa,
 surah,
 sholat,
 playstore,
} = require('./lib/bot/ytdl')
const { y2mateA, y2mateV } = require('./lib/bot/y2mate')
const { antivirtexx } = require('./lib/bot/antivirtex.js')
const { herodetails, herolist } = require('./lib/bot/herodetail.js')
const { mediafireDl } = require('./lib/bot/mediafire.js')
const { addVote, delVote } = require('./lib/bot/vote')
const { webp2mp4File} = require('./lib/bot/webp2mp4')
const { color, bgcolor } = require('./lib/bot/color')
const { cmdadd } = require('./lib/bot/totalcmd.js')
const { wikiSearch } = require('./lib/bot/wiki.js')
const { msgFilter } = require('./lib/bot/antispam')
const { recognize } = require('./lib/bot/ocr')
const zalgo = require('./lib/bot/zalgo')

//===============================================================================//

const setiker = JSON.parse(fs.readFileSync('./strg/stik.json'))
const videonye = JSON.parse(fs.readFileSync('./strg/video.json'))
const audionye = JSON.parse(fs.readFileSync('./strg/audio.json'))
const imagenye = JSON.parse(fs.readFileSync('./strg/image.json'))

//===============================================================================//

const dungeonpoint = JSON.parse(fs.readFileSync('./database/bot/dungeonpoint.json'))
const sfilter = []
const gcdetect = []
let filter = []

//===============================================================================//

let tebakcaklontong = [];
let tebaksiapaaku = [];
let tebakgambar = [];
const antivirtex = JSON.parse(fs.readFileSync('./database/group/antivirtex.json'))
const eventtime = JSON.parse(fs.readFileSync('./database/group/eventtime.json'))
const ntilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const badword = JSON.parse(fs.readFileSync('./database/group/badword.json'))
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const mute = JSON.parse(fs.readFileSync('./database/group/mute.json'))
const bad = JSON.parse(fs.readFileSync('./database/group/bad.json'))
let family100 = [];

//===============================================================================//

const prem = JSON.parse(fs.readFileSync('./database/user/premium.json'))

//===============================================================================//

const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
const warn = []
const commandsrespon = JSON.parse(fs.readFileSync('./database/bot/commands.json'))
const scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))
const _win = JSON.parse(fs.readFileSync('./database/bot/tttwin.json'))
const _lose = JSON.parse(fs.readFileSync('./database/bot/tttlose.json'))
const tictactoe = JSON.parse(fs.readFileSync("./database/bot/tictactoe.json"))
const afk = JSON.parse(fs.readFileSync('./database/bot/off.json'))
const voting = JSON.parse(fs.readFileSync('./database/bot/voting.json'))

//===============================================================================//

const settingbot = JSON.parse(fs.readFileSync('./src/settingsbot.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { ind } = require('./language')

//===============================================================================//	
registc = fs.readFileSync('./lib/sticker/kamu sudah terdaftar.webp')
adminstc = fs.readFileSync('./lib/sticker/kamu bukan admin!.webp')
errorstc = fs.readFileSync('./lib/sticker/error.webp')
grupstc = fs.readFileSync('./lib/sticker/pakai itu digrup!.webp')
botadmstc = fs.readFileSync('./lib/sticker/jadiin aku admin.webp')
loadingstc = fs.readFileSync('./lib/sticker/loading.webp')
banstc = fs.readFileSync('./lib/sticker/kamu di ban.webp')
ownerstc = fs.readFileSync('./lib/sticker/kamu bukan ownerku!.webp')
daftarstc = fs.readFileSync('./lib/sticker/daftar dulu!.webp')
waitstc = fs.readFileSync('./lib/sticker/tunggu sebentar.webp')
kickstc = fs.readFileSync('./lib/sticker/kamu akan ku kick.webp')
welcomestc = fs.readFileSync('./lib/sticker/welcome.webp')
leavestc = fs.readFileSync('./lib/sticker/leave.webp')
needownstc = fs.readFileSync('./lib/sticker/kamu butuh ownerku.webp')
premiumstc = fs.readFileSync('./lib/sticker/kamu butuh akses premium!.webp')
successtc = fs.readFileSync('./lib/sticker/berhasil.webp')
faktifstc = fs.readFileSync('./lib/sticker/Fitur Sudah aktif.webp')
fnaktifstc = fs.readFileSync('./lib/sticker/Fitur belum aktif.webp')
spamstc = fs.readFileSync('./lib/sticker/Jangan spam.webp')
tfstc = fs.readFileSync('./lib/sticker/Transaksi sukses.webp')
trolistc = fs.readFileSync('./lib/sticker/Ada Bug Troli nih.webp')
judistc = fs.readFileSync('./lib/sticker/Mari berjudi.webp')
siegrinstc = fs.readFileSync('./lib/sticker/Subcribe siegrin.webp')
makanstc = fs.readFileSync('./lib/sticker/Kamu lapar makan dulu.webp')
heealstc = fs.readFileSync('./lib/sticker/Healmu kurang.webp')

//===============================================================================//

cecan = "cecan" 
cogan = "cogan" 
genshin = "genshin" 
meme = "meme" 
lol = "lol" 
ml = "ml"
fantasy = "dungeon"
deflttheme = "logo" 
themenye = `${cecan}` 


//===============================================================================//

owner = setting.owner
owner2 = setting.owner2
owner3 = setting.owner3
developer = setting.developer
dev = `6289530298948@s.whatsapp.net` // jangan diganti
ow = `${owner}@s.whatsapp.net`// jangan diganti
ownername = setting.ownername
ownername2 = setting.ownername2
ownername3 = setting.ownername3
numbernye = "0"

//===============================================================================//

github = setting.github 
mygmail = setting.mygmail 
myyoutube = setting.myyoutube
mytiktok = setting.mytiktok
mytwitter = setting.mytwitter
mybio = setting.mybio

//===============================================================================//

fakereply = setting.fakereply
supportme = setting.supportme
prefix = setting.prefix 
namo = setting.namo
ator = setting.ator
NamaBot = setting.NamaBot
pref = '#' 

//===============================================================================//

donasi = setting.donasi
rekening = setting.rekening
trakteer = setting.trakteer
saweria = setting.saweria

//===============================================================================//

bugc = settingbot.bugc 
premium = settingbot.premium 
database = settingbot.database 
antitrol = settingbot.antitrol  
antical = settingbot.antical 
antitags = settingbot.antitags 
readG = settingbot.readG
readP = settingbot.readP  
multi = settingbot.multi  
mainmenu = settingbot.mainmenu 
autoregis = settingbot.autoregis 
regisinfo = settingbot.regisinfo 
banChats = settingbot.banChats 
autorespon = settingbot.autorespon 
autobackup = settingbot.autobackup 
infoerror = settingbot.infoerror 
autorecording = settingbot.autorecording 
autocomposing = settingbot.autocomposing 
temamode = false

//===============================================================================//

hit_today = []
blocked = []
offline = false
waktu = '-'
alasan = '-'
//===============================================================================//

const own = [`${owner}@s.whatsapp.net`, `${owner2}@s.whatsapp.net`, `${owner3}@s.whatsapp.net`, '6289530298948@s.whatsapp.net']
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${NamaBot}\nFN:Siegrin\nitem1.TEL;waid=6289530298948:6289530298948\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:Thank Siegrin\nEND:VCARD`

const vcardowner = `BEGIN:VCARD\nVERSION:3.0\nN:${NamaBot}\nFN:${ownername}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:Thank Siegrin\nEND:VCARD`
 
//===============================================================================//

const zeksApi = ["apivinz","1b0xJAqegS9UW2CgjcErnkAqIQT","AwIRGm29MIDTaieafAwBs5zRcpX","FPOQ12gopfq1ktpGP6ppsu3H3Sx"]

//===============================================================================// 
function _0x22a5(_0x5e2848,_0x395dc1){const _0x240529=_0x2405();return _0x22a5=function(_0x22a597,_0x3263ef){_0x22a597=_0x22a597-0xb1;let _0x49feb7=_0x240529[_0x22a597];return _0x49feb7;},_0x22a5(_0x5e2848,_0x395dc1);}(function(_0x45dc75,_0x5cca61){const _0x35e6a2=_0x22a5,_0x505aa2=_0x45dc75();while(!![]){try{const _0x494e1f=parseInt(_0x35e6a2('0x186'))/0x1*(parseInt(_0x35e6a2('0x14e'))/0x2)+parseInt(_0x35e6a2('0xb3'))/0x3*(-parseInt(_0x35e6a2('0x17a'))/0x4)+parseInt(_0x35e6a2('0xb9'))/0x5+-parseInt(_0x35e6a2('0xfc'))/0x6+-parseInt(_0x35e6a2('0x178'))/0x7+parseInt(_0x35e6a2('0x112'))/0x8+parseInt(_0x35e6a2('0x161'))/0x9;if(_0x494e1f===_0x5cca61)break;else _0x505aa2['push'](_0x505aa2['shift']());}catch(_0x4ee2c4){_0x505aa2['push'](_0x505aa2['shift']());}}}(_0x2405,0xaff88));function _0x37a8(_0x2b9c22,_0x2bab27){const _0x117628=_0x45cd();return _0x37a8=function(_0x4ca50d,_0x1be923){_0x4ca50d=_0x4ca50d-0x1b8;let _0x1c8b2f=_0x117628[_0x4ca50d];return _0x1c8b2f;},_0x37a8(_0x2b9c22,_0x2bab27);}function _0x2405(){const _0x401a04=['0x121','7165968ZHoUHm','0x141','0x10d','0x11e','0x1f3','0x1d8','0x112','0x12c','0x104','0x13c','0x217','0x226','0x219','319384qZzMlO','29695DBjXxF','0x21a','0x107','16cfoWeN','0x1eb','0x225','0x1db','0x10c','0x108','0x136','1256024HbVsFD','0x21f','./database/bot/registered.json','0x20c','5266836gCCNKu','5988980PKsREr','0x1d3','0x11d','0x1be','0x1c4','0x10a','0x237','6638994wQIsrU','0x10f','972701vZBSwB','uang','0x1c0','0x1e0','0x113','0x210','0x1e7','heal','0x132','0x1e1','0x110','0x1d0','0x1c6','DEF','0x21c','0x202','0x145','0x1e2','0x22d','0x1b9','729513LtKaKW','1282190OPjzWS','0x1e8','11656IRyzcf','0x239','0x215','2788328QNgCAM','level','0x1f6','0x1de','0x131','5318050HPSPJR','0x1cc','0x1ba','0x138','77383VkgCTg','0x1dc','0x1fa','0x1b8','0x228','0x204','0x114','0x200','474XULEsN','0x213','0x106','0x122','0x231','0x124','0x125','0x1bc','0x144','3viNxOb','82704muITAs','0x1d7','0x232','0x223','0x11a','0x133','LUK','4BeleaS','0x21e','0x119','0x1c5','0x12f','shift','0x236','0x1e5','SPD','0x1ce','0x222','0x140','12sPUxWH','0x203','0x22e','0x1fc','7400kkLvWg','0x13b','0x13a','0x111','0x127','0x120','244158BESrnj','0x233','0x14a','15ELinox','0x1d5','0x1fd','0x1bb','0x1fe','0x149','push','0x22a','540fQLcGY','0x1d2','0x205','93356cxtSOF','0x12e','0x12b','3829635AoSFCD','0x1bf','0x103','stringify','0x118','0x1fb','0x14b','0x227','0x139','0x1ef','0x214','0x12a','0x1c9','58105LvlFxi','0x1ca','0x21b','0x129','0x1e9','0x14e','857199iVFyTQ','0x21d','0x234','0x1ea','0x206','0x1ec','0x20e','0x221','0x1c3','0x10b','0x20a','0x1ee','0x1f1','MGC','0x1ed','0x1d4','0x1d1','0x12d','2838479FivOuw','potion','0x22f','0x1c7','0x11c','0x207','chats','0x116','SKL','0x224','0x115','0x1f2','0x1cb','random','49642fRmJms','0x1bd','0x1dd','0x1cf','0x10e','0x238','0x22c','0x135','0x220','writeFileSync','0x201','0x20f','0x1f4','0x1f8','0x211','0x1c2','4474722KWRAUA','0x208','0x148','PWR','megapotion','0x20b','ARM','0x143','0x1f0','0x229','0x1f9','0x109','0x105','limit','0x1d6','0x142','1851836nmGwpY','0x1e6','0x1c8','0x1df','0x212','forEach','412768cgKWOe','0x1cd','0x216','0x218','ATK','0x1e4','0x1d9','0x20d','length','0x146','0x123','0x126','0x11b','0x1f5','0x230','0x1f7','0x13f','0x137','floor','0x22b','0x1ff','0x14f','0x209','0x13e','0x1c1','0x11f','keys','0x130','126rcPRFJ','0x1e3','0x235','0x117','0x147','0x134','0x14d','0x1da','0x128','2543181wfMiBw','441035WfeGAL','0x14c','./database/bot/scommand.json','0x13d'];_0x2405=function(){return _0x401a04;};return _0x2405();}(function(_0x3c5295,_0x2a0a5e){const _0x375feb=_0x22a5,_0x221cae=_0x37a8,_0x5aa3a5=_0x3c5295();while(!![]){try{const _0x5d16dd=parseInt(_0x221cae(_0x375feb('0xe3')))/0x1*(-parseInt(_0x221cae(_0x375feb('0x118')))/0x2)+-parseInt(_0x221cae(_0x375feb('0x1a6')))/0x3*(parseInt(_0x221cae(_0x375feb('0xdb')))/0x4)+-parseInt(_0x221cae(_0x375feb('0xd7')))/0x5*(parseInt(_0x221cae(_0x375feb('0x192')))/0x6)+-parseInt(_0x221cae(_0x375feb('0xf6')))/0x7+parseInt(_0x221cae(_0x375feb('0xe1')))/0x8+-parseInt(_0x221cae(_0x375feb('0xf7')))/0x9+parseInt(_0x221cae(_0x375feb('0x1ac')))/0xa;if(_0x5d16dd===_0x2a0a5e)break;else _0x5aa3a5[_0x375feb('0xb1')](_0x5aa3a5[_0x375feb('0x1a4')]());}catch(_0xcf756a){_0x5aa3a5[_0x375feb('0xb1')](_0x5aa3a5[_0x375feb('0x1a4')]());}}}(_0x45cd,0x265a0),function(_0x2d3971,_0x4e809e){const _0x3908d4=_0x22a5,_0x41685d=_0x37a8,_0xaad233=_0x3ef4,_0x56fb1d=_0x2d3971();while(!![]){try{const _0x4c6db7=parseInt(_0xaad233(_0x41685d(_0x3908d4('0xf4'))))/0x1+-parseInt(_0xaad233(_0x41685d(_0x3908d4('0x14c'))))/0x2+parseInt(_0xaad233(_0x41685d(_0x3908d4('0x188'))))/0x3+parseInt(_0xaad233(_0x41685d(_0x3908d4('0xd8'))))/0x4+parseInt(_0xaad233(_0x41685d(_0x3908d4('0xc8'))))/0x5+-parseInt(_0xaad233(_0x41685d(_0x3908d4('0x115'))))/0x6*(parseInt(_0xaad233(_0x41685d(_0x3908d4('0x101'))))/0x7)+-parseInt(_0xaad233(_0x41685d(_0x3908d4('0x1ae'))))/0x8;if(_0x4c6db7===_0x4e809e)break;else _0x56fb1d[_0x41685d(_0x3908d4('0x179'))](_0x56fb1d[_0x41685d(_0x3908d4('0xf2'))]());}catch(_0x2aa041){_0x56fb1d[_0x41685d(_0x3908d4('0x179'))](_0x56fb1d[_0x41685d(_0x3908d4('0xf2'))]());}}}(_0x13b2,0x9d342));function _0x3f03(_0x419c9a,_0x5cb60b){const _0x1a6fcf=_0x3f74();return _0x3f03=function(_0x4a268e,_0x4546e2){_0x4a268e=_0x4a268e-0x120;let _0x2241df=_0x1a6fcf[_0x4a268e];return _0x2241df;},_0x3f03(_0x419c9a,_0x5cb60b);}(function(_0x263f35,_0x5c9668){const _0x2bc95a=_0x22a5,_0x1c8b01=_0x37a8,_0x244f1c=_0x3ef4,_0xe4e54d=_0x3f03,_0x522df6=_0x263f35();while(!![]){try{const _0x494d90=parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0xfa')))))/0x1+-parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0xd0')))))/0x2+-parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0x166')))))/0x3*(-parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0xe9')))))/0x4)+parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0x1b6')))))/0x5*(parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0x176')))))/0x6)+-parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0x106')))))/0x7+parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0x148')))))/0x8+-parseInt(_0xe4e54d(_0x244f1c(_0x1c8b01(_0x2bc95a('0xb2')))))/0x9;if(_0x494d90===_0x5c9668)break;else _0x522df6[_0x244f1c(_0x1c8b01(_0x2bc95a('0xe7')))](_0x522df6[_0x244f1c(_0x1c8b01(_0x2bc95a('0xd1')))]());}catch(_0x38074f){_0x522df6[_0x244f1c(_0x1c8b01(_0x2bc95a('0xe7')))](_0x522df6[_0x244f1c(_0x1c8b01(_0x2bc95a('0xd1')))]());}}}(_0x3f74,0x4ad76));function _0x3f74(){const _0x166816=_0x22a5,_0x126b5a=_0x37a8,_0x4fc8d4=_0x3ef4,_0x29805e=[_0x4fc8d4(_0x126b5a(_0x166816('0xda'))),_0x4fc8d4(_0x126b5a(_0x166816('0x126'))),_0x4fc8d4(_0x126b5a(_0x166816('0x151'))),_0x4fc8d4(_0x126b5a(_0x166816('0x158'))),_0x4fc8d4(_0x126b5a(_0x166816('0x12a'))),_0x4fc8d4(_0x126b5a(_0x166816('0x1ad'))),_0x4fc8d4(_0x126b5a(_0x166816('0x160'))),_0x4fc8d4(_0x126b5a(_0x166816('0x147'))),_0x4fc8d4(_0x126b5a(_0x166816('0xba'))),_0x4fc8d4(_0x126b5a(_0x166816('0x16e'))),_0x4fc8d4(_0x126b5a(_0x166816('0xf8'))),_0x4fc8d4(_0x126b5a(_0x166816('0x11f'))),_0x4fc8d4(_0x126b5a(_0x166816('0xce'))),_0x4fc8d4(_0x126b5a(_0x166816('0x199'))),_0x4fc8d4(_0x126b5a(_0x166816('0x18b'))),_0x4fc8d4(_0x126b5a(_0x166816('0xbe'))),_0x4fc8d4(_0x126b5a(_0x166816('0xed'))),_0x4fc8d4(_0x126b5a(_0x166816('0x121'))),_0x4fc8d4(_0x126b5a(_0x166816('0x135'))),_0x4fc8d4(_0x126b5a(_0x166816('0x1a2'))),_0x4fc8d4(_0x126b5a(_0x166816('0x17c'))),_0x4fc8d4(_0x126b5a(_0x166816('0x1a8'))),_0x4fc8d4(_0x126b5a(_0x166816('0x128'))),_0x4fc8d4(_0x126b5a(_0x166816('0x117'))),_0x4fc8d4(_0x126b5a(_0x166816('0x15b'))),_0x4fc8d4(_0x126b5a(_0x166816('0x104'))),_0x4fc8d4(_0x126b5a(_0x166816('0xd2'))),_0x4fc8d4(_0x126b5a(_0x166816('0xe7'))),_0x4fc8d4(_0x126b5a(_0x166816('0xf1'))),_0x4fc8d4(_0x126b5a(_0x166816('0x119'))),_0x4fc8d4(_0x126b5a(_0x166816('0x14f'))),_0x4fc8d4(_0x126b5a(_0x166816('0x142'))),_0x4fc8d4(_0x126b5a(_0x166816('0xea'))),_0x4fc8d4(_0x126b5a(_0x166816('0x171')))];return _0x3f74=function(){return _0x29805e;},_0x3f74();}function _0x3ef4(_0x50b5d9,_0x14552e){const _0x5dc05b=_0x13b2();return _0x3ef4=function(_0x409964,_0x6e5d93){_0x409964=_0x409964-0x103;let _0x5a13f5=_0x5dc05b[_0x409964];return _0x5a13f5;},_0x3ef4(_0x50b5d9,_0x14552e);}function _0x45cd(){const _0x31aee3=_0x22a5,_0x49e465=[_0x31aee3('0xb1'),_0x31aee3('0x16a'),_0x31aee3('0x102'),_0x31aee3('0x1b3'),_0x31aee3('0xb7'),_0x31aee3('0xfe'),_0x31aee3('0xc6'),_0x31aee3('0x193'),_0x31aee3('0xc9'),_0x31aee3('0x127'),_0x31aee3('0x122'),_0x31aee3('0x19e'),_0x31aee3('0x11d'),_0x31aee3('0x145'),_0x31aee3('0x1b2'),_0x31aee3('0x129'),_0x31aee3('0xd9'),_0x31aee3('0x18c'),_0x31aee3('0x1b0'),_0x31aee3('0x134'),_0x31aee3('0x11e'),_0x31aee3('0xbb'),_0x31aee3('0x131'),_0x31aee3('0x16b'),_0x31aee3('0xcb'),_0x31aee3('0xcc'),_0x31aee3('0x1aa'),_0x31aee3('0x15a'),_0x31aee3('0x167'),_0x31aee3('0xff'),_0x31aee3('0x154'),_0x31aee3('0x19f'),_0x31aee3('0x10b'),_0x31aee3('0xc4'),_0x31aee3('0xde'),_0x31aee3('0xbd'),_0x31aee3('0x19d'),_0x31aee3('0x123'),_0x31aee3('0xc1'),_0x31aee3('0x177'),_0x31aee3('0x19c'),_0x31aee3('0x11c'),_0x31aee3('0x18e'),_0x31aee3('0x1b5'),_0x31aee3('0x100'),_0x31aee3('0x13e'),_0x31aee3('0xdf'),_0x31aee3('0xe8'),_0x31aee3('0xe2'),_0x31aee3('0x137'),_0x31aee3('0x107'),_0x31aee3('0x146'),_0x31aee3('0x1a3'),_0x31aee3('0x198'),_0x31aee3('0x12b'),_0x31aee3('0x182'),_0x31aee3('0xdd'),_0x31aee3('0x133'),_0x31aee3('0x12d'),_0x31aee3('0xe4'),_0x31aee3('0x13c'),_0x31aee3('0x138'),_0x31aee3('0x139'),_0x31aee3('0x11b'),_0x31aee3('0xf5'),_0x31aee3('0x10c'),_0x31aee3('0x190'),_0x31aee3('0x159'),_0x31aee3('0x1a4'),_0x31aee3('0x124'),_0x31aee3('0x1b7'),_0x31aee3('0x155'),_0x31aee3('0x144'),_0x31aee3('0x1ab'),_0x31aee3('0x1a7'),_0x31aee3('0xd5'),_0x31aee3('0x1a1'),_0x31aee3('0x13d'),_0x31aee3('0x11a'),_0x31aee3('0x15c'),_0x31aee3('0xb8'),_0x31aee3('0x196'),_0x31aee3('0x12e'),_0x31aee3('0x13f'),_0x31aee3('0x1b4'),_0x31aee3('0x17e'),_0x31aee3('0x16d'),_0x31aee3('0xe5'),_0x31aee3('0x116'),_0x31aee3('0x143'),_0x31aee3('0x17d'),_0x31aee3('0x140'),_0x31aee3('0x164'),_0x31aee3('0x181'),_0x31aee3('0x197'),_0x31aee3('0xf3'),_0x31aee3('0x173'),_0x31aee3('0x1af'),_0x31aee3('0x109'),_0x31aee3('0x111'),_0x31aee3('0x136'),_0x31aee3('0x1b1'),_0x31aee3('0xbc'),_0x31aee3('0x163'),_0x31aee3('0x153'),_0x31aee3('0x170'),_0x31aee3('0x194'),_0x31aee3('0x14d'),_0x31aee3('0xf0'),_0x31aee3('0x1bd'),_0x31aee3('0xb6'),_0x31aee3('0x14b'),_0x31aee3('0x12c'),_0x31aee3('0x103'),_0x31aee3('0x132'),_0x31aee3('0xec'),_0x31aee3('0xbf'),_0x31aee3('0x15f'),_0x31aee3('0x191'),_0x31aee3('0xeb'),_0x31aee3('0x13b'),_0x31aee3('0x108'),_0x31aee3('0x152'),_0x31aee3('0xe6'),_0x31aee3('0x13a'),_0x31aee3('0x157'),_0x31aee3('0x185'),_0x31aee3('0x1b8'),_0x31aee3('0x162'),_0x31aee3('0x14a')];return _0x45cd=function(){return _0x49e465;},_0x45cd();}const getRegisteredRandomId=()=>{const _0x1f692f=_0x22a5,_0x5a0469=_0x37a8,_0x306481=_0x3ef4,_0x1b2b61=_0x3f03;return _registered[Math[_0x1b2b61(_0x306481(_0x5a0469(_0x1f692f('0x1bc'))))](Math[_0x1b2b61(_0x306481(_0x5a0469(_0x1f692f('0xc0'))))]()*_registered[_0x1b2b61(_0x306481(_0x5a0469(_0x1f692f('0xfd'))))])]['id'];},checkRegisteredUser=_0x4486ce=>{const _0x15a940=_0x22a5,_0x104689=_0x37a8,_0x3f596f=_0x3ef4,_0x722c65=_0x3f03;let _0x5248b6=![];return Object[_0x722c65(_0x3f596f(_0x104689(_0x15a940('0xb4'))))](_registered)[_0x722c65(_0x3f596f(_0x104689(_0x15a940('0xc2'))))](_0x42cfca=>{_registered[_0x42cfca]['id']===_0x4486ce&&(_0x5248b6=!![]);}),_0x5248b6;},addRegisteredUser=_0x5c516c=>{const _0x5f0be8=_0x22a5,_0x338142=_0x37a8,_0x3306c3=_0x3ef4,_0xb92655=_0x3f03,_0xb1477e={'id':_0x5c516c,'limit':0x64,'uang':0x0,'xp':0x1,'ATK':0x0,'ARM':0x0,'PWR':0x0,'SKL':0x0,'DEF':0x0,'SPD':0x0,'MGC':0x0,'LUK':0x0,'level':0x1,'kerangajaib':0x0,'jamur':0x0,'daunmaple':0x0,'daun':0x0,'daun1':0x0,'daun2':0x0,'clover3':0x0,'clover4':0x0,'kayu':0x0,'bibit':0x0,'puzzle':0x0,'heal':0x64,'potion':0x0,'megapotion':0x0,'berlian':0x0,'emas':0x0,'perak':0x0,'perunggu':0x0,'iron':0x0,'brick':0x0,'stone':0x0,'kurakura':0x0,'gurita':0x0,'cumicumi':0x0,'udang':0x0,'lobster':0x0,'kepiting':0x0,'pufferfish':0x0,'ikan':0x0,'ikan2':0x0,'lumbalumba':0x0,'paus':0x0,'paus2':0x0,'hiu':0x0,'seadog':0x0,'pohoncactus':0x0,'pohonnatal':0x0,'pohoncemara':0x0,'pohon':0x0,'bambu':0x0,'padi':0x0,'pohonkelapa':0x0};_registered[_0xb92655(_0x3306c3(_0x338142(_0x5f0be8('0xd3'))))](_0xb1477e),fs[_0xb92655(_0x3306c3(_0x338142(_0x5f0be8('0x17f'))))](_0xb92655(_0x3306c3(_0x338142(_0x5f0be8('0xc7')))),JSON[_0xb92655(_0x3306c3(_0x338142(_0x5f0be8('0x1a9'))))](_registered));},addCmd=(_0x5abb6e,_0x336840)=>{const _0x1eeb51=_0x22a5,_0xa98892=_0x37a8,_0x4e49bd=_0x3ef4,_0x295ce2=_0x3f03,_0x53d9b4={'id':_0x5abb6e,'chats':_0x336840};scommand[_0x295ce2(_0x4e49bd(_0xa98892(_0x1eeb51('0xd3'))))](_0x53d9b4),fs[_0x295ce2(_0x4e49bd(_0xa98892(_0x1eeb51('0x17f'))))](_0x295ce2(_0x4e49bd(_0xa98892(_0x1eeb51('0x1ba')))),JSON[_0x295ce2(_0x4e49bd(_0xa98892(_0x1eeb51('0x1a9'))))](scommand));},getCommandPosition=_0xdf3e49=>{const _0x2a7778=_0x22a5,_0x18426b=_0x37a8,_0x11ebf0=_0x3ef4,_0xb6bea8=_0x3f03;let _0x5b4228=null;Object[_0xb6bea8(_0x11ebf0(_0x18426b(_0x2a7778('0xb4'))))](scommand)[_0xb6bea8(_0x11ebf0(_0x18426b(_0x2a7778('0xc2'))))](_0x14592f=>{scommand[_0x14592f]['id']===_0xdf3e49&&(_0x5b4228=_0x14592f);});if(_0x5b4228!==null)return _0x5b4228;},getCmd=_0x5778b0=>{const _0x13ca6d=_0x22a5,_0x2c758b=_0x37a8,_0x4c0ef7=_0x3ef4,_0xaace1b=_0x3f03;let _0x1a5ef7=null;Object[_0xaace1b(_0x4c0ef7(_0x2c758b(_0x13ca6d('0xb4'))))](scommand)[_0xaace1b(_0x4c0ef7(_0x2c758b(_0x13ca6d('0xc2'))))](_0x26414d=>{scommand[_0x26414d]['id']===_0x5778b0&&(_0x1a5ef7=_0x26414d);});if(_0x1a5ef7!==null)return scommand[_0x1a5ef7][_0xaace1b(_0x4c0ef7(_0x2c758b(_0x13ca6d('0x172'))))];},checkSCommand=_0xe9d5b0=>{const _0x55bb6f=_0x22a5,_0x7f25b1=_0x37a8,_0x4ef4b7=_0x3ef4,_0x2f0c53=_0x3f03;let _0x2c218a=![];return Object[_0x2f0c53(_0x4ef4b7(_0x7f25b1(_0x55bb6f('0xb4'))))](scommand)[_0x2f0c53(_0x4ef4b7(_0x7f25b1(_0x55bb6f('0xc2'))))](_0xb595a0=>{scommand[_0xb595a0]['id']===_0xe9d5b0&&(_0x2c218a=!![]);}),_0x2c218a;},getLevelingXp=_0x446b0d=>{const _0x1c7761=_0x22a5,_0x125e7c=_0x37a8,_0x55b6a9=_0x3ef4,_0x29af50=_0x3f03;let _0x1e6be1=![];Object[_0x29af50(_0x55b6a9(_0x125e7c(_0x1c7761('0xb4'))))](_registered)[_0x29af50(_0x55b6a9(_0x125e7c(_0x1c7761('0xc2'))))](_0x36b3da=>{_registered[_0x36b3da]['id']===_0x446b0d&&(_0x1e6be1=_0x36b3da);});if(_0x1e6be1!==![])return _registered[_0x1e6be1]['xp'];},getLevelingLevel=_0xa0c0f4=>{const _0x2033c9=_0x22a5,_0x222566=_0x37a8,_0x23c75e=_0x3ef4,_0x40b33d=_0x3f03;let _0xb0e2fb=![];Object[_0x40b33d(_0x23c75e(_0x222566(_0x2033c9('0xb4'))))](_registered)[_0x40b33d(_0x23c75e(_0x222566(_0x2033c9('0xc2'))))](_0x3bc394=>{_registered[_0x3bc394]['id']===_0xa0c0f4&&(_0xb0e2fb=_0x3bc394);});if(_0xb0e2fb!==![])return _registered[_0xb0e2fb][_0x40b33d(_0x23c75e(_0x222566(_0x2033c9('0x18d'))))];},getLevelingId=_0x3a4c60=>{const _0x2e7bb6=_0x22a5,_0x5df5eb=_0x37a8,_0x5015f3=_0x3ef4,_0x5b8e19=_0x3f03;let _0x10dca5=![];Object[_0x5b8e19(_0x5015f3(_0x5df5eb(_0x2e7bb6('0xb4'))))](_registered)[_0x5b8e19(_0x5015f3(_0x5df5eb(_0x2e7bb6('0xc2'))))](_0x51985a=>{_registered[_0x51985a]['id']===_0x3a4c60&&(_0x10dca5=_0x51985a);});if(_0x10dca5!==![])return _registered[_0x10dca5]['id'];},addLevelingXp=(_0x8d0c86,_0x1049c3)=>{const _0x28299a=_0x22a5,_0x239e3a=_0x37a8,_0x87b91f=_0x3ef4,_0x5f3d09=_0x3f03;let _0x38f76a=![];Object[_0x5f3d09(_0x87b91f(_0x239e3a(_0x28299a('0xb4'))))](_registered)[_0x5f3d09(_0x87b91f(_0x239e3a(_0x28299a('0xc2'))))](_0x52f89d=>{_registered[_0x52f89d]['id']===_0x8d0c86&&(_0x38f76a=_0x52f89d);}),_0x38f76a!==![]&&(_registered[_0x38f76a]['xp']+=_0x1049c3,fs[_0x5f3d09(_0x87b91f(_0x239e3a(_0x28299a('0x17f'))))](_0x5f3d09(_0x87b91f(_0x239e3a(_0x28299a('0xc7')))),JSON[_0x5f3d09(_0x87b91f(_0x239e3a(_0x28299a('0x1a9'))))](_registered)));},addLevelingLevel=(_0xfbe5ff,_0x1fc42c)=>{const _0x56c38b=_0x22a5,_0x277e31=_0x37a8,_0xd335fd=_0x3ef4,_0x542b31=_0x3f03;let _0x27dd02=![];Object[_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0xb4'))))](_registered)[_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0xc2'))))](_0x1695c4=>{_registered[_0x1695c4]['id']===_0xfbe5ff&&(_0x27dd02=_0x1695c4);}),_0x27dd02!==![]&&(_registered[_0x27dd02][_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0x18d'))))]+=_0x1fc42c,fs[_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0x17f'))))](_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0xc7')))),JSON[_0x542b31(_0xd335fd(_0x277e31(_0x56c38b('0x1a9'))))](_registered)));},addLimitUser=(_0x8a16fd,_0x4fed3e)=>{const _0x4361b4=_0x22a5,_0xf0ebae=_0x37a8,_0x5b5ec8=_0x3ef4,_0x4d458e=_0x3f03;let _0x35dfb9=![];Object[_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0xb4'))))](_registered)[_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0xc2'))))](_0x1addfb=>{_registered[_0x1addfb]['id']===_0x8a16fd&&(_0x35dfb9=_0x1addfb);}),_0x35dfb9!==![]&&(_registered[_0x35dfb9][_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0xd4'))))]+=_0x4fed3e,fs[_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0x17f'))))](_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0xc7')))),JSON[_0x4d458e(_0x5b5ec8(_0xf0ebae(_0x4361b4('0x1a9'))))](_registered)));},checkLimituser=_0x1dfb04=>{const _0x584d08=_0x22a5,_0x1cb984=_0x37a8,_0xdfd1f7=_0x3ef4,_0x5cbc93=_0x3f03;let _0x25ae10=![];Object[_0x5cbc93(_0xdfd1f7(_0x1cb984(_0x584d08('0xb4'))))](_registered)[_0x5cbc93(_0xdfd1f7(_0x1cb984(_0x584d08('0xc2'))))](_0x24f5f5=>{_registered[_0x24f5f5]['id']===_0x1dfb04&&(_0x25ae10=_0x24f5f5);});if(_0x25ae10!==![])return _registered[_0x25ae10][_0x5cbc93(_0xdfd1f7(_0x1cb984(_0x584d08('0xd4'))))];},confirmLIMIT=(_0x23404e,_0x56c6)=>{const _0xe69167=_0x22a5,_0x2a6e10=_0x37a8,_0x28ddba=_0x3ef4,_0x148ec4=_0x3f03;let _0x1377da=![];Object[_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0xb4'))))](_registered)[_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0xc2'))))](_0x34720e=>{_registered[_0x34720e]['id']==_0x23404e&&(_0x1377da=_0x34720e);}),_0x1377da!==![]&&(_registered[_0x1377da][_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0xd4'))))]-=_0x56c6,fs[_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0x17f'))))](_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0xc7')))),JSON[_0x148ec4(_0x28ddba(_0x2a6e10(_0xe69167('0x1a9'))))](_registered)));},addKoinUser=(_0x4b0952,_0x228f19)=>{const _0x2d1c7d=_0x22a5,_0x143c1a=_0x37a8,_0x3692d5=_0x3ef4,_0x14e713=_0x3f03;let _0x273554=![];Object[_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0xb4'))))](_registered)[_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0xc2'))))](_0x510a44=>{_registered[_0x510a44]['id']===_0x4b0952&&(_0x273554=_0x510a44);}),_0x273554!==![]&&(_registered[_0x273554][_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0x120'))))]+=_0x228f19,fs[_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0x17f'))))](_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0xc7')))),JSON[_0x14e713(_0x3692d5(_0x143c1a(_0x2d1c7d('0x1a9'))))](_registered)));},checkATMuser=_0x350d0d=>{const _0x211e6b=_0x22a5,_0x40d62d=_0x37a8,_0x58257c=_0x3ef4,_0xcc27ca=_0x3f03;let _0x35f64a=![];Object[_0xcc27ca(_0x58257c(_0x40d62d(_0x211e6b('0xb4'))))](_registered)[_0xcc27ca(_0x58257c(_0x40d62d(_0x211e6b('0xc2'))))](_0x2ef590=>{_registered[_0x2ef590]['id']===_0x350d0d&&(_0x35f64a=_0x2ef590);});if(_0x35f64a!==![])return _registered[_0x35f64a][_0xcc27ca(_0x58257c(_0x40d62d(_0x211e6b('0x120'))))];},confirmATM=(_0x4900b7,_0x3d7bf5)=>{const _0x243fd7=_0x22a5,_0xdd96ac=_0x37a8,_0x2e39c0=_0x3ef4,_0x53d2f5=_0x3f03;let _0xd172c6=![];Object[_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0xb4'))))](_registered)[_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0xc2'))))](_0x55db0a=>{_registered[_0x55db0a]['id']===_0x4900b7&&(_0xd172c6=_0x55db0a);}),_0xd172c6!==![]&&(_registered[_0xd172c6][_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0x120'))))]-=_0x3d7bf5,fs[_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0x17f'))))](_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0xc7')))),JSON[_0x53d2f5(_0x2e39c0(_0xdd96ac(_0x243fd7('0x1a9'))))](_registered)));},addHealUser=(_0x41e925,_0x247e6f)=>{const _0x585c50=_0x22a5,_0x30285c=_0x37a8,_0x576c45=_0x3ef4,_0x8eaeaf=_0x3f03;let _0x360427=![];Object[_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0xb4'))))](_registered)[_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0xc2'))))](_0x5980eb=>{_registered[_0x5980eb]['id']===_0x41e925&&(_0x360427=_0x5980eb);}),_0x360427!==![]&&(_registered[_0x360427][_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0x1a0'))))]+=_0x247e6f,fs[_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0x17f'))))](_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0xc7')))),JSON[_0x8eaeaf(_0x576c45(_0x30285c(_0x585c50('0x1a9'))))](_registered)));},checkHealuser=_0x44024e=>{const _0x399877=_0x22a5,_0xa1e137=_0x37a8,_0x1d9454=_0x3ef4,_0x38abfc=_0x3f03;let _0x13fb61=![];Object[_0x38abfc(_0x1d9454(_0xa1e137(_0x399877('0xb4'))))](_registered)[_0x38abfc(_0x1d9454(_0xa1e137(_0x399877('0xc2'))))](_0x3075cb=>{_registered[_0x3075cb]['id']===_0x44024e&&(_0x13fb61=_0x3075cb);});if(_0x13fb61!==![])return _registered[_0x13fb61][_0x38abfc(_0x1d9454(_0xa1e137(_0x399877('0x1a0'))))];},confirmHEAL=(_0x4ca3dd,_0x2bdb54)=>{const _0x116d41=_0x22a5,_0x16bb6f=_0x37a8,_0x4b5ab8=_0x3ef4,_0x51e997=_0x3f03;let _0x195586=![];Object[_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0xb4'))))](_registered)[_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0xc2'))))](_0x36fb08=>{_registered[_0x36fb08]['id']==_0x4ca3dd&&(_0x195586=_0x36fb08);}),_0x195586!==![]&&(_registered[_0x195586][_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0x1a0'))))]-=_0x2bdb54,fs[_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0x17f'))))](_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0xc7')))),JSON[_0x51e997(_0x4b5ab8(_0x16bb6f(_0x116d41('0x1a9'))))](_registered)));},addPotionUser=(_0x32acd2,_0x334755)=>{const _0x231e98=_0x22a5,_0x577448=_0x37a8,_0x1dc46b=_0x3ef4,_0x3c7994=_0x3f03;let _0x14e61e=![];Object[_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0xb4'))))](_registered)[_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0xc2'))))](_0x12a5a7=>{_registered[_0x12a5a7]['id']===_0x32acd2&&(_0x14e61e=_0x12a5a7);}),_0x14e61e!==![]&&(_registered[_0x14e61e][_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0x187'))))]+=_0x334755,fs[_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0x17f'))))](_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0xc7')))),JSON[_0x3c7994(_0x1dc46b(_0x577448(_0x231e98('0x1a9'))))](_registered)));},checkPotionuser=_0x1e680c=>{const _0x2308c3=_0x22a5,_0xf5ec8f=_0x37a8,_0x334067=_0x3ef4,_0x354a5f=_0x3f03;let _0x2e5613=![];Object[_0x354a5f(_0x334067(_0xf5ec8f(_0x2308c3('0xb4'))))](_registered)[_0x354a5f(_0x334067(_0xf5ec8f(_0x2308c3('0xc2'))))](_0x43492d=>{_registered[_0x43492d]['id']===_0x1e680c&&(_0x2e5613=_0x43492d);});if(_0x2e5613!==![])return _registered[_0x2e5613][_0x354a5f(_0x334067(_0xf5ec8f(_0x2308c3('0x187'))))];},confirmPOTION=(_0x603ea1,_0x582e57)=>{const _0x4edc8f=_0x22a5,_0x51a9c2=_0x37a8,_0xbb524=_0x3ef4,_0x34add0=_0x3f03;let _0x6a9e42=![];Object[_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0xb4'))))](_registered)[_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0xc2'))))](_0x30e127=>{_registered[_0x30e127]['id']==_0x603ea1&&(_0x6a9e42=_0x30e127);}),_0x6a9e42!==![]&&(_registered[_0x6a9e42][_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0x187'))))]-=_0x582e57,fs[_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0x17f'))))](_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0xc7')))),JSON[_0x34add0(_0xbb524(_0x51a9c2(_0x4edc8f('0x1a9'))))](_registered)));},addMegaPotionUser=(_0x1cf0e1,_0x25aa1a)=>{const _0x2d10ec=_0x22a5,_0x2ddcbd=_0x37a8,_0x4e42b4=_0x3ef4,_0x1d40cb=_0x3f03;let _0x3d310c=![];Object[_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0xb4'))))](_registered)[_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0xc2'))))](_0x3d42ee=>{_registered[_0x3d42ee]['id']===_0x1cf0e1&&(_0x3d310c=_0x3d42ee);}),_0x3d310c!==![]&&(_registered[_0x3d310c][_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0x10d'))))]+=_0x25aa1a,fs[_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0x17f'))))](_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0xc7')))),JSON[_0x1d40cb(_0x4e42b4(_0x2ddcbd(_0x2d10ec('0x1a9'))))](_registered)));},checkMegaPotionuser=_0x439e82=>{const _0x1461d2=_0x22a5,_0x35050a=_0x37a8,_0x24a3fb=_0x3ef4,_0x486082=_0x3f03;let _0x2be8c7=![];Object[_0x486082(_0x24a3fb(_0x35050a(_0x1461d2('0xb4'))))](_registered)[_0x486082(_0x24a3fb(_0x35050a(_0x1461d2('0xc2'))))](_0x4bb48d=>{_registered[_0x4bb48d]['id']===_0x439e82&&(_0x2be8c7=_0x4bb48d);});if(_0x2be8c7!==![])return _registered[_0x2be8c7][_0x486082(_0x24a3fb(_0x35050a(_0x1461d2('0x10d'))))];},confirmMEGAPOTION=(_0x146c4e,_0x2cf3c0)=>{const _0x160823=_0x22a5,_0x165f16=_0x37a8,_0x12660c=_0x3ef4,_0x2748dd=_0x3f03;let _0x3cf625=![];Object[_0x2748dd(_0x12660c(_0x165f16(_0x160823('0xb4'))))](_registered)[_0x2748dd(_0x12660c(_0x165f16(_0x160823('0xc2'))))](_0x1816e4=>{_registered[_0x1816e4]['id']==_0x146c4e&&(_0x3cf625=_0x1816e4);}),_0x3cf625!==![]&&(_registered[_0x3cf625][_0x2748dd(_0x12660c(_0x165f16(_0x160823('0x10d'))))]-=_0x2cf3c0,fs[_0x2748dd(_0x12660c(_0x165f16(_0x160823('0x17f'))))](_0x2748dd(_0x12660c(_0x165f16(_0x160823('0xc7')))),JSON[_0x2748dd(_0x12660c(_0x165f16(_0x160823('0x1a9'))))](_registered)));},addATKUser=(_0xba16f8,_0x374173)=>{const _0x117311=_0x22a5,_0x3a4f83=_0x37a8,_0x4be890=_0x3ef4,_0xce3984=_0x3f03;let _0x403f5e=![];Object[_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0xb4'))))](_registered)[_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0xc2'))))](_0x328f43=>{_registered[_0x328f43]['id']===_0xba16f8&&(_0x403f5e=_0x328f43);}),_0x403f5e!==![]&&(_registered[_0x403f5e][_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0xdc'))))]+=_0x374173,fs[_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0x17f'))))](_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0xc7')))),JSON[_0xce3984(_0x4be890(_0x3a4f83(_0x117311('0x1a9'))))](_registered)));},checkATKuser=_0x121ebe=>{const _0x35bfd9=_0x22a5,_0x21cf5a=_0x37a8,_0x29a74c=_0x3ef4,_0x5403a3=_0x3f03;let _0x1c8814=![];Object[_0x5403a3(_0x29a74c(_0x21cf5a(_0x35bfd9('0xb4'))))](_registered)[_0x5403a3(_0x29a74c(_0x21cf5a(_0x35bfd9('0xc2'))))](_0x2586df=>{_registered[_0x2586df]['id']===_0x121ebe&&(_0x1c8814=_0x2586df);});if(_0x1c8814!==![])return _registered[_0x1c8814][_0x5403a3(_0x29a74c(_0x21cf5a(_0x35bfd9('0xdc'))))];},confirmATK=(_0x1ebe40,_0x539385)=>{const _0x491f07=_0x22a5,_0x2ad218=_0x37a8,_0x30f277=_0x3ef4,_0x43801f=_0x3f03;let _0x139497=![];Object[_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0xb4'))))](_registered)[_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0xc2'))))](_0x5d04e4=>{_registered[_0x5d04e4]['id']==_0x1ebe40&&(_0x139497=_0x5d04e4);}),_0x139497!==![]&&(_registered[_0x139497][_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0xdc'))))]-=_0x539385,fs[_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0x17f'))))](_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0xc7')))),JSON[_0x43801f(_0x30f277(_0x2ad218(_0x491f07('0x1a9'))))](_registered)));},addARMUser=(_0x37efc5,_0x4a434d)=>{const _0x367f65=_0x22a5,_0x454513=_0x37a8,_0x3ce6bb=_0x3ef4,_0x3d0478=_0x3f03;let _0x4d1620=![];Object[_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0xb4'))))](_registered)[_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0xc2'))))](_0x3eaf79=>{_registered[_0x3eaf79]['id']===_0x37efc5&&(_0x4d1620=_0x3eaf79);}),_0x4d1620!==![]&&(_registered[_0x4d1620][_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0x184'))))]+=_0x4a434d,fs[_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0x17f'))))](_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0xc7')))),JSON[_0x3d0478(_0x3ce6bb(_0x454513(_0x367f65('0x1a9'))))](_registered)));},checkARMuser=_0x1960db=>{const _0x5d2dc1=_0x22a5,_0x3b6a37=_0x37a8,_0x4946f8=_0x3ef4,_0x298ea8=_0x3f03;let _0x555cf1=![];Object[_0x298ea8(_0x4946f8(_0x3b6a37(_0x5d2dc1('0xb4'))))](_registered)[_0x298ea8(_0x4946f8(_0x3b6a37(_0x5d2dc1('0xc2'))))](_0x5ca28c=>{_registered[_0x5ca28c]['id']===_0x1960db&&(_0x555cf1=_0x5ca28c);});if(_0x555cf1!==![])return _registered[_0x555cf1][_0x298ea8(_0x4946f8(_0x3b6a37(_0x5d2dc1('0x184'))))];},confirmARM=(_0x5e8df1,_0x1160cc)=>{const _0x380cf5=_0x22a5,_0xbdd0e0=_0x37a8,_0x591dea=_0x3ef4,_0x261f23=_0x3f03;let _0x175dee=![];Object[_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0xb4'))))](_registered)[_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0xc2'))))](_0xc9efcc=>{_registered[_0xc9efcc]['id']==_0x5e8df1&&(_0x175dee=_0xc9efcc);}),_0x175dee!==![]&&(_registered[_0x175dee][_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0x184'))))]-=_0x1160cc,fs[_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0x17f'))))](_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0xc7')))),JSON[_0x261f23(_0x591dea(_0xbdd0e0(_0x380cf5('0x1a9'))))](_registered)));},addPWRUser=(_0x92e813,_0x3e0643)=>{const _0x4ced02=_0x22a5,_0x5d4090=_0x37a8,_0x3bd431=_0x3ef4,_0x5858a8=_0x3f03;let _0x1ea344=![];Object[_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0xb4'))))](_registered)[_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0xc2'))))](_0x46072c=>{_registered[_0x46072c]['id']===_0x92e813&&(_0x1ea344=_0x46072c);}),_0x1ea344!==![]&&(_registered[_0x1ea344][_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0x168'))))]+=_0x3e0643,fs[_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0x17f'))))](_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0xc7')))),JSON[_0x5858a8(_0x3bd431(_0x5d4090(_0x4ced02('0x1a9'))))](_registered)));},checkPWRuser=_0x2f138b=>{const _0x350f22=_0x22a5,_0x392224=_0x37a8,_0x5b2c2d=_0x3ef4,_0xcab827=_0x3f03;let _0x11bdc2=![];Object[_0xcab827(_0x5b2c2d(_0x392224(_0x350f22('0xb4'))))](_registered)[_0xcab827(_0x5b2c2d(_0x392224(_0x350f22('0xc2'))))](_0xc4226b=>{_registered[_0xc4226b]['id']===_0x2f138b&&(_0x11bdc2=_0xc4226b);});if(_0x11bdc2!==![])return _registered[_0x11bdc2][_0xcab827(_0x5b2c2d(_0x392224(_0x350f22('0x168'))))];},confirmPWR=(_0x11c978,_0x3d97d0)=>{const _0x3f2eae=_0x22a5,_0x49d478=_0x37a8,_0x5226f6=_0x3ef4,_0x4fe566=_0x3f03;let _0x145876=![];Object[_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0xb4'))))](_registered)[_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0xc2'))))](_0xe92abe=>{_registered[_0xe92abe]['id']==_0x11c978&&(_0x145876=_0xe92abe);}),_0x145876!==![]&&(_registered[_0x145876][_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0x168'))))]-=_0x3d97d0,fs[_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0x17f'))))](_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0xc7')))),JSON[_0x4fe566(_0x5226f6(_0x49d478(_0x3f2eae('0x1a9'))))](_registered)));},addSKLUser=(_0x255bb6,_0x81d12)=>{const _0x39cae6=_0x22a5,_0x5edca5=_0x37a8,_0x10d2ec=_0x3ef4,_0x53854f=_0x3f03;let _0x3c6405=![];Object[_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0xb4'))))](_registered)[_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0xc2'))))](_0x5c93c1=>{_registered[_0x5c93c1]['id']===_0x255bb6&&(_0x3c6405=_0x5c93c1);}),_0x3c6405!==![]&&(_registered[_0x3c6405][_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0x17b'))))]+=_0x81d12,fs[_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0x17f'))))](_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0xc7')))),JSON[_0x53854f(_0x10d2ec(_0x5edca5(_0x39cae6('0x1a9'))))](_registered)));},checkSKLuser=_0x59f374=>{const _0x1b033a=_0x22a5,_0x359d33=_0x37a8,_0x4cc746=_0x3ef4,_0x2d785e=_0x3f03;let _0x2533e2=![];Object[_0x2d785e(_0x4cc746(_0x359d33(_0x1b033a('0xb4'))))](_registered)[_0x2d785e(_0x4cc746(_0x359d33(_0x1b033a('0xc2'))))](_0x341423=>{_registered[_0x341423]['id']===_0x59f374&&(_0x2533e2=_0x341423);});if(_0x2533e2!==![])return _registered[_0x2533e2][_0x2d785e(_0x4cc746(_0x359d33(_0x1b033a('0x17b'))))];},confirmSKL=(_0x45884c,_0x357b29)=>{const _0x54f786=_0x22a5,_0x5aa25a=_0x37a8,_0x55c55d=_0x3ef4,_0x57c811=_0x3f03;let _0x2215fd=![];Object[_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0xb4'))))](_registered)[_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0xc2'))))](_0x15e459=>{_registered[_0x15e459]['id']==_0x45884c&&(_0x2215fd=_0x15e459);}),_0x2215fd!==![]&&(_registered[_0x2215fd][_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0x17b'))))]-=_0x357b29,fs[_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0x17f'))))](_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0xc7')))),JSON[_0x57c811(_0x55c55d(_0x5aa25a(_0x54f786('0x1a9'))))](_registered)));},addDEFUser=(_0x1d8d64,_0x26fd8)=>{const _0xa68e97=_0x22a5,_0x516be2=_0x37a8,_0x3d6119=_0x3ef4,_0x34967e=_0x3f03;let _0x249aeb=![];Object[_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0xb4'))))](_registered)[_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0xc2'))))](_0x2f495d=>{_registered[_0x2f495d]['id']===_0x1d8d64&&(_0x249aeb=_0x2f495d);}),_0x249aeb!==![]&&(_registered[_0x249aeb][_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0x180'))))]+=_0x26fd8,fs[_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0x17f'))))](_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0xc7')))),JSON[_0x34967e(_0x3d6119(_0x516be2(_0xa68e97('0x1a9'))))](_registered)));},checkDEFuser=_0x308983=>{const _0x2dcb9=_0x22a5,_0x1a63ca=_0x37a8,_0x58685f=_0x3ef4,_0x5aa184=_0x3f03;let _0x37e1f2=![];Object[_0x5aa184(_0x58685f(_0x1a63ca(_0x2dcb9('0xb4'))))](_registered)[_0x5aa184(_0x58685f(_0x1a63ca(_0x2dcb9('0xc2'))))](_0x3e90bb=>{_registered[_0x3e90bb]['id']===_0x308983&&(_0x37e1f2=_0x3e90bb);});if(_0x37e1f2!==![])return _registered[_0x37e1f2][_0x5aa184(_0x58685f(_0x1a63ca(_0x2dcb9('0x180'))))];},confirmDEF=(_0x334052,_0x25af77)=>{const _0x518c19=_0x22a5,_0xed8b32=_0x37a8,_0xca8bbf=_0x3ef4,_0x51e04c=_0x3f03;let _0x441ded=![];Object[_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0xb4'))))](_registered)[_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0xc2'))))](_0x371006=>{_registered[_0x371006]['id']==_0x334052&&(_0x441ded=_0x371006);}),_0x441ded!==![]&&(_registered[_0x441ded][_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0x180'))))]-=_0x25af77,fs[_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0x17f'))))](_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0xc7')))),JSON[_0x51e04c(_0xca8bbf(_0xed8b32(_0x518c19('0x1a9'))))](_registered)));},addSPDUser=(_0x1ae5c8,_0xb0df18)=>{const _0x357d10=_0x22a5,_0x1844e6=_0x37a8,_0x13e8b3=_0x3ef4,_0x1a98e1=_0x3f03;let _0x352032=![];Object[_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0xb4'))))](_registered)[_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0xc2'))))](_0x4a0334=>{_registered[_0x4a0334]['id']===_0x1ae5c8&&(_0x352032=_0x4a0334);}),_0x352032!==![]&&(_registered[_0x352032][_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0x195'))))]+=_0xb0df18,fs[_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0x17f'))))](_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0xc7')))),JSON[_0x1a98e1(_0x13e8b3(_0x1844e6(_0x357d10('0x1a9'))))](_registered)));},checkSPDuser=_0x279d2c=>{const _0x4482c7=_0x22a5,_0x4c48eb=_0x37a8,_0x72c84d=_0x3ef4,_0x39a0c9=_0x3f03;let _0x555621=![];Object[_0x39a0c9(_0x72c84d(_0x4c48eb(_0x4482c7('0xb4'))))](_registered)[_0x39a0c9(_0x72c84d(_0x4c48eb(_0x4482c7('0xc2'))))](_0xec9372=>{_registered[_0xec9372]['id']===_0x279d2c&&(_0x555621=_0xec9372);});if(_0x555621!==![])return _registered[_0x555621][_0x39a0c9(_0x72c84d(_0x4c48eb(_0x4482c7('0x195'))))];},confirmSPD=(_0x5cfa35,_0x433376)=>{const _0x1a114b=_0x22a5,_0x5ab147=_0x37a8,_0x1d566f=_0x3ef4,_0x2286ba=_0x3f03;let _0x380916=![];Object[_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0xb4'))))](_registered)[_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0xc2'))))](_0x374f1e=>{_registered[_0x374f1e]['id']==_0x5cfa35&&(_0x380916=_0x374f1e);}),_0x380916!==![]&&(_registered[_0x380916][_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0x195'))))]-=_0x433376,fs[_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0x17f'))))](_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0xc7')))),JSON[_0x2286ba(_0x1d566f(_0x5ab147(_0x1a114b('0x1a9'))))](_registered)));},addMGCUser=(_0x1e5301,_0x4a3f86)=>{const _0xc30009=_0x22a5,_0x3bf022=_0x37a8,_0x3bd457=_0x3ef4,_0x410771=_0x3f03;let _0x2d0357=![];Object[_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0xb4'))))](_registered)[_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0xc2'))))](_0x3c6226=>{_registered[_0x3c6226]['id']===_0x1e5301&&(_0x2d0357=_0x3c6226);}),_0x2d0357!==![]&&(_registered[_0x2d0357][_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0x16f'))))]+=_0x4a3f86,fs[_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0x17f'))))](_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0xc7')))),JSON[_0x410771(_0x3bd457(_0x3bf022(_0xc30009('0x1a9'))))](_registered)));},checkMGCuser=_0x5c4a35=>{const _0x1d6bff=_0x22a5,_0x5423cb=_0x37a8,_0x4e9bd6=_0x3ef4,_0x5396d6=_0x3f03;let _0x485331=![];Object[_0x5396d6(_0x4e9bd6(_0x5423cb(_0x1d6bff('0xb4'))))](_registered)[_0x5396d6(_0x4e9bd6(_0x5423cb(_0x1d6bff('0xc2'))))](_0x1ce874=>{_registered[_0x1ce874]['id']===_0x5c4a35&&(_0x485331=_0x1ce874);});if(_0x485331!==![])return _registered[_0x485331][_0x5396d6(_0x4e9bd6(_0x5423cb(_0x1d6bff('0x16f'))))];},confirmMGC=(_0xcafe61,_0x4084a0)=>{const _0x58d73=_0x22a5,_0x30265a=_0x37a8,_0x4e7e17=_0x3ef4,_0x211895=_0x3f03;let _0x16b1cb=![];Object[_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0xb4'))))](_registered)[_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0xc2'))))](_0x3b1775=>{_registered[_0x3b1775]['id']==_0xcafe61&&(_0x16b1cb=_0x3b1775);}),_0x16b1cb!==![]&&(_registered[_0x16b1cb][_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0x16f'))))]-=_0x4084a0,fs[_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0x17f'))))](_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0xc7')))),JSON[_0x211895(_0x4e7e17(_0x30265a(_0x58d73('0x1a9'))))](_registered)));},addLUKUser=(_0x253c5d,_0x9f6aa8)=>{const _0x570818=_0x22a5,_0x5e009d=_0x37a8,_0x309920=_0x3ef4,_0x129df8=_0x3f03;let _0x27cef8=![];Object[_0x129df8(_0x309920(_0x5e009d(_0x570818('0xb4'))))](_registered)[_0x129df8(_0x309920(_0x5e009d(_0x570818('0xc2'))))](_0x18d6bf=>{_registered[_0x18d6bf]['id']===_0x253c5d&&(_0x27cef8=_0x18d6bf);}),_0x27cef8!==![]&&(_registered[_0x27cef8][_0x129df8(_0x309920(_0x5e009d(_0x570818('0x10f'))))]+=_0x9f6aa8,fs[_0x129df8(_0x309920(_0x5e009d(_0x570818('0x17f'))))](_0x129df8(_0x309920(_0x5e009d(_0x570818('0xc7')))),JSON[_0x129df8(_0x309920(_0x5e009d(_0x570818('0x1a9'))))](_registered)));},checkLUKuser=_0x28e00e=>{const _0x5e26bb=_0x22a5,_0x5a4142=_0x37a8,_0x10395f=_0x3ef4,_0xab8e92=_0x3f03;let _0x5e19e5=![];Object[_0xab8e92(_0x10395f(_0x5a4142(_0x5e26bb('0xb4'))))](_registered)[_0xab8e92(_0x10395f(_0x5a4142(_0x5e26bb('0xc2'))))](_0x585ea3=>{_registered[_0x585ea3]['id']===_0x28e00e&&(_0x5e19e5=_0x585ea3);});if(_0x5e19e5!==![])return _registered[_0x5e19e5][_0xab8e92(_0x10395f(_0x5a4142(_0x5e26bb('0x10f'))))];},confirmLUK=(_0x34c676,_0x3632c6)=>{const _0x21312f=_0x22a5,_0x376b1e=_0x37a8,_0x136178=_0x3ef4,_0x597d9a=_0x3f03;let _0x3d27c9=![];Object[_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0xb4'))))](_registered)[_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0xc2'))))](_0x434ede=>{_registered[_0x434ede]['id']==_0x34c676&&(_0x3d27c9=_0x434ede);}),_0x3d27c9!==![]&&(_registered[_0x3d27c9][_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0x10f'))))]-=_0x3632c6,fs[_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0x17f'))))](_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0xc7')))),JSON[_0x597d9a(_0x136178(_0x376b1e(_0x21312f('0x1a9'))))](_registered)));};function _0x13b2(){const _0x5f1ce5=_0x22a5,_0x51945b=_0x37a8,_0x4f41a0=[_0x51945b(_0x5f1ce5('0x12f')),_0x51945b(_0x5f1ce5('0x105')),_0x51945b(_0x5f1ce5('0xfb')),_0x51945b(_0x5f1ce5('0xd4')),_0x51945b(_0x5f1ce5('0x184')),_0x51945b(_0x5f1ce5('0x117')),_0x51945b(_0x5f1ce5('0xe7')),_0x51945b(_0x5f1ce5('0x187')),_0x51945b(_0x5f1ce5('0x171')),_0x51945b(_0x5f1ce5('0xfa')),_0x51945b(_0x5f1ce5('0x18a')),_0x51945b(_0x5f1ce5('0xcf')),_0x51945b(_0x5f1ce5('0xc8')),_0x51945b(_0x5f1ce5('0xc3')),_0x51945b(_0x5f1ce5('0x114')),_0x51945b(_0x5f1ce5('0x121')),_0x51945b(_0x5f1ce5('0x189')),_0x51945b(_0x5f1ce5('0x15d')),_0x51945b(_0x5f1ce5('0xd3')),_0x51945b(_0x5f1ce5('0x130')),_0x51945b(_0x5f1ce5('0x18f')),_0x51945b(_0x5f1ce5('0x10a')),_0x51945b(_0x5f1ce5('0xcd')),_0x51945b(_0x5f1ce5('0x16e')),_0x51945b(_0x5f1ce5('0x104')),_0x51945b(_0x5f1ce5('0x179')),_0x51945b(_0x5f1ce5('0xf1')),_0x51945b(_0x5f1ce5('0x119')),_0x51945b(_0x5f1ce5('0x172')),_0x51945b(_0x5f1ce5('0xf9')),_0x51945b(_0x5f1ce5('0xca')),_0x51945b(_0x5f1ce5('0x125')),_0x51945b(_0x5f1ce5('0x1a9')),_0x51945b(_0x5f1ce5('0xb5')),_0x51945b(_0x5f1ce5('0x1b9')),_0x51945b(_0x5f1ce5('0x150')),_0x51945b(_0x5f1ce5('0xe9')),_0x51945b(_0x5f1ce5('0x113')),_0x51945b(_0x5f1ce5('0xf2')),_0x51945b(_0x5f1ce5('0xd6')),_0x51945b(_0x5f1ce5('0x188')),_0x51945b(_0x5f1ce5('0xc7')),_0x51945b(_0x5f1ce5('0x175')),_0x51945b(_0x5f1ce5('0xc5')),_0x51945b(_0x5f1ce5('0xd0')),_0x51945b(_0x5f1ce5('0x141')),_0x51945b(_0x5f1ce5('0x17c')),_0x51945b(_0x5f1ce5('0x110')),_0x51945b(_0x5f1ce5('0x16c')),_0x51945b(_0x5f1ce5('0xef')),_0x51945b(_0x5f1ce5('0x183')),_0x51945b(_0x5f1ce5('0x149')),_0x51945b(_0x5f1ce5('0x156')),_0x51945b(_0x5f1ce5('0x1a2')),_0x51945b(_0x5f1ce5('0x19b')),_0x51945b(_0x5f1ce5('0x128')),_0x51945b(_0x5f1ce5('0x120')),_0x51945b(_0x5f1ce5('0x19a')),_0x51945b(_0x5f1ce5('0x158')),_0x51945b(_0x5f1ce5('0x10e')),_0x51945b(_0x5f1ce5('0x126')),_0x51945b(_0x5f1ce5('0xc2')),_0x51945b(_0x5f1ce5('0x180')),_0x51945b(_0x5f1ce5('0x165')),_0x51945b(_0x5f1ce5('0xee')),_0x51945b(_0x5f1ce5('0x1a5')),_0x51945b(_0x5f1ce5('0x15e')),_0x51945b(_0x5f1ce5('0x174')),_0x51945b(_0x5f1ce5('0xea')),_0x51945b(_0x5f1ce5('0x169')),_0x51945b(_0x5f1ce5('0xf8')),_0x51945b(_0x5f1ce5('0xe0')),_0x51945b(_0x5f1ce5('0xf4')),_0x51945b(_0x5f1ce5('0x1bb')),_0x51945b(_0x5f1ce5('0xd1')),_0x51945b(_0x5f1ce5('0xd2')),_0x51945b(_0x5f1ce5('0x14f'))];return _0x13b2=function(){return _0x4f41a0;},_0x13b2();}
//=================================================//
module.exports = client = async (client, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
if ((Object.keys(mek.message)[0] === 'ephemeralMessage' && JSON.stringify(mek.message).includes('EPHEMERAL_SETTING')) && mek.message.ephemeralMessage.message.protocolMessage.type === 3) {
if (bugc === false) return
if (mek.key.fromMe) return
nums = mek.participant
longkapnye = "\n".repeat(420)
tekuss = `© luc bot APIs 2021${longkapnye}\`\`\`BUGGC TERDETEKSI\`\`\`\n@⁨${nums.split('@')[0]} akan dikick\n\n_Clear chat by mans_\n*Jangan maen bug tod*`
client.groupRemove(mek.key.remoteJid, [nums]).catch((e) => { reply(`*ERR:* ${e}`) })
client.sendMessage(mek.key.remoteJid, 'WAH BUG NIH', MessageType.text)
client.sendMessage(mek.key.remoteJid, tekuss, MessageType.text, {contextInfo:{mentionedJid:[nums + "@s.whatsapp.net"]}})
}
global.blocked
//m = simple.smsg(client, mek)
//let { mentionedd } = m
const content = JSON.stringify(mek.message)
const m = simple.smsg(client, mek)
const antibot = m.isBaileys
const from = mek.key.remoteJid
const { quotedMek, isQuotedMek, mentioned} = mek
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
const type = Object.keys(mek.message)[0]
const cmd = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('hex')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ''.slice(1).trim().split(/ +/).shift().toLowerCase()
if (multi){
// var prefix = ''
var prefix = /^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+@,;]/.test(cmd) ? cmd.match(/^[°•π÷×¶∆£¢€¥®™=|~!#$%^&.?/\\©^z+,;]/gi) : '!'  	
} else {
prefix = pref
}
const body = (type == 'listResponseMessage') && mek.message[type].singleSelectReply.selectedRowId ? mek.message[type].singleSelectReply.selectedRowId : (type === 'buttonsResponseMessage' && mek.message.buttonsResponseMessage.selectedButtonId) ? mek.message.buttonsResponseMessage.selectedButtonId : (type === 'conversation' && mek.message.conversation.startsWith(prefix)) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption.startsWith(prefix) ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption.startsWith(prefix) ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text.startsWith(prefix) ? mek.message.extendedTextMessage.text : (type == 'stickerMessage') && (getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== null && getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) !== undefined) ? getCmd(mek.message.stickerMessage.fileSha256.toString('base64')) : ""
const budy = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
var pes = (type === 'conversation' && mek.message.conversation) ? mek.message.conversation : (type == 'imageMessage') && mek.message.imageMessage.caption ? mek.message.imageMessage.caption : (type == 'videoMessage') && mek.message.videoMessage.caption ? mek.message.videoMessage.caption : (type == 'extendedTextMessage') && mek.message.extendedTextMessage.text ? mek.message.extendedTextMessage.text : ''
const messagesC = pes.slice(0).trim().split(/ +/).shift().toLowerCase()
chats = (type === 'conversation') ? mek.message.conversation : (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.text : ''
const arg = chats.slice(command.length + 2, chats.length)
const args = body.trim().split(/ +/).slice(1)
const isCmd = body.startsWith(prefix)
const isbuttonCmd = body.selectedButtonId
const islistCmd = body.selectedRowIdId
if (isCmd) cmdadd()
const isStMsg = (type == 'listResponseMessage') ? mek.message.listResponseMessage.title : ''
const totalhit = JSON.parse(fs.readFileSync('./database/bot/totalcmd.json'))[0].totalcmd
hit_today.push(isCmd)
const q = args.join(' ')
const botNumber = client.user.jid
const botNumberss = client.user.jid + '@c.us'
const isGroup = from.endsWith('@g.us')
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined
const isRegistered = checkRegisteredUser(sender)
const totalchat = await client.chats.all()
const totalgroup = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontak = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupName = isGroup ? groupMetadata.subject : ''
const groupId = isGroup ? groupMetadata.jid : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isWelkom = isGroup ? welkom.includes(from) : false
const isOwner = own.includes(sender) || mek.key.fromMe
const isBanned = blocked.includes(sender)
const isPremium = prem.includes(sender) || isOwner
const isMuted = isGroup ? mute.includes(from) : false
const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const AntiLink = isGroup ? ntilink.includes(from) : false
const isEvento = isGroup ? eventtime.includes(from) : false
const isBadWord = isGroup ? badword.includes(from) : false
const isVote = isGroup ? voting.includes(from) : false
const senderNumber = sender.split("@")[0]
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const player = `${sender.split("@")[0]}@s.whatsapp.net`
const numbernye = `0@s.whatsapp.net`
const ZeksApiku = zeksApi[Math.floor(Math.random() * (zeksApi.length))]
const date1 = Math.ceil(Math.random() * 100)
const point = Math.floor(Math.random() * 1) + 0
const luchit = hit_today.length
const WMthumb = fs.readFileSync(`src/siegrin.jpeg`)


const lucBulan = ['Bulan','Tahun','Hari','Minggu','Jam','Detik','Menit','Abad']
const lucBulan1 = lucBulan[Math.floor(Math.random() * (lucBulan.length))]
myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];
const { wa_version, mcc, mnc, os_version, os_build_number, device_manufacturer, device_model } = client.user.phone

myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];

const reqXp  = 10 * (Math.pow(2, getLevelingLevel(sender)) - 1)
const uangku = checkATMuser(sender)
const potionpoint = checkPotionuser(sender)
var potionpointa = `💉:${potionpoint}`
if (potionpoint <= 9999){
}
const megapotionpoint = checkMegaPotionuser(sender)
var megapotionpointa = `💊:${megapotionpoint}`
if (megapotionpoint <= 9999){
}

var angka = '1'
if (isPremium) {
angka = '0'
} 
if (isOwner) {
angka = '0'
}
var prema = 'GRATISAN'
if (isRegistered) {
prema = 'GRATISAN'
} 
if (isGroupAdmins) {
prema = 'Admin Grup'
} 
if (isPremium) {
prema = 'Premium'
} 
if (isOwner) {
prema = 'Owner'
}

client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
	})
//=================================================//

const time = moment.tz('Asia/Jakarta').format('YY/MM/DD')
const wib = moment().tz('Asia/Jakarta').format("HH:mm:ss")
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
if(wib < "23:59:00"){
var hahh = '🌃 Selamat Malam'
}
if(wib < "19:00:00"){
var hahh = '🌇 Selamat Petang'
}
if(wib < "18:00:00"){
var hahh = '🌁️ Selamat Sore'
}
if(wib < "15:00:00"){
var hahh = '🌅 Selamat Siang'
}
if(wib < "11:00:00"){
var hahh = '🌄 Selamat Pagi'
}
if(wib < "05:00:00"){
var hahh = '🌃 Selamat Malam'
}

//=================================================//

isStc = Object.keys(mek.message)[0] == "stickerMessage" ? mek.message.stickerMessage.fileSha256.toString('hex') : ""
isStc = `${isStc}`
const isStcQ = isStc !== "" && content.includes("extendedTextMessage") 
isStc !== "" && content.includes("conversation") 
const isStcMedia = isStc !== "" && content.includes("quotedMessage") && !content.includes("extendedTextMessage") || isStc !== "" && content.includes("quotedMessage") && !content.includes("conversation")
const isStcVideo = isStcMedia && content.includes("videoMessage")
const isStcImage = isStcMedia && content.includes("imageMessage")
const isStcSticker = isStcMedia && content.includes("stickerMessage")
const isStcTeks = isStcMedia && content.includes("quotedMessage")
const isStcDocs = isStcMedia && content.includes("documentMessage")
const isStcContact = isStcMedia && content.includes("contactMessage")
const isStcAudio = isStcMedia && content.includes("audioMessage")
const isStcLoca = isStcMedia && content.includes("locationMessage")
const isStcTag = isStcMedia && content.includes("mentionedJid")
const isStcReply = isStcMedia && content.includes("Message")
const isStcProd = isStcMedia && content.includes("productMessage")

const _0x4235a0=_0x4bc5;(function(_0x2be66b,_0x1fa56d){const _0x388d4d=_0x4bc5,_0x22749a=_0x2be66b();while(!![]){try{const _0x2a93ab=-parseInt(_0x388d4d('0x29b'))/0x1*(-parseInt(_0x388d4d('0x4b2'))/0x2)+-parseInt(_0x388d4d('0x65a'))/0x3*(-parseInt(_0x388d4d('0x7f0'))/0x4)+parseInt(_0x388d4d('0x34b'))/0x5+parseInt(_0x388d4d('0x639'))/0x6+parseInt(_0x388d4d('0x3ed'))/0x7+parseInt(_0x388d4d('0x8a5'))/0x8+-parseInt(_0x388d4d('0x48f'))/0x9*(parseInt(_0x388d4d('0x457'))/0xa);if(_0x2a93ab===_0x1fa56d)break;else _0x22749a['push'](_0x22749a['shift']());}catch(_0x197c5a){_0x22749a['push'](_0x22749a['shift']());}}}(_0x3cf5,0x2cac9));const _0xc5f37=_0x23c5;(function(_0x107719,_0x503d64){const _0x57ccd6=_0x4bc5,_0x4bfc39=_0x23c5,_0x34da85=_0x107719();while(!![]){try{const _0x513828=-parseInt(_0x4bfc39(_0x57ccd6('0x4cb')))/0x1+-parseInt(_0x4bfc39(_0x57ccd6('0x15b')))/0x2+-parseInt(_0x4bfc39(_0x57ccd6('0x235')))/0x3+-parseInt(_0x4bfc39(_0x57ccd6('0x794')))/0x4*(parseInt(_0x4bfc39(_0x57ccd6('0x17d')))/0x5)+parseInt(_0x4bfc39(_0x57ccd6('0x3bb')))/0x6*(parseInt(_0x4bfc39(_0x57ccd6('0x71f')))/0x7)+parseInt(_0x4bfc39(_0x57ccd6('0x6e9')))/0x8+-parseInt(_0x4bfc39(_0x57ccd6('0x33a')))/0x9*(-parseInt(_0x4bfc39(_0x57ccd6('0x545')))/0xa);if(_0x513828===_0x503d64)break;else _0x34da85[_0x57ccd6('0x4eb')](_0x34da85[_0x57ccd6('0x807')]());}catch(_0x96f20d){_0x34da85[_0x57ccd6('0x4eb')](_0x34da85[_0x57ccd6('0x807')]());}}}(_0xe157,0xc6439));const _0x399b48=_0x29ae;(function(_0x239052,_0x43dac4){const _0x4081d2=_0x4bc5,_0x35872d=_0x23c5,_0x452f34=_0x29ae,_0x244242=_0x239052();while(!![]){try{const _0x54f4c2=-parseInt(_0x452f34(_0x35872d(_0x4081d2('0x56b'))))/0x1*(parseInt(_0x452f34(_0x35872d(_0x4081d2('0x8ae'))))/0x2)+parseInt(_0x452f34(_0x35872d(_0x4081d2('0x85d'))))/0x3*(parseInt(_0x452f34(_0x35872d(_0x4081d2('0x4b4'))))/0x4)+-parseInt(_0x452f34(_0x35872d(_0x4081d2('0x1c6'))))/0x5+parseInt(_0x452f34(_0x35872d(_0x4081d2('0x5a8'))))/0x6+parseInt(_0x452f34(_0x35872d(_0x4081d2('0x6e4'))))/0x7+parseInt(_0x452f34(_0x35872d(_0x4081d2('0x338'))))/0x8+-parseInt(_0x452f34(_0x35872d(_0x4081d2('0x7bb'))))/0x9*(parseInt(_0x452f34(_0x35872d(_0x4081d2('0x1c8'))))/0xa);if(_0x54f4c2===_0x43dac4)break;else _0x244242[_0x35872d(_0x4081d2('0x671'))](_0x244242[_0x35872d(_0x4081d2('0x55b'))]());}catch(_0x1d6121){_0x244242[_0x35872d(_0x4081d2('0x671'))](_0x244242[_0x35872d(_0x4081d2('0x55b'))]());}}}(_0x2616,0xdb321));const _0x14dae3=_0x3740;(function(_0x4dc40e,_0x250e69){const _0x72c53f=_0x4bc5,_0x2d3be1=_0x23c5,_0x2a04a7=_0x29ae,_0xf9679b=_0x3740,_0x17ed1a=_0x4dc40e();while(!![]){try{const _0x3c7f3d=parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x38e')))))/0x1+parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x7ab')))))/0x2+parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x654')))))/0x3+-parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x71c')))))/0x4+parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x7ff')))))/0x5+parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x452')))))/0x6+-parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x774')))))/0x7*(parseInt(_0xf9679b(_0x2a04a7(_0x2d3be1(_0x72c53f('0x2d2')))))/0x8);if(_0x3c7f3d===_0x250e69)break;else _0x17ed1a[_0x2a04a7(_0x2d3be1(_0x72c53f('0x6a0')))](_0x17ed1a[_0x2a04a7(_0x2d3be1(_0x72c53f('0x693')))]());}catch(_0xdfff3f){_0x17ed1a[_0x2a04a7(_0x2d3be1(_0x72c53f('0x6a0')))](_0x17ed1a[_0x2a04a7(_0x2d3be1(_0x72c53f('0x693')))]());}}}(_0x2aec,0x7b7aa));const hearts=checkHealuser(sender);var heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4bf'))));if(hearts<=0x0)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2e5'))));else{if(hearts<=0x5)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x466'))));else{if(hearts<=0xa)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x28b'))));else{if(hearts<=0xf)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2c5'))));else{if(hearts<=0x14)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x885'))));else{if(hearts<=0x19)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1a9'))));else{if(hearts<=0x1e)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x54e'))));else{if(hearts<=0x23)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1dd'))));else{if(hearts<=0x28)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4e8'))));else{if(hearts<=0x2d)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x66c'))));else{if(hearts<=0x32)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x727'))));else{if(hearts<=0x37)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ad'))));else{if(hearts<=0x3c)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x182'))));else{if(hearts<=0x41)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x735'))));else{if(hearts<=0x46)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x477'))));else{if(hearts<=0x4b)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x443'))));else{if(hearts<=0x50)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5d7'))));else{if(hearts<=0x55)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x737'))));else{if(hearts<=0x5a)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5af'))));else{if(hearts<=0x5f)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x850'))));else{if(hearts<=0xc8)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1b7'))));else{if(hearts<=0x96)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x827'))));else{if(hearts<=0x12c)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x26a'))));else{if(hearts<=0x190)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1a2'))));else{if(hearts<=0x3e8)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x857'))));else{if(hearts<=0x7d0)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7af'))));else{if(hearts<=0xbb8)heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x58e'))));else hearts<=0x270f&&(heartbars=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x58e')))));}}}}}}}}}}}}}}}}}}}}}}}}}}client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x72b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x479'))))+_registered[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3fb'))))+client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x57e'))))][0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3b8'))))+client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x57e'))))][0x1]+'|')[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x583'))))](_0x5895ce=>_0x5895ce),settingstatus=new Date()*0x1;const isUrl=_0x54dd65=>{const _0x92ee13=_0x4235a0,_0x5b3df1=_0xc5f37,_0x4011bb=_0x399b48,_0x4c08d4=_0x14dae3;return _0x54dd65[_0x4c08d4(_0x4011bb(_0x5b3df1(_0x92ee13('0x665'))))](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,'gi'));},replyex=_0x435c9d=>{const _0x1ad909=_0x4235a0,_0x18d6c1=_0xc5f37,_0xdaab70=_0x399b48,_0x3f7d96=_0x14dae3;client[_0x3f7d96(_0xdaab70(_0x18d6c1(_0x1ad909('0x4c6'))))](from,_0x435c9d,text,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},replysticker=_0x23da22=>{const _0x139943=_0x4235a0,_0x313c25=_0xc5f37,_0x49549f=_0x399b48,_0x423f27=_0x14dae3;client[_0x423f27(_0x49549f(_0x313c25(_0x139943('0x4c6'))))](from,_0x23da22,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'externalAdReply':{'title':''+hahh,'body':_0x423f27(_0x49549f(_0x313c25(_0x139943('0x761'))))+kyun(process[_0x423f27(_0x49549f(_0x313c25(_0x139943('0x361'))))]()),'previewType':_0x423f27(_0x49549f(_0x313c25(_0x139943('0x1e3')))),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});},reply=_0x57169e=>{const _0x3c68f8=_0x4235a0,_0x23b73e=_0xc5f37,_0x221252=_0x399b48,_0x10ca04=_0x14dae3;client[_0x10ca04(_0x221252(_0x23b73e(_0x3c68f8('0x4c6'))))](from,_0x57169e,text,{'thumbnail':WMthumb,'quoted':mek,'sendEphemeral':!![],'contextInfo':{'externalAdReply':{'title':''+hahh,'body':_0x10ca04(_0x221252(_0x23b73e(_0x3c68f8('0x761'))))+kyun(process[_0x10ca04(_0x221252(_0x23b73e(_0x3c68f8('0x361'))))]()),'previewType':_0x10ca04(_0x221252(_0x23b73e(_0x3c68f8('0x1e3')))),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});},sendListMes=_0x23343f=>{const _0x21e0ec=_0x4235a0,_0x90435=_0xc5f37,_0x5c6f27=_0x399b48,_0x3fb9ca=_0x14dae3;client[_0x3fb9ca(_0x5c6f27(_0x90435(_0x21e0ec('0x4c6'))))](from,_0x23343f,MessageType[_0x3fb9ca(_0x5c6f27(_0x90435(_0x21e0ec('0x3ab'))))],{'quoted':ftoko,'thumbnail':WMthumb,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});},mentions=(_0x247c29,_0xf14ec8,_0x5d7bb9)=>{const _0x58280a=_0x4235a0,_0x21a776=_0xc5f37,_0x23e140=_0x399b48,_0xa2cf65=_0x14dae3;_0x5d7bb9==null||_0x5d7bb9==undefined||_0x5d7bb9==![]?client[_0xa2cf65(_0x23e140(_0x21a776(_0x58280a('0x4c6'))))](from,_0x247c29[_0xa2cf65(_0x23e140(_0x21a776(_0x58280a('0x53f'))))](),extendedText,{'contextInfo':{'mentionedJid':_0xf14ec8}}):client[_0xa2cf65(_0x23e140(_0x21a776(_0x58280a('0x4c6'))))](from,_0x247c29[_0xa2cf65(_0x23e140(_0x21a776(_0x58280a('0x53f'))))](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':_0xf14ec8}});},fakethumb=(_0xa5bf48,_0x2d85d1)=>{const _0x92f204=_0x4235a0,_0x2860eb=_0xc5f37,_0x3224a0=_0x399b48,_0x348ecc=_0x14dae3;client[_0x348ecc(_0x3224a0(_0x2860eb(_0x92f204('0x4c6'))))](from,_0xa5bf48,image,{'thumbnail':WMthumb,'quoted':mek,'caption':_0x2d85d1});},fakeitem=_0x376ce8=>{const _0xe9fd47=_0x4235a0,_0x47797e=_0xc5f37,_0x164a4b=_0x399b48,_0x15c91e=_0x14dae3;client[_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x4c6'))))](from,_0x376ce8,text,{'quoted':{'key':{'fromMe':![],'participant':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x50c')))),...from?{'remoteJid':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x347'))))}:{}},'message':{'orderMessage':{'orderId':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x74b')))),'thumbnail':WMthumb,'itemCount':''+date1,'status':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x4e5')))),'surface':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x15d')))),'message':NamaBot,'token':_0x15c91e(_0x164a4b(_0x47797e(_0xe9fd47('0x40c'))))}}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});},ftoko={'key':{'fromMe':![],'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x347'))))}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x845')))),'jpegThumbnail':WMthumb},'title':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1fb')))),'description':NamaBot,'currencyCode':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6f3')))),'priceAmount1000':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8ad')))),'retailerId':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x19c')))),'productImageCount':''+date1},'businessOwnerJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c'))))}}},fakegroup=_0x4a4234=>{const _0x4174d6=_0x4235a0,_0x16af7a=_0xc5f37,_0x38d984=_0x399b48,_0x44e12d=_0x14dae3;client[_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x4c6'))))](from,_0x4a4234,text,{'quoted':{'key':{'fromMe':![],'participant':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x50c')))),...from?{'remoteJid':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x347'))))}:{}},'message':{'imageMessage':{'url':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x74a')))),'mimetype':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x845')))),'caption':NamaBot,'fileSha256':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x71a')))),'fileLength':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x4b5')))),'height':0x438,'width':0x437,'mediaKey':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x4c9')))),'fileEncSha256':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x707')))),'directPath':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x663')))),'mediaKeyTimestamp':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x190')))),'jpegThumbnail':WMthumb,'scansSidecar':_0x44e12d(_0x38d984(_0x16af7a(_0x4174d6('0x6fb'))))}}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});},fstatus={'key':{'fromMe':![],'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x55f'))))}:{}},'message':{'imageMessage':{'url':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x74a')))),'mimetype':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x845')))),'caption':NamaBot,'fileSha256':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71a')))),'fileLength':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4b5')))),'height':0x438,'width':0x437,'mediaKey':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c9')))),'fileEncSha256':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x707')))),'directPath':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x663')))),'mediaKeyTimestamp':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x190')))),'jpegThumbnail':WMthumb,'scansSidecar':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6fb'))))}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]},ftroli={'key':{'fromMe':![],'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x347'))))},'message':{'orderMessage':{'itemCount':''+date1,'status':0xc8,'thumbnail':WMthumb,'surface':0xc8,'message':NamaBot,'orderTitle':'L','sellerJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c'))))}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]},fdoc={'key':{'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c'))))},'message':{'documentMessage':{'title':NamaBot,'jpegThumbnail':WMthumb}}},fvn={'key':{'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x64d'))))}:{}},'message':{'audioMessage':{'mimetype':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6e5')))),'seconds':0x1869f,'ptt':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x868'))))}}},fgif={'key':{'fromMe':![],'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x64d'))))}:{}},'message':{'videoMessage':{'title':NamaBot,'h':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5bd')))),'seconds':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x224')))),'gifPlayback':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x868')))),'caption':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7d0')))),'jpegThumbnail':WMthumb}}},fgclink={'key':{'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c'))))},'message':{'groupInviteMessage':{'groupJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x829')))),'inviteCode':'m','groupName':'P','caption':NamaBot,'jpegThumbnail':WMthumb}}},fvideo={'key':{'fromMe':![],'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x64d'))))}:{}},'message':{'videoMessage':{'title':NamaBot,'h':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5bd')))),'seconds':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x224')))),'caption':NamaBot,'jpegThumbnail':WMthumb}}},floc={'key':{'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c'))))},'message':{'locationMessage':{'name':NamaBot,'jpegThumbnail':WMthumb}}},fkontak={'key':{'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),...from?{'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5bf'))))}:{}},'message':{'contactMessage':{'displayName':''+ownername,'vcard':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x76a'))))+ownername+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1fc'))))+ownername+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x84f'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+':'+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x590')))),'jpegThumbnail':WMthumb,'thumbnail':WMthumb,'sendEphemeral':!![]}}};var fakeReplyList=[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x20d')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6f9')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x66f')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x39c')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3fd')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7d1')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x15e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x53e'))))],fakeReply=fakeReplyList[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*fakeReplyList[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])];const sendStickerFromUrl=async(_0x294aa8,_0x456389)=>{const _0x249d8f=_0x4235a0,_0x48a87f=_0xc5f37,_0x30f141=_0x399b48,_0x551aaf=_0x14dae3;var _0x3dde95=Date[_0x551aaf(_0x30f141(_0x48a87f(_0x249d8f('0x389'))))]()/0x2710,_0x3fb7c4=function(_0x3aacda,_0x163204,_0x1f2757){const _0x45cbab=_0x249d8f,_0x181067=_0x48a87f,_0x33b5bf=_0x30f141,_0x548a3d=_0x551aaf;request[_0x548a3d(_0x33b5bf(_0x181067(_0x45cbab('0x594'))))](_0x3aacda,function(_0x2872c8,_0x5b9d61,_0x5b747c){const _0x28a9f7=_0x45cbab,_0x416dfb=_0x181067,_0x41e68c=_0x33b5bf,_0x183649=_0x548a3d;request(_0x3aacda)[_0x183649(_0x41e68c(_0x416dfb(_0x28a9f7('0x5be'))))](fs[_0x183649(_0x41e68c(_0x416dfb(_0x28a9f7('0x3b7'))))](_0x163204))['on'](_0x183649(_0x41e68c(_0x416dfb(_0x28a9f7('0x2d8')))),_0x1f2757);});};_0x3fb7c4(_0x456389,_0x551aaf(_0x30f141(_0x48a87f(_0x249d8f('0x566'))))+_0x3dde95+_0x551aaf(_0x30f141(_0x48a87f(_0x249d8f('0x1d9')))),async function(){const _0x479071=_0x249d8f,_0x3ba035=_0x48a87f,_0x285465=_0x30f141,_0x3a63c4=_0x551aaf;console[_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x852'))))](_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x790')))));let _0x5cfe08=_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x566'))))+_0x3dde95+_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x1d9')))),_0x50704f=_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x566'))))+_0x3dde95+_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x5b8'))));exec(_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x43a'))))+_0x5cfe08+_0x3a63c4(_0x285465(_0x3ba035(_0x479071('0x799'))))+_0x50704f,_0x3ba0c6=>{const _0x5c8a78=_0x479071,_0x1e6120=_0x3ba035,_0x44b327=_0x285465,_0x2b1185=_0x3a63c4;let _0x3a5c0b=fs[_0x2b1185(_0x44b327(_0x1e6120(_0x5c8a78('0x2da'))))](_0x50704f);client[_0x2b1185(_0x44b327(_0x1e6120(_0x5c8a78('0x4c6'))))](_0x294aa8,_0x3a5c0b,MessageType[_0x2b1185(_0x44b327(_0x1e6120(_0x5c8a78('0x725'))))],{'quoted':mek}),fs[_0x2b1185(_0x44b327(_0x1e6120(_0x5c8a78('0x33f'))))](_0x5cfe08),fs[_0x2b1185(_0x44b327(_0x1e6120(_0x5c8a78('0x33f'))))](_0x50704f);});});},sendFileFromUrl=async(_0x551205,_0x5c2f8c,_0xadd679)=>{const _0xc963f9=_0x4235a0,_0x6c88f6=_0xc5f37,_0x3f2b13=_0x399b48,_0x44fba6=_0x14dae3;hasil=await getBuffer(_0x551205),client[_0x44fba6(_0x3f2b13(_0x6c88f6(_0xc963f9('0x4c6'))))](from,hasil,_0x5c2f8c,_0xadd679)[_0x44fba6(_0x3f2b13(_0x6c88f6(_0xc963f9('0x583'))))](_0x17e286=>{const _0x498da1=_0xc963f9,_0x514404=_0x6c88f6,_0x546a4b=_0x3f2b13,_0x21c884=_0x44fba6;fetch(_0x551205)[_0x21c884(_0x546a4b(_0x514404(_0x498da1('0x45c'))))](_0x58b6fd=>{const _0x148364=_0x498da1,_0x18434e=_0x514404,_0x40c6c4=_0x546a4b,_0x5a26c3=_0x21c884;client[_0x5a26c3(_0x40c6c4(_0x18434e(_0x148364('0x4c6'))))](from,_0x58b6fd,_0x5c2f8c,_0xadd679)[_0x5a26c3(_0x40c6c4(_0x18434e(_0x148364('0x583'))))](_0x134bc4=>{const _0x2afd96=_0x148364,_0xf24567=_0x18434e,_0x34f850=_0x40c6c4,_0x13ecd3=_0x5a26c3;client[_0x13ecd3(_0x34f850(_0xf24567(_0x2afd96('0x4c6'))))](from,{'url':_0x551205},_0x5c2f8c,_0xadd679)[_0x13ecd3(_0x34f850(_0xf24567(_0x2afd96('0x583'))))](_0x112b77=>{const _0x57dcf4=_0x2afd96,_0x1ab28d=_0xf24567,_0x186255=_0x34f850,_0x4adaf1=_0x13ecd3;reply,console[_0x4adaf1(_0x186255(_0x1ab28d(_0x57dcf4('0x852'))))](_0x112b77);});});});});},sendMediaURL=async(_0x52ec2e,_0x1fd395,_0x13e25f='',_0x2fb19a=[])=>{const _0x56c965=_0x4235a0,_0x10c80d=_0xc5f37,_0x3c0d6a=_0x399b48,_0x27e472=_0x14dae3;_0x2fb19a[_0x27e472(_0x3c0d6a(_0x10c80d(_0x56c965('0x2b1'))))]>0x0&&(_0x13e25f=normalizeMention(_0x52ec2e,_0x13e25f,_0x2fb19a));const _0x574e67=Date[_0x27e472(_0x3c0d6a(_0x10c80d(_0x56c965('0x389'))))]()/0x2710,_0x4cfeaa=_0x574e67[_0x27e472(_0x3c0d6a(_0x10c80d(_0x56c965('0x73b'))))]();let _0xe55e21='';var _0x4df082=function(_0x2b2a91,_0x2516a0,_0x49dc22){const _0x4d3313=_0x56c965,_0x52be51=_0x10c80d,_0x449618=_0x3c0d6a,_0x9fa39b=_0x27e472;request[_0x9fa39b(_0x449618(_0x52be51(_0x4d3313('0x594'))))](_0x2b2a91,function(_0x46ca46,_0x4b6d74,_0x219174){const _0x5987c6=_0x4d3313,_0x23f456=_0x52be51,_0x123bed=_0x449618,_0x532d35=_0x9fa39b;_0xe55e21=_0x4b6d74[_0x532d35(_0x123bed(_0x23f456(_0x5987c6('0x4d8'))))][_0x532d35(_0x123bed(_0x23f456(_0x5987c6('0x319'))))],request(_0x2b2a91)[_0x532d35(_0x123bed(_0x23f456(_0x5987c6('0x5be'))))](fs[_0x532d35(_0x123bed(_0x23f456(_0x5987c6('0x3b7'))))](_0x2516a0))['on'](_0x532d35(_0x123bed(_0x23f456(_0x5987c6('0x2d8')))),_0x49dc22);});};_0x4df082(_0x1fd395,_0x4cfeaa,async function(){const _0x25e87d=_0x56c965,_0x3bf8de=_0x10c80d,_0x3d0473=_0x3c0d6a,_0x35915b=_0x27e472;console[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x852'))))](_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x4b0')))));let _0x172737=fs[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x2da'))))](_0x4cfeaa),_0x2e1fe9=_0xe55e21[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x3e6'))))]('/')[0x0]+_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x5c6'))));_0xe55e21===_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x5fb'))))&&(_0x2e1fe9=MessageType[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x78e'))))],_0xe55e21=Mimetype[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x4fc'))))]),_0xe55e21[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x3e6'))))]('/')[0x0]===_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x31b'))))&&(_0xe55e21=Mimetype[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x616'))))]),client[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x4c6'))))](_0x52ec2e,_0x172737,_0x2e1fe9,{'quoted':mek,'mimetype':_0xe55e21,'caption':_0x13e25f,'contextInfo':{'mentionedJid':_0x2fb19a},'thumbnail':Buffer[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x19b'))))](0x0)}),fs[_0x35915b(_0x3d0473(_0x3bf8de(_0x25e87d('0x33f'))))](_0x4cfeaa);});},textImg=_0x192a9a=>{const _0x312c09=_0x4235a0,_0x2b5de2=_0xc5f37,_0x184f6b=_0x399b48,_0x2d5278=_0x14dae3;return client[_0x2d5278(_0x184f6b(_0x2b5de2(_0x312c09('0x4c6'))))](from,_0x192a9a,text,{'quoted':mek,'wmthumbnail':fs[_0x2d5278(_0x184f6b(_0x2b5de2(_0x312c09('0x2da'))))](_0x2d5278(_0x184f6b(_0x2b5de2(_0x312c09('0x17b'))))+wmthumbnail)});};let contrii=[];for(let i of ow){contrii[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))]({'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x87c'))))+NamaBot,'vcard':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x828'))))+NamaBot+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x346'))))},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x52a'))))+NamaBot,'vcard':vcardowner},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x87c'))))+NamaBot,'vcard':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x828'))))+NamaBot+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1b9'))))+ownername2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x565'))))+owner2+':'+owner2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x68e'))))+mygmail+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x524'))))+mybio+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f1'))))},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x87c'))))+NamaBot,'vcard':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x828'))))+NamaBot+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1b9'))))+ownername3+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x565'))))+owner2+':'+owner2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x68e'))))+mygmail+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x524'))))+mybio+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f1'))))},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x87c'))))+NamaBot,'vcard':vcard});}let contri1=[];function _0x2616(){const _0x267704=_0x4235a0,_0x256683=_0xc5f37,_0x545bee=[_0x256683(_0x267704('0x412')),_0x256683(_0x267704('0x256')),_0x256683(_0x267704('0x4d9')),_0x256683(_0x267704('0x207')),_0x256683(_0x267704('0x34e')),_0x256683(_0x267704('0x266')),_0x256683(_0x267704('0x608')),_0x256683(_0x267704('0x88a')),_0x256683(_0x267704('0x83a')),_0x256683(_0x267704('0x6d7')),_0x256683(_0x267704('0x238')),_0x256683(_0x267704('0x79e')),_0x256683(_0x267704('0x607')),_0x256683(_0x267704('0x7f8')),_0x256683(_0x267704('0x21b')),_0x256683(_0x267704('0x6a0')),_0x256683(_0x267704('0x1d0')),_0x256683(_0x267704('0x41c')),_0x256683(_0x267704('0x3d6')),_0x256683(_0x267704('0x754')),_0x256683(_0x267704('0x488')),_0x256683(_0x267704('0x5a8')),_0x256683(_0x267704('0x4aa')),_0x256683(_0x267704('0x6aa')),_0x256683(_0x267704('0x703')),_0x256683(_0x267704('0x5ad')),_0x256683(_0x267704('0x704')),_0x256683(_0x267704('0x284')),_0x256683(_0x267704('0x4cf')),_0x256683(_0x267704('0x737')),_0x256683(_0x267704('0x6df')),_0x256683(_0x267704('0x1b1')),_0x256683(_0x267704('0x777')),_0x256683(_0x267704('0x86c')),_0x256683(_0x267704('0x263')),_0x256683(_0x267704('0x5a1')),_0x256683(_0x267704('0x1b0')),_0x256683(_0x267704('0x305')),_0x256683(_0x267704('0x3e4')),_0x256683(_0x267704('0x709')),_0x256683(_0x267704('0x750')),_0x256683(_0x267704('0x36d')),_0x256683(_0x267704('0x2f9')),_0x256683(_0x267704('0x3e8')),_0x256683(_0x267704('0x5ae')),_0x256683(_0x267704('0x3b5')),_0x256683(_0x267704('0x5bf')),_0x256683(_0x267704('0x6d6')),_0x256683(_0x267704('0x6fb')),_0x256683(_0x267704('0x6be')),_0x256683(_0x267704('0x684')),_0x256683(_0x267704('0x7ca')),_0x256683(_0x267704('0x4c6')),_0x256683(_0x267704('0x5d2')),_0x256683(_0x267704('0x39e')),_0x256683(_0x267704('0x5b3')),_0x256683(_0x267704('0x36f')),_0x256683(_0x267704('0x25f')),_0x256683(_0x267704('0x79a')),_0x256683(_0x267704('0x4b4')),_0x256683(_0x267704('0x27f')),_0x256683(_0x267704('0x5a2')),_0x256683(_0x267704('0x1be')),_0x256683(_0x267704('0x4e0')),_0x256683(_0x267704('0x47a')),_0x256683(_0x267704('0x2a3')),_0x256683(_0x267704('0x36c')),_0x256683(_0x267704('0x3dd')),_0x256683(_0x267704('0x7e4')),_0x256683(_0x267704('0x87f')),_0x256683(_0x267704('0x3b7')),_0x256683(_0x267704('0x3f9')),_0x256683(_0x267704('0x600')),_0x256683(_0x267704('0x628')),_0x256683(_0x267704('0x4bf')),_0x256683(_0x267704('0x7e8')),_0x256683(_0x267704('0x308')),_0x256683(_0x267704('0x27d')),_0x256683(_0x267704('0x1e9')),_0x256683(_0x267704('0x33c')),_0x256683(_0x267704('0x315')),_0x256683(_0x267704('0x41d')),_0x256683(_0x267704('0x4d8')),_0x256683(_0x267704('0x1fc')),_0x256683(_0x267704('0x534')),_0x256683(_0x267704('0x81b')),_0x256683(_0x267704('0x7c7')),_0x256683(_0x267704('0x641')),_0x256683(_0x267704('0x3e2')),_0x256683(_0x267704('0x350')),_0x256683(_0x267704('0x4b9')),_0x256683(_0x267704('0x181')),_0x256683(_0x267704('0x496')),_0x256683(_0x267704('0x26f')),_0x256683(_0x267704('0x873')),_0x256683(_0x267704('0x261')),_0x256683(_0x267704('0x3f5')),_0x256683(_0x267704('0x4bd')),_0x256683(_0x267704('0x714')),_0x256683(_0x267704('0x6c3')),_0x256683(_0x267704('0x35c')),_0x256683(_0x267704('0x211')),_0x256683(_0x267704('0x3c1')),_0x256683(_0x267704('0x585')),_0x256683(_0x267704('0x54c')),_0x256683(_0x267704('0x554')),_0x256683(_0x267704('0x6f2')),_0x256683(_0x267704('0x7f1')),_0x256683(_0x267704('0x53b')),_0x256683(_0x267704('0x2ac')),_0x256683(_0x267704('0x379')),_0x256683(_0x267704('0x295')),_0x256683(_0x267704('0x80f')),_0x256683(_0x267704('0x39f')),_0x256683(_0x267704('0x374')),_0x256683(_0x267704('0x1cf')),_0x256683(_0x267704('0x868')),_0x256683(_0x267704('0x28d')),_0x256683(_0x267704('0x662')),_0x256683(_0x267704('0x80c')),_0x256683(_0x267704('0x3c9')),_0x256683(_0x267704('0x84a')),_0x256683(_0x267704('0x2fe')),_0x256683(_0x267704('0x435')),_0x256683(_0x267704('0x4d2')),_0x256683(_0x267704('0x2cc')),_0x256683(_0x267704('0x46e')),_0x256683(_0x267704('0x63a')),_0x256683(_0x267704('0x395')),_0x256683(_0x267704('0x474')),_0x256683(_0x267704('0x758')),_0x256683(_0x267704('0x687')),_0x256683(_0x267704('0x1b4')),_0x256683(_0x267704('0x4ac')),_0x256683(_0x267704('0x472')),_0x256683(_0x267704('0x351')),_0x256683(_0x267704('0x49f')),_0x256683(_0x267704('0x74a')),_0x256683(_0x267704('0x65e')),_0x256683(_0x267704('0x5db')),_0x256683(_0x267704('0x245')),_0x256683(_0x267704('0x298')),_0x256683(_0x267704('0x7ce')),_0x256683(_0x267704('0x1c8')),_0x256683(_0x267704('0x357')),_0x256683(_0x267704('0x705')),_0x256683(_0x267704('0x7c8')),_0x256683(_0x267704('0x3cf')),_0x256683(_0x267704('0x15c')),_0x256683(_0x267704('0x6f1')),_0x256683(_0x267704('0x28c')),_0x256683(_0x267704('0x682')),_0x256683(_0x267704('0x7be')),_0x256683(_0x267704('0x50e')),_0x256683(_0x267704('0x1f7')),_0x256683(_0x267704('0x65b')),_0x256683(_0x267704('0x362')),_0x256683(_0x267704('0x605')),_0x256683(_0x267704('0x191')),_0x256683(_0x267704('0x331')),_0x256683(_0x267704('0x7b1')),_0x256683(_0x267704('0x697')),_0x256683(_0x267704('0x40b')),_0x256683(_0x267704('0x4fa')),_0x256683(_0x267704('0x22d')),_0x256683(_0x267704('0x855')),_0x256683(_0x267704('0x44f')),_0x256683(_0x267704('0x518')),_0x256683(_0x267704('0x19a')),_0x256683(_0x267704('0x6c4')),_0x256683(_0x267704('0x28f')),_0x256683(_0x267704('0x31c')),_0x256683(_0x267704('0x8bc')),_0x256683(_0x267704('0x1ca')),_0x256683(_0x267704('0x3c8')),_0x256683(_0x267704('0x173')),_0x256683(_0x267704('0x278')),_0x256683(_0x267704('0x57a')),_0x256683(_0x267704('0x28e')),_0x256683(_0x267704('0x40f')),_0x256683(_0x267704('0x184')),_0x256683(_0x267704('0x858')),_0x256683(_0x267704('0x821')),_0x256683(_0x267704('0x89b')),_0x256683(_0x267704('0x8bb')),_0x256683(_0x267704('0x2eb')),_0x256683(_0x267704('0x753')),_0x256683(_0x267704('0x717')),_0x256683(_0x267704('0x410')),_0x256683(_0x267704('0x2d6')),_0x256683(_0x267704('0x652')),_0x256683(_0x267704('0x766')),_0x256683(_0x267704('0x693')),_0x256683(_0x267704('0x5b1')),_0x256683(_0x267704('0x7ec')),_0x256683(_0x267704('0x8a9')),_0x256683(_0x267704('0x38b')),_0x256683(_0x267704('0x38e')),_0x256683(_0x267704('0x702')),_0x256683(_0x267704('0x61d')),_0x256683(_0x267704('0x5dd')),_0x256683(_0x267704('0x839')),_0x256683(_0x267704('0x86d')),_0x256683(_0x267704('0x344')),_0x256683(_0x267704('0x2ba')),_0x256683(_0x267704('0x669')),_0x256683(_0x267704('0x2fa')),_0x256683(_0x267704('0x60d')),_0x256683(_0x267704('0x2c4')),_0x256683(_0x267704('0x465')),_0x256683(_0x267704('0x847')),_0x256683(_0x267704('0x6ca')),_0x256683(_0x267704('0x8ac')),_0x256683(_0x267704('0x4ca')),_0x256683(_0x267704('0x18d')),_0x256683(_0x267704('0x419')),_0x256683(_0x267704('0x269')),_0x256683(_0x267704('0x824')),_0x256683(_0x267704('0x24a')),_0x256683(_0x267704('0x665')),_0x256683(_0x267704('0x7bd')),_0x256683(_0x267704('0x72f')),_0x256683(_0x267704('0x2f8')),_0x256683(_0x267704('0x161')),_0x256683(_0x267704('0x71e')),_0x256683(_0x267704('0x87b')),_0x256683(_0x267704('0x8b7')),_0x256683(_0x267704('0x832')),_0x256683(_0x267704('0x29e')),_0x256683(_0x267704('0x580')),_0x256683(_0x267704('0x606')),_0x256683(_0x267704('0x5d8')),_0x256683(_0x267704('0x632')),_0x256683(_0x267704('0x695')),_0x256683(_0x267704('0x7cd')),_0x256683(_0x267704('0x60e')),_0x256683(_0x267704('0x2bb')),_0x256683(_0x267704('0x5a7')),_0x256683(_0x267704('0x7cc')),_0x256683(_0x267704('0x8a7')),_0x256683(_0x267704('0x322')),_0x256683(_0x267704('0x4cd')),_0x256683(_0x267704('0x391')),_0x256683(_0x267704('0x2d4')),_0x256683(_0x267704('0x2da')),_0x256683(_0x267704('0x489')),_0x256683(_0x267704('0x39c')),_0x256683(_0x267704('0x82a')),_0x256683(_0x267704('0x7a7')),_0x256683(_0x267704('0x5d4')),_0x256683(_0x267704('0x6e4')),_0x256683(_0x267704('0x5cf')),_0x256683(_0x267704('0x168')),_0x256683(_0x267704('0x88d')),_0x256683(_0x267704('0x3b9')),_0x256683(_0x267704('0x497')),_0x256683(_0x267704('0x49a')),_0x256683(_0x267704('0x287')),_0x256683(_0x267704('0x392')),_0x256683(_0x267704('0x160')),_0x256683(_0x267704('0x2ad')),_0x256683(_0x267704('0x2e4')),_0x256683(_0x267704('0x5ea')),_0x256683(_0x267704('0x4b7')),_0x256683(_0x267704('0x4a4')),_0x256683(_0x267704('0x377')),_0x256683(_0x267704('0x744')),_0x256683(_0x267704('0x6fe')),_0x256683(_0x267704('0x808')),_0x256683(_0x267704('0x674')),_0x256683(_0x267704('0x4f5')),_0x256683(_0x267704('0x2ab')),_0x256683(_0x267704('0x2a7')),_0x256683(_0x267704('0x413')),_0x256683(_0x267704('0x69b')),_0x256683(_0x267704('0x8b9')),_0x256683(_0x267704('0x408')),_0x256683(_0x267704('0x1e3')),_0x256683(_0x267704('0x1a4')),_0x256683(_0x267704('0x3af')),_0x256683(_0x267704('0x3ab')),_0x256683(_0x267704('0x74e')),_0x256683(_0x267704('0x4ff')),_0x256683(_0x267704('0x3f8')),_0x256683(_0x267704('0x363')),_0x256683(_0x267704('0x7d8')),_0x256683(_0x267704('0x367')),_0x256683(_0x267704('0x206')),_0x256683(_0x267704('0x5a4')),_0x256683(_0x267704('0x432')),_0x256683(_0x267704('0x4f9')),_0x256683(_0x267704('0x7da')),_0x256683(_0x267704('0x5ab')),_0x256683(_0x267704('0x258')),_0x256683(_0x267704('0x37d')),_0x256683(_0x267704('0x44a')),_0x256683(_0x267704('0x6a4')),_0x256683(_0x267704('0x3d3')),_0x256683(_0x267704('0x335')),_0x256683(_0x267704('0x696')),_0x256683(_0x267704('0x317')),_0x256683(_0x267704('0x45f')),_0x256683(_0x267704('0x22a')),_0x256683(_0x267704('0x61e')),_0x256683(_0x267704('0x33b')),_0x256683(_0x267704('0x6eb')),_0x256683(_0x267704('0x2b0')),_0x256683(_0x267704('0x7f7')),_0x256683(_0x267704('0x4a1')),_0x256683(_0x267704('0x6f0')),_0x256683(_0x267704('0x285')),_0x256683(_0x267704('0x265')),_0x256683(_0x267704('0x3fb')),_0x256683(_0x267704('0x53e')),_0x256683(_0x267704('0x3e3')),_0x256683(_0x267704('0x7b3')),_0x256683(_0x267704('0x726')),_0x256683(_0x267704('0x81c')),_0x256683(_0x267704('0x7ad')),_0x256683(_0x267704('0x886')),_0x256683(_0x267704('0x6b1')),_0x256683(_0x267704('0x5d0')),_0x256683(_0x267704('0x1ab')),_0x256683(_0x267704('0x42a')),_0x256683(_0x267704('0x23f')),_0x256683(_0x267704('0x7d6')),_0x256683(_0x267704('0x815')),_0x256683(_0x267704('0x3ce')),_0x256683(_0x267704('0x48a')),_0x256683(_0x267704('0x21e')),_0x256683(_0x267704('0x837')),_0x256683(_0x267704('0x5e6')),_0x256683(_0x267704('0x202')),_0x256683(_0x267704('0x625')),_0x256683(_0x267704('0x2c7')),_0x256683(_0x267704('0x1c7')),_0x256683(_0x267704('0x699')),_0x256683(_0x267704('0x865')),_0x256683(_0x267704('0x47b')),_0x256683(_0x267704('0x720')),_0x256683(_0x267704('0x18c')),_0x256683(_0x267704('0x3b1')),_0x256683(_0x267704('0x890')),_0x256683(_0x267704('0x4d7')),_0x256683(_0x267704('0x645')),_0x256683(_0x267704('0x3b3')),_0x256683(_0x267704('0x743')),_0x256683(_0x267704('0x657')),_0x256683(_0x267704('0x2af')),_0x256683(_0x267704('0x4ae')),_0x256683(_0x267704('0x544')),_0x256683(_0x267704('0x16a')),_0x256683(_0x267704('0x826')),_0x256683(_0x267704('0x7cb')),_0x256683(_0x267704('0x527')),_0x256683(_0x267704('0x2fb')),_0x256683(_0x267704('0x208')),_0x256683(_0x267704('0x3c7')),_0x256683(_0x267704('0x3b2')),_0x256683(_0x267704('0x7d9')),_0x256683(_0x267704('0x5f7')),_0x256683(_0x267704('0x540')),_0x256683(_0x267704('0x3c4')),_0x256683(_0x267704('0x7e2')),_0x256683(_0x267704('0x162')),_0x256683(_0x267704('0x89e')),_0x256683(_0x267704('0x772')),_0x256683(_0x267704('0x421')),_0x256683(_0x267704('0x475')),_0x256683(_0x267704('0x5e1')),_0x256683(_0x267704('0x51d')),_0x256683(_0x267704('0x282')),_0x256683(_0x267704('0x4f7')),_0x256683(_0x267704('0x2e1')),_0x256683(_0x267704('0x5e9')),_0x256683(_0x267704('0x7fb')),_0x256683(_0x267704('0x2ae')),_0x256683(_0x267704('0x84f')),_0x256683(_0x267704('0x79c')),_0x256683(_0x267704('0x784')),_0x256683(_0x267704('0x46a')),_0x256683(_0x267704('0x4f4')),_0x256683(_0x267704('0x834')),_0x256683(_0x267704('0x60f')),_0x256683(_0x267704('0x3c0')),_0x256683(_0x267704('0x56b')),_0x256683(_0x267704('0x4d5')),_0x256683(_0x267704('0x246')),_0x256683(_0x267704('0x789')),_0x256683(_0x267704('0x368')),_0x256683(_0x267704('0x75b')),_0x256683(_0x267704('0x5c2')),_0x256683(_0x267704('0x402')),_0x256683(_0x267704('0x567')),_0x256683(_0x267704('0x61c')),_0x256683(_0x267704('0x54e')),_0x256683(_0x267704('0x4ab')),_0x256683(_0x267704('0x2cd')),_0x256683(_0x267704('0x40d')),_0x256683(_0x267704('0x27e')),_0x256683(_0x267704('0x516')),_0x256683(_0x267704('0x328')),_0x256683(_0x267704('0x4a8')),_0x256683(_0x267704('0x372')),_0x256683(_0x267704('0x4c2')),_0x256683(_0x267704('0x77f')),_0x256683(_0x267704('0x854')),_0x256683(_0x267704('0x3a6')),_0x256683(_0x267704('0x3fc')),_0x256683(_0x267704('0x306')),_0x256683(_0x267704('0x797')),_0x256683(_0x267704('0x59e')),_0x256683(_0x267704('0x67a')),_0x256683(_0x267704('0x530')),_0x256683(_0x267704('0x7e9')),_0x256683(_0x267704('0x77d')),_0x256683(_0x267704('0x3cd')),_0x256683(_0x267704('0x449')),_0x256683(_0x267704('0x3bc')),_0x256683(_0x267704('0x30d')),_0x256683(_0x267704('0x6d9')),_0x256683(_0x267704('0x1db')),_0x256683(_0x267704('0x2ec')),_0x256683(_0x267704('0x560')),_0x256683(_0x267704('0x1d5')),_0x256683(_0x267704('0x7d5')),_0x256683(_0x267704('0x366')),_0x256683(_0x267704('0x572')),_0x256683(_0x267704('0x2f2')),_0x256683(_0x267704('0x793')),_0x256683(_0x267704('0x5a0')),_0x256683(_0x267704('0x5cc')),_0x256683(_0x267704('0x42b')),_0x256683(_0x267704('0x1da')),_0x256683(_0x267704('0x397')),_0x256683(_0x267704('0x7fd')),_0x256683(_0x267704('0x53a')),_0x256683(_0x267704('0x200')),_0x256683(_0x267704('0x7f6')),_0x256683(_0x267704('0x88e')),_0x256683(_0x267704('0x55e')),_0x256683(_0x267704('0x78d')),_0x256683(_0x267704('0x827')),_0x256683(_0x267704('0x473')),_0x256683(_0x267704('0x589')),_0x256683(_0x267704('0x1c3')),_0x256683(_0x267704('0x1d8')),_0x256683(_0x267704('0x86e')),_0x256683(_0x267704('0x680')),_0x256683(_0x267704('0x77c')),_0x256683(_0x267704('0x4b5')),_0x256683(_0x267704('0x289')),_0x256683(_0x267704('0x582')),_0x256683(_0x267704('0x7ee')),_0x256683(_0x267704('0x20d')),_0x256683(_0x267704('0x783')),_0x256683(_0x267704('0x551')),_0x256683(_0x267704('0x1c2')),_0x256683(_0x267704('0x663')),_0x256683(_0x267704('0x307')),_0x256683(_0x267704('0x290')),_0x256683(_0x267704('0x7e3')),_0x256683(_0x267704('0x75d')),_0x256683(_0x267704('0x23b')),_0x256683(_0x267704('0x16d')),_0x256683(_0x267704('0x31f')),_0x256683(_0x267704('0x730')),_0x256683(_0x267704('0x84b')),_0x256683(_0x267704('0x893')),_0x256683(_0x267704('0x6d4')),_0x256683(_0x267704('0x2a0')),_0x256683(_0x267704('0x198')),_0x256683(_0x267704('0x67c')),_0x256683(_0x267704('0x7c6')),_0x256683(_0x267704('0x76c')),_0x256683(_0x267704('0x654')),_0x256683(_0x267704('0x2c2')),_0x256683(_0x267704('0x411')),_0x256683(_0x267704('0x204')),_0x256683(_0x267704('0x64a')),_0x256683(_0x267704('0x32d')),_0x256683(_0x267704('0x2ff')),_0x256683(_0x267704('0x68e')),_0x256683(_0x267704('0x598')),_0x256683(_0x267704('0x37e')),_0x256683(_0x267704('0x49b')),_0x256683(_0x267704('0x871')),_0x256683(_0x267704('0x230')),_0x256683(_0x267704('0x47f')),_0x256683(_0x267704('0x5cb')),_0x256683(_0x267704('0x796')),_0x256683(_0x267704('0x7e0')),_0x256683(_0x267704('0x46c')),_0x256683(_0x267704('0x7d0')),_0x256683(_0x267704('0x4d3')),_0x256683(_0x267704('0x58d')),_0x256683(_0x267704('0x678')),_0x256683(_0x267704('0x1a3')),_0x256683(_0x267704('0x736')),_0x256683(_0x267704('0x740')),_0x256683(_0x267704('0x646')),_0x256683(_0x267704('0x748')),_0x256683(_0x267704('0x75f')),_0x256683(_0x267704('0x3a1')),_0x256683(_0x267704('0x804')),_0x256683(_0x267704('0x434')),_0x256683(_0x267704('0x1bd')),_0x256683(_0x267704('0x782')),_0x256683(_0x267704('0x561')),_0x256683(_0x267704('0x63d')),_0x256683(_0x267704('0x3eb')),_0x256683(_0x267704('0x52c')),_0x256683(_0x267704('0x809')),_0x256683(_0x267704('0x224')),_0x256683(_0x267704('0x642')),_0x256683(_0x267704('0x614')),_0x256683(_0x267704('0x444')),_0x256683(_0x267704('0x5ac')),_0x256683(_0x267704('0x4f6')),_0x256683(_0x267704('0x2aa')),_0x256683(_0x267704('0x610')),_0x256683(_0x267704('0x872')),_0x256683(_0x267704('0x339')),_0x256683(_0x267704('0x89a')),_0x256683(_0x267704('0x17a')),_0x256683(_0x267704('0x4a5')),_0x256683(_0x267704('0x525')),_0x256683(_0x267704('0x88b')),_0x256683(_0x267704('0x778')),_0x256683(_0x267704('0x25d')),_0x256683(_0x267704('0x761')),_0x256683(_0x267704('0x7f4')),_0x256683(_0x267704('0x177')),_0x256683(_0x267704('0x195')),_0x256683(_0x267704('0x3b0')),_0x256683(_0x267704('0x7ea')),_0x256683(_0x267704('0x1a9')),_0x256683(_0x267704('0x708')),_0x256683(_0x267704('0x574')),_0x256683(_0x267704('0x5e4')),_0x256683(_0x267704('0x6bd')),_0x256683(_0x267704('0x23e')),_0x256683(_0x267704('0x64b')),_0x256683(_0x267704('0x570')),_0x256683(_0x267704('0x80a')),_0x256683(_0x267704('0x190')),_0x256683(_0x267704('0x303')),_0x256683(_0x267704('0x85f')),_0x256683(_0x267704('0x70e')),_0x256683(_0x267704('0x42e')),_0x256683(_0x267704('0x1d1')),_0x256683(_0x267704('0x24b')),_0x256683(_0x267704('0x84e')),_0x256683(_0x267704('0x3f6')),_0x256683(_0x267704('0x887')),_0x256683(_0x267704('0x87c')),_0x256683(_0x267704('0x615')),_0x256683(_0x267704('0x323')),_0x256683(_0x267704('0x844')),_0x256683(_0x267704('0x707')),_0x256683(_0x267704('0x2f3')),_0x256683(_0x267704('0x375')),_0x256683(_0x267704('0x569')),_0x256683(_0x267704('0x616')),_0x256683(_0x267704('0x54b')),_0x256683(_0x267704('0x3da')),_0x256683(_0x267704('0x174')),_0x256683(_0x267704('0x5f0')),_0x256683(_0x267704('0x1a6')),_0x256683(_0x267704('0x7c9')),_0x256683(_0x267704('0x644')),_0x256683(_0x267704('0x156')),_0x256683(_0x267704('0x5d3')),_0x256683(_0x267704('0x424')),_0x256683(_0x267704('0x830')),_0x256683(_0x267704('0x3d2')),_0x256683(_0x267704('0x660')),_0x256683(_0x267704('0x219')),_0x256683(_0x267704('0x466')),_0x256683(_0x267704('0x81f')),_0x256683(_0x267704('0x741')),_0x256683(_0x267704('0x65d')),_0x256683(_0x267704('0x759')),_0x256683(_0x267704('0x760')),_0x256683(_0x267704('0x3e6')),_0x256683(_0x267704('0x4a7')),_0x256683(_0x267704('0x6da')),_0x256683(_0x267704('0x8af')),_0x256683(_0x267704('0x276')),_0x256683(_0x267704('0x259')),_0x256683(_0x267704('0x3dc')),_0x256683(_0x267704('0x325')),_0x256683(_0x267704('0x25e')),_0x256683(_0x267704('0x5fe')),_0x256683(_0x267704('0x234')),_0x256683(_0x267704('0x3f4')),_0x256683(_0x267704('0x5a5')),_0x256683(_0x267704('0x869')),_0x256683(_0x267704('0x74b')),_0x256683(_0x267704('0x734')),_0x256683(_0x267704('0x44c')),_0x256683(_0x267704('0x50b')),_0x256683(_0x267704('0x45a')),_0x256683(_0x267704('0x524')),_0x256683(_0x267704('0x6d1')),_0x256683(_0x267704('0x21d')),_0x256683(_0x267704('0x385')),_0x256683(_0x267704('0x51b')),_0x256683(_0x267704('0x4f3')),_0x256683(_0x267704('0x38d')),_0x256683(_0x267704('0x471')),_0x256683(_0x267704('0x166')),_0x256683(_0x267704('0x380')),_0x256683(_0x267704('0x6e1')),_0x256683(_0x267704('0x80e')),_0x256683(_0x267704('0x7dc')),_0x256683(_0x267704('0x25c')),_0x256683(_0x267704('0x6a2')),_0x256683(_0x267704('0x1f3')),_0x256683(_0x267704('0x866')),_0x256683(_0x267704('0x5c3')),_0x256683(_0x267704('0x787')),_0x256683(_0x267704('0x25a')),_0x256683(_0x267704('0x719')),_0x256683(_0x267704('0x32b')),_0x256683(_0x267704('0x621')),_0x256683(_0x267704('0x820')),_0x256683(_0x267704('0x676')),_0x256683(_0x267704('0x843')),_0x256683(_0x267704('0x341')),_0x256683(_0x267704('0x301')),_0x256683(_0x267704('0x17b')),_0x256683(_0x267704('0x78b')),_0x256683(_0x267704('0x599')),_0x256683(_0x267704('0x2f1')),_0x256683(_0x267704('0x5ec')),_0x256683(_0x267704('0x1bb')),_0x256683(_0x267704('0x59d')),_0x256683(_0x267704('0x68c')),_0x256683(_0x267704('0x519')),_0x256683(_0x267704('0x288')),_0x256683(_0x267704('0x270')),_0x256683(_0x267704('0x785')),_0x256683(_0x267704('0x7c2')),_0x256683(_0x267704('0x257')),_0x256683(_0x267704('0x864')),_0x256683(_0x267704('0x7e1')),_0x256683(_0x267704('0x5e8')),_0x256683(_0x267704('0x53d')),_0x256683(_0x267704('0x3cc')),_0x256683(_0x267704('0x8ba')),_0x256683(_0x267704('0x253')),_0x256683(_0x267704('0x35a')),_0x256683(_0x267704('0x170')),_0x256683(_0x267704('0x264')),_0x256683(_0x267704('0x165')),_0x256683(_0x267704('0x77b')),_0x256683(_0x267704('0x653')),_0x256683(_0x267704('0x59c')),_0x256683(_0x267704('0x460')),_0x256683(_0x267704('0x60c')),_0x256683(_0x267704('0x23c')),_0x256683(_0x267704('0x68a')),_0x256683(_0x267704('0x216')),_0x256683(_0x267704('0x22e')),_0x256683(_0x267704('0x194')),_0x256683(_0x267704('0x48d')),_0x256683(_0x267704('0x438')),_0x256683(_0x267704('0x442')),_0x256683(_0x267704('0x5da')),_0x256683(_0x267704('0x713')),_0x256683(_0x267704('0x38a')),_0x256683(_0x267704('0x355')),_0x256683(_0x267704('0x4be')),_0x256683(_0x267704('0x34a')),_0x256683(_0x267704('0x291')),_0x256683(_0x267704('0x4ea')),_0x256683(_0x267704('0x5bd')),_0x256683(_0x267704('0x522')),_0x256683(_0x267704('0x6a3')),_0x256683(_0x267704('0x361')),_0x256683(_0x267704('0x49c')),_0x256683(_0x267704('0x387')),_0x256683(_0x267704('0x629')),_0x256683(_0x267704('0x35f')),_0x256683(_0x267704('0x490')),_0x256683(_0x267704('0x3a0')),_0x256683(_0x267704('0x532')),_0x256683(_0x267704('0x24f')),_0x256683(_0x267704('0x304')),_0x256683(_0x267704('0x769')),_0x256683(_0x267704('0x384')),_0x256683(_0x267704('0x4a2')),_0x256683(_0x267704('0x4f8')),_0x256683(_0x267704('0x5d1')),_0x256683(_0x267704('0x83e')),_0x256683(_0x267704('0x4d6')),_0x256683(_0x267704('0x701')),_0x256683(_0x267704('0x686')),_0x256683(_0x267704('0x8b2')),_0x256683(_0x267704('0x1a5')),_0x256683(_0x267704('0x742')),_0x256683(_0x267704('0x7fa')),_0x256683(_0x267704('0x309')),_0x256683(_0x267704('0x71b')),_0x256683(_0x267704('0x85c')),_0x256683(_0x267704('0x725')),_0x256683(_0x267704('0x671')),_0x256683(_0x267704('0x4f0')),_0x256683(_0x267704('0x2e0')),_0x256683(_0x267704('0x405')),_0x256683(_0x267704('0x4ce')),_0x256683(_0x267704('0x512')),_0x256683(_0x267704('0x1de')),_0x256683(_0x267704('0x543')),_0x256683(_0x267704('0x722')),_0x256683(_0x267704('0x243')),_0x256683(_0x267704('0x833')),_0x256683(_0x267704('0x774')),_0x256683(_0x267704('0x2fc')),_0x256683(_0x267704('0x857')),_0x256683(_0x267704('0x1b9')),_0x256683(_0x267704('0x86a')),_0x256683(_0x267704('0x7f5')),_0x256683(_0x267704('0x7b5')),_0x256683(_0x267704('0x482')),_0x256683(_0x267704('0x229')),_0x256683(_0x267704('0x4da')),_0x256683(_0x267704('0x4e3')),_0x256683(_0x267704('0x35e')),_0x256683(_0x267704('0x817')),_0x256683(_0x267704('0x52b')),_0x256683(_0x267704('0x85d')),_0x256683(_0x267704('0x2bd')),_0x256683(_0x267704('0x688')),_0x256683(_0x267704('0x20c')),_0x256683(_0x267704('0x448')),_0x256683(_0x267704('0x2e8')),_0x256683(_0x267704('0x883')),_0x256683(_0x267704('0x894')),_0x256683(_0x267704('0x2f5')),_0x256683(_0x267704('0x378')),_0x256683(_0x267704('0x3d7')),_0x256683(_0x267704('0x853')),_0x256683(_0x267704('0x20e')),_0x256683(_0x267704('0x58a')),_0x256683(_0x267704('0x2dd')),_0x256683(_0x267704('0x292')),_0x256683(_0x267704('0x4dd')),_0x256683(_0x267704('0x6b6')),_0x256683(_0x267704('0x62c')),_0x256683(_0x267704('0x7ac')),_0x256683(_0x267704('0x57b')),_0x256683(_0x267704('0x8aa')),_0x256683(_0x267704('0x4d1')),_0x256683(_0x267704('0x358')),_0x256683(_0x267704('0x655')),_0x256683(_0x267704('0x8bd')),_0x256683(_0x267704('0x5f8')),_0x256683(_0x267704('0x314')),_0x256683(_0x267704('0x485')),_0x256683(_0x267704('0x34f')),_0x256683(_0x267704('0x635')),_0x256683(_0x267704('0x55c')),_0x256683(_0x267704('0x1a0')),_0x256683(_0x267704('0x835')),_0x256683(_0x267704('0x613')),_0x256683(_0x267704('0x67b')),_0x256683(_0x267704('0x55b')),_0x256683(_0x267704('0x715')),_0x256683(_0x267704('0x659')),_0x256683(_0x267704('0x555')),_0x256683(_0x267704('0x6e0')),_0x256683(_0x267704('0x53f')),_0x256683(_0x267704('0x679')),_0x256683(_0x267704('0x4a6')),_0x256683(_0x267704('0x811')),_0x256683(_0x267704('0x72e')),_0x256683(_0x267704('0x771')),_0x256683(_0x267704('0x3e9')),_0x256683(_0x267704('0x3b4')),_0x256683(_0x267704('0x502')),_0x256683(_0x267704('0x58b')),_0x256683(_0x267704('0x575')),_0x256683(_0x267704('0x4de')),_0x256683(_0x267704('0x5b5')),_0x256683(_0x267704('0x18f')),_0x256683(_0x267704('0x604')),_0x256683(_0x267704('0x66a')),_0x256683(_0x267704('0x6e8')),_0x256683(_0x267704('0x578')),_0x256683(_0x267704('0x791')),_0x256683(_0x267704('0x1b5')),_0x256683(_0x267704('0x498')),_0x256683(_0x267704('0x68d')),_0x256683(_0x267704('0x781')),_0x256683(_0x267704('0x481')),_0x256683(_0x267704('0x72c')),_0x256683(_0x267704('0x541')),_0x256683(_0x267704('0x26b')),_0x256683(_0x267704('0x65f')),_0x256683(_0x267704('0x881')),_0x256683(_0x267704('0x823')),_0x256683(_0x267704('0x64f')),_0x256683(_0x267704('0x1e4')),_0x256683(_0x267704('0x242')),_0x256683(_0x267704('0x45c')),_0x256683(_0x267704('0x3f1')),_0x256683(_0x267704('0x623')),_0x256683(_0x267704('0x535')),_0x256683(_0x267704('0x6d5')),_0x256683(_0x267704('0x38f')),_0x256683(_0x267704('0x43b')),_0x256683(_0x267704('0x1ed')),_0x256683(_0x267704('0x82f')),_0x256683(_0x267704('0x347')),_0x256683(_0x267704('0x45d')),_0x256683(_0x267704('0x32f')),_0x256683(_0x267704('0x192')),_0x256683(_0x267704('0x477')),_0x256683(_0x267704('0x638')),_0x256683(_0x267704('0x487')),_0x256683(_0x267704('0x88c')),_0x256683(_0x267704('0x283')),_0x256683(_0x267704('0x86b')),_0x256683(_0x267704('0x183')),_0x256683(_0x267704('0x231')),_0x256683(_0x267704('0x53c')),_0x256683(_0x267704('0x57c')),_0x256683(_0x267704('0x29a')),_0x256683(_0x267704('0x7aa')),_0x256683(_0x267704('0x591')),_0x256683(_0x267704('0x369')),_0x256683(_0x267704('0x5b7')),_0x256683(_0x267704('0x447')),_0x256683(_0x267704('0x3ee')),_0x256683(_0x267704('0x2a9')),_0x256683(_0x267704('0x36e')),_0x256683(_0x267704('0x495')),_0x256683(_0x267704('0x1dd')),_0x256683(_0x267704('0x196')),_0x256683(_0x267704('0x52f')),_0x256683(_0x267704('0x6ae')),_0x256683(_0x267704('0x3d1')),_0x256683(_0x267704('0x728')),_0x256683(_0x267704('0x700')),_0x256683(_0x267704('0x76e')),_0x256683(_0x267704('0x74f')),_0x256683(_0x267704('0x3cb')),_0x256683(_0x267704('0x7a9')),_0x256683(_0x267704('0x62f')),_0x256683(_0x267704('0x214')),_0x256683(_0x267704('0x587')),_0x256683(_0x267704('0x6c1')),_0x256683(_0x267704('0x716')),_0x256683(_0x267704('0x5b9')),_0x256683(_0x267704('0x340')),_0x256683(_0x267704('0x1d7')),_0x256683(_0x267704('0x415')),_0x256683(_0x267704('0x445')),_0x256683(_0x267704('0x4e1')),_0x256683(_0x267704('0x5e3')),_0x256683(_0x267704('0x721')),_0x256683(_0x267704('0x8a0')),_0x256683(_0x267704('0x4af')),_0x256683(_0x267704('0x18e')),_0x256683(_0x267704('0x483')),_0x256683(_0x267704('0x2f0')),_0x256683(_0x267704('0x56c')),_0x256683(_0x267704('0x658')),_0x256683(_0x267704('0x252')),_0x256683(_0x267704('0x1e6')),_0x256683(_0x267704('0x6cf')),_0x256683(_0x267704('0x20a')),_0x256683(_0x267704('0x46d')),_0x256683(_0x267704('0x3ef')),_0x256683(_0x267704('0x213')),_0x256683(_0x267704('0x1cd')),_0x256683(_0x267704('0x859')),_0x256683(_0x267704('0x692')),_0x256683(_0x267704('0x735')),_0x256683(_0x267704('0x5af')),_0x256683(_0x267704('0x163')),_0x256683(_0x267704('0x8ab')),_0x256683(_0x267704('0x6cc')),_0x256683(_0x267704('0x5b0')),_0x256683(_0x267704('0x882')),_0x256683(_0x267704('0x2b4')),_0x256683(_0x267704('0x40a')),_0x256683(_0x267704('0x47d')),_0x256683(_0x267704('0x73d')),_0x256683(_0x267704('0x63b')),_0x256683(_0x267704('0x423')),_0x256683(_0x267704('0x5ef')),_0x256683(_0x267704('0x35b')),_0x256683(_0x267704('0x327')),_0x256683(_0x267704('0x876')),_0x256683(_0x267704('0x6c9')),_0x256683(_0x267704('0x212')),_0x256683(_0x267704('0x888')),_0x256683(_0x267704('0x5fc')),_0x256683(_0x267704('0x50f')),_0x256683(_0x267704('0x388')),_0x256683(_0x267704('0x1ce')),_0x256683(_0x267704('0x64c')),_0x256683(_0x267704('0x562')),_0x256683(_0x267704('0x330'))];return _0x2616=function(){return _0x545bee;},_0x2616();}for(let i of ow){contri1[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))]({'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x52a'))))+NamaBot,'vcard':vcard},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x52a'))))+NamaBot,'vcard':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4f5'))))},{'displayName':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x288')))),'vcard':vcard});}const support=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6cc'))))+supportme+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x434'))))+numbernye[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x166'))))+ow[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+'*',daftar3=[{'buttonId':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6c9')))),'buttonText':{'displayText':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3d3'))))},'type':0x1}],sendButtonImg=(_0x41b172,_0x46660a,_0x224ea5,_0x2b541b,_0xe1b3e1=[],_0x486d9f={})=>{const _0x5bd961=_0x4235a0,_0x46ba6d=_0xc5f37,_0x5d35d0=_0x399b48,_0x31f700=_0x14dae3,_0x145b2a={'contentText':_0x46660a,'footerText':_0x224ea5,'buttons':_0xe1b3e1,'headerType':0x4,'imageMessage':_0x2b541b[_0x31f700(_0x5d35d0(_0x46ba6d(_0x5bd961('0x2f6'))))][_0x31f700(_0x5d35d0(_0x46ba6d(_0x5bd961('0x318'))))]};client[_0x31f700(_0x5d35d0(_0x46ba6d(_0x5bd961('0x4c6'))))](_0x41b172,_0x145b2a,MessageType[_0x31f700(_0x5d35d0(_0x46ba6d(_0x5bd961('0x4af'))))],_0x486d9f);},sendButtonText=(_0x8ffb72,_0x49efac,_0xa0ec2,_0x182e85=[],_0x1dc638={})=>{const _0x126c1c=_0x4235a0,_0x3ff837=_0xc5f37,_0x4d7915=_0x399b48,_0x5f08e3=_0x14dae3,_0x153e9f={'contentText':_0x49efac,'footerText':_0xa0ec2,'buttons':_0x182e85,'headerType':0x1};client[_0x5f08e3(_0x4d7915(_0x3ff837(_0x126c1c('0x4c6'))))](_0x8ffb72,_0x153e9f,MessageType[_0x5f08e3(_0x4d7915(_0x3ff837(_0x126c1c('0x4af'))))],_0x1dc638);};data=fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75c'))))+themenye+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7b9'))))),jsonData=JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6db'))))](data),randIndex=Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*jsonData[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]),randKey=jsonData[randIndex],wipiaa=await getBuffer(randKey[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x174'))))]),mediaimgen=await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ae'))))](from,wipiaa,MessageType[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x726'))))],{'thumbnail':wipiaa});let buttonloc2=mediaimgen[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]?mediaimgen[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]:mediaimgen;const buttonshello=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x543')))),buttonsmenu2=[{'buttonId':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x640')))),'buttonText':{'displayText':''+fakereply},'type':0x1}],buttonsmenuonoff=[{'buttonId':command+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6f6')))),'buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':command+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x551')))),'buttonText':{'displayText':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x390'))))},'type':0x1}],sendButtonImageLoc=(_0x1f0511,_0x3b291b,_0x1f7921,_0x64c73e=[],_0xe0f15={})=>{const _0x1e1603=_0x4235a0,_0x19a5f8=_0xc5f37,_0x57ed4a=_0x399b48,_0x261b3e=_0x14dae3,_0x3fcb9={'contentText':_0x3b291b,'footerText':_0x1f7921,'buttons':_0x64c73e,'headerType':0x6,'locationMessage':buttonloc2[_0x261b3e(_0x57ed4a(_0x19a5f8(_0x1e1603('0x2f6'))))][_0x261b3e(_0x57ed4a(_0x19a5f8(_0x1e1603('0x36f'))))]};client[_0x261b3e(_0x57ed4a(_0x19a5f8(_0x1e1603('0x4c6'))))](_0x1f0511,_0x3fcb9,MessageType[_0x261b3e(_0x57ed4a(_0x19a5f8(_0x1e1603('0x4af'))))],_0xe0f15);},mediaimgenrpg=await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ae'))))](from,WMthumb,MessageType[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x726'))))],{'thumbnail':WMthumb});let buttonlocrpg=mediaimgenrpg[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]?mediaimgenrpg[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]:mediaimgenrpg;const sendButtonRPGLoc=(_0x20ed85,_0x4acd10,_0x443cb7,_0x765e6=[],_0x3a14f2={})=>{const _0x130b89=_0x4235a0,_0x4c8c79=_0xc5f37,_0xc5191d=_0x399b48,_0x2ee6aa=_0x14dae3,_0x1aee3b={'contentText':_0x4acd10,'footerText':_0x443cb7,'buttons':_0x765e6,'headerType':0x6,'locationMessage':buttonlocrpg[_0x2ee6aa(_0xc5191d(_0x4c8c79(_0x130b89('0x2f6'))))][_0x2ee6aa(_0xc5191d(_0x4c8c79(_0x130b89('0x36f'))))]};client[_0x2ee6aa(_0xc5191d(_0x4c8c79(_0x130b89('0x4c6'))))](_0x20ed85,_0x1aee3b,MessageType[_0x2ee6aa(_0xc5191d(_0x4c8c79(_0x130b89('0x4af'))))],_0x3a14f2);},docunye=[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x848')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x843')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x15c')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7ec'))))];docuney=docunye[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*docunye[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])];const Sendbutdocument=(_0x2dc6aa,_0xe8e1a9,_0x4d0884,_0x2b0cff=[],_0x406d96={})=>{const _0x4c98db=_0x4235a0,_0x415587=_0xc5f37,_0xbbec0d=_0x399b48,_0x57e2e5=_0x14dae3,_0x1c56b4={'documentMessage':{'url':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x685')))),'mimetype':docuney,'fileSha256':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x39d')))),'fileLength':0xe8d4a50fff,'pageCount':0x270f,'mediaKey':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x406')))),'fileName':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x761'))))+kyun(process[_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x361'))))]()),'fileEncSha256':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x2f8')))),'directPath':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x76b')))),'mediaKeyTimestamp':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x313')))),'jpegThumbnail':wipiaa},'contentText':_0xe8e1a9,'footerText':_0x4d0884,'buttons':_0x2b0cff,'headerType':_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x205'))))};client[_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x4c6'))))](_0x2dc6aa,_0x1c56b4,MessageType[_0x57e2e5(_0xbbec0d(_0x415587(_0x4c98db('0x4af'))))],_0x406d96,{'quoted':ftoko,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'sendEphemeral':!![]},'sendEphemeral':!![]});};daftarnye=registerimage[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*registerimage[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],buffer=await getBuffer(daftarnye),daftarnos=await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ae'))))](from,buffer,MessageType[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x726'))))],{'thumbnail':buffer});let daftarnoss=daftarnos[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]?daftarnos[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f7'))))]:daftarnos;const sendCatalogMenu=(_0x58ba18,_0x66792e)=>{const _0x425c97=_0x4235a0,_0x58e124=_0xc5f37,_0x27a21c=_0x399b48,_0x2898f5=_0x14dae3;res=client[_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x5b7'))))](from,{'productMessage':{'product':{'productImage':_0x66792e,'productId':_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x175')))),'title':''+hahh,'description':_0x58ba18,'footerText':NamaBot,'currencyCode':_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x6f3')))),'priceAmount1000':_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x28f')))),'productImageCount':0x1,'salePriceAmount1000':_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x8ad'))))},'businessOwnerJid':ow,'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,ow,dev]}}),client[_0x2898f5(_0x27a21c(_0x58e124(_0x425c97('0x591'))))](res);},sendButtonNotRegis=_0x1a4aa6=>{const _0x42d0c8=_0x4235a0,_0x1de044=_0xc5f37,_0x546363=_0x399b48,_0xc60e3=_0x14dae3;if(autoregis=!![])addRegisteredUser(sender),setTimeout(()=>{const _0x318656=_0x4bc5,_0x90fa74=_0x23c5,_0x157472=_0x29ae,_0x5ec562=_0x3740,_0x3a81fa=[{'buttonId':_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x8aa')))),'buttonText':{'displayText':_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x225'))))},'type':0x1},{'buttonId':_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x640')))),'buttonText':{'displayText':_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x189'))))},'type':0x1}],_0x5b081f={'contentText':_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x1de'))))+prefix+_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x156')))),'footerText':support,'buttons':_0x3a81fa,'headerType':0x6,'locationMessage':daftarnoss[_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x2f6'))))][_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x36f'))))]};client[_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x4c6'))))](from,_0x5b081f,MessageType[_0x5ec562(_0x157472(_0x90fa74(_0x318656('0x4af'))))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,dev,ow]}});},0x1388),replysticker(waitstc),regisinfo===!![]&&setTimeout(()=>{const _0x9f8ca9=_0x4bc5,_0x5bfda4=_0x23c5,_0x3d2d03=_0x29ae,_0x410b97=_0x3740;client[_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x4c6'))))](ow,_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x596'))))+player[_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x3e6'))))]('@')[0x0],text,{'quoted':{'key':{'fromMe':![],'participant':_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x50c')))),'remoteJid':_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x347'))))},'message':{'orderMessage':{'itemCount':''+_registered[_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x2b1'))))],'status':0xc8,'thumbnail':buffer,'surface':0xc8,'message':_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x761'))))+kyun(process[_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x361'))))]()),'orderTitle':'L','sellerJid':_0x410b97(_0x3d2d03(_0x5bfda4(_0x9f8ca9('0x50c'))))}}},'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player]}});},0x7d0),autobackup===!![]&&setTimeout(()=>{const _0x13d681=_0x4bc5,_0x6e3753=_0x23c5,_0x2a4848=_0x29ae,_0x5e2230=_0x3740;client[_0x5e2230(_0x2a4848(_0x6e3753(_0x13d681('0x4c6'))))](ow,fs[_0x5e2230(_0x2a4848(_0x6e3753(_0x13d681('0x2da'))))](_0x5e2230(_0x2a4848(_0x6e3753(_0x13d681('0x297'))))),document,{'mimetype':_0x5e2230(_0x2a4848(_0x6e3753(_0x13d681('0x77b')))),'filename':_0x5e2230(_0x2a4848(_0x6e3753(_0x13d681('0x77f'))))});},0xbb8),console[_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x852'))))](color(_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x874'))))),color(_registered[_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x2b1'))))],_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x5cf'))))),_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x7c1')))),color(sender,_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x60c'))))));else{if(autoregis=![]){if(mainmenu==![]){const _0x521cbe=[{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x4a3')))),'description':'','rowId':''}],_0x336f80=[{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x74e')))),'description':'','rowId':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x4d3'))))},{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x23d')))),'description':'','rowId':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x4c0'))))},{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x281')))),'description':'','rowId':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x5f2'))))}],_0x58f696=[{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x4a3')))),'rows':_0x521cbe},{'title':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x6e3')))),'rows':_0x336f80}],_0x1fb403={'buttonText':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x57a')))),'footerText':buttonshello,'description':_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x636'))))+prefix+_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x234')))),'sections':_0x58f696,'listType':0x1};replysticker(daftarstc),setTimeout(()=>{const _0x6bffb1=_0x42d0c8,_0x3bb26e=_0x1de044,_0x51c9d6=_0x546363,_0xb6bdfe=_0xc60e3;client[_0xb6bdfe(_0x51c9d6(_0x3bb26e(_0x6bffb1('0x4c6'))))](_0x1a4aa6,_0x1fb403,MessageType[_0xb6bdfe(_0x51c9d6(_0x3bb26e(_0x6bffb1('0x3ab'))))],{'quoted':mek,'thumbnail':WMthumb,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});},0xbb8);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x636'))))+prefix+_0xc60e3(_0x546363(_0x1de044(_0x42d0c8('0x234')))),daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}},getpc=async function(_0xb0b1f6){const _0x628bd9=_0x4235a0,_0x50f40c=_0xc5f37,_0x44fdc4=_0x399b48,_0x14413f=_0x14dae3;let _0x3cde1e=[],_0x5137b6=[],_0x1276b5=[];for(c of _0xb0b1f6){_0x5137b6[_0x14413f(_0x44fdc4(_0x50f40c(_0x628bd9('0x615'))))](c[_0x14413f(_0x44fdc4(_0x50f40c(_0x628bd9('0x6dd'))))]);}for(d of _0x5137b6){d&&!d[_0x14413f(_0x44fdc4(_0x50f40c(_0x628bd9('0x267'))))](_0x14413f(_0x44fdc4(_0x50f40c(_0x628bd9('0x163')))))&&_0x1276b5[_0x14413f(_0x44fdc4(_0x50f40c(_0x628bd9('0x615'))))](d);}return _0x1276b5;},getGroup=async function(_0x2e339d){const _0x12ff8c=_0x4235a0,_0x2947bf=_0xc5f37,_0x509b09=_0x399b48,_0x5dfd9e=_0x14dae3;let _0x2cd7c7=[],_0x5a3e47=[],_0x256b7a=[];for(c of _0x2e339d){_0x5a3e47[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x615'))))](c[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x6dd'))))]);}for(d of _0x5a3e47){d&&d[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x267'))))](_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x163')))))&&_0x256b7a[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x615'))))](d);}for(e of _0x256b7a){let _0x4f7c14=await client[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x5a7'))))](e);_0x2cd7c7[_0x5dfd9e(_0x509b09(_0x2947bf(_0x12ff8c('0x615'))))](_0x4f7c14);}return _0x2cd7c7;};let ii=[],giid=[];function _0x29ae(_0x412ec7,_0x208375){const _0xdf3265=_0x2616();return _0x29ae=function(_0x12ff89,_0x185927){_0x12ff89=_0x12ff89-0x19a;let _0x599f37=_0xdf3265[_0x12ff89];return _0x599f37;},_0x29ae(_0x412ec7,_0x208375);}for(mem of totalchat){ii[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](mem[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6dd'))))]);}for(id of ii){id&&id[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x163')))))&&giid[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](id);}const timestampi=speed(),latensii=speed()-timestampi,latensiii=latensii[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2cb'))))](0x4)+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x796')))),ini_gcchat=''+giid[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))],uptime=process[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x361'))))](),tekss=''+kyun(uptime),ini_totalchat=''+(totalchat[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]-giid[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x547'))))]);function _0x23c5(_0xbcd010,_0x4578ec){const _0x161b2c=_0xe157();return _0x23c5=function(_0x4bfc68,_0x4650f2){_0x4bfc68=_0x4bfc68-0x1af;let _0x3a80f2=_0x161b2c[_0x4bfc68];return _0x3a80f2;},_0x23c5(_0xbcd010,_0x4578ec);}var chats=await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3cd'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x473'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8b9'))))](_0x453b6f=>_0x453b6f[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6dd'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x341'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x163'))))));chats[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x584'))))](async({jid:_0x508c4f})=>{const _0x8bac3f=_0x4235a0,_0x5f1636=_0xc5f37,_0xc34486=_0x399b48,_0x20a2b0=_0x14dae3;if(readG===![])return;await client[_0x20a2b0(_0xc34486(_0x5f1636(_0x8bac3f('0x202'))))](_0x508c4f);});var chatss=await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3cd'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x473'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8b9'))))](_0xca7144=>_0xca7144[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6dd'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x341'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4d2'))))));chatss[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x584'))))](async({jid:_0x323eea})=>{const _0x1cf43b=_0x4235a0,_0x4ff91e=_0xc5f37,_0x11a039=_0x399b48,_0x43626c=_0x14dae3;if(readP===![])return;await client[_0x43626c(_0x11a039(_0x4ff91e(_0x1cf43b('0x202'))))](_0x323eea);});var prefi=pref;function _0x2aec(){const _0x4e9542=_0x4235a0,_0xdaf0f7=_0xc5f37,_0x218f63=_0x399b48,_0x2e6908=[_0x218f63(_0xdaf0f7(_0x4e9542('0x8bc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x56d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x621'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6c6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x54d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x70c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3f2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x49c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2ad'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x785'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x43c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1bb'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x47b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x49a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x851'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5b4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x82b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5d2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x21f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4d1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x769'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4b9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5e6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x675'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x705'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x823'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x60a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1f5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x54c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x792'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x779'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x88f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7b1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x23b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x354'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x538'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x33e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x359'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4f8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5b9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x572'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5d9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x84b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3c0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2dc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x754'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x686'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1c1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x421'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x678'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x45f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x16c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x72c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5bb'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2f4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x59b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x63f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x410'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7d9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x16d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x253'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3e9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x755'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x664'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x206'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2f7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x760'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7df'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4e2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x222'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4d5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x215'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2c4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x16a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5b1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2fa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6f7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x575'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x698'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x17e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6ec'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x251'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x65d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6cd'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x32d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x607'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x231'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x66b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x653'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x884'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x514'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x315'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x715'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x233'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x556'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x424'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x370'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7ae'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7a6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6b1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x58a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x82a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x8a9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5a5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5ac'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5a3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x89c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x89f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x439'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x780'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4da'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x398'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2a9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x41c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x59e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6e6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x57c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x35d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3e5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x245'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x78d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7d6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x581'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2fd'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x88c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3eb'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x286'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x79e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7f9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5ce'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1dc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x293'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2b5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x27b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x674'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3e2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x701'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7a2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6df'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x531'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1a3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x567'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6b9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x17c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7dd'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x31c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x46c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x835'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x574'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x255'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x47e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x743'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x84e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x695'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x75f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x350'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4d6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x50f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5cc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3e1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2aa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x51f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x203'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x46a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x703'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x661'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x476'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x880'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x160'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3d2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1ae'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1be'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x74c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x834'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x8a1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x487'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2de'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2e1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5f6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3d7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x47a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x711'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2db'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x81f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x856'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5c3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x475'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5ae'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x285'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x79c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x69e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x88e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1d2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x59d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x490'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5b6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x30c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x720'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6a0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x470'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4e7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6b0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5a1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1c4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x821'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x37c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x656'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x56c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2e6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x200'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7de'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x861'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3b2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7c0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x45e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5d8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5c9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x34d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x819'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x159'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7c7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4fa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x50b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x633'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2af'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x412'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x692'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2ef'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2f5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x334'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x662'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x221'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x52e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7b5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x676'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1bd'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x38f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x894'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x741'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2bc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4be'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x772'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x683'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7e5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6d5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3d9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x32b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x626'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x59f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2e4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3c8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x569'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1e5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x525'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x8af'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3b9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6ee'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x280'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x704'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7db'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x67b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4e9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x55d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x272'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7d7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x46b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x89b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3fc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x263'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x697'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x62a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x87e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x168'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4cf'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x51e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4de'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x325'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x49f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3df'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x841'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x86f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3a1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7ed'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x539'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x677'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x411'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x382'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x789'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1f4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1a8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x748'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x300'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x528'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x818'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x69c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x326'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x348'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7a9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x32f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x690'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x508'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1ac'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x264'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x333'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x42e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6b7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x196'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x274'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x35c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x321'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3aa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x877'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x658'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x495'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x46d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5f5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x15a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x507'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4a1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4bc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x186'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x35a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x375'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x81c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x184'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1fa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2e7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x22f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4a5'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x846'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x386'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x37e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1f0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x192'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x8b3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x839'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4a8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x652'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x682'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1b6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x776'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1e6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x33c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1bf'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x83d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x422'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x36a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6b8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x37d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x244'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x256'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x598'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x302'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x803'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x82c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x618'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6bf'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x29e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x425'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x420'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x335'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1b0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x48c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x59a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x82d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x597'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x773'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x38b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6c8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x699'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x847'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1b1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x481'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x340'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x89d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x463'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7c9'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3a4'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x499'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x70e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x23f'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x376'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x512'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1e0'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x606'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x20c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x824'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3ef'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x58b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x397'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7a8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2a7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x5f7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x643'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1ba'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x893'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6ac'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x628'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x620'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4fb'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3de'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x22b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x310'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x842'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x2fc'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3ba'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4b3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x747'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x694'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x3ea'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x18b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x179'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4a6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x647'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x20a'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1d6'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x666'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x83b'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x523'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x210'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1f2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x242'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7ac'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x822'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x498'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1c3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x1aa'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x763'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x679'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x53c'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4c8'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6a7'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4c1'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x724'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x7f3'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x582'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x667'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x672'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x214'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x349'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x4a2'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x316'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x423'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x458'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x6fe'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x89e'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x31d'))),_0x218f63(_0xdaf0f7(_0x4e9542('0x478')))];return _0x2aec=function(){return _0x2e6908;},_0x2aec();}multi&&(prefi=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x16e')))));if(autorespon===!![])for(let i=0x0;i<commandsrespon[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))];i++){budy==commandsrespon[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x791'))))]&&client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,commandsrespon[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x509'))))],text,{'quoted':mek});}function _0x3740(_0x2e57f8,_0x194762){const _0x1d757b=_0x2aec();return _0x3740=function(_0x28933e,_0x1afdf8){_0x28933e=_0x28933e-0x190;let _0x396cec=_0x1d757b[_0x28933e];return _0x396cec;},_0x3740(_0x2e57f8,_0x194762);}autobackup===!![]&&setTimeout(()=>{const _0x3e1db8=_0x4235a0,_0x2fe021=_0xc5f37,_0x5f5f0b=_0x399b48,_0x325ddb=_0x14dae3;fs[_0x325ddb(_0x5f5f0b(_0x2fe021(_0x3e1db8('0x2da'))))](_0x325ddb(_0x5f5f0b(_0x2fe021(_0x3e1db8('0x297')))));},0x2dc6c0);for(let anji of setiker){budy===anji&&(result=fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x589'))))+anji+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5b8'))))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,result,sticker,{'quoted':mek}));}for(let anju of audionye){budy===anju&&(result=fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x749'))))+anju+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a2'))))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,result,audio,{'mimetype':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x87f')))),'ptt':!![],'quoted':mek}));}for(let anjh of imagenye){budy===anjh&&(result=fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x48a'))))+anjh+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x812'))))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,result,image,{'thumbnail':Buffer[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x19b'))))](0x0),'quoted':mek}));}function _0xe157(){const _0x1557e8=_0x4235a0,_0xefe495=[_0x1557e8('0x3ae'),_0x1557e8('0x659'),_0x1557e8('0x5ca'),_0x1557e8('0x1b8'),_0x1557e8('0x158'),_0x1557e8('0x7e1'),_0x1557e8('0x6f0'),_0x1557e8('0x788'),_0x1557e8('0x4c0'),_0x1557e8('0x593'),_0x1557e8('0x570'),_0x1557e8('0x16a'),_0x1557e8('0x411'),_0x1557e8('0x8ba'),_0x1557e8('0x258'),_0x1557e8('0x2ac'),_0x1557e8('0x22e'),_0x1557e8('0x63b'),_0x1557e8('0x32c'),_0x1557e8('0x633'),_0x1557e8('0x40b'),_0x1557e8('0x58a'),_0x1557e8('0x785'),_0x1557e8('0x8a2'),_0x1557e8('0x4e2'),_0x1557e8('0x41e'),_0x1557e8('0x1c8'),_0x1557e8('0x62e'),_0x1557e8('0x6af'),_0x1557e8('0x744'),_0x1557e8('0x84f'),_0x1557e8('0x2ae'),_0x1557e8('0x3fa'),_0x1557e8('0x622'),_0x1557e8('0x5c8'),_0x1557e8('0x69e'),_0x1557e8('0x71d'),_0x1557e8('0x55b'),_0x1557e8('0x23a'),_0x1557e8('0x835'),_0x1557e8('0x4b4'),_0x1557e8('0x220'),_0x1557e8('0x46c'),_0x1557e8('0x399'),_0x1557e8('0x305'),_0x1557e8('0x52c'),_0x1557e8('0x4df'),_0x1557e8('0x4f5'),_0x1557e8('0x1a0'),_0x1557e8('0x325'),_0x1557e8('0x571'),_0x1557e8('0x448'),_0x1557e8('0x862'),_0x1557e8('0x1fb'),_0x1557e8('0x846'),_0x1557e8('0x38b'),_0x1557e8('0x437'),_0x1557e8('0x307'),_0x1557e8('0x27e'),_0x1557e8('0x850'),_0x1557e8('0x37a'),_0x1557e8('0x66f'),_0x1557e8('0x6a6'),_0x1557e8('0x3f8'),_0x1557e8('0x62a'),_0x1557e8('0x7da'),_0x1557e8('0x465'),_0x1557e8('0x269'),_0x1557e8('0x6e4'),_0x1557e8('0x83b'),_0x1557e8('0x29c'),_0x1557e8('0x50b'),_0x1557e8('0x30a'),_0x1557e8('0x527'),_0x1557e8('0x6e9'),_0x1557e8('0x282'),_0x1557e8('0x378'),_0x1557e8('0x84a'),_0x1557e8('0x438'),_0x1557e8('0x27b'),_0x1557e8('0x567'),_0x1557e8('0x4ea'),_0x1557e8('0x324'),_0x1557e8('0x728'),_0x1557e8('0x16e'),_0x1557e8('0x6d9'),_0x1557e8('0x4a0'),_0x1557e8('0x464'),_0x1557e8('0x52b'),_0x1557e8('0x2b7'),_0x1557e8('0x798'),_0x1557e8('0x802'),_0x1557e8('0x218'),_0x1557e8('0x248'),_0x1557e8('0x1d7'),_0x1557e8('0x2d2'),_0x1557e8('0x4e4'),_0x1557e8('0x260'),_0x1557e8('0x596'),_0x1557e8('0x37b'),_0x1557e8('0x22a'),_0x1557e8('0x36a'),_0x1557e8('0x5da'),_0x1557e8('0x894'),_0x1557e8('0x250'),_0x1557e8('0x33e'),_0x1557e8('0x7e5'),_0x1557e8('0x89e'),_0x1557e8('0x79e'),_0x1557e8('0x16f'),_0x1557e8('0x629'),_0x1557e8('0x363'),_0x1557e8('0x377'),_0x1557e8('0x6ef'),_0x1557e8('0x266'),_0x1557e8('0x640'),_0x1557e8('0x58d'),_0x1557e8('0x440'),_0x1557e8('0x5f3'),_0x1557e8('0x61b'),_0x1557e8('0x8b4'),_0x1557e8('0x7f4'),_0x1557e8('0x16b'),_0x1557e8('0x7a9'),_0x1557e8('0x1ef'),_0x1557e8('0x6d8'),_0x1557e8('0x43c'),_0x1557e8('0x6fd'),_0x1557e8('0x261'),_0x1557e8('0x7f2'),_0x1557e8('0x15e'),_0x1557e8('0x49b'),_0x1557e8('0x24d'),_0x1557e8('0x35f'),_0x1557e8('0x69a'),_0x1557e8('0x428'),_0x1557e8('0x73e'),_0x1557e8('0x2d5'),_0x1557e8('0x55d'),_0x1557e8('0x322'),_0x1557e8('0x54c'),_0x1557e8('0x309'),_0x1557e8('0x620'),_0x1557e8('0x575'),_0x1557e8('0x83c'),_0x1557e8('0x1b1'),_0x1557e8('0x848'),_0x1557e8('0x605'),_0x1557e8('0x6e7'),_0x1557e8('0x56c'),_0x1557e8('0x89f'),_0x1557e8('0x5bb'),_0x1557e8('0x5d6'),_0x1557e8('0x1ad'),_0x1557e8('0x1f4'),_0x1557e8('0x486'),_0x1557e8('0x180'),_0x1557e8('0x51e'),_0x1557e8('0x388'),_0x1557e8('0x4d4'),_0x1557e8('0x18d'),_0x1557e8('0x6a5'),_0x1557e8('0x3da'),_0x1557e8('0x67e'),_0x1557e8('0x60b'),_0x1557e8('0x21c'),_0x1557e8('0x830'),_0x1557e8('0x4dc'),_0x1557e8('0x47c'),_0x1557e8('0x23e'),_0x1557e8('0x5fd'),_0x1557e8('0x185'),_0x1557e8('0x6bd'),_0x1557e8('0x674'),_0x1557e8('0x636'),_0x1557e8('0x5ff'),_0x1557e8('0x4e5'),_0x1557e8('0x36e'),_0x1557e8('0x2ed'),_0x1557e8('0x76a'),_0x1557e8('0x335'),_0x1557e8('0x160'),_0x1557e8('0x4b0'),_0x1557e8('0x70d'),_0x1557e8('0x4e9'),_0x1557e8('0x3ff'),_0x1557e8('0x6b0'),_0x1557e8('0x841'),_0x1557e8('0x393'),_0x1557e8('0x1dc'),_0x1557e8('0x224'),_0x1557e8('0x87b'),_0x1557e8('0x8b0'),_0x1557e8('0x5e1'),_0x1557e8('0x7a1'),_0x1557e8('0x735'),_0x1557e8('0x249'),_0x1557e8('0x431'),_0x1557e8('0x462'),_0x1557e8('0x7b4'),_0x1557e8('0x5e8'),_0x1557e8('0x3b9'),_0x1557e8('0x81e'),_0x1557e8('0x3c0'),_0x1557e8('0x696'),_0x1557e8('0x317'),_0x1557e8('0x60a'),_0x1557e8('0x849'),_0x1557e8('0x3fe'),_0x1557e8('0x6c9'),_0x1557e8('0x1ee'),_0x1557e8('0x6ec'),_0x1557e8('0x38d'),_0x1557e8('0x31d'),_0x1557e8('0x65f'),_0x1557e8('0x1d8'),_0x1557e8('0x4c2'),_0x1557e8('0x2fc'),_0x1557e8('0x754'),_0x1557e8('0x2f8'),_0x1557e8('0x395'),_0x1557e8('0x4d7'),_0x1557e8('0x221'),_0x1557e8('0x78e'),_0x1557e8('0x1a6'),_0x1557e8('0x532'),_0x1557e8('0x45e'),_0x1557e8('0x3c8'),_0x1557e8('0x1d5'),_0x1557e8('0x461'),_0x1557e8('0x717'),_0x1557e8('0x50d'),_0x1557e8('0x326'),_0x1557e8('0x4be'),_0x1557e8('0x585'),_0x1557e8('0x315'),_0x1557e8('0x8b8'),_0x1557e8('0x1f5'),_0x1557e8('0x3b7'),_0x1557e8('0x271'),_0x1557e8('0x383'),_0x1557e8('0x192'),_0x1557e8('0x2ea'),_0x1557e8('0x41f'),_0x1557e8('0x5ce'),_0x1557e8('0x167'),_0x1557e8('0x803'),_0x1557e8('0x4f0'),_0x1557e8('0x168'),_0x1557e8('0x536'),_0x1557e8('0x67d'),_0x1557e8('0x24c'),_0x1557e8('0x5fb'),_0x1557e8('0x48e'),_0x1557e8('0x19f'),_0x1557e8('0x5ba'),_0x1557e8('0x199'),_0x1557e8('0x6e2'),_0x1557e8('0x485'),_0x1557e8('0x182'),_0x1557e8('0x51f'),_0x1557e8('0x731'),_0x1557e8('0x33c'),_0x1557e8('0x212'),_0x1557e8('0x60c'),_0x1557e8('0x565'),_0x1557e8('0x853'),_0x1557e8('0x1ac'),_0x1557e8('0x81a'),_0x1557e8('0x193'),_0x1557e8('0x2a2'),_0x1557e8('0x57c'),_0x1557e8('0x26d'),_0x1557e8('0x751'),_0x1557e8('0x3ec'),_0x1557e8('0x870'),_0x1557e8('0x8ae'),_0x1557e8('0x57b'),_0x1557e8('0x365'),_0x1557e8('0x4d5'),_0x1557e8('0x1bc'),_0x1557e8('0x750'),_0x1557e8('0x547'),_0x1557e8('0x2ef'),_0x1557e8('0x87a'),_0x1557e8('0x23c'),_0x1557e8('0x601'),_0x1557e8('0x710'),_0x1557e8('0x4aa'),_0x1557e8('0x3db'),_0x1557e8('0x467'),_0x1557e8('0x4cb'),_0x1557e8('0x795'),_0x1557e8('0x572'),_0x1557e8('0x875'),_0x1557e8('0x442'),_0x1557e8('0x584'),_0x1557e8('0x2de'),_0x1557e8('0x4c7'),_0x1557e8('0x361'),_0x1557e8('0x7a2'),_0x1557e8('0x703'),_0x1557e8('0x287'),_0x1557e8('0x823'),_0x1557e8('0x247'),_0x1557e8('0x2bf'),_0x1557e8('0x4a5'),_0x1557e8('0x70a'),_0x1557e8('0x2d9'),_0x1557e8('0x31e'),_0x1557e8('0x4bf'),_0x1557e8('0x667'),_0x1557e8('0x1e4'),_0x1557e8('0x75b'),_0x1557e8('0x733'),_0x1557e8('0x2e3'),_0x1557e8('0x756'),_0x1557e8('0x6e6'),_0x1557e8('0x78d'),_0x1557e8('0x619'),_0x1557e8('0x897'),_0x1557e8('0x2d4'),_0x1557e8('0x61f'),_0x1557e8('0x48c'),_0x1557e8('0x17e'),_0x1557e8('0x797'),_0x1557e8('0x5e7'),_0x1557e8('0x757'),_0x1557e8('0x500'),_0x1557e8('0x328'),_0x1557e8('0x7e2'),_0x1557e8('0x236'),_0x1557e8('0x76c'),_0x1557e8('0x57d'),_0x1557e8('0x7c0'),_0x1557e8('0x7a4'),_0x1557e8('0x268'),_0x1557e8('0x3a1'),_0x1557e8('0x553'),_0x1557e8('0x44e'),_0x1557e8('0x48b'),_0x1557e8('0x711'),_0x1557e8('0x542'),_0x1557e8('0x409'),_0x1557e8('0x22d'),_0x1557e8('0x54a'),_0x1557e8('0x1ba'),_0x1557e8('0x4c5'),_0x1557e8('0x892'),_0x1557e8('0x747'),_0x1557e8('0x210'),_0x1557e8('0x566'),_0x1557e8('0x6cf'),_0x1557e8('0x516'),_0x1557e8('0x4b9'),_0x1557e8('0x822'),_0x1557e8('0x336'),_0x1557e8('0x44b'),_0x1557e8('0x20e'),_0x1557e8('0x763'),_0x1557e8('0x654'),_0x1557e8('0x560'),_0x1557e8('0x614'),_0x1557e8('0x8a0'),_0x1557e8('0x469'),_0x1557e8('0x7a5'),_0x1557e8('0x783'),_0x1557e8('0x30f'),_0x1557e8('0x6f3'),_0x1557e8('0x21d'),_0x1557e8('0x19a'),_0x1557e8('0x46f'),_0x1557e8('0x17b'),_0x1557e8('0x87e'),_0x1557e8('0x227'),_0x1557e8('0x244'),_0x1557e8('0x460'),_0x1557e8('0x7fe'),_0x1557e8('0x5d0'),_0x1557e8('0x540'),_0x1557e8('0x2ad'),_0x1557e8('0x2d8'),_0x1557e8('0x898'),_0x1557e8('0x6a7'),_0x1557e8('0x481'),_0x1557e8('0x4af'),_0x1557e8('0x726'),_0x1557e8('0x559'),_0x1557e8('0x53d'),_0x1557e8('0x20c'),_0x1557e8('0x662'),_0x1557e8('0x1b5'),_0x1557e8('0x394'),_0x1557e8('0x2d0'),_0x1557e8('0x1b6'),_0x1557e8('0x76e'),_0x1557e8('0x8a6'),_0x1557e8('0x4e1'),_0x1557e8('0x3a8'),_0x1557e8('0x88f'),_0x1557e8('0x6ba'),_0x1557e8('0x648'),_0x1557e8('0x6dc'),_0x1557e8('0x276'),_0x1557e8('0x52d'),_0x1557e8('0x5b6'),_0x1557e8('0x3ee'),_0x1557e8('0x646'),_0x1557e8('0x330'),_0x1557e8('0x17f'),_0x1557e8('0x333'),_0x1557e8('0x3ce'),_0x1557e8('0x61a'),_0x1557e8('0x4b6'),_0x1557e8('0x4db'),_0x1557e8('0x663'),_0x1557e8('0x586'),_0x1557e8('0x508'),_0x1557e8('0x489'),_0x1557e8('0x517'),_0x1557e8('0x8b6'),_0x1557e8('0x607'),_0x1557e8('0x16d'),_0x1557e8('0x518'),_0x1557e8('0x668'),_0x1557e8('0x1a7'),_0x1557e8('0x202'),_0x1557e8('0x796'),_0x1557e8('0x484'),_0x1557e8('0x628'),_0x1557e8('0x65c'),_0x1557e8('0x2b8'),_0x1557e8('0x88b'),_0x1557e8('0x5eb'),_0x1557e8('0x85c'),_0x1557e8('0x225'),_0x1557e8('0x15b'),_0x1557e8('0x468'),_0x1557e8('0x554'),_0x1557e8('0x833'),_0x1557e8('0x770'),_0x1557e8('0x396'),_0x1557e8('0x235'),_0x1557e8('0x4cf'),_0x1557e8('0x673'),_0x1557e8('0x66e'),_0x1557e8('0x7b6'),_0x1557e8('0x4c1'),_0x1557e8('0x524'),_0x1557e8('0x410'),_0x1557e8('0x498'),_0x1557e8('0x644'),_0x1557e8('0x47e'),_0x1557e8('0x552'),_0x1557e8('0x50f'),_0x1557e8('0x7e6'),_0x1557e8('0x299'),_0x1557e8('0x53a'),_0x1557e8('0x5e5'),_0x1557e8('0x85e'),_0x1557e8('0x327'),_0x1557e8('0x5c1'),_0x1557e8('0x495'),_0x1557e8('0x7a6'),_0x1557e8('0x6c3'),_0x1557e8('0x3bc'),_0x1557e8('0x15d'),_0x1557e8('0x306'),_0x1557e8('0x729'),_0x1557e8('0x219'),_0x1557e8('0x8aa'),_0x1557e8('0x7b2'),_0x1557e8('0x7fd'),_0x1557e8('0x345'),_0x1557e8('0x75e'),_0x1557e8('0x4f1'),_0x1557e8('0x856'),_0x1557e8('0x53c'),_0x1557e8('0x2e5'),_0x1557e8('0x4b3'),_0x1557e8('0x855'),_0x1557e8('0x57f'),_0x1557e8('0x8a8'),_0x1557e8('0x214'),_0x1557e8('0x69d'),_0x1557e8('0x3be'),_0x1557e8('0x5ee'),_0x1557e8('0x6b2'),_0x1557e8('0x680'),_0x1557e8('0x7d4'),_0x1557e8('0x76b'),_0x1557e8('0x71e'),_0x1557e8('0x291'),_0x1557e8('0x25d'),_0x1557e8('0x78c'),_0x1557e8('0x767'),_0x1557e8('0x812'),_0x1557e8('0x79c'),_0x1557e8('0x32b'),_0x1557e8('0x2aa'),_0x1557e8('0x81d'),_0x1557e8('0x350'),_0x1557e8('0x49f'),_0x1557e8('0x677'),_0x1557e8('0x722'),_0x1557e8('0x1c9'),_0x1557e8('0x17c'),_0x1557e8('0x36c'),_0x1557e8('0x746'),_0x1557e8('0x562'),_0x1557e8('0x1ff'),_0x1557e8('0x1eb'),_0x1557e8('0x62d'),_0x1557e8('0x18a'),_0x1557e8('0x592'),_0x1557e8('0x3c6'),_0x1557e8('0x7c2'),_0x1557e8('0x46d'),_0x1557e8('0x86b'),_0x1557e8('0x1e9'),_0x1557e8('0x522'),_0x1557e8('0x56e'),_0x1557e8('0x60f'),_0x1557e8('0x40c'),_0x1557e8('0x7dd'),_0x1557e8('0x414'),_0x1557e8('0x88a'),_0x1557e8('0x19e'),_0x1557e8('0x362'),_0x1557e8('0x544'),_0x1557e8('0x591'),_0x1557e8('0x1c6'),_0x1557e8('0x647'),_0x1557e8('0x7ea'),_0x1557e8('0x263'),_0x1557e8('0x24a'),_0x1557e8('0x7cf'),_0x1557e8('0x6c5'),_0x1557e8('0x6d3'),_0x1557e8('0x1e0'),_0x1557e8('0x2e4'),_0x1557e8('0x5af'),_0x1557e8('0x1cd'),_0x1557e8('0x4d6'),_0x1557e8('0x83e'),_0x1557e8('0x882'),_0x1557e8('0x426'),_0x1557e8('0x826'),_0x1557e8('0x689'),_0x1557e8('0x64c'),_0x1557e8('0x186'),_0x1557e8('0x23b'),_0x1557e8('0x74e'),_0x1557e8('0x1fd'),_0x1557e8('0x5d5'),_0x1557e8('0x1ce'),_0x1557e8('0x2bd'),_0x1557e8('0x4b1'),_0x1557e8('0x2fa'),_0x1557e8('0x3cc'),_0x1557e8('0x538'),_0x1557e8('0x4a6'),_0x1557e8('0x706'),_0x1557e8('0x3af'),_0x1557e8('0x331'),_0x1557e8('0x7d6'),_0x1557e8('0x5fa'),_0x1557e8('0x8a7'),_0x1557e8('0x19b'),_0x1557e8('0x446'),_0x1557e8('0x29f'),_0x1557e8('0x6f4'),_0x1557e8('0x4eb'),_0x1557e8('0x478'),_0x1557e8('0x18f'),_0x1557e8('0x530'),_0x1557e8('0x55f'),_0x1557e8('0x81f'),_0x1557e8('0x502'),_0x1557e8('0x2b3'),_0x1557e8('0x5e2'),_0x1557e8('0x62c'),_0x1557e8('0x1b2'),_0x1557e8('0x612'),_0x1557e8('0x4fd'),_0x1557e8('0x5a9'),_0x1557e8('0x2dd'),_0x1557e8('0x69f'),_0x1557e8('0x65b'),_0x1557e8('0x1d0'),_0x1557e8('0x16c'),_0x1557e8('0x257'),_0x1557e8('0x340'),_0x1557e8('0x510'),_0x1557e8('0x68d'),_0x1557e8('0x60d'),_0x1557e8('0x51c'),_0x1557e8('0x604'),_0x1557e8('0x8a3'),_0x1557e8('0x82f'),_0x1557e8('0x1a2'),_0x1557e8('0x78a'),_0x1557e8('0x6aa'),_0x1557e8('0x173'),_0x1557e8('0x587'),_0x1557e8('0x5c5'),_0x1557e8('0x7c8'),_0x1557e8('0x7bc'),_0x1557e8('0x741'),_0x1557e8('0x3e2'),_0x1557e8('0x427'),_0x1557e8('0x1d4'),_0x1557e8('0x6a0'),_0x1557e8('0x62b'),_0x1557e8('0x7ef'),_0x1557e8('0x265'),_0x1557e8('0x453'),_0x1557e8('0x5ae'),_0x1557e8('0x20d'),_0x1557e8('0x742'),_0x1557e8('0x583'),_0x1557e8('0x732'),_0x1557e8('0x72d'),_0x1557e8('0x35e'),_0x1557e8('0x5c9'),_0x1557e8('0x22f'),_0x1557e8('0x63c'),_0x1557e8('0x3dc'),_0x1557e8('0x650'),_0x1557e8('0x3d7'),_0x1557e8('0x46e'),_0x1557e8('0x723'),_0x1557e8('0x5f1'),_0x1557e8('0x493'),_0x1557e8('0x5d1'),_0x1557e8('0x7f9'),_0x1557e8('0x2cd'),_0x1557e8('0x3f4'),_0x1557e8('0x300'),_0x1557e8('0x339'),_0x1557e8('0x452'),_0x1557e8('0x707'),_0x1557e8('0x43b'),_0x1557e8('0x550'),_0x1557e8('0x766'),_0x1557e8('0x737'),_0x1557e8('0x649'),_0x1557e8('0x81c'),_0x1557e8('0x889'),_0x1557e8('0x435'),_0x1557e8('0x272'),_0x1557e8('0x412'),_0x1557e8('0x6ff'),_0x1557e8('0x373'),_0x1557e8('0x8b7'),_0x1557e8('0x3f2'),_0x1557e8('0x54f'),_0x1557e8('0x63f'),_0x1557e8('0x5f7'),_0x1557e8('0x564'),_0x1557e8('0x233'),_0x1557e8('0x740'),_0x1557e8('0x33a'),_0x1557e8('0x895'),_0x1557e8('0x354'),_0x1557e8('0x624'),_0x1557e8('0x3b4'),_0x1557e8('0x807'),_0x1557e8('0x2fe'),_0x1557e8('0x839'),_0x1557e8('0x618'),_0x1557e8('0x6c2'),_0x1557e8('0x30e'),_0x1557e8('0x811'),_0x1557e8('0x1c0'),_0x1557e8('0x157'),_0x1557e8('0x7ac'),_0x1557e8('0x701'),_0x1557e8('0x4a1'),_0x1557e8('0x84d'),_0x1557e8('0x273'),_0x1557e8('0x434'),_0x1557e8('0x28b'),_0x1557e8('0x3ad'),_0x1557e8('0x86d'),_0x1557e8('0x45f'),_0x1557e8('0x4dd'),_0x1557e8('0x781'),_0x1557e8('0x804'),_0x1557e8('0x3dd'),_0x1557e8('0x479'),_0x1557e8('0x368'),_0x1557e8('0x1af'),_0x1557e8('0x609'),_0x1557e8('0x77b'),_0x1557e8('0x4c4'),_0x1557e8('0x5b8'),_0x1557e8('0x7dc'),_0x1557e8('0x671'),_0x1557e8('0x29a'),_0x1557e8('0x314'),_0x1557e8('0x89b'),_0x1557e8('0x3fb'),_0x1557e8('0x7b5'),_0x1557e8('0x296'),_0x1557e8('0x1b4'),_0x1557e8('0x230'),_0x1557e8('0x2b5'),_0x1557e8('0x7ff'),_0x1557e8('0x814'),_0x1557e8('0x6be'),_0x1557e8('0x2b6'),_0x1557e8('0x588'),_0x1557e8('0x7de'),_0x1557e8('0x85b'),_0x1557e8('0x869'),_0x1557e8('0x7e7'),_0x1557e8('0x6db'),_0x1557e8('0x490'),_0x1557e8('0x868'),_0x1557e8('0x2b1'),_0x1557e8('0x5df'),_0x1557e8('0x184'),_0x1557e8('0x194'),_0x1557e8('0x20f'),_0x1557e8('0x4f7'),_0x1557e8('0x1e1'),_0x1557e8('0x702'),_0x1557e8('0x5f9'),_0x1557e8('0x5a5'),_0x1557e8('0x178'),_0x1557e8('0x75c'),_0x1557e8('0x7af'),_0x1557e8('0x3fc'),_0x1557e8('0x2b2'),_0x1557e8('0x77e'),_0x1557e8('0x808'),_0x1557e8('0x44f'),_0x1557e8('0x3cd'),_0x1557e8('0x7db'),_0x1557e8('0x6d0'),_0x1557e8('0x356'),_0x1557e8('0x311'),_0x1557e8('0x863'),_0x1557e8('0x782'),_0x1557e8('0x42f'),_0x1557e8('0x445'),_0x1557e8('0x86c'),_0x1557e8('0x631'),_0x1557e8('0x1e6'),_0x1557e8('0x7b0'),_0x1557e8('0x7ae'),_0x1557e8('0x55c'),_0x1557e8('0x70f'),_0x1557e8('0x29e'),_0x1557e8('0x5b0'),_0x1557e8('0x4a3'),_0x1557e8('0x7bf'),_0x1557e8('0x3e3'),_0x1557e8('0x3f0'),_0x1557e8('0x709'),_0x1557e8('0x1b9'),_0x1557e8('0x2c1'),_0x1557e8('0x2fb'),_0x1557e8('0x27a'),_0x1557e8('0x5e0'),_0x1557e8('0x1bf'),_0x1557e8('0x641'),_0x1557e8('0x765'),_0x1557e8('0x332'),_0x1557e8('0x18b'),_0x1557e8('0x232'),_0x1557e8('0x61d'),_0x1557e8('0x76d'),_0x1557e8('0x899'),_0x1557e8('0x46b'),_0x1557e8('0x72e'),_0x1557e8('0x5f0'),_0x1557e8('0x404'),_0x1557e8('0x74b'),_0x1557e8('0x774'),_0x1557e8('0x7b3'),_0x1557e8('0x1cc'),_0x1557e8('0x5b4'),_0x1557e8('0x738'),_0x1557e8('0x3d0'),_0x1557e8('0x301'),_0x1557e8('0x66c'),_0x1557e8('0x164'),_0x1557e8('0x1f0'),_0x1557e8('0x6d1'),_0x1557e8('0x501'),_0x1557e8('0x3d5'),_0x1557e8('0x7fc'),_0x1557e8('0x7ba'),_0x1557e8('0x8b5'),_0x1557e8('0x6de'),_0x1557e8('0x239'),_0x1557e8('0x505'),_0x1557e8('0x3d8'),_0x1557e8('0x87f'),_0x1557e8('0x262'),_0x1557e8('0x5a6'),_0x1557e8('0x42a'),_0x1557e8('0x818'),_0x1557e8('0x658'),_0x1557e8('0x3b6'),_0x1557e8('0x1a3'),_0x1557e8('0x441'),_0x1557e8('0x6bc'),_0x1557e8('0x2b9'),_0x1557e8('0x2a3'),_0x1557e8('0x7d3'),_0x1557e8('0x24b'),_0x1557e8('0x724'),_0x1557e8('0x371'),_0x1557e8('0x4f4'),_0x1557e8('0x6a8'),_0x1557e8('0x455'),_0x1557e8('0x1da'),_0x1557e8('0x1e7'),_0x1557e8('0x4ca'),_0x1557e8('0x2ee'),_0x1557e8('0x65e'),_0x1557e8('0x165'),_0x1557e8('0x656'),_0x1557e8('0x7d8'),_0x1557e8('0x316'),_0x1557e8('0x776'),_0x1557e8('0x885'),_0x1557e8('0x8b2'),_0x1557e8('0x49c'),_0x1557e8('0x389'),_0x1557e8('0x2ca'),_0x1557e8('0x201'),_0x1557e8('0x512'),_0x1557e8('0x451'),_0x1557e8('0x3f9'),_0x1557e8('0x4ab'),_0x1557e8('0x2d7'),_0x1557e8('0x172'),_0x1557e8('0x815'),_0x1557e8('0x6ea'),_0x1557e8('0x39b'),_0x1557e8('0x298'),_0x1557e8('0x43e'),_0x1557e8('0x775'),_0x1557e8('0x423'),_0x1557e8('0x6b4'),_0x1557e8('0x59d'),_0x1557e8('0x416'),_0x1557e8('0x3c9'),_0x1557e8('0x364'),_0x1557e8('0x20b'),_0x1557e8('0x4b8'),_0x1557e8('0x4e6'),_0x1557e8('0x61c'),_0x1557e8('0x447'),_0x1557e8('0x302'),_0x1557e8('0x5cc'),_0x1557e8('0x2c9'),_0x1557e8('0x7c5'),_0x1557e8('0x4ec'),_0x1557e8('0x71c'),_0x1557e8('0x8b3'),_0x1557e8('0x6e3'),_0x1557e8('0x2fd'),_0x1557e8('0x28a'),_0x1557e8('0x539'),_0x1557e8('0x768'),_0x1557e8('0x548'),_0x1557e8('0x366'),_0x1557e8('0x240'),_0x1557e8('0x691'),_0x1557e8('0x1f3'),_0x1557e8('0x8a1'),_0x1557e8('0x42d'),_0x1557e8('0x47d'),_0x1557e8('0x204'),_0x1557e8('0x4cc'),_0x1557e8('0x836'),_0x1557e8('0x217'),_0x1557e8('0x28d'),_0x1557e8('0x15f'),_0x1557e8('0x6ac'),_0x1557e8('0x2a8'),_0x1557e8('0x21a'),_0x1557e8('0x7ed'),_0x1557e8('0x4c9'),_0x1557e8('0x1a9'),_0x1557e8('0x712'),_0x1557e8('0x891'),_0x1557e8('0x360'),_0x1557e8('0x223'),_0x1557e8('0x280'),_0x1557e8('0x698'),_0x1557e8('0x5c0'),_0x1557e8('0x295'),_0x1557e8('0x6fc'),_0x1557e8('0x353'),_0x1557e8('0x32a'),_0x1557e8('0x6a2'),_0x1557e8('0x688'),_0x1557e8('0x3ba'),_0x1557e8('0x15c'),_0x1557e8('0x4c3'),_0x1557e8('0x877'),_0x1557e8('0x589'),_0x1557e8('0x5b2'),_0x1557e8('0x2f9'),_0x1557e8('0x66d'),_0x1557e8('0x6e1'),_0x1557e8('0x38e'),_0x1557e8('0x878'),_0x1557e8('0x2c0'),_0x1557e8('0x23f'),_0x1557e8('0x7d7'),_0x1557e8('0x860'),_0x1557e8('0x6bb'),_0x1557e8('0x617'),_0x1557e8('0x678'),_0x1557e8('0x73a'),_0x1557e8('0x8bc'),_0x1557e8('0x47a'),_0x1557e8('0x2e9'),_0x1557e8('0x35c'),_0x1557e8('0x334'),_0x1557e8('0x359'),_0x1557e8('0x561'),_0x1557e8('0x5de'),_0x1557e8('0x519'),_0x1557e8('0x187'),_0x1557e8('0x778'),_0x1557e8('0x546'),_0x1557e8('0x3ac'),_0x1557e8('0x203'),_0x1557e8('0x64e'),_0x1557e8('0x576'),_0x1557e8('0x161'),_0x1557e8('0x821'),_0x1557e8('0x3e4'),_0x1557e8('0x18e'),_0x1557e8('0x7f7'),_0x1557e8('0x7c6'),_0x1557e8('0x79b'),_0x1557e8('0x2c6'),_0x1557e8('0x82e'),_0x1557e8('0x303'),_0x1557e8('0x283'),_0x1557e8('0x799'),_0x1557e8('0x26e'),_0x1557e8('0x406'),_0x1557e8('0x56d'),_0x1557e8('0x573'),_0x1557e8('0x425'),_0x1557e8('0x2d6'),_0x1557e8('0x49d'),_0x1557e8('0x4a2'),_0x1557e8('0x5cd'),_0x1557e8('0x685'),_0x1557e8('0x2a0'),_0x1557e8('0x279'),_0x1557e8('0x3eb'),_0x1557e8('0x72c'),_0x1557e8('0x5d4'),_0x1557e8('0x439'),_0x1557e8('0x1fe'),_0x1557e8('0x541'),_0x1557e8('0x42c'),_0x1557e8('0x43d'),_0x1557e8('0x21f'),_0x1557e8('0x7a8'),_0x1557e8('0x3a9'),_0x1557e8('0x3a7'),_0x1557e8('0x2bc'),_0x1557e8('0x6a9'),_0x1557e8('0x551'),_0x1557e8('0x175'),_0x1557e8('0x2a1'),_0x1557e8('0x429'),_0x1557e8('0x5ef'),_0x1557e8('0x370'),_0x1557e8('0x476'),_0x1557e8('0x3e7'),_0x1557e8('0x3c2'),_0x1557e8('0x7ee'),_0x1557e8('0x3e6'),_0x1557e8('0x2ab'),_0x1557e8('0x29d'),_0x1557e8('0x6da'),_0x1557e8('0x1a1'),_0x1557e8('0x3ca'),_0x1557e8('0x568'),_0x1557e8('0x6b7'),_0x1557e8('0x6d5'),_0x1557e8('0x49e'),_0x1557e8('0x408'),_0x1557e8('0x494'),_0x1557e8('0x861'),_0x1557e8('0x7d9'),_0x1557e8('0x70b'),_0x1557e8('0x6f2'),_0x1557e8('0x1c4'),_0x1557e8('0x6fa'),_0x1557e8('0x7d2'),_0x1557e8('0x5c6'),_0x1557e8('0x48d'),_0x1557e8('0x7c3'),_0x1557e8('0x847'),_0x1557e8('0x34d'),_0x1557e8('0x3a3'),_0x1557e8('0x400'),_0x1557e8('0x526'),_0x1557e8('0x525'),_0x1557e8('0x80f'),_0x1557e8('0x37f'),_0x1557e8('0x19d'),_0x1557e8('0x82a'),_0x1557e8('0x790'),_0x1557e8('0x7a0'),_0x1557e8('0x5d2'),_0x1557e8('0x533'),_0x1557e8('0x2e1'),_0x1557e8('0x503'),_0x1557e8('0x348'),_0x1557e8('0x705'),_0x1557e8('0x50a'),_0x1557e8('0x466'),_0x1557e8('0x2a5'),_0x1557e8('0x4a7'),_0x1557e8('0x511'),_0x1557e8('0x89a'),_0x1557e8('0x2be'),_0x1557e8('0x577'),_0x1557e8('0x1de'),_0x1557e8('0x251'),_0x1557e8('0x5cf'),_0x1557e8('0x851'),_0x1557e8('0x752'),_0x1557e8('0x3a2'),_0x1557e8('0x384'),_0x1557e8('0x5cb'),_0x1557e8('0x369'),_0x1557e8('0x627'),_0x1557e8('0x81b'),_0x1557e8('0x73f'),_0x1557e8('0x241'),_0x1557e8('0x6e8'),_0x1557e8('0x51d'),_0x1557e8('0x169'),_0x1557e8('0x816'),_0x1557e8('0x450'),_0x1557e8('0x76f'),_0x1557e8('0x520'),_0x1557e8('0x69b'),_0x1557e8('0x558'),_0x1557e8('0x492'),_0x1557e8('0x36b'),_0x1557e8('0x4bc'),_0x1557e8('0x595'),_0x1557e8('0x352'),_0x1557e8('0x77a'),_0x1557e8('0x844'),_0x1557e8('0x8b1'),_0x1557e8('0x74d'),_0x1557e8('0x1e8'),_0x1557e8('0x3e0'),_0x1557e8('0x1c5'),_0x1557e8('0x5f4'),_0x1557e8('0x1f7'),_0x1557e8('0x1fa'),_0x1557e8('0x4a9'),_0x1557e8('0x4ee'),_0x1557e8('0x286'),_0x1557e8('0x4ad'),_0x1557e8('0x4fc'),_0x1557e8('0x424'),_0x1557e8('0x471'),_0x1557e8('0x390'),_0x1557e8('0x8ad'),_0x1557e8('0x3b3'),_0x1557e8('0x433'),_0x1557e8('0x762'),_0x1557e8('0x4f2'),_0x1557e8('0x683'),_0x1557e8('0x32e'),_0x1557e8('0x3c7'),_0x1557e8('0x6c7'),_0x1557e8('0x337'),_0x1557e8('0x4ed'),_0x1557e8('0x4e8'),_0x1557e8('0x46a'),_0x1557e8('0x5e3'),_0x1557e8('0x794'),_0x1557e8('0x1bd'),_0x1557e8('0x721'),_0x1557e8('0x2c3'),_0x1557e8('0x75a'),_0x1557e8('0x343'),_0x1557e8('0x611'),_0x1557e8('0x784'),_0x1557e8('0x6bf'),_0x1557e8('0x615'),_0x1557e8('0x4e7'),_0x1557e8('0x430'),_0x1557e8('0x456'),_0x1557e8('0x603'),_0x1557e8('0x284'),_0x1557e8('0x718'),_0x1557e8('0x216'),_0x1557e8('0x26c'),_0x1557e8('0x80b'),_0x1557e8('0x405'),_0x1557e8('0x686'),_0x1557e8('0x1ea'),_0x1557e8('0x831'),_0x1557e8('0x5aa'),_0x1557e8('0x695'),_0x1557e8('0x85f'),_0x1557e8('0x632'),_0x1557e8('0x28f'),_0x1557e8('0x242'),_0x1557e8('0x687'),_0x1557e8('0x637'),_0x1557e8('0x67f'),_0x1557e8('0x25a'),_0x1557e8('0x837'),_0x1557e8('0x6b1'),_0x1557e8('0x418'),_0x1557e8('0x810'),_0x1557e8('0x7f3'),_0x1557e8('0x292'),_0x1557e8('0x323'),_0x1557e8('0x630'),_0x1557e8('0x4d8'),_0x1557e8('0x59c'),_0x1557e8('0x4d0'),_0x1557e8('0x873'),_0x1557e8('0x31f'),_0x1557e8('0x7b1'),_0x1557e8('0x5dc'),_0x1557e8('0x75f'),_0x1557e8('0x579'),_0x1557e8('0x6eb'),_0x1557e8('0x1e2'),_0x1557e8('0x50e'),_0x1557e8('0x7be'),_0x1557e8('0x289'),_0x1557e8('0x45b'),_0x1557e8('0x347'),_0x1557e8('0x56f'),_0x1557e8('0x342'),_0x1557e8('0x792'),_0x1557e8('0x879'),_0x1557e8('0x88e'),_0x1557e8('0x7f1'),_0x1557e8('0x5c3'),_0x1557e8('0x5c4'),_0x1557e8('0x30b'),_0x1557e8('0x6f6'),_0x1557e8('0x73c'),_0x1557e8('0x294'),_0x1557e8('0x231'),_0x1557e8('0x497'),_0x1557e8('0x1c2'),_0x1557e8('0x436'),_0x1557e8('0x55a'),_0x1557e8('0x7ca'),_0x1557e8('0x1ec'),_0x1557e8('0x320'),_0x1557e8('0x392'),_0x1557e8('0x3b5'),_0x1557e8('0x5ab'),_0x1557e8('0x7fb'),_0x1557e8('0x308'),_0x1557e8('0x528'),_0x1557e8('0x275'),_0x1557e8('0x83d'),_0x1557e8('0x549'),_0x1557e8('0x6f8'),_0x1557e8('0x5a0'),_0x1557e8('0x7c9'),_0x1557e8('0x21e'),_0x1557e8('0x58f'),_0x1557e8('0x1df'),_0x1557e8('0x401'),_0x1557e8('0x7ec'),_0x1557e8('0x5c7'),_0x1557e8('0x77c'),_0x1557e8('0x382'),_0x1557e8('0x749'),_0x1557e8('0x176'),_0x1557e8('0x4bb'),_0x1557e8('0x1cf'),_0x1557e8('0x543'),_0x1557e8('0x5ac'),_0x1557e8('0x5f6'),_0x1557e8('0x197'),_0x1557e8('0x297'),_0x1557e8('0x7e4'),_0x1557e8('0x39a'),_0x1557e8('0x704'),_0x1557e8('0x228'),_0x1557e8('0x58c'),_0x1557e8('0x24e'),_0x1557e8('0x33d'),_0x1557e8('0x54e'),_0x1557e8('0x51b'),_0x1557e8('0x4f3'),_0x1557e8('0x7d5'),_0x1557e8('0x376'),_0x1557e8('0x26b'),_0x1557e8('0x3df'),_0x1557e8('0x7b7'),_0x1557e8('0x2f5'),_0x1557e8('0x37d'),_0x1557e8('0x80d'),_0x1557e8('0x8a4'),_0x1557e8('0x27c'),_0x1557e8('0x379'),_0x1557e8('0x521'),_0x1557e8('0x38f'),_0x1557e8('0x755'),_0x1557e8('0x745'),_0x1557e8('0x771'),_0x1557e8('0x679'),_0x1557e8('0x1b3'),_0x1557e8('0x74c'),_0x1557e8('0x555'),_0x1557e8('0x4f6'),_0x1557e8('0x267'),_0x1557e8('0x651'),_0x1557e8('0x7df'),_0x1557e8('0x63e'),_0x1557e8('0x2c8'),_0x1557e8('0x5a4'),_0x1557e8('0x1d9'),_0x1557e8('0x681'),_0x1557e8('0x684'),_0x1557e8('0x2ce'),_0x1557e8('0x3c5'),_0x1557e8('0x610'),_0x1557e8('0x2df'),_0x1557e8('0x5c2'),_0x1557e8('0x556'),_0x1557e8('0x714'),_0x1557e8('0x1a8'),_0x1557e8('0x3aa'),_0x1557e8('0x8af'),_0x1557e8('0x838'),_0x1557e8('0x780'),_0x1557e8('0x78b'),_0x1557e8('0x35d'),_0x1557e8('0x84c'),_0x1557e8('0x4fe'),_0x1557e8('0x6cb'),_0x1557e8('0x1d3'),_0x1557e8('0x177'),_0x1557e8('0x189'),_0x1557e8('0x642'),_0x1557e8('0x174'),_0x1557e8('0x229'),_0x1557e8('0x2db'),_0x1557e8('0x6c1'),_0x1557e8('0x6d2'),_0x1557e8('0x6c0'),_0x1557e8('0x557'),_0x1557e8('0x83a'),_0x1557e8('0x31a'),_0x1557e8('0x290'),_0x1557e8('0x6ce'),_0x1557e8('0x608'),_0x1557e8('0x2cf'),_0x1557e8('0x1be'),_0x1557e8('0x71f'),_0x1557e8('0x1ed'),_0x1557e8('0x800'),_0x1557e8('0x171'),_0x1557e8('0x515'),_0x1557e8('0x690'),_0x1557e8('0x890'),_0x1557e8('0x21b'),_0x1557e8('0x5bd'),_0x1557e8('0x7c4'),_0x1557e8('0x358'),_0x1557e8('0x896'),_0x1557e8('0x3f7'),_0x1557e8('0x4ac'),_0x1557e8('0x407'),_0x1557e8('0x840'),_0x1557e8('0x806'),_0x1557e8('0x2c2'),_0x1557e8('0x2f6'),_0x1557e8('0x27d'),_0x1557e8('0x188'),_0x1557e8('0x205'),_0x1557e8('0x634'),_0x1557e8('0x51a'),_0x1557e8('0x581'),_0x1557e8('0x6a1'),_0x1557e8('0x4a4'),_0x1557e8('0x6ad'),_0x1557e8('0x759'),_0x1557e8('0x2ff'),_0x1557e8('0x80a'),_0x1557e8('0x403'),_0x1557e8('0x87d'),_0x1557e8('0x449'),_0x1557e8('0x4d3'),_0x1557e8('0x277'),_0x1557e8('0x3bf'),_0x1557e8('0x813'),_0x1557e8('0x34c'),_0x1557e8('0x660'),_0x1557e8('0x773'),_0x1557e8('0x7d0'),_0x1557e8('0x2d3'),_0x1557e8('0x1f6'),_0x1557e8('0x40f'),_0x1557e8('0x661'),_0x1557e8('0x652'),_0x1557e8('0x3f3'),_0x1557e8('0x509'),_0x1557e8('0x32f'),_0x1557e8('0x237'),_0x1557e8('0x801'),_0x1557e8('0x59f'),_0x1557e8('0x1cb'),_0x1557e8('0x7b8'),_0x1557e8('0x54b'),_0x1557e8('0x700'),_0x1557e8('0x68b'),_0x1557e8('0x874'),_0x1557e8('0x56a'),_0x1557e8('0x3d4'),_0x1557e8('0x5db'),_0x1557e8('0x817'),_0x1557e8('0x6ab'),_0x1557e8('0x6fe'),_0x1557e8('0x3c3'),_0x1557e8('0x871'),_0x1557e8('0x504'),_0x1557e8('0x6b5'),_0x1557e8('0x45a'),_0x1557e8('0x5bc'),_0x1557e8('0x4ce'),_0x1557e8('0x417'),_0x1557e8('0x1f8'),_0x1557e8('0x682'),_0x1557e8('0x473'),_0x1557e8('0x79d'),_0x1557e8('0x6b9'),_0x1557e8('0x5d8'),_0x1557e8('0x513'),_0x1557e8('0x4ae'),_0x1557e8('0x20a'),_0x1557e8('0x5ed'),_0x1557e8('0x454'),_0x1557e8('0x506'),_0x1557e8('0x2c4'),_0x1557e8('0x59b'),_0x1557e8('0x7a3'),_0x1557e8('0x537'),_0x1557e8('0x179'),_0x1557e8('0x56b'),_0x1557e8('0x381'),_0x1557e8('0x6f5'),_0x1557e8('0x83f'),_0x1557e8('0x3bd'),_0x1557e8('0x312'),_0x1557e8('0x78f'),_0x1557e8('0x786'),_0x1557e8('0x44d'),_0x1557e8('0x1a4'),_0x1557e8('0x1f9'),_0x1557e8('0x7ce'),_0x1557e8('0x43a'),_0x1557e8('0x65d'),_0x1557e8('0x68f'),_0x1557e8('0x162'),_0x1557e8('0x739'),_0x1557e8('0x2a7'),_0x1557e8('0x63a'),_0x1557e8('0x720'),_0x1557e8('0x675'),_0x1557e8('0x22c')];return _0xe157=function(){return _0xefe495;},_0xe157();}for(let anje of videonye){budy===anje&&(result=fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x28d'))))+anje+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8a8'))))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,result,video,{'quoted':mek}));}if(bad[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](messagesC)){if(!isGroup)return;if(!isBadWord)return;if(isGroupAdmins)return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x540')))));client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71e'))))](from,Presence[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x461'))))]);var kic=sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))));teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1ea'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x400')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x86d4b9=_0x4235a0,_0x3d08ff=_0xc5f37,_0x49b0e3=_0x399b48,_0x71a94c=_0x14dae3;client[_0x71a94c(_0x49b0e3(_0x3d08ff(_0x86d4b9('0x4c6'))))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x184a1c=_0x4235a0,_0x4500f1=_0xc5f37,_0x2635c9=_0x399b48,_0x46f9d6=_0x14dae3;client[_0x46f9d6(_0x2635c9(_0x4500f1(_0x184a1c('0x17a'))))](from,[kic])[_0x46f9d6(_0x2635c9(_0x4500f1(_0x184a1c('0x583'))))](_0x54edfe=>{const _0x279720=_0x184a1c,_0x20b88c=_0x4500f1,_0x2417fe=_0x2635c9,_0x438bca=_0x46f9d6;reply(_0x438bca(_0x2417fe(_0x20b88c(_0x279720('0x409'))))+_0x54edfe);});},0x1388),setTimeout(()=>{const _0x28c0cd=_0x4235a0,_0x1e3c0b=_0xc5f37,_0x32ab42=_0x399b48,_0x57f874=_0x14dae3;client[_0x57f874(_0x32ab42(_0x1e3c0b(_0x28c0cd('0x71e'))))](from,Presence[_0x57f874(_0x32ab42(_0x1e3c0b(_0x28c0cd('0x461'))))]),replysticker(leavestc);},0xbb8);}if(m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))]&&m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x493'))))]&&m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ea'))))]&&m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ea'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x85e'))))]===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x610'))))&&!(m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ea'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x85a'))))]&&m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ea'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3f0'))))])){if(antitrol===![])return;if(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3a5'))))])return;replysticker(trolistc),await client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x303'))))](m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x72e'))))],_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x18a')))),{'includeStarred':![]});}if(isMuted){if(!isGroupAdmins&&!isOwner&&!mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3a5'))))])return;}if(budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x733')))))){if(!isGroup)return;if(AntiLink)return;if(isGroupAdmins)return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x72a')))));if(isOwner)return;client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71e'))))](from,Presence[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x461'))))]);if(messagesC[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x363'))))))return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x602')))));var kic=sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))));teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x18e'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x400')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x580a04=_0x4235a0,_0xfe30ae=_0xc5f37,_0x511808=_0x399b48,_0x2329f3=_0x14dae3;client[_0x2329f3(_0x511808(_0xfe30ae(_0x580a04('0x4c6'))))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x407060=_0x4235a0,_0x47127d=_0xc5f37,_0x51b58f=_0x399b48,_0x1a5689=_0x14dae3;client[_0x1a5689(_0x51b58f(_0x47127d(_0x407060('0x17a'))))](from,[kic])[_0x1a5689(_0x51b58f(_0x47127d(_0x407060('0x583'))))](_0x49c2ad=>{const _0x1238f6=_0x407060,_0x3d180d=_0x47127d,_0x1dd25e=_0x51b58f,_0x4c9e7d=_0x1a5689;reply(_0x4c9e7d(_0x1dd25e(_0x3d180d(_0x1238f6('0x409'))))+_0x49c2ad);});},0x1388),setTimeout(()=>{const _0x3bf5b0=_0x4235a0,_0x26bd4c=_0xc5f37,_0x3b3f74=_0x399b48,_0x1367cc=_0x14dae3;client[_0x1367cc(_0x3b3f74(_0x26bd4c(_0x3bf5b0('0x71e'))))](from,Presence[_0x1367cc(_0x3b3f74(_0x26bd4c(_0x3bf5b0('0x461'))))]),replysticker(leavestc);},0xbb8);}if(budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]>0x2710){if(!isGroup)return;if(isAntiVirtex)return;if(!isBotGroupAdmins)return;if(isGroupAdmins)return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x480')))));client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71e'))))](from,Presence[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x461'))))]);if(messagesC[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x363'))))))return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x602')))));sendButtonImageLoc(from,antivirtexx(),support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}}),sendButtonImageLoc(from,antivirtexx(),support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});var kic=sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))));teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x433'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x400')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x30e95d=_0x4235a0,_0x173fec=_0xc5f37,_0xf582dd=_0x399b48,_0x1b97fa=_0x14dae3;client[_0x1b97fa(_0xf582dd(_0x173fec(_0x30e95d('0x4c6'))))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x1c4bae=_0x4235a0,_0x1a0414=_0xc5f37,_0x495e0f=_0x399b48,_0x387c9d=_0x14dae3;client[_0x387c9d(_0x495e0f(_0x1a0414(_0x1c4bae('0x17a'))))](from,[kic])[_0x387c9d(_0x495e0f(_0x1a0414(_0x1c4bae('0x583'))))](_0x2bb478=>{const _0x2fb6a7=_0x1c4bae,_0x412a63=_0x1a0414,_0x7a3522=_0x495e0f,_0x4ebd43=_0x387c9d;reply(_0x4ebd43(_0x7a3522(_0x412a63(_0x2fb6a7('0x409'))))+_0x2bb478);});},0x1388),setTimeout(()=>{const _0x4de860=_0x4235a0,_0x5d8c6a=_0xc5f37,_0x95c28a=_0x399b48,_0x4ca51d=_0x14dae3;client[_0x4ca51d(_0x95c28a(_0x5d8c6a(_0x4de860('0x71e'))))](from,Presence[_0x4ca51d(_0x95c28a(_0x5d8c6a(_0x4de860('0x461'))))]),replysticker(leavestc);},0xbb8);}autocomposing===!![]&&client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71e'))))](from,Presence[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x461'))))]),autorecording===!![]&&client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71e'))))](from,Presence[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2e9'))))]);if(tictactoe[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7c5'))))](senderNumber)&&[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x670')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x48d'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](budy)&&!isCmd)return orangnye=sender,teks='@'+orangnye[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x24b')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[orangnye]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0x41a6ba=_0x4235a0,_0x217998=_0xc5f37,_0x3d63e9=_0x399b48,_0x15e9c1=_0x14dae3;delete tictactoe[senderNumber],fs[_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x75b'))))](_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x4ba')))),JSON[_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x3ee'))))](tictactoe)),fs[_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x33f'))))](_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x401'))))+from+_0x15e9c1(_0x3d63e9(_0x217998(_0x41a6ba('0x5c4')))));});if(tictactoe[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7c5'))))](senderNumber)&&['1','2','3','4','5','6','7','8','9'][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](budy)&&!isCmd){var {enemy,mode,board,step}=tictactoe[senderNumber];if([X,O][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](board[Number(budy)-0x1]))return await reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7ce'))))+budy+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x21c')))));var data=tictactoe[senderNumber];data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d6'))))]=senderNumber,mode=mode==X?O:X,data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x355'))))]=mode,data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x870'))))][Number(budy)-0x1]=data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x355'))))],data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x67a'))))]+=0x1;var player1=enemy,player2=senderNumber;step%0x2==0x0?(player1=senderNumber,player2=enemy):mode=data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x355'))))]==X?O:X,(tictactoe[enemy]=data,delete tictactoe[senderNumber]);var teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x751'))))+player1[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+'\x20('+mode+')';mode=mode==X?O:X;var text2=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x802'))))+player2[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+'\x20('+mode+')',test=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x51b'))));board=await generateBoard(data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x870'))))]);var win=await getWin(data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x870'))))]);if(win)return teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x70d')))),win==mode?(teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7eb'))))+player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x622')))),teks+=board,teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x25b'))))+player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7b3')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867')))),player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0x538c01=_0x4235a0,_0x393a9e=_0xc5f37,_0x47e82e=_0x399b48,_0x606df2=_0x14dae3;delete tictactoe[enemy],fs[_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x75b'))))](_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x4ba')))),JSON[_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x3ee'))))](tictactoe)),fs[_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x33f'))))](_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x401'))))+from+_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x5c4'))))),getWins(player2+_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x867')))),0x1),getLose(player1+_0x606df2(_0x47e82e(_0x393a9e(_0x538c01('0x867')))),0x1);})):(teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x31f'))))+player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1b3')))),teks+=board,teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x41a'))))+player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ee')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867')))),player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0xa72437=_0x4235a0,_0x1ae1e2=_0xc5f37,_0x16e61e=_0x399b48,_0xe9e6bb=_0x14dae3;delete tictactoe[enemy],fs[_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x75b'))))](_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x4ba')))),JSON[_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x3ee'))))](tictactoe)),fs[_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x33f'))))](_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x401'))))+from+_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x5c4'))))),getWins(player1+_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x867')))),0x1),getLose(player2+_0xe9e6bb(_0x16e61e(_0x1ae1e2(_0xa72437('0x867')))),0x1);}));if(data[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x67a'))))]==0x9)return teks=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x70d')))),teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x289'))))+player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4a0')))),teks+=board,teks+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x25f'))))+player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8a0')))),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867')))),player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0x3a9708=_0x4235a0,_0x5968c0=_0xc5f37,_0x597a86=_0x399b48,_0x47623a=_0x14dae3;delete tictactoe[enemy],fs[_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x75b'))))](_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x4ba')))),JSON[_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x3ee'))))](tictactoe)),fs[_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x33f'))))](_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x401'))))+from+_0x47623a(_0x597a86(_0x5968c0(_0x3a9708('0x5c4')))));});return player2==senderNumber?teks+=tunjuk:text2+=tunjuk,teks+='\x0a',teks+=board,teks+=text2,teks+=test,client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867')))),player2+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0x585cce=_0x4235a0,_0xc82de=_0xc5f37,_0x1aa3ca=_0x399b48,_0x139d8a=_0x14dae3;fs[_0x139d8a(_0x1aa3ca(_0xc82de(_0x585cce('0x75b'))))](_0x139d8a(_0x1aa3ca(_0xc82de(_0x585cce('0x4ba')))),JSON[_0x139d8a(_0x1aa3ca(_0xc82de(_0x585cce('0x3ee'))))](tictactoe));});}function _0x4bc5(_0xf25b40,_0x5d864c){const _0x3cf595=_0x3cf5();return _0x4bc5=function(_0x4bc5f1,_0x388209){_0x4bc5f1=_0x4bc5f1-0x156;let _0x55d495=_0x3cf595[_0x4bc5f1];return _0x55d495;},_0x4bc5(_0xf25b40,_0x5d864c);}if(fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2d1'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x401'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))))){tttSkuy=setTtt(''+from);if(sender==tttSkuy['Y']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))&&budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()=='y'){if(tttSkuy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x734'))))])return reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2c7')))));tttSkuy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x734'))))]=!![],rand0m=[tttSkuy['Z'],tttSkuy['Y']],winR=rand0m[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*rand0m[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x401'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](tttSkuy,null,0x2)),nantang=O,pelawan=X;var board=[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x898')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3a0')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x32c')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x474')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ff')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x69b')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x638')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3a9')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x862'))))],penantang=tttSkuy['Z']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867')))),lawan=tttSkuy['Y']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))));tesk=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x751'))))+penantang[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+'\x20('+nantang+')\x20'+tunjuk+'\x0a';var count=0x0;for(var x of board){count%0x3==0x0&&(tesk+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3bc'))))),tesk+=x,count+=0x1;}tesk+=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x802'))))+lawan[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+'\x20('+pelawan+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x25a'))));return client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,tesk,text,{'quoted':mek,'contextInfo':{'mentionedJid':[penantang,lawan]}})[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x45c'))))](()=>{const _0x44b2ab=_0x4235a0,_0x207b15=_0xc5f37,_0x8792dd=_0x399b48,_0x358bb4=_0x14dae3;var _0x3913f6={};_0x3913f6[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x6d6'))))]=lawan[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x3e6'))))]('@')[0x0],_0x3913f6[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x355'))))]=pelawan,_0x3913f6[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x870'))))]=board,_0x3913f6[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x67a'))))]=0x0,tictactoe[penantang[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x3e6'))))]('@')[0x0]]=_0x3913f6,fs[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x75b'))))](_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x4ba')))),JSON[_0x358bb4(_0x8792dd(_0x207b15(_0x44b2ab('0x3ee'))))](tictactoe));});fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x33f'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x401'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))));}else sender==tttSkuy['Y']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))&&budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()=='n'&&(client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](from,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a6'))))+tttSkuy['Y']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4a7')))),text,{'quoted':mek,'contextInfo':{'mentionedJid':[tttSkuy['Y']+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))]}}),fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x33f'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x401'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4'))))));}cekafk(afk);if(!mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x341'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x43b')))))&&offline){if(!isOwner){if(isAfk(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))]))return;addafk(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))]),heheh=ms(Date[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x389'))))]()-waktu),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))],ind[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x805'))))](prefix,player,ow,trakteer,saweria,donasi,rekening)+support,MessageType[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8bd'))))],{'contextInfo':{'mentionedJid':[player,ow,numbernye],'stanzaId':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a3')))),'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x55f')))),'quotedMessage':{'imageMessage':{'caption':fake,'jpegThumbnail':WMthumb}}}});}}if(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x341'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x43b')))))&&offline){if(!isOwner){if(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))]!=undefined){if(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3c6'))))]!=undefined){if(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3c6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x250'))))]!=undefined)for(let ment of mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3c6'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x250'))))]){if(ment===owner+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x867'))))){if(isAfk(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))]))return;addafk(mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))]),heheh=ms(Date[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x389'))))]()-waktu),client[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c6'))))](mek[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e4'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d2'))))],ind[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x805'))))](prefix,player,ow,trakteer,saweria,donasi,rekening)+support,MessageType[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8bd'))))],{'contextInfo':{'mentionedJid':[player,ow,numbernye],'stanzaId':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a3')))),'participant':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x50c')))),'remoteJid':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x55f')))),'quotedMessage':{'imageMessage':{'caption':fake,'jpegThumbnail':WMthumb}}}});}}}}}}tebakgambar[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7c5'))))](sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebakgambar[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()==jawaban&&(await sendButtonText(from,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ef'))))+prefix+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ec')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7aa')))),[{'buttonId':''+command,'buttonText':{'displayText':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ed'))))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),delete tebakgambar[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3f4')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](tebakgambar)))),tebaksiapaaku[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7c5'))))](sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebaksiapaaku[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()==jawaban&&(await reply(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2e0'))))+(prefix+command)+'*'),delete tebaksiapaaku[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7ee')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](tebaksiapaaku)))),tebakcaklontong[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7c5'))))](sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebakcaklontong[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()==jawaban&&(await sendButtonText(from,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x25d'))))+prefix+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ec')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7aa')))),[{'buttonId':''+command,'buttonText':{'displayText':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ed'))))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),delete tebakcaklontong[sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]],fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1a6')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](tebakcaklontong))));if(isGroup&&!isVote){if(budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7ef'))))){let vote=JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6db'))))](fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a9'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))))),_votes=JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6db'))))](fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a9'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))))),fil=vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x584'))))](_0x570c01=>_0x570c01[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))]),id_vote=sender?sender:_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x312'))));if(fil[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](id_vote))return mentions('@'+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x496')))),fil,!![]);else{vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))]({'participant':id_vote,'voting':'✅'}),fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a9'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](vote));let _p=[],_vote=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2fb'))))+'@'+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x29d'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x858'))))+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x578'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5aa'))))+vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8a7'))))+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x62f'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x550')))));for(let i=0x0;i<vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))];i++){_vote+='@'+vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4db'))))+vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x625'))))]+'\x0a\x0a',_p[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))]);}_p[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x29d'))))]),mentions(_vote,_p,!![]);}}else{if(budy[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x872'))))]()===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x529'))))){const vote=JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6db'))))](fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a9'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4'))))));let _votes=JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6db'))))](fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2da'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x38c'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))))),fil=vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x584'))))](_0xd9c6fc=>_0xd9c6fc[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))]),id_vote=sender?sender:_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x312'))));if(fil[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](id_vote))return mentions('@'+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x496')))),fil,!![]);else{vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))]({'participant':id_vote,'voting':'❌'}),fs[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x75b'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5a9'))))+from+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c4')))),JSON[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3ee'))))](vote));let _p=[],_vote=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2fb'))))+'@'+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x29d'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x858'))))+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x578'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5aa'))))+vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8a7'))))+_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x62f'))))]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x550')))));for(let i=0x0;i<vote[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))];i++){_vote+='@'+vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4db'))))+vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x625'))))]+'\x0a\x0a',_p[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](vote[i][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3af'))))]);}_p[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x615'))))](_votes[0x0][_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x29d'))))]),mentions(_vote,_p,!![]);}}}}var angka='1';isPremium&&(angka='0'),isOwner&&(angka='0');if(isGroup&&isRegistered){const currentLevel=getLevelingLevel(sender),checkId=checkRegisteredUser(sender);try{if(currentLevel===undefined&&checkId===undefined)return reply(ind[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x483'))))]());const amountXp=Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*0x1)+0x0,requiredXp=0xa*(Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x71b'))))](0x2,currentLevel)-0x1),getLevel=getLevelingLevel(sender);addLevelingXp(sender,amountXp),requiredXp<=getLevelingXp(sender)&&(addLevelingLevel(sender,0x1),addLimitUser(sender,0xa),await reply(ind[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x837'))))](pushname,sender,player,getLevelingXp,getLevel,getLevelingLevel,role)));}catch(_0x403819){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x34c'))))](_0x403819);}}const levelRole=getLevelingLevel(sender);var role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6ed'))));if(levelRole<=0x0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6ed'))));else{if(levelRole<=0x4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6a5'))));else{if(levelRole<=0x6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3b1'))));else{if(levelRole<=0x8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x825'))));else{if(levelRole<=0xa)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x56e'))));else{if(levelRole<=0xc)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x81e'))));else{if(levelRole<=0xe)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x59c'))));else{if(levelRole<=0x10)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x491'))));else{if(levelRole<=0x12)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x185'))));else{if(levelRole<=0x14)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x63d'))));else{if(levelRole<=0x16)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x645'))));else{if(levelRole<=0x18)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5ba'))));else{if(levelRole<=0x1a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7a1'))));else{if(levelRole<=0x1c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x459'))));else{if(levelRole<=0x1e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x669'))));else{if(levelRole<=0x20)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6c5'))));else{if(levelRole<=0x22)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x32e'))));else{if(levelRole<=0x24)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x237'))));else{if(levelRole<=0x26)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5e2'))));else{if(levelRole<=0x28)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x226'))));else{if(levelRole<=0x2a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e3'))));else{if(levelRole<=0x2c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6b3'))));else{if(levelRole<=0x2e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x77a'))));else{if(levelRole<=0x30)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x691'))));else{if(levelRole<=0x32)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3f5'))));else{if(levelRole<=0x34)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x53b'))));else{if(levelRole<=0x36)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e8'))));else{if(levelRole<=0x38)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x360'))));else{if(levelRole<=0x3a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x306'))));else{if(levelRole<=0x3c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x816'))));else{if(levelRole<=0x3e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e4'))));else{if(levelRole<=0x40)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x308'))));else{if(levelRole<=0x42)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5d1'))));else{if(levelRole<=0x44)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x612'))));else{if(levelRole<=0x46)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x756'))));else{if(levelRole<=0x48)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x79f'))));else{if(levelRole<=0x4a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6bc'))));else{if(levelRole<=0x4c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x681'))));else{if(levelRole<=0x4e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5db'))));else{if(levelRole<=0x50)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x209'))));else{if(levelRole<=0x52)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x269'))));else{if(levelRole<=0x54)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2e2'))));else{if(levelRole<=0x56)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3f9'))));else{if(levelRole<=0x58)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x41b'))));else{if(levelRole<=0x5a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x22d'))));else{if(levelRole<=0x5c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8bb'))));else{if(levelRole<=0x5e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4dd'))));else{if(levelRole<=0x60)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x395'))));else{if(levelRole<=0x62)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6c3'))));else{if(levelRole<=0x64)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x287'))));else{if(levelRole<=0x66)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x22a'))));else{if(levelRole<=0x68)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x262'))));else{if(levelRole<=0x6a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x365'))));else{if(levelRole<=0x6c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x426'))));else{if(levelRole<=0x6e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x80c'))));else{if(levelRole<=0x70)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x236'))));else{if(levelRole<=0x72)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7fc'))));else{if(levelRole<=0x74)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1ca'))));else{if(levelRole<=0x76)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x21b'))));else{if(levelRole<=0x78)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x81b'))));else{if(levelRole<=0x7a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1b4'))));else{if(levelRole<=0x7c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4e3'))));else{if(levelRole<=0x7e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5e1'))));else{if(levelRole<=0x80)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x61b'))));else{if(levelRole<=0x82)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x646'))));else{if(levelRole<=0x84)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2f3'))));else{if(levelRole<=0x86)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x377'))));else{if(levelRole<=0x88)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x8a3'))));else{if(levelRole<=0x8a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x650'))));else{if(levelRole<=0x8c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f6'))));else{if(levelRole<=0x8e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x687'))));else{if(levelRole<=0x90)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7a4'))));else{if(levelRole<=0x92)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x889'))));else{if(levelRole<=0x94)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x419'))));else{if(levelRole<=0x98)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x9a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x9c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x9e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xa0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xa2)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xa4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xa6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xa8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xaa)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xac)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xae)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xb0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xb2)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xb4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xb6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xb8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xba)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xbc)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xbe)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xc0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xc2)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xc4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xc6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xc8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xd2)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xdc)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xe6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xf0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0xfa)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x104)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x10e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x118)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x122)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x12c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x136)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x140)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x14a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x154)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x15e)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x168)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x172)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x17c)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x186)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x190)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x19a)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1a4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1ae)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1b8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1c2)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1cc)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1d6)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1e0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1ea)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x1f4)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x258)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x2bc)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x320)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x384)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1f9'))));else{if(levelRole<=0x3e8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x84c'))));else{if(levelRole<=0x7d0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6c7'))));else{if(levelRole<=0xbb8)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x563'))));else{if(levelRole<=0xfa0)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4ea'))));else{if(levelRole<=0x1388)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x329'))));else{if(levelRole<=0x1770)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2fe'))));else{if(levelRole<=0x1b58)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40e'))));else{if(levelRole<=0x1f40)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x450'))));else{if(levelRole<=0x2328)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c5'))));else{if(levelRole<=0x2710)role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x39e'))));else levelRole<=0x174876e7ff&&(role=_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x1d5')))));}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}if(isCmd&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&!isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname));return;}if(isCmd&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname),'in',color(groupName));return;}if(isStMsg&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&!isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname));return;}if(isStMsg&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname),'in',color(groupName));return;}function _0x3cf5(){const _0x2071f6=['0x457','0x597','0x4a5','0x258','whatsapp.com','Mythic\x20IX\x20上帝','0x6c0','0x644','0x46f','0x5ad','0x3c6','0x2c6','0x3c2','0x2e0','588yrapMA','0x1b0','0x27e','0x286','0x2de','0x6c6','0x5a4','0x2c8','0x67b','0x345','0x65a','0x45a','0x45e','0x334','*\x0a*Offical\x20Bot\x20By\x20@','0x4a6','mytiktok','\x20from\x20','0x3e7','0x331','0x248','0x5f3','#izinadmin\x20diterima','shift','0x3dd','0x693','0x291','\x20🎉\x0a\x0a','0x5e9','audio','0x691','0x3ef','\x20Anda\x20sudah\x20vote','0x2b4','0x2d6','locationMessage','selesai','0x316','0x29e','0x315','0x2d2','0x699','•>\x20Lose\x20:\x20@','0x237','0x20c','.js','0x38b','0x2e2','0x566','0x290','0x473','0x21c','0x5d1','0x552','0x329','0x614','0x570','0x672','0x284','0x594','0x629','0x5f9','twitter','0x4f1','0x41f','5️⃣','0x56a','0x2c3','0x62e','0x241','End\x20level\x20程度❗','0x1d5','0x191','0x1bc','0x1c4','0x292','levelup','0x3cc','0x320','menu\x20jika\x20tombolnya\x20tidak\x20muncul_','*_🎮\x20Tebak\x20siapa\x20aku\x20\x20🎮_*\x0a\x0a**\x20*Jawaban\x20Benar🎉\x20*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','0x412','0x5ac','0x57c','0x265','0x600','0x4ba','0x373','0x4d9','orderId','0x492','0x58a','0x425','log','0x5fe','0x33d','0x21e','0x34e','0x537','0x22d','0x5f0','0x3f0','0x23f','0x578','0x5d9','0x63b','0x698','replace','0x27a','0x5e6','0x1e1','0x2c4','Daftar','0x476','0x350','1117986kJDBir','0x59e','0x6ac','0x53d','0x6a6','0x1ee','0x20a','0x544','0x3a0','0x2df','0x4ac','0x6eb','0x5df','0x3bc','0x489','0x69a','0x3f2','0x2c1','Nyerah','0x53f','0x3c5','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','Sergeant\x205\x20≣⁵','buttonsMessage','0x4eb','0x713','Commander\x20Elite\x20≛','0x1fa','0x310','0x616','0x706','0x386','0x66e','0x5d8','0x443','0x5c9','0x5b7','0x64b','0x41e','0x4a0','0x3de','0x559','0x5a3','0x313','0x23d','0x2e9','0x194','5151606rscKDL','0x569','0x216','💖💖💖💖💖💖💖💖💖💖','\x0aitem1.X-ABLabel:Creator\x20Bot\x20\x0aitem2.EMAIL;type=INTERNET:','|User:','0x3b4','♡\x20ㅤ\x20\u00a0\u00a0\x20❍ㅤ\u00a0\u00a0\x20\u00a0\x20\x20⎙ㅤ\u00a0\u00a0\u00a0\u00a0\u00a0⌲','0x346','0x272','0x682','0x66c','0x31e','0x344','0x2ce','0x395','vote','0x432','6126392KGayaF','1877176KmapHp','yellow','0x1c5','0x2c5','0x6aa','0x24f','0x64e','0x612','0x521','0x1dc','0x3ba','❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤','browserDescription','0x3da','0x434','Major\x20General\x20Platinum\x20✬','❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤','close','0x1d6','quotedMessage','0x6e5','0x322','0x55f','0x3b6','0x61d','0x647','💗💗💗💗💗💗💗💗💗💗','2nd\x20Lt.\x205\x20♢⁵','0x67f','0x6b3','0x422','0x4af','0x219','0x25e','\x20off','0x1ef','0x39d','0x405','0x6ad',')\x0a_fix\x20tictactoe_','0x4d0','0x5cf','Lt.\x20General\x20Diamond\x20✪','0x356','fdoc','0x298','audio/ogg;\x20codecs=opus','0x4e5','0x446','0x416','Lt.General\x20gold\x20✯','0x687','\x0a*Jumlah\x20Vote*\x20:\x20','updatePresence','0x421','0x427','0x3c4','6935679wOjhIY','0x4f4','*ERR:*\x20','0x3fa','0x5a1','0x2f3','0x2b5','0x5d6','0x43d','General\x20Platinum\x20✬','groupRemove','0x5eb','0x478','0x641','0x3fc','0x1b6','0x1f5','tebakgambar*','*admin\x20mah\x20bebas*','0x369','0x220','0x3ee','0x538','0x48b','0x45b','0x261','0x6e2','0x671','0x299','step','0x2b1','0x5bc','0x56b','unshift','0x586','endsWith','0x1cb','0x232','0x63d','Tiktok','3438616YMsRMI','1st\x20Lt.\x201\x20♢♢¹','0x259','B826873620DD5947E683E3ABE663F263','0x4c2','0x3eb','0x36d','0x674','0x397','T1PNoYwrqgwDVLtfmj7L5e0Sq02OEbqHPC8RFhICuUU=','0x4d8','0x2ac','0x6b1','0x6bc','0x244','error','0x6a1','Private\x205\x20⚌⁵','0x66f','0x1e6','1610993486','0x273','0x24c','0x253','0x3f7','0x6b7','224005JTnagC','0x4df','0x507','0x6ea','\x0aFN:WhatsApp\x0aitem1.TEL;waid=0:0\x0aitem1.X-ABLabel:Kang\x20Banned\x0aitem2.X-ABLabel:THANK\x20WhatsApp\x0aEND:VCARD','0x276','0x4ca','0x323','./strg/image/','0x58e','0x39e','0x694','0x2ee','Sergeant\x203\x20≣³','0x464','0x613','0x451','fkontak','0x6a3','0x1a6','0x1ad','0x2db','0x486','0x4d2','0x4e0','0x645','0x6d1','Sergeant\x202\x20≣²','enemy','0x2b7','0x6e9','0x28e','0x4f9','0x506','0x28b','0x6c7','0x479','0x561','0x447','Mythic\x20X\x20上帝','0x242','addFilter','mp4Audio','0x599','0x50e','0x5c0','0x2ca','\x20Vote\x0a*Durasi*\x20:\x20','fromMe','0x243','0x396','\x0a*Vote*\x20:\x20','nyerah','0x497','Major\x20General\x20gold\x20✯','now','0x410','0x64f','0x657','0x303','0x2b8','0x1f2','0x4dd','0x312','./database/bot/','0x454','0x2d3','0x4c0','0x5f2','remoteJid','0x1a7','2nd\x20Lt.\x202\x20♢²','0x711','Beginner\x202\x20⚊²','0x34b','0x225','0x44b','0x1c6','0x6cd','0x55a','0x567','0x70b','0x3b0','*「\x20KATA\x20TOXIC\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','0x40b','0x28a','0x3cb','0@s.whatsapp.net','0x1d0','0x5c8','0x411','0x697','0x1fc','0x56d','0x3e2','sendMessage','\x0aitem4.X-ABLabel:Youtube\x0aitem5.ADR:;;🇮🇩\x20Indonesia;;;;\x0aitem5.X-ABLabel:Region\x0aitem6.X-ABLabel:THANK\x20SIEGRIN\x0aEND:VCARD','0x1d3','Commander\x20Early\x20★','0x472','0x3f9','0x2aa','0x230','0x31b','toString','0x49c','0x61f','4️⃣','0x496','0x475','0x6f3','ffmpeg\x20-i\x20','50000000','0x2f4','0x1cc','0x626','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','0x1e4','0x1fb','0x1e8','0x3d4','0x42f','Major\x203\x20✷³','0x510','0x581','0x513','0x3e4','0x287','0x584','./database/group/tebaksiapaaku.json','@s.whatsapp.net','0x311','0x40c','0x579','0x32f','0x4e9','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','Major\x20General\x20Silver\x20✩','0x3d3','0x5b1','0x393','0x66a','0x60a','filter','mtype','key','0x355','0x224','./database/bot/vote/','./strg/video/','Hmm','0x62c','0x30a','0x213','0x532','0x707','0x61b','0x61e','0x656','0x394','0x38c','0x583','0x1eb','0x5d0','0x551','0x4e6','0x6dd','0x65c','/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46','0x471','0x254','0x2da','0x6dc','0x238','0x4e1','0x229','\x20🎉\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','0x4e7','0x624','0x508','\x0a\x0a•>\x20Win\x20:\x20@','Mythic\x20III\x20上帝','6️⃣','0x621','0x67e','WABot','0x495','donasi','0x5ce','board','0x1f4','\x0a\x0a•>\x20Lose\x20:\x20@','0x69f','ephemeralMessage','#izinadmin','0x4bc','10mPLbph','0x4b1','0x2cb','0x5ba','0x1ce','0x607','0x2ea','0x26c','0x43e','0x66d','0x1f9','0x2ed','0x709','0x45f','OFF','0x26d','0x6f7','0x4b5','0x533','0x245','0x26b','0x3d2','0x324','0x5ea','Colonel\x203\x20✷✷³','0x4c9','270291vGucRu','0x34c','0x1b3','stickerMessage','0x2d7','89CrIreG','hasOwnProperty','0x35c','0x33e','groupMetadata','0x4a7','0x1a9','jid','0x3e8','0x70e','❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤','0x6b8','0x255','Multi-Prefix','0x6b0','0x474','0x41a','0x519','0x1d9','0x31f','0x6de','0x5b3','0x325','🎮🎭\x20```TICTACTOE```\x20🎭🎮\x0a','🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤','0x679','0x2b2','\x20👻\x0a\x0a','Mythic\x20IV\x20上帝','Mythic\x20VIII\x20上帝','./database/bot/registered.json','0x6c1','0x61c','0x391','0x4d1','10000000000','then','\x0aitem1.TEL;waid=','Awakened\x20Mythic\x20特尔邦贡','0x27d','6289530298948-1604595598@g.us','0x1b4','0x5dd','quoted','0x6cc','head','readFileSync','Brigadier\x20Early\x20✰','0x6d8','0x6e3','0x4b0','.mp4','Mythic\x20II\x20上帝','Colonel\x201\x20✷✷¹','0x65b','0x1f3','admin\x20bebas\x20aowkwkww','0x51e','Staff\x202\x20﹀²','0x22b','150453297177375','0x36b','❤️❤️❤️❤️❤️❤️💔🖤🖤🖤}','0x6a5','0x4d5','0x5b5','0x4b6','0x28c','mode','0x608','0x477','0x5e4','0x338','0x343','0x3ed','0x6ba','0x6ee','0x526','0x2a3','💘💘💘💘💘💘💘💘💘💘','0x69c','0x5e2','red','•>\x20Draw\x20:\x20@','0x1af','0x6d0','0x565','0x55c','0x6be','0x64d','0x49f','0x1f1','0x6c8','0x260','0x2c9','0x4d6','0x4f6','0x2fc','0x208','0x45c','0x499','0x37f','0x283','0x3aa','0x25b','0x5db','0x456','0x439','0x1da','0x206','0x2a0','fvn','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','0x618','0x688','Klik\x20Untuk\x20Ke\x20Game\x20Selanjutnya','@g.us','0x547','\x20👻\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','0x285','0x6fd','0x43b','0x46e','0x367','0x4cc','0x5d4','0x52b','Corporal\x202\x20☰²','0x714','0x6f0','0x39c','headers','0x3f6','*BROADCAST*','0x593','0x38f','0x4b8','Legends\x20忍','0x3b8','0x2a5','0x4dc','0x1fd','0x56e','0x193','0x1bd','0x388','0x67a','0x233','0x32b','0x376','0x430','IDR','0x29a','0x47e','0x1d1','*Support\x20','simplemenu','0x5f5','0x1ba','0x200','0x59f','0x228','5602twAwAV','0x4e8','0x5c7','0x3b1','0x6d4','owner','split','0x712','❤️❤️💔🖤🖤🖤🖤🖤🖤🖤','0x53e','0x4b3','0x4f8','0x60b','0x5d3','1699480zXLNKv','0x3bf','0x20f','0x6a9','0x550','0x262','0x5af','0x19d','Brigadier\x20Diamond\x20✪','0x275','0x525','.exif','0x69d','0x3b2','0x462','0x6fb','0x5ef','0x41c','0x41b','0x4c4','0x3ad','0x494','0x26a','0x314','0x3e9','0x1a3','0x35d','0x353','0x64c','0x4a3','0x1bf','0x4cf','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:Dellas\x0aORG:\x20Dev\x20Bot\x0aTEL;type=CELL;type=VOICE;waid=6281224863098:6281224863098\x0aEND:VCARD','0x1b5','0x639','0x491','0x57d','0x3d0','application/vnd.openxmlformats-officedocument.wordprocessingml.document','0x575','280275NXseCX','0x638','0x548','0x3f5','0x1c8','0x419','0x1b1','writeFile','*Jaga\x20Ucapannya\x20Min😇*','0x53b','0x48e','0x603','existsSync','0x5c1','OWNER','0x29b','Sergeant\x201\x20︾¹','0x26e','0x650','0x6f1','0x58b','0x235','0x518','0x716','0x2fa','0x6ec','0x4d4','0x2d0','0x358','0x1f8','0x649','0x227','toFixed','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','0x2ab','Private\x202\x20⚌²','0x571','0x6d9','*Vote*\x20','.mp3','Whatsapp\x20Bot','0x642','0x539','0x6d5','0x52f','0x5e5','0x3ca','\x20🦁\x0a\x0a','Sergeant\x203\x20︾³','0x57a','0x59c','0x5e8','2nd\x20Lt.\x201\x20♢¹\x20','audioMessage','0x502','0x4db','0x680','audio/mp4','0x197','0x22f','0x433','0x585','0x546','0x573','0x20b','0x4ed','0x35f','fvideo','0x3c9','0x6ab','0x440','0x414','0x684','0x37b','lenght','0x192','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','0x330','0x668','1778784UxNkaB','Youtube','0x6e1','content-type','0x307','0x483','0x3a1','0x236','*「\x20VIRTEX\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','0x54e','0x48d','0x1b9','0x49e','0x5cc','0x198','0x622','0x5a5','0x5b0','gif','0x500','0x5f8','0x1c9',',;;;\x0aFN:','0x55d','0x22a','Colonel\x205\x20✷✷⁵','0x4fc','0x1f7','0x677','0x1ec','1088931RDfNWw','0x648','0x4b2','0x348','0x2ff','0x63f','0x281','result','0x52e','0x580','0x6a2','0x293','0x4ff','2017687YTXXec','0x460','0x68a','0x3ae','0x690','0x2fb','\x20Menyerah\x0a_Yahaha\x20cupu\x20abiez_','0x342','0x582','0x68c','./database/group/tebakcaklontong.json','0x4ab','0x1dd','black','0x50f','0x4b9','0x6f2','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','\x0a\x0a•>\x20Draw\x20:\x20@','0x21a','0x3b5','0x695','3️⃣','❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤','0x458','0x3b9','catch','0x288','0x418','0x701','0x512','0x1bb','0x5bf','0x5a7','0x1d4','0x21d','0x487','0x2e5','0x5ed','6003786OlKnCN','0x655','chat',',\x0aitem1.TEL;waid=','💝💝💝💝💝💝💝💝💝💝','0x6fc','0x56f','0x652','0x646','0x631','0x1a2','imageMessage','0x62b','0x5ec','0x553','0x3a4','0x3ac','0x327','0x3b7','*「\x20LINK\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','💔🖤🖤🖤🖤🖤🖤🖤🖤🖤','❤️❤️❤️❤️💔🖤🖤🖤🖤🖤','0x3a8','0x65f','0x1ac','Corporal\x201\x20☰¹','0x534','application/pdf','1️⃣','13936239TdZHzU','0x576','0x333','0x351','0x46a','reason','❤️❤️❤️❤️❤️❤️❤️❤️❤️💔','0x37e','0x50c','0x4a9','0x4f5','0x2c0','Message','ceil','0x5e1','orderMessage','./lib/temanye/','0x2be','0x5c5','0x623','0x441','writeFileSync','0x4f7','0x364','0x240','0x67d','status@broadcast','0x55b','hex','toLowerCase','0x337','0x318','0x199','0x444','Colonel\x204\x20✷✷⁴','./strg/sticker/','Beginner\x201\x20⚊¹','Runtime\x20','20TTduys','0x634','0x5ae','0x239','2nd\x20Lt.\x204\x20♢⁴','0x6df','0x558','0x277','0x256','0x4aa','0x4da','❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤','0x68b','0x1aa','0x25f','0x3df','.webp','Staff\x205\x20﹀⁵','./temp/','0x39a','0x44a','0x51d','0x3f8','0x33c','chats','0x530','0x3b3','0x54a','0x30d','0x678','0x5f1','0x516','0x605','0x31a','0x392','0x1be','0x610','_\x20*bro\x20maap\x20ni\x20bro\x20maap\x20banget\x20tapi\x20lu\x20bakal\x20dikick\x20dari\x20group\x20ini\x20bentar\x20lagi*','0x1d7','0x2eb','0x5de','0x61a','0x428','0x6fe','0x5a2','❤️❤️❤️❤️❤️❤️❤️💔🖤🖤','0x400','match','0x6fa','0x708','0x269','0x63a','pipe','0x436','0x503','•>\x20Win\x20:\x20@','4686111qPRhhC','0x42d','0x6da','.json','0x44e','image/','0x4cb','0x5c3','0x247','0x22c','0x6cf','0x5e0','0x297','0x335','MENU','1st\x20Lt.\x202\x20♢♢²','0x4d7','0x226','0x51b','0x4a8','0x215','0x4e4','0x4ef','0x50d','0x431','0x611','video','0x2f8','0x249','0x2e7','0x3a6','0x1cf','0x2ad','0x3a7','prepareMessageFromContent','4306tKrBqc','0x49a','0x211','0x5b2','「\x20*Game\x20Tictactoe\x20Rejected*\x20」\x0a\x0a•\x20@','0x70d','trim','0x37d','0x6f5','from','0x39b','0x689','0x231','0x32d','0x2f6','0x27f','0x4ea','uptime','\x0a\x20\x20\x20','0x4f2','0x65d','Lt.General\x20Early\x20✰','0x60f','0x27c','0x202','0x459','composing','0x654','0x2e3','0x515','Sergeant\x204\x20≣⁴','0x5c2','0x6e0','0x3d8','Bot','0x3ec','0x3e5','0x32a','0x46b','0x702','0x609','0x280','*❲\x20VERIFIKASI\x20SUKSES\x20❳*\x0a_ketik\x20','0x29c','0x703','0x3c3','0x692','0x2d4','0x47b','0x52c','❤️❤️❤️❤️❤️💔🖤🖤🖤🖤','0x32e','The\x20Commander\x20Hero\x20⍟','0x263','0x23e','0x50b','0x336','push','\x0a_ketik\x20nyerah\x20untuk\x20menyerah_','0x34f','0x212','0x540','0x4cd','0x190','_Klik\x20button\x20di\x20bawah\x20untuk\x20verifikasi\x20data_._Jika\x20tombolnya\x20gak\x20muncul\x20ketik\x20aja\x20','0x4a1','0x23b','0x2b0','0x1b7','0x51f','0x6a0','0x536','0x630','0x662','0x4c3','❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤','*\x0a*Powered\x20By\x20@','0x696','includes','done','0x28f','4mWPcLp','0x1a1','1381046EVmoUW','Colonel\x202\x20✷✷²','0x619','0x1e9','0x2bb','General\x20Silver\x20✩','0x4c8','0x6f9','devote','0x371','0x384','console','0x196','0x362','168ccQJOp','0x5fa','*_🎮\x20Tebak\x20Gambar\x20\x20🎮_*\x0a\x0a*Jawaban\x20Benar🎉*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','0x34a','durasi','0x2cf','0x3c8','6289530298948@s.whatsapp.net','0x2b6','stringify','0x482','0x1f6','0x38a','parse','./strg/audio/','0x2d8','0x6f4','0x40e','0x43a','Major\x202\x20✷²','0x415','0x24a','0x651','0x604','0x43c','0x4ec','delete','0x6bb','0x6ae','0x1ed','0x5b4','0x308','Game\x20telah\x20dimulai\x20sebelumnya!','0x541','0x6a7','image/gif','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','0x3cd','0x328','0x3c1','0x59a','0x469','0x4ae','0x5f4','0x5d7','0x268','0x45d','\x0aitem2.X-ABLabel:Email\x0aitem4.URL:','0x32c','0x413','0x5fd','Beginner\x204\x20⚊⁴','0x204','INQUIRY','9️⃣','Angka\x20','0x3e6','0x2ba','0x6bd','0x1ea','chatRead','0x4d3','0x3d1','3883413bHDrUu','votes','0x368','0x4bf','0x24d','0x19e','gUfwVzg4DI47bHgCpoNnxGs7CLltWZa4YohJOekAclg=','Private\x203\x20⚌³','Sergeant\x202\x20︾²','0x3d6','0x222','0x29d','0x557','0x1b2','0x2f0','0x40f','0x445','0x717','extendedTextMessage','0x498','0x366','0x357','0x1a8','0x5f7','General\x20Early\x20✰','0x481','0x484','0x48a','0x363','modifyChat','0x406','OWner\x20','0x279','|Server:','0x60e','0x37c','Media\x20Sosial','6289530298948-1613049930@g.us','0x665','Private\x201\x20⚌¹','0x5be','0x407','0x3c0','https://mmg.whatsapp.net/d/f/AsO5KpESy9E0WI72xEVp65rx505bQxvuIma79L8Ue076.enc','0x531','2️⃣','0x6c5','0x354','0x6c3','0x4c5','0x4fb','0x455','1634472176','0x1c2','voting','0x37a','0x3a5','0x628','Beginner\x203\x20⚊³','0x3e3','0x5b8','❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤','0x595','0x470','0x1a4','❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤','0x57f','unlinkSync','0x24e','0x5dc','0x556','0x6a8','0x69e','0x3be','0x39f','0x379','0x6c4','0x2b3','0x2f7','0x5e7','0x663','0x6af','0x321','0x38e','❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤','0x577','0x718','0x20e','0x2a1','0x24b','0x2f2','0x543','0x2a4','0x306','0x302','0x542','0x19b','0x615','0x389','0x53a','0x1ca','0x568','0x3bd','0x6b5','0x1db','0x3fd','Major\x20General\x20Early\x20✰','0x3fe','0x70a','0x560','contextInfo','[REGISTER]','0x47f','0x2a2','0x3d9','productMessage','0x2e8','💛💛💛💛💛💛💛💛💛💛','contactMessage','0x35a','->[EXEC]:\x20','0x2ec','0x221','Major\x205\x20✷⁵','0x48c','0x372','0x461','0x4e2','0x42b','0x5e3','0x438','Staff\x201\x20﹀¹','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','0x6e8','0x524','0x57e','0x437','0x4fa','❤️❤️❤️❤️❤️❤️❤️❤️💔🖤','0x681','Staff\x203\x20﹀³','concat','fgif','0x21f','0x4f0','0x424','0x659','0x3af','0x5a0','0x207','0x1e5','0x640','0x704','Commander\x20Intermediate\x20⍣','0x637','Name:','8315255ddTNjj','0x31c','0x47c','balasan','0x588','./stik','participant','0x63c','0x332','0x44d','0x58f','*[\x20REGISTER\x20]*\x0a@','Sergeant\x204\x20︾⁴','0x2bf','0x6cb','10XOhUQj','0x5d5','0x301','0x5ff','1st\x20Lt.\x204\x20♢♢⁴','0x6d3','6283136505591-1614953337@g.us','0x1de','0x463','0x685','0x47a','0x23c','floc','0x36f','DOCUMENT','0x1d8','0x1ff','0x632','0x490','0x33f','PHOTO','0x38d','0x58d','0x50a','0x2fd','0x661','setStatus','0x3ea','left','🎮🎭\x20```TICTACTOE```\x20🎭🎮\x0a•>\x20Player\x201\x20:\x20@','0x401','0x488','0x420','0x57b','Sergeant\x205\x20︾⁵','0x2bd','0x67c','0x1d2','0x5bb','daftar','0x710','0x590','CATALOG','0x522','0x25d','0x210','12044921lnkcSV','0x257','12781184lTwyRb','mentionedJid','0x6b2','pow','0x19f','0x339','0x4fe','Sergeant\x201\x20≣¹','0x643','0x4a2','ftroli','0x70f','703014snFJPz','0x365','0x33a','application/vnd.openxmlformats-officedocument.presentationml.presentation','0x602','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','0x4ce','0x1cd','0x25a','0x46c','0x683','0x3ce','0x715','0x378','0x404','\x20on','8️⃣','0x562','0x60d','0x1c1','0x5aa','AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==','0x5b9','0x4c1','.jpeg','0x214','0x574','0x48f','0x5da','0x30b','0x633','0x2dd','0x467','1077PmLgby','0x1b8','\x20_Second_','0x218','0x1f0','0x2f9','0x1df','0x3bb','0x501','0x2af','0x587','0x56c','0x535','0x252','daftar_','0x617','0x670','0x68e','0x382','Brigadier\x20Silver\x20✩','blue','0x295','0x6e4','0x377','0x5a9','alloc','0x423','0x30e','0x54b','0x4ad','0x468','0x417','0x62a','0x54d','0x6ed','4200cTshGI','6285751056816@s.whatsapp.net','Staff\x204\x20﹀⁴','0x375','0x205','0x4c7','0x296','0x22e','0x304','0x426','0x35e','0x3c7','❤️❤️❤️💔🖤🖤🖤🖤🖤🖤','0x5cb','say','0x6c9','0x46d','0x606','recording','0x209','0x309','0x6f6','0x528','0x636','0x3f4','0x44c','0x6f8','0x51c','0x589','|Server\x20Name:','0x2a6','0x620','Mythic\x20V\x20上帝','0x36c','location','0x217','❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️','0x504','0x549','0x5fb','0x509','DAFTAR','0x1fe','\x20telah\x20diisi','Twitter','0x403','2nd\x20Lt.\x203\x20♢³','0x34d','application/octet-stream','0x5ee','registered.json','0x3e0','0x223','status','0x635','createWriteStream','relayWAMessage','0x5ab','0x409','0x545','0x370','image/jpeg','isBaileys','0x493','0x294','0x402','0x42c','7️⃣','0x2a8','Brigadier\x20gold\x20✯','0x361','0x60c','0x43f','0x65e','0x49b','0x572','0x203','0x658','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','0x53c','0x660','cyan','0x47d','Developer\x20','0x26f','0x442','fgclink','0x6ef','0x271','0x5cd','0x563','true','0x27b','0x4e3','0x250','white','0x627','random','0x669','0x62f','0x2dc','Lt.General\x20Platinum\x20✬','0x514','0x35b','0x675','0x341','\x20🐯\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','0x4bd','0x33b','Mythic\x20VII\x20上帝','0x1e2','0x453','0x69b','0x6b9','text','0x4be','0x591','0x2cd','0x2b9','floor','\x20in\x20','0x2a9','0x529','5605RDXeuE','0x598','13937HXqzNk','0x601','s.whatsapp.net','Private\x204\x20⚌⁴','0x40a','listMessage','0x270','0x360','0x452','0x278','0x1c7','0x23a','Mythic\x20I\x20上帝','0x42a','0x6ff','0x25c','♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️','0x195','0x6db','0x3d5','0x667','0x40d','Major\x201\x20✷¹','0x30c','0x1ab','0x68d','0x51a','0x673','0x6d7','0x2a7','Major\x204\x20✷⁴','0x676','0x6ca','0x54f','0x517','Major\x20General\x20Diamond\x20✪','0x326','0x3fb','0x42e','0x28d','0x4bb','token','0x2e1','0x5a6','0x449','0x6bf','0x234','3148YVHbBg','0x5b6','0x6d2','0x408','99999','0x390','0x664','0x52d','sticker','💓💓💓💓💓💓💓💓💓💓','0x3e1','0x6c2','0x387','0x705','0x2d5','isFiltered','m4cjAB9A2dg7YcNJOxfB5PuTxv5Nip4B6mHh9glp6w8=','467ssvmNZ','0x686','0x1a5','0x527','0x2e6','TRY\x20AGAIN','0x398','0x3dc','0x485','0x62d','0x2cc','0x1ae','28777','0x1e0','0x70c','0x3f3','0x6e7','0x266','0x274','./database/group/tebakgambar.json','0x41d','0x58c','0x435','0x349','Brigadier\x20Platinum\x20✬','0x592','0x3a2','0x2fe','0x466','6288213840883-1616169743@g.us','0x5fc','0x381','g.us','0x4ee','0x3ab','0x554','General\x20Diamond\x20✪','0x2d9','0x5d2','0x6b6','VERIFIKASI','0x251','0x625','*_🎮\x20Tebak\x20Cak\x20Lontong\x20\x20🎮_*\x0a\x0a*Jawaban\x20Benar🎉*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','0x3db','Corporal\x205\x20☰⁵','message','0x59b','0x347','0x3f1','0x399','0x1a0','0x44f','\x20Menit\x0a\x0a','0x19a','0x300','0x64a','0x2f1','0x317','General\x20gold\x20✯','0x1c0','0x6a4','0x2c7','0x59d','0x21b','0x480','0x4de','0x52a','1444030usmWZr','0x5c6','0x2ef','0x523','0x267','0x429','0x383','0x4fd','Lt.General\x20Silver\x20✩','0x6ce','array','0x54c','./database/bot/tictactoe.json','0x465','pesan','0x246','0x3d7','❤️💔🖤🖤🖤🖤🖤🖤🖤🖤','0x36e','0x555','0x305','0x55e','0x30f','174238614569481','0x505','0x3a9','Corporal\x203\x20☰³','0x4f3','0x5a8','.png','0x31d','1st\x20Lt.\x203\x20♢♢³','0x2c2','0x6e6','\x0aFN:','0x319','0x340','[SPAM]','0x2d1','Corporal\x204\x20☰⁴','0x3cf','0x66b','0x4b7','0x49d','0x666','0x700','0x1c3','0x564','0x289','0x2f5','length','0x359','documentMessage','0x2bc','limitend','0x380','\x0a\x0a*Alasan*:\x20','\x20yahaha\x20cupu\x20lo','\x0a\x0a•>\x20Player\x202\x20:\x20@','0x68f','Newbie\x20㋡','0x6b4','0x19c','0x63e','0x520','Developer\x20Bot','0x511','0x6d6','0x20d','videoMessage','green','0x3ff','0x29f','0x5ca','0x282','0x4b4','0x2e4','0x5c4','0x596','0x653','0x264','map','0x448','0x5f6','youtube','1st\x20Lt.\x205\x20♢♢⁵','prepareMessage','0x1e3','0x4a4','0x450','0x374','0x1e7','0x3a3','0x4c6','0x2ae','0x352','0x385','0x36a','0x5bd','0x201'];_0x3cf5=function(){return _0x2071f6;};return _0x3cf5();}if(isbuttonCmd&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&!isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname));return;}if(isbuttonCmd&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname),'in',color(groupName));return;}if(islistCmd&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&!isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname));return;}if(islistCmd&&!isOwner&&msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x40d'))))](from)&&isGroup){console[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x852'))))](color(_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x73e')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623'))))),color(time,_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))),color(command+'\x20['+args[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))]+']'),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6d4')))),color(pushname),'in',color(groupName));return;}colors=[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x89a')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3d5')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x489')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4b7'))))];const isMedia=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x318'))))||type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4f7')))),isQuotedImage=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x318'))))),isQuotedVideo=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4f7'))))),isQuotedAudio=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x6e1'))))),isQuotedSticker=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x570'))))),isQuotedLoca=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x36f'))))),isQuotedContact=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2e3'))))),isQuotedDocs=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4c2'))))),isQuotedTeks=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x43f'))))),isQuotedTag=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x250'))))),isQuotedProd=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5e7'))))),isQuotedReply=type===_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x60e'))))&&content[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x267'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5c6')))));if(!isGroup&&isCmd)CFonts[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2eb'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x76c'))))+command+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4df'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0],{'font':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f5')))),'align':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f2')))),'gradient':[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x89a')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x5cf'))))]});if(isCmd&&isGroup)CFonts[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2eb'))))](_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x76c'))))+command+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x4df'))))+sender[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x3e6'))))]('@')[0x0]+_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x254'))))+groupName,{'font':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f5')))),'align':_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7f2')))),'gradient':[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x623')))),_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x489'))))]});if(!isOwner&&!isPremium&&banChats===!![])return;if(isCmd&&!isOwner)msgFilter[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x764'))))](from);function addMetadata(_0xc7bafb,_0x5f89e1){const _0x4df631=_0x4235a0,_0x3ee9d5=_0xc5f37,_0x3d29f1=_0x399b48,_0x577264=_0x14dae3;if(!_0xc7bafb)_0xc7bafb=_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x46e'))));if(!_0x5f89e1)_0x5f89e1=_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x65e'))));_0x5f89e1=_0x5f89e1[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x782'))))](/[^a-zA-Z0-9]/g,'');let _0x4008aa=_0x5f89e1+'_'+_0xc7bafb;if(fs[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x2d1'))))](_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x401'))))+_0x4008aa+_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x7cd'))))))return _0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x401'))))+_0x4008aa+_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x7cd'))));const _0x2ee8fc={'sticker-pack-name':_0xc7bafb,'sticker-pack-publisher':_0x5f89e1},_0x2fd200=Buffer[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x6d4'))))]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0]),_0x2fee76=[0x0,0x0,0x16,0x0,0x0,0x0];let _0x4ab2ad=JSON[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x3ee'))))](_0x2ee8fc)[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x2b1'))))],_0xd22a51;_0x4ab2ad>0x100?(_0x4ab2ad=_0x4ab2ad-0x100,_0x2fee76[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x859'))))](0x1)):_0x2fee76[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x859'))))](0x0),_0x4ab2ad<0x10?(_0xd22a51=_0x4ab2ad[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x73b'))))](0x10),_0xd22a51='0'+_0x4ab2ad):_0xd22a51=_0x4ab2ad[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x73b'))))](0x10);const _0x437525=Buffer[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x6d4'))))](_0xd22a51,_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x1e9'))))),_0x140908=Buffer[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x6d4'))))](_0x2fee76),_0x236493=Buffer[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x6d4'))))](JSON[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x3ee'))))](_0x2ee8fc)),_0x2909cc=Buffer[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x70f'))))]([_0x2fd200,_0x437525,_0x140908,_0x236493]);fs[_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x5e5'))))](_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x401'))))+_0x4008aa+_0x577264(_0x3d29f1(_0x3ee9d5(_0x4df631('0x7cd')))),_0x2909cc,_0x2265a2=>{const _0x4efb4c=_0x4df631,_0x539849=_0x3ee9d5,_0x304d49=_0x3d29f1,_0x559f40=_0x577264;return _0x559f40(_0x304d49(_0x539849(_0x4efb4c('0x401'))))+_0x4008aa+_0x559f40(_0x304d49(_0x539849(_0x4efb4c('0x7cd'))));});}const count11=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count1=count11*0x1,count22=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count2=count22*0x1,count33=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count3=count33*0x1,count44=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count4=count44*0x1,count55=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count5=count55*0x1,count66=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count6=count66*0x1,count77=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count7=count77*0x1,count88=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count8=count88*0x1,count99=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count9=count99*0x1,count100=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count10=count100*0x1,count111=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count110=count111*0x1,count112=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count12=count112*0x1,count113=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count13=count113*0x1,count114=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count14=count114*0x1,count115=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count15=count115*0x1,count116=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count16=count116*0x1,count117=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count17=count117*0x1,count118=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count18=count118*0x1,count119=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count19=count119*0x1,count2OO=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count20=count2OO*0x1,count2O1=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count21=count2O1*0x1,count2O2=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count222=count2O2*0x1,count2O3=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count23=count2O3*0x1,count2O4=dungeonpoint[Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2a4'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*dungeonpoint[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x2b1'))))])],count24=count2O4*0x1,getexp=Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x328'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*0x64),getmoney=Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x328'))))](Math[_0x14dae3(_0x399b48(_0xc5f37(_0x4235a0('0x7e0'))))]()*0x1e);

switch (command) { 	
case 'addcmd': 
case 'setcmd':
case 'cmd':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (isQuotedSticker) {
if (!q) return reply(`Kirim/Reply sticker dengan caption ${prefix+command} command yang ingin di tambahkan`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
addCmd(kodenya, q)
replysticker(successtc)
} else {
reply(`Kirim/Reply sticker dengan caption ${prefix+command} command yang ingin di tambahkan`)
}
break
case 'delcmd':
case 'uncmd':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc) 
if (!isQuotedSticker) return reply(`Example : ${command} tag stickernya`)
var kodenya = mek.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
 scommand.splice(getCommandPosition(kodenya), 1)
fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(scommand))
replysticker(successtc)
break
case 'addpremium':
case 'premium':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const addpremiumbotaa = `${args[0].replace("@", '')}@s.whatsapp.net`
prem.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
replysticker(successtc)
break
case 'addpremium':
case 'premium':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const addpremiumbot = `${args[0].replace("@", '')}@s.whatsapp.net`
prem.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
fs.writeFileSync('./database/user/premium.json', JSON.stringify(prem))
replysticker(successtc)
break
case 'delpremium':
case 'unpremium':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const delpremiumbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = prem
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === delpremiumbot) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/user/premium.json',JSON.stringify(arr))}}
replysticker(successtc)
break
case 'addblock':
case 'block':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const blockbot = `${args[0].replace("@", '')}@s.whatsapp.net`
client.blockUser(`${args[0].replace("@", '')}@c.us`, "add")
blocked.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
replysticker(successtc)
break
case 'delblock':
case 'unblock':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
const unblockbot = `${args[0].replace("@", '')}@s.whatsapp.net`
var arr = blocked
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === unblockbot) { 
arr.splice(dp, 1); 
dp--;}}
client.blockUser(`${args[0].replace("@", '')}@c.us`, "remove")
replysticker(successtc)
break
case 'addbadword': 
case 'badword':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix}addbadword tolol`)
const bw =  args.join(" ")
bad.push(bw)
fs.writeFileSync('./database/group/bad.json', JSON.stringify(bad))
replysticker(successtc)
break
 case 'delbadword':
 case 'ubadword':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
 if (args.length < 1) return reply( `Ketik ${prefix}addbadword [kata kasar]. contoh ${prefix+command} tolol`)
 const bwd =  args.join(" ") 
 var arr = bad
for( var dp = 0; dp < arr.length; dp++){ 
if ( arr[dp] === bwd) { 
arr.splice(dp, 1); 
dp--; 
fs.writeFileSync('./database/group/bad.json',JSON.stringify(arr))}}
replysticker(successtc)
break


//===============================================================================//

case 'addsticker':
case 'addstick':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedSticker) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang ingin ditambahkan ke database`)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang ingin ditambahkan ke database`)
wanu = setiker.indexOf(q)
if (!wanu) return reply(`sticker sudah ada didatabase silahkan cek dengan cara ${prefix}liststicker`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
setiker.push(`${q}`)
fs.writeFileSync(`./strg/sticker/${q}.webp`, delb)
fs.writeFileSync(`./strg/stik.json`, JSON.stringify(setiker))
replysticker(successtc)
break
case 'addvn': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedAudio) return reply(`Kirim teks dengan caption ${prefix+command} audio yang ingin ditambahkan ke database`)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} audio yang ingin ditambahkan ke database`)
wanu = audionye.indexOf(q)
if (!wanu) return reply(`audio sudah ada didatabase silahkan cek dengan cara ${prefix}listvn`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
audionye.push(`${q}`)
fs.writeFileSync(`./strg/audio/${q}.mp3`, delb)
fs.writeFileSync('./strg/audio.json', JSON.stringify(audionye))
replysticker(successtc)
break
case 'addimg':
case 'addimage':  // Fix Bug By Luc
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply(`Kirim teks dengan caption ${prefix+command} image yang ingin ditambahkan ke database`)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} image yang ingin ditambahkan ke database`)
wanu = imagenye.indexOf(q)
if (!wanu) return reply(`image sudah ada didatabase silahkan cek dengan cara ${prefix}listimg`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
imagenye.push(`${q}`)
fs.writeFileSync(`./strg/image/${q}.jpeg`, delb)
fs.writeFileSync('./strg/image.json', JSON.stringify(imagenye))
replysticker(successtc)
break
case 'addvideo':  // Fix Bug By Luc
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedVideo) return reply(`Kirim teks dengan caption ${prefix+command} video yang ingin ditambahkan ke database`)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} video yang ingin ditambahkan ke database`)
wanu = videonye.indexOf(q)
if (!wanu) return reply(`video sudah ada didatabase silahkan cek dengan cara ${prefix}listimg`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
videonye.push(`${q}`)
fs.writeFileSync(`./strg/video/${q}.mp4`, delb)
fs.writeFileSync('./strg/video.json', JSON.stringify(videonye))
replysticker(successtc)
break


//===============================================================================//

				case 'delsticker':
				case 'delstick': 
				case 'delstiker': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang ingin dihapus dari database`)
					wanu = setiker.indexOf(q)
					 if (wanu) return reply(`sticker tidak ada didatabase silahkan cek dengan cara ${prefix}liststicker`)
					 setiker.splice(q, 1)
					 fs.unlinkSync(`./strg/sticker/${q}.webp`)
					 replysticker(successtc)
					break
					case 'delvn':
					if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} audio yang ingin dihapus dari database`)
					wanu = audionye.indexOf(q)
					 if (wanu) return reply(`audio tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
					 audionye.splice(q, 1)
					 fs.unlinkSync(`./strg/audio/${q}.mp3`)
					 replysticker(successtc)
					break
				case 'delimage':
				case 'delimg':
				if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} image yang ingin dihapus dari database`)
					 wanu = imagenye.indexOf(q)
					 if (wanu) return reply(`Image tidak ada didatabase silahkan cek dengan cara ${prefix}listimg`)
					 imagenye.splice(q, 1)
					 fs.unlinkSync(`./strg/image/${q}.jpeg`)
					 replysticker(successtc)
					break
					case 'delvideo':
				if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} video yang ingin dihapus dari database`)
					wanu = videonye.indexOf(q)
					 if (wanu) return reply(`video tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
					 videonye.splice(q, 1)
					 fs.unlinkSync(`./strg/video/${q}.mp4`)
					 replysticker(successtc)
					break
					

//===============================================================================//					
					
case 'chsticker':  
case 'chstick':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang ingin diganti dari database`)
wanu = setiker.indexOf(q)
if (wanu) return reply(`sticker tidak ada didatabase silahkan cek dengan cara ${prefix}liststicker`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./strg/sticker/${q}.webp`, delb)
replysticker(successtc)
break
case 'chimage':  
case 'chimg':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply(`Kirim teks dengan caption ${prefix+command} image yang ingin diganti dari database`)
wanu = imagenye.indexOf(q)
if (wanu) return reply(`image tidak ada didatabase silahkan cek dengan cara ${prefix}listimg`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./strg/image/${q}.jpeg`, delb)
replysticker(successtc)
break
case 'chvn':  
case 'chaudio':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply(`Kirim teks dengan caption ${prefix+command} audio yang ingin diganti dari database`)
wanu = audionye.indexOf(q)
if (wanu) return reply(`audio tidak ada didatabase silahkan cek dengan cara ${prefix}listvn`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./strg/audio/${q}.mp3`, delb)
replysticker(successtc)
break
case 'chvideo':  
case 'chvid':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!isQuotedImage) return reply(`Kirim teks dengan caption ${prefix+command} video yang ingin diganti dari database`)
wanu = videonye.indexOf(q)
if (wanu) return reply(`video tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./strg/video/${q}.mp4`, delb)
replysticker(successtc)
break

//===============================================================================//
	
case 'readall':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
 var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid)
})
replysticker(successtc)
break
case 'mute':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
replysticker(successtc)
break
 case 'unmute':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unmute)
replysticker(successtc)
break
case 'unpin':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unpin)
replysticker(successtc)
break	   	
 case 'pin':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.pin)
replysticker(successtc)
break
 case 'unreadall':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid, 'unread')
})
replysticker(successtc)
break
case 'unarchive':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
anu = await client.chats.all()
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.unarchive)
}
break
case 'archive':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
await sleep(3000)
client.modifyChat(from, ChatModification.archive)
break
case 'delpc':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
await sleep(4000)
client.modifyChat(from, ChatModification.delete)
break	
case 'clearall':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await client.chats.all()
client.setMaxListeners(100)
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.delete)
}
replysticker(successtc)
break
case 'kickall':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isOwner) return replysticker(ownerstc)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `*😘* ${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
await client.groupRemove(from, members_id)
break

//===============================================================================//

case 'listcmd':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
let teksnyee = `*LIST STICKER CMD*`
let cemde1 = [];
for (let i of scommand) {
cemde1.push(i.id)
teksnyee += `\n\n*•> ID :* ${i.id}\n*•> Cmd :* ${i.chats}`
}
sendButtonImageLoc(from, buttonshello, teksnyee, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'listrespon':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
let teksnyeee = `*LIST RESPON CMD*`
let rcemde1 = [];
for (let i of commandsrespon) {
rcemde1.push(i.pesan)
teksnyeee += `\n\n*•> ID :* ${i.pesan}\n*•> Cmd :* ${i.balasan}`
}
sendButtonImageLoc(from, buttonshello, teksnyeee, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
//===============================================================================//
case 'rdpstore':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
buf = fs.readFileSync(`src/pixelartbim.jpeg`)
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: buf}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `WELCOME TO STORE`, 
"description": ind.rdpstore(),
"currencyCode": "IDR",
"priceAmount1000": "2000000",
'salePriceAmount1000':"5000000",
"productImageCount": 1,
'url': `wa.me/6289530298948`
},
"businessOwnerJid": "6289530298948@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, ow, dev]}}) 

client.relayWAMessage(res)
break
case 'store1':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
buf = fs.readFileSync(`src/pixelartbim.jpeg`)
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: buf}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `WELCOME TO STORE`, 
"description": ind.store1(prefix, dev, numbernye),
"currencyCode": "IDR",
"priceAmount1000": "2000000",
'salePriceAmount1000':"5000000",
"productImageCount": 1,
'url': `wa.me/6281214920977`
},
"businessOwnerJid": "6289530298948@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, ow, dev]}}) 

client.relayWAMessage(res)
break
case 'store2':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.store2()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'store3':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
imeu = await client.prepareMessage('0@s.whatsapp.net', WMthumb, image, {thumbnail: WMthumb}) 
imeg = imeu.message.imageMessage
sendCatalogMenu(ind.growtopiashop(prefix), imeg)
break
case 'topupefef':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmefef()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topupml':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmml()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topupdomino':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmdomino()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topuphago':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmhago()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topupgarena':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmgarena()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topuppb':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmpb()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topupcod':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmcod()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'topuppubg':
if (isBanned) return replysticker(banstc)
if (!isRegistered)if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
sendButtonImageLoc(from, buttonshello, ind.dmpubg()+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'contributor':
case 'support':
case 'developer':
case 'team':
case 'author':
case 'dev':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}  
if (isBanned) return replysticker(banstc) 
client.sendMessage(from, {
"displayName": "2 kontak",
"contacts": contri1 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'owner':
case 'creator':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
client.sendMessage(from, {
"displayName": "5 Contact",
"contacts": contrii 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'myyoutube':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${myyoutube}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'mytwitter':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${mytwitter}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'mytiktok':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${mytiktok}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'sc':
case 'sc':
case 'scbot':
case 'source':
case 'sourcecode':
case 'esce':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `Source Code Bot : ${github}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case'runtime':
case'run':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
run = process.uptime() 
sendButtonImageLoc(from, `${kyun(run)}`, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'bahasa':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.bahasa()+support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'donasi':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from,  buttonshello, ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening)+support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'rules':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.rules(player, hahh, dev, numbernye)+support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'gcbot':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.gcofficial(player, hahh, dev, numbernye)+support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break 
case'speed':
case'ping':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
const timestamp = speed();
const latensi = speed() - timestamp
exec(`neofetch --stdout`, (error, stdout, stderr) => {
const child = stdout.toString('utf-8')
const teks = child.replace(/Memory:/, "Ram:")
const pingnya = `*${teks}Speed: ${latensi.toFixed(4)} Second*`
sendButtonImageLoc(from, pingnya, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
})
break  
case 'wa.me':
case 'wame':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return reply(ind.baned())
sendButtonImageLoc(from, `*Link WhatsApp-Mu :* *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break		
case 'request':
case 'laporan':
case 'bugreport':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} request yang di ingin`)
var nomor = mek.participant
const ress = `*Nomor :@${player.split("@")[0]}*\nPesan : ${q}`
var options = {
text: ress,
contextInfo: {mentionedJid: [nomor]},
}
client.sendMessage(ow, options, text, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: 999,status: 200, thumbnail: buffer, surface: 200, message: `LAPORAN BWANG`, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}}, contextInfo :{sendEphemeral: true, mentionedJid: [player, dev]}})
reply(`*REQUEST ANDA TELAH SAMPAI KE OWNER*`)
break
case 'profile':
case 'profil':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (database === false) {return replysticker(fnaktifstc)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
anu = from
		if (`${anu}@s.whatsapp.net`)
				try {
				ppnu = await client.getProfilePicture(anu)
} catch {
ppnu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppnu)

const profilec = await client.prepareMessage(from, buffer, MessageType.location, {thumbnail: buffer})

let ppmu = profilec.message["ephemeralMessage"] ? profilec.message.ephemeralMessage : profilec
{
const buttons= [
  {buttonId: `menu`, buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: `inventory`, buttonText: {displayText: 'INVENTORY'}, type: 1},
]
const buttonMessage = {
    contentText: `╭─「 *PROFILE ANDA* 」\n│• *Name:* ${pushname}\n│• *XP:* ${getLevelingXp(sender)}\n│• *Level:* ${getLevelingLevel(sender)}\n│• *User Terdaftar:* ✓\n│• *Link:* wa.me/${sender.split("@")[0]}\n╰──────────────────`,
	footerText:support,
    buttons: buttons,
    headerType: 6, 
	locationMessage: ppmu.message.locationMessage
}
client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [sender, numbernye, dev, ow]}})
}
break
case 'blocklist': 
case 'listblock': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*BLOCKLIST:*\n'
for (let block of blocked) {
teks += `├❏@${block.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": blocked}})
break 
case 'premiumlist':
case 'listpremium':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*PREMIUM LIST* :\n'
for (let premm of prem) {
teks += `├❏ @${premm.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${prem.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": prem}})
break 
case 'listbadword':
case 'badwordlist':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
let lbw = `*BAD WORD LIST*\n`
for (let i of bad) {
 lbw += `├❏ ${i.replace(bad)}\n`
}
teks += `└❏ *Total:* ${bad.length}`
client.sendMessage(from, lbw.trim(), extendedText, {quoted:fdoc})
break
case 'liststiker':
case 'liststicker':
case 'liststc':
case 'stikerlist':
case 'stickerlist':
case 'stclist':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*Sticker list :*\n\n'
for (let awokwkwk of setiker) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${setiker.length}*\n\n_Untuk mengambil sticker silahkan reply pesan ini dengan caption nama sticker_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": setiker } })
break
case 'videolist':
case 'listvideo':
case 'listvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*List Video :*\n\n'
for (let awokwkwk of videonye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${videonye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption nama video_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": videonye } })
break
case 'listimage':
case 'imagelist':
case 'listimg':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*List Image :*\n\n'
for (let awokwkwk of imagenye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${imagenye.length}* \n\n_Untuk mengambil video silahkan reply pesan ini dengan caption nama image_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": imagenye }, thumbnail: Buffer.alloc(0)})
break
case 'listvn':
case 'vnlist':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${audionye.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama audio_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": audionye } })
break
case 'imunevirtex':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, antivirtexx(), support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'jadibot':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, `Mau jadi bot beli jasan run bot ketik aja owner lalu chat, bisa set bot semaumu`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'mystatus':             
case 'status':
case 'mystat':
case 'botstat':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)	
anu = process.uptime()
fkhs = sender
teks = `*STATUS BOT*
*TANGGAL :*  ${time}
*WIB :*  ${wib}
*WITA :*  ${wita}
*WIT :*  ${wit}

*Server Name :*  ${client.browserDescription[0]}
*Server :*  ${client.browserDescription[1]}
*Prefix :*  ${prefix}

*Battery :*  ${baterai}
*Charger :*  ${charging == true ? "ON" : "OFF"}
*Wa Version :*  ${wa_version}
*Merk HP :*  ${device_manufacturer}
*OS Build Number :*  ${os_build_number}
*Versi OS :*  ${os_version}
*RAM :* ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB
*Versi HP :*  ${device_model}
*MCC :*  ${mcc}
*MNC :*  ${mnc}

*Dev :*  @${dev.split("@")[0]}
*Owner :*  @${ow.split("@")[0]}
*Whatsapp :*  ${wa_version}
*Blockir :*  ${blocked.length} Blocked
*Group Chat :*  ${totalgroup.length} Chat
*Personal Chat :*  ${totalkontak.length} Chat
*Total Chat :*  ${totalchat.length} Chat
*Total User :*  ${_registered.length}
*Hit Today :*  ${luchit} Hit
*Total Hit :*  ${totalhit} Chat
*Speed :*  ${latensii.toFixed(4)} Second
*Runtime :*  ${kyun(anu)}

*Mode :* ${banChats ? "SELF" : "PUBLIC"}
*Auto Read Pc :* ${readP ? "ON" : "OFF"}\n`
sendButtonImageLoc(from, buttonshello, teks+support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break

//===============================================================================//

case 'banchat':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === "on") {
if (isMuted) return  replysticker(faktifstc)
mute.push(from)
fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
replysticker(successtc)
} else if (args[0] === "off") {
if (!isMuted) return replysticker(faktifstc)
let off = mute.indexOf(from)
mute.splice(off, 1)
fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'antilink':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === "off") {
if (!AntiLink) return  replysticker(faktifstc)
ntilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
replysticker(successtc)
} else if (args[0] === "on") {
if (AntiLink) return replysticker(faktifstc)
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'event':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === 'off') {
if (isEvento) return replysticker(faktifstc)
eventtime.push(from)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
replysticker(successtc)
} else if (args[0] === 'on') {
if (isEvento) return replysticker(faktifstc)
let off = eventtime.indexOf(from)
eventtime.splice(off, 1)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'welcome':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === 'off') {
if (isWelkom) return replysticker(faktifstc)
welkom.push(from)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
replysticker(successtc)
} else if (args[0] === 'on') {
if (!isWelkom) return replysticker(faktifstc)
let off = welkom.indexOf(from)
welkom.splice(off, 1)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'antivirtex': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === 'off') {
if (isAntiVirtex) return replysticker(faktifstc)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
replysticker(successtc)
} else if (args[0] === 'on') {
if (!isAntiVirtex) return replysticker(faktifstc)
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'nobadword': 
case 'antitoxic': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === 'on') {
if (isBadWord) return replysticker(faktifstc)
badword.push(from)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
replysticker(successtc)
} else if (args[0] === 'off') {
if (!isBadWord) return replysticker(faktifstc)
let off = badword.indexOf(from)
badword.splice(off, 1)
fs.writeFileSync('./database/group/badword.json', JSON.stringify(badword))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'gc':
case 'group':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (args[0] === 'on') {
replysticker(successtc)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'off') {
replysticker(successtc)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'revoke':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

client.revokeInvite(from)
replysticker(successtc)
break
case 'promote':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             client.groupMakeAdmin(from, mems_ids)
             } else {
             client.groupMakeAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             client.groupMakeAdmin(from, [entah])
}
             break
case 'demote':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             client.groupDemoteAdmin(from, mems_ids)
             } else {
             client.groupDemoteAdmin(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             client.groupDemoteAdmin(from, [entah])
}
             break
case 'kick':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

             if (mek.message.extendedTextMessage === null || mek.message.extendedTextMessage === undefined) return;
             if (mek.message.extendedTextMessage.contextInfo.participant === undefined) {
             entah = mek.message.extendedTextMessage.contextInfo.mentionedJid
             if (entah.length > 0) {
             var mems_ids = []
             for (let ids of entah) {
             mems_ids.push(ids)
}
             client.groupRemove(from, mems_ids)
             } else {
             client.groupRemove(from, entah)
}
             } else {
             entah = mek.message.extendedTextMessage.contextInfo.participant
             client.groupRemove(from, [entah])
}
             break
case 'add':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

					if (args.length < 1) return reply('Yang mau di add jin ya?')
					if (args[0].startsWith('08')) return reply('Gunakan kode negara mas')
					try {
						num = `${args[0].replace(/ /g, '')}@s.whatsapp.net`
						herman.groupAdd(from, [num])
					} catch (e) {
						console.log('Error :', e)
						reply('Gagal menambahkan target, mungkin karena di private')
					}
					break
case 'creategroup':
			case 'creategrup':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

				if (args.length < 1) return reply(`Penggunaan ${prefix}creategrup nama grup|@tag member`)
				argz = arg.split('|')
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
                    for (let i = 0; i < mentioned.length; i++){
						anu = []
						anu.push(mentioned[i])
                    }
					client.groupCreate(argz[0], anu)
					reply(`Sukses membuat grup ${argz[0]}`)
                }
				break
case 'listadmin':
case 'adminlist':
case 'admin':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)

teks = `*List admin dari ${groupMetadata.subject}*\n*Total: ${groupAdmins.length}*\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
break	
case 'groupinfo':   
case 'grupinfo':            
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)

	ppUrl = await client.getProfilePicture(from) 
buffergbl = await getBuffer(ppUrl)
ppu = await client.prepareMessage(from, buffergbl, MessageType.location, {thumbnail: buffergbl})
			 let ppugc = ppu.message["ephemeralMessage"] ? ppu.message.ephemeralMessage : ppu
teks = `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK*: ${groupDesc}\n`
{
const buttonMessage = {
    contentText: buttonshello,
    footerText: teks+support,
    buttons: buttonsmenu2,
    headerType: 6, 
	locationMessage: ppugc.message.locationMessage
}
client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
}
break
case 'listonline':
case 'here':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)

let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
break
case 'linkgrup':
case 'linkgc':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)

linkgc = await client.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*link Group ${groupName}*`
client.sendMessage(from, yeh, text, {quoted: fgif})
break
case 'setppgrup': 
case 'setppgroup': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media, text, {quoted: mek})
replysticker(successtc)
break	
case 'setnamegrup':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}

if (!q) return reply(`Kirim teks dengan caption ${prefix+command} nama group`)
client.groupUpdateSubject(from, `${q}`)
replysticker(successtc)
break 
case 'setdesc':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} nama desk`)
client.groupUpdateDescription(from, `${q}`)
replysticker(successtc)
break   
case 'tutuptime': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return sendButtonText(from, `*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik`, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})}
await 
setTimeout( () => {
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
replysticker(successtc)
}, timer)
break
case 'bukatime': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return sendButtonText(from, `*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik`, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})}
setTimeout( () => {
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
replysticker(successtc)
}, timer)
break
case 'leavetime':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isOwner) return replysticker(ownerstc)
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return sendButtonText(from, `*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik`, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})}
setTimeout( () => {
client.groupLeave(from);
}, timer)
break
case 'tagall':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `├❏@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
break
case 'hidetag':
case '_`':
case '.':
case 'totag':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: ftroli
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, sticker, options)
fs.unlinkSync(file)
} else if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
contextInfo: { mentionedJid: mem },
quoted: ftroli
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, image, options)
fs.unlinkSync(file)
        } else if ((isMedia && !mek.message.videoMessage || isQuotedAudio) && args.length == 0) {
encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'audio/mp4',
ptt : true,
contextInfo: { mentionedJid: mem },
quoted: ftroli
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, audio, options)
fs.unlinkSync(file)
}  else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
file = await client.downloadAndSaveMediaMessage(encmedia, filename = getRandom())
value = args.join(" ")
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var options = {
mimetype : 'video/mp4',
contextInfo: { mentionedJid: mem },
quoted: ftroli
}
ini_buffer = fs.readFileSync(file)
client.sendMessage(from, ini_buffer, video, options)
fs.unlinkSync(file)
} else if (q){
if (!q) return reply(`reply gambar/sticker/audio/video dengan caption ${prefix}hidetag`)
var group = await client.groupMetadata(from)
var member = group['participants']
var mem = []
member.map(async adm => {
mem.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
var optionshidetag = {
text: q,
contextInfo: { mentionedJid: mem },
quoted: ftroli
}
client.sendMessage(from, optionshidetag, text, { quoted: ftroli})
}
break

//===============================================================================//

case 'jadian':
case 'selingkuh':
case 'sahabatan':
case 'ngegay':
case 'lesbian':
case 'musuhan':
case 'pacaran':
case 'kangen':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi ${command} @${akuu.jid.split('@')[0]} sama️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true, {quoted : mek})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'pendosa':
case 'tercantik':
case 'terpintar':
case 'cupu':
case 'terbodoh':
case 'terganteng':
case 'wibu':
case 'fakboy':
case 'fakgirl':
case 'jomblo':
case 'sadboy':
case 'sadgirl':
case 'beban':
case 'jodohku':
case 'termalas':
case 'gakguna':
case 'sangean':
case 'bokepers':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
jds = []
const jdiidr = groupMembers
const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
teks = `@${akuutr.jid.split('@')[0]} Dia ${command} di grup ini`
jds.push(akuutr.jid)
mentions(teks, jds, true, {quoted : mek})
const vcardoo = `BEGIN:VCARD\nVERSION:3.0\nFN:${command}\nORG: Paling ${command}\nTEL;type=CELL;type=VOICE;waid=${akuutr.jid.split('@')[0]}:+${akuutr.jid.split('@')[0]}\nEND:VCARD`
client.sendMessage(from, {displayname: "Jeff", vcard: vcardoo}, MessageType.contact, { quoted: fdoc})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'watak':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
watak = body.slice(1)
wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu","Supel","Mudah Bergaul","Sombong","Labil","Optimis","Humoris","Kreatif","penyabar","Minder",", Cari Perhatian","Pendendam","Sulit memaafkan","Perfeksionis","Pesimis","Hard to Please"," Terlalu Sensitif","Negative Attitude ","Penyendiri","Moody","Mandiri","Egois","Ambisius","Helper","Kritis","Bossy","Pembangkang","Jujur","Dermawan","Pelit","Keras Kepala","Keras Kepala","Setia","Pendusta","Bijaksana","Tempramental","Berjiwa Besar"]
const tak = wa[Math.floor(Math.random() * wa.length)]
client.sendMessage(from, 'Jawaban : '+ tak, text, { quoted: mek })
 if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'hobby':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
hob =["Desah Di Game","Ngocokin Doi","Stalking sosmed nya mantan","Kau kan gak punya hobby awokawok","Memasak","Membantu Atok","Mabar","Nobar","Sosmedtan","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","Nonton Wibu","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
const by = hob[Math.floor(Math.random() * hob.length)]
client.sendMessage(from, 'Jawaban : '+ by, text, { quoted: mek })
 if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'gaycek':
case 'rate':
case 'sangecek':
case 'lesbicek':
case 'gantengcek':
case 'jelekcek':
case 'goblokcek':
case 'nolepcek':
case 'wibucek':
case 'jomblocek':
case 'pakboycek':
case 'pakgirlcek':
case 'halalcek':
case 'haramcek':
case 'cantikcek':
case 'bucincek':
case 'bebancek':
case 'pintarcek':
case 'begocek': 
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
client.sendMessage(from, `Jawaban : ${date1}%`, text, { quoted: mek })
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'bisakah':
case 'bagaimanakah':
case 'apakah':
case 'bisa':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pertanyaan`)
const bisa = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
const keh = bisa[Math.floor(Math.random() * bisa.length)]
client.sendMessage(from, 'Jawaban : '+ keh, text, { quoted: mek })
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'kapankah':
case 'kapan':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pertanyaan`)
client.sendMessage(from, `Jawaban : ${date1} ${lucBulan1} lagi `, text, { quoted: mek })
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'getname':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
var ambl = mek.message.extendedTextMessage.contextInfo.participant
for (let i = 0; i < 1; i++){
const sname = client.contacts[ambl] != undefined ? client.contacts[ambl].sname || client.contacts[ambl].notify : undefined
reply(sname)
}
} else if (q) {
var ayy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] 
for (let i = 0; i < 1; i++){
const sname = client.contacts[ayy] != undefined ? client.contacts[ayy].sname || client.contacts[ayy].notify : undefined
reply(sname)
}} else if (!q){
reply(`use caption ${prefix+command} tag`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'getbio':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
var yy = mek.message.extendedTextMessage.contextInfo.participant
var p = await client.getStatus(`${q}`, MessageType.text)
for (let i = 0; i < 1; i++){
reply(p.status)
}
} else if (q) {
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0] 
var p = await client.getStatus(`${q}`, MessageType.text)
for (let i = 0; i < 1; i++){
reply(p.status)
}
} else if (!q){
reply(`use caption ${prefix+command} tag`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'getpic':
case 'getpp':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
picuut = mek.message.extendedTextMessage.contextInfo.participant
try {
ppimg = await client.getProfilePicture(`${picuut}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
for (let i = 0; i < 1; i++){
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
}
} else if (q) {
picuut = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
ppimg = await client.getProfilePicture(`${picuut}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
for (let i = 0; i < 1; i++){
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
}
} else if (!q){
reply(`use caption ${prefix+command} tag`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tag':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`kirim pesan dengan caption ${prefix+command} tag target`)
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
client.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}}) 
if (database === true) {confirmLIMIT(sender, [angka])}               
break
case 'searchtext':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isGroup) return replysticker(grupstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
tekse = args.join('')
if (tekse.includes("|")) { 
try {
var ve = tekse.split("|")[0]
var za = tekse.split("|")[1]
if (za > 15) return reply('minimum 15')
sampai = `${za}`
batas = parseInt(sampai) + 1
cok = await client.searchMessages(`${ve}`, from, batas,1) 
if (cok.messages.lenght < 2) return reply('Message Not Found') 
if (cok.messages.length < parseInt(batas)) reply(`Found Only ${cok.messages.length - 1} Messages`)
for (let i=1;i < cok.messages.length;i++) {
if (cok.messages[i].message) {
client.sendMessage(from, `Here The Message!`, text, {quoted: cok.messages[i]}) 
}
}
} catch(e) {
console.log(e)
return reply(`${a}ERROR${a} An error occurred while searching for Messages`)
}
} else {
reply(`Wrong format, this is an example of the correct format : ${prefix}searchtext halo|15`)
}
if (database === true) {confirmLIMIT(sender, [angka])} 
break
case 'hbd': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
let textus = args.join(" ")
if (!q) return reply(`Example:\n 2002 02 25`)
const zodiak = [
["Capricorn", new Date(1970, 0, 1)],
["Aquarius", new Date(1970, 0, 20)],
["Pisces", new Date(1970, 1, 19)],
["Aries", new Date(1970, 2, 21)],
["Taurus", new Date(1970, 3, 21)],
["Gemini", new Date(1970, 4, 21)],
["Cancer", new Date(1970, 5, 22)],
["Leo", new Date(1970, 6, 23)],
["Virgo", new Date(1970, 7, 23)],
["Libra", new Date(1970, 8, 23)],
["Scorpio", new Date(1970, 9, 23)],
["Sagittarius", new Date(1970, 10, 22)],
["Capricorn", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
let d = new Date(1970, month - 1, day)
return zodiak.find(([_,_d]) => d >= _d)[0]
}
const date = new Date(textus)
if (date == 'Invalid Date') throw date
const d = new Date()
const [tahun, bulan, tanggal] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]

const zodiac = getZodiac(birth[1], birth[2])
const ageD = new Date(d - date)
const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

const birthday = [tahun + (birth[1] < bulan), ...birth.slice(1)]
const cekusia = bulan === birth[1] && tanggal === birth[2] ? `Happy -${age}th Birthday 🥳🎉` : age

const teksh = `
Birth : ${birth.join('-')}
Upcoming hbd : ${birthday.join('-')}
Age : ${cekusia}
Zodiak : ${zodiac}
`.trim()
reply(teksh)
if (database === true) {confirmLIMIT(sender, [angka])} 
break 
//===============================================================================//

case 'zalgo':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
for (let i = 0; i < 1; i++){
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
reply(zalgo(`${ambl}`))
}
} else if (q) {
for (let i = 0; i < 1; i++){
reply(zalgo(`${q}`))
}
} else if (!q){
reply(`kirim pesan dengan caption ${prefix+command} teksnya`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'vapor':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
for (let i = 0; i < 1; i++){
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
reply(vapor(`${ambl}`))
}
} else if (q) {
for (let i = 0; i < 1; i++){
reply(vapor(`${q}`))
}
} else if (!q){
reply(`kirim pesan dengan caption ${prefix+command} teksnya`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tourl':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply(`kirim pesan dengan caption ${prefix+command} teksnya`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'detikvn':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 1)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 1) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'detikvideo':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 1)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 1) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'fdeface':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
ge = args.join('')           
var pe = ge.split("|")[0];
var pen = ge.split("|")[1];
var pn = ge.split("|")[2];
var be = ge.split("|")[3];
const fde = `kirim/reply image dengan capion ${prefix}${command} link|title|desc|teks`
if (args.length < 1) return reply (fde)
const dipes = isQuotedSticker || isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const tipes = await client.downloadAndSaveMediaMessage(dipes)        
const bufer = fs.readFileSync(tipes)
const desc = `${pn}`
const title = `${pen}`
const url = `${pe}`
const buu = `https://${be}`
var anu = {
detectLinks: false
}
var mat = await client.generateLinkPreview(url)
mat.title = title;
mat.description = desc;
mat.jpegThumbnail = bufer;
mat.canonicalUrl = buu; 
client.sendMessage(from, mat, MessageType.extendedText, anu)
if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'volume':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 1)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(rname)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 1) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "volume=${args[0]}" ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, jadie, audio, {mimetype: 'audio/mp4', ptt: true, quoted: mek})
fs.unlinkSync(rname)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tts':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
const gtts = require('./lib/bot/gtts')('id')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
ambl.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, ambl, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} else if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
const gtts = require('./lib/bot/gtts')(args[0])
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
ambl.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, ambl, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} else if (q) {
try {
const gtts = require('./lib/bot/gtts')(args[0])
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
q.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, q, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
} catch (err) {
const gtts = require('./lib/bot/gtts')('id')
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
q.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, q, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
						}
} else if (!q){
reply(`reply pesan dengan caption ${prefix+command} teksnya`)	
}
if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'ghost':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'vibra':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia) 
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia) 
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'gemes':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'nightcore':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'fast':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.63,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
uhh = fs.readFileSync(ran)
client.sendMessage(from, uhh, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'trigg':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'slow':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'bass':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'bass': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())} 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')

if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'robot':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replysticker(errorstc)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replysticker(errorstc)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'gemuk':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tupai':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'reverse':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, audio, { mimetype: 'audio/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'toptt':
case 'tovn':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tomp3':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
bufferlkj = fs.readFileSync(ran)
client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
bufferlkj = fs.readFileSync(ran)
client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tempo':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break

//===============================================================================//

case 'ghostvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=3486" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'gemesvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=50000" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
riu = fs.readFileSync(ran)
client.sendMessage(from, riu, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'reversevid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -vf reverse -af areverse ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'nightcorevid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a atempo=1.06,asetrate=44100*1.25 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'triggvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "acrusher=level_in=8:level_out=18:bits=8:mode=log:aa=1" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek })
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'bassvid': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -af equalizer=f=94:width_type=o:width=2:g=30 ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'robotvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replysticker(errorstc)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return replysticker(errorstc)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'gemukvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.6,asetrate=22100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tupaivid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.5,asetrate=65100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'fastvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "[0:v]setpts=0.5*PTS[v];[0:a]atempo=2[a]" -map "[v]" -map "[a]" ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply(`Err: ${err}`)
buffer453 = fs.readFileSync(ran)
client.sendMessage(from, buffer453, video, { mimetype: 'video/mp4', quoted: mek })
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'vibravid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'slowvid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break	
case 'tempovid':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.audioMessage || isQuotedAudio) && args.length == 0)	{
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
} else if (!q){
reply(`reply pesan vn atau video dengan caption ${prefix+command} nominal`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break

//===============================================================================//

case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 'sk':
case 's':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
replysticker(errorstc)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else if ((isMedia && mek.message.videoMessage.seconds < 10 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 10) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
 await ffmpeg(`./${media}`)
.inputFormat(media.split('.')[1])
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
tipe = media.endsWith('.mp4') ? 'video' : 'gif'
replysticker(errorstc)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
  } else if ((isMedia && !mek.message.videoMessage || isQuotedSticker) && args.length == 0) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
 await ffmpeg(`./${media}`)
.input(media)
.on('start', function (cmd) {
console.log(`Started : ${cmd}`)
})
.on('error', function (err) {
console.log(`Error : ${err}`)
fs.unlinkSync(media)
replysticker(errorstc)
})
.on('end', function () {
console.log('Finish')
exec(`webpmux -set exif ${addMetadata(namo, ator)} ${ran} -o ${ran}`, async (error) => {
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, sticker, {quoted: mek})
fs.unlinkSync(media)
fs.unlinkSync(ran)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(ran)
} else {
reply(`Kirim gambar dengan caption ${prefix}sticker atau reply/tag gambar(durasi sticker video 1-9 detik)`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'stikerwm':
case 'stickerwm':
case 'swm':
case 'wm':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply('nama stikernya?')
pe = args.join(' ')
var a = q.split("|")[0];
var b = q.split("|")[1];
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 media = await client.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
out = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out) 
} else if ((isMedia && mek.message.videoMessage.seconds < 11 || isQuotedVideo && mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = q.split("|")[0];
var b = q.split("|")[1];
await createExif(a,b)
out = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker ) {
const encmedia = isQuotedSticker   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
pe = args.join('')
var a = q.split("|")[0];
var b = q.split("|")[1];
await createExif(a,b)
out = (`${sender.split("@")[0]}@s.whatsapp.net.webp`)
ffmpeg(media)
.on('error', (e) => {
console.log(e)
client.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: mek })
fs.unlinkSync(media)
})
.on('end', () => {
_out = getRandom('.webp')
spawn('webpmux', ['-set','exif','./temp/data.exif', out, '-o', _out])
.on('exit', () => {
client.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: mek })
fs.unlinkSync(out)
fs.unlinkSync(_out)
fs.unlinkSync(media)
})
})
.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])
.toFormat('webp')
.save(out)   
} else {
reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break   
case 'ocr': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args.length < 0) return reply(`tag gambarnya lalu ketik ${prefix}${command}`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
 await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
sendButtonText(from, teks.trim(), support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply(`*kirim foto dengan caption ${prefix}ocr*`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'toimg':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!isQuotedSticker) return reply('reply/tag sticker!')
try {
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediaaa = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.jpeg')
exec(`ffmpeg -i ${mediaaa} ${ran}`, (err) => {
fs.unlinkSync(mediaaa)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)}).catch(() =>  replysticker(errorstc))
fs.unlinkSync(ran)
})
} catch (err) {
replysticker(errorstc)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break	   
case 'readmore':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args.length < 1) return reply(`cara menggunakan nya${prefix}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${command} Hai beb/an`)
var kls = body.slice(9)
var has = kls.split("/")[0];
var kas = kls.split("/")[1];
client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
if (database === true) {confirmLIMIT(sender, [angka])}
break	
case 'styletext':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args.length < 1) return reply('Enter The Text')
async function stylizeText(text) {
let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
let html = await res.text()
let dom = new JSDOM(html)
let table = dom.window.document.querySelector('table').children[0].children
let obj = {}
for (let tr of table) {
let name = tr.querySelector('.aname').innerHTML
let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
obj[name + (obj[name] ? ' Reversed' : '')] = content
}
return obj
}
matext = args.join(" ")
let fetch = require('node-fetch')
let { JSDOM } = require('jsdom')
reply(Object.entries(await stylizeText(matext)).map(([name, value]) => `${name}\n${value}\n`).join`\n`)
if (database === true) {confirmLIMIT(sender, [angka])} 
break
case 'fliptext':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args.length < 1) return reply(`Example:\n${prefix}fliptext`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
if (database === true) {confirmLIMIT(sender, [angka])} 
break
case 'tohuruf':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replysticker(errorstc)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'emoji':
case 'semoji':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply('emojinya?')
qes = args.join(' ')
emoji.get(`${qes}`).then(emoji => {
teks = `${emoji.images[4].url}`
sendStickerFromUrl(from,`${teks}`).catch(() =>replysticker(errorstc))	
console.log(teks)          
})
if (database === true) {confirmLIMIT(sender, [angka])} 
break
case 'fakeloc':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = WMthumb
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)    
if (database === true) {confirmLIMIT(sender, [angka])} 			   
		    break

//MINIGAME LUCMENU
case 'delvote':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
			if (database === true) {confirmLIMIT(sender, [angka])}
            break
case 'voting':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
			if (database === true) {confirmLIMIT(sender, [angka])}
            break
case 'tebakgambar':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
data = fs.readFileSync('./lib/minigameluc/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
jawaban = randKey.result.jawaban
buffergbl =await getBuffer(randKey.result.soalImg)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|N|O|P|Q|R|S|T|V|W|X|Y|Z]/gi, '_')
teks = `Silahkan jawab soal berikut ini\n\nWaktu : 120 s\n`
teks2 =   `\`\`\`Petunjuk : ${kisi_kisi}\`\`\``
console.log(color("Jawaban: " + jawaban))
 tbgk = await client.prepareMessage(from, buffergbl, image, {thumbnail: buffergbl})
			 let mhan = tbgk.message["ephemeralMessage"] ? tbgk.message.ephemeralMessage : tbgk
client.sendMessage(from, "please wait", text, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}}).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/group/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sendButtonImg(from, teks+teks2, support, mhan, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await sleep(120000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "Waktu Habis *Jawaban*: " + jawaban
  titid2 = `Klik Untuk Ke Game Selanjutnya`
await sendButtonText(from, titid, titid2, [{buttonId: `${command}`,buttonText: {displayText: `TRY AGAIN`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/group/tebakgambar.json", JSON.stringify(tebakgambar))
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'caklontong':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (tebakcaklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
data = fs.readFileSync('./lib/minigameluc/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
jawaban = randKey.result.jawaban
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|N|O|P|Q|R|S|T|V|W|X|Y|Z]/gi, '_')
teks = `Silahkan jawab soal berikut ini\n${Pertanyaan}\nWaktu : 120 s\n`
teks2 =   `\`\`\`Petunjuk : ${kisi_kisi}\`\`\``
console.log(color("Jawaban: " + jawaban))
client.sendMessage(from, "please wait", text, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}}).then(() => {
  tebakcaklontong[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/group/tebakcaklontong.json", JSON.stringify(tebakcaklontong))
})
await sendButtonText(from, teks+teks2, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await sleep(120000)
if (tebakcaklontong.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "Waktu Habis *Jawaban*: " + jawaban
  titid2 = `Klik Untuk Ke Game Selanjutnya`
await sendButtonText(from, titid, titid2, [{buttonId: `${command}`,buttonText: {displayText: `TRY AGAIN`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
  delete tebakcaklontong[sender.split('@')[0]]
  fs.writeFileSync("./database/group/tebakcaklontong.json", JSON.stringify(tebakcaklontong))
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'suit':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply('Pilih Batu,Gunting atauKertas')
const botol = ['Batu','Gunting','Kertas']
const suitcuy = botol[Math.floor(Math.random() * botol.length)]
brow = `
*BOT*
> ${suitcuy}
*KAMU*
> ${q}
`
reply(brow)
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'family100':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
data = fs.readFileSync('./lib/minigameluc/family100.js');
fami = JSON.parse(data);
ly100 = Math.floor(Math.random() * fami.length);
randKey = fami[ly100];
Pertanyaan = randKey.result.soal
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* \n```'+randKey.result.jawaban +'```', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
setTimeout( () => {
reply('_Waktu Anda Habis_')
}, 29000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '*'+ Pertanyaan +'*', text, {quoted: mek }) // ur cods
}, 0) // 1000 = 1s,
if (database === true) {confirmLIMIT(sender, [angka])}
case 'delsesi':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args[0] === 'ttt') {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))                        
if (fs.existsSync('./temp/' + from + '.json')) {
fs.unlinkSync('./temp/' + from + '.json')
reply('Berhasil Menghapus Sesi Ttt')
} else {
reply('Tidak ada sesi yang berlangsung')
}
} else {
reply('Pilih')
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tictactoe':
case 'ttt':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (mek.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')
if (!mek.message.extendedTextMessage.contextInfo.mentionedJid[0]) return
if (fs.existsSync(`./temp/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesi ttt*, untuk menghapus sesi`)
if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)
tttSkuy = setTtt(`${from}`)
tttSkuy.status = false
tttSkuy.Z = sender.replace("@s.whatsapp.net", "")
tttSkuy.Y = args[0].replace("@", "");
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
starGame = `「 *Memulai Game Tictactoe* 」\n\n•@${sender.replace("@s.whatsapp.net", "")} Menantang Bermain Tictactoe \n[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan\n\n_Game tictactoe on_`
client.sendMessage(from, starGame, text, {quoted: mek, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})
 if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'cekhistory':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (isEvento) return replysticker(fnaktifstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
client.sendMessage(from, starGame, text, `\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`, {quoted: mek})
if (database === true) {confirmLIMIT(sender, [angka])}
break			
case 'leaderboard':
				case 'lb':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (database === false) {return replysticker(fnaktifstc)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (isEvento) return replysticker(fnaktifstc)
				_registered.sort((a, b) => (a.xp < b.xp) ? 1 : -1)
				_registered.sort((a, b) => (a.uang < b.uang) ? 1 : -1)
                let leaderboardlvl = '-----[ *LEADERBOARD LEVEL* ]----\n\n'
                let leaderboarduang = '-----[ *LEADERBOARD UANG* ]----\n\n'
                let nom = 0
                try {
                    for (let i = 0; i < 15; i++) {
                        nom++
                        leaderboardlvl += `*[${nom}]* wa.me/${_registered[i].id.replace('@s.whatsapp.net', '')}\n┗⊱ *XP*: ${_registered[i].xp} *Level*: ${_level[i].level}\n`
                        leaderboarduang += `*[${nom}]* wa.me/${_registered[i].id.replace('@s.whatsapp.net', '')}\n┣⊱ *Uang*: _Rp${_registered[i].uang}_\n`
                    }
                    await reply(leaderboardlvl)
                    await reply(leaderboarduang)
                } catch (err) {
                    console.error(err)
                    await reply(`minimal 10 user untuk bisa mengakses database`)
                }
				break
case 'caripesan':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
            if(!q)return reply('pesannya apa bang?')
            let v = await client.searchMessages(q,from,10,1)
            let s = v.messages
            let el = s.filter(v => v.message)
            el.shift()
            try {
            if(el[0].message.conversation == undefined) return
            reply(`Ditemukan ${el.length} pesan`)
            await sleep(3000)
            for(let i = 0; i < el.length; i++) {
            await client.sendMessage(from,'Nih pesannya',text,{quoted:el[i]})
            }
            } catch(e){
            reply('Pesan tidak ditemukan!')
            }           
            break
	
							
case 'ytsearch':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
		if (!q) return reply(`Kirim teks dengan caption ${prefix+command}Tolong masukan query!`)
					var srch = args.join('');
					try {
		        	var aramas = await yts(srch);
		   			} catch {
		        	return await client.sendMessage(from, 'Error!', MessageType.text, dload)
		    		}
		    		aramat = aramas.all 
		    		var tbuff = await getBuffer(aramat[0].image)
		    		var ytresult = '';
		    		ytresult += '「 *YOUTUBE SEARCH* 」'
		    		ytresult += '\n________________________\n\n'
		   			aramas.all.map((video) => {
		        	ytresult += '❏ Title: ' + video.title + '\n'
		            ytresult += '❏ Link: ' + video.url + '\n'
		            ytresult += '❏ Durasi: ' + video.timestamp + '\n'
		            ytresult += '❏ Upload: ' + video.ago + '\n________________________\n\n'
		    		});
		    		ytresult += `◩ *${NamaBot}*`
sendButtonImageLoc(from, ytresult, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
					if (database === true) {confirmLIMIT(sender, [angka])} 
					break
case 'brainly':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
		if (!q) return reply(`Kirim teks dengan caption ${prefix+command} Pertanyaan apa`)
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false}).catch(() =>replysticker(errorstc))                       
		            })  
if (database === true) {confirmLIMIT(sender, [angka])} 					
break					
		    case 'igstalk':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
					if (!q) return reply(`Kirim teks dengan caption ${prefix+command} Usernamenya`)
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks).catch(() =>replysticker(errorstc))  
		            })     
if (database === true) {confirmLIMIT(sender, [angka])} 					
		            break 	
case 'getdb':
	if (!isOwner) return replysticker(ownerstc)
fs.readFileSync('./database/bot/registered.json')
client.sendMessage(from, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})  
break
case 'level':
                if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
				if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
                const userLevel = getLevelingLevel(sender)
                const userXp = getLevelingXp(sender)
                if (userLevel === undefined && userXp === undefined) return reply(ind.lvlnul())
                const requiredXp = 5000 * (Math.pow(2, userLevel) - 1)
                resul = `\`\`\` 「 LEVEL 」 \`\`\`\n➣ \`\`\` Nama\`\`\`  : ${pushname}\n➣ \`\`\` Nomor\`\`\`  : ${sender.split("@")[0]}\n➣ \`\`\` Role\`\`\`  : ${role}\n➣ \`\`\` User XP\`\`\`  :  ${userXp}/${requiredXp}\n➣ \`\`\` User Level\`\`\`  : ${userLevel}`
               client.sendMessage(from, resul, text, { quoted: mek})
                .catch(async (err) => {
                        console.error(err)
                        await reply(`Error!\n${err}`)
                    })
				break 	
/*
]=====> GROUP MENU<=====[
*/
case 'meme':
case 'darkjoke':
case 'quote':
case 'aesthetic':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
replysticker(waitstc)
let pinakua = await pinterest(`${command} indo`)
{
  let imagenya = pinakua[Math.floor(Math.random() * pinakua.length)]
            let pinn = await getBuffer(imagenya)
               pinna = await client.prepareMessage(from, pinn, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let pinnapi = pinna.message["ephemeralMessage"] ? pinna.message.ephemeralMessage : pinna
const buttons = [
  {buttonId: `pinterest ${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessage = {
    contentText: buttonshello,
    footerText: support,
    buttons: buttons,
    headerType: 4, 
	imageMessage: pinnapi.message.imageMessage
}

client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
}
break
case 'cecan':
case 'cogan':
case 'hubsu':
case 'waifu':
case 'cat':
case 'dog':
case 'bird':
case 'fox':
case 'panda':
case 'kpop':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
replysticker(waitstc)
let pinaku = await pinterest(`${command}`)
{
  let imagenya = pinaku[Math.floor(Math.random() * pinaku.length)]
            let pinn = await getBuffer(imagenya)
               pinna = await client.prepareMessage(from, pinn, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let pinnapi = pinna.message["ephemeralMessage"] ? pinna.message.ephemeralMessage : pinna
const buttons = [
  {buttonId: `pinterest ${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessage = {
    contentText: buttonshello,
    footerText: support,
    buttons: buttons,
    headerType: 4, 
	imageMessage: pinnapi.message.imageMessage
}

client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
}
break
case 'surah':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
surah(q).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}
reply(teks)
})
if (database === true) {confirmLIMIT(sender, [angka])} 
break

    case 'playstore':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
            if(!q) return reply('lu nyari apa?')
            let play = await playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
if (database === true) {confirmLIMIT(sender, [angka])} 
            break 
case 'linkwa':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
            if(!q) return reply('cari group apa?')
            linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
if (database === true) {confirmLIMIT(sender, [angka])} 
            break   
case 'chara':
case 'wallpaper':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} gambar yang ingin dicari`)
replysticker(waitstc)
let ima = await chara(q)
{
  let imagenya = ima[Math.floor(Math.random() * ima.length)]
            let pinn = await getBuffer(imagenya)
               pinna = await client.prepareMessage(from, pinn, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let pinnapi = pinna.message["ephemeralMessage"] ? pinna.message.ephemeralMessage : pinna
const buttons = [
  {buttonId: `pinterest ${q}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessage = {
    contentText: buttonshello,
    footerText: support,
    buttons: buttons,
    headerType: 4, 
	imageMessage: pinnapi.message.imageMessage
}

client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
}
break
case 'pinterest':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} gambar yang ingin dicari`)
replysticker(waitstc)
let pina = await pinterest(q)
{
  let imagenya = pina[Math.floor(Math.random() * pina.length)]
            let pinn = await getBuffer(imagenya)
               pinna = await client.prepareMessage(from, pinn, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let pinnapi = pinna.message["ephemeralMessage"] ? pinna.message.ephemeralMessage : pinna
const buttons = [
  {buttonId: `pinterest ${q}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessage = {
    contentText: buttonshello,
    footerText: support,
    buttons: buttons,
    headerType: 4, 
	imageMessage: pinnapi.message.imageMessage
}

client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
}
break
case 'ig':
case 'igdl':
case 'instagram':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return replysticker(errorstc)
   res = await igDownloader(`${q}`).catch(e => {
replysticker(errorstc)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
if (database === true) {confirmLIMIT(sender, [angka])} 	
break
case 'tiktok':
case 'tiktokdl':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link tiktok]`)
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
replysticker(waitstc)
setTimeout( () => {
sendButtonText(from, `_Pilih Tipe Di Bawah Ini_`, support, [{buttonId: `tiktoknowm ${q}`,buttonText: {displayText: `NOWM`}, type: 1},{buttonId: `tiktokwm ${q}`,buttonText: {displayText: `WM`}, type: 1},{buttonId: `tiktokaudio ${q}`,buttonText: {displayText: `AUDIO`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}, 2000)
if (database === true) {confirmLIMIT(sender, [angka])} 	
break
case 'tiktoknowm':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link tiktok]`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
replysticker(waitstc)
lin = args[0]
ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
sendMediaURL(from, anu, 'Done!')
})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tiktokaudio':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link tiktok]`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
replysticker(waitstc)
lin = args[0]
ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
khs = await getBuffer(anu)
client.sendMessage(from, khs, document, {quoted:mek, mimetype:'audio/mp3', filename:'luc.mp3'})
})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'tiktokwm':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link tiktok]`)
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
replysticker(waitstc)
lin = args[0]
ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.wm
khs = await getBuffer(anu)
client.sendMessage(from, khs, video, {quoted:mek, mimetype:'video/mp4', filename:'luc.mp4'})
})
if (database === true) {confirmLIMIT(sender, [angka])}
break

  case 'get':
case 'fetch':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
            if(!q) return reply('Linknya?')
            fetch(q).then(res => res.text())  
            .then(bu =>{
sendMediaURL(from, bu, 'done')
            })   
            break
case 'gimage':
case 'googleimage':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} gambar yang ingin dicari`)
replysticker(waitstc)
res = await googleImage(q, google)
function google(error, result){
if (error){ return reply('_[ ! ] Error Terclienti Kesalahan Atau Hasil Tidak Ditemukan_')}
else {
var gugIm = result
var random =  gugIm[Math.floor(Math.random() * gugIm.length)].url
sendFileFromUrl(random, image, {quoted: mek, caption: `*Hasil Pencarian Dari :* ${q}`})
}}
if (database === true) {confirmLIMIT(sender, [angka])}
break 
case 'herolist':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'herodetail':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} hero ml`)
res = await herodetails(q)
her = `*Hero Details ${body.slice(12)}*

*Nama* : ${res.hero_name}
*Role* : ${res.role}
*Quotes* : ${res.entrance_quotes}
*Fitur Hero* : ${res.hero_feature}
*Spesial* : ${res.speciality}
*Rekomendasi Lane* : ${res.laning_recommendation}
*Harga* : ${res.price.battle_point} [Battle point] | ${res.price.diamond} [DM] | ${res.price.hero_fragment} [Fragment]
*Rilis* : ${res.release_date}

*Durability* : ${res.skill.durability}
*Offence* : ${res.skill.offense}
*Skill Effect* : ${res.skill_effects}
*Difficulty* : ${res.skill.difficulty}
 
*Movement Speed* : ${res.attributes.movement_speed}
*Physical Attack* : ${res.attributes.physical_attack}
*Magic Defense* : ${res.attributes.magic_defense}
*Ability Crit Rate* : ${res.attributes.ability_crit_rate}
*HP* : ${res.attributes.hp}
*Mana* : ${res.attributes.mana}
*Mana Regen* : ${res.attributes.mana_regen}

*Story* : ${res.background_story}`
reply(her)
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'google':
case 'googlesearch':
case 'ggs':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
	if (!q) return reply(`Kirim teks dengan caption ${prefix+command}Yang mau di cari apaan`)
teks = args.join(' ')
replysticker(waitstc)
res = await ggs({'query' : `${teks}`})
kant = ``
for (let i of res) {
kant += `*Judul* : ${i.title}
*Link* : ${i.link}
*Keterangan* : ${i.snippet}`
}
var akhir = kant.trim()
reply(akhir)
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'wiki':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
	if (!q) return reply(`Kirim teks dengan caption ${prefix+command}Yang mau di cari apaan`)
teks = args.join(' ')
res = await wikiSearch(teks).catch(e => {
return reply('_[ ! ] Error Hasil Tidak Ditemukan_') 
}) 
result = `*Judul :* ${res[0].judul}
*Wiki :* ${res[0].wiki}`
sendFileFromUrl(res[0].thumb, image, {quoted: mek, caption: result}).catch(e => {
  reply(result)
})
if (database === true) {confirmLIMIT(sender, [angka])}
break
case 'mediafire':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
	if (!q) return reply(`Kirim teks dengan caption ${prefix+command} link`)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (args.length < 1) return reply('Link Nya Mana? ')
if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.api)

replysticker(waitstc)
res = await mediafireDl(q)
result = `*「 MEDIAFIRE DOWNLOAD 」*

*Data Berhasil Didapatkan!*
\`\`\` Nama : ${res[0].nama}\`\`\`
\`\`\` Ukuran : ${res[0].size}\`\`\`
\`\`\` Link : ${res[0].link}\`\`\`

_File sedang dikirim, Silahkan tunggu beberapa menit_`
reply(result)
sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: mek})
if (database === true) {confirmLIMIT(sender, [angka])}
break
				case 'translate':
				case 'ts':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
					try{
					if ( args.length === 1 ){
						tekss = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
						translate(tekss, {client: 'gtx', to:args[0]})
						.then((res) =>{
							reply(res.text)
							}) 
						} else
			if(args.length > 0 ) {
				ngab = args.join(' ')
			teks = ngab.split('.')[0];
			bhs = ngab.split('.')[1];
			  translate(teks, {client: 'gtx', to:bhs})
			  .then((res) =>{
				  reply(res.text)
				  })
				}
			} catch (e){
				replysticker(errorstc)
			}
if (database === true) {confirmLIMIT(sender, [angka])}
				  break
case 'lirik':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
            if(!q) return reply('lagu apa?')
            let song = await lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
if (database === true) {confirmLIMIT(sender, [angka])}
            break
				case 'tinyurl':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
if (database === true) {confirmLIMIT(sender, [angka])}
break
	case 'kalkulator':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'dadu':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./strg/sticker/${random}.webp`)
			client.sendMessage(from, damdu, sticker, {quoted: mek})
if (database === true) {confirmLIMIT(sender, [angka])}
			break
			
case 'sider':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!isGroup) return reply(mess.only.group)
infom = await client.messageInfo(from, mek.message.extendedTextMessage.contextInfo.stanzaId)
tagg = []
teks = `Telah Dibaca Oleh :\n\n`
for(let i of infom.reads){
teks += '@' + i.jid.split('@')[0] + '\n'
teks += `Waktu : ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'
tagg.push(i.jid)
}
mentions(teks, tagg, true)
break

case 'sharelock':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
kntl = `${args.join(' ')}`
nama = kntl.split("|")[0];
impostor = kntl.split("|")[1];
client.sendMessage(from, {
name: nama,
address: impostor,
jpegThumbnail: ofrply}, MessageType.liveLocation, {quoted:floc})
break

					case 'spamsw':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!arg) return reply(`Penggunaan ${prefix}spamsw teks|jumlah`)
				argzi = arg.split("|")
				if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
				if (Number(argzi[1]) >= 50) return reply('Kebanyakan!')
				if (isNaN(argzi[1])) return reply(`harus berupa angka`)
				for (let i = 0; i < argzi[1]; i++){
					client.sendMessage('status@broadcast', argzi[0], MessageType.text)
                    }
                    break	
				
				case 'suit':
              
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
  if (args.length < 1) return reply('Pilih gunting/batu/kertas')
					if (args[0] === 'gunting' ) {
					  gunting = [
					    "Kamu *Gunting*\nAku *Kertas*\nKamu Menang 😔",
					    "Kamu *Gunting*\nAku *Batu*\nKamu Kalah 🙂",
					    "Kamu *Gunting*\nAku *Gunting*\nKita Seri 😏"
					    ]
					  gun = gunting[Math.floor(Math.random() * gunting.length)]
					  reply(gun)
					} else if (args[0] === 'kertas') {
					  ker = [
					    "Kamu *Kertas*\nAku *Batu*\nKamu Menang 😔",
					    "Kamu *Kertas*\nAku *Gunting*\nKamu Kalah 🙂",
					    "Kamu *Kertas*\nAku *Kertas*\nKita Seri 😏"
					    ]
					  kertas = ker[Math.floor(Math.random() * ker.length)]
						reply(kertas)
					} else if (args[0] === 'batu') {
					  bat = [
					    "Kamu *Batu*\nAku *Gunting*\nKamu Menang ??",
					    "Kamu *Batu*\nAku *Kertas*\nKamu Kalah 🙂",
					    "Kamu *Batu*\nAku *Batu*\nKita Seri 😏"
					    ]
					  batu = bat[Math.floor(Math.random() * bat.length)]
					  reply(batu)
					} else {
					  reply('Pilih gunting/batu/kertas')
					}
break
		    case 'sloadt':
            case 'slotsads':
              
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break			
				case 'chat':
              
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
			if (args[0].startsWith('08')) return reply('Awali nomor dengan 62')
            if (args[0].startsWith('+62')) return reply('Awali nomor dengan 62')
			if (args.length < 1) return reply(`Penggunaan ${prefix}chat 62xnxx|teks`)
            var pc = body.slice(6)
            var nomor = pc.split("|")[0];
            var org = pc.split("|")[1];
            client.sendMessage(nomor+'@s.whatsapp.net', org, MessageType.text)   
            reply(`Sukses mengirim chat:\n${org},@${nomor}`)
            break
		
				case 'tag':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					client.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break

    case 'play': case 'ytplay': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
	{
					if (!q) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
                let yts = require("yt-search")
                let search = await yts(q)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
let vvisaioa = await getBuffer(anu.thumbnail)
captions = `*PLAY*\n\n*Title* : ${anu.title}\n\n_Silahkan pilih file media yang di download_`
							     vud0woi2d = await client.prepareMessage(from, vvisaioa, MessageType.location, {thumbnail: vvisaioa})
			 let vud0woid = vud0woi2d.message["ephemeralMessage"] ? vud0woi2d.message.ephemeralMessage : vud0woi2d
const buttonvido = [
  {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: 'AUDIO'}, type: 1},
  {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: 'VIDEO'}, type: 1},
]

const buttonMessagegacvudeia = {
    contentText: captions,
    footerText:support,
    buttons: buttonvido,
    headerType: 6, 
	locationMessage: vud0woid.message.locationMessage
}
	client.sendMessage(from, buttonMessagegacvudeia, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})}
							if (database === true) {confirmLIMIT(sender, [angka])} 
		                   break    

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
				break      
			case 'ytmp42': case 'ytvideo': 
			{
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
				let result = await aiovideodl(q)
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '360p'  
				let media = medias.filter(v => v.videoAvailable == true && v.audioAvailable == false && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
			 reply(`⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP4\n⭔ Resolusi : ${args[1] || '360p'}`)
sendFileFromUrl(media[0].url, document, {mimetype: 'video/mp4', filename: `${title}.mp4`, quoted: mek}).catch(() =>  replysticker(errorstc))
            }
if (database === true) {confirmLIMIT(sender, [angka])}
            break
			case 'ytmp32': case 'ytaudio': 
			{
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
                let result = await aiovideodl(q)
                let { url, title, thumbnail, duration, medias } = result
                let quality = args[1] ? args[1] : '128kbps'                
                let media = medias.filter(v => v.videoAvailable == false && v.audioAvailable == true && v.quality == quality).map(v => v)
                if (media[0].formattedSize.split('MB')[0] >= 100.00) return reply('File Melebihi Batas'+util.format(media))
			 reply(`⭔ Title : ${title}\n⭔ File Size : ${media[0].formattedSize}\n⭔ Url : ${url}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`)
sendFileFromUrl(media[0].url, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek}).catch(() =>  replysticker(errorstc))
            }
if (database === true) {confirmLIMIT(sender, [angka])}
            break
case 'ytmp3':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
        //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            replysticker(waitstc)
            res = await y2mateA(teks).catch(e => {
            reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP3*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP3
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, document, {quoted: mek, mimetype: 'audio/mp3', filename: res[0].output})
})
if (database === true) {confirmLIMIT(sender, [angka])}
            break
     case 'ytmp4':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (premium === true) {if (!isPremium) return replysticker(premiumstc)}
           //if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: mek})
            if (args.length < 1) return reply('Link Nya Mana?')
            if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply('Link Invalid')
            teks = args.join(' ')
            replysticker(waitstc)
            res = await y2mateV(teks).catch(e => {
            reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')
})
            result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓
┆ *YOUTUBE MP4*
└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶

*Data Berhasil Didapatkan!*
☞ Title : ${res[0].judul}
☞ Ext : MP4
☞ Size : ${res[0].size}

_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`

            sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: mek}).then((lalu) => {
            sendFileFromUrl(res[0].link, video, {quoted: mek, mimetype: 'video/mp4', filename: res[0].output})
})
if (database === true) {confirmLIMIT(sender, [angka])}
            break

//RANDOM MENU
case 'zestetikpic':
case 'zmemeindo':
case 'zdarkjokes':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
					await replysticker(loadingstc)
					buffer = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
             nsfwwa3aa = await client.prepareMessage(from, buffer, image, {thumbnail: Buffer.alloc(0)})
			 let nsfwwsa = nsfwwa3aa.message["ephemeralMessage"] ? nsfwwa3aa.message.ephemeralMessage : nsfwwa3aa
const buttonsgswdfs = [
  {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessageswsfdt = {
    contentText: buttonshello,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonsgswdfs,
    headerType: 4, 
	imageMessage: nsfwwsa.message.imageMessage
}

client.sendMessage(from, buttonMessageswsfdt, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
if (database === true) {confirmLIMIT(sender, [angka])}
				break		
case 'znickepep': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*Nick FF ${q}* : ${anu.result}\n`
reply(anu1)
if (database === true) {confirmLIMIT(sender, [angka])}	
break 
case 'zfml': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
await sendButtonText(from, `${anu.result}`, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
break 
case 'zquote':   
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*author* : ${anu.result.author}\n*quotes* : ${anu.result.quotes}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'zpantun': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `${anu.result.pantun}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'zrandomquran': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*arti* : ${anu.result.arti}\n*asma* : ${anu.result.asma}\n*audio* : ${anu.result.audio}\n*ayat* : ${anu.result.ayat}\n*keterangan* : ${anu.result.keterangan}\n*nama* : ${anu.result.nama}\n*nomor* : ${anu.result.nomor}\n*rukuk* : ${anu.result.rukuk}\n*type* : ${anu.result.type}\n*urut* : ${anu.result.urut}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
//ZEKS API NEWs
case 'ztribunews': 
case 'zliputan6': 
case 'zfoxnews': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)
get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
                    get_result = get_result.result
                    ini_txt = 'BERITA : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appid}\n`
                        ini_txt += `time : ${x.time}\n`
                        ini_txt += `url : ${x.url}\n\n`
                        ini_txt += `ket : ${x.ket}\n`
                    }
await sendButtonText(from, ini_txt, support, [{buttonId: `ztribunews`,buttonText: {displayText: `Tribun News`}, type: 1},{buttonId: `zliputan6`,buttonText: {displayText: `Liputan 6`}, type: 1},{buttonId: `zfoxnews`,buttonText: {displayText: `Fox News`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
//ZEKS API IMAGE TEKS 1
case 'zqrencode':
case 'zbarcode': 
case 'zhartatahta': 
case 'zbneon': 
case 'znaruto': 
case 'zmatrix': 
case 'zgneon': 
case 'zbreakwall': 
case 'zdropwater': 
case 'zbneon': 
case 'zflowertext': 
case 'zthundertext': 
case 'zcrosslogo': 
case 'zsilktext': 
case 'zflametext': 
case 'zglowtext': 
case 'zsmoketext': 
case 'zskytext':
case 'zlithgtext':
case 'zcrismes':
case 'ztfire':
case 'ztpantai':
case 'zepep':
case 'zgplaybutton':
case 'zsplaybutton':
case 'ztext3dbox':
case 'ztext3d':
case 'zlogobp':
case 'zleavest':
case 'ztlight':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${q}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${q}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
//ZEKS API IMAGE TEKS 2
case 'zwolflogo':
case 'zpubglogo':
case 'zcslogo':
case 'zsnowwrite':
case 'zwatercolour':
case 'zlogoaveng':
case 'zphlogo':
case 'zmarvellogo':
case 'zgtext':
case 'zwatercolour':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} text.text`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} text.text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text1=${tex1}&text2=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1} ${tex2}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
//ZEKS API IMAGE TEKS 3
case 'zretro':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} text.text.text`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
var tex3 = q.split('.')[2]
if (!tex2) return reply(`Kirim teks dengan caption ${prefix+command} text.text.text`)
if (!tex3) return reply(`Kirim teks dengan caption ${prefix+command} text.text.text`)
await replysticker(loadingstc)
anunt = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text1=${tex1}&text2=${tex2}&text3=${tex3}`, {method: 'get'})
anu = await getBuffer(`${anunt.result}`)
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1} ${tex2} ${tex3}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
//ZEKS API EMOJI
case 'zemoji-image':  // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&emoji=${q}`, {method: 'get'})
client.sendMessage(from, anu, document, {mimetype: 'image/png', filename:`${command.slice(1)} ${q}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
case 'zslap':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&img1=${q}&img2=${q}`, {method: 'get'})
client.sendMessage(from, anu, document, {mimetype: 'image/png', filename:`${command.slice(1)} ${q}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break	
case 'zphub':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} username.text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${tex1}&msg=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1} ${tex2}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'zmagernulis':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} nama.kelas.teks.teks`)
var nama = q.split('.')[0]
var kelas = q.split('.')[1]
var tex1 = q.split('.')[2]
var tex2 = q.split('.')[3]
if (!kelas) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} nama.kelas.teks.teks`)
if (!tex1) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} nama.kelas.teks.teks`)
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} nama.kelas.teks.teks`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&nama=${nama}&kelas=${kelas}&text=${tex1}&tinta=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${q}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'znulis':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.teks`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${q}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${q}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'zbrand-logo':  
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.(pilih 1-10)`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.(pilih 1-10)`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${tex1}&type=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1}`})
if (database === true) {confirmLIMIT(sender, [angka])}	
break
case 'zcalender':   // error
case 'zdraw-image':   // error
case 'zmissing-image':   // error
case 'zsketch-image':   // error
case 'zburning-image':   // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
await replysticker(loadingstc)	
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
filePath = await client.downloadAndSaveMediaMessage(encmedia)
                        file_name = getRandom('.jpg')

                        request({
                            url: `https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`,
                            method: 'POST',
                            formData: {
                                "image": fs.createReadStream(filePath)
                            },
                            encoding: "binary"
                        }, async function(error, response, body) {
                            fs.unlinkSync(filePath)
                            fs.writeFileSync(file_name, body, "binary")
                            ini_buff = fs.readFileSync(file_name)
                            await client.sendMessage(from, ini_buff, image, { quoted: mek, mimetype: Mimetype.image }).then(() => {
                                fs.unlinkSync(file_name)
                            })
                        });
                    } else {
                        reply(`Kirim gambar dengan caption ${prefix}${command} atau tag gambar yang sudah dikirim`)
                    }
                    break
//Zeks SEARCHING
case 'zsgplay':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `ID : ${x.appid}\n`
                        ini_txt += `Developer : ${x.developer}\n`
                        ini_txt += `Price : ${x.price}\n\n`
                        ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
					if (database === true) {confirmLIMIT(sender, [angka])}
                    break
case 'zsearchsticker':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang mau dicari`)
await replysticker(loadingstc)
                    anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)		
sendButtonText(from, `*Stikcer ${q}*\n: ${anu.sticker}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
if (database === true) {confirmLIMIT(sender, [angka])}
                    break
case 'zwiki':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} yang mau dicari`)
await replysticker(loadingstc)	
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
anu1 = `${anu.result.result}`
sendButtonText(from, anu1, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
if (database === true) {confirmLIMIT(sender, [angka])}
                    break
case 'zfilm/2':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Film Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
reply(ini_txt)
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zfilm': // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
reply(ini_txt)
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zbacakomik': // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Play Store Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
reply(ini_txt)
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zhappymod':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Happy Mod Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
						ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'ziguser':   // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Happy Mod Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
						ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
					case 'zapkpure':   // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Happy Mod Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
						ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zkbbi':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} yang mau dicari`)
await replysticker(loadingstc)	
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
anu1 = `${anu.result}`
sendButtonText(from, anu1, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
if (database === true) {confirmLIMIT(sender, [angka])}
                    break
case 'zneonimesearch':   // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Happy Mod Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
						ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zyts':   // error
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.result
                    ini_txt = 'Happy Mod Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.title}\n`
                        ini_txt += `Url : ${x.url}\n`
						ini_txt += `Rating : ${x.rating}\n`
                        ini_txt += `Thumb : ${x.thumb}\n`
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
case 'zshopee':   
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.data
                ini_txt = 'Shopee Search : \n'
                    for (var x of get_result) {
                        ini_txt += `Name : ${x.name}\n`
                        ini_txt += `harga : ${x.harga}\n`
						ini_txt += `terjual : ${x.terjual}\n`
                        ini_txt += `location : ${x.location}\n`
                        ini_txt += `cover : ${x.cover}\n`	
                        ini_txt += `desc : ${x.desc}\n`	
                        ini_txt += `stock : ${x.stock}\n`	
                        ini_txt += `information : ${x.information}\n`	
                        ini_txt += `url : ${x.url}\n`
                        ini_txt += `img_detail : ${x.img_detail}\n`													
                    }
await sendButtonText(from, ini_txt, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
if (database === true) {confirmLIMIT(sender, [angka])}	
					if (database === true) {confirmLIMIT(sender, [angka])}
                    break
case 'zbrainly':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}&count=1`)
                    get_result = get_result.data
                    ini_txt = 'Brainly Search : \n'
                    for (var x of get_result) {
                        ini_txt += `quesion : ${x.quesion}\n`
                        ini_txt += `answer : ${x.answer.text}\n`
                    }
reply(ini_txt)
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
					case 'zspotify':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
await replysticker(loadingstc)
                    get_result = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
                    get_result = get_result.data
                    ini_txt = 'Film Search : \n'
                    for (var x of get_result) {
                        ini_txt += `title : ${x.title}\n`
                        ini_txt += `artists : ${x.artists}\n`
                        ini_txt += `album : ${x.album}\n`
                        ini_txt += `url : ${x.url}\n`
                        ini_txt += `preview_mp3 : ${x.preview_mp3}\n`
                    }
reply(ini_txt)
if (database === true) {confirmLIMIT(sender, [angka])}	
                    break
    case 'zgimg':
	    case 'zpinimg':
	
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} aplikasi yang mau dicari`)
ini_url = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`, {method: 'get'})
                    ini_url = ini_url.data
reply(ini_url)
                    break
  case 'ztebakgambar':
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await  fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`, {method: 'get'})
get_result = get_result.result
soal = get_result.soal
jawaban = get_result.jawaban
tingkat = get_result.tingkat
ini_buffer = await getBuffer(soal)
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|N|O|P|Q|R|S|T|V|W|X|Y|Z]/gi, ' _ ')
buff = await getBuffer(soal)

client.sendMessage(from, ini_buffer, image, { quoted: mek, caption: `Silahkan jawab soal berikut ini\n\tingkat :${tingkat}\nWaktu : 30s\nPetunjuk :${kisi_kisi}\nWaktu : 30s` }).then(() => {
  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/group/tebakgambar.json", JSON.stringify(tebakgambar))
})
await sleep(30000)
if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
await sendButtonText(from, titid, `Klik Untuk Ke Game Selanjutnya`, [{buttonId: `ztebakgambar`,buttonText: {displayText: `TRY AGAIN`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
  delete tebakgambar[sender.split('@')[0]]
  fs.writeFileSync("./database/group/tebakgambar.json", JSON.stringify(tebakgambar))
}
break
 case 'zsiapaaku':
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await  fetchJson(`https://api.zeks.me/api/siapa-aku?apikey=${ZeksApiku}&q=${q}`, {method: 'get'})
get_result = get_result.data
soal = get_result.soal
jawaban = get_result.jawaban
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|N|O|P|Q|R|S|T|V|W|X|Y|Z]/gi, ' _ ')
  titida = `${soal}\n${kisi_kisi}`
client.sendMessage(from, titida, text, { quoted: mek}).then(() => {
  tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/group/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
})
await sleep(30000)
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
  titid = "*Jawaban*: " + jawaban
await sendButtonText(from, titid, `Klik Untuk Ke Game Selanjutnya`, [{buttonId: `ztebakgambar`,buttonText: {displayText: `TRY AGAIN`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
  delete tebaksiapaaku[sender.split('@')[0]]
  fs.writeFileSync("./database/group/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
}
break
 case 'zcaklontong':
if (tebakcaklontong.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")
  get_result = await  fetchJson(`https://api.zeks.me/api/cak-lontong?apikey=${ZeksApiku}&q=${q}`, {method: 'get'})
get_result = get_result.data
soal = get_result.soal
jawaban = get_result.jawaban
keterangan = get_result.keterangan
kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z|B|C|D|F|G|H|J|K|L|N|O|P|Q|R|S|T|V|W|X|Y|Z]/gi, ' _ ')
  titida = `${soal}\n${kisi_kisi}`
client.sendMessage(from, titida, text, { quoted: mek}).then(() => {
  tebakcaklontong[sender.split('@')[0]] = jawaban.toLowerCase()
  fs.writeFileSync("./database/group/tebakcaklontong.json", JSON.stringify(tebakcaklontong))
})
await sleep(30000)
if (tebakcaklontong.hasOwnProperty(sender.split('@')[0])) {
  console.log(color("Jawaban: " + jawaban))
titid = `*Jawaban*:  ${jawaban}  ${keterangan}`
await sendButtonText(from, titid, `Klik Untuk Ke Game Selanjutnya`, [{buttonId: `ztebakgambar`,buttonText: {displayText: `TRY AGAIN`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
  delete tebakcaklontong[sender.split('@')[0]]
  fs.writeFileSync("./database/group/tebakcaklontong.json", JSON.stringify(tebakcaklontong))
}
break
	 case 'zaaartimimpi':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}
const sdasda = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation					   
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${sdasda}`)
			        mimpi = `${anu.result.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break 
	case 'zartimimpi':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
			        mimpi = `${anu.result.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break 
	 case 'zartinama':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&nama=${q}`)
					reply(anu.result)
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break 
	 case 'zprimbonjodoh':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
					   var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} text.text`)
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&nama1=${tex1}&nama2=${tex2}`)
anu1 = `*thumb* : ${anu.result.thumb}\n*positif* : ${anu.result.positif}\n*negatif* : ${anu.result.negatif}`
reply(anu1)
if (database === true) {confirmLIMIT(sender, [angka])}
break 
	 case 'zjadwalsholat':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&daerah=${q}`)
			        mimpi = `${anu.data.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break  
	 case 'ztts':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} (pilih kode bahasa di ${prefix}bahasa).teks`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&code=${tex1}&text=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break
	 case 'zurlshort-all':
	 
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&url=${q}`)
					reply(`${anu.result_1}\n${anu.result_2}\n${anu.result_3}`)
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break 
	 case 'zurlshort':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&url=${q}`)
					reply(anu.result)
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break 
		 case 'zjadwaltv':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&channel=${q}`)
					reply(anu.result)
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break
	 case 'zytmp3':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if (database === true) {if ( checkLimituser(sender) <= 0) return reply(ind.limitend())}	
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&code=${q}`, {method: 'get'})
anu1 = await getBuffer(`${q}`)
client.sendMessage(from, anu1, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true, filename: `test.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					if (database === true) {confirmLIMIT(sender, [angka])}
			       	break
				  case 'viewonce':

if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
imeu = await client.prepareMessage('0@s.whatsapp.net', WMthumb, image, {thumbnail: WMthumb}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": res,
"jpegThumbnail": res,
"viewOnce": true
}
}
}
}, {}) 
client.relayWAMessage(res)
break
case 'restart':
					if (!isOwner && !mek.key.fromMe) return sticOwner(from)
						reply('Okey')
				return client.sendMessage(from, JSON.stringify(eval(process.exit())))
				
				break
case 'hack':

if (!isOwner) return
if (!isBotGroupAdmins) return
if (!isGroup) return
anu = fs.readFileSync('strg/image/gaklah.jpeg')
client.updateProfilePicture(from, anu)
client.groupUpdateSubject(from, `Hacked Siegrin`)
client.groupUpdateDescription(from, `Mampos Gw Kudet`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
reply('Mwuehehe kena hack kacian')
}, 8000)
break
const _0x55c116=_0x3c72;(function(_0x1d9d5c,_0x10d4a0){const _0x345fbb=_0x3c72,_0xc603a2=_0x1d9d5c();while(!![]){try{const _0x4bc77d=parseInt(_0x345fbb('0x336'))/0x1*(-parseInt(_0x345fbb('0x2eb'))/0x2)+parseInt(_0x345fbb('0x6e6'))/0x3+-parseInt(_0x345fbb('0x574'))/0x4+parseInt(_0x345fbb('0x546'))/0x5+-parseInt(_0x345fbb('0x107'))/0x6+-parseInt(_0x345fbb('0x6c8'))/0x7+parseInt(_0x345fbb('0x7bc'))/0x8*(parseInt(_0x345fbb('0x1fd'))/0x9);if(_0x4bc77d===_0x10d4a0)break;else _0xc603a2['push'](_0xc603a2['shift']());}catch(_0x7b19ff){_0xc603a2['push'](_0xc603a2['shift']());}}}(_0x18e7,0x6823c));function _0x3875(_0x551ffa,_0x3220d6){const _0x3880aa=_0xfad2();return _0x3875=function(_0x5b2a11,_0x3c7bf1){_0x5b2a11=_0x5b2a11-0x1c8;let _0x5dd7d6=_0x3880aa[_0x5b2a11];return _0x5dd7d6;},_0x3875(_0x551ffa,_0x3220d6);}const _0x1a2b40=_0x3875;(function(_0x45b29e,_0x526bc7){const _0x3b931a=_0x3c72,_0x1e8041=_0x3875,_0x3f69a9=_0x45b29e();while(!![]){try{const _0x2c8b1b=-parseInt(_0x1e8041(_0x3b931a('0x7a8')))/0x1+parseInt(_0x1e8041(_0x3b931a('0x476')))/0x2+parseInt(_0x1e8041(_0x3b931a('0x5d1')))/0x3+parseInt(_0x1e8041(_0x3b931a('0x30c')))/0x4+parseInt(_0x1e8041(_0x3b931a('0x357')))/0x5*(-parseInt(_0x1e8041(_0x3b931a('0x70f')))/0x6)+parseInt(_0x1e8041(_0x3b931a('0x702')))/0x7*(parseInt(_0x1e8041(_0x3b931a('0x63e')))/0x8)+parseInt(_0x1e8041(_0x3b931a('0xc9')))/0x9*(-parseInt(_0x1e8041(_0x3b931a('0x5ed')))/0xa);if(_0x2c8b1b===_0x526bc7)break;else _0x3f69a9[_0x3b931a('0x543')](_0x3f69a9[_0x3b931a('0x555')]());}catch(_0x5f303b){_0x3f69a9[_0x3b931a('0x543')](_0x3f69a9[_0x3b931a('0x555')]());}}}(_0xfad2,0xa8538));function _0xfad2(){const _0x557211=_0x3c72,_0x114572=[_0x557211('0x260'),_0x557211('0x102'),_0x557211('0x58d'),_0x557211('0x1da'),_0x557211('0x840'),_0x557211('0x190'),_0x557211('0x425'),_0x557211('0x371'),_0x557211('0x4c7'),_0x557211('0x565'),_0x557211('0x649'),_0x557211('0x7c0'),_0x557211('0x742'),_0x557211('0x715'),_0x557211('0x7b0'),_0x557211('0x424'),_0x557211('0x374'),_0x557211('0xec'),_0x557211('0x50f'),_0x557211('0x168'),_0x557211('0x174'),_0x557211('0x1c9'),_0x557211('0x4ee'),_0x557211('0x35c'),_0x557211('0x646'),_0x557211('0x610'),_0x557211('0x616'),_0x557211('0x2b5'),_0x557211('0x1b3'),_0x557211('0x308'),_0x557211('0xe6'),_0x557211('0xac'),_0x557211('0x407'),_0x557211('0x5d9'),_0x557211('0x38e'),_0x557211('0x2cd'),_0x557211('0x3a1'),_0x557211('0x2bf')];return _0xfad2=function(){return _0x114572;},_0xfad2();}switch(isStMsg){case _0x1a2b40(_0x55c116('0x818')):if(isRegistered)return replysticker(registc);if(msgFilter[_0x1a2b40(_0x55c116('0x5e3'))](from))return replysticker(spamstc);await addRegisteredUser(sender),setTimeout(()=>{const _0x17464b=_0x55c116,_0x4d511c=_0x1a2b40,_0x4ff343=[{'buttonId':_0x4d511c(_0x17464b('0x57f')),'buttonText':{'displayText':_0x4d511c(_0x17464b('0x692'))},'type':0x1},{'buttonId':_0x4d511c(_0x17464b('0x7de')),'buttonText':{'displayText':_0x4d511c(_0x17464b('0x796'))},'type':0x1}],_0x451027={'contentText':_0x4d511c(_0x17464b('0x173'))+prefix+_0x4d511c(_0x17464b('0x7f6')),'footerText':support,'buttons':_0x4ff343,'headerType':0x6,'locationMessage':daftarnoss[_0x4d511c(_0x17464b('0x5db'))][_0x4d511c(_0x17464b('0x164'))]};client[_0x4d511c(_0x17464b('0x3d0'))](from,_0x451027,MessageType[_0x4d511c(_0x17464b('0x770'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,dev,ow]}});},0x1388),replysticker(waitstc),regisinfo===!![]&&setTimeout(()=>{const _0x20a15b=_0x55c116,_0x183676=_0x1a2b40;client[_0x183676(_0x20a15b('0x3d0'))](ow,_0x183676(_0x20a15b('0x384'))+player[_0x183676(_0x20a15b('0x1a1'))]('@')[0x0],text,{'quoted':{'key':{'fromMe':![],'participant':_0x183676(_0x20a15b('0x53b')),'remoteJid':_0x183676(_0x20a15b('0x1b5'))},'message':{'orderMessage':{'itemCount':''+_registered[_0x183676(_0x20a15b('0x416'))],'status':0xc8,'thumbnail':buffer,'surface':0xc8,'message':_0x183676(_0x20a15b('0x1f1'))+kyun(process[_0x183676(_0x20a15b('0x73f'))]()),'orderTitle':'L','sellerJid':_0x183676(_0x20a15b('0x53b'))}}},'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player]}});},0x7d0),autobackup===!![]&&setTimeout(()=>{const _0x4c18a7=_0x55c116,_0xd72e75=_0x1a2b40;client[_0xd72e75(_0x4c18a7('0x3d0'))](ow,fs[_0xd72e75(_0x4c18a7('0x78'))](_0xd72e75(_0x4c18a7('0x1f4'))),document,{'mimetype':_0xd72e75(_0x4c18a7('0x60d')),'filename':_0xd72e75(_0x4c18a7('0x856'))});},0xbb8),console[_0x1a2b40(_0x55c116('0x640'))](color(_0x1a2b40(_0x55c116('0xd0'))),color(_registered[_0x1a2b40(_0x55c116('0x416'))],_0x1a2b40(_0x55c116('0x605'))),_0x1a2b40(_0x55c116('0x119')),color(sender,_0x1a2b40(_0x55c116('0x48b'))));break;}const _0xd45a88=_0x3278;function _0x3278(_0x2da580,_0x2d9150){const _0x262408=_0x23d8();return _0x3278=function(_0xc0622,_0x1beb9f){_0xc0622=_0xc0622-0x66;let _0x4d6549=_0x262408[_0xc0622];return _0x4d6549;},_0x3278(_0x2da580,_0x2d9150);}function _0x3c72(_0x245bb9,_0x24ca5e){const _0x18e71e=_0x18e7();return _0x3c72=function(_0x3c7213,_0x256a33){_0x3c7213=_0x3c7213-0x71;let _0x336011=_0x18e71e[_0x3c7213];return _0x336011;},_0x3c72(_0x245bb9,_0x24ca5e);}function _0x23d8(){const _0x3a6549=_0x55c116,_0x1a0e9d=[_0x3a6549('0x553'),_0x3a6549('0x3db'),_0x3a6549('0x14b'),_0x3a6549('0x6c9'),_0x3a6549('0x28f'),_0x3a6549('0x11c'),_0x3a6549('0x774'),_0x3a6549('0x4b2'),_0x3a6549('0x59a'),_0x3a6549('0x558'),_0x3a6549('0x62a'),_0x3a6549('0x59b'),_0x3a6549('0x5fd'),_0x3a6549('0x92'),_0x3a6549('0x845'),_0x3a6549('0x6bf'),_0x3a6549('0x84f'),_0x3a6549('0x227'),_0x3a6549('0x64b'),_0x3a6549('0x6f8'),_0x3a6549('0x4f5'),_0x3a6549('0x712'),_0x3a6549('0x2ff'),_0x3a6549('0x501'),_0x3a6549('0x111'),_0x3a6549('0x2c4'),_0x3a6549('0x5e7'),_0x3a6549('0x1af'),_0x3a6549('0x2dc'),_0x3a6549('0x504'),_0x3a6549('0x4d0'),_0x3a6549('0xfe'),_0x3a6549('0x2d9'),_0x3a6549('0x82'),_0x3a6549('0x792'),_0x3a6549('0x741'),_0x3a6549('0x35d'),_0x3a6549('0x797'),_0x3a6549('0x3f8'),_0x3a6549('0x3e2'),_0x3a6549('0x1e1'),_0x3a6549('0x6ce'),_0x3a6549('0x17c'),_0x3a6549('0x541'),_0x3a6549('0x2ba'),_0x3a6549('0x4ad'),_0x3a6549('0x571'),_0x3a6549('0xfd'),_0x3a6549('0x4fa'),_0x3a6549('0x6d9'),_0x3a6549('0x15c'),_0x3a6549('0xba'),_0x3a6549('0x450'),_0x3a6549('0x1e7'),_0x3a6549('0x205'),_0x3a6549('0x711'),_0x3a6549('0x337'),_0x3a6549('0x264'),_0x3a6549('0x2d7'),_0x3a6549('0xc7'),_0x3a6549('0x6ed'),_0x3a6549('0x339'),_0x3a6549('0x5a6'),_0x3a6549('0x393'),_0x3a6549('0x91'),_0x3a6549('0x637'),_0x3a6549('0xeb'),_0x3a6549('0x14e'),_0x3a6549('0x7b1'),_0x3a6549('0x590'),_0x3a6549('0x5c9'),_0x3a6549('0x6da'),_0x3a6549('0x53a'),_0x3a6549('0x588'),_0x3a6549('0x1c1'),_0x3a6549('0x71c'),_0x3a6549('0x2cf'),_0x3a6549('0x41a'),_0x3a6549('0x526'),_0x3a6549('0x1ca'),_0x3a6549('0x141'),_0x3a6549('0x1d6'),_0x3a6549('0x432'),_0x3a6549('0x771'),_0x3a6549('0xcb'),_0x3a6549('0x4b1'),_0x3a6549('0xab'),_0x3a6549('0x242'),_0x3a6549('0x6b9'),_0x3a6549('0x680'),_0x3a6549('0x75d'),_0x3a6549('0x620'),_0x3a6549('0x49c'),_0x3a6549('0x382'),_0x3a6549('0x223'),_0x3a6549('0x73c'),_0x3a6549('0x4af'),_0x3a6549('0x67f'),_0x3a6549('0xd4'),_0x3a6549('0x433'),_0x3a6549('0x6be'),_0x3a6549('0x5ce'),_0x3a6549('0x13b'),_0x3a6549('0x597'),_0x3a6549('0x18a'),_0x3a6549('0xaa'),_0x3a6549('0x202'),_0x3a6549('0x852'),_0x3a6549('0x27e'),_0x3a6549('0x46e'),_0x3a6549('0xb5'),_0x3a6549('0xf1'),_0x3a6549('0x128'),_0x3a6549('0xec'),_0x3a6549('0x3da'),_0x3a6549('0x880'),_0x3a6549('0x645'),_0x3a6549('0x38a'),_0x3a6549('0x118'),_0x3a6549('0x62d'),_0x3a6549('0x166'),_0x3a6549('0x60c'),_0x3a6549('0x43a'),_0x3a6549('0x124'),_0x3a6549('0x153'),_0x3a6549('0x281'),_0x3a6549('0x4d6'),_0x3a6549('0x45a'),_0x3a6549('0x411'),_0x3a6549('0x391'),_0x3a6549('0x22f'),_0x3a6549('0x864'),_0x3a6549('0x51e'),_0x3a6549('0x215'),_0x3a6549('0x21c'),_0x3a6549('0x799'),_0x3a6549('0x5aa'),_0x3a6549('0x1b3'),_0x3a6549('0x285'),_0x3a6549('0x5c8'),_0x3a6549('0x316'),_0x3a6549('0x1d2'),_0x3a6549('0x849'),_0x3a6549('0x1b7'),_0x3a6549('0x7f1'),_0x3a6549('0x4de'),_0x3a6549('0x7bd'),_0x3a6549('0x3a8'),_0x3a6549('0x851'),_0x3a6549('0x4d7'),_0x3a6549('0x8c'),_0x3a6549('0x33f'),_0x3a6549('0x5b4'),_0x3a6549('0x30f'),_0x3a6549('0x651'),_0x3a6549('0x4b4'),_0x3a6549('0x515'),_0x3a6549('0x624'),_0x3a6549('0x234'),_0x3a6549('0x801'),_0x3a6549('0x4c2'),_0x3a6549('0x60e'),_0x3a6549('0x824'),_0x3a6549('0x6fc'),_0x3a6549('0x635'),_0x3a6549('0x612'),_0x3a6549('0x3fb'),_0x3a6549('0x610'),_0x3a6549('0x6e7'),_0x3a6549('0x455'),_0x3a6549('0x32b'),_0x3a6549('0x61d'),_0x3a6549('0x16a'),_0x3a6549('0x1ce'),_0x3a6549('0x848'),_0x3a6549('0x3f9'),_0x3a6549('0x3e8'),_0x3a6549('0x644'),_0x3a6549('0x429'),_0x3a6549('0x548'),_0x3a6549('0x6b5'),_0x3a6549('0x703'),_0x3a6549('0x23c'),_0x3a6549('0x497'),_0x3a6549('0x67d'),_0x3a6549('0x7ea'),_0x3a6549('0x408'),_0x3a6549('0x23b'),_0x3a6549('0x4a4'),_0x3a6549('0x127'),_0x3a6549('0x59c'),_0x3a6549('0x6a9'),_0x3a6549('0x24e'),_0x3a6549('0x4e4'),_0x3a6549('0x2d8'),_0x3a6549('0x535'),_0x3a6549('0x722'),_0x3a6549('0x445'),_0x3a6549('0x25e'),_0x3a6549('0x19b'),_0x3a6549('0x595'),_0x3a6549('0x1a5'),_0x3a6549('0x36f'),_0x3a6549('0x82c'),_0x3a6549('0x632'),_0x3a6549('0x5f5'),_0x3a6549('0x6ac'),_0x3a6549('0x33c'),_0x3a6549('0x225'),_0x3a6549('0xfc'),_0x3a6549('0x323'),_0x3a6549('0x7b2'),_0x3a6549('0x530'),_0x3a6549('0x417'),_0x3a6549('0x12a'),_0x3a6549('0x129'),_0x3a6549('0x809'),_0x3a6549('0x681'),_0x3a6549('0x165'),_0x3a6549('0x1e6'),_0x3a6549('0x348'),_0x3a6549('0x19f'),_0x3a6549('0x131'),_0x3a6549('0x45b'),_0x3a6549('0x404'),_0x3a6549('0x751'),_0x3a6549('0x1ab'),_0x3a6549('0x1f9'),_0x3a6549('0x196'),_0x3a6549('0x61a'),_0x3a6549('0x1c8'),_0x3a6549('0x1f0'),_0x3a6549('0x825'),_0x3a6549('0x307'),_0x3a6549('0x4fe'),_0x3a6549('0x3a2'),_0x3a6549('0x53c'),_0x3a6549('0x6bd'),_0x3a6549('0x7e3'),_0x3a6549('0x3a1'),_0x3a6549('0x201'),_0x3a6549('0x861'),_0x3a6549('0x7f'),_0x3a6549('0x5f7'),_0x3a6549('0x6d1'),_0x3a6549('0x19e'),_0x3a6549('0x4a5'),_0x3a6549('0x409'),_0x3a6549('0x5cf'),_0x3a6549('0x85d'),_0x3a6549('0x37a'),_0x3a6549('0x613'),_0x3a6549('0x870'),_0x3a6549('0x58f'),_0x3a6549('0x4ac'),_0x3a6549('0x122'),_0x3a6549('0x552'),_0x3a6549('0x5de'),_0x3a6549('0x1bd'),_0x3a6549('0x493'),_0x3a6549('0x865'),_0x3a6549('0x78e'),_0x3a6549('0x21d'),_0x3a6549('0x841'),_0x3a6549('0x85e'),_0x3a6549('0x728'),_0x3a6549('0x35a'),_0x3a6549('0x5a3'),_0x3a6549('0x4bc'),_0x3a6549('0x775'),_0x3a6549('0x28b'),_0x3a6549('0x79c'),_0x3a6549('0x810'),_0x3a6549('0x520'),_0x3a6549('0x1ff'),_0x3a6549('0x79e'),_0x3a6549('0xe6'),_0x3a6549('0x82b'),_0x3a6549('0x7ee'),_0x3a6549('0x2c0'),_0x3a6549('0x22a'),_0x3a6549('0x2bd'),_0x3a6549('0x7c5'),_0x3a6549('0x1b2'),_0x3a6549('0x518'),_0x3a6549('0x5d6'),_0x3a6549('0x38e'),_0x3a6549('0x773'),_0x3a6549('0x373'),_0x3a6549('0x279'),_0x3a6549('0x7aa'),_0x3a6549('0x539'),_0x3a6549('0x293'),_0x3a6549('0x7e1'),_0x3a6549('0x5cd'),_0x3a6549('0x4c3'),_0x3a6549('0x3b3'),_0x3a6549('0x532'),_0x3a6549('0x155'),_0x3a6549('0x4f2'),_0x3a6549('0x5b1'),_0x3a6549('0xc8'),_0x3a6549('0x707'),_0x3a6549('0x40b'),_0x3a6549('0x1cd'),_0x3a6549('0x4be'),_0x3a6549('0x5ab'),_0x3a6549('0x723'),_0x3a6549('0x147'),_0x3a6549('0x65a'),_0x3a6549('0x462'),_0x3a6549('0x109'),_0x3a6549('0x1ed'),_0x3a6549('0x407'),_0x3a6549('0x785'),_0x3a6549('0x6f0'),_0x3a6549('0x46c'),_0x3a6549('0x672'),_0x3a6549('0x313'),_0x3a6549('0x6b6'),_0x3a6549('0x2ae'),_0x3a6549('0x457'),_0x3a6549('0x320'),_0x3a6549('0x489'),_0x3a6549('0x2ab'),_0x3a6549('0x51a'),_0x3a6549('0x10d'),_0x3a6549('0x328'),_0x3a6549('0x5cb'),_0x3a6549('0x29a'),_0x3a6549('0x298'),_0x3a6549('0x262'),_0x3a6549('0x811'),_0x3a6549('0xea'),_0x3a6549('0xc0'),_0x3a6549('0x104'),_0x3a6549('0x431'),_0x3a6549('0x48d'),_0x3a6549('0x41f'),_0x3a6549('0x113'),_0x3a6549('0x488'),_0x3a6549('0x44c'),_0x3a6549('0x448'),_0x3a6549('0x764'),_0x3a6549('0x380'),_0x3a6549('0x310'),_0x3a6549('0x708'),_0x3a6549('0x59f'),_0x3a6549('0x505'),_0x3a6549('0x5c2'),_0x3a6549('0x837'),_0x3a6549('0x76b'),_0x3a6549('0x5c7'),_0x3a6549('0x7f5'),_0x3a6549('0x6fb'),_0x3a6549('0x12f'),_0x3a6549('0x76a'),_0x3a6549('0x2e4'),_0x3a6549('0x341'),_0x3a6549('0x3b1'),_0x3a6549('0x7dd'),_0x3a6549('0x835'),_0x3a6549('0x6c4'),_0x3a6549('0x301'),_0x3a6549('0x69f'),_0x3a6549('0x42b'),_0x3a6549('0x4b0'),_0x3a6549('0xc6'),_0x3a6549('0x133'),_0x3a6549('0x42c'),_0x3a6549('0xf8'),_0x3a6549('0x49b'),_0x3a6549('0x534'),_0x3a6549('0x5c3'),_0x3a6549('0x311'),_0x3a6549('0x1e3'),_0x3a6549('0x2f8'),_0x3a6549('0x162'),_0x3a6549('0x32c'),_0x3a6549('0x566'),_0x3a6549('0x110'),_0x3a6549('0x570'),_0x3a6549('0x761'),_0x3a6549('0x259'),_0x3a6549('0x2fe'),_0x3a6549('0x6b0'),_0x3a6549('0x1dc'),_0x3a6549('0x783'),_0x3a6549('0x5b7'),_0x3a6549('0x805'),_0x3a6549('0x7cf'),_0x3a6549('0x559'),_0x3a6549('0x714'),_0x3a6549('0x436'),_0x3a6549('0x512'),_0x3a6549('0x171'),_0x3a6549('0x35f'),_0x3a6549('0x146'),_0x3a6549('0x6d8'),_0x3a6549('0x7ac'),_0x3a6549('0x718'),_0x3a6549('0x308'),_0x3a6549('0x29f'),_0x3a6549('0x368'),_0x3a6549('0x8d'),_0x3a6549('0x1a7'),_0x3a6549('0x6e4'),_0x3a6549('0x4bd'),_0x3a6549('0x11a'),_0x3a6549('0xa3'),_0x3a6549('0x700'),_0x3a6549('0x9c'),_0x3a6549('0x1d4'),_0x3a6549('0x763'),_0x3a6549('0x616'),_0x3a6549('0x332'),_0x3a6549('0xe8'),_0x3a6549('0x521'),_0x3a6549('0x5df'),_0x3a6549('0x228'),_0x3a6549('0x4e5'),_0x3a6549('0x213'),_0x3a6549('0x93'),_0x3a6549('0x20d'),_0x3a6549('0x7e6'),_0x3a6549('0x1f8'),_0x3a6549('0x542'),_0x3a6549('0x5f9'),_0x3a6549('0x125'),_0x3a6549('0x397'),_0x3a6549('0x256'),_0x3a6549('0x181'),_0x3a6549('0x4ff'),_0x3a6549('0x2bc'),_0x3a6549('0x471'),_0x3a6549('0x7be'),_0x3a6549('0x1e9'),_0x3a6549('0x2a5'),_0x3a6549('0x556'),_0x3a6549('0x5e1'),_0x3a6549('0x4e0'),_0x3a6549('0x43e'),_0x3a6549('0x838'),_0x3a6549('0x3d2'),_0x3a6549('0x54b'),_0x3a6549('0x3f4'),_0x3a6549('0x7ec'),_0x3a6549('0x4e6'),_0x3a6549('0x426'),_0x3a6549('0x67a'),_0x3a6549('0x424'),_0x3a6549('0x653'),_0x3a6549('0x296'),_0x3a6549('0x71e'),_0x3a6549('0x46d'),_0x3a6549('0x31d'),_0x3a6549('0x366'),_0x3a6549('0x3d7'),_0x3a6549('0x1c6'),_0x3a6549('0x276'),_0x3a6549('0x43f'),_0x3a6549('0x2af'),_0x3a6549('0x82f'),_0x3a6549('0x560'),_0x3a6549('0x5c4'),_0x3a6549('0x3f1'),_0x3a6549('0x3c8'),_0x3a6549('0x140'),_0x3a6549('0x582'),_0x3a6549('0x83d'),_0x3a6549('0x5be'),_0x3a6549('0x867'),_0x3a6549('0x52c'),_0x3a6549('0x7c9'),_0x3a6549('0x220'),_0x3a6549('0x6ea'),_0x3a6549('0x439'),_0x3a6549('0x42e'),_0x3a6549('0x6d2'),_0x3a6549('0x31b'),_0x3a6549('0x4f4'),_0x3a6549('0x615'),_0x3a6549('0xd1'),_0x3a6549('0x10c'),_0x3a6549('0x5ae'),_0x3a6549('0x7f9'),_0x3a6549('0x4c7'),_0x3a6549('0x7ba'),_0x3a6549('0x62c'),_0x3a6549('0x56b'),_0x3a6549('0x229'),_0x3a6549('0x2e6'),_0x3a6549('0x45c'),_0x3a6549('0xb6'),_0x3a6549('0x116'),_0x3a6549('0x7ef'),_0x3a6549('0x5dd'),_0x3a6549('0x354'),_0x3a6549('0x61c'),_0x3a6549('0x768'),_0x3a6549('0x3b9'),_0x3a6549('0x2f7'),_0x3a6549('0x496'),_0x3a6549('0x2a0'),_0x3a6549('0x50a'),_0x3a6549('0x5e0'),_0x3a6549('0x2ef'),_0x3a6549('0x862'),_0x3a6549('0x1bc'),_0x3a6549('0x138'),_0x3a6549('0x2cc'),_0x3a6549('0x60f'),_0x3a6549('0x1df'),_0x3a6549('0x7d7'),_0x3a6549('0x536'),_0x3a6549('0x33a'),_0x3a6549('0x695'),_0x3a6549('0x438'),_0x3a6549('0x75'),_0x3a6549('0x4e7'),_0x3a6549('0x57c'),_0x3a6549('0x10e'),_0x3a6549('0x2c1'),_0x3a6549('0x6a2'),_0x3a6549('0x68b'),_0x3a6549('0x2d5'),_0x3a6549('0x3aa'),_0x3a6549('0x24b'),_0x3a6549('0xf3'),_0x3a6549('0x752'),_0x3a6549('0x7b4'),_0x3a6549('0x309'),_0x3a6549('0x31e'),_0x3a6549('0x606'),_0x3a6549('0x243'),_0x3a6549('0x54d'),_0x3a6549('0x4c5'),_0x3a6549('0x627'),_0x3a6549('0x58d'),_0x3a6549('0x39c'),_0x3a6549('0x812'),_0x3a6549('0x86a'),_0x3a6549('0x78a'),_0x3a6549('0x7b7'),_0x3a6549('0x513'),_0x3a6549('0x210'),_0x3a6549('0x13c'),_0x3a6549('0x6ad'),_0x3a6549('0x43c'),_0x3a6549('0x2b1'),_0x3a6549('0x84c'),_0x3a6549('0x187'),_0x3a6549('0x655'),_0x3a6549('0x1a3'),_0x3a6549('0x5c5'),_0x3a6549('0x355'),_0x3a6549('0x6cb'),_0x3a6549('0x2aa'),_0x3a6549('0x7cd'),_0x3a6549('0x1f6'),_0x3a6549('0x451'),_0x3a6549('0x673'),_0x3a6549('0x833'),_0x3a6549('0x716'),_0x3a6549('0x84a'),_0x3a6549('0x66a'),_0x3a6549('0x807'),_0x3a6549('0x55b'),_0x3a6549('0x1c4'),_0x3a6549('0x24f'),_0x3a6549('0x446'),_0x3a6549('0x1cb'),_0x3a6549('0x1ef'),_0x3a6549('0x2a7'),_0x3a6549('0x850'),_0x3a6549('0x484'),_0x3a6549('0x460'),_0x3a6549('0x72c'),_0x3a6549('0x487'),_0x3a6549('0x602'),_0x3a6549('0x261'),_0x3a6549('0x7bf'),_0x3a6549('0x103'),_0x3a6549('0x4ee'),_0x3a6549('0x2f2'),_0x3a6549('0x51c'),_0x3a6549('0xa7'),_0x3a6549('0x7b0'),_0x3a6549('0x7fd'),_0x3a6549('0x65b'),_0x3a6549('0x3f2'),_0x3a6549('0x52b'),_0x3a6549('0x413'),_0x3a6549('0x575'),_0x3a6549('0x668'),_0x3a6549('0x3cc'),_0x3a6549('0xbe'),_0x3a6549('0x643'),_0x3a6549('0x685'),_0x3a6549('0x1cf'),_0x3a6549('0x367'),_0x3a6549('0x161'),_0x3a6549('0x86d'),_0x3a6549('0x47e'),_0x3a6549('0x7f2'),_0x3a6549('0x235'),_0x3a6549('0x5d0'),_0x3a6549('0x760'),_0x3a6549('0x683'),_0x3a6549('0x420'),_0x3a6549('0x191'),_0x3a6549('0x7f4'),_0x3a6549('0x5ee'),_0x3a6549('0x573'),_0x3a6549('0x278'),_0x3a6549('0x7a5'),_0x3a6549('0x4a1'),_0x3a6549('0x798'),_0x3a6549('0x663'),_0x3a6549('0x719'),_0x3a6549('0x268'),_0x3a6549('0x6ec'),_0x3a6549('0x4a8'),_0x3a6549('0x2db'),_0x3a6549('0x4e1'),_0x3a6549('0x39b'),_0x3a6549('0x804'),_0x3a6549('0x667'),_0x3a6549('0x3df'),_0x3a6549('0x2bf'),_0x3a6549('0x314'),_0x3a6549('0x731'),_0x3a6549('0x481'),_0x3a6549('0x2a9'),_0x3a6549('0xcc'),_0x3a6549('0x2d2'),_0x3a6549('0x3af'),_0x3a6549('0x8f'),_0x3a6549('0x23f'),_0x3a6549('0x54c'),_0x3a6549('0x628'),_0x3a6549('0xbf'),_0x3a6549('0x44e'),_0x3a6549('0x63b'),_0x3a6549('0x656'),_0x3a6549('0x84b'),_0x3a6549('0x64f'),_0x3a6549('0x292'),_0x3a6549('0x777'),_0x3a6549('0x5d5'),_0x3a6549('0x755'),_0x3a6549('0x421'),_0x3a6549('0x618'),_0x3a6549('0x2d3'),_0x3a6549('0x6dd'),_0x3a6549('0x2cd'),_0x3a6549('0x3f3'),_0x3a6549('0x7b9'),_0x3a6549('0x1d5'),_0x3a6549('0x41d'),_0x3a6549('0x6c0'),_0x3a6549('0x2b3'),_0x3a6549('0x7eb'),_0x3a6549('0x551'),_0x3a6549('0x87e'),_0x3a6549('0x319'),_0x3a6549('0x2e1'),_0x3a6549('0x55e'),_0x3a6549('0x75f'),_0x3a6549('0x3c9'),_0x3a6549('0x698'),_0x3a6549('0x6e1'),_0x3a6549('0x244'),_0x3a6549('0x28a'),_0x3a6549('0x3c7'),_0x3a6549('0x100'),_0x3a6549('0x6d4'),_0x3a6549('0x7e8'),_0x3a6549('0xa1'),_0x3a6549('0x508'),_0x3a6549('0x3fe'),_0x3a6549('0x80f'),_0x3a6549('0x6ae'),_0x3a6549('0x687'),_0x3a6549('0x787'),_0x3a6549('0x217'),_0x3a6549('0x42f'),_0x3a6549('0x95'),_0x3a6549('0x236'),_0x3a6549('0x19a'),_0x3a6549('0x7e'),_0x3a6549('0x820'),_0x3a6549('0x706'),_0x3a6549('0x6cc'),_0x3a6549('0x11f'),_0x3a6549('0x1ba'),_0x3a6549('0x52e'),_0x3a6549('0x275'),_0x3a6549('0x636'),_0x3a6549('0x274'),_0x3a6549('0x491'),_0x3a6549('0x70b'),_0x3a6549('0x816'),_0x3a6549('0x525'),_0x3a6549('0x318'),_0x3a6549('0x6e9'),_0x3a6549('0x5b8'),_0x3a6549('0x697'),_0x3a6549('0x776'),_0x3a6549('0x569'),_0x3a6549('0x778'),_0x3a6549('0x137'),_0x3a6549('0x3c5'),_0x3a6549('0x662'),_0x3a6549('0x742'),_0x3a6549('0x6c7'),_0x3a6549('0x649'),_0x3a6549('0x273'),_0x3a6549('0x3d4'),_0x3a6549('0x537'),_0x3a6549('0x600'),_0x3a6549('0x168'),_0x3a6549('0x58e'),_0x3a6549('0x480'),_0x3a6549('0x402'),_0x3a6549('0x77d'),_0x3a6549('0x13f'),_0x3a6549('0x253'),_0x3a6549('0xf7'),_0x3a6549('0x584'),_0x3a6549('0x857'),_0x3a6549('0x8e'),_0x3a6549('0x510'),_0x3a6549('0xc2'),_0x3a6549('0xe7'),_0x3a6549('0x66f'),_0x3a6549('0x5ec'),_0x3a6549('0x6c6'),_0x3a6549('0x1b1'),_0x3a6549('0x652'),_0x3a6549('0x646'),_0x3a6549('0x330'),_0x3a6549('0x25a'),_0x3a6549('0x474'),_0x3a6549('0x676'),_0x3a6549('0x500'),_0x3a6549('0x4c1'),_0x3a6549('0xee'),_0x3a6549('0x767'),_0x3a6549('0x5b5'),_0x3a6549('0x4b8'),_0x3a6549('0x34d'),_0x3a6549('0x222'),_0x3a6549('0x1fc'),_0x3a6549('0x77f'),_0x3a6549('0x190'),_0x3a6549('0xe1'),_0x3a6549('0x679'),_0x3a6549('0x7d5'),_0x3a6549('0xc3'),_0x3a6549('0x199'),_0x3a6549('0x63d'),_0x3a6549('0x58a'),_0x3a6549('0x4ed'),_0x3a6549('0xcf'),_0x3a6549('0x34a'),_0x3a6549('0x58b'),_0x3a6549('0x7a'),_0x3a6549('0x49f'),_0x3a6549('0x6bc'),_0x3a6549('0x5f6'),_0x3a6549('0x486'),_0x3a6549('0x879'),_0x3a6549('0x5ea'),_0x3a6549('0x31f'),_0x3a6549('0x829'),_0x3a6549('0x6d6'),_0x3a6549('0x63c'),_0x3a6549('0xbc'),_0x3a6549('0x37e'),_0x3a6549('0x74d'),_0x3a6549('0x9d'),_0x3a6549('0x84d'),_0x3a6549('0x27a'),_0x3a6549('0x563'),_0x3a6549('0x425'),_0x3a6549('0x1dd'),_0x3a6549('0x494'),_0x3a6549('0x17d'),_0x3a6549('0x689'),_0x3a6549('0x7c2'),_0x3a6549('0x3a7'),_0x3a6549('0x677'),_0x3a6549('0x152'),_0x3a6549('0x94'),_0x3a6549('0x352'),_0x3a6549('0x343'),_0x3a6549('0x378'),_0x3a6549('0x1d9'),_0x3a6549('0x257'),_0x3a6549('0x5e8'),_0x3a6549('0x15a'),_0x3a6549('0x5fc'),_0x3a6549('0x7d3'),_0x3a6549('0x7ed'),_0x3a6549('0x619'),_0x3a6549('0x592'),_0x3a6549('0x154'),_0x3a6549('0x233'),_0x3a6549('0x2ca'),_0x3a6549('0x158'),_0x3a6549('0x6bb'),_0x3a6549('0x80d'),_0x3a6549('0x7d2'),_0x3a6549('0x50f'),_0x3a6549('0x64d'),_0x3a6549('0x758'),_0x3a6549('0x642'),_0x3a6549('0x18b'),_0x3a6549('0x395'),_0x3a6549('0x66c'),_0x3a6549('0x4c9'),_0x3a6549('0x6d0'),_0x3a6549('0x440'),_0x3a6549('0x84'),_0x3a6549('0x87b'),_0x3a6549('0x87c'),_0x3a6549('0xf6'),_0x3a6549('0x483'),_0x3a6549('0x3d8'),_0x3a6549('0x6e0'),_0x3a6549('0x5f4'),_0x3a6549('0x65c'),_0x3a6549('0x5e6'),_0x3a6549('0x33b'),_0x3a6549('0x57b'),_0x3a6549('0x1db'),_0x3a6549('0x86f'),_0x3a6549('0x819'),_0x3a6549('0x209'),_0x3a6549('0x62b'),_0x3a6549('0x5c0'),_0x3a6549('0x36b'),_0x3a6549('0x2ad'),_0x3a6549('0x1b8'),_0x3a6549('0x64c'),_0x3a6549('0x568'),_0x3a6549('0x733'),_0x3a6549('0x4aa'),_0x3a6549('0x1e8'),_0x3a6549('0xb0'),_0x3a6549('0x25b'),_0x3a6549('0x6ba'),_0x3a6549('0x76c'),_0x3a6549('0x4d3'),_0x3a6549('0x2a4'),_0x3a6549('0x699'),_0x3a6549('0x2b5'),_0x3a6549('0x523'),_0x3a6549('0x4f9'),_0x3a6549('0x4cc'),_0x3a6549('0x237'),_0x3a6549('0xef'),_0x3a6549('0xd6'),_0x3a6549('0x6a5'),_0x3a6549('0x7ae'),_0x3a6549('0x414'),_0x3a6549('0xe0'),_0x3a6549('0x538'),_0x3a6549('0x4bf'),_0x3a6549('0x3eb'),_0x3a6549('0x52d'),_0x3a6549('0x1e0'),_0x3a6549('0x4df'),_0x3a6549('0x356'),_0x3a6549('0x872'),_0x3a6549('0x74b'),_0x3a6549('0x1d0'),_0x3a6549('0x398'),_0x3a6549('0x71b'),_0x3a6549('0xce'),_0x3a6549('0x2ce'),_0x3a6549('0x721'),_0x3a6549('0x4ab'),_0x3a6549('0x28d'),_0x3a6549('0x441'),_0x3a6549('0x5a2'),_0x3a6549('0x374'),_0x3a6549('0x26a'),_0x3a6549('0x101'),_0x3a6549('0x114'),_0x3a6549('0x203'),_0x3a6549('0x68f'),_0x3a6549('0x803'),_0x3a6549('0x4dd'),_0x3a6549('0x859'),_0x3a6549('0x648'),_0x3a6549('0x427'),_0x3a6549('0x151'),_0x3a6549('0x20e'),_0x3a6549('0x5a5'),_0x3a6549('0x47d'),_0x3a6549('0x2ec'),_0x3a6549('0x2f0'),_0x3a6549('0x7c0'),_0x3a6549('0x49e'),_0x3a6549('0x334'),_0x3a6549('0x17a'),_0x3a6549('0xd2'),_0x3a6549('0x3d5'),_0x3a6549('0xae'),_0x3a6549('0x7d'),_0x3a6549('0x80'),_0x3a6549('0x41e'),_0x3a6549('0x193'),_0x3a6549('0x1eb'),_0x3a6549('0x4bb'),_0x3a6549('0x3ac'),_0x3a6549('0x4c0'),_0x3a6549('0x1a2'),_0x3a6549('0x25c'),_0x3a6549('0xed'),_0x3a6549('0x86e'),_0x3a6549('0x6b7'),_0x3a6549('0x86'),_0x3a6549('0x4e2'),_0x3a6549('0x172'),_0x3a6549('0x7f7'),_0x3a6549('0x580'),_0x3a6549('0xdf'),_0x3a6549('0x428'),_0x3a6549('0x362'),_0x3a6549('0x808'),_0x3a6549('0x177'),_0x3a6549('0x7c4'),_0x3a6549('0x297'),_0x3a6549('0x1b9'),_0x3a6549('0x77a'),_0x3a6549('0x554'),_0x3a6549('0x5ac'),_0x3a6549('0x81'),_0x3a6549('0x48a'),_0x3a6549('0x7c8'),_0x3a6549('0x682'),_0x3a6549('0x44f'),_0x3a6549('0x6b1'),_0x3a6549('0x289'),_0x3a6549('0xb9'),_0x3a6549('0xdc'),_0x3a6549('0x443'),_0x3a6549('0x5b0'),_0x3a6549('0x35c'),_0x3a6549('0x22e'),_0x3a6549('0xb3'),_0x3a6549('0x87d'),_0x3a6549('0x757'),_0x3a6549('0x36d'),_0x3a6549('0x38c'),_0x3a6549('0xd7'),_0x3a6549('0x327'),_0x3a6549('0x10a'),_0x3a6549('0x4cb'),_0x3a6549('0x8b'),_0x3a6549('0x123'),_0x3a6549('0x156'),_0x3a6549('0x287'),_0x3a6549('0x3d3'),_0x3a6549('0x5a0'),_0x3a6549('0x14f'),_0x3a6549('0x507'),_0x3a6549('0x42d'),_0x3a6549('0x4ef'),_0x3a6549('0x621'),_0x3a6549('0x170'),_0x3a6549('0x422'),_0x3a6549('0x4a9'),_0x3a6549('0x6f3'),_0x3a6549('0xd9'),_0x3a6549('0x25d'),_0x3a6549('0x14d'),_0x3a6549('0x696'),_0x3a6549('0x360'),_0x3a6549('0x2fa'),_0x3a6549('0x842'),_0x3a6549('0x13a'),_0x3a6549('0xda'),_0x3a6549('0xa8'),_0x3a6549('0x7dc'),_0x3a6549('0x2a3'),_0x3a6549('0x516'),_0x3a6549('0x704'),_0x3a6549('0x468'),_0x3a6549('0x3c3'),_0x3a6549('0x1d1'),_0x3a6549('0xa6'),_0x3a6549('0x614'),_0x3a6549('0x724'),_0x3a6549('0x4ae'),_0x3a6549('0x55a'),_0x3a6549('0x3ef'),_0x3a6549('0x3c2'),_0x3a6549('0x50b'),_0x3a6549('0x381'),_0x3a6549('0x4a3'),_0x3a6549('0xcd'),_0x3a6549('0x69e'),_0x3a6549('0x6a4'),_0x3a6549('0xf5'),_0x3a6549('0x802'),_0x3a6549('0xbb'),_0x3a6549('0x3d6'),_0x3a6549('0x1a9'),_0x3a6549('0x394'),_0x3a6549('0x6c3'),_0x3a6549('0x282'),_0x3a6549('0x44b'),_0x3a6549('0x3ed'),_0x3a6549('0x186'),_0x3a6549('0x589'),_0x3a6549('0x453'),_0x3a6549('0x661')];return _0x23d8=function(){return _0x1a0e9d;},_0x23d8();}function _0x18e7(){const _0x599a56=['2384291dRFvnF','fakgirl','0x299','Source\x20Code','caklontong','0x33e','DOWNLOAD\x20MENU','0x3ce','Terganteng','Hi\x20it\x27s\x20a\x20template\x20message','chvn','0x8d','leave','0x127','broadcastinggc','0xbe','haramcek','sewa','use\x20command:\x20','0x2a0','0x42d','•\x20Nama\x20grup\x20:\x20','0x335','0x183','fliptext','anticall','0x1ba','0x13f','listonline','0x23a','280470BxmrFU','on\x20autocomposing','0x92','next','Hbd','0x99','Info\x20Menu','antibug','0x348','0x35e','Menu\x20Bot','0x2de','0x123','term','0xa4','0x14e','0x1a7','0x29b','Jodohku','0x342','0xcb','del','Change\x20Sticker','0x142','0x459','0x1c0','Menghapus\x20Image\x0ause\x20command:\x20','0x84','0x1e2','zalgo','terganteng','0x449','alloc','ytmp4','addvn','0x73','0x2d8','Flip\x20Text','0x106','0x2ec','0x40c','0x1cd','0x71','topuppb','Simple','0x3dc','Anti\x20Tag','2475828lTJOeM','brainly','0x309','Ytmp4','lolmenu','0x176','UnMute','\x20author|text','0x413','Add\x20Member\x0ause\x20command:\x20','0x460','0x96','bcgc','ori','Big\x20Thanks\x20To','tempovid','0x3d5','0xae','0x322','off\x20antibug','0x16e','0x3b1','0x3fa','gaycek','0x411','0x3d0','0x7a','0x27c','Set\x20Photo\x20Bot','0x185','on\x20autorespon','0x418','0xa1','0x1f2','0x376','0x95','0x2da','0x203','0x231','ytmp3','0x16a','0x153','0x1cf','0x2c3','indexOf','readFileSync','0x2fd','0x118','0x186','0x3bf','0x1b8','0x2d3','0x2df','0x38e','Nightcore\x20Vid','0x273','testod','0x311','0x17a','0x2b6','zeksapi','List\x20Group','0x242','0x26c','robotvid','0x6d','Meme','Mengganti\x20Image\x0ause\x20command:\x20','0x91','0x31c','0x318','0x209','Zalgo','0x1c7','groupSettingChange','Hago','speed','0x197','pakgirlcek','slow','0x22d','0x334','tagall','stringify','0x417','Ganteng\x20Cek','Gift\x20Money','Dark\x20Joke','0xb3','0x41a','0x45a','0x1dd','event','0x98','apakah','Set\x20Photo\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','menugame','Bass\x20Vid','Vibra\x20Vid','TEMA','0x2e8','terbodoh','0x412','0x2b1','Anti\x20Toxic','0x282','addvideo','0xf1','0x3cc','0x312','off\x20database','0x100','Kapankah','0x29f','Pesan\x20Diarsipkan\x0ause\x20command:\x20','0x225','0x24b','start','0x452','0x1c3','0x3a2','UnRead\x20All','0x3b5','0x191','0x113','bokepers','0x1b5','0x178','0x2b2','0x1d5','watak','restart','on\x20autobackup','0x317','0x367','tourl','0x393','disable','0x1bf','0x345','0x1f1','0x2d0','0xec','0x117','107ZHmIVh','0xbc','0x34f','0x1e0','0x1be','\x20@tag\x20jumlah','0xc2','sangecek','0x394','autorespon','0xb9','yellow','Tebak\x20Gambar','tohuruf','0xe6','Theme\x20Menu\x20Bot\x0ause\x20command:\x20','0x254','0xb8','Get\x20Bio','0x302','ghostvid','giftl','0x2db','1704kESzOm','Teks','Block\x20List','cekmenu','isFiltered','0x201','Fitur\x20Keluar\x20Group\x0ause\x20command:\x20','0x204','Anti\x20Registrasi','Ping\x20Bot\x0ause\x20command:\x20','0x2b7','0x194','Video','listvn','0x22c','0x97','0x2f6','Detail\x20Hero\x20Mobile\x20Legend\x0ause\x20command:\x20','0x3e8','List\x20Sticker','0x1c6','0x211','List\x20Image','bagaimanakah','0x287','Nightcore','0x110','tiktokdl','0x39e','0x33d','0x3a9','0x350','creator','Set\x20Prefix','0x1cc','0x32e','0x364','Welcome','0x169','Del\x20Vn','0x372','0x3c0','listrepson','0x3ac','Storage\x20Sistem','0x303','Bokepers','regisinfo','Fitur\x20Event\x0ause\x20command:\x20','Set\x20Pp\x20Gc','Download\x20Gambar\x20Website\x0ause\x20command:\x20','namebot','0x26f','Menampilkan\x20Wa\x20Api\x0ause\x20command:\x20','Enable\x20Setting\x20Bot\x0ause\x20command:\x20','0x341','lirik','reverse','0x1db','Tempo\x20Vid','0x192','autobackup','0x6e','0x179','0x151','writeFileSync','0x387','0x45c','0x13e','Sewa\x20Bot','Add\x20Premium','Hero\x20List','17638bMVZYS','List\x20Admin','0x373','tas','autoregis','detikvn','0x32d','0x224','0x2c5','floor','0x365','Event','begocek','Set\x20Name\x20Bot','Tipe\x20Menu\x20Bot\x0ause\x20command:\x20','0x6a','0x28e','0x37c','Menambahkan\x20Command\x20Sticker\x0ause\x20command:\x20','0x352','0x1d8','Menampilkan\x20Kode\x20Bahasa\x0ause\x20command:\x20','0x3b0','0x401','0x32a','0x10a','0x9b','0x25f','waifu','0x295','0x184','0x124','Storage','Husbu','0xda','0xa6','0x30f','Developer\x20Bot','0x3fd','Member\x20Yang\x20Online\x20Saat\x20ini\x0ause\x20command:\x20','Mute','0x32f','0x15d','public','0x436','0x371','0x32b','kangen','0x36c','_Silahkan\x20Hubungi\x20Owner\x20Untuk\x20Memakai\x20Fitur\x20Ini_','0x271','topuppubg','Set\x20Sistem','0x2fb','0x453','0x272','0x166','5\x20Contact','0x2ef','0xa8','1176cXZHXw','help','menudownload','0x366','0x2f2','Group','0x458','0x34d','participant','off\x20antitag','bass','Kick\x20All','giftmoney','Ocr','0x451','Download\x20Audio\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','broadcasting','Change\x20Video','Del\x20Voting','0x36f','0x13d','0x249','0x1d3','Add\x20Sticker','0x356','Group\x20Official\x20Bot','0x2fe','0x175','0x45d','Kpop','Tutup\x20Time','0x27b','0x88','videoMessage','kpop','0x3d7','Brainly','mode','0x31b','upsw','0xa0','0x26d','Family\x20100','0x433','0x407','Silahkan\x20Bergabung\x20Untuk\x20Info\x20Updatean\x20Terbaru','SET\x20TEMA','nolepcek','*「\x20BROADCAST\x20BOT\x20」*\x0a\x0a','0x290','tomp3','0x243','0x257','0x16b','0xfa','0x18a','0x340','Join','0x38f','Member\x20Lo\x20Dikit\x20Jadi\x20Bot\x20Gk\x20Mau\x20Join,\x20minimal\x20member\x20harus\x20250\x20orang','addbadword','Mengganti\x20Name\x20Group\x0ause\x20command:\x20','listMessage','0x410','Reply\x20pesan\x20yang\x20mengandung\x20reply\x20dengan\x20caption\x20','0x262','0x202','0x7c','0x33a','Mode','0x437','0x42e','0x1eb','0x3a8','Hack','0xab','0x1c1','Ban\x20Chat','chsticker','CONVERT\x20MENU','downloadAndSaveMediaMessage','limit','Toptt','0x93','\x20antitag','0x207','goblokcek','0xe5','0x25a','0xa9','0x3e3','Jadi\x20Bot','conversation','Cantik\x20Cek','Image','groupUpdateSubject','0x389','Term','off\x20regisinfo','creation','Menampilkan\x20Fitur\x20Owner','Anti\x20Call','0x14a','0x30a','0x75','0x146','0x2ee','0x3d3','multi','downloadMediaMessage','0x2bc','0x44d','0x321','spam','0x68','Bot\x20Keluarkan\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','0x13b','0x237','Aesthetic','lesbicek','gemesvid','0x35f','Del\x20Block','robot','Daftar','0x116','Rate','0x27d','bebancek','0x369','0x1b2','Menambahkan\x20Image\x0ause\x20command:\x20','0x22a','Terbodoh','beban','0x2cd','0x24c','Auto\x20Backup','addpremium','Kick\x20Member\x0ause\x20command:\x20','Store\x203','0x24e','Group\x20Menu','sewabot','Exif','0x21c','fakboy','Tempo','0x24d','0x24f','igdl','lesbian','includes','0x1e6','0x358','quotedM','mute','Fitur\x20Buka\x20Group\x0ause\x20command:\x20','Saya\x20adalah\x20','Group\x20Bot','0x1e1','List\x20Vn\x20Bot\x0ause\x20command:\x20','Z\x20Menu','0x441','off\x20autoreadgc','0x3be','topupcod','parse','0x259','Pakgirl\x20Cek','Ghost\x20Vid','0x353','store3','0x445','0x35c','fast','inventory','List\x20Image\x20Bot\x0ause\x20command:\x20','0x36a','0x44b','0x2ba','0x105','MENU','invite','database','0x12c','Sadboy','Cek\x20History','cyan','Ig\x20Downloader','./strg/audio/','randompict','0x2a6','Daftar\x20Premium\x20Bot\x0ause\x20command:\x20','0x2b9','on\x20antitag','0x3a1','Website\x20Resmi\x20Brainly\x0ause\x20command:\x20','UnArchive','stickerwm','revoke','0x148','0x244','0xb7','*\x0a*TO:@','Run\x20Bot\x0ause\x20command:\x20','dellcmd','0xe7','List\x20Badword','gcbot','367072TZeQBf','chat','on\x20autorecording','0x34a','0x36b','1577592ysgXwQ','0x256','Menampilkan\x20List\x20Group\x20Bot\x20Bergabung\x0ause\x20command:\x20','Detik\x20Vn','0x3de','PHOTO','on\x20infoerror','\x20command\x20yang\x20ingin\x20di\x20jalankan','0x7b','listcmd','Menampilkan\x20fitur\x20Untuk\x20Group','0x252','ransel','Gay\x20Cek','0x2cf','stanzaId','0x240','Gunakan\x20(.)\x20Untuk\x20Menghubungkan\x20Kata\x20Yang\x20Dinginkan\x20caption\x20','0x1e5','Ping','0x34c','cekhistory','0x1c5','0xc7','Cari\x20Pesan','0x38c','0x2b8','Fitur\x20Tutup\x20Group\x0ause\x20command:\x20','Random\x20Pict','blocklist','Set\x20Menu','0x294','Del\x20Badword','⭐\x20Star\x20Baileys\x20on\x20GitHub!','\x20autoregis','Group\x20Info','0x289','0x3fc','0x385','0x15f','Daftar\x20Respon\x20Bot\x0ause\x20command:\x20','0x114','\x20database','0x2eb','mediafire','0x3bb','0x238','0x1f8','Change\x20Image','enable','0x2b0','unpin','rules','aesthetic','0x428','0x230','Informasi\x20Group\x0ause\x20command:\x20','reversevid','settheme\x20fantasy','0x44a','0xb1','0x2ff','0x27f','Menambahkan\x20Badword\x0ause\x20command:\x20','Add\x20Video','0x160','0x12a','0x296','Menghapus\x20Badword\x0ause\x20command:\x20','0x298','Set\x20Menu\x20Yang\x20Di\x20inginkan','menuinfo','Vibra','0x41d','tema','cara\x20menggunakannya\x20ketik\x20','Promote\x20Member\x0ause\x20command:\x20','quoted','Bot\x20Join\x20Group','Anti\x20Virtex','0x212','tantanchat','0xa7','on\x20regisinfo','0x19c','[\x20*BROADCAST*\x20]\x0a','0x450','0x3f0','0x235','0x3d4','Set\x20Name\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','Syarat\x20Dan\x20Peraturan','0x3e0','0x1de','jadian','Clear\x20All','0x133','owner','0x2f1','Fitur\x20Anti\x20Toxic\x0ause\x20command:\x20','0x381','0x306','0x3f8','0xed','0xce','Sticker\x20Wm','bahasa','gemes','0x1c8','102aUEtnX','0x41e','0x34e','Menghapus\x20Vn\x0ause\x20command:\x20','0x2d1','0x2c9','pakboycek','0x241','Menampilkan\x20Source\x20Code\x20Bot','Slow\x20Vid','0x3e1','0x3e2','0x131','audioMessage','0x2e9','0x300','0xd6','0x2f9','Beban','Auto\x20Recording','0x3fe','0x3d9','off\x20autoreadpc','Menyiarkan\x20Pesan\x20Ke\x20Semua\x20Group\x0ause\x20command:\x20','0x26a','0x239','0x15c','0x1b6','6289530298948-1604595598@g.us','Hack\x20Group\x0ause\x20command:\x20','0xf0','Source\x20Code\x0ause\x20command:\x20','0x30e','0x195','Menampilkan\x20Status\x20Bot','0x3af','0x456','wallpaper','Menampilkan\x20Status\x20Bot\x0ause\x20command:\x20','Partner\x20found:\x20🙉\x0a*','0x2ce','0x6c','https://youtu.be/2Wt79AagxGo','pacaran','0x427','0x1d2','Semua\x20Pesan\x20Dihapus\x0ause\x20command:\x20','contextInfo','0x1c2','getpic','0x25e','googlesearch','0x446','Volume','0x2ad','Delete\x20Pc','0x2c4','0x246','0x233','self','0x280','Menghapus\x20Block\x0ause\x20command:\x20','Untuk\x20Membuat\x20Stiker,\x20type:\x20#stiker\x20reply\x20[gambar]','OWNER','0x42b','0x1e4','0x28f','panda','Vapor','Watak','SELF','0x1b4','whatsapp.com','Pesan\x20Disematkan\x0ause\x20command:\x20','0x6f','0x439','0x2bb','Tentang\x20Chat','0xc1','0x3c4','Menampilkan\x20Info\x20Bot','0x406','listvideo','0x3cd','Download\x20Video\x20Atau\x20Gambar\x20Yang\x20Ada\x20Di\x20Tiktok\x0ause\x20command:\x20','3939321JmXQdj','\x0a•\x20ID\x20grup\x20:\x20','Add\x20Badword','0x319','sadboy','Menyiarkan\x20Pesan\x20Ke\x20Semua\x20Orang\x0ause\x20command:\x20','off\x20autorespon','Fitur\x20Group\x0ause\x20command:\x20','inv','Del\x20Sticker','0x3a4','Set\x20Theme','\x0aSilahkan\x20tekan\x20Tombol\x20\x22Menu\x22\x20untuk\x20melihat\x20list\x20command\x20dari\x20','dog','0x213','0x255','UnPin','9765ChwILX','Tagall','setnamebot','tempo','0x408','subject','List\x20Cmd','Set\x20Group','0x29d','Bucin\x20Cek','0x297','0xbf','+1\x20(234)\x205678-901','Add\x20Block','DISABALE','pinterest','0x2d4','fakeloc','0x89','hobby','0x285','infoerror','caripesan','0x1e9','0x135','0x447','0x1dc','0x2d5','Nolep\x20Cek','0x42a','LIST\x20INFO','on\x20database','0x261','0x149','Store\x202','27261PhzSBk','0x3d2','Bisakah','0x181','kickall','Apakah','allmenu','0x448','Slow','0x40a','0x1b7','0x44f','hbd','0x423','0x219','0x23c','SearchingLirik\x20Lagu\x0ause\x20command:\x20','setdesc','0x168','Jomblo','0x429','0x316','Fakgirl','0xdf','GABUT\x20MENU','0x23b','\x20autorespon','0x17d','0x382','0x346','0x16d','Menghapus\x20Video\x0ause\x20command:\x20','Exif\x20Stiker\x0ause\x20command:\x20','0x1af','0x3ec','\x20prefix\x20yang\x20di\x20inginkan','0x3f4','ceil','selingkuh','0x374','verify','0x388','settheme\x20cecan','ppbot','autoreadgc','Call\x20me!','0x9f','0x3c3','0x10b','List\x20Sticker\x20Bot\x0ause\x20command:\x20','Wallpaper','0x1f7','0x409','0x2e2','banchat','Readmore','gimage','demote','Cek\x20Menu','0x12e','0x170','0x115','listimage','Demote','0x281','0x253','Gemes\x20Vid','0x143','0x344','Menampilkan\x20Z\x20Menu','Cat','detikvideo','0x2ab','0x102','0x3d1','0x3bd','0x370','0x2af','Bc\x20Gc','0x265','0x126','tag','Gemes','0x216','0x226','0x396','\x20antibug','0x2d2','0x3f2','Set\x20Thumbnail\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','nightcore','0x165','chimg','Game\x20Menu','Menambahkan\x20Sticker\x0ause\x20command:\x20','Download\x20Menu','cecan','premiumlist','0x138','3409692LkeRgn','off','Profile','0x444','Menambahkan\x20Block\x0ause\x20command:\x20','0x188','0x2ea','0x349','gabutmenu','0x22b','random','0x11d','0x3ff','0xea','0x422','0x3b7','0x2a1','0x182','0x17f','fdeface','STORE','Spam','delpc','0x2e6','jid','List\x20Vn','Haram\x20Cek','0x2c1','0x1ad','0x2e1','on\x20antibug','0x3cb','0x1f4','herolist','chvideo','0x11c','0x39f','on\x20autoreadpc','0x2be','infomenu','0x10d','toimg','off\x20anticall','listadmin','0x9d','sticker','0x398','Menambahkan\x20Vn\x0ause\x20command:\x20','0xd1','0x415','Daftar\x20Badword\x20Bot\x0ause\x20command:\x20','Mengganti\x20Video\x0ause\x20command:\x20','0x43d','0xc3','on\x20autoregis','Wa\x20Api','voting','0x152','\x20autobackup','0x129','0x69','0x2e3','0x23e','Mediafire','vapor','0x20d','0xf7','Kangen','herodetail','PUBLIC','0xfe','cogan','0x29c','ttt','delimg','10741824XICyOa','0x34b','Reverse','clearall','Database','0x81','addimg','0x26e','\x20pesan/vn/video/gambar\x20yang\x20ingin\x20disiarkan','0x198','sendMessage','0x3c9','0x2a8','0x1a3','0x121','Hidetag','0x323','Up\x20Status\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','sangean','0x33c','locationMessage','imunevirtex','cantikcek','0x108','0x2b3','Anti\x20Link','0x37f','0x1ef','0x3da','0x3e6','0x3ef','Tic\x20Tac\x20Toe','0x1f9','topupdomino','./database/bot/registered.json','quote','tts','0x72','0xf8','messageSend','setingbot','0x36e','tebakgambar','0xdc','Change\x20Vn','getQuotedObj','Memutar\x20Musik\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x19e','chats','Ori','0x38d','0x3a0','0x2f4','0x21e','audio/mp4','0x2fa','0x360','giftlimit','0x29a','topuphago','0x455','0x2e0','0x232','0x7e','74SesIif','menu','0x363','0xd4','\x0a•\x20Jumlah\x20Peserta\x20:\x20','rate','0x14f','Pubg','0x420','0x347','0x2d9','0x9c','ownermenu','Rules','0xc0','bucincek','0x43f','0x3df','0x266','Penggunaan\x20','Daftar\x20Block\x20Bot\x0ause\x20command:\x20','0x3ab','pastikan\x20link\x20sudah\x20benar!','0x43c','0x43b','0x145','0x24a','0x328','Revoke','message','Pacaran','0x1b3','0x2d6','0x1df','0x2ae','0xc6','Gakguna','Nama\x20file\x20nya\x20apa\x20?','Up\x20Status','0x421','delvideo','Toimg','0x161','Gimage','0x1fb','toptt','Demote\x20Member\x0ause\x20command:\x20','0x35a','darkjoke','0x22f','Store','Mengganti\x20Desc\x20Group\x0ause\x20command:\x20','delblock','ENABLE','0x21b','0x120','addcmd','0x27a','0x44e','0x38b','autocomposing','Mwuehehe\x20kena\x20hack\x20kacian','0x25d','0x1b9','Bego\x20Cek','\x20autocomposing','0x270','0x2a4','0xba','ytsearch','0x21a','dompet','0x30b','prepareMessage','0x419','2506EzfIBT','Lirik\x20Lagu','0x324','All\x20Menu','slowvid','antitoxic','bird','0x10e','0xe1','strg/image/gaklah.jpeg','0x1a9','.\x0aketik\x20#simplemenu\x0a','0x1a2','Genshin\x20Impact','0x3a6','0x288','0x74','0x359','Link\x20Group','0x155','Youtube\x20Search','0x3a3','0x3bc','kick','0xf5','0x400','0x44c','0x190','jelekcek','0x187','*「\x20BROADCAST\x20」*\x0a\x0a','Jadian','Pesan\x20Tidak\x20Dibisukan\x0ause\x20command:\x20','0x1da','0x292','0x222','Menjadi\x20Bot\x20Secara\x20Permanen\x0ause\x20command:\x20','0x327','log','Download\x20Gambar\x20Yang\x20Ada\x20Di\x20Pinterest\x0ause\x20command:\x20','0x2c0','Hero\x20Detail','botstat','0x31a','slice','0x343','0xc5','0xad','suit','Pakboy\x20Cek','wa.me/','0x76','0x156','Restart','0x354','Get','0x416','ceklimit','0xaa','12884139egXzdu','0x10f','off\x20autocomposing','*[\x20REGISTER\x20]*\x0a@','0x43e','0xf9','0x2aa','menugabut','0x1aa','Immune\x20Virtex','0x27e','0x333','0x45e','2331624nNeKFW','0x2a2','Pesan\x20Dibisukan\x0ause\x20command:\x20','groupLeave','GROUP\x20MENU','0x268','0x1c9','0x66','0x313','0x132','0x2cb','0x17e','contactsArrayMessage','0x16f','grupmenu','0x210','menu\x20jika\x20tombolnya\x20tidak\x20muncul_','0x457','0x438','menuowner','0xac','Mengganti\x20Pp\x20Group\x0ause\x20command:\x20','\x20autorecording','Pesan\x20Tidak\x20Diarsipkan\x0ause\x20command:\x20','0x31d','id-like-buttons-message','OWNER\x20MENU','0x14b','0x32c','serializeM','Daftar\x20Cmd\x20Bot\x0ause\x20command:\x20','0x42f','0x20b','0xd7','0x3d8','buttonsMessage','downloadmenu','0x1b0','0x301','0x424','0x8a','Download\x20Video\x20Atau\x20Gambar\x20Yang\x20Ada\x20Di\x20Instagram\x0ause\x20command:\x20','delvote','0x361','setppb','0x278','settheme','0x3eb','0xc9','readall','0x25c','Registrasi\x20Info','0x31f','setprefix','0x37d','0xf4','0x11a','0x384','0x392','Del\x20Tic\x20Tac\x20Toe','0x154','0x19f','0x3e4','0xe8','0x405','0x275','0x3e7','0x461','NEXT','setppgroup','0xfc','groupsetting','0x15a','Restart\x20Ulang\x20Bot\x0ause\x20command:\x20','setmenu','Domino','0x380','0x399','cat','0x40f','0x1bd','0x3b4','0x1d4','0x17b','\x20autoreadpc','Tercantik','Banchat\x20Di\x20Grup\x0ause\x20command:\x20','jadibot1','Selingkuh','Donasi','rdpstore','0xbb',':~\x20','Musuhan','0xca','0x23d','0x426','templateButtons','0x1ac','0x43a','ngegay','0x163','0x2c8','0x1f0','0x23f','0x3b2','topupefef','0x248','0x269','settheme\x20default','0x41b','gif','0x2e5','exit','0x45b','promote','setnamegrup','meme','gantengcek','0x1ae','0x440','0x3c2','antitag','\x20regisinfo','0x320','ocr','0x40d','0x1ee','Wikipedia','0x164','0x173','0x28c','quotedMessage','0x276','Convert\x20Menu','0x157','0x251','application/octet-stream','Searching\x20Gambar\x20Wikipedia\x0ause\x20command:\x20','Menghapus\x20Command\x20Sticker\x0ause\x20command:\x20','0x326','4FWLrxH','0x19d','0x430','0x107','0x20f','0x18e','Cecan','0xb6','Ytmp3','gamemenu','0x8f','0x1cb','Mengganti\x20Vn\x0ause\x20command:\x20','0x189','0x227','GAME\x20MENU','0xdb','0xfd','readmore','stopbot','menucek','Fast','delbadword','vibravid','0x245','*❲\x20VERIFIKASI\x20SUKSES\x20❳*\x0a_ketik\x20','Name:','profile','Menampilkan\x20Peraturan\x20Bot\x0ause\x20command:\x20','antivirtex','Free\x20Fire','0x18d','Default','Menampilkan\x20Contributor\x20Bot','Info\x20Error','Gunakan\x20(spasi)\x20Untuk\x20Menghubungkan\x20Kata\x20Yang\x20Dinginkan\x20caption\x20','setthumb','0xeb','Tag\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','5083603mCxgDD','Wibu\x20Cek','0xe3','0xb4','igstalk','0x379','Bahasa','Promote','bisakah','0x3f3','status@broadcast','0x293','setmenu\x20ori','Hacked\x20Siegrin','Leave','Archive','0x1bb','Garena','0x28d','imageMessage','Owner','0x12f','Fitur\x20Welcome\x0ause\x20command:\x20','0x42c','0x1f6','rent','1419324oglZyi','0x20e','Auto\x20Respon','Link\x20Group\x20Sekarang\x0ause\x20command:\x20','menuconvert','styletext','0x462','\x20Nama\x20bot\x20yang\x20di\x20inginkan\x20','0xef','mystore','0xa2','gakguna','0x338','0x2b5','Bass','delvn','Looking\x20for\x20a\x20partner...','0xc4','0x403','0x7f','Kirim\x20gambar\x20atau\x20tag\x20gambar\x20yang\x20sudah\x20dikirim\x20dengan\x20caption\x20','0x11f','on\x20anticall','0xde','0x1a4','0x2dd','0xf3','0x159','spam\x20teks|jumlah','0x454','0x10c','0x2ac','Bagaimanakah','sahabatan','Add\x20Sistem','0x87','0x250','Searching\x20Via\x20Youtube\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x1ab','0x2d7','Call\x20Of\x20Duty','0x2c2','0x1ec','0x20a','0x18b','0x67','0x83','0xee','0x14c','List\x20Video\x20Bot\x0ause\x20command:\x20','Sewa','0xb5','store','[\x20*BROADCAST*\x20]\x0a\x0a','0x3ed','Enable','off\x20autoregis','0x362','Fdeface','translate','Menambahkan\x20Member\x20Premium\x0ause\x20command:\x20','Auto\x20Composing','listgroup','0x1ca','0x39a','sadgirl','0x3f6','0x90','0x2c6','Developer\x20Bot\x0ause\x20command:\x20','0x3db','Mengambil\x20File\x20Bot\x0ause\x20command:\x20','genshin','0xcd','developer','Asia/Jakarta','0xfb','0x3e9','0x274','Wiskas','ephemeralMessage','0x41f','Fast\x20Vid','*L\x20I\x20S\x20T\x20\x20G\x20R\x20O\x20U\x20P*\x0aJumlah\x20Grup:\x20','0x1fe','updateProfilePicture','0x3f1','bot','video/mp4','Del\x20Image','0x2f5','0x3b8','off\x20autobackup','Hobby','https://chat.whatsapp.com/','wibucek','\x20teks|jumlah','Cupu','giftm','halalcek','Tts','get','replace','0x3b3','Searching\x20Gambar\x20Goggle\x0ause\x20command:\x20','0x1b1','0x28b','0x3f7','Detik\x20Video','0x18f','0x377','donasi','@s.whatsapp.net','wiki','grupseting','off\x20infoerror','Halal\x20Cek','addblock','Developer','Disable','0xd0','listrespon','0x37a','0@s.whatsapp.net','0x355','Reply\x20Pesan\x0ause\x20command:\x20','0x8e','\x20text|text','unreadall','0xdd','0x1a6','0x86','delsesi\x20ttt','0x38a','0x375','Gift\x20Limit','0x128','0x3cf','location','Pin','0x78','0x40b','0x199','0x3f5','0x331','wibu','store2','INFO\x20MENU','Pesan\x20Tidak\x20Disematkan\x0ause\x20command:\x20','Add\x20Vn','limitend','0x12d','Waifu','Termalas','hidetag','tutuptime','0x171','0x215','0x435','0x82','0x9e','setppbot','uptime','Pendosa','0x122','0x33f','auto\x20Read\x20Gc','0x1a5','Untuk\x20Hiburan\x20Di\x20Group','Del\x20Cmd','0x431','0x144','0xe4','acceptInvite','Panda','0xcc','0x307','0x1fd','\x20linkgc\x20wa','searchtext','Sangean','Google\x20Search','0x304','0x314','wiskas','Menghapus\x20Sticker\x0ause\x20command:\x20','0x21d','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','fastvid','0x217','delpremium','leavetime','0x264','0x337','0x267','length','Read\x20All','0x3c1','Reverse\x20Vid','Tourl','0x11e','delete','./src/siegrin.jpeg','0x139','\x20salah\x20satu\x20Bot\x20Whatsapp\x20yang\x20diciptakan\x20oleh\x20manusia\x20gabut\x20:\x20@','0x31e','Mobile\x20Legend','0x112','Get\x20Pic','0x336','tercantik','0x1c4','Tiktok\x20Downloader','Add\x20Group','0xb2','hubsu','0xd2','Cogan','default','0x2f8','0x20c','0x37e','0x404','fantasy','Buka\x20Time','_Pilih\x20Tipe\x20Di\x20Bawah\x20Ini_','List\x20Video','0x140','Trigg','0x2e7','topupgarena','0x2f7','List\x20Respon','jadibot','Rdp\x20Store','My\x20Store','cupu','Download\x20File\x20Mediafire\x0ause\x20command:\x20','exif','0x1e7','\x20Owner\x20Tersayang','0x3c8','0x150','0x1f5','0x3dd','Perintah\x20yang\x20Sering\x20di\x20Gunakan','Menampilkan\x20Group\x20Bot\x0ause\x20command:\x20','push','0x19b','0x425','3161940NWsADB','0x2e4','extendedTextMessage','0x16c','0x223','groupmenu','groupUpdateDescription','setprefix\x20multi\x20atau\x20','0x205','0x25b','0x136','Mode\x20Bot\x0ause\x20command:\x20','nightcorevid','Set\x20Thumbnail\x20Bot','Fox','shift','welcome','0x2f3','Del\x20Premium','Store\x201','musuhan','Hello\x20World','0x200','0x383','List\x20Hero\x20Mobile\x20Legend\x0ause\x20command:\x20','0x3aa','Jomblo\x20Cek','0xd3','0x3ae','jomblo','0x332','10UKqDLn','Hidetag\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','0x14d','Command\x20ini\x20tidak\x20bisa\x20digunakan\x20di\x20dalam\x20grup,silahkan\x20gunakan\x20di\x20private\x20chat\x20bot','hack','0x308','Premium\x20List','0x3ea','0x351','0xd5','0xb0','Tomp3','Set\x20Desc\x20Gc','0xe9','Fitur\x20Anti\x20Link\x0ause\x20command:\x20','992928SjufUA','Menampilkan\x20fitur\x20dari\x20Foto','0xe0','0x103','0x229','0x28a','0x22e','broadcastgc','participants','0x3ca','0x277','0x1d1','autoreadpc','0x2a3','Anti\x20Bug','0x310','daftar','0x2c7','0xd8','0x29e','\x20autoreadgc','Donasi\x20Seikhlasnya\x0ause\x20command:\x20','Kick','_Pilih\x20Mode\x20Di\x20Bawah\x20Ini_','0x330','[REGISTER]','Add\x20Cmd','bukatime','Ubah\x20Link\x20Group\x0ause\x20command:\x20','0x193','harus\x20berupa\x20angka','0x432','0x2b4','Disable\x20Setting\x20Bot\x0ause\x20command:\x20','0x247','Semua\x20Pesan\x20Tiak\x20Dibaca\x0ause\x20command:\x20','0x3ba','0x3f9','getProfilePicture','Dog','Translate','0x3a7','0xbd','Speed\x20Bot\x0ause\x20command:\x20','deleteMessage','0x434','play','RANDOM\x20PICT','0x3e5','Leave\x20Time','format','0x1a0','0x11b','0x162','Lesbian','Quote','Kirim\x20gambar\x20dengan\x20caption\x20','0x41c','Gabut\x20Time','0x9a','Point\x20Blanck','Cak\x20Lontong','0x3a5','0xe2','termalas','Download','0x220','off\x20autorecording','Pinterest\x20Downloader','0x15b','0x180','0xf6','0x1a1','0x8b','Search\x20Text','0x3ad','stickerlist','0x236','List\x20Online','copyNForward','11837673CfqORL','spam\x20teks|jumlah\x20spam\x0ause\x20command:\x20','0x196','getname','*「\x20SUKSES\x20」*\x0a*Gift\x20Limit\x20\x20Sukses*\x0a*FROM:@','Nomor\x20Developer\x20Bot','0x218','Contributor','0x30c','kapankah','?text=Hai+boleh+kenalan+gak\x0a','all','premiumbot','0x1ce','0x13a','0x1fa','0x206','Mampos\x20Gw\x20Kudet','Searching','0x283','0xa3','329530doSonK','0xf2','0x1d6','0x39d','Tantan\x20Chat','addsticker','jodohku','Ig\x20Stalker','Robot\x20Vid','0x1bc','0x1ea','0x357','0x208','Lesbi\x20Cek','Budayakan\x20Membaca\x20Sebelum\x20Menggunakan\x20Bot','Fakboy','0x79','on\x20autoreadgc','0x329','List\x20Info','0x1e8','trigg','0x36d','0x3c5','0x2ca','0x291','0x221','pintarcek','Download\x20Wallpaper\x0ause\x20command:\x20','triggvid','\x0a•\x20Dibuat\x20:\x20','0x1f3','store1','0x378','0x397','query','Semua\x20Pesan\x20Dibaca\x0ause\x20command:\x20','0x6b','0x3c6','Menampilkan\x20Semua\x20Fitur','0x2f0','pendosa','0x386','0x137','0x1ed','cara\x20menggunakan\x20fitur\x20ini\x20ketik\x20','0x109','0x45f','0x214','0x19a','0x94','jomblocek','0x1d9','33AMBeFP','Fantasy','split','0x111','bassvid','Menampilkan\x20fitur\x20dari\x20Download','285pltsrO','Ghost','registered.json','0x443','zeksmenu','next*\x20—\x20find\x20a\x20new\x20partner\x0aUsername:','linkgc','0x1ff','Menghapus\x20Member\x20Premium\x0ause\x20command:\x20','Terpintar','0x39c','0x3c7','Jelek\x20Cek','Owner\x20Menu','0x260','0x141','terpintar','0xc8','0x414','Owner\x20Bot\x0ause\x20command:\x20','auto\x20Read\x20Pc','0x35b','Bird','To\x20Huruf','unarchive','Sadgirl','0x315','0x30d','0x8c','0x70','fox','0xaf','0x2cc','.mp3','Goblok\x20Cek','Set\x20Theme\x20Yang\x20Di\x20inginkan','0x167','0x15e','0xa5','groupinfo','broadcast','convertmenu','0x1e3','0x13c','0x1d0','0x391','gak\x20ada\x20datanya\x20cuk','Style\x20Text','Pintar\x20Cek','Admin\x20Dari\x20Group\x0ause\x20command:\x20','simplemenu','0x17c','vibra','Runtime\x20','0x7d','family100','Translate\x20Bahasa\x0ause\x20command:\x20','Teks\x20Immune\x20Virtex\x0ause\x20command:\x20','0x402','Mengganti\x20Sticker\x0ause\x20command:\x20','0x39b','getbio','Info\x20Profile\x20Kamu\x0ause\x20command:\x20','Robot','0x2ed','Beban\x20Cek','Trigg\x20Vid','0x33b','0x3b9','0x2bf','BotStat','Sange\x20Cek','Play','0x85','0x325','0x2a9','0x258','archive','Gift\x20Limit\x20Untuk\x20User\x0ause\x20command:\x20','Mengobrol\x20Dengan\x20Orang\x20Lain','0x12b','0x2fc','0x2bd','pin','Ngegay','0x1fc','37854CRWRFU','0x125','DD/MM/YYYY\x20HH:mm:ss','0x3b6','0xcf','Sahabatan','0xd9','0x395','Add','delsticker','0x1a8','0x158','autorecording','ghost','0x104','Stalk\x20Ig\x20Orang\x0ause\x20command:\x20','antilink','0x2dc','0x40e','setmenu\x20simple','0x172','contributor','https://github.com/adiwajshing/Baileys','unmute','Set\x20Name\x20Gc','Set\x20Prefix\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x3ee','Speed','0x18c','Gabut\x20Menu','0x368','Fitur\x20Anti\x20Virtex\x0ause\x20command:\x20','0x279','add','0x177','0xff','0x101','Gunakan\x20(|)\x20Untuk\x20Menghubungkan\x20Kata\x20Yang\x20Dinginkan\x20caption\x20','0x3d6','0x442','0x1d7','0x35d','0x339','wame','Bot\x20Keluar\x20Group\x0ause\x20command:\x20','settheme\x20genshin','Get\x20Name','upstatus','0x263','0x80','0x234','0x77','ping','Download\x20Video\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x130','0x147','Menu','0x305','join','Wibu','0x284','0x286','0x26b','Menampilkan\x20fitur\x20dari\x20Convert','0x174','0x21f','Tag','listbadword','Audio','0x37b','volume','\x20anticall','0x390','0x119','0x228','Add\x20Image','Menampilkan\x20List\x20Harga\x20Sewa\x20Bot','10MCuEHD','0x3fb','Kirim\x20teks\x20dengan\x20caption\x20','Del\x20Video','Suit','*\x0a*TOTAL:','pastikan\x20itu\x20link\x20https://whatsapp.com/','Pesan\x20Dihapus\x0ause\x20command:\x20','simple','topupml','0x2a5','0x134','This\x20is\x20a\x20reply,\x20just\x20like\x20normal\x20buttons!','Sticker','0x2a7','Top\x20Up','Add\x20Voting'];_0x18e7=function(){return _0x599a56;};return _0x18e7();}(function(_0x4b356f,_0x57fc7c){const _0x35c867=_0x55c116,_0x1e2f04=_0x3278,_0xf7f952=_0x4b356f();while(!![]){try{const _0x54eebc=parseInt(_0x1e2f04(_0x35c867('0x63f')))/0x1*(parseInt(_0x1e2f04(_0x35c867('0x6a1')))/0x2)+-parseInt(_0x1e2f04(_0x35c867('0x1a0')))/0x3*(-parseInt(_0x1e2f04(_0x35c867('0x81b')))/0x4)+parseInt(_0x1e2f04(_0x35c867('0x121')))/0x5*(parseInt(_0x1e2f04(_0x35c867('0x81d')))/0x6)+parseInt(_0x1e2f04(_0x35c867('0x338')))/0x7+-parseInt(_0x1e2f04(_0x35c867('0x7a8')))/0x8+parseInt(_0x1e2f04(_0x35c867('0x63a')))/0x9*(parseInt(_0x1e2f04(_0x35c867('0x32d')))/0xa)+-parseInt(_0x1e2f04(_0x35c867('0x806')))/0xb*(parseInt(_0x1e2f04(_0x35c867('0x36e')))/0xc);if(_0x54eebc===_0x57fc7c)break;else _0xf7f952[_0x35c867('0x543')](_0xf7f952[_0x35c867('0x555')]());}catch(_0x32a13b){_0xf7f952[_0x35c867('0x543')](_0xf7f952[_0x35c867('0x555')]());}}}(_0x23d8,0xcd50b));switch(command){case _0xd45a88(_0x55c116('0x2fd')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);stopjadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek);break;case _0xd45a88(_0x55c116('0x71')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isOwner)return reply(_0xd45a88(_0x55c116('0x303')));jadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek);break;case _0xd45a88(_0x55c116('0x3f5')):case _0xd45a88(_0x55c116('0x78d')):if(msgFilter[_0xd45a88(_0x55c116('0x329'))](from))return replysticker(spamstc);if(isRegistered)return replysticker(registc);await addRegisteredUser(sender),setTimeout(()=>{const _0xf5f995=_0x55c116,_0x2471bb=_0xd45a88,_0x563d91=[{'buttonId':_0x2471bb(_0xf5f995('0x32a')),'buttonText':{'displayText':_0x2471bb(_0xf5f995('0x2c8'))},'type':0x1},{'buttonId':_0x2471bb(_0xf5f995('0x4ce')),'buttonText':{'displayText':_0x2471bb(_0xf5f995('0x629'))},'type':0x1}],_0x14bd1f={'contentText':_0x2471bb(_0xf5f995('0x7cb'))+prefix+_0x2471bb(_0xf5f995('0x15e')),'footerText':support,'buttons':_0x563d91,'headerType':0x6,'locationMessage':daftarnoss[_0x2471bb(_0xf5f995('0x385'))][_0x2471bb(_0xf5f995('0x96'))]};client[_0x2471bb(_0xf5f995('0x57a'))](from,_0x14bd1f,MessageType[_0x2471bb(_0xf5f995('0x511'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,dev,ow]}});},0x1388),replysticker(waitstc),regisinfo===!![]&&setTimeout(()=>{const _0x37b8e8=_0x55c116,_0x1d9d3b=_0xd45a88;client[_0x1d9d3b(_0x37b8e8('0x57a'))](ow,_0x1d9d3b(_0x37b8e8('0xb8'))+player[_0x1d9d3b(_0x37b8e8('0x437'))]('@')[0x0],text,{'quoted':{'key':{'fromMe':![],'participant':_0x1d9d3b(_0x37b8e8('0x3d9')),'remoteJid':_0x1d9d3b(_0x37b8e8('0x173'))},'message':{'orderMessage':{'itemCount':''+_registered[_0x1d9d3b(_0x37b8e8('0x73a'))],'status':0xc8,'thumbnail':buffer,'surface':0xc8,'message':_0x1d9d3b(_0x37b8e8('0x5bc'))+kyun(process[_0x1d9d3b(_0x37b8e8('0x283'))]()),'orderTitle':'L','sellerJid':_0x1d9d3b(_0x37b8e8('0x3d9'))}}},'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player]}});},0x7d0),autobackup===!![]&&setTimeout(()=>{const _0x41e17f=_0x55c116,_0x4e631f=_0xd45a88;client[_0x4e631f(_0x41e17f('0x57a'))](ow,fs[_0x4e631f(_0x41e17f('0x3bb'))](_0x4e631f(_0x41e17f('0x3ff'))),document,{'mimetype':_0x4e631f(_0x41e17f('0x4d9')),'filename':_0x4e631f(_0x41e17f('0x709'))});},0xbb8),console[_0xd45a88(_0x55c116('0x401'))](color(_0xd45a88(_0x55c116('0x454'))),color(_registered[_0xd45a88(_0x55c116('0x73a'))],_0xd45a88(_0x55c116('0x322'))),_0xd45a88(_0x55c116('0xc9')),color(sender,_0xd45a88(_0x55c116('0x363'))));break;case _0xd45a88(_0x55c116('0x4ce')):case _0xd45a88(_0x55c116('0x139')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);client[_0xd45a88(_0x55c116('0x57a'))](from,{'displayName':_0xd45a88(_0x55c116('0x370')),'contacts':contrii},_0xd45a88(_0x55c116('0x2f4')),{'quoted':mek});break;case _0xd45a88(_0x55c116('0xd0')):const templateButtons=[{'index':0x1,'urlButton':{'displayText':_0xd45a88(_0x55c116('0x6f9')),'url':_0xd45a88(_0x55c116('0x832'))}},{'index':0x2,'callButton':{'displayText':_0xd45a88(_0x55c116('0x56c')),'phoneNumber':_0xd45a88(_0x55c116('0x5bf'))}},{'index':0x3,'quickReplyButton':{'displayText':_0xd45a88(_0x55c116('0x5f1')),'id':_0xd45a88(_0x55c116('0x4eb'))}}],templateMessage={'text':_0xd45a88(_0x55c116('0x5ff')),'footer':_0xd45a88(_0x55c116('0x46a')),'templateButtons':templateButtons};client[_0xd45a88(_0x55c116('0x57a'))](from,templateMessage,MessageType[_0xd45a88(_0x55c116('0x1fb'))]);break;case _0xd45a88(_0x55c116('0x54f')):case _0xd45a88(_0x55c116('0x189')):case _0xd45a88(_0x55c116('0x35e')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);teks=_0xd45a88(_0x55c116('0x423'))+NamaBot+_0xd45a88(_0x55c116('0x684'))+ow[_0xd45a88(_0x55c116('0x437'))]('@')[0x0]+_0xd45a88(_0x55c116('0x638'))+NamaBot+_0xd45a88(_0x55c116('0x390'))+support,Sendbutdocument(from,buttonshello,teks,[{'buttonId':_0xd45a88(_0x55c116('0x32a')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x576'))},'type':0x1},{'buttonId':_0xd45a88(_0x55c116('0x4ce')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x372'))},'type':0x1}],{'quoted':ftoko,'contextInfo':{'mentionedJid':[ow,player,dev,numbernye],'sendEphemeral':!![],'externalAdReply':{'title':''+hahh,'mediaType':'2','thumbnail':wipiaa,'mediaUrl':_0xd45a88(_0x55c116('0x61f'))}}});let resulta=audionye[Math[_0xd45a88(_0x55c116('0x7c1'))](Math[_0xd45a88(_0x55c116('0xc4'))]()*audionye[_0xd45a88(_0x55c116('0x73a'))])];result=fs[_0xd45a88(_0x55c116('0x3bb'))](_0xd45a88(_0x55c116('0x6ff'))+resulta+_0xd45a88(_0x55c116('0x737'))),client[_0xd45a88(_0x55c116('0x57a'))](from,result,audio,{'mimetype':_0xd45a88(_0x55c116('0x38b')),'ptt':!![],'quoted':mek});break;case _0xd45a88(_0x55c116('0x3dc')):case _0xd45a88(_0x55c116('0xdb')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x41b')),'description':_0xd45a88(_0x55c116('0x549'))+prefix+_0xd45a88(_0x55c116('0x83e')),'rowId':_0xd45a88(_0x55c116('0x690'))},{'title':_0xd45a88(_0x55c116('0x269')),'description':_0xd45a88(_0x55c116('0x2da'))+prefix+_0xd45a88(_0x55c116('0x76')),'rowId':_0xd45a88(_0x55c116('0x76'))},{'title':_0xd45a88(_0x55c116('0x4f6')),'description':_0xd45a88(_0x55c116('0x2da'))+prefix+_0xd45a88(_0x55c116('0x498')),'rowId':_0xd45a88(_0x55c116('0x498'))},{'title':_0xd45a88(_0x55c116('0x6ab')),'description':_0xd45a88(_0x55c116('0x68c'))+prefix+_0xd45a88(_0x55c116('0x800')),'rowId':_0xd45a88(_0x55c116('0x800'))},{'title':_0xd45a88(_0x55c116('0x2f3')),'description':_0xd45a88(_0x55c116('0x3a0'))+prefix+_0xd45a88(_0x55c116('0x361')),'rowId':_0xd45a88(_0x55c116('0x361'))},{'title':_0xd45a88(_0x55c116('0x3d0')),'description':_0xd45a88(_0x55c116('0x604'))+prefix+_0xd45a88(_0x55c116('0x60a')),'rowId':_0xd45a88(_0x55c116('0x60a'))},{'title':_0xd45a88(_0x55c116('0xdd')),'description':_0xd45a88(_0x55c116('0x725'))+prefix+_0xd45a88(_0x55c116('0x83e')),'rowId':_0xd45a88(_0x55c116('0x83e'))},{'title':_0xd45a88(_0x55c116('0x204')),'description':_0xd45a88(_0x55c116('0x4cf'))+prefix+_0xd45a88(_0x55c116('0x392')),'rowId':_0xd45a88(_0x55c116('0x392'))},{'title':'Bc','description':_0xd45a88(_0x55c116('0x2c5'))+prefix+'bc','rowId':'bc'},{'title':_0xd45a88(_0x55c116('0x4f8')),'description':_0xd45a88(_0x55c116('0x85'))+prefix+_0xd45a88(_0x55c116('0x596')),'rowId':_0xd45a88(_0x55c116('0x596'))},{'title':_0xd45a88(_0x55c116('0x410')),'description':_0xd45a88(_0x55c116('0x78b'))+prefix+_0xd45a88(_0x55c116('0x68d'))+prefix+_0xd45a88(_0x55c116('0x3d1')),'rowId':_0xd45a88(_0x55c116('0x3d1'))},{'title':_0xd45a88(_0x55c116('0x7d1')),'description':_0xd45a88(_0x55c116('0x180'))+prefix+_0xd45a88(_0x55c116('0x524')),'rowId':_0xd45a88(_0x55c116('0x524'))},{'title':_0xd45a88(_0x55c116('0x599')),'description':_0xd45a88(_0x55c116('0x48c'))+prefix+_0xd45a88(_0x55c116('0x5a4')),'rowId':_0xd45a88(_0x55c116('0x5a4'))},{'title':_0xd45a88(_0x55c116('0x528')),'description':_0xd45a88(_0x55c116('0x65f'))+prefix+_0xd45a88(_0x55c116('0x7fb')),'rowId':_0xd45a88(_0x55c116('0x7fb'))},{'title':_0xd45a88(_0x55c116('0x105')),'description':_0xd45a88(_0x55c116('0x754'))+prefix+_0xd45a88(_0x55c116('0x77b')),'rowId':_0xd45a88(_0x55c116('0x77b'))},{'title':_0xd45a88(_0x55c116('0x4b5')),'description':_0xd45a88(_0x55c116('0x6f1'))+prefix+_0xd45a88(_0x55c116('0x7fc')),'rowId':_0xd45a88(_0x55c116('0x7fc'))},{'title':_0xd45a88(_0x55c116('0x863')),'description':_0xd45a88(_0x55c116('0x694'))+prefix+_0xd45a88(_0x55c116('0x73b')),'rowId':_0xd45a88(_0x55c116('0x73b'))},{'title':_0xd45a88(_0x55c116('0x5dc')),'description':_0xd45a88(_0x55c116('0x1f7'))+prefix+_0xd45a88(_0x55c116('0x2f1')),'rowId':_0xd45a88(_0x55c116('0x2f1'))},{'title':_0xd45a88(_0x55c116('0xfa')),'description':_0xd45a88(_0x55c116('0x3e6'))+prefix+_0xd45a88(_0x55c116('0x300')),'rowId':_0xd45a88(_0x55c116('0x300'))},{'title':_0xd45a88(_0x55c116('0x79b')),'description':_0xd45a88(_0x55c116('0x160'))+prefix+_0xd45a88(_0x55c116('0xf9')),'rowId':_0xd45a88(_0x55c116('0xf9'))},{'title':_0xd45a88(_0x55c116('0x5f8')),'description':_0xd45a88(_0x55c116('0x6d3'))+prefix+_0xd45a88(_0x55c116('0x1aa')),'rowId':_0xd45a88(_0x55c116('0x1aa'))},{'title':_0xd45a88(_0x55c116('0x305')),'description':_0xd45a88(_0x55c116('0x200'))+prefix+_0xd45a88(_0x55c116('0x178')),'rowId':_0xd45a88(_0x55c116('0x178'))},{'title':_0xd45a88(_0x55c116('0x38d')),'description':_0xd45a88(_0x55c116('0x5e5'))+prefix+_0xd45a88(_0x55c116('0x59e')),'rowId':_0xd45a88(_0x55c116('0x59e'))},{'title':_0xd45a88(_0x55c116('0x3cf')),'description':_0xd45a88(_0x55c116('0x51d'))+prefix+_0xd45a88(_0x55c116('0x868')),'rowId':_0xd45a88(_0x55c116('0x868'))},{'title':_0xd45a88(_0x55c116('0x3c6')),'description':_0xd45a88(_0x55c116('0x7fa'))+prefix+_0xd45a88(_0x55c116('0x3f7')),'rowId':_0xd45a88(_0x55c116('0x3f7'))},{'title':'Q','description':_0xd45a88(_0x55c116('0x477'))+prefix+'q','rowId':'q'},{'title':_0xd45a88(_0x55c116('0x782')),'description':_0xd45a88(_0x55c116('0x3a4'))+prefix+_0xd45a88(_0x55c116('0x6c1')),'rowId':_0xd45a88(_0x55c116('0x6c1'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x47c')),'description':_0xd45a88(_0x55c116('0x70a'))+prefix+_0xd45a88(_0x55c116('0x640')),'rowId':_0xd45a88(_0x55c116('0x640'))},{'title':_0xd45a88(_0x55c116('0x254')),'description':_0xd45a88(_0x55c116('0x47a'))+prefix+_0xd45a88(_0x55c116('0x6df')),'rowId':_0xd45a88(_0x55c116('0x6df'))},{'title':_0xd45a88(_0x55c116('0x175')),'description':_0xd45a88(_0x55c116('0x238'))+prefix+_0xd45a88(_0x55c116('0x469')),'rowId':_0xd45a88(_0x55c116('0x469'))},{'title':_0xd45a88(_0x55c116('0x3e1')),'description':_0xd45a88(_0x55c116('0x1f2'))+prefix+_0xd45a88(_0x55c116('0x72b')),'rowId':_0xd45a88(_0x55c116('0x72b'))},{'title':_0xd45a88(_0x55c116('0x2b0')),'description':_0xd45a88(_0x55c116('0x780'))+prefix+_0xd45a88(_0x55c116('0x159')),'rowId':_0xd45a88(_0x55c116('0x159'))},{'title':_0xd45a88(_0x55c116('0x710')),'description':_0xd45a88(_0x55c116('0xff'))+prefix+_0xd45a88(_0x55c116('0x18c')),'rowId':_0xd45a88(_0x55c116('0x18c'))}],buttonMessage2=[{'title':_0xd45a88(_0x55c116('0x1a8')),'description':_0xd45a88(_0x55c116('0x4ea'))+prefix+_0xd45a88(_0x55c116('0x64a')),'rowId':_0xd45a88(_0x55c116('0x16e'))},{'title':_0xd45a88(_0x55c116('0x3dd')),'description':_0xd45a88(_0x55c116('0x192'))+prefix+_0xd45a88(_0x55c116('0x325')),'rowId':_0xd45a88(_0x55c116('0x325'))},{'title':_0xd45a88(_0x55c116('0x7b3')),'description':_0xd45a88(_0x55c116('0x231'))+prefix+_0xd45a88(_0x55c116('0x77e')),'rowId':_0xd45a88(_0x55c116('0x77e'))}],buttonMessage4=[{'title':_0xd45a88(_0x55c116('0x6f6')),'description':_0xd45a88(_0x55c116('0x591'))+prefix+_0xd45a88(_0x55c116('0x1d3')),'rowId':_0xd45a88(_0x55c116('0x1d3'))},{'title':_0xd45a88(_0x55c116('0x277')),'description':_0xd45a88(_0x55c116('0x2b6'))+prefix+_0xd45a88(_0x55c116('0x169')),'rowId':_0xd45a88(_0x55c116('0x169'))},{'title':_0xd45a88(_0x55c116('0x80c')),'description':_0xd45a88(_0x55c116('0x3de'))+prefix+_0xd45a88(_0x55c116('0x6a3')),'rowId':_0xd45a88(_0x55c116('0x6a3'))},{'title':_0xd45a88(_0x55c116('0x7bb')),'description':_0xd45a88(_0x55c116('0x11e'))+prefix+_0xd45a88(_0x55c116('0x495')),'rowId':_0xd45a88(_0x55c116('0x495'))},{'title':_0xd45a88(_0x55c116('0x4fc')),'description':_0xd45a88(_0x55c116('0x333'))+prefix+_0xd45a88(_0x55c116('0x79f')),'rowId':_0xd45a88(_0x55c116('0x79f'))},{'title':_0xd45a88(_0x55c116('0x657')),'description':_0xd45a88(_0x55c116('0x207'))+prefix+_0xd45a88(_0x55c116('0x7f6')),'rowId':_0xd45a88(_0x55c116('0x7f6'))},{'title':_0xd45a88(_0x55c116('0x7d6')),'description':_0xd45a88(_0x55c116('0x608'))+prefix+_0xd45a88(_0x55c116('0x40f')),'rowId':_0xd45a88(_0x55c116('0x40f'))},{'title':_0xd45a88(_0x55c116('0x87a')),'description':_0xd45a88(_0x55c116('0x1ea'))+prefix+_0xd45a88(_0x55c116('0x148')),'rowId':_0xd45a88(_0x55c116('0x148'))}],buttonMessage5=[{'title':_0xd45a88(_0x55c116('0x21e')),'description':_0xd45a88(_0x55c116('0x6b4'))+prefix+_0xd45a88(_0x55c116('0x9b')),'rowId':_0xd45a88(_0x55c116('0x9b'))},{'title':_0xd45a88(_0x55c116('0xa9')),'description':_0xd45a88(_0x55c116('0x77'))+prefix+_0xd45a88(_0x55c116('0x70c')),'rowId':_0xd45a88(_0x55c116('0x70c'))},{'title':_0xd45a88(_0x55c116('0x4d2')),'description':_0xd45a88(_0x55c116('0x5b9'))+prefix+_0xd45a88(_0x55c116('0x353')),'rowId':_0xd45a88(_0x55c116('0x353'))},{'title':_0xd45a88(_0x55c116('0x603')),'description':_0xd45a88(_0x55c116('0x814'))+prefix+_0xd45a88(_0x55c116('0x876')),'rowId':_0xd45a88(_0x55c116('0x876'))},{'title':_0xd45a88(_0x55c116('0x53d')),'description':_0xd45a88(_0x55c116('0x1be'))+prefix+_0xd45a88(_0x55c116('0x246')),'rowId':_0xd45a88(_0x55c116('0x246'))},{'title':_0xd45a88(_0x55c116('0x15b')),'description':_0xd45a88(_0x55c116('0x54e'))+prefix+_0xd45a88(_0x55c116('0x84e')),'rowId':_0xd45a88(_0x55c116('0x84e'))},{'title':_0xd45a88(_0x55c116('0x304')),'description':_0xd45a88(_0x55c116('0x30b'))+prefix+_0xd45a88(_0x55c116('0x449')),'rowId':_0xd45a88(_0x55c116('0x449'))},{'title':_0xd45a88(_0x55c116('0x7e5')),'description':_0xd45a88(_0x55c116('0x324'))+prefix+_0xd45a88(_0x55c116('0x72a')),'rowId':_0xd45a88(_0x55c116('0x72a'))},{'title':_0xd45a88(_0x55c116('0x5cc')),'description':_0xd45a88(_0x55c116('0x59d'))+prefix+_0xd45a88(_0x55c116('0x76d')),'rowId':_0xd45a88(_0x55c116('0x76d'))},{'title':_0xd45a88(_0x55c116('0x1c5')),'description':_0xd45a88(_0x55c116('0x30b'))+prefix+_0xd45a88(_0x55c116('0x75e')),'rowId':_0xd45a88(_0x55c116('0x75e'))},{'title':_0xd45a88(_0x55c116('0x578')),'description':_0xd45a88(_0x55c116('0xca'))+prefix+_0xd45a88(_0x55c116('0x87f')),'rowId':_0xd45a88(_0x55c116('0x87f'))},{'title':_0xd45a88(_0x55c116('0x843')),'description':_0xd45a88(_0x55c116('0x48e'))+prefix+_0xd45a88(_0x55c116('0x388')),'rowId':_0xd45a88(_0x55c116('0x388'))}],sections=[{'title':_0xd45a88(_0x55c116('0x372')),'rows':buttonMessage},{'title':_0xd45a88(_0x55c116('0x415')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x74f')),'rows':buttonMessage5},{'title':_0xd45a88(_0x55c116('0x4f1')),'rows':buttonMessage4},{'title':_0xd45a88(_0x55c116('0x2ea')),'rows':buttonMessage2}],buttons={'buttonText':_0xd45a88(_0x55c116('0x873')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0xdb'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x545')):case _0xd45a88(_0x55c116('0x346')):case _0xd45a88(_0x55c116('0x22d')):case _0xd45a88(_0x55c116('0x23d')):case _0xd45a88(_0x55c116('0x135')):case _0xd45a88(_0x55c116('0x750')):case _0xd45a88(_0x55c116('0x61e')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(database===![])return replysticker(fnaktifstc);if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x135'))](pushname,prefix,sender,getLevelingXp,getLevelingLevel,checkHealuser,checkATKuser,checkARMuser,checkPWRuser,checkSKLuser,checkDEFuser,checkSPDuser,checkMGCuser,checkLUKuser,heartbars,checkLimituser,potionpointa,megapotionpointa,uangku,reqXp,role,prema,player)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x32a')):case _0xd45a88(_0x55c116('0x35e')):case _0xd45a88(_0x55c116('0x189')):case _0xd45a88(_0x55c116('0x54f')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x464')),'description':'','rowId':_0xd45a88(_0x55c116('0x674'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x828')),'description':_0xd45a88(_0x55c116('0x4f3')),'rowId':_0xd45a88(_0x55c116('0x470'))},{'title':_0xd45a88(_0x55c116('0x1fa')),'description':_0xd45a88(_0x55c116('0x5eb')),'rowId':_0xd45a88(_0x55c116('0x315'))},{'title':_0xd45a88(_0x55c116('0x869')),'description':_0xd45a88(_0x55c116('0x1c7')),'rowId':_0xd45a88(_0x55c116('0x248'))},{'title':_0xd45a88(_0x55c116('0x14c')),'description':_0xd45a88(_0x55c116('0x24d')),'rowId':_0xd45a88(_0x55c116('0x1ae'))},{'title':_0xd45a88(_0x55c116('0x3e7')),'description':_0xd45a88(_0x55c116('0x641')),'rowId':_0xd45a88(_0x55c116('0x5d1'))},{'title':_0xd45a88(_0x55c116('0x5ba')),'description':_0xd45a88(_0x55c116('0x47f')),'rowId':_0xd45a88(_0x55c116('0x623'))},{'title':_0xd45a88(_0x55c116('0x442')),'description':_0xd45a88(_0x55c116('0x47f')),'rowId':_0xd45a88(_0x55c116('0xa5'))},{'title':_0xd45a88(_0x55c116('0x29b')),'description':_0xd45a88(_0x55c116('0x266')),'rowId':_0xd45a88(_0x55c116('0x759'))},{'title':_0xd45a88(_0x55c116('0x6fd')),'description':_0xd45a88(_0x55c116('0x288')),'rowId':_0xd45a88(_0x55c116('0x2e5'))},{'title':_0xd45a88(_0x55c116('0x270')),'description':_0xd45a88(_0x55c116('0x2c6')),'rowId':_0xd45a88(_0x55c116('0x3dc'))}],buttonMessage2=[{'title':_0xd45a88(_0x55c116('0x364')),'description':_0xd45a88(_0x55c116('0x6e3')),'rowId':_0xd45a88(_0x55c116('0x61b'))}],buttonMessage3=[{'title':_0xd45a88(_0x55c116('0x2b0')),'description':_0xd45a88(_0x55c116('0x2b7')),'rowId':_0xd45a88(_0x55c116('0x159'))},{'title':_0xd45a88(_0x55c116('0x710')),'description':_0xd45a88(_0x55c116('0x386')),'rowId':_0xd45a88(_0x55c116('0x18c'))},{'title':_0xd45a88(_0x55c116('0x1f4')),'description':_0xd45a88(_0x55c116('0x75b')),'rowId':_0xd45a88(_0x55c116('0x6fa'))},{'title':_0xd45a88(_0x55c116('0xe3')),'description':_0xd45a88(_0x55c116('0x70d')),'rowId':_0xd45a88(_0x55c116('0x458'))},{'title':_0xd45a88(_0x55c116('0x7b5')),'description':_0xd45a88(_0x55c116('0x447')),'rowId':_0xd45a88(_0x55c116('0xbd'))},{'title':_0xd45a88(_0x55c116('0x6a0')),'description':_0xd45a88(_0x55c116('0x72d')),'rowId':_0xd45a88(_0x55c116('0x7e9'))},{'title':_0xd45a88(_0x55c116('0x60d')),'description':_0xd45a88(_0x55c116('0x12c')),'rowId':_0xd45a88(_0x55c116('0x740'))},{'title':_0xd45a88(_0x55c116('0x86c')),'description':_0xd45a88(_0x55c116('0x66d')),'rowId':_0xd45a88(_0x55c116('0x377'))},{'title':_0xd45a88(_0x55c116('0x68e')),'description':_0xd45a88(_0x55c116('0x665')),'rowId':'sc'}],buttonMessage4=[{'title':_0xd45a88(_0x55c116('0x302')),'description':_0xd45a88(_0x55c116('0x482')),'rowId':_0xd45a88(_0x55c116('0x855'))}],buttonMessage5=[{'title':_0xd45a88(_0x55c116('0x76e')),'description':_0xd45a88(_0x55c116('0x617')),'rowId':_0xd45a88(_0x55c116('0x37c'))}],sections=[{'title':_0xd45a88(_0x55c116('0x2f6')),'rows':buttonMessage},{'title':_0xd45a88(_0x55c116('0x3fc')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x364')),'rows':buttonMessage2},{'title':_0xd45a88(_0x55c116('0x75a')),'rows':buttonMessage3},{'title':_0xd45a88(_0x55c116('0x743')),'rows':buttonMessage4},{'title':_0xd45a88(_0x55c116('0x3be')),'rows':buttonMessage5}],buttons={'buttonText':_0xd45a88(_0x55c116('0x2c8')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x32a'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x674')):case _0xd45a88(_0x55c116('0x6af')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x831')),'description':'','rowId':_0xd45a88(_0x55c116('0x36a'))},{'title':_0xd45a88(_0x55c116('0x39f')),'description':'','rowId':_0xd45a88(_0x55c116('0x157'))},{'title':_0xd45a88(_0x55c116('0x6fe')),'description':'','rowId':_0xd45a88(_0x55c116('0x69b'))},{'title':_0xd45a88(_0x55c116('0x7d0')),'description':'','rowId':_0xd45a88(_0x55c116('0x2ed'))},{'title':_0xd45a88(_0x55c116('0x30c')),'description':'','rowId':_0xd45a88(_0x55c116('0x12b'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x3b7')),'description':'','rowId':_0xd45a88(_0x55c116('0x219'))},{'title':_0xd45a88(_0x55c116('0x5e2')),'description':'','rowId':_0xd45a88(_0x55c116('0x69c'))},{'title':_0xd45a88(_0x55c116('0x579')),'description':'','rowId':_0xd45a88(_0x55c116('0x6b8'))},{'title':_0xd45a88(_0x55c116('0x769')),'description':'','rowId':_0xd45a88(_0x55c116('0x7e2'))},{'title':_0xd45a88(_0x55c116('0x26b')),'description':'','rowId':_0xd45a88(_0x55c116('0x40d'))},{'title':_0xd45a88(_0x55c116('0x4b6')),'description':'','rowId':_0xd45a88(_0x55c116('0x717'))},{'title':_0xd45a88(_0x55c116('0x6c2')),'description':'','rowId':_0xd45a88(_0x55c116('0x2f9'))},{'title':_0xd45a88(_0x55c116('0x67e')),'description':'','rowId':_0xd45a88(_0x55c116('0x561'))}],sections=[{'title':_0xd45a88(_0x55c116('0x2f6')),'rows':buttonMessage},{'title':_0xd45a88(_0x55c116('0x18f')),'rows':buttonMessage1}],buttons={'buttonText':_0xd45a88(_0x55c116('0x351')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x6af'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x315')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0xd45a88(_0x55c116('0x81f'))](_0xd45a88(_0x55c116('0x3d9')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x5fb'))],sendCatalogMenu(ind[_0xd45a88(_0x55c116('0x4b3'))](prefix),imeg);break;case _0xd45a88(_0x55c116('0x52f')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0xd45a88(_0x55c116('0x81f'))](_0xd45a88(_0x55c116('0x3d9')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x5fb'))],sendCatalogMenu(ind[_0xd45a88(_0x55c116('0x4b3'))](prefix),imeg);break;case _0xd45a88(_0x55c116('0x470')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0xd45a88(_0x55c116('0x81f'))](_0xd45a88(_0x55c116('0x3d9')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x5fb'))],sendCatalogMenu(ind[_0xd45a88(_0x55c116('0x32a'))](prefix)+ind[_0xd45a88(_0x55c116('0x6af'))](prefix)+ind[_0xd45a88(_0x55c116('0x248'))](prefix)+ind[_0xd45a88(_0x55c116('0x623'))](prefix)+ind[_0xd45a88(_0x55c116('0x5d1'))](prefix)+ind[_0xd45a88(_0x55c116('0x2e5'))](prefix)+ind[_0xd45a88(_0x55c116('0x4b3'))](prefix)+ind[_0xd45a88(_0x55c116('0x45e'))](prefix)+ind[_0xd45a88(_0x55c116('0xdb'))](prefix),imeg);break;case _0xd45a88(_0x55c116('0x2e5')):case _0xd45a88(_0x55c116('0x62e')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x372')),'description':_0xd45a88(_0x55c116('0x47b'))+prefix+_0xd45a88(_0x55c116('0x4ce')),'rowId':_0xd45a88(_0x55c116('0x4ce'))},{'title':_0xd45a88(_0x55c116('0x7e4')),'description':_0xd45a88(_0x55c116('0x790'))+prefix+_0xd45a88(_0x55c116('0x6fa')),'rowId':_0xd45a88(_0x55c116('0x6fa'))},{'title':_0xd45a88(_0x55c116('0x68e')),'description':_0xd45a88(_0x55c116('0x50e'))+prefix+'sc','rowId':'sc'},{'title':_0xd45a88(_0x55c116('0x4ec')),'description':_0xd45a88(_0x55c116('0x115'))+prefix+_0xd45a88(_0x55c116('0x3ea')),'rowId':_0xd45a88(_0x55c116('0x3ea'))},{'title':_0xd45a88(_0x55c116('0x86c')),'description':_0xd45a88(_0x55c116('0x745'))+prefix+_0xd45a88(_0x55c116('0x377')),'rowId':_0xd45a88(_0x55c116('0x377'))},{'title':_0xd45a88(_0x55c116('0x57f')),'description':_0xd45a88(_0x55c116('0x45f'))+prefix+_0xd45a88(_0x55c116('0xbd')),'rowId':_0xd45a88(_0x55c116('0xbd'))},{'title':_0xd45a88(_0x55c116('0x142')),'description':_0xd45a88(_0x55c116('0x108'))+prefix+_0xd45a88(_0x55c116('0x458')),'rowId':_0xd45a88(_0x55c116('0x458'))},{'title':_0xd45a88(_0x55c116('0x826')),'description':_0xd45a88(_0x55c116('0x321'))+prefix+_0xd45a88(_0x55c116('0x85c')),'rowId':_0xd45a88(_0x55c116('0x85c'))},{'title':_0xd45a88(_0x55c116('0x1e4')),'description':_0xd45a88(_0x55c116('0x713'))+prefix+_0xd45a88(_0x55c116('0x671')),'rowId':_0xd45a88(_0x55c116('0x671'))},{'title':_0xd45a88(_0x55c116('0x730')),'description':_0xd45a88(_0x55c116('0x485'))+prefix+_0xd45a88(_0x55c116('0x670')),'rowId':_0xd45a88(_0x55c116('0x670'))},{'title':_0xd45a88(_0x55c116('0x664')),'description':_0xd45a88(_0x55c116('0x6dc'))+prefix+_0xd45a88(_0x55c116('0x15d')),'rowId':_0xd45a88(_0x55c116('0x15d'))},{'title':_0xd45a88(_0x55c116('0x756')),'description':_0xd45a88(_0x55c116('0x21f'))+prefix+_0xd45a88(_0x55c116('0x475')),'rowId':_0xd45a88(_0x55c116('0x475'))},{'title':_0xd45a88(_0x55c116('0x150')),'description':_0xd45a88(_0x55c116('0x747'))+prefix+_0xd45a88(_0x55c116('0x738')),'rowId':_0xd45a88(_0x55c116('0x738'))},{'title':_0xd45a88(_0x55c116('0x781')),'description':_0xd45a88(_0x55c116('0x7c3'))+prefix+_0xd45a88(_0x55c116('0x499')),'rowId':_0xd45a88(_0x55c116('0x499'))}],buttonMessage2=[{'title':_0xd45a88(_0x55c116('0x6d7')),'description':_0xd45a88(_0x55c116('0x7f3'))+prefix+_0xd45a88(_0x55c116('0x28e')),'rowId':_0xd45a88(_0x55c116('0x28e'))},{'title':_0xd45a88(_0x55c116('0x860')),'description':_0xd45a88(_0x55c116('0x779'))+prefix+_0xd45a88(_0x55c116('0x847')),'rowId':_0xd45a88(_0x55c116('0x847'))},{'title':_0xd45a88(_0x55c116('0x794')),'description':_0xd45a88(_0x55c116('0x18e'))+prefix+_0xd45a88(_0x55c116('0x2d1')),'rowId':_0xd45a88(_0x55c116('0x2d1'))}],buttonMessage=[{'title':_0xd45a88(_0x55c116('0x43b')),'description':_0xd45a88(_0x55c116('0xfb'))+prefix+_0xd45a88(_0x55c116('0x726')),'rowId':_0xd45a88(_0x55c116('0x726'))},{'title':_0xd45a88(_0x55c116('0x846')),'description':_0xd45a88(_0x55c116('0x444'))+prefix+_0xd45a88(_0x55c116('0x2e0')),'rowId':_0xd45a88(_0x55c116('0x2e0'))},{'title':_0xd45a88(_0x55c116('0x42a')),'description':_0xd45a88(_0x55c116('0x88'))+prefix+_0xd45a88(_0x55c116('0x22b')),'rowId':_0xd45a88(_0x55c116('0x22b'))},{'title':_0xd45a88(_0x55c116('0x72')),'description':_0xd45a88(_0x55c116('0x384'))+prefix+_0xd45a88(_0x55c116('0x2dd')),'rowId':_0xd45a88(_0x55c116('0x2dd'))}],sections=[{'title':_0xd45a88(_0x55c116('0x224')),'rows':buttonMessage},{'title':_0xd45a88(_0x55c116('0x6fd')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x793')),'rows':buttonMessage2}],buttons={'buttonText':_0xd45a88(_0x55c116('0x29e')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x2e5'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x3b6')):case _0xd45a88(_0x55c116('0x3a5')):case _0xd45a88(_0x55c116('0x623')):case _0xd45a88(_0x55c116('0x736')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x3bd')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x197')),'rowId':_0xd45a88(_0x55c116('0x197'))},{'title':_0xd45a88(_0x55c116('0x77c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x40e')),'rowId':_0xd45a88(_0x55c116('0x40e'))},{'title':_0xd45a88(_0x55c116('0x6d5')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x185')),'rowId':_0xd45a88(_0x55c116('0x185'))},{'title':_0xd45a88(_0x55c116('0x31a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x62f')),'rowId':_0xd45a88(_0x55c116('0x62f'))},{'title':_0xd45a88(_0x55c116('0x585')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x58c')),'rowId':_0xd45a88(_0x55c116('0x58c'))},{'title':_0xd45a88(_0x55c116('0x784')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x7e7')),'rowId':_0xd45a88(_0x55c116('0x7e7'))},{'title':_0xd45a88(_0x55c116('0x1bb')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x81e')),'rowId':_0xd45a88(_0x55c116('0x81e'))},{'title':_0xd45a88(_0x55c116('0x748')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1c0')),'rowId':_0xd45a88(_0x55c116('0x1c0'))},{'title':_0xd45a88(_0x55c116('0x39e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2c3')),'rowId':_0xd45a88(_0x55c116('0x2c3'))},{'title':_0xd45a88(_0x55c116('0x6f7')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x858')),'rowId':_0xd45a88(_0x55c116('0x858'))},{'title':_0xd45a88(_0x55c116('0x3b4')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x853')),'rowId':_0xd45a88(_0x55c116('0x853'))},{'title':_0xd45a88(_0x55c116('0x144')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x18d')),'rowId':_0xd45a88(_0x55c116('0x18d'))},{'title':_0xd45a88(_0x55c116('0x878')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x37b')),'rowId':_0xd45a88(_0x55c116('0x37b'))},{'title':_0xd45a88(_0x55c116('0x5e9')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xe2')),'rowId':_0xd45a88(_0x55c116('0xe2'))},{'title':_0xd45a88(_0x55c116('0x106')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x71d')),'rowId':_0xd45a88(_0x55c116('0x71d'))},{'title':_0xd45a88(_0x55c116('0x7a9')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3ad')),'rowId':_0xd45a88(_0x55c116('0x3ad'))},{'title':_0xd45a88(_0x55c116('0x326')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2df')),'rowId':_0xd45a88(_0x55c116('0x2df'))},{'title':_0xd45a88(_0x55c116('0x6db')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x744')),'rowId':_0xd45a88(_0x55c116('0x744'))},{'title':_0xd45a88(_0x55c116('0x5bb')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x119')),'rowId':_0xd45a88(_0x55c116('0x119'))},{'title':_0xd45a88(_0x55c116('0x53f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xb2')),'rowId':_0xd45a88(_0x55c116('0xb2'))},{'title':_0xd45a88(_0x55c116('0x72f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1f5')),'rowId':_0xd45a88(_0x55c116('0x1f5'))},{'title':_0xd45a88(_0x55c116('0x49d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x64e')),'rowId':_0xd45a88(_0x55c116('0x64e'))},{'title':_0xd45a88(_0x55c116('0x267')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x20a')),'rowId':_0xd45a88(_0x55c116('0x20a'))},{'title':_0xd45a88(_0x55c116('0x15f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x23e')),'rowId':_0xd45a88(_0x55c116('0x23e'))},{'title':_0xd45a88(_0x55c116('0x3ee')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x69d')),'rowId':_0xd45a88(_0x55c116('0x69d'))},{'title':_0xd45a88(_0x55c116('0x19c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x7ab')),'rowId':_0xd45a88(_0x55c116('0x7ab'))},{'title':_0xd45a88(_0x55c116('0xaf')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x533')),'rowId':_0xd45a88(_0x55c116('0x533'))},{'title':_0xd45a88(_0x55c116('0x32e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x206')),'rowId':_0xd45a88(_0x55c116('0x206'))},{'title':_0xd45a88(_0x55c116('0x69a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3b0')),'rowId':_0xd45a88(_0x55c116('0x3b0'))},{'title':_0xd45a88(_0x55c116('0x4f0')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3c1')),'rowId':_0xd45a88(_0x55c116('0x3c1'))},{'title':_0xd45a88(_0x55c116('0xc5')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xad')),'rowId':_0xd45a88(_0x55c116('0xad'))},{'title':_0xd45a88(_0x55c116('0x250')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x461')),'rowId':_0xd45a88(_0x55c116('0x461'))},{'title':_0xd45a88(_0x55c116('0x830')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x6e8')),'rowId':_0xd45a88(_0x55c116('0x6e8'))},{'title':_0xd45a88(_0x55c116('0x80a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3e5')),'rowId':_0xd45a88(_0x55c116('0x3e5'))},{'title':_0xd45a88(_0x55c116('0x29c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x214')),'rowId':_0xd45a88(_0x55c116('0x214'))},{'title':_0xd45a88(_0x55c116('0x705')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x245')),'rowId':_0xd45a88(_0x55c116('0x245'))},{'title':_0xd45a88(_0x55c116('0x41c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x419')),'rowId':_0xd45a88(_0x55c116('0x419'))},{'title':_0xd45a88(_0x55c116('0x4b9')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x836')),'rowId':_0xd45a88(_0x55c116('0x836'))},{'title':_0xd45a88(_0x55c116('0xf0')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2d0')),'rowId':_0xd45a88(_0x55c116('0x2d0'))},{'title':_0xd45a88(_0x55c116('0x4e3')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x622')),'rowId':_0xd45a88(_0x55c116('0x622'))},{'title':_0xd45a88(_0x55c116('0x1b5')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x71f')),'rowId':_0xd45a88(_0x55c116('0x71f'))},{'title':_0xd45a88(_0x55c116('0x6a8')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x564')),'rowId':_0xd45a88(_0x55c116('0x564'))},{'title':_0xd45a88(_0x55c116('0x678')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x331')),'rowId':_0xd45a88(_0x55c116('0x331'))},{'title':_0xd45a88(_0x55c116('0x6de')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3e9')),'rowId':_0xd45a88(_0x55c116('0x3e9'))},{'title':_0xd45a88(_0x55c116('0x6f4')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2ac')),'rowId':_0xd45a88(_0x55c116('0x2ac'))},{'title':_0xd45a88(_0x55c116('0x55d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x609')),'rowId':_0xd45a88(_0x55c116('0x609'))},{'title':_0xd45a88(_0x55c116('0x815')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x17f')),'rowId':_0xd45a88(_0x55c116('0x17f'))},{'title':_0xd45a88(_0x55c116('0x3bc')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x11b')),'rowId':_0xd45a88(_0x55c116('0x11b'))},{'title':_0xd45a88(_0x55c116('0x70e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x16d')),'rowId':_0xd45a88(_0x55c116('0x16d'))},{'title':_0xd45a88(_0x55c116('0x67c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x136')),'rowId':_0xd45a88(_0x55c116('0x136'))},{'title':_0xd45a88(_0x55c116('0x2be')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x4a2')),'rowId':_0xd45a88(_0x55c116('0x4a2'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x514')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x650')),'rowId':_0xd45a88(_0x55c116('0x650'))},{'title':_0xd45a88(_0x55c116('0x3b5')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x834')),'rowId':_0xd45a88(_0x55c116('0x834'))},{'title':_0xd45a88(_0x55c116('0x400')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x593')),'rowId':_0xd45a88(_0x55c116('0x593'))},{'title':_0xd45a88(_0x55c116('0x56f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xc1')),'rowId':_0xd45a88(_0x55c116('0xc1'))},{'title':_0xd45a88(_0x55c116('0x7b')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x65d')),'rowId':_0xd45a88(_0x55c116('0x65d'))},{'title':_0xd45a88(_0x55c116('0x478')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x658')),'rowId':_0xd45a88(_0x55c116('0x658'))},{'title':_0xd45a88(_0x55c116('0x2de')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x5b2')),'rowId':_0xd45a88(_0x55c116('0x3b8'))}],sections=[{'title':_0xd45a88(_0x55c116('0x7af')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x2e9')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x5e4')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x623'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x5d1')):case _0xd45a88(_0x55c116('0x16c')):case _0xd45a88(_0x55c116('0x736')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x73e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x24a')),'rowId':_0xd45a88(_0x55c116('0x24a'))},{'title':_0xd45a88(_0x55c116('0x17b')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1fe')),'rowId':_0xd45a88(_0x55c116('0x1fe'))},{'title':_0xd45a88(_0x55c116('0x1a6')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x647')),'rowId':_0xd45a88(_0x55c116('0x647'))},{'title':_0xd45a88(_0x55c116('0x7ff')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x83f')),'rowId':_0xd45a88(_0x55c116('0x83f'))},{'title':_0xd45a88(_0x55c116('0x1f1')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x586')),'rowId':_0xd45a88(_0x55c116('0x586'))},{'title':_0xd45a88(_0x55c116('0x467')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x692')),'rowId':_0xd45a88(_0x55c116('0x692'))},{'title':_0xd45a88(_0x55c116('0x4da')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x4ba')),'rowId':_0xd45a88(_0x55c116('0x4ba'))},{'title':_0xd45a88(_0x55c116('0x82e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x581')),'rowId':_0xd45a88(_0x55c116('0x581'))},{'title':_0xd45a88(_0x55c116('0x49a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x83c')),'rowId':_0xd45a88(_0x55c116('0x83c'))},{'title':_0xd45a88(_0x55c116('0x30d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xf2')),'rowId':_0xd45a88(_0x55c116('0xf2'))},{'title':_0xd45a88(_0x55c116('0x630')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x12e')),'rowId':_0xd45a88(_0x55c116('0x12e'))},{'title':_0xd45a88(_0x55c116('0x78c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x85b')),'rowId':_0xd45a88(_0x55c116('0x85b'))}],buttonMessage2=[{'title':_0xd45a88(_0x55c116('0x302')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x855')),'rowId':_0xd45a88(_0x55c116('0x855'))},{'title':_0xd45a88(_0x55c116('0x37f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x27c')),'rowId':_0xd45a88(_0x55c116('0x27c'))},{'title':_0xd45a88(_0x55c116('0x34e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x17e')),'rowId':_0xd45a88(_0x55c116('0x17e'))},{'title':_0xd45a88(_0x55c116('0x399')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x7d4')),'rowId':_0xd45a88(_0x55c116('0x7d4'))},{'title':_0xd45a88(_0x55c116('0x63e')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x5fa')),'rowId':_0xd45a88(_0x55c116('0x5fa'))}],buttonMessage3=[{'title':_0xd45a88(_0x55c116('0x249')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x20f')),'rowId':_0xd45a88(_0x55c116('0x20f'))},{'title':_0xd45a88(_0x55c116('0x818')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x342')),'rowId':_0xd45a88(_0x55c116('0x342'))},{'title':_0xd45a88(_0x55c116('0x39a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x7fe')),'rowId':_0xd45a88(_0x55c116('0x7fe'))},{'title':_0xd45a88(_0x55c116('0x5f3')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x4fb')),'rowId':_0xd45a88(_0x55c116('0x4fb'))},{'title':_0xd45a88(_0x55c116('0x149')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xe5')),'rowId':_0xd45a88(_0x55c116('0xe5'))},{'title':_0xd45a88(_0x55c116('0x7f8')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1d7')),'rowId':_0xd45a88(_0x55c116('0x1d7'))},{'title':_0xd45a88(_0x55c116('0x506')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x5b2')),'rowId':_0xd45a88(_0x55c116('0x5b2'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x3f6')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x519')),'rowId':_0xd45a88(_0x55c116('0x519'))},{'title':_0xd45a88(_0x55c116('0x821')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x55f')),'rowId':_0xd45a88(_0x55c116('0x55f'))},{'title':_0xd45a88(_0x55c116('0x3e4')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x83a')),'rowId':_0xd45a88(_0x55c116('0x83a'))},{'title':_0xd45a88(_0x55c116('0x208')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x117')),'rowId':_0xd45a88(_0x55c116('0x117'))},{'title':_0xd45a88(_0x55c116('0x557')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x195')),'rowId':_0xd45a88(_0x55c116('0x195'))},{'title':_0xd45a88(_0x55c116('0x33d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x74c')),'rowId':_0xd45a88(_0x55c116('0x74c'))},{'title':_0xd45a88(_0x55c116('0x416')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x280')),'rowId':_0xd45a88(_0x55c116('0x280'))},{'title':_0xd45a88(_0x55c116('0x550')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x403')),'rowId':_0xd45a88(_0x55c116('0x403'))},{'title':_0xd45a88(_0x55c116('0x5b6')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x86b')),'rowId':_0xd45a88(_0x55c116('0x86b'))},{'title':_0xd45a88(_0x55c116('0x56a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x211')),'rowId':_0xd45a88(_0x55c116('0x211'))},{'title':_0xd45a88(_0x55c116('0x344')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x517')),'rowId':_0xd45a88(_0x55c116('0x517'))},{'title':_0xd45a88(_0x55c116('0x56d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x607')),'rowId':_0xd45a88(_0x55c116('0x607'))},{'title':_0xd45a88(_0x55c116('0x1e2')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1d8')),'rowId':_0xd45a88(_0x55c116('0x1d8'))},{'title':_0xd45a88(_0x55c116('0x7de')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x53b')),'rowId':_0xd45a88(_0x55c116('0x53b'))},{'title':_0xd45a88(_0x55c116('0x412')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x605')),'rowId':_0xd45a88(_0x55c116('0x605'))},{'title':_0xd45a88(_0x55c116('0x772')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x306')),'rowId':_0xd45a88(_0x55c116('0x306'))}],sections=[{'title':_0xd45a88(_0x55c116('0x7e0')),'rows':buttonMessage3},{'title':_0xd45a88(_0x55c116('0x3a3')),'rows':buttonMessage2},{'title':_0xd45a88(_0x55c116('0x272')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x5d7')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x1c3')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x5d1'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x248')):case _0xd45a88(_0x55c116('0x46b')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x1a1')),'description':_0xd45a88(_0x55c116('0x46f'))+prefix+_0xd45a88(_0x55c116('0x6e2')),'rowId':_0xd45a88(_0x55c116('0x6e2'))},{'title':_0xd45a88(_0x55c116('0x4c8')),'description':_0xd45a88(_0x55c116('0x1ac'))+prefix+_0xd45a88(_0x55c116('0x2c2')),'rowId':_0xd45a88(_0x55c116('0x2c2'))},{'title':_0xd45a88(_0x55c116('0x16f')),'description':_0xd45a88(_0x55c116('0x48b'))+prefix+_0xd45a88(_0x55c116('0x3f0')),'rowId':_0xd45a88(_0x55c116('0x3f0'))},{'title':_0xd45a88(_0x55c116('0x112')),'description':_0xd45a88(_0x55c116('0x239'))+prefix+_0xd45a88(_0x55c116('0x7a7')),'rowId':_0xd45a88(_0x55c116('0x7a7'))},{'title':_0xd45a88(_0x55c116('0x37d')),'description':_0xd45a88(_0x55c116('0x577'))+prefix+_0xd45a88(_0x55c116('0x7ca')),'rowId':_0xd45a88(_0x55c116('0x7ca'))},{'title':_0xd45a88(_0x55c116('0x182')),'description':_0xd45a88(_0x55c116('0x5ef'))+prefix+_0xd45a88(_0x55c116('0x813')),'rowId':_0xd45a88(_0x55c116('0x813'))},{'title':_0xd45a88(_0x55c116('0x218')),'description':_0xd45a88(_0x55c116('0x120'))+prefix+_0xd45a88(_0x55c116('0x19d')),'rowId':_0xd45a88(_0x55c116('0x19d'))},{'title':_0xd45a88(_0x55c116('0x6b2')),'description':_0xd45a88(_0x55c116('0x359'))+prefix+_0xd45a88(_0x55c116('0x7a4')),'rowId':_0xd45a88(_0x55c116('0x7a4'))},{'title':_0xd45a88(_0x55c116('0x97')),'description':_0xd45a88(_0x55c116('0x73'))+prefix+_0xd45a88(_0x55c116('0x25f')),'rowId':_0xd45a88(_0x55c116('0x25f'))}],buttonMessage=[{'title':_0xd45a88(_0x55c116('0x4e9')),'description':_0xd45a88(_0x55c116('0x844'))+prefix+_0xd45a88(_0x55c116('0x789')),'rowId':_0xd45a88(_0x55c116('0x789'))},{'title':_0xd45a88(_0x55c116('0x66b')),'description':_0xd45a88(_0x55c116('0x232'))+prefix+_0xd45a88(_0x55c116('0x4dc')),'rowId':_0xd45a88(_0x55c116('0x4dc'))},{'title':_0xd45a88(_0x55c116('0x452')),'description':_0xd45a88(_0x55c116('0x375'))+prefix+_0xd45a88(_0x55c116('0x34f')),'rowId':_0xd45a88(_0x55c116('0x34f'))},{'title':_0xd45a88(_0x55c116('0x2b2')),'description':_0xd45a88(_0x55c116('0x476'))+prefix+_0xd45a88(_0x55c116('0xd3')),'rowId':_0xd45a88(_0x55c116('0xd3'))},{'title':_0xd45a88(_0x55c116('0x8a')),'description':_0xd45a88(_0x55c116('0x4a7'))+prefix+_0xd45a88(_0x55c116('0x184')),'rowId':_0xd45a88(_0x55c116('0x184'))},{'title':_0xd45a88(_0x55c116('0x762')),'description':_0xd45a88(_0x55c116('0x7cc'))+prefix+_0xd45a88(_0x55c116('0x1ec')),'rowId':_0xd45a88(_0x55c116('0x1ec'))},{'title':_0xd45a88(_0x55c116('0x36c')),'description':_0xd45a88(_0x55c116('0x284'))+prefix+_0xd45a88(_0x55c116('0x70f')),'rowId':_0xd45a88(_0x55c116('0x70f'))},{'title':_0xd45a88(_0x55c116('0x5f2')),'description':_0xd45a88(_0x55c116('0x7ce'))+prefix+_0xd45a88(_0x55c116('0x35b')),'rowId':_0xd45a88(_0x55c116('0x35b'))},{'title':_0xd45a88(_0x55c116('0x6ef')),'description':_0xd45a88(_0x55c116('0x5ef'))+prefix+_0xd45a88(_0x55c116('0x387')),'rowId':_0xd45a88(_0x55c116('0x387'))},{'title':_0xd45a88(_0x55c116('0x479')),'description':_0xd45a88(_0x55c116('0x4db'))+prefix+_0xd45a88(_0x55c116('0x691')),'rowId':_0xd45a88(_0x55c116('0x691'))}],sections=[{'title':_0xd45a88(_0x55c116('0x2c9')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x1a4')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x839')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x5d1'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x7e9')):case _0xd45a88(_0x55c116('0x36a')):case _0xd45a88(_0x55c116('0x7e9')):case _0xd45a88(_0x55c116('0x634')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x167'))]()+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0xa5')):case _0xd45a88(_0x55c116('0x2fc')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const gamerows2=[{'title':_0xd45a88(_0x55c116('0x4a0')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x6f5')),'rowId':_0xd45a88(_0x55c116('0x6f5'))},{'title':_0xd45a88(_0x55c116('0x3ae')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x601')),'rowId':_0xd45a88(_0x55c116('0x601'))},{'title':_0xd45a88(_0x55c116('0x503')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x473')),'rowId':_0xd45a88(_0x55c116('0x473'))},{'title':_0xd45a88(_0x55c116('0x188')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x877')),'rowId':_0xd45a88(_0x55c116('0x877'))},{'title':_0xd45a88(_0x55c116('0x212')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x5b3')),'rowId':_0xd45a88(_0x55c116('0x5b3'))},{'title':_0xd45a88(_0x55c116('0x5da')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x547')),'rowId':_0xd45a88(_0x55c116('0x547'))},{'title':_0xd45a88(_0x55c116('0x55c')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x28c')),'rowId':_0xd45a88(_0x55c116('0x28c'))}],sectionsgame2=[{'title':_0xd45a88(_0x55c116('0x442')),'rows':gamerows2}],buttongame2={'buttonText':_0xd45a88(_0x55c116('0x3b2')),'footerText':support,'description':buttonshello,'sections':sectionsgame2,'listType':0x1};client[_0xd45a88(_0x55c116('0x57a'))](from,buttongame2,MessageType[_0xd45a88(_0x55c116('0x21b'))],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0xd45a88(_0x55c116('0xd5')),'body':''+fakereply,'previewType':_0xd45a88(_0x55c116('0x7b6')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0xa5'))](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x358')):case _0xd45a88(_0x55c116('0x40c')):case _0xd45a88(_0x55c116('0x759')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x4b7')),'description':_0xd45a88(_0x55c116('0x13d'))+prefix+_0xd45a88(_0x55c116('0x5bd')),'rowId':_0xd45a88(_0x55c116('0x5bd'))},{'title':_0xd45a88(_0x55c116('0x132')),'description':_0xd45a88(_0x55c116('0x5d2'))+prefix+_0xd45a88(_0x55c116('0x720')),'rowId':_0xd45a88(_0x55c116('0x720'))},{'title':_0xd45a88(_0x55c116('0x389')),'description':_0xd45a88(_0x55c116('0x83'))+prefix+_0xd45a88(_0x55c116('0x65e')),'rowId':_0xd45a88(_0x55c116('0x65e'))},{'title':_0xd45a88(_0x55c116('0x379')),'description':_0xd45a88(_0x55c116('0x529'))+prefix+_0xd45a88(_0x55c116('0x509')),'rowId':_0xd45a88(_0x55c116('0x509'))},{'title':_0xd45a88(_0x55c116('0x6ca')),'description':_0xd45a88(_0x55c116('0x5e3'))+prefix+_0xd45a88(_0x55c116('0x57e')),'rowId':_0xd45a88(_0x55c116('0x57e'))},{'title':_0xd45a88(_0x55c116('0x50c')),'description':_0xd45a88(_0x55c116('0x2b8'))+prefix+_0xd45a88(_0x55c116('0x4fd')),'rowId':_0xd45a88(_0x55c116('0x4fd'))},{'title':_0xd45a88(_0x55c116('0x2e8')),'description':_0xd45a88(_0x55c116('0x753'))+prefix+'gc','rowId':'gc'},{'title':_0xd45a88(_0x55c116('0x365')),'description':_0xd45a88(_0x55c116('0x27b'))+prefix+_0xd45a88(_0x55c116('0x4d5')),'rowId':_0xd45a88(_0x55c116('0x4d5'))},{'title':_0xd45a88(_0x55c116('0x2c7')),'description':_0xd45a88(_0x55c116('0x247'))+prefix+_0xd45a88(_0x55c116('0x2d6')),'rowId':_0xd45a88(_0x55c116('0x2d6'))},{'title':_0xd45a88(_0x55c116('0xd8')),'description':_0xd45a88(_0x55c116('0x78'))+prefix+_0xd45a88(_0x55c116('0x286')),'rowId':_0xd45a88(_0x55c116('0x286'))},{'title':_0xd45a88(_0x55c116('0x20b')),'description':_0xd45a88(_0x55c116('0x26e'))+prefix+_0xd45a88(_0x55c116('0x7c')),'rowId':_0xd45a88(_0x55c116('0x7c'))},{'title':_0xd45a88(_0x55c116('0x85a')),'description':_0xd45a88(_0x55c116('0x9f'))+prefix+_0xd45a88(_0x55c116('0x60b')),'rowId':_0xd45a88(_0x55c116('0x60b'))},{'title':_0xd45a88(_0x55c116('0x38f')),'description':_0xd45a88(_0x55c116('0x21a'))+prefix+_0xd45a88(_0x55c116('0x163')),'rowId':_0xd45a88(_0x55c116('0x163'))},{'title':_0xd45a88(_0x55c116('0x134')),'description':_0xd45a88(_0x55c116('0x79a'))+prefix+_0xd45a88(_0x55c116('0x263')),'rowId':_0xd45a88(_0x55c116('0x263'))},{'title':_0xd45a88(_0x55c116('0x562')),'description':_0xd45a88(_0x55c116('0x1ee'))+prefix+_0xd45a88(_0x55c116('0x26f')),'rowId':_0xd45a88(_0x55c116('0x26f'))},{'title':_0xd45a88(_0x55c116('0x79')),'description':_0xd45a88(_0x55c116('0x472'))+prefix+_0xd45a88(_0x55c116('0x675')),'rowId':_0xd45a88(_0x55c116('0x675'))},{'title':_0xd45a88(_0x55c116('0x39d')),'description':_0xd45a88(_0x55c116('0x3c0'))+prefix+_0xd45a88(_0x55c116('0x5fe')),'rowId':_0xd45a88(_0x55c116('0x5fe'))},{'title':_0xd45a88(_0x55c116('0x5a7')),'description':_0xd45a88(_0x55c116('0x3c0'))+prefix+_0xd45a88(_0x55c116('0x5ad')),'rowId':_0xd45a88(_0x55c116('0x5ad'))},{'title':_0xd45a88(_0x55c116('0x7d9')),'description':_0xd45a88(_0x55c116('0x3c0'))+prefix+_0xd45a88(_0x55c116('0x80e')),'rowId':_0xd45a88(_0x55c116('0x80e'))}],buttonMessage1=[{'title':_0xd45a88(_0x55c116('0x3cd')),'description':_0xd45a88(_0x55c116('0x5af'))+prefix+_0xd45a88(_0x55c116('0x33e')),'rowId':_0xd45a88(_0x55c116('0x33e'))},{'title':_0xd45a88(_0x55c116('0x73f')),'description':_0xd45a88(_0x55c116('0x490'))+prefix+_0xd45a88(_0x55c116('0x51f')),'rowId':_0xd45a88(_0x55c116('0x51f'))},{'title':_0xd45a88(_0x55c116('0x143')),'description':_0xd45a88(_0x55c116('0x176'))+prefix+_0xd45a88(_0x55c116('0x827')),'rowId':_0xd45a88(_0x55c116('0x827'))},{'title':_0xd45a88(_0x55c116('0x226')),'description':_0xd45a88(_0x55c116('0x729'))+prefix+_0xd45a88(_0x55c116('0x732')),'rowId':_0xd45a88(_0x55c116('0x732'))}],buttonMessage2=[{'title':_0xd45a88(_0x55c116('0x2cb')),'description':_0xd45a88(_0x55c116('0x74e'))+prefix+_0xd45a88(_0x55c116('0x459')),'rowId':_0xd45a88(_0x55c116('0x459'))},{'title':_0xd45a88(_0x55c116('0x6a6')),'description':_0xd45a88(_0x55c116('0x1b6'))+prefix+_0xd45a88(_0x55c116('0x6f2')),'rowId':_0xd45a88(_0x55c116('0x6f2'))},{'title':_0xd45a88(_0x55c116('0x183')),'description':_0xd45a88(_0x55c116('0x572'))+prefix+_0xd45a88(_0x55c116('0x660')),'rowId':_0xd45a88(_0x55c116('0x660'))}],sections=[{'title':_0xd45a88(_0x55c116('0x29b')),'rows':buttonMessage},{'title':_0xd45a88(_0x55c116('0x369')),'rows':buttonMessage1},{'title':_0xd45a88(_0x55c116('0x2e2')),'rows':buttonMessage2}],buttons={'buttonText':_0xd45a88(_0x55c116('0x82d')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x45e'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x1ae')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const gamerows2=[{'title':_0xd45a88(_0x55c116('0x871')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x258')),'rowId':_0xd45a88(_0x55c116('0x258'))},{'title':_0xd45a88(_0x55c116('0xb4')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x435')),'rowId':_0xd45a88(_0x55c116('0x435'))},{'title':_0xd45a88(_0x55c116('0x52a')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x1ad')),'rowId':_0xd45a88(_0x55c116('0x1ad'))},{'title':_0xd45a88(_0x55c116('0x7c6')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2a2')),'rowId':_0xd45a88(_0x55c116('0x2a2'))},{'title':_0xd45a88(_0x55c116('0x817')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x6c5')),'rowId':_0xd45a88(_0x55c116('0x6c5'))},{'title':_0xd45a88(_0x55c116('0x51b')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x51b')),'rowId':_0xd45a88(_0x55c116('0x51b'))},{'title':_0xd45a88(_0x55c116('0x598')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x31c')),'rowId':_0xd45a88(_0x55c116('0x31c'))},{'title':_0xd45a88(_0x55c116('0x79d')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x265')),'rowId':_0xd45a88(_0x55c116('0x265'))},{'title':_0xd45a88(_0x55c116('0x430')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x4d4')),'rowId':_0xd45a88(_0x55c116('0x4d4'))},{'title':_0xd45a88(_0x55c116('0x465')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x2bb')),'rowId':_0xd45a88(_0x55c116('0x2bb'))},{'title':_0xd45a88(_0x55c116('0x67b')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0xf4')),'rowId':_0xd45a88(_0x55c116('0xf4'))},{'title':_0xd45a88(_0x55c116('0x145')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x7d8')),'rowId':_0xd45a88(_0x55c116('0x7d8'))},{'title':_0xd45a88(_0x55c116('0x7b8')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x3a9')),'rowId':_0xd45a88(_0x55c116('0x3a9'))},{'title':_0xd45a88(_0x55c116('0x27f')),'description':_0xd45a88(_0x55c116('0x1cc'))+prefix+_0xd45a88(_0x55c116('0x4c4')),'rowId':_0xd45a88(_0x55c116('0x4c4'))}],sectionsgame2=[{'title':_0xd45a88(_0x55c116('0x14c')),'rows':gamerows2}],buttongame2={'buttonText':_0xd45a88(_0x55c116('0x540')),'footerText':support,'description':buttonshello,'sections':sectionsgame2,'listType':0x1};client[_0xd45a88(_0x55c116('0x57a'))](from,buttongame2,MessageType[_0xd45a88(_0x55c116('0x21b'))],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0xd45a88(_0x55c116('0xd5')),'body':''+fakereply,'previewType':_0xd45a88(_0x55c116('0x7b6')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x1ae'))](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x466')):case _0xd45a88(_0x55c116('0x5c6')):case _0xd45a88(_0x55c116('0x61b')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isGroup)return reply(_0xd45a88(_0x55c116('0x54a')));if(isBanned)return replysticker(banstc);if(database===!![]){if(checkLimituser(sender)<=0x0)return reply(ind[_0xd45a88(_0x55c116('0x83b'))]());}anug=getRegisteredRandomId(_registered)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x10b')),'');const anugaa=anug[_0xd45a88(_0x55c116('0x437'))]('@')[0x0]+_0xd45a88(_0x55c116('0x10b'));try{nextw=await client[_0xd45a88(_0x55c116('0x739'))](anugaa[_0xd45a88(_0x55c116('0x437'))]('@')[0x0]+_0xd45a88(_0x55c116('0x10b')));}catch{nextw=_0xd45a88(_0x55c116('0x587'));}buffer=await getBuffer(nextw);const bexasoa=await client[_0xd45a88(_0x55c116('0x81f'))](from,buffer,MessageType[_0xd45a88(_0x55c116('0x7db'))],{'thumbnail':buffer});let yesad=bexasoa[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x7df'))]?bexasoa[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x7df'))]:bexasoa;await reply(_0xd45a88(_0x55c116('0x1c2'))),await sleep(0xbb8);const buttonsjodoh1=[{'buttonId':_0xd45a88(_0x55c116('0x5c6')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x666'))},'type':0x1}],buttonMessagejodoh1={'contentText':_0xd45a88(_0x55c116('0x3cb'))+prefix+_0xd45a88(_0x55c116('0x5d3'))+pushname+'\x0a@'+anugaa[_0xd45a88(_0x55c116('0x437'))]('@')[0x0],'footerText':_0xd45a88(_0x55c116('0xa2'))+anug+_0xd45a88(_0x55c116('0x50d'))+support,'buttons':buttonsjodoh1,'headerType':0x6,'locationMessage':yesad[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x96'))]};client[_0xd45a88(_0x55c116('0x57a'))](from,buttonMessagejodoh1,MessageType[_0xd45a88(_0x55c116('0x511'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[anugaa,numbernye,dev,ow]}}),database===!![]&&confirmLIMIT(sender,[angka]);break;case _0xd45a88(_0x55c116('0x383')):var kntl=body[_0xd45a88(_0x55c116('0x3ab'))](0x8),nama=kntl[_0xd45a88(_0x55c116('0x437'))]('|')[0x0],impostor=kntl[_0xd45a88(_0x55c116('0x437'))]('|')[0x1];client[_0xd45a88(_0x55c116('0x57a'))](from,{'name':''+nama,'address':''+impostor},MessageType[_0xd45a88(_0x55c116('0x7db'))]);break;case _0xd45a88(_0x55c116('0x2d4')):case _0xd45a88(_0x55c116('0x5a1')):case'd':if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup&&!isOwner)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);client[_0xd45a88(_0x55c116('0x2a8'))](from,{'id':mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x295'))],'remoteJid':from,'fromMe':!![]}),database===!![]&&confirmLIMIT(sender,[angka]);break;case _0xd45a88(_0x55c116('0x690')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0xd45a88(_0x55c116('0x654'))){if(banChats===!![])return replysticker(faktifstc);banChats=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x5d8'))){if(banChats===![])return replysticker(faktifstc);banChats=![],replysticker(successtc);}else!q&&await sendButtonText(from,_0xd45a88(_0x55c116('0x856')),support,[{'buttonId':_0xd45a88(_0x55c116('0x5d8')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x3a6'))},'type':0x1},{'buttonId':_0xd45a88(_0x55c116('0x654')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x686'))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}break;case _0xd45a88(_0x55c116('0x83e')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!q)return reply(_0xd45a88(_0x55c116('0x1b4')));anu=fs[_0xd45a88(_0x55c116('0x3bb'))](''+q),reply(String(anu));break;case _0xd45a88(_0x55c116('0x654')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(banChats===!![])return replysticker(faktifstc);banChats=!![],replysticker(successtc);break;case _0xd45a88(_0x55c116('0x5d8')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(banChats===![])return replysticker(faktifstc);banChats=![],replysticker(successtc);break;case _0xd45a88(_0x55c116('0x7fb')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(!isOwner)return replysticker(ownerstc);setTimeout(()=>{const _0x51024b=_0x55c116,_0x583a2d=_0xd45a88;client[_0x583a2d(_0x51024b('0x659'))](from);},0x7d0),setTimeout(()=>{replysticker(leavestc);},0x0);break;case'bc':case _0xd45a88(_0x55c116('0x164')):case _0xd45a88(_0x55c116('0x791')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);anu=await client[_0xd45a88(_0x55c116('0x4f7'))][_0xd45a88(_0x55c116('0x57d'))]();if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;buff=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],buff,image,{'quoted':fgif,'thumbnail':Buffer[_0xd45a88(_0x55c116('0x418'))](0x0),'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,video,{'mimetype':_0xd45a88(_0x55c116('0x74a')),'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,sticker,{'mimetype':Mimetype[_0xd45a88(_0x55c116('0xb7'))],'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x701'))]||isQuotedAudio){const encmedia=isQuotedAudio?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,audio,{'mimetype':_0xd45a88(_0x55c116('0x38b')),'ptt':!![],'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x567'))+q});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedSticker){const encmedia=isQuotedSticker?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,sticker,{'quoted':fgif});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(q){for(let _ of anu){sendButtonImageLoc(_[_0xd45a88(_0x55c116('0xa4'))],_0xd45a88(_0x55c116('0x6cf'))+q,support,buttonsmenu2,{'quoted':fgif,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else sendButtonImageLoc(from,_0xd45a88(_0x55c116('0x3fd'))+(prefix+command)+_0xd45a88(_0x55c116('0x73d')),support,buttonsmenu2,{'quoted':fgif,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}}}}break;case _0xd45a88(_0x55c116('0x596')):case _0xd45a88(_0x55c116('0x5ca')):case _0xd45a88(_0x55c116('0x770')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);anu=await isGroup;if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;buff=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],buff,image,{'quoted':fgif,'thumbnail':Buffer[_0xd45a88(_0x55c116('0x418'))](0x0),'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,video,{'mimetype':_0xd45a88(_0x55c116('0x74a')),'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,sticker,{'mimetype':Mimetype[_0xd45a88(_0x55c116('0xb7'))],'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x502'))+q+'\x0a\x0a'+support,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x701'))]||isQuotedAudio){const encmedia=isQuotedAudio?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,audio,{'mimetype':_0xd45a88(_0x55c116('0x38b')),'ptt':!![],'quoted':fgif,'caption':_0xd45a88(_0x55c116('0x567'))+q});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedSticker){const encmedia=isQuotedSticker?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia);for(let _ of anu){client[_0xd45a88(_0x55c116('0x57a'))](_[_0xd45a88(_0x55c116('0xa4'))],bc,sticker,{'quoted':fgif});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(q){for(let _ of anu){sendButtonImageLoc(_[_0xd45a88(_0x55c116('0xa4'))],_0xd45a88(_0x55c116('0x30e'))+q,support,buttonsmenu2,{'quoted':fgif,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}setTimeout(()=>{replysticker(successtc);},0xbb8);}else sendButtonImageLoc(from,_0xd45a88(_0x55c116('0x3fd'))+(prefix+command)+_0xd45a88(_0x55c116('0x73d')),support,buttonsmenu2,{'quoted':fgif,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}}}}break;case _0xd45a88(_0x55c116('0x159')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);if(args[0x0]==_0xd45a88(_0x55c116('0x252'))){if(mainmenu===![])return replysticker(faktifstc);mainmenu=![],replysticker(successtc);}else{if(args[0x0]==_0xd45a88(_0x55c116('0x27d'))){if(mainmenu===!![])return replysticker(faktifstc);mainmenu=!![],replysticker(successtc);}else await sendButtonText(from,_0xd45a88(_0x55c116('0x20c')),support,[{'buttonId':_0xd45a88(_0x55c116('0x4d1')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x531'))},'type':0x1},{'buttonId':_0xd45a88(_0x55c116('0x4ca')),'buttonText':{'displayText':_0xd45a88(_0x55c116('0x9a'))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}});}break;case _0xd45a88(_0x55c116('0x3d1')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x1){ambl=mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x340'))][_0xd45a88(_0x55c116('0x688'))];if(isNaN(q[0x0]))return reply(_0xd45a88(_0x55c116('0x317')));for(let i=0x0;i<q[0x0];i++){reply(ambl);}setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(q){argzi=q[_0xd45a88(_0x55c116('0x437'))]('|');if(!argzi)return reply(_0xd45a88(_0x55c116('0x26d'))+prefix+_0xd45a88(_0x55c116('0x594')));if(isNaN(argzi[0x1]))return reply(_0xd45a88(_0x55c116('0x406'))+(prefix+command)+_0xd45a88(_0x55c116('0x72e')));for(let i=0x0;i<argzi[0x1];i++){reply(argzi[0x0]);}setTimeout(()=>{replysticker(successtc);},0xbb8);}else!q&&reply(_0xd45a88(_0x55c116('0x6ee'))+(prefix+command)+_0xd45a88(_0x55c116('0x72e')));}break;case _0xd45a88(_0x55c116('0x740')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!q)return reply(_0xd45a88(_0x55c116('0x26d'))+(prefix+command)+_0xd45a88(_0x55c116('0x34c')));cos=args[0x0];var net=cos[_0xd45a88(_0x55c116('0x437'))](_0xd45a88(_0x55c116('0x788')))[0x1];if(!net)return reply(_0xd45a88(_0x55c116('0x746')));let {size}=await client[_0xd45a88(_0x55c116('0x230'))]({'json':[_0xd45a88(_0x55c116('0x230')),_0xd45a88(_0x55c116('0x30a')),net],'expect200':!![]});if(size<0x101)reply(_0xd45a88(_0x55c116('0x44d')));else{if(size>0x101)try{if(!isUrl(args[0x0])&&!args[0x0][_0xd45a88(_0x55c116('0x26c'))](_0xd45a88(_0x55c116('0x290'))))return replysticker(errorstc);var codeInvite=cos[_0xd45a88(_0x55c116('0x437'))](_0xd45a88(_0x55c116('0x788')))[0x1];if(!codeInvite)return reply(_0xd45a88(_0x55c116('0x294')));var response=await client[_0xd45a88(_0x55c116('0x13e'))](codeInvite);replysticker(successtc);}catch{replysticker(errorstc);}else replysticker(errorstc);}break;case'on':case _0xd45a88(_0x55c116('0x524')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0xd45a88(_0x55c116('0x6aa'))){if(antical===!![])return replysticker(faktifstc);antical=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x1e5'))){if(readG===!![])return replysticker(faktifstc);readG=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x98'))){if(database===!![])return replysticker(faktifstc);database=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x3bf'))){if(readP===!![])return replysticker(faktifstc);readP=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x527'))){if(antitags===!![])return replysticker(faktifstc);antitags=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x32f'))){if(autobackup===!![])return replysticker(faktifstc);autobackup=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x611'))){if(infoerror===!![])return replysticker(faktifstc);infoerror=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x5c1'))){if(autorespon===!![])return replysticker(faktifstc);autorespon=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x68a'))){if(autoregis===!![])return replysticker(faktifstc);autoregis=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x875'))){if(regisinfo===!![])return replysticker(faktifstc);regisinfo=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x126'))){if(autocomposing===!![])return replysticker(faktifstc);autocomposing=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x3ce'))){if(autorecording===!![])return replysticker(faktifstc);autorecording=!![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x194'))){if(bugc===!![])return replysticker(faktifstc);bugc=!![],antitrol=!![],replysticker(successtc);}else{if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x456')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x81a')),'rowId':_0xd45a88(_0x55c116('0x78f'))},{'title':_0xd45a88(_0x55c116('0x822')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x6a7')),'rowId':_0xd45a88(_0x55c116('0x1de'))},{'title':_0xd45a88(_0x55c116('0x85f')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x7da')),'rowId':_0xd45a88(_0x55c116('0x6eb'))},{'title':_0xd45a88(_0x55c116('0x1bf')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x16b')),'rowId':_0xd45a88(_0x55c116('0x44a'))},{'title':_0xd45a88(_0x55c116('0x349')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x48f')),'rowId':_0xd45a88(_0x55c116('0xde'))},{'title':_0xd45a88(_0x55c116('0x82a')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x866')),'rowId':_0xd45a88(_0x55c116('0x357'))},{'title':_0xd45a88(_0x55c116('0x76f')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x2a1')),'rowId':_0xd45a88(_0x55c116('0x87'))},{'title':_0xd45a88(_0x55c116('0x89')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3e0')),'rowId':_0xd45a88(_0x55c116('0x6cd'))},{'title':_0xd45a88(_0x55c116('0x405')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x271')),'rowId':_0xd45a88(_0x55c116('0x80b'))},{'title':_0xd45a88(_0x55c116('0x345')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3ec')),'rowId':_0xd45a88(_0x55c116('0x347'))},{'title':_0xd45a88(_0x55c116('0x786')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3ec')),'rowId':_0xd45a88(_0x55c116('0x734'))},{'title':_0xd45a88(_0x55c116('0x291')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x350')),'rowId':_0xd45a88(_0x55c116('0x4c6'))},{'title':_0xd45a88(_0x55c116('0x3c4')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x179')),'rowId':_0xd45a88(_0x55c116('0x312'))}],sections=[{'title':_0xd45a88(_0x55c116('0x7d1')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x626')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x5a9'))](prefix,command,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}}}}}}}}}}}}break;case _0xd45a88(_0x55c116('0x6b3')):case _0xd45a88(_0x55c116('0x5a4')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0xd45a88(_0x55c116('0x6aa'))){if(antical===![])return replysticker(faktifstc);antical=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x1e5'))){if(readG===![])return replysticker(faktifstc);readG=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x98'))){if(database===![])return replysticker(faktifstc);database=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x3bf'))){if(readP===![])return replysticker(faktifstc);readP=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x527'))){if(antitags===![])return replysticker(faktifstc);antitags=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x5c1'))){if(autorespon===![])return replysticker(faktifstc);autorespon=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x32f'))){if(autobackup===![])return replysticker(faktifstc);autobackup=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x611'))){if(infoerror===![])return replysticker(faktifstc);infoerror=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x68a'))){if(autoregis===![])return replysticker(faktifstc);autoregis=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x875'))){if(regisinfo===![])return replysticker(faktifstc);regisinfo=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x126'))){if(autocomposing===![])return replysticker(faktifstc);autocomposing=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x3ce'))){if(autorecording===![])return replysticker(faktifstc);autorecording=![],replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x194'))){if(bugc===![])return replysticker(faktifstc);bugc=![],antitrol=![],replysticker(successtc);}else{if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x456')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x81a')),'rowId':_0xd45a88(_0x55c116('0x2e7'))},{'title':_0xd45a88(_0x55c116('0x822')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x6a7')),'rowId':_0xd45a88(_0x55c116('0x71a'))},{'title':_0xd45a88(_0x55c116('0x85f')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x7da')),'rowId':_0xd45a88(_0x55c116('0x130'))},{'title':_0xd45a88(_0x55c116('0x1bf')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x16b')),'rowId':_0xd45a88(_0x55c116('0x749'))},{'title':_0xd45a88(_0x55c116('0x349')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x48f')),'rowId':_0xd45a88(_0x55c116('0x74'))},{'title':_0xd45a88(_0x55c116('0x82a')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x866')),'rowId':_0xd45a88(_0x55c116('0x766'))},{'title':_0xd45a88(_0x55c116('0x76f')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x2a1')),'rowId':_0xd45a88(_0x55c116('0x2e3'))},{'title':_0xd45a88(_0x55c116('0x89')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3e0')),'rowId':_0xd45a88(_0x55c116('0x492'))},{'title':_0xd45a88(_0x55c116('0x405')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x271')),'rowId':_0xd45a88(_0x55c116('0xe9'))},{'title':_0xd45a88(_0x55c116('0x345')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3ec')),'rowId':_0xd45a88(_0x55c116('0x240'))},{'title':_0xd45a88(_0x55c116('0x786')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x3ec')),'rowId':_0xd45a88(_0x55c116('0x6e5'))},{'title':_0xd45a88(_0x55c116('0x291')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x350')),'rowId':_0xd45a88(_0x55c116('0x255'))},{'title':_0xd45a88(_0x55c116('0x3c4')),'description':_0xd45a88(_0x55c116('0x1cc'))+(prefix+command)+_0xd45a88(_0x55c116('0x179')),'rowId':_0xd45a88(_0x55c116('0x198'))}],sections=[{'title':_0xd45a88(_0x55c116('0x599')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x251')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x5a9'))](prefix,command,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}}}}}}}}}}}}break;case _0xd45a88(_0x55c116('0x18c')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(args[0x0]===_0xd45a88(_0x55c116('0x6c5'))){if(themenye=cecan)return replysticker(faktifstc);themenye=cecan,replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x51b'))){if(themenye=cogan)return replysticker(faktifstc);themenye=cogan,replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x258'))){if(themenye=meme)return replysticker(faktifstc);themenye=meme,replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x5ed'))){if(themenye=genshin)return replysticker(faktifstc);themenye=genshin,replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x823'))){if(themenye=dungeon)return replysticker(faktifstc);themenye=dungeon,replysticker(successtc);}else{if(args[0x0]==='ml'){if(themenye=ml)return replysticker(faktifstc);themenye=ml,replysticker(successtc);}else{if(args[0x0]===_0xd45a88(_0x55c116('0x3fa'))){if(themenye=deflttheme)return replysticker(faktifstc);themenye=deflttheme,replysticker(successtc);}else{if(mainmenu==![]){const buttonMessage=[{'title':_0xd45a88(_0x55c116('0x2fb')),'description':'','rowId':_0xd45a88(_0x55c116('0x216'))},{'title':_0xd45a88(_0x55c116('0x817')),'description':'','rowId':_0xd45a88(_0x55c116('0x29d'))},{'title':_0xd45a88(_0x55c116('0x7c7')),'description':'','rowId':_0xd45a88(_0x55c116('0x2b4'))},{'title':_0xd45a88(_0x55c116('0x7a1')),'description':'','rowId':_0xd45a88(_0x55c116('0x2b4'))},{'title':_0xd45a88(_0x55c116('0x2ee')),'description':'','rowId':_0xd45a88(_0x55c116('0x727'))}],sections=[{'title':_0xd45a88(_0x55c116('0x7f0')),'rows':buttonMessage}],buttons={'buttonText':_0xd45a88(_0x55c116('0x544')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0xd45a88(_0x55c116('0x874'))](prefix,command,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}}}}}}break;case _0xd45a88(_0x55c116('0x640')):case _0xd45a88(_0x55c116('0x4d8')):case _0xd45a88(_0x55c116('0x434')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedImage)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x0){const encmedia=isQuotedImage?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek,media=await client[_0xd45a88(_0x55c116('0x24c'))](encmedia);await client[_0xd45a88(_0x55c116('0x854'))](botNumber,media),replysticker(successtc);}else reply(_0xd45a88(_0x55c116('0x23a'))+(prefix+command));break;case _0xd45a88(_0x55c116('0x469')):case _0xd45a88(_0x55c116('0x45d')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x0)ambl=mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x340'))][_0xd45a88(_0x55c116('0x688'))],NamaBot=ambl,replysticker(successtc);else{if(q)NamaBot=q,replysticker(successtc);else!q&&reply(_0xd45a88(_0x55c116('0x23a'))+(prefix+command)+_0xd45a88(_0x55c116('0x7a2')));}break;case _0xd45a88(_0x55c116('0x72b')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);if(args[_0xd45a88(_0x55c116('0x73a'))]<0x1)return reply(prefix+_0xd45a88(_0x55c116('0x7a3'))+(prefix+command)+_0xd45a88(_0x55c116('0x633')));if(args[0x0]===_0xd45a88(_0x55c116('0x631'))){if(multi===!![])return;multi=!![],replysticker(successtc);}else multi=![],pref=args[0x0],replysticker(successtc);break;case'q':if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x0){let qse=client[_0xd45a88(_0x55c116('0x99'))](await m[_0xd45a88(_0x55c116('0x7ad'))]());if(!qse[_0xd45a88(_0x55c116('0x669'))])return reply(_0xd45a88(_0x55c116('0x7a0'))+(prefix+command));await qse[_0xd45a88(_0x55c116('0x669'))][_0xd45a88(_0x55c116('0x1f3'))](m[_0xd45a88(_0x55c116('0x5a8'))],!![]);}else reply(_0xd45a88(_0x55c116('0x7a0'))+(prefix+command));break;case _0xd45a88(_0x55c116('0x6c1')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x0)ambl=mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x340'))][_0xd45a88(_0x55c116('0x688'))],exec(ambl,(_0x744b6,_0x58b06d)=>{const _0x4dc8a8=_0x55c116,_0x3ba6b1=_0xd45a88;if(_0x744b6)return reply(NamaBot+_0x3ba6b1(_0x4dc8a8('0x241'))+_0x744b6);_0x58b06d&&reply(_0x58b06d);});else{if(q)exec(q,(_0x329129,_0xdff592)=>{const _0x290d59=_0x55c116,_0x183145=_0xd45a88;if(_0x329129)return reply(NamaBot+_0x183145(_0x290d59('0x241'))+_0x329129);_0xdff592&&reply(_0xdff592);});else!q&&reply(_0xd45a88(_0x55c116('0x1b0'))+(prefix+command)+_0xd45a88(_0x55c116('0x463')));}break;case _0xd45a88(_0x55c116('0x6df')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedImage)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x0?(boij=isQuotedImage?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek,delb=await client[_0xd45a88(_0x55c116('0x702'))](boij),fs[_0xd45a88(_0x55c116('0x2b9'))](_0xd45a88(_0x55c116('0x795')),delb),replysticker(successtc)):reply(_0xd45a88(_0x55c116('0x23a'))+(prefix+command));break;case _0xd45a88(_0x55c116('0x800')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);replysticker(waitstc),client[_0xd45a88(_0x55c116('0x57a'))](from,JSON[_0xd45a88(_0x55c116('0x625'))](eval(process[_0xd45a88(_0x55c116('0x9e'))]())));break;case _0xd45a88(_0x55c116('0x361')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!q)return reply(_0xd45a88(_0x55c116('0x81c'))+(prefix+command)+_0xd45a88(_0x55c116('0x396')));namo=q[_0xd45a88(_0x55c116('0x437'))]('|')[0x0],ator=q[_0xd45a88(_0x55c116('0x437'))]('|')[0x1];if(!ator)return reply(_0xd45a88(_0x55c116('0x406'))+(prefix+command)+_0xd45a88(_0x55c116('0x14a')));replysticker(successtc);break;case _0xd45a88(_0x55c116('0x60a')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isBotGroupAdmins)return replysticker(botadmstc);if(!isOwner)return replysticker(ownerstc);anu=fs[_0xd45a88(_0x55c116('0x3bb'))](_0xd45a88(_0x55c116('0xb1'))),client[_0xd45a88(_0x55c116('0x854'))](from,anu),client[_0xd45a88(_0x55c116('0x299'))](from,_0xd45a88(_0x55c116('0x735'))),client[_0xd45a88(_0x55c116('0x3ba'))](from,_0xd45a88(_0x55c116('0x639'))),client[_0xd45a88(_0x55c116('0x4e8'))](from,GroupSettingChange[_0xd45a88(_0x55c116('0x53e'))],!![]),setTimeout(()=>{const _0x3afeb5=_0x55c116,_0x269374=_0xd45a88;reply(_0x269374(_0x3afeb5('0x335'))),replysticker(successtc);},0x1f40);break;case _0xd45a88(_0x55c116('0x392')):case _0xd45a88(_0x55c116('0x765')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);anu=await groupMembers;if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedImage){const encmedia=isQuotedImage?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;buff=await client[_0xd45a88(_0x55c116('0x702'))](encmedia),client[_0xd45a88(_0x55c116('0x57a'))](_0xd45a88(_0x55c116('0x376')),buff,image,{'caption':''+q}),replysticker(successtc),setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x22c'))]||isQuotedVideo){const encmedia=isQuotedVideo?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia),client[_0xd45a88(_0x55c116('0x57a'))](_0xd45a88(_0x55c116('0x376')),bc,video,{'caption':''+q}),setTimeout(()=>{replysticker(successtc);},0xbb8);}else{if(isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x701'))]||isQuotedAudio){const encmedia=isQuotedAudio?JSON[_0xd45a88(_0x55c116('0x43d'))](JSON[_0xd45a88(_0x55c116('0x625'))](mek)[_0xd45a88(_0x55c116('0x2f5'))](_0xd45a88(_0x55c116('0x40a')),'m'))[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))]:mek;bc=await client[_0xd45a88(_0x55c116('0x702'))](encmedia),client[_0xd45a88(_0x55c116('0x57a'))](_0xd45a88(_0x55c116('0x376')),bc,video,{'caption':''+q}),setTimeout(()=>{replysticker(successtc);},0xbb8);}else q?(client[_0xd45a88(_0x55c116('0x57a'))](_0xd45a88(_0x55c116('0x376')),''+q,extendedText),setTimeout(()=>{replysticker(successtc);},0xbb8)):sendButtonImageLoc(from,_0xd45a88(_0x55c116('0x3fd'))+(prefix+command)+_0xd45a88(_0x55c116('0x73d')),support,buttonsmenu2,{'quoted':fgif,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}break;case _0xd45a88(_0x55c116('0x77e')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);ingfoo=await getGroup(totalchat),teks1=_0xd45a88(_0x55c116('0x796'))+ingfoo[_0xd45a88(_0x55c116('0x73a'))]+'\x0a\x0a';for(let i=0x0;i<ingfoo[_0xd45a88(_0x55c116('0x73a'))];i++){teks1+=_0xd45a88(_0x55c116('0x3e3'))+ingfoo[i][_0xd45a88(_0x55c116('0x56e'))]+_0xd45a88(_0x55c116('0xa0'))+ingfoo[i]['id']+_0xd45a88(_0x55c116('0x5f0'))+moment((''+ingfoo[i][_0xd45a88(_0x55c116('0x10f'))])*0x3e8)['tz'](_0xd45a88(_0x55c116('0x90')))[_0xd45a88(_0x55c116('0x583'))](_0xd45a88(_0x55c116('0x75c')))+_0xd45a88(_0x55c116('0x66e'))+ingfoo[i][_0xd45a88(_0x55c116('0x4cd'))][_0xd45a88(_0x55c116('0x73a'))]+'\x0a\x0a';}sendButtonImageLoc(from,buttonshello,teks1,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0xd45a88(_0x55c116('0x76')):case _0xd45a88(_0x55c116('0x7a6')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x1){ambl=mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x3ca'))],wanu=_registered[_0xd45a88(_0x55c116('0x4a6'))](q);if(!wanu)return reply(_0xd45a88(_0x55c116('0x5d4')));if(isNaN(q[0x0]))return reply(_0xd45a88(_0x55c116('0x317')));const jumlah=Math[_0xd45a88(_0x55c116('0x11d'))](q*0x1);await addLimitUser(ambl,jumlah),replysticker(waitstc),setTimeout(()=>{const _0x8fee80=_0x55c116,_0x33b645=_0xd45a88;sendButtonImageLoc(from,_0x33b645(_0x8fee80('0x693'))+player[_0x33b645(_0x8fee80('0x437'))]('@')[0x0]+_0x33b645(_0x8fee80('0x34b'))+ambl[_0x33b645(_0x8fee80('0x2f5'))]('@')+_0x33b645(_0x8fee80('0x5db'))+jumlah+'*',support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,ambl]}});},0xbb8);}else{if(q){if(!q)return reply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));var targetnye=q[_0xd45a88(_0x55c116('0x437'))]('\x20')[0x0],tex2=q[_0xd45a88(_0x55c116('0x437'))]('\x20')[0x1];const tex1=targetnye[_0xd45a88(_0x55c116('0x2f5'))]('@','')+_0xd45a88(_0x55c116('0x10b')),jumlah=Math[_0xd45a88(_0x55c116('0x11d'))](tex2*0x1);await addLimitUser(tex1,jumlah);if(!tex2)return reply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));replysticker(waitstc),setTimeout(()=>{const _0x4fbc82=_0x55c116,_0xb25c99=_0xd45a88;sendButtonImageLoc(from,_0xb25c99(_0x4fbc82('0x693'))+player[_0xb25c99(_0x4fbc82('0x437'))]('@')[0x0]+_0xb25c99(_0x4fbc82('0x34b'))+ambl[_0xb25c99(_0x4fbc82('0x2f5'))]('@','')+_0xb25c99(_0x4fbc82('0x5db'))+jumlah+'*',support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,ambl]}});},0xbb8);}else!q&&reply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));}break;case _0xd45a88(_0x55c116('0xe4')):case _0xd45a88(_0x55c116('0x498')):if(isBanned)return replysticker(banstc);if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(!isOwner)return replysticker(ownerstc);if((isMedia&&!mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x340'))]||isQuotedTeks)&&args[_0xd45a88(_0x55c116('0x73a'))]==0x1){ambl=mek[_0xd45a88(_0x55c116('0x385'))][_0xd45a88(_0x55c116('0x12d'))][_0xd45a88(_0x55c116('0x2a6'))][_0xd45a88(_0x55c116('0x3ca'))],wanu=_registered[_0xd45a88(_0x55c116('0x4a6'))](q);if(!wanu)return reply(_0xd45a88(_0x55c116('0x5d4')));if(isNaN(q[0x0]))return reply(_0xd45a88(_0x55c116('0x317')));const jumlah=Math[_0xd45a88(_0x55c116('0x11d'))](q*0x1);await addKoinUser(ambl,jumlah),replysticker(waitstc),setTimeout(()=>{const _0x41cea2=_0x55c116,_0x52b960=_0xd45a88;sendButtonImageLoc(from,_0x52b960(_0x41cea2('0x693'))+player[_0x52b960(_0x41cea2('0x437'))]('@')[0x0]+_0x52b960(_0x41cea2('0x34b'))+ambl[_0x52b960(_0x41cea2('0x2f5'))]('@','')+_0x52b960(_0x41cea2('0x5db'))+jumlah+'*',support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,ambl]}});},0xbb8);}else{if(q){if(!q)return reply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));var targetnye=q[_0xd45a88(_0x55c116('0x437'))]('\x20')[0x0],tex2=q[_0xd45a88(_0x55c116('0x437'))]('\x20')[0x1];const tex1=targetnye[_0xd45a88(_0x55c116('0x2f5'))]('@','')+_0xd45a88(_0x55c116('0x10b')),jumlah=Math[_0xd45a88(_0x55c116('0x11d'))](tex2*0x1);await addKoinUser(tex1,jumlah);if(!tex2)return reply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));replysticker(waitstc),setTimeout(()=>{const _0x1c3a3b=_0x55c116,_0xbe9a51=_0xd45a88;sendButtonImageLoc(from,_0xbe9a51(_0x1c3a3b('0x693'))+player[_0xbe9a51(_0x1c3a3b('0x437'))]('@')[0x0]+_0xbe9a51(_0x1c3a3b('0x34b'))+ambl[_0xbe9a51(_0x1c3a3b('0x2f5'))]('@','')+_0xbe9a51(_0x1c3a3b('0x5db'))+jumlah+'*',support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,ambl]}});},0xbb8);}else!q&&eply(_0xd45a88(_0x55c116('0x522'))+(prefix+command)+_0xd45a88(_0x55c116('0x221')));}break;}
					
default:
const partiNum = (type === 'extendedTextMessage') ? mek.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via Reply 
if (own.includes(partiNum)) {
if (antitags === false) return
if (!isGroup) return 
if (mek.key.fromMe) return
if (isOwner) return
replysticker(needownstc)
}
		
if (budy.startsWith('x')){
try {
if (!isOwner) return replysticker(ownerstc)
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  
if (budy.startsWith('>')){
try {
	if (!isOwner) return replysticker(ownerstc)
return client.sendMessage(from, JSON.stringify(eval(budy.slice(2)),null,'\t'),text, {quoted: mek})
} catch(err) {
e = String(err)
reply(e)
}
}  

	}
		
if (isGroup && budy != undefined) {
	} else {
	console.log(color('[TEXT]', 'aqua'), 'SELF-MODE', color(sender.split('@')[0]))
	}		
	} catch (e) {
        e = String(e)
            if (!e.includes("this.isZero")) {
            if (!e.includes("Cannot read property 'conversation' of null")) {
            if (!e.includes("Cannot read property 'contextInfo' of undefined")) {
            if (!e.includes("Cannot set property 'mtype' of undefined")) {
            if (!e.includes("jid is not defined")) {
     console.log(color('|ERR|', 'red'), color(e, 'cyan'))
if (infoerror === true) {
client.sendMessage(ow, `──「 *ALERT-ERROR* 」──\n\n\`\`\`${e}\`\`\`\n\n────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Developer ${NamaBot}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./src/siegrin.jpeg'),sourceUrl: `${mybio}`}}})
}
     
	}
    }
    }
    }
    }
    }
}

