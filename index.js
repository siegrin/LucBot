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

function _0x217b(_0x4a4297,_0x421f9b){const _0xde4ec=_0xde4e();return _0x217b=function(_0x217bb5,_0x3ae3fe){_0x217bb5=_0x217bb5-0x161;let _0x3bd908=_0xde4ec[_0x217bb5];return _0x3bd908;},_0x217b(_0x4a4297,_0x421f9b);}(function(_0x2d2c70,_0x40fea2){const _0x59e226=_0x217b,_0x446fd9=_0x2d2c70();while(!![]){try{const _0x1f04ca=parseInt(_0x59e226('0x172'))/0x1*(-parseInt(_0x59e226('0x168'))/0x2)+-parseInt(_0x59e226('0x17f'))/0x3*(-parseInt(_0x59e226('0x178'))/0x4)+parseInt(_0x59e226('0x180'))/0x5*(parseInt(_0x59e226('0x166'))/0x6)+parseInt(_0x59e226('0x177'))/0x7*(-parseInt(_0x59e226('0x175'))/0x8)+-parseInt(_0x59e226('0x17a'))/0x9+-parseInt(_0x59e226('0x162'))/0xa+parseInt(_0x59e226('0x167'))/0xb*(parseInt(_0x59e226('0x17d'))/0xc);if(_0x1f04ca===_0x40fea2)break;else _0x446fd9['push'](_0x446fd9['shift']());}catch(_0x1989c5){_0x446fd9['push'](_0x446fd9['shift']());}}}(_0xde4e,0x600c2));const getRegisteredRandomId=()=>{const _0x2e0d5e=_0x217b;return _registered[Math[_0x2e0d5e('0x16b')](Math[_0x2e0d5e('0x163')]()*_registered[_0x2e0d5e('0x17c')])]['id'];},checkRegisteredUser=_0x220462=>{const _0x5dca24=_0x217b;let _0x24fd36=![];return Object[_0x5dca24('0x184')](_registered)[_0x5dca24('0x161')](_0x24b706=>{_registered[_0x24b706]['id']===_0x220462&&(_0x24fd36=!![]);}),_0x24fd36;},addRegisteredUser=_0x25acb3=>{const _0x6e4c8a=_0x217b,_0x26d74d={'id':_0x25acb3,'limit':0x64,'uang':0x0,'xp':0x1,'ATK':0x0,'ARM':0x0,'PWR':0x0,'SKL':0x0,'DEF':0x0,'SPD':0x0,'MGC':0x0,'LUK':0x0,'level':0x1,'kerangajaib':0x0,'jamur':0x0,'daunmaple':0x0,'daun':0x0,'daun1':0x0,'daun2':0x0,'clover3':0x0,'clover4':0x0,'kayu':0x0,'bibit':0x0,'puzzle':0x0,'heal':0x64,'potion':0x0,'megapotion':0x0,'berlian':0x0,'emas':0x0,'perak':0x0,'perunggu':0x0,'iron':0x0,'brick':0x0,'stone':0x0,'kurakura':0x0,'gurita':0x0,'cumicumi':0x0,'udang':0x0,'lobster':0x0,'kepiting':0x0,'pufferfish':0x0,'ikan':0x0,'ikan2':0x0,'lumbalumba':0x0,'paus':0x0,'paus2':0x0,'hiu':0x0,'seadog':0x0,'pohoncactus':0x0,'pohonnatal':0x0,'pohoncemara':0x0,'pohon':0x0,'bambu':0x0,'padi':0x0,'pohonkelapa':0x0};_registered[_0x6e4c8a('0x173')](_0x26d74d),fs[_0x6e4c8a('0x17b')](_0x6e4c8a('0x165'),JSON[_0x6e4c8a('0x179')](_registered));},addCmd=(_0x29ef1f,_0xe767c5)=>{const _0x2c323a=_0x217b,_0xa655d0={'id':_0x29ef1f,'chats':_0xe767c5};scommand[_0x2c323a('0x173')](_0xa655d0),fs[_0x2c323a('0x17b')](_0x2c323a('0x182'),JSON[_0x2c323a('0x179')](scommand));},getCommandPosition=_0xb66c17=>{const _0x4e45c6=_0x217b;let _0xd6bbb7=null;Object[_0x4e45c6('0x184')](scommand)[_0x4e45c6('0x161')](_0x140ce8=>{scommand[_0x140ce8]['id']===_0xb66c17&&(_0xd6bbb7=_0x140ce8);});if(_0xd6bbb7!==null)return _0xd6bbb7;},getCmd=_0x2fb1e2=>{const _0x497e45=_0x217b;let _0x56baf1=null;Object[_0x497e45('0x184')](scommand)[_0x497e45('0x161')](_0x1d2299=>{scommand[_0x1d2299]['id']===_0x2fb1e2&&(_0x56baf1=_0x1d2299);});if(_0x56baf1!==null)return scommand[_0x56baf1][_0x497e45('0x164')];},checkSCommand=_0x5a72da=>{const _0x1bb070=_0x217b;let _0xc7aa74=![];return Object[_0x1bb070('0x184')](scommand)[_0x1bb070('0x161')](_0xe9341e=>{scommand[_0xe9341e]['id']===_0x5a72da&&(_0xc7aa74=!![]);}),_0xc7aa74;},getLevelingXp=_0xdc1dea=>{const _0x308fcb=_0x217b;let _0x4ce7e4=![];Object[_0x308fcb('0x184')](_registered)[_0x308fcb('0x161')](_0x4b915f=>{_registered[_0x4b915f]['id']===_0xdc1dea&&(_0x4ce7e4=_0x4b915f);});if(_0x4ce7e4!==![])return _registered[_0x4ce7e4]['xp'];},getLevelingLevel=_0x542688=>{const _0x5a16d4=_0x217b;let _0x12f01c=![];Object[_0x5a16d4('0x184')](_registered)[_0x5a16d4('0x161')](_0x270e70=>{_registered[_0x270e70]['id']===_0x542688&&(_0x12f01c=_0x270e70);});if(_0x12f01c!==![])return _registered[_0x12f01c][_0x5a16d4('0x16a')];},getLevelingId=_0x5cc224=>{const _0x42d9ac=_0x217b;let _0x4bd9e9=![];Object[_0x42d9ac('0x184')](_registered)[_0x42d9ac('0x161')](_0x35ea05=>{_registered[_0x35ea05]['id']===_0x5cc224&&(_0x4bd9e9=_0x35ea05);});if(_0x4bd9e9!==![])return _registered[_0x4bd9e9]['id'];},addLevelingXp=(_0x15e222,_0x1b3503)=>{const _0x2485d0=_0x217b;let _0x3ace32=![];Object[_0x2485d0('0x184')](_registered)[_0x2485d0('0x161')](_0x45918d=>{_registered[_0x45918d]['id']===_0x15e222&&(_0x3ace32=_0x45918d);}),_0x3ace32!==![]&&(_registered[_0x3ace32]['xp']+=_0x1b3503,fs[_0x2485d0('0x17b')](_0x2485d0('0x165'),JSON[_0x2485d0('0x179')](_registered)));},addLevelingLevel=(_0x849e63,_0x3ab01f)=>{const _0x55d932=_0x217b;let _0x576448=![];Object[_0x55d932('0x184')](_registered)[_0x55d932('0x161')](_0x1ee8c4=>{_registered[_0x1ee8c4]['id']===_0x849e63&&(_0x576448=_0x1ee8c4);}),_0x576448!==![]&&(_registered[_0x576448][_0x55d932('0x16a')]+=_0x3ab01f,fs[_0x55d932('0x17b')](_0x55d932('0x165'),JSON[_0x55d932('0x179')](_registered)));},addLimitUser=(_0xcc90dc,_0x423b75)=>{const _0x231723=_0x217b;let _0x33098d=![];Object[_0x231723('0x184')](_registered)[_0x231723('0x161')](_0x53f2a5=>{_registered[_0x53f2a5]['id']===_0xcc90dc&&(_0x33098d=_0x53f2a5);}),_0x33098d!==![]&&(_registered[_0x33098d][_0x231723('0x171')]+=_0x423b75,fs[_0x231723('0x17b')](_0x231723('0x165'),JSON[_0x231723('0x179')](_registered)));},checkLimituser=_0x21ebac=>{const _0x57de4a=_0x217b;let _0x5e1e2d=![];Object[_0x57de4a('0x184')](_registered)[_0x57de4a('0x161')](_0x36fa27=>{_registered[_0x36fa27]['id']===_0x21ebac&&(_0x5e1e2d=_0x36fa27);});if(_0x5e1e2d!==![])return _registered[_0x5e1e2d][_0x57de4a('0x171')];},confirmLIMIT=(_0x1ff45a,_0x3c4547)=>{const _0x356648=_0x217b;let _0x1084e0=![];Object[_0x356648('0x184')](_registered)[_0x356648('0x161')](_0x22cc14=>{_registered[_0x22cc14]['id']==_0x1ff45a&&(_0x1084e0=_0x22cc14);}),_0x1084e0!==![]&&(_registered[_0x1084e0][_0x356648('0x171')]-=_0x3c4547,fs[_0x356648('0x17b')](_0x356648('0x165'),JSON[_0x356648('0x179')](_registered)));},addKoinUser=(_0x438ee4,_0x435f6b)=>{const _0x10499d=_0x217b;let _0x3ed130=![];Object[_0x10499d('0x184')](_registered)[_0x10499d('0x161')](_0x5902ed=>{_registered[_0x5902ed]['id']===_0x438ee4&&(_0x3ed130=_0x5902ed);}),_0x3ed130!==![]&&(_registered[_0x3ed130][_0x10499d('0x174')]+=_0x435f6b,fs[_0x10499d('0x17b')](_0x10499d('0x165'),JSON[_0x10499d('0x179')](_registered)));},checkATMuser=_0x47073b=>{const _0x437daf=_0x217b;let _0x4180d5=![];Object[_0x437daf('0x184')](_registered)[_0x437daf('0x161')](_0x179a95=>{_registered[_0x179a95]['id']===_0x47073b&&(_0x4180d5=_0x179a95);});if(_0x4180d5!==![])return _registered[_0x4180d5][_0x437daf('0x174')];},confirmATM=(_0x567714,_0x598b0d)=>{const _0x5a7c7e=_0x217b;let _0x5c4379=![];Object[_0x5a7c7e('0x184')](_registered)[_0x5a7c7e('0x161')](_0x454e49=>{_registered[_0x454e49]['id']===_0x567714&&(_0x5c4379=_0x454e49);}),_0x5c4379!==![]&&(_registered[_0x5c4379][_0x5a7c7e('0x174')]-=_0x598b0d,fs[_0x5a7c7e('0x17b')](_0x5a7c7e('0x165'),JSON[_0x5a7c7e('0x179')](_registered)));},addHealUser=(_0x3f7e3a,_0x3ab508)=>{const _0x122957=_0x217b;let _0xa880ad=![];Object[_0x122957('0x184')](_registered)[_0x122957('0x161')](_0x460ae0=>{_registered[_0x460ae0]['id']===_0x3f7e3a&&(_0xa880ad=_0x460ae0);}),_0xa880ad!==![]&&(_registered[_0xa880ad][_0x122957('0x16c')]+=_0x3ab508,fs[_0x122957('0x17b')](_0x122957('0x165'),JSON[_0x122957('0x179')](_registered)));},checkHealuser=_0x286558=>{const _0x103f97=_0x217b;let _0x85852d=![];Object[_0x103f97('0x184')](_registered)[_0x103f97('0x161')](_0xb72fea=>{_registered[_0xb72fea]['id']===_0x286558&&(_0x85852d=_0xb72fea);});if(_0x85852d!==![])return _registered[_0x85852d][_0x103f97('0x16c')];},confirmHEAL=(_0x4f35d8,_0x11a3fd)=>{const _0x467bae=_0x217b;let _0x213dc3=![];Object[_0x467bae('0x184')](_registered)[_0x467bae('0x161')](_0x30b70e=>{_registered[_0x30b70e]['id']==_0x4f35d8&&(_0x213dc3=_0x30b70e);}),_0x213dc3!==![]&&(_registered[_0x213dc3][_0x467bae('0x16c')]-=_0x11a3fd,fs[_0x467bae('0x17b')](_0x467bae('0x165'),JSON[_0x467bae('0x179')](_registered)));},addPotionUser=(_0x2a8145,_0x452d45)=>{const _0x3453aa=_0x217b;let _0x47af2f=![];Object[_0x3453aa('0x184')](_registered)[_0x3453aa('0x161')](_0x552090=>{_registered[_0x552090]['id']===_0x2a8145&&(_0x47af2f=_0x552090);}),_0x47af2f!==![]&&(_registered[_0x47af2f][_0x3453aa('0x176')]+=_0x452d45,fs[_0x3453aa('0x17b')](_0x3453aa('0x165'),JSON[_0x3453aa('0x179')](_registered)));},checkPotionuser=_0x2d7df3=>{const _0x5af2bd=_0x217b;let _0x1699ee=![];Object[_0x5af2bd('0x184')](_registered)[_0x5af2bd('0x161')](_0x598a73=>{_registered[_0x598a73]['id']===_0x2d7df3&&(_0x1699ee=_0x598a73);});if(_0x1699ee!==![])return _registered[_0x1699ee][_0x5af2bd('0x176')];},confirmPOTION=(_0x1b55c4,_0x527cbd)=>{const _0xbc1563=_0x217b;let _0x28b0ab=![];Object[_0xbc1563('0x184')](_registered)[_0xbc1563('0x161')](_0x1f97d8=>{_registered[_0x1f97d8]['id']==_0x1b55c4&&(_0x28b0ab=_0x1f97d8);}),_0x28b0ab!==![]&&(_registered[_0x28b0ab][_0xbc1563('0x176')]-=_0x527cbd,fs[_0xbc1563('0x17b')](_0xbc1563('0x165'),JSON[_0xbc1563('0x179')](_registered)));},addMegaPotionUser=(_0x5476b2,_0xadd168)=>{const _0x4a6dc5=_0x217b;let _0x6121dc=![];Object[_0x4a6dc5('0x184')](_registered)[_0x4a6dc5('0x161')](_0x5defb0=>{_registered[_0x5defb0]['id']===_0x5476b2&&(_0x6121dc=_0x5defb0);}),_0x6121dc!==![]&&(_registered[_0x6121dc][_0x4a6dc5('0x16d')]+=_0xadd168,fs[_0x4a6dc5('0x17b')](_0x4a6dc5('0x165'),JSON[_0x4a6dc5('0x179')](_registered)));},checkMegaPotionuser=_0x4a7e12=>{const _0xcf8922=_0x217b;let _0x387eea=![];Object[_0xcf8922('0x184')](_registered)[_0xcf8922('0x161')](_0x169128=>{_registered[_0x169128]['id']===_0x4a7e12&&(_0x387eea=_0x169128);});if(_0x387eea!==![])return _registered[_0x387eea][_0xcf8922('0x16d')];},confirmMEGAPOTION=(_0x26e0ce,_0xe3ad65)=>{const _0x5ec9b1=_0x217b;let _0x52175f=![];Object[_0x5ec9b1('0x184')](_registered)[_0x5ec9b1('0x161')](_0x402a14=>{_registered[_0x402a14]['id']==_0x26e0ce&&(_0x52175f=_0x402a14);}),_0x52175f!==![]&&(_registered[_0x52175f][_0x5ec9b1('0x16d')]-=_0xe3ad65,fs[_0x5ec9b1('0x17b')](_0x5ec9b1('0x165'),JSON[_0x5ec9b1('0x179')](_registered)));},addATKUser=(_0x54efb0,_0x122b33)=>{const _0xd81bf8=_0x217b;let _0x4597e9=![];Object[_0xd81bf8('0x184')](_registered)[_0xd81bf8('0x161')](_0xa3878d=>{_registered[_0xa3878d]['id']===_0x54efb0&&(_0x4597e9=_0xa3878d);}),_0x4597e9!==![]&&(_registered[_0x4597e9][_0xd81bf8('0x183')]+=_0x122b33,fs[_0xd81bf8('0x17b')](_0xd81bf8('0x165'),JSON[_0xd81bf8('0x179')](_registered)));},checkATKuser=_0x35af06=>{const _0x250c3c=_0x217b;let _0x373a42=![];Object[_0x250c3c('0x184')](_registered)[_0x250c3c('0x161')](_0x98dbb9=>{_registered[_0x98dbb9]['id']===_0x35af06&&(_0x373a42=_0x98dbb9);});if(_0x373a42!==![])return _registered[_0x373a42][_0x250c3c('0x183')];},confirmATK=(_0x149abc,_0x2f1126)=>{const _0x44decf=_0x217b;let _0x45760d=![];Object[_0x44decf('0x184')](_registered)[_0x44decf('0x161')](_0x378aaa=>{_registered[_0x378aaa]['id']==_0x149abc&&(_0x45760d=_0x378aaa);}),_0x45760d!==![]&&(_registered[_0x45760d][_0x44decf('0x183')]-=_0x2f1126,fs[_0x44decf('0x17b')](_0x44decf('0x165'),JSON[_0x44decf('0x179')](_registered)));},addARMUser=(_0x28afbf,_0x3a6bae)=>{const _0x1e5145=_0x217b;let _0x10e186=![];Object[_0x1e5145('0x184')](_registered)[_0x1e5145('0x161')](_0x160468=>{_registered[_0x160468]['id']===_0x28afbf&&(_0x10e186=_0x160468);}),_0x10e186!==![]&&(_registered[_0x10e186][_0x1e5145('0x169')]+=_0x3a6bae,fs[_0x1e5145('0x17b')](_0x1e5145('0x165'),JSON[_0x1e5145('0x179')](_registered)));},checkARMuser=_0x1fe7ba=>{const _0x31ab7a=_0x217b;let _0x230026=![];Object[_0x31ab7a('0x184')](_registered)[_0x31ab7a('0x161')](_0x2fcaf9=>{_registered[_0x2fcaf9]['id']===_0x1fe7ba&&(_0x230026=_0x2fcaf9);});if(_0x230026!==![])return _registered[_0x230026][_0x31ab7a('0x169')];},confirmARM=(_0x4d1076,_0x39d1f5)=>{const _0x233ba9=_0x217b;let _0x37e164=![];Object[_0x233ba9('0x184')](_registered)[_0x233ba9('0x161')](_0x3eb809=>{_registered[_0x3eb809]['id']==_0x4d1076&&(_0x37e164=_0x3eb809);}),_0x37e164!==![]&&(_registered[_0x37e164][_0x233ba9('0x169')]-=_0x39d1f5,fs[_0x233ba9('0x17b')](_0x233ba9('0x165'),JSON[_0x233ba9('0x179')](_registered)));},addPWRUser=(_0x489e18,_0x2251a0)=>{const _0x32db75=_0x217b;let _0x406ae2=![];Object[_0x32db75('0x184')](_registered)[_0x32db75('0x161')](_0x53cf0d=>{_registered[_0x53cf0d]['id']===_0x489e18&&(_0x406ae2=_0x53cf0d);}),_0x406ae2!==![]&&(_registered[_0x406ae2][_0x32db75('0x16e')]+=_0x2251a0,fs[_0x32db75('0x17b')](_0x32db75('0x165'),JSON[_0x32db75('0x179')](_registered)));},checkPWRuser=_0x175f1b=>{const _0x152385=_0x217b;let _0x42d472=![];Object[_0x152385('0x184')](_registered)[_0x152385('0x161')](_0x3a0153=>{_registered[_0x3a0153]['id']===_0x175f1b&&(_0x42d472=_0x3a0153);});if(_0x42d472!==![])return _registered[_0x42d472][_0x152385('0x16e')];},confirmPWR=(_0x140845,_0x3dc000)=>{const _0x240e47=_0x217b;let _0x4199f7=![];Object[_0x240e47('0x184')](_registered)[_0x240e47('0x161')](_0x37d974=>{_registered[_0x37d974]['id']==_0x140845&&(_0x4199f7=_0x37d974);}),_0x4199f7!==![]&&(_registered[_0x4199f7][_0x240e47('0x16e')]-=_0x3dc000,fs[_0x240e47('0x17b')](_0x240e47('0x165'),JSON[_0x240e47('0x179')](_registered)));},addSKLUser=(_0x46dc0f,_0x5e77cc)=>{const _0x44d55a=_0x217b;let _0x5b6be8=![];Object[_0x44d55a('0x184')](_registered)[_0x44d55a('0x161')](_0x2b8db2=>{_registered[_0x2b8db2]['id']===_0x46dc0f&&(_0x5b6be8=_0x2b8db2);}),_0x5b6be8!==![]&&(_registered[_0x5b6be8][_0x44d55a('0x17e')]+=_0x5e77cc,fs[_0x44d55a('0x17b')](_0x44d55a('0x165'),JSON[_0x44d55a('0x179')](_registered)));},checkSKLuser=_0x55e4ae=>{const _0x40180e=_0x217b;let _0x10391d=![];Object[_0x40180e('0x184')](_registered)[_0x40180e('0x161')](_0x59216f=>{_registered[_0x59216f]['id']===_0x55e4ae&&(_0x10391d=_0x59216f);});if(_0x10391d!==![])return _registered[_0x10391d][_0x40180e('0x17e')];},confirmSKL=(_0x32b654,_0x2e7f2e)=>{const _0x1e5143=_0x217b;let _0x5a1c9a=![];Object[_0x1e5143('0x184')](_registered)[_0x1e5143('0x161')](_0x18dca5=>{_registered[_0x18dca5]['id']==_0x32b654&&(_0x5a1c9a=_0x18dca5);}),_0x5a1c9a!==![]&&(_registered[_0x5a1c9a][_0x1e5143('0x17e')]-=_0x2e7f2e,fs[_0x1e5143('0x17b')](_0x1e5143('0x165'),JSON[_0x1e5143('0x179')](_registered)));},addDEFUser=(_0x319296,_0x303f49)=>{const _0x11380d=_0x217b;let _0xc37514=![];Object[_0x11380d('0x184')](_registered)[_0x11380d('0x161')](_0x3c6d38=>{_registered[_0x3c6d38]['id']===_0x319296&&(_0xc37514=_0x3c6d38);}),_0xc37514!==![]&&(_registered[_0xc37514][_0x11380d('0x16f')]+=_0x303f49,fs[_0x11380d('0x17b')](_0x11380d('0x165'),JSON[_0x11380d('0x179')](_registered)));},checkDEFuser=_0x51ad89=>{const _0x5af3ed=_0x217b;let _0x149726=![];Object[_0x5af3ed('0x184')](_registered)[_0x5af3ed('0x161')](_0x2933b7=>{_registered[_0x2933b7]['id']===_0x51ad89&&(_0x149726=_0x2933b7);});if(_0x149726!==![])return _registered[_0x149726][_0x5af3ed('0x16f')];},confirmDEF=(_0x58c6dd,_0x188a36)=>{const _0xe93bfb=_0x217b;let _0x145354=![];Object[_0xe93bfb('0x184')](_registered)[_0xe93bfb('0x161')](_0x1ad2cb=>{_registered[_0x1ad2cb]['id']==_0x58c6dd&&(_0x145354=_0x1ad2cb);}),_0x145354!==![]&&(_registered[_0x145354][_0xe93bfb('0x16f')]-=_0x188a36,fs[_0xe93bfb('0x17b')](_0xe93bfb('0x165'),JSON[_0xe93bfb('0x179')](_registered)));},addSPDUser=(_0x2197fd,_0xd3b693)=>{const _0x267c7f=_0x217b;let _0x3bf3b6=![];Object[_0x267c7f('0x184')](_registered)[_0x267c7f('0x161')](_0x154a96=>{_registered[_0x154a96]['id']===_0x2197fd&&(_0x3bf3b6=_0x154a96);}),_0x3bf3b6!==![]&&(_registered[_0x3bf3b6][_0x267c7f('0x185')]+=_0xd3b693,fs[_0x267c7f('0x17b')](_0x267c7f('0x165'),JSON[_0x267c7f('0x179')](_registered)));},checkSPDuser=_0x201e7c=>{const _0x477f91=_0x217b;let _0x3b3b0d=![];Object[_0x477f91('0x184')](_registered)[_0x477f91('0x161')](_0xfca30f=>{_registered[_0xfca30f]['id']===_0x201e7c&&(_0x3b3b0d=_0xfca30f);});if(_0x3b3b0d!==![])return _registered[_0x3b3b0d][_0x477f91('0x185')];},confirmSPD=(_0x2f3a50,_0x23e278)=>{const _0x5652f9=_0x217b;let _0x5453ee=![];Object[_0x5652f9('0x184')](_registered)[_0x5652f9('0x161')](_0x40463b=>{_registered[_0x40463b]['id']==_0x2f3a50&&(_0x5453ee=_0x40463b);}),_0x5453ee!==![]&&(_registered[_0x5453ee][_0x5652f9('0x185')]-=_0x23e278,fs[_0x5652f9('0x17b')](_0x5652f9('0x165'),JSON[_0x5652f9('0x179')](_registered)));},addMGCUser=(_0x1313d6,_0x1c3883)=>{const _0x3b0167=_0x217b;let _0x158842=![];Object[_0x3b0167('0x184')](_registered)[_0x3b0167('0x161')](_0x292df9=>{_registered[_0x292df9]['id']===_0x1313d6&&(_0x158842=_0x292df9);}),_0x158842!==![]&&(_registered[_0x158842][_0x3b0167('0x181')]+=_0x1c3883,fs[_0x3b0167('0x17b')](_0x3b0167('0x165'),JSON[_0x3b0167('0x179')](_registered)));},checkMGCuser=_0x4e9246=>{const _0x594655=_0x217b;let _0x297c27=![];Object[_0x594655('0x184')](_registered)[_0x594655('0x161')](_0x465267=>{_registered[_0x465267]['id']===_0x4e9246&&(_0x297c27=_0x465267);});if(_0x297c27!==![])return _registered[_0x297c27][_0x594655('0x181')];},confirmMGC=(_0x5ad295,_0x5610b5)=>{const _0x20ae4d=_0x217b;let _0x18a044=![];Object[_0x20ae4d('0x184')](_registered)[_0x20ae4d('0x161')](_0x2b00fd=>{_registered[_0x2b00fd]['id']==_0x5ad295&&(_0x18a044=_0x2b00fd);}),_0x18a044!==![]&&(_registered[_0x18a044][_0x20ae4d('0x181')]-=_0x5610b5,fs[_0x20ae4d('0x17b')](_0x20ae4d('0x165'),JSON[_0x20ae4d('0x179')](_registered)));},addLUKUser=(_0xc2cd61,_0x29204b)=>{const _0x134522=_0x217b;let _0x1a2efa=![];Object[_0x134522('0x184')](_registered)[_0x134522('0x161')](_0x5f15c7=>{_registered[_0x5f15c7]['id']===_0xc2cd61&&(_0x1a2efa=_0x5f15c7);}),_0x1a2efa!==![]&&(_registered[_0x1a2efa][_0x134522('0x170')]+=_0x29204b,fs[_0x134522('0x17b')](_0x134522('0x165'),JSON[_0x134522('0x179')](_registered)));},checkLUKuser=_0x48adf1=>{const _0x3c11c6=_0x217b;let _0x3dc9c7=![];Object[_0x3c11c6('0x184')](_registered)[_0x3c11c6('0x161')](_0x52690d=>{_registered[_0x52690d]['id']===_0x48adf1&&(_0x3dc9c7=_0x52690d);});if(_0x3dc9c7!==![])return _registered[_0x3dc9c7][_0x3c11c6('0x170')];},confirmLUK=(_0x39c2d8,_0x332e97)=>{const _0x216159=_0x217b;let _0x375e49=![];Object[_0x216159('0x184')](_registered)[_0x216159('0x161')](_0xffe473=>{_registered[_0xffe473]['id']==_0x39c2d8&&(_0x375e49=_0xffe473);}),_0x375e49!==![]&&(_registered[_0x375e49][_0x216159('0x170')]-=_0x332e97,fs[_0x216159('0x17b')](_0x216159('0x165'),JSON[_0x216159('0x179')](_registered)));};function _0xde4e(){const _0x31d9d9=['random','chats','./database/bot/registered.json','556098YeWojq','66gZHuJN','12938MgFXjI','ARM','level','floor','heal','megapotion','PWR','DEF','LUK','limit','109jGQTHF','push','uang','16AiQPRu','potion','2651698dJHjHD','188836EofKfd','stringify','1950120gCsfUb','writeFileSync','length','3797940TXgyyY','SKL','6BKLtiS','35mXlEmk','MGC','./database/bot/scommand.json','ATK','keys','SPD','forEach','5693300GMuHnf'];_0xde4e=function(){return _0x31d9d9;};return _0xde4e();}
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

//=================================================//
const _0x145427=_0x1203;function _0x2f25(){const _0x571ada=['0x2e6','0x33f','0x2dc','0x216','*Vote*\x20','0x361','Whatsapp\x20Bot','cyan','_\x20*bro\x20maap\x20ni\x20bro\x20maap\x20banget\x20tapi\x20lu\x20bakal\x20dikick\x20dari\x20group\x20ini\x20bentar\x20lagi*','owner','0x24f','0x266','1st\x20Lt.\x203\x20♢♢³','💝💝💝💝💝💝💝💝💝💝','Legends\x20忍','0x387','0x2f6','parse','0x2e1','OWNER','daftar','0x2e8','0x20a','white','0x284','2nd\x20Lt.\x205\x20♢⁵','0x281','https://chat.whatsapp.com/','mode','0x368','createWriteStream','0x298','50000000','Klik\x20Untuk\x20Ke\x20Game\x20Selanjutnya','Colonel\x201\x20✷✷¹','0x252','AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA==','Lt.General\x20Early\x20✰','The\x20Commander\x20Hero\x20⍟','0x1fb','0x2c5','0x271','0x31f','#izinadmin\x20diterima','❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤','0x369','0x219','chatRead','0x285','Major\x202\x20✷²','s.whatsapp.net','General\x20gold\x20✯','ceil','Angka\x20','0x389','Major\x203\x20✷³','console','❤️❤️❤️❤️💔🖤🖤🖤🖤🖤','audio','0x2f3','Sergeant\x201\x20≣¹','0x332','0x372','0x273','Sergeant\x204\x20≣⁴','0x2d8','stickerMessage','Corporal\x205\x20☰⁵','0x343','0x3a7','❤️💔🖤🖤🖤🖤🖤🖤🖤🖤','twitter','menu\x20jika\x20tombolnya\x20tidak\x20muncul_','0x25d','application/vnd.openxmlformats-officedocument.spreadsheetml.sheet','https://mmg.whatsapp.net/d/f/AsO5KpESy9E0WI72xEVp65rx505bQxvuIma79L8Ue076.enc','application/pdf','Awakened\x20Mythic\x20特尔邦贡','Newbie\x20㋡','Brigadier\x20Silver\x20✩','0x268','status@broadcast','0x33b','\x20on','*_🎮\x20Tebak\x20Cak\x20Lontong\x20\x20🎮_*\x0a\x0a*Jawaban\x20Benar🎉*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','0x2d1','levelup','split','*「\x20VIRTEX\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','0x2bb','6288213840883-1616169743@g.us','./strg/sticker/','0x337','*「\x20KATA\x20TOXIC\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','2nd\x20Lt.\x203\x20♢³','0x215','0x214','0x2f0','extendedTextMessage','image/jpeg','\x0aitem4.X-ABLabel:Youtube\x0aitem5.ADR:;;🇮🇩\x20Indonesia;;;;\x0aitem5.X-ABLabel:Region\x0aitem6.X-ABLabel:THANK\x20SIEGRIN\x0aEND:VCARD','0x303','0x2c9','locationMessage','0x205','audio/ogg;\x20codecs=opus','\x20Menyerah\x0a_Yahaha\x20cupu\x20abiez_','.json','0x35a','Major\x20General\x20Early\x20✰','0x3b1','\x20🦁\x0a\x0a','status','Mythic\x20V\x20上帝','6️⃣','0x297','5042103lKKtQo','0x37d','❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤','Commander\x20Intermediate\x20⍣','0x256','Beginner\x202\x20⚊²','array','0x2a7','shift','composing','0x29a','0x232','0x291','existsSync','💘💘💘💘💘💘💘💘💘💘','11408375oAFHyj','0x265','❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤','toLowerCase','Bot','0x2c6','❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤','0x2d7','pesan','documentMessage','0x250','0x379','9️⃣','0x26a','0x39a','0x320','./temp/','❤️❤️❤️❤️❤️❤️💔🖤🖤🖤}','catch','Sergeant\x204\x20︾⁴','0x238','Staff\x204\x20﹀⁴','0x382','0x32e','Brigadier\x20Early\x20✰','0x3b5','0x313','0x207','0x2e5','0x35d','0x3a8','0x335','youtube','\x0a\x0a*Alasan*:\x20','MENU','/v/t62.7118-24/35150115_287008086621545_8250021012380583765_n.enc?ccb=11-4&oh=6f0f730e5224c054969c276a6276a920&oe=61A21F46','0x236','from','black','0x319','0x34f','0x2fe','selesai','B826873620DD5947E683E3ABE663F263','0x2cf','0x34e','length','0x386','0x2ca','0x338','Beginner\x203\x20⚊³','./strg/image/','0x1fe','\x20telah\x20diisi','devote','0x329','62dWFTus','0x2eb','0x2ec','0x201','2️⃣','|Server\x20Name:','0x227','*「\x20LINK\x20TERDETEKSI\x20」*\x0a*Maaf*\x20_@','\x20-vcodec\x20libwebp\x20-filter:v\x20fps=fps=20\x20-lossless\x201\x20-loop\x200\x20-preset\x20default\x20-an\x20-vsync\x200\x20-s\x20512:512\x20','0x344','ffmpeg\x20-i\x20','0x24b','6283136505591-1614953337@g.us','❤️❤️❤️❤️❤️❤️❤️❤️💔🖤','0x318','\x0a_ketik\x20nyerah\x20untuk\x20menyerah_','0x282','0x385','step','0x2bf','General\x20Silver\x20✩','0x259','♡\x20ㅤ\x20\u00a0\u00a0\x20❍ㅤ\u00a0\u00a0\x20\u00a0\x20\x20⎙ㅤ\u00a0\u00a0\u00a0\u00a0\u00a0⌲','0x1f3','0x34b','Mythic\x20X\x20上帝','\x0aFN:WhatsApp\x0aitem1.TEL;waid=0:0\x0aitem1.X-ABLabel:Kang\x20Banned\x0aitem2.X-ABLabel:THANK\x20WhatsApp\x0aEND:VCARD','0x2e2','.jpeg','0x22a','0x1f4','./database/group/tebakgambar.json','0x399','❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤','0x202','0x217','Private\x205\x20⚌⁵','\x0a\x0a•>\x20Lose\x20:\x20@','say','0x24a','0x355','0x302','0x38b','0x31b','balasan','0x2a5',')\x0a_fix\x20tictactoe_','0x36d','quotedMessage','\x0aitem1.X-ABLabel:Ponsel\x0aEND:VCARD','0x2a4','0x30b','0x3ab','0x331','orderId','0x2b9','0x3af','contactMessage','toString','0x39d','0x280','0x366','green','0x30c','0x20b','0x384','0x38c','0x239','0x1f9','0x22b','Multi-Prefix','*[\x20REGISTER\x20]*\x0a@','0x3a9','headers','0x25c','0x26c','replace','0x392','20uhxjVx','location','0x2de','trim','0x2b5','./database/bot/','0x38a','0x225','recording','0x275','0x261','0x378','0x28f','1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw==','prepareMessageFromContent','General\x20Platinum\x20✬','0x1f8','|Server:','♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️','0x2e4','0x33a','0x286','pow','DAFTAR','_Klik\x20button\x20di\x20bawah\x20untuk\x20verifikasi\x20data_._Jika\x20tombolnya\x20gak\x20muncul\x20ketik\x20aja\x20','Private\x204\x20⚌⁴','0x272','0x209','0x2c8','❤️❤️❤️❤️❤️❤️❤️❤️❤️💔','0x38d','Mythic\x20III\x20上帝','0x233','error','Developer\x20Bot','0x242','\x20🎉\x0a\x0a','Media\x20Sosial','0x23a','buttonsMessage','0x255','0x2a9','0x37a','0x20f','0x356','0x210','0x1fc','durasi','0x395','0x380','fromMe','1st\x20Lt.\x205\x20♢♢⁵','\x0aitem1.X-ABLabel:Creator\x20Bot\x20\x0aitem2.EMAIL;type=INTERNET:','./database/bot/registered.json','0x3a1','map','Developer\x20','6289530298948-1604595598@g.us','0x2d0','35733bdIQMK','Private\x202\x20⚌²','0x342','0x222','0x340','0x301','match','361788DODMrz','❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤','0x294','0x245','mentionedJid','Major\x204\x20✷⁴','Major\x20General\x20Silver\x20✩','Major\x20General\x20gold\x20✯','0x289','💛💛💛💛💛💛💛💛💛💛','setStatus','0x325','0x23d','❤️❤️❤️💔🖤🖤🖤🖤🖤🖤','0x2df','PHOTO','0x2a0','174238614569481','0x314','1st\x20Lt.\x201\x20♢♢¹','0x269','0x24d','0x2fd','Mythic\x20IV\x20上帝','0x2fb','132wkYbHS','./database/bot/vote/','0@s.whatsapp.net','0x2ee','0x34d','🎮🎭\x20```TICTACTOE```\x20🎭🎮\x0a•>\x20Player\x201\x20:\x20@','2nd\x20Lt.\x202\x20♢²','0x3a4','0x283','0x29b','0x352','0x2b2','0x23c','0x231','1634472176','BEGIN:VCARD\x0aVERSION:3.0\x0aFN:Dellas\x0aORG:\x20Dev\x20Bot\x0aTEL;type=CELL;type=VOICE;waid=6281224863098:6281224863098\x0aEND:VCARD','0x3a5','isFiltered','0x373','0x26d','0x2e0','0x2c2','sendMessage','0x21e','hex','daftar_','0x257','0x2b3','close','0x2bc','Youtube','150453297177375','0x20d','./stik','Game\x20telah\x20dimulai\x20sebelumnya!','0x262','\x20Menit\x0a\x0a','3555496RUUCCn','*ERR:*\x20','0x212','*❲\x20VERIFIKASI\x20SUKSES\x20❳*\x0a_ketik\x20','Sergeant\x205\x20︾⁵','0x30d','0x21f','0x305','0x36c','0x374','0x2ce','Major\x201\x20✷¹','\x0aitem1.TEL;waid=','Mythic\x20VII\x20上帝','Sergeant\x201\x20︾¹','Daftar','sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=','votes','Mythic\x20IX\x20上帝','0x20e','•>\x20Draw\x20:\x20@','.exif','0x2cb','productMessage','6bNVoFK','0x358','0x3a6','voting','registered.json','image/gif','vote','0x277','2nd\x20Lt.\x204\x20♢⁴','General\x20Early\x20✰','0x2f5','❤️❤️❤️❤️❤️💔🖤🖤🖤🖤','*Support\x20','0x39f','\x0a\x0a•>\x20Draw\x20:\x20@','left','delete','5️⃣','Sergeant\x203\x20≣³','0x377','\x0a\x0a•>\x20Win\x20:\x20@','0x22c','Corporal\x204\x20☰⁴','0x31e','isBaileys','\x20yahaha\x20cupu\x20lo','0x304','*_🎮\x20Tebak\x20Gambar\x20\x20🎮_*\x0a\x0a*Jawaban\x20Benar🎉*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','application/vnd.openxmlformats-officedocument.wordprocessingml.document','result','0x35f','INQUIRY','yellow','random','ephemeralMessage','0x26e','0x288','0x28d','includes','groupRemove','🎮🎭\x20```TICTACTOE```\x20🎭🎮\x0a','\x0a*Jumlah\x20Vote*\x20:\x20','0x21d','0x211','0x2d4','1014032bpySWH','0x27d','Message','0x244','sticker','./database/bot/tictactoe.json','modifyChat','Mythic\x20II\x20上帝','0x35c','0x2f1','0x2f2','General\x20Diamond\x20✪','@g.us','|User:','0x339','chats','jid','0x25b','0x287','Major\x205\x20✷⁵','lenght','participant','+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=','0x21c','4️⃣','0x290','\x20from\x20','0x3b4','0x27b','Beginner\x201\x20⚊¹','0x36a','red','0x249','0x22f','0x25a','0x370','donasi','0x336','0x248','6285751056816@s.whatsapp.net','#izinadmin','0x24e','0x35e','0x322','1st\x20Lt.\x204\x20♢♢⁴','0x2f7','0x30e','0x2ba','Mythic\x20I\x20上帝','Colonel\x202\x20✷✷²','*\x0a*Powered\x20By\x20@','concat','0x20c','0x22d','0x362','0x1f6','0x2db','0x396','Mythic\x20VIII\x20上帝','0x348','0x375','❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤','0x22e','updatePresence','message','*\x0a*Offical\x20Bot\x20By\x20@','*admin\x20mah\x20bebas*','Lt.General\x20Silver\x20✩','0x309','0x221','floor','0x2fa','Private\x201\x20⚌¹','browserDescription','0x218','0x263','0x32c','Sergeant\x203\x20︾³','28777','0x363','3558123DlOfAH','filter','0x29e','0x2b7','0x383','done','writeFileSync','0x253','OFF','./lib/temanye/','VERIFIKASI','0x1f7','\x0aFN:','reason','0x278','m4cjAB9A2dg7YcNJOxfB5PuTxv5Nip4B6mHh9glp6w8=','Major\x20General\x20Diamond\x20✪','0x23f','0x33c','「\x20*Game\x20Tictactoe\x20Rejected*\x20」\x0a\x0a•\x20@','0x204','0x276','2nd\x20Lt.\x201\x20♢¹\x20','❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️','0x295','\x0a*Vote*\x20:\x20','0x353','Commander\x20Elite\x20≛','0x376','48473364uQHuDQ','0x391','fkontak','0x228','0x350','7️⃣','push','fgclink','->[EXEC]:\x20','💔🖤🖤🖤🖤🖤🖤🖤🖤🖤','0x364','0x213','text','alloc','Tiktok','./database/group/tebakcaklontong.json','0x200','mp4Audio','0x230','0x37f','0x3a3','0x393','0x354','0x2cd','0x357','Sergeant\x202\x20︾²','head','3UPGVcz','gif','fvn','0x39e','0x37e','0x264','Name:','Colonel\x205\x20✷✷⁵','0x208','endsWith','0x35b','0x2f4','Colonel\x204\x20✷✷⁴','0x2a2','0x3ad','orderMessage','0x308','0x2da','0x315','0x279','0x346','0x2d2','0x2c3','0x349','\x20Vote\x0a*Durasi*\x20:\x20','unlinkSync','0x258','1150332IweeRb','.webp','0x341','1st\x20Lt.\x202\x20♢♢²','quoted','0x28e','0x2ac','0x3b3','1610993486','Hmm','0x29f','0x26f',',\x0aitem1.TEL;waid=','./strg/audio/','❤️❤️❤️❤️❤️❤️❤️💔🖤🖤','0x37c','fvideo','0x37b','0x306','\x20🐯\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','0x330','0x397','0x3a0','0x36b','0x293','g.us','\x0a\x20\x20\x20','nyerah','0x23e','1652660hvbNob','0x316','24DwjMJT','0x371','0x2b8','0x1fd','OWner\x20','0x2e9','9rRzEPn','Brigadier\x20Diamond\x20✪','0x34a','0x359','0x240','0x296','0x2bd','0x2ff','0x2aa','🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤','*BROADCAST*','0x31a','Commander\x20Early\x20★','groupMetadata','T1PNoYwrqgwDVLtfmj7L5e0Sq02OEbqHPC8RFhICuUU=','BEGIN:VCARD\x0aVERSION:3.0\x0aN:','0x1fa','prepareMessage','Staff\x203\x20﹀³','816155MpOivX','0x2d3','0x27c','Corporal\x202\x20☰²','0x326','0x21b','.png','0x333','Lt.General\x20gold\x20✯','0x38e','token','0x38f','BEGIN:VCARD\x0aVERSION:3.0\x0aN:XL;','/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69','0x398','0x270','0x25f','0x36e','0x345','audioMessage','remoteJid','./database/group/tebaksiapaaku.json','0x2e3','0x2c0','6289530298948@s.whatsapp.net','0x2c7','0x27f','Twitter','0x2f8','0x39c','limitend','uptime','0x2a6','0x3ae','0x29d','contextInfo','6519724HgZbjB','Beginner\x204\x20⚊⁴','0x25e','0x32a','0x234','simplemenu','0x30a','0x226','0x251','0x2ab','board','video','0x2af','TRY\x20AGAIN','•>\x20Win\x20:\x20@','\x20_Second_','0x23b','0x367','.mp3','.js','8️⃣','0x36f','0x351','[SPAM]','0x247','10000000000','videoMessage','Sergeant\x202\x20≣²','0x30f','0x246','Runtime\x20','addFilter','[REGISTER]','relayWAMessage','0x2b0','0x39b',',;;;\x0aFN:','0x28b','0x28c','0x32f','0x31d','0x24c','gUfwVzg4DI47bHgCpoNnxGs7CLltWZa4YohJOekAclg=','\x20off','0x292','toFixed','\x20in\x20','now','.mp4','pipe','0x224','0x31c','0x32d','0x267','true','0x220','application/vnd.openxmlformats-officedocument.presentationml.presentation','0x388','0x2a3','Brigadier\x20Platinum\x20✬','audio/mp4','0x381','vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=','0x203','@s.whatsapp.net','unshift','0x1ff','\x0aitem2.X-ABLabel:Email\x0aitem4.URL:','1️⃣','0x2a8','0x394','0x2c4','0x307','781872HmnoUI','0x2c1','admin\x20bebas\x20aowkwkww','💖💖💖💖💖💖💖💖💖💖','0x274','End\x20level\x20程度❗','0x2be','./strg/video/','enemy','0x317','0x2a1','Staff\x202\x20﹀²','Colonel\x203\x20✷✷³','0x1f5','0x2d9','0x29c','0x2b6','2TBSLhx','0x311','0x223','101985nzOaCw','0x26b','❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤','0x27a','0x27e','0x3b0','content-type','listMessage','0x34c','0x2cc','key','99999','0x21a','0x237','30oXasPH','Corporal\x201\x20☰¹','writeFile','*_🎮\x20Tebak\x20siapa\x20aku\x20\x20🎮_*\x0a\x0a**\x20*Jawaban\x20Benar🎉\x20*\x0aIngin\x20bermain\x20lagi?\x20kirim\x20*','0x3aa','Private\x203\x20⚌³','Staff\x205\x20﹀⁵','0x2ef','0x324','Lt.General\x20Platinum\x20✬','0x328','0x235','0x299','0x334','0x2ad','0x33d','0x365','0x32b','\x20👻\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','*Jaga\x20Ucapannya\x20Min😇*','0x229','0x206','hasOwnProperty','\x20Anda\x20sudah\x20vote','0x260','tebakgambar*','chat','0x3b2','Staff\x201\x20﹀¹','then','Sergeant\x205\x20≣⁵','stringify','blue','0x33e','\x0a\x0a•>\x20Player\x202\x20:\x20@','0x300','DOCUMENT','0x2d6','mtype','log','0x310','0x2b4','6289530298948-1613049930@g.us','CATALOG','💓💓💓💓💓💓💓💓💓💓','0x3ac','0x2f9','0x2ae','floc','0x2b1','0x254','0x2ed','0x2dd','0x2fc','0x28a','0x312','fdoc','image/','imageMessage','0x3a2','0x2ea','0x323','0x390','mytiktok','0x2e7','Nyerah','WABot','\x20🎉\x0a_fix\x20tictactoe\x20by\x20mans\x202021_','0x2d5','https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc','0x327','IDR','3️⃣','0x241','0x360','application/octet-stream','Corporal\x203\x20☰³','Lt.\x20General\x20Diamond\x20✪','ftroli','0x243','0x347','Brigadier\x20gold\x20✯','•>\x20Lose\x20:\x20@','❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤','Major\x20General\x20Platinum\x20✬','0x321','fgif','💗💗💗💗💗💗💗💗💗💗','readFileSync','\x20👻\x0a\x0a','❤️❤️💔🖤🖤🖤🖤🖤🖤🖤'];_0x2f25=function(){return _0x571ada;};return _0x2f25();}(function(_0x4f6f4f,_0x4add2e){const _0x255ba8=_0x1203,_0x2285f0=_0x4f6f4f();while(!![]){try{const _0x563173=-parseInt(_0x255ba8('0x40b'))/0x1*(-parseInt(_0x255ba8('0x382'))/0x2)+parseInt(_0x255ba8('0x18a'))/0x3*(parseInt(_0x255ba8('0x201'))/0x4)+parseInt(_0x255ba8('0x1dd'))/0x5+-parseInt(_0x255ba8('0x42b'))/0x6*(-parseInt(_0x255ba8('0x412'))/0x7)+parseInt(_0x255ba8('0x24a'))/0x8*(-parseInt(_0x255ba8('0x1ca'))/0x9)+-parseInt(_0x255ba8('0x3d0'))/0xa*(-parseInt(_0x255ba8('0x33b'))/0xb)+-parseInt(_0x255ba8('0x16f'))/0xc;if(_0x563173===_0x4add2e)break;else _0x2285f0['push'](_0x2285f0['shift']());}catch(_0x26d75c){_0x2285f0['push'](_0x2285f0['shift']());}}}(_0x2f25,0xc795a));function _0x5b47(_0x2d2006,_0x5537dd){const _0x16f34c=_0x5b29();return _0x5b47=function(_0x2c4720,_0x34b6f3){_0x2c4720=_0x2c4720-0x1f3;let _0x46dc41=_0x16f34c[_0x2c4720];return _0x46dc41;},_0x5b47(_0x2d2006,_0x5537dd);}const _0x32fec3=_0x5b47;(function(_0x4aa242,_0x415274){const _0x23a326=_0x1203,_0xc3ee8b=_0x5b47,_0x1885c2=_0x4aa242();while(!![]){try{const _0x1473b6=-parseInt(_0xc3ee8b(_0x23a326('0x1b4')))/0x1*(parseInt(_0xc3ee8b(_0x23a326('0x17a')))/0x2)+-parseInt(_0xc3ee8b(_0x23a326('0x14c')))/0x3+-parseInt(_0xc3ee8b(_0x23a326('0x2b2')))/0x4+parseInt(_0xc3ee8b(_0x23a326('0x482')))/0x5*(-parseInt(_0xc3ee8b(_0x23a326('0x2e4')))/0x6)+parseInt(_0xc3ee8b(_0x23a326('0x236')))/0x7+parseInt(_0xc3ee8b(_0x23a326('0x43b')))/0x8*(-parseInt(_0xc3ee8b(_0x23a326('0x127')))/0x9)+-parseInt(_0xc3ee8b(_0x23a326('0x1e1')))/0xa*(-parseInt(_0xc3ee8b(_0x23a326('0x1ec')))/0xb);if(_0x1473b6===_0x415274)break;else _0x1885c2[_0x23a326('0x175')](_0x1885c2[_0x23a326('0x343')]());}catch(_0x28ea64){_0x1885c2[_0x23a326('0x175')](_0x1885c2[_0x23a326('0x343')]());}}}(_0x5b29,0xa253f));const hearts=checkHealuser(sender);var heartbars=_0x32fec3(_0x145427('0x45a'));if(hearts<=0x0)heartbars=_0x32fec3(_0x145427('0x3a2'));else{if(hearts<=0x5)heartbars=_0x32fec3(_0x145427('0x3fc'));else{if(hearts<=0xa)heartbars=_0x32fec3(_0x145427('0x295'));else{if(hearts<=0xf)heartbars=_0x32fec3(_0x145427('0x1ed'));else{if(hearts<=0x14)heartbars=_0x32fec3(_0x145427('0x3ab'));else{if(hearts<=0x19)heartbars=_0x32fec3(_0x145427('0x229'));else{if(hearts<=0x1e)heartbars=_0x32fec3(_0x145427('0x3a0'));else{if(hearts<=0x23)heartbars=_0x32fec3(_0x145427('0x27a'));else{if(hearts<=0x28)heartbars=_0x32fec3(_0x145427('0x3cc'));else{if(hearts<=0x2d)heartbars=_0x32fec3(_0x145427('0x23e'));else{if(hearts<=0x32)heartbars=_0x32fec3(_0x145427('0x320'));else{if(hearts<=0x37)heartbars=_0x32fec3(_0x145427('0x14e'));else{if(hearts<=0x3c)heartbars=_0x32fec3(_0x145427('0x3e5'));else{if(hearts<=0x41)heartbars=_0x32fec3(_0x145427('0x333'));else{if(hearts<=0x46)heartbars=_0x32fec3(_0x145427('0x3a4'));else{if(hearts<=0x4b)heartbars=_0x32fec3(_0x145427('0x3ac'));else{if(hearts<=0x50)heartbars=_0x32fec3(_0x145427('0x2aa'));else{if(hearts<=0x55)heartbars=_0x32fec3(_0x145427('0x2a7'));else{if(hearts<=0x5a)heartbars=_0x32fec3(_0x145427('0x1ac'));else{if(hearts<=0x5f)heartbars=_0x32fec3(_0x145427('0x1d0'));else{if(hearts<=0xc8)heartbars=_0x32fec3(_0x145427('0x14d'));else{if(hearts<=0x96)heartbars=_0x32fec3(_0x145427('0x2b5'));else{if(hearts<=0x12c)heartbars=_0x32fec3(_0x145427('0x436'));else{if(hearts<=0x190)heartbars=_0x32fec3(_0x145427('0x3ca'));else{if(hearts<=0x3e8)heartbars=_0x32fec3(_0x145427('0x3b7'));else{if(hearts<=0x7d0)heartbars=_0x32fec3(_0x145427('0x204'));else{if(hearts<=0xbb8)heartbars=_0x32fec3(_0x145427('0x41a'));else hearts<=0x270f&&(heartbars=_0x32fec3(_0x145427('0x41a')));}}}}}}}}}}}}}}}}}}}}}}}}}}client[_0x32fec3(_0x145427('0x2ee'))](_0x32fec3(_0x145427('0x248'))+_registered[_0x32fec3(_0x145427('0x16e'))]+_0x32fec3(_0x145427('0x335'))+client[_0x32fec3(_0x145427('0x27b'))][0x0]+_0x32fec3(_0x145427('0x440'))+client[_0x32fec3(_0x145427('0x27b'))][0x1]+'|')[_0x32fec3(_0x145427('0x1ce'))](_0x4c05d5=>_0x4c05d5),settingstatus=new Date()*0x1;const isUrl=_0x291172=>{const _0x36deba=_0x145427,_0x551df3=_0x32fec3;return _0x291172[_0x551df3(_0x36deba('0x373'))](new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/,'gi'));},replyex=_0x32faea=>{const _0x4145ab=_0x145427,_0x4df9bb=_0x32fec3;client[_0x4df9bb(_0x4145ab('0x36e'))](from,_0x32faea,text,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},replysticker=_0x4e4e6d=>{const _0x1ac254=_0x145427,_0x2b3f0a=_0x32fec3;client[_0x2b3f0a(_0x1ac254('0x36e'))](from,_0x4e4e6d,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'externalAdReply':{'title':''+hahh,'body':_0x2b3f0a(_0x1ac254('0x30b'))+kyun(process[_0x2b3f0a(_0x1ac254('0x24e'))]()),'previewType':_0x2b3f0a(_0x1ac254('0x492')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});},reply=_0xb3cfb5=>{const _0x2a8f9d=_0x145427,_0x1ab5d0=_0x32fec3;client[_0x1ab5d0(_0x2a8f9d('0x36e'))](from,_0xb3cfb5,text,{'thumbnail':WMthumb,'quoted':mek,'sendEphemeral':!![],'contextInfo':{'externalAdReply':{'title':''+hahh,'body':_0x1ab5d0(_0x2a8f9d('0x30b'))+kyun(process[_0x1ab5d0(_0x2a8f9d('0x24e'))]()),'previewType':_0x1ab5d0(_0x2a8f9d('0x492')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});},sendListMes=_0x4b35dc=>{const _0x321c77=_0x145427,_0x2917da=_0x32fec3;client[_0x2917da(_0x321c77('0x36e'))](from,_0x4b35dc,MessageType[_0x2917da(_0x321c77('0x3dc'))],{'quoted':ftoko,'thumbnail':WMthumb,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});},mentions=(_0xde0339,_0x5a800f,_0x3be1a1)=>{const _0x4a96a4=_0x145427,_0xe2e626=_0x32fec3;_0x3be1a1==null||_0x3be1a1==undefined||_0x3be1a1==![]?client[_0xe2e626(_0x4a96a4('0x36e'))](from,_0xde0339[_0xe2e626(_0x4a96a4('0x3f9'))](),extendedText,{'contextInfo':{'mentionedJid':_0x5a800f}}):client[_0xe2e626(_0x4a96a4('0x36e'))](from,_0xde0339[_0xe2e626(_0x4a96a4('0x3f9'))](),extendedText,{'quoted':mek,'contextInfo':{'mentionedJid':_0x5a800f}});},fakethumb=(_0x381fd9,_0x3ff90d)=>{const _0xf99e07=_0x145427,_0x5d5f19=_0x32fec3;client[_0x5d5f19(_0xf99e07('0x36e'))](from,_0x381fd9,image,{'thumbnail':WMthumb,'quoted':mek,'caption':_0x3ff90d});},fakeitem=_0x294707=>{const _0x185599=_0x145427,_0x2053b3=_0x32fec3;client[_0x2053b3(_0x185599('0x36e'))](from,_0x294707,text,{'quoted':{'key':{'fromMe':![],'participant':_0x2053b3(_0x185599('0x154')),...from?{'remoteJid':_0x2053b3(_0x185599('0x159'))}:{}},'message':{'orderMessage':{'orderId':_0x2053b3(_0x185599('0x40d')),'thumbnail':WMthumb,'itemCount':''+date1,'status':_0x2053b3(_0x185599('0x2f5')),'surface':_0x2053b3(_0x185599('0x137')),'message':NamaBot,'token':_0x2053b3(_0x185599('0x277'))}}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});},ftoko={'key':{'fromMe':![],'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x159'))}:{}},'message':{'productMessage':{'product':{'productImage':{'mimetype':_0x32fec3(_0x145427('0x1fa')),'jpegThumbnail':WMthumb},'title':_0x32fec3(_0x145427('0x3cf')),'description':NamaBot,'currencyCode':_0x32fec3(_0x145427('0x377')),'priceAmount1000':_0x32fec3(_0x145427('0x39a')),'retailerId':_0x32fec3(_0x145427('0x163')),'productImageCount':''+date1},'businessOwnerJid':_0x32fec3(_0x145427('0x154'))}}},fakegroup=_0x4213e9=>{const _0x4b0d97=_0x145427,_0x5bea9a=_0x32fec3;client[_0x5bea9a(_0x4b0d97('0x36e'))](from,_0x4213e9,text,{'quoted':{'key':{'fromMe':![],'participant':_0x5bea9a(_0x4b0d97('0x154')),...from?{'remoteJid':_0x5bea9a(_0x4b0d97('0x159'))}:{}},'message':{'imageMessage':{'url':_0x5bea9a(_0x4b0d97('0x383')),'mimetype':_0x5bea9a(_0x4b0d97('0x1fa')),'caption':NamaBot,'fileSha256':_0x5bea9a(_0x4b0d97('0x226')),'fileLength':_0x5bea9a(_0x4b0d97('0x28f')),'height':0x438,'width':0x437,'mediaKey':_0x5bea9a(_0x4b0d97('0x12f')),'fileEncSha256':_0x5bea9a(_0x4b0d97('0x400')),'directPath':_0x5bea9a(_0x4b0d97('0x12b')),'mediaKeyTimestamp':_0x5bea9a(_0x4b0d97('0x1b7')),'jpegThumbnail':WMthumb,'scansSidecar':_0x5bea9a(_0x4b0d97('0x358'))}}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]});},fstatus={'key':{'fromMe':![],'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x278'))}:{}},'message':{'imageMessage':{'url':_0x32fec3(_0x145427('0x383')),'mimetype':_0x32fec3(_0x145427('0x1fa')),'caption':NamaBot,'fileSha256':_0x32fec3(_0x145427('0x226')),'fileLength':_0x32fec3(_0x145427('0x28f')),'height':0x438,'width':0x437,'mediaKey':_0x32fec3(_0x145427('0x12f')),'fileEncSha256':_0x32fec3(_0x145427('0x400')),'directPath':_0x32fec3(_0x145427('0x12b')),'mediaKeyTimestamp':_0x32fec3(_0x145427('0x1b7')),'jpegThumbnail':WMthumb,'scansSidecar':_0x32fec3(_0x145427('0x358'))}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]},ftroli={'key':{'fromMe':![],'participant':_0x32fec3(_0x145427('0x154')),'remoteJid':_0x32fec3(_0x145427('0x159'))},'message':{'orderMessage':{'itemCount':''+date1,'status':0xc8,'thumbnail':WMthumb,'surface':0xc8,'message':NamaBot,'orderTitle':'L','sellerJid':_0x32fec3(_0x145427('0x154'))}},'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![]},'sendEphemeral':!![]},fdoc={'key':{'participant':_0x32fec3(_0x145427('0x154'))},'message':{'documentMessage':{'title':NamaBot,'jpegThumbnail':WMthumb}}},fvn={'key':{'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x276'))}:{}},'message':{'audioMessage':{'mimetype':_0x32fec3(_0x145427('0x40a')),'seconds':0x1869f,'ptt':_0x32fec3(_0x145427('0x37e'))}}},fgif={'key':{'fromMe':![],'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x276'))}:{}},'message':{'videoMessage':{'title':NamaBot,'h':_0x32fec3(_0x145427('0x29a')),'seconds':_0x32fec3(_0x145427('0x29e')),'gifPlayback':_0x32fec3(_0x145427('0x37e')),'caption':_0x32fec3(_0x145427('0x3bf')),'jpegThumbnail':WMthumb}}},fgclink={'key':{'participant':_0x32fec3(_0x145427('0x154')),'remoteJid':_0x32fec3(_0x145427('0x154'))},'message':{'groupInviteMessage':{'groupJid':_0x32fec3(_0x145427('0x302')),'inviteCode':'m','groupName':'P','caption':NamaBot,'jpegThumbnail':WMthumb}}},fvideo={'key':{'fromMe':![],'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x276'))}:{}},'message':{'videoMessage':{'title':NamaBot,'h':_0x32fec3(_0x145427('0x29a')),'seconds':_0x32fec3(_0x145427('0x29e')),'caption':NamaBot,'jpegThumbnail':WMthumb}}},floc={'key':{'participant':_0x32fec3(_0x145427('0x154'))},'message':{'locationMessage':{'name':NamaBot,'jpegThumbnail':WMthumb}}},fkontak={'key':{'participant':_0x32fec3(_0x145427('0x154')),...from?{'remoteJid':_0x32fec3(_0x145427('0x2d9'))}:{}},'message':{'contactMessage':{'displayName':''+ownername,'vcard':_0x32fec3(_0x145427('0x310'))+ownername+_0x32fec3(_0x145427('0x435'))+ownername+_0x32fec3(_0x145427('0x1bd'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+':'+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x486')),'jpegThumbnail':WMthumb,'thumbnail':WMthumb,'sendEphemeral':!![]}}};var fakeReplyList=[_0x32fec3(_0x145427('0x2d7')),_0x32fec3(_0x145427('0x3ba')),_0x32fec3(_0x145427('0x426')),_0x32fec3(_0x145427('0x3b9')),_0x32fec3(_0x145427('0x3c3')),_0x32fec3(_0x145427('0x3ec')),_0x32fec3(_0x145427('0x347')),_0x32fec3(_0x145427('0x2a1'))],fakeReply=fakeReplyList[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*fakeReplyList[_0x32fec3(_0x145427('0x16e'))])];const sendStickerFromUrl=async(_0x4af47c,_0x1e4ffa)=>{const _0x46593d=_0x145427,_0x341278=_0x32fec3;var _0x9e0c3c=Date[_0x341278(_0x46593d('0x4b3'))]()/0x2710,_0x5e014e=function(_0x32cd39,_0x1f1a34,_0x184f85){const _0x2d8839=_0x46593d,_0x4f1400=_0x341278;request[_0x4f1400(_0x2d8839('0x4a3'))](_0x32cd39,function(_0x2d09e6,_0x95ca4d,_0x5c60c2){const _0x53d787=_0x2d8839,_0x3a1500=_0x4f1400;request(_0x32cd39)[_0x3a1500(_0x53d787('0x29f'))](fs[_0x3a1500(_0x53d787('0x3b6'))](_0x1f1a34))['on'](_0x3a1500(_0x53d787('0x29d')),_0x184f85);});};_0x5e014e(_0x1e4ffa,_0x341278(_0x46593d('0x2bb'))+_0x9e0c3c+_0x341278(_0x46593d('0x2c1')),async function(){const _0x352a3c=_0x46593d,_0x2d71ed=_0x341278;console[_0x2d71ed(_0x352a3c('0x2fd'))](_0x2d71ed(_0x352a3c('0x49d')));let _0x22d28a=_0x2d71ed(_0x352a3c('0x2bb'))+_0x9e0c3c+_0x2d71ed(_0x352a3c('0x2c1')),_0x5f0efd=_0x2d71ed(_0x352a3c('0x2bb'))+_0x9e0c3c+_0x2d71ed(_0x352a3c('0x48d'));exec(_0x2d71ed(_0x352a3c('0x219'))+_0x22d28a+_0x2d71ed(_0x352a3c('0x376'))+_0x5f0efd,_0x380fc1=>{const _0x3e3324=_0x352a3c,_0x3863ab=_0x2d71ed;let _0x5143ff=fs[_0x3863ab(_0x3e3324('0x170'))](_0x5f0efd);client[_0x3863ab(_0x3e3324('0x36e'))](_0x4af47c,_0x5143ff,MessageType[_0x3863ab(_0x3e3324('0x388'))],{'quoted':mek}),fs[_0x3863ab(_0x3e3324('0x47f'))](_0x22d28a),fs[_0x3863ab(_0x3e3324('0x47f'))](_0x5f0efd);});});},sendFileFromUrl=async(_0x3602a8,_0x5aba92,_0x1664d3)=>{const _0x35ca9f=_0x145427,_0x413a28=_0x32fec3;hasil=await getBuffer(_0x3602a8),client[_0x413a28(_0x35ca9f('0x36e'))](from,hasil,_0x5aba92,_0x1664d3)[_0x413a28(_0x35ca9f('0x1ce'))](_0x3dd660=>{const _0x3c86b6=_0x35ca9f,_0x2c2f0d=_0x413a28;fetch(_0x3602a8)[_0x2c2f0d(_0x3c86b6('0x4b7'))](_0x2e9c93=>{const _0x3881c0=_0x3c86b6,_0x2f8d22=_0x2c2f0d;client[_0x2f8d22(_0x3881c0('0x36e'))](from,_0x2e9c93,_0x5aba92,_0x1664d3)[_0x2f8d22(_0x3881c0('0x1ce'))](_0x221a56=>{const _0x46664f=_0x3881c0,_0x5203e6=_0x2f8d22;client[_0x5203e6(_0x46664f('0x36e'))](from,{'url':_0x3602a8},_0x5aba92,_0x1664d3)[_0x5203e6(_0x46664f('0x1ce'))](_0x2a4833=>{const _0x3cbe13=_0x46664f,_0x20266c=_0x5203e6;reply,console[_0x20266c(_0x3cbe13('0x2fd'))](_0x2a4833);});});});});},sendMediaURL=async(_0x2938ce,_0x5f23f0,_0x446cec='',_0x40edae=[])=>{const _0x24d1d1=_0x145427,_0x1bdb8b=_0x32fec3;_0x40edae[_0x1bdb8b(_0x24d1d1('0x16e'))]>0x0&&(_0x446cec=normalizeMention(_0x2938ce,_0x446cec,_0x40edae));const _0x1a5855=Date[_0x1bdb8b(_0x24d1d1('0x4b3'))]()/0x2710,_0x16b8c0=_0x1a5855[_0x1bdb8b(_0x24d1d1('0x179'))]();let _0x555234='';var _0x39bb91=function(_0x18e73c,_0x201c66,_0x30a10f){const _0x29c22b=_0x24d1d1,_0x12eae6=_0x1bdb8b;request[_0x12eae6(_0x29c22b('0x4a3'))](_0x18e73c,function(_0x249d23,_0x3cd5e4,_0x5323d0){const _0x5addd1=_0x29c22b,_0x59b25e=_0x12eae6;_0x555234=_0x3cd5e4[_0x59b25e(_0x5addd1('0x1f7'))][_0x59b25e(_0x5addd1('0x2e1'))],request(_0x18e73c)[_0x59b25e(_0x5addd1('0x29f'))](fs[_0x59b25e(_0x5addd1('0x3b6'))](_0x201c66))['on'](_0x59b25e(_0x5addd1('0x29d')),_0x30a10f);});};_0x39bb91(_0x5f23f0,_0x16b8c0,async function(){const _0x36445e=_0x24d1d1,_0x5205bf=_0x1bdb8b;console[_0x5205bf(_0x36445e('0x2fd'))](_0x5205bf(_0x36445e('0x463')));let _0x3f90ec=fs[_0x5205bf(_0x36445e('0x170'))](_0x16b8c0),_0x3d4247=_0x555234[_0x5205bf(_0x36445e('0x243'))]('/')[0x0]+_0x5205bf(_0x36445e('0x151'));_0x555234===_0x5205bf(_0x36445e('0x4b5'))&&(_0x3d4247=MessageType[_0x5205bf(_0x36445e('0x437'))],_0x555234=Mimetype[_0x5205bf(_0x36445e('0x452'))]),_0x555234[_0x5205bf(_0x36445e('0x243'))]('/')[0x0]===_0x5205bf(_0x36445e('0x1c6'))&&(_0x555234=Mimetype[_0x5205bf(_0x36445e('0x2ac'))]),client[_0x5205bf(_0x36445e('0x36e'))](_0x2938ce,_0x3f90ec,_0x3d4247,{'quoted':mek,'mimetype':_0x555234,'caption':_0x446cec,'contextInfo':{'mentionedJid':_0x40edae},'thumbnail':Buffer[_0x5205bf(_0x36445e('0x1b0'))](0x0)}),fs[_0x5205bf(_0x36445e('0x47f'))](_0x16b8c0);});},textImg=_0x4739a3=>{const _0x4cd9c1=_0x145427,_0x1a347a=_0x32fec3;return client[_0x1a347a(_0x4cd9c1('0x36e'))](from,_0x4739a3,text,{'quoted':mek,'wmthumbnail':fs[_0x1a347a(_0x4cd9c1('0x170'))](_0x1a347a(_0x4cd9c1('0x3cd'))+wmthumbnail)});};let contrii=[];for(let i of ow){contrii[_0x32fec3(_0x145427('0x1bc'))]({'displayName':_0x32fec3(_0x145427('0x266'))+NamaBot,'vcard':_0x32fec3(_0x145427('0x393'))+NamaBot+_0x32fec3(_0x145427('0x155'))},{'displayName':_0x32fec3(_0x145427('0x3fd'))+NamaBot,'vcard':vcardowner},{'displayName':_0x32fec3(_0x145427('0x266'))+NamaBot,'vcard':_0x32fec3(_0x145427('0x393'))+NamaBot+_0x32fec3(_0x145427('0x284'))+ownername2+_0x32fec3(_0x145427('0x263'))+owner2+':'+owner2+_0x32fec3(_0x145427('0x3b4'))+mygmail+_0x32fec3(_0x145427('0x4a6'))+mybio+_0x32fec3(_0x145427('0x328'))},{'displayName':_0x32fec3(_0x145427('0x266'))+NamaBot,'vcard':_0x32fec3(_0x145427('0x393'))+NamaBot+_0x32fec3(_0x145427('0x284'))+ownername3+_0x32fec3(_0x145427('0x263'))+owner2+':'+owner2+_0x32fec3(_0x145427('0x3b4'))+mygmail+_0x32fec3(_0x145427('0x4a6'))+mybio+_0x32fec3(_0x145427('0x328'))},{'displayName':_0x32fec3(_0x145427('0x266'))+NamaBot,'vcard':vcard});}let contri1=[];for(let i of ow){contri1[_0x32fec3(_0x145427('0x1bc'))]({'displayName':_0x32fec3(_0x145427('0x3fd'))+NamaBot,'vcard':vcard},{'displayName':_0x32fec3(_0x145427('0x3fd'))+NamaBot,'vcard':_0x32fec3(_0x145427('0x25f'))},{'displayName':_0x32fec3(_0x145427('0x498')),'vcard':vcard});}const support=_0x32fec3(_0x145427('0x369'))+supportme+_0x32fec3(_0x145427('0x224'))+numbernye[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x26b'))+ow[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+'*',daftar3=[{'buttonId':_0x32fec3(_0x145427('0x2a3')),'buttonText':{'displayText':_0x32fec3(_0x145427('0x3e3'))},'type':0x1}],sendButtonImg=(_0x2684df,_0x428249,_0x3b34a9,_0x415fe4,_0x45b9f6=[],_0x4b75fc={})=>{const _0x104e47=_0x145427,_0x38a0e3=_0x32fec3,_0x5e81b4={'contentText':_0x428249,'footerText':_0x3b34a9,'buttons':_0x45b9f6,'headerType':0x4,'imageMessage':_0x415fe4[_0x38a0e3(_0x104e47('0x1a0'))][_0x38a0e3(_0x104e47('0x208'))]};client[_0x38a0e3(_0x104e47('0x36e'))](_0x2684df,_0x5e81b4,MessageType[_0x38a0e3(_0x104e47('0x390'))],_0x4b75fc);},sendButtonText=(_0x81d054,_0xb17541,_0x2fe706,_0x2a4340=[],_0x35f30e={})=>{const _0x42512e=_0x145427,_0x580a49=_0x32fec3,_0x3d6449={'contentText':_0xb17541,'footerText':_0x2fe706,'buttons':_0x2a4340,'headerType':0x1};client[_0x580a49(_0x42512e('0x36e'))](_0x81d054,_0x3d6449,MessageType[_0x580a49(_0x42512e('0x390'))],_0x35f30e);};data=fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x3eb'))+themenye+_0x32fec3(_0x145427('0x247'))),jsonData=JSON[_0x32fec3(_0x145427('0x1ee'))](data),randIndex=Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*jsonData[_0x32fec3(_0x145427('0x16e'))]),randKey=jsonData[randIndex],wipiaa=await getBuffer(randKey[_0x32fec3(_0x145427('0x173'))]),mediaimgen=await client[_0x32fec3(_0x145427('0x3f3'))](from,wipiaa,MessageType[_0x32fec3(_0x145427('0x345'))],{'thumbnail':wipiaa});let buttonloc2=mediaimgen[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]?mediaimgen[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]:mediaimgen;const buttonshello=_0x32fec3(_0x145427('0x1a1')),buttonsmenu2=[{'buttonId':_0x32fec3(_0x145427('0x432')),'buttonText':{'displayText':''+fakereply},'type':0x1}],buttonsmenuonoff=[{'buttonId':command+_0x32fec3(_0x145427('0x395')),'buttonText':{'displayText':'ON'},'type':0x1},{'buttonId':command+_0x32fec3(_0x145427('0x434')),'buttonText':{'displayText':_0x32fec3(_0x145427('0x250'))},'type':0x1}],sendButtonImageLoc=(_0x5a04ff,_0x56830e,_0x5427a6,_0x22fced=[],_0x43ebaf={})=>{const _0x3ebfb5=_0x145427,_0x22ef98=_0x32fec3,_0x399d4e={'contentText':_0x56830e,'footerText':_0x5427a6,'buttons':_0x22fced,'headerType':0x6,'locationMessage':buttonloc2[_0x22ef98(_0x3ebfb5('0x1a0'))][_0x22ef98(_0x3ebfb5('0x2ca'))]};client[_0x22ef98(_0x3ebfb5('0x36e'))](_0x5a04ff,_0x399d4e,MessageType[_0x22ef98(_0x3ebfb5('0x390'))],_0x43ebaf);},mediaimgenrpg=await client[_0x32fec3(_0x145427('0x3f3'))](from,WMthumb,MessageType[_0x32fec3(_0x145427('0x345'))],{'thumbnail':WMthumb});let buttonlocrpg=mediaimgenrpg[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]?mediaimgenrpg[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]:mediaimgenrpg;const sendButtonRPGLoc=(_0x1459e1,_0x4c6dd9,_0x3257fe,_0xa04eef=[],_0x159d55={})=>{const _0x29374c=_0x145427,_0x10777f=_0x32fec3,_0x3ec12b={'contentText':_0x4c6dd9,'footerText':_0x3257fe,'buttons':_0xa04eef,'headerType':0x6,'locationMessage':buttonlocrpg[_0x10777f(_0x29374c('0x1a0'))][_0x10777f(_0x29374c('0x2ca'))]};client[_0x10777f(_0x29374c('0x36e'))](_0x1459e1,_0x3ec12b,MessageType[_0x10777f(_0x29374c('0x390'))],_0x159d55);},docunye=[_0x32fec3(_0x145427('0x448')),_0x32fec3(_0x145427('0x32f')),_0x32fec3(_0x145427('0x1fe')),_0x32fec3(_0x145427('0x2cc'))];docuney=docunye[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*docunye[_0x32fec3(_0x145427('0x16e'))])];function _0x1203(_0x2677e2,_0x3789cd){const _0x2f25b1=_0x2f25();return _0x1203=function(_0x1203bc,_0x3afebb){_0x1203bc=_0x1203bc-0x126;let _0x20d6b7=_0x2f25b1[_0x1203bc];return _0x20d6b7;},_0x1203(_0x2677e2,_0x3789cd);}const Sendbutdocument=(_0x576aff,_0xef3ecf,_0xfa374f,_0x30c3dc=[],_0xf5e464={})=>{const _0x3bea5f=_0x145427,_0x5ae19b=_0x32fec3,_0x2799c3={'documentMessage':{'url':_0x5ae19b(_0x3bea5f('0x4b6')),'mimetype':docuney,'fileSha256':_0x5ae19b(_0x3bea5f('0x379')),'fileLength':0xe8d4a50fff,'pageCount':0x270f,'mediaKey':_0x5ae19b(_0x3bea5f('0x31c')),'fileName':_0x5ae19b(_0x3bea5f('0x30b'))+kyun(process[_0x5ae19b(_0x3bea5f('0x24e'))]()),'fileEncSha256':_0x5ae19b(_0x3bea5f('0x30c')),'directPath':_0x5ae19b(_0x3bea5f('0x185')),'mediaKeyTimestamp':_0x5ae19b(_0x3bea5f('0x46f')),'jpegThumbnail':wipiaa},'contentText':_0xef3ecf,'footerText':_0xfa374f,'buttons':_0x30c3dc,'headerType':_0x5ae19b(_0x3bea5f('0x1de'))};client[_0x5ae19b(_0x3bea5f('0x36e'))](_0x576aff,_0x2799c3,MessageType[_0x5ae19b(_0x3bea5f('0x390'))],_0xf5e464,{'quoted':ftoko,'contextInfo':{'forwardingScore':0x3e7,'isForwarded':!![],'sendEphemeral':!![]},'sendEphemeral':!![]});};daftarnye=registerimage[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*registerimage[_0x32fec3(_0x145427('0x16e'))])],buffer=await getBuffer(daftarnye),daftarnos=await client[_0x32fec3(_0x145427('0x3f3'))](from,buffer,MessageType[_0x32fec3(_0x145427('0x345'))],{'thumbnail':buffer});let daftarnoss=daftarnos[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]?daftarnos[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x1cd'))]:daftarnos;const sendCatalogMenu=(_0x2171b0,_0x27d137)=>{const _0x45e3af=_0x145427,_0x165085=_0x32fec3;res=client[_0x165085(_0x45e3af('0x3c6'))](from,{'productMessage':{'product':{'productImage':_0x27d137,'productId':_0x165085(_0x45e3af('0x186')),'title':''+hahh,'description':_0x2171b0,'footerText':NamaBot,'currencyCode':_0x165085(_0x45e3af('0x377')),'priceAmount1000':_0x165085(_0x45e3af('0x253')),'productImageCount':0x1,'salePriceAmount1000':_0x165085(_0x45e3af('0x39a'))},'businessOwnerJid':ow,'contextInfo':{'forwardingScore':0x3,'isForwarded':!![]}}},{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,ow,dev]}}),client[_0x165085(_0x45e3af('0x424'))](res);},sendButtonNotRegis=_0xa4aafc=>{const _0x552844=_0x145427,_0x5882b0=_0x32fec3;if(autoregis=!![])addRegisteredUser(sender),setTimeout(()=>{const _0x196b2d=_0x1203,_0x5f5135=_0x5b47,_0x379b81=[{'buttonId':_0x5f5135(_0x196b2d('0x24b')),'buttonText':{'displayText':_0x5f5135(_0x196b2d('0x3bd'))},'type':0x1},{'buttonId':_0x5f5135(_0x196b2d('0x432')),'buttonText':{'displayText':_0x5f5135(_0x196b2d('0x428'))},'type':0x1}],_0x507137={'contentText':_0x5f5135(_0x196b2d('0x420'))+prefix+_0x5f5135(_0x196b2d('0x3c7')),'footerText':support,'buttons':_0x379b81,'headerType':0x6,'locationMessage':daftarnoss[_0x5f5135(_0x196b2d('0x1a0'))][_0x5f5135(_0x196b2d('0x2ca'))]};client[_0x5f5135(_0x196b2d('0x36e'))](from,_0x507137,MessageType[_0x5f5135(_0x196b2d('0x390'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,dev,ow]}});},0x1388),replysticker(waitstc),regisinfo===!![]&&setTimeout(()=>{const _0x5ec97a=_0x1203,_0x28f625=_0x5b47;client[_0x28f625(_0x5ec97a('0x36e'))](ow,_0x28f625(_0x5ec97a('0x280'))+player[_0x28f625(_0x5ec97a('0x243'))]('@')[0x0],text,{'quoted':{'key':{'fromMe':![],'participant':_0x28f625(_0x5ec97a('0x154')),'remoteJid':_0x28f625(_0x5ec97a('0x159'))},'message':{'orderMessage':{'itemCount':''+_registered[_0x28f625(_0x5ec97a('0x16e'))],'status':0xc8,'thumbnail':buffer,'surface':0xc8,'message':_0x28f625(_0x5ec97a('0x30b'))+kyun(process[_0x28f625(_0x5ec97a('0x24e'))]()),'orderTitle':'L','sellerJid':_0x28f625(_0x5ec97a('0x154'))}}},'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player]}});},0x7d0),autobackup===!![]&&setTimeout(()=>{const _0x5e7ce7=_0x1203,_0x1c4f18=_0x5b47;client[_0x1c4f18(_0x5e7ce7('0x36e'))](ow,fs[_0x1c4f18(_0x5e7ce7('0x170'))](_0x1c4f18(_0x5e7ce7('0x457'))),document,{'mimetype':_0x1c4f18(_0x5e7ce7('0x2c9')),'filename':_0x1c4f18(_0x5e7ce7('0x25c'))});},0xbb8),console[_0x5882b0(_0x552844('0x2fd'))](color(_0x5882b0(_0x552844('0x203'))),color(_registered[_0x5882b0(_0x552844('0x16e'))],_0x5882b0(_0x552844('0x366'))),_0x5882b0(_0x552844('0x2a0')),color(sender,_0x5882b0(_0x552844('0x401'))));else{if(autoregis=![]){if(mainmenu==![]){const _0x5f3987=[{'title':_0x5882b0(_0x552844('0x2df')),'description':'','rowId':''}],_0x551670=[{'title':_0x5882b0(_0x552844('0x305')),'description':'','rowId':_0x5882b0(_0x552844('0x16a'))},{'title':_0x5882b0(_0x552844('0x25d')),'description':'','rowId':_0x5882b0(_0x552844('0x234'))},{'title':_0x5882b0(_0x552844('0x227')),'description':'','rowId':_0x5882b0(_0x552844('0x262'))}],_0x211da3=[{'title':_0x5882b0(_0x552844('0x2df')),'rows':_0x5f3987},{'title':_0x5882b0(_0x552844('0x364')),'rows':_0x551670}],_0x1d5cf2={'buttonText':_0x5882b0(_0x552844('0x3da')),'footerText':buttonshello,'description':_0x5882b0(_0x552844('0x128'))+prefix+_0x5882b0(_0x552844('0x2d1')),'sections':_0x211da3,'listType':0x1};replysticker(daftarstc),setTimeout(()=>{const _0x1ce850=_0x552844,_0x28562c=_0x5882b0;client[_0x28562c(_0x1ce850('0x36e'))](_0xa4aafc,_0x1d5cf2,MessageType[_0x28562c(_0x1ce850('0x3dc'))],{'quoted':mek,'thumbnail':WMthumb,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});},0xbb8);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,_0x5882b0(_0x552844('0x128'))+prefix+_0x5882b0(_0x552844('0x2d1')),daftar3,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});}}},getpc=async function(_0x23b4a4){const _0x35782f=_0x145427,_0x2fd9ab=_0x32fec3;let _0x14d244=[],_0x4bbeb8=[],_0x138adc=[];for(c of _0x23b4a4){_0x4bbeb8[_0x2fd9ab(_0x35782f('0x1bc'))](c[_0x2fd9ab(_0x35782f('0x48b'))]);}for(d of _0x4bbeb8){d&&!d[_0x2fd9ab(_0x35782f('0x4a7'))](_0x2fd9ab(_0x35782f('0x19e')))&&_0x138adc[_0x2fd9ab(_0x35782f('0x1bc'))](d);}return _0x138adc;},getGroup=async function(_0xa32fd7){const _0x2e54d3=_0x145427,_0x2e04f7=_0x32fec3;let _0x1a074b=[],_0x5f4e95=[],_0x526973=[];for(c of _0xa32fd7){_0x5f4e95[_0x2e04f7(_0x2e54d3('0x1bc'))](c[_0x2e04f7(_0x2e54d3('0x48b'))]);}for(d of _0x5f4e95){d&&d[_0x2e04f7(_0x2e54d3('0x4a7'))](_0x2e04f7(_0x2e54d3('0x19e')))&&_0x526973[_0x2e04f7(_0x2e54d3('0x1bc'))](d);}for(e of _0x526973){let _0x3ad849=await client[_0x2e04f7(_0x2e54d3('0x166'))](e);_0x1a074b[_0x2e04f7(_0x2e54d3('0x1bc'))](_0x3ad849);}return _0x1a074b;};let ii=[],giid=[];for(mem of totalchat){ii[_0x32fec3(_0x145427('0x1bc'))](mem[_0x32fec3(_0x145427('0x48b'))]);}for(id of ii){id&&id[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x19e')))&&giid[_0x32fec3(_0x145427('0x1bc'))](id);}const timestampi=speed(),latensii=speed()-timestampi,latensiii=latensii[_0x32fec3(_0x145427('0x422'))](0x4)+_0x32fec3(_0x145427('0x49f')),ini_gcchat=''+giid[_0x32fec3(_0x145427('0x16e'))],uptime=process[_0x32fec3(_0x145427('0x24e'))](),tekss=''+kyun(uptime),ini_totalchat=''+(totalchat[_0x32fec3(_0x145427('0x16e'))]-giid[_0x32fec3(_0x145427('0x249'))]);var chats=await client[_0x32fec3(_0x145427('0x46a'))][_0x32fec3(_0x145427('0x381'))][_0x32fec3(_0x145427('0x363'))](_0x22de31=>_0x22de31[_0x32fec3(_0x145427('0x48b'))][_0x32fec3(_0x145427('0x15d'))](_0x32fec3(_0x145427('0x19e'))));chats[_0x32fec3(_0x145427('0x361'))](async({jid:_0x478b58})=>{const _0x4f8e67=_0x145427,_0x5f1789=_0x32fec3;if(readG===![])return;await client[_0x5f1789(_0x4f8e67('0x19f'))](_0x478b58);});var chatss=await client[_0x32fec3(_0x145427('0x46a'))][_0x32fec3(_0x145427('0x381'))][_0x32fec3(_0x145427('0x363'))](_0x460bde=>_0x460bde[_0x32fec3(_0x145427('0x48b'))][_0x32fec3(_0x145427('0x15d'))](_0x32fec3(_0x145427('0x4ac'))));chatss[_0x32fec3(_0x145427('0x361'))](async({jid:_0x4ce93f})=>{const _0x1943c8=_0x145427,_0x34da7f=_0x32fec3;if(readP===![])return;await client[_0x34da7f(_0x1943c8('0x19f'))](_0x4ce93f);});var prefi=pref;multi&&(prefi=_0x32fec3(_0x145427('0x22a')));if(autorespon===!![])for(let i=0x0;i<commandsrespon[_0x32fec3(_0x145427('0x16e'))];i++){budy==commandsrespon[i][_0x32fec3(_0x145427('0x29b'))]&&client[_0x32fec3(_0x145427('0x36e'))](from,commandsrespon[i][_0x32fec3(_0x145427('0x1e4'))],text,{'quoted':mek});}autobackup===!![]&&setTimeout(()=>{const _0x5a0bd3=_0x145427,_0x1a5424=_0x32fec3;fs[_0x1a5424(_0x5a0bd3('0x170'))](_0x1a5424(_0x5a0bd3('0x457')));},0x2dc6c0);for(let anji of setiker){budy===anji&&(result=fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x197'))+anji+_0x32fec3(_0x145427('0x48d'))),client[_0x32fec3(_0x145427('0x36e'))](from,result,sticker,{'quoted':mek}));}for(let anju of audionye){budy===anju&&(result=fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x2a8'))+anju+_0x32fec3(_0x145427('0x469'))),client[_0x32fec3(_0x145427('0x36e'))](from,result,audio,{'mimetype':_0x32fec3(_0x145427('0x299')),'ptt':!![],'quoted':mek}));}for(let anjh of imagenye){budy===anjh&&(result=fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x2ef'))+anjh+_0x32fec3(_0x145427('0x1da'))),client[_0x32fec3(_0x145427('0x36e'))](from,result,image,{'thumbnail':Buffer[_0x32fec3(_0x145427('0x1b0'))](0x0),'quoted':mek}));}for(let anje of videonye){budy===anje&&(result=fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x1ff'))+anje+_0x32fec3(_0x145427('0x319'))),client[_0x32fec3(_0x145427('0x36e'))](from,result,video,{'quoted':mek}));}if(bad[_0x32fec3(_0x145427('0x4a7'))](messagesC)){if(!isGroup)return;if(!isBadWord)return;if(isGroupAdmins)return reply(_0x32fec3(_0x145427('0x267')));client[_0x32fec3(_0x145427('0x3ee'))](from,Presence[_0x32fec3(_0x145427('0x4b1'))]);var kic=sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x1a4'));teks=_0x32fec3(_0x145427('0x427'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x13a')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x39e038=_0x145427,_0x2c7df7=_0x32fec3;client[_0x2c7df7(_0x39e038('0x36e'))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x38a5c3=_0x145427,_0x3c8584=_0x32fec3;client[_0x3c8584(_0x38a5c3('0x3d4'))](from,[kic])[_0x3c8584(_0x38a5c3('0x1ce'))](_0x44f381=>{const _0x3719da=_0x38a5c3,_0x46c7ae=_0x3c8584;reply(_0x46c7ae(_0x3719da('0x2a2'))+_0x44f381);});},0x1388),setTimeout(()=>{const _0x21f35b=_0x145427,_0x328fe0=_0x32fec3;client[_0x328fe0(_0x21f35b('0x3ee'))](from,Presence[_0x328fe0(_0x21f35b('0x4b1'))]),replysticker(leavestc);},0xbb8);}if(m[_0x32fec3(_0x145427('0x1a0'))]&&m[_0x32fec3(_0x145427('0x1d2'))]&&m[_0x32fec3(_0x145427('0x254'))]&&m[_0x32fec3(_0x145427('0x254'))][_0x32fec3(_0x145427('0x291'))]===_0x32fec3(_0x145427('0x39d'))&&!(m[_0x32fec3(_0x145427('0x254'))][_0x32fec3(_0x145427('0x1eb'))]&&m[_0x32fec3(_0x145427('0x254'))][_0x32fec3(_0x145427('0x49e'))])){if(antitrol===![])return;if(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x205'))])return;replysticker(trolistc),await client[_0x32fec3(_0x145427('0x41e'))](m[_0x32fec3(_0x145427('0x48c'))],_0x32fec3(_0x145427('0x1c7')),{'includeStarred':![]});}if(isMuted){if(!isGroupAdmins&&!isOwner&&!mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x205'))])return;}if(budy[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x4b8')))){if(!isGroup)return;if(AntiLink)return;if(!isBotGroupAdmins)return;if(isGroupAdmins)return reply(_0x32fec3(_0x145427('0x27d')));if(isOwner)return;client[_0x32fec3(_0x145427('0x3ee'))](from,Presence[_0x32fec3(_0x145427('0x4b1'))]);if(messagesC[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x2b6'))))return reply(_0x32fec3(_0x145427('0x23b')));var kic=sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x1a4'));teks=_0x32fec3(_0x145427('0x327'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x13a')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x146ecb=_0x145427,_0x53b49d=_0x32fec3;client[_0x53b49d(_0x146ecb('0x36e'))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x294705=_0x145427,_0x55524=_0x32fec3;client[_0x55524(_0x294705('0x3d4'))](from,[kic])[_0x55524(_0x294705('0x1ce'))](_0x743025=>{const _0x504869=_0x294705,_0x582c14=_0x55524;reply(_0x582c14(_0x504869('0x2a2'))+_0x743025);});},0x1388),setTimeout(()=>{const _0x44ede7=_0x145427,_0x2635e7=_0x32fec3;client[_0x2635e7(_0x44ede7('0x3ee'))](from,Presence[_0x2635e7(_0x44ede7('0x4b1'))]),replysticker(leavestc);},0xbb8);}if(budy[_0x32fec3(_0x145427('0x16e'))]>0x2710){if(!isGroup)return;if(isAntiVirtex)return;if(!isBotGroupAdmins)return;if(isGroupAdmins)return reply(_0x32fec3(_0x145427('0x1cc')));client[_0x32fec3(_0x145427('0x3ee'))](from,Presence[_0x32fec3(_0x145427('0x4b1'))]);if(messagesC[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x2b6'))))return reply(_0x32fec3(_0x145427('0x23b')));sendButtonImageLoc(from,antivirtexx(),support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}}),sendButtonImageLoc(from,antivirtexx(),support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});var kic=sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x1a4'));teks=_0x32fec3(_0x145427('0x355'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x13a')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[sender]}}),setTimeout(()=>{const _0x2c907d=_0x145427,_0x1d2a2a=_0x32fec3;client[_0x1d2a2a(_0x2c907d('0x36e'))](from,kickstc,sticker,{'quoted':mek,'contextInfo':{'sendEphemeral':!![]}});},0x3e8),setTimeout(()=>{const _0x4768b4=_0x145427,_0x21b2cf=_0x32fec3;client[_0x21b2cf(_0x4768b4('0x3d4'))](from,[kic])[_0x21b2cf(_0x4768b4('0x1ce'))](_0x5ee77f=>{const _0x59d3a3=_0x4768b4,_0x1b0318=_0x21b2cf;reply(_0x1b0318(_0x59d3a3('0x2a2'))+_0x5ee77f);});},0x1388),setTimeout(()=>{const _0x565cdd=_0x145427,_0x25e019=_0x32fec3;client[_0x25e019(_0x565cdd('0x3ee'))](from,Presence[_0x25e019(_0x565cdd('0x4b1'))]),replysticker(leavestc);},0xbb8);}autocomposing===!![]&&client[_0x32fec3(_0x145427('0x3ee'))](from,Presence[_0x32fec3(_0x145427('0x4b1'))]),autorecording===!![]&&client[_0x32fec3(_0x145427('0x3ee'))](from,Presence[_0x32fec3(_0x145427('0x136'))]);if(tictactoe[_0x32fec3(_0x145427('0x19c'))](senderNumber)&&[_0x32fec3(_0x145427('0x238')),_0x32fec3(_0x145427('0x258'))][_0x32fec3(_0x145427('0x4a7'))](budy)&&!isCmd)return orangnye=sender,teks='@'+orangnye[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x1ef')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[orangnye]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x28933a=_0x145427,_0x8e6173=_0x32fec3;delete tictactoe[senderNumber],fs[_0x8e6173(_0x28933a('0x33a'))](_0x8e6173(_0x28933a('0x281')),JSON[_0x8e6173(_0x28933a('0x279'))](tictactoe)),fs[_0x8e6173(_0x28933a('0x47f'))](_0x8e6173(_0x28933a('0x195'))+from+_0x8e6173(_0x28933a('0x1df')));});if(tictactoe[_0x32fec3(_0x145427('0x19c'))](senderNumber)&&['1','2','3','4','5','6','7','8','9'][_0x32fec3(_0x145427('0x4a7'))](budy)&&!isCmd){var {enemy,mode,board,step}=tictactoe[senderNumber];if([X,O][_0x32fec3(_0x145427('0x4a7'))](board[Number(budy)-0x1]))return await reply(_0x32fec3(_0x145427('0x371'))+budy+_0x32fec3(_0x145427('0x257')));var data=tictactoe[senderNumber];data[_0x32fec3(_0x145427('0x415'))]=senderNumber,mode=mode==X?O:X,data[_0x32fec3(_0x145427('0x446'))]=mode,data[_0x32fec3(_0x145427('0x385'))][Number(budy)-0x1]=data[_0x32fec3(_0x145427('0x446'))],data[_0x32fec3(_0x145427('0x34b'))]+=0x1;var player1=enemy,player2=senderNumber;step%0x2==0x0?(player1=senderNumber,player2=enemy):mode=data[_0x32fec3(_0x145427('0x446'))]==X?O:X,(tictactoe[enemy]=data,delete tictactoe[senderNumber]);var teks=_0x32fec3(_0x145427('0x216'))+player1[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+'\x20('+mode+')';mode=mode==X?O:X;var text2=_0x32fec3(_0x145427('0x455'))+player2[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+'\x20('+mode+')',test=_0x32fec3(_0x145427('0x359'));board=await generateBoard(data[_0x32fec3(_0x145427('0x385'))]);var win=await getWin(data[_0x32fec3(_0x145427('0x385'))]);if(win)return teks=_0x32fec3(_0x145427('0x32c')),win==mode?(teks+=_0x32fec3(_0x145427('0x270'))+player1+_0x32fec3(_0x145427('0x146')),teks+=board,teks+=_0x32fec3(_0x145427('0x392'))+player2+_0x32fec3(_0x145427('0x406')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x32fec3(_0x145427('0x1a4')),player2+_0x32fec3(_0x145427('0x1a4'))]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x20ddfa=_0x145427,_0x3e3f5c=_0x32fec3;delete tictactoe[enemy],fs[_0x3e3f5c(_0x20ddfa('0x33a'))](_0x3e3f5c(_0x20ddfa('0x281')),JSON[_0x3e3f5c(_0x20ddfa('0x279'))](tictactoe)),fs[_0x3e3f5c(_0x20ddfa('0x47f'))](_0x3e3f5c(_0x20ddfa('0x195'))+from+_0x3e3f5c(_0x20ddfa('0x1df'))),getWins(player2+_0x3e3f5c(_0x20ddfa('0x1a4')),0x1),getLose(player1+_0x3e3f5c(_0x20ddfa('0x1a4')),0x1);})):(teks+=_0x32fec3(_0x145427('0x459'))+player1+_0x32fec3(_0x145427('0x209')),teks+=board,teks+=_0x32fec3(_0x145427('0x475'))+player2+_0x32fec3(_0x145427('0x13b')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x32fec3(_0x145427('0x1a4')),player2+_0x32fec3(_0x145427('0x1a4'))]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x2677b9=_0x145427,_0x3284c5=_0x32fec3;delete tictactoe[enemy],fs[_0x3284c5(_0x2677b9('0x33a'))](_0x3284c5(_0x2677b9('0x281')),JSON[_0x3284c5(_0x2677b9('0x279'))](tictactoe)),fs[_0x3284c5(_0x2677b9('0x47f'))](_0x3284c5(_0x2677b9('0x195'))+from+_0x3284c5(_0x2677b9('0x1df'))),getWins(player1+_0x3284c5(_0x2677b9('0x1a4')),0x1),getLose(player2+_0x3284c5(_0x2677b9('0x1a4')),0x1);}));if(data[_0x32fec3(_0x145427('0x34b'))]==0x9)return teks=_0x32fec3(_0x145427('0x32c')),teks+=_0x32fec3(_0x145427('0x1aa'))+player1+_0x32fec3(_0x145427('0x1b9')),teks+=board,teks+=_0x32fec3(_0x145427('0x3b5'))+player2+_0x32fec3(_0x145427('0x357')),client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x32fec3(_0x145427('0x1a4')),player2+_0x32fec3(_0x145427('0x1a4'))]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x2091a7=_0x145427,_0x5d5cb0=_0x32fec3;delete tictactoe[enemy],fs[_0x5d5cb0(_0x2091a7('0x33a'))](_0x5d5cb0(_0x2091a7('0x281')),JSON[_0x5d5cb0(_0x2091a7('0x279'))](tictactoe)),fs[_0x5d5cb0(_0x2091a7('0x47f'))](_0x5d5cb0(_0x2091a7('0x195'))+from+_0x5d5cb0(_0x2091a7('0x1df')));});return player2==senderNumber?teks+=tunjuk:text2+=tunjuk,teks+='\x0a',teks+=board,teks+=text2,teks+=test,client[_0x32fec3(_0x145427('0x36e'))](from,teks,text,{'quoted':mek,'contextInfo':{'mentionedJid':[player1+_0x32fec3(_0x145427('0x1a4')),player2+_0x32fec3(_0x145427('0x1a4'))]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x4f9eb9=_0x145427,_0x1288ff=_0x32fec3;fs[_0x1288ff(_0x4f9eb9('0x33a'))](_0x1288ff(_0x4f9eb9('0x281')),JSON[_0x1288ff(_0x4f9eb9('0x279'))](tictactoe));});}if(fs[_0x32fec3(_0x145427('0x38b'))](_0x32fec3(_0x145427('0x195'))+from+_0x32fec3(_0x145427('0x1df')))){tttSkuy=setTtt(''+from);if(sender==tttSkuy['Y']+_0x32fec3(_0x145427('0x1a4'))&&budy[_0x32fec3(_0x145427('0x43d'))]()=='y'){if(tttSkuy[_0x32fec3(_0x145427('0x3db'))])return reply(_0x32fec3(_0x145427('0x33c')));tttSkuy[_0x32fec3(_0x145427('0x3db'))]=!![],rand0m=[tttSkuy['Z'],tttSkuy['Y']],winR=rand0m[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*rand0m[_0x32fec3(_0x145427('0x16e'))])],fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x195'))+from+_0x32fec3(_0x145427('0x1df')),JSON[_0x32fec3(_0x145427('0x279'))](tttSkuy,null,0x2)),nantang=O,pelawan=X;var board=[_0x32fec3(_0x145427('0x259')),_0x32fec3(_0x145427('0x38d')),_0x32fec3(_0x145427('0x1c9')),_0x32fec3(_0x145427('0x211')),_0x32fec3(_0x145427('0x22d')),_0x32fec3(_0x145427('0x456')),_0x32fec3(_0x145427('0x1f9')),_0x32fec3(_0x145427('0x3d9')),_0x32fec3(_0x145427('0x2b0'))],penantang=tttSkuy['Z']+_0x32fec3(_0x145427('0x1a4')),lawan=tttSkuy['Y']+_0x32fec3(_0x145427('0x1a4'));tesk=_0x32fec3(_0x145427('0x216'))+penantang[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+'\x20('+nantang+')\x20'+tunjuk+'\x0a';var count=0x0;for(var x of board){count%0x3==0x0&&(tesk+=_0x32fec3(_0x145427('0x3aa'))),tesk+=x,count+=0x1;}tesk+=_0x32fec3(_0x145427('0x455'))+lawan[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+'\x20('+pelawan+_0x32fec3(_0x145427('0x3f8'));return client[_0x32fec3(_0x145427('0x36e'))](from,tesk,text,{'quoted':mek,'contextInfo':{'mentionedJid':[penantang,lawan]}})[_0x32fec3(_0x145427('0x4b7'))](()=>{const _0x12b1cb=_0x145427,_0x2b6421=_0x32fec3;var _0x583799={};_0x583799[_0x2b6421(_0x12b1cb('0x415'))]=lawan[_0x2b6421(_0x12b1cb('0x243'))]('@')[0x0],_0x583799[_0x2b6421(_0x12b1cb('0x446'))]=pelawan,_0x583799[_0x2b6421(_0x12b1cb('0x385'))]=board,_0x583799[_0x2b6421(_0x12b1cb('0x34b'))]=0x0,tictactoe[penantang[_0x2b6421(_0x12b1cb('0x243'))]('@')[0x0]]=_0x583799,fs[_0x2b6421(_0x12b1cb('0x33a'))](_0x2b6421(_0x12b1cb('0x281')),JSON[_0x2b6421(_0x12b1cb('0x279'))](tictactoe));});fs[_0x32fec3(_0x145427('0x47f'))](_0x32fec3(_0x145427('0x195'))+from+_0x32fec3(_0x145427('0x1df')));}else sender==tttSkuy['Y']+_0x32fec3(_0x145427('0x1a4'))&&budy[_0x32fec3(_0x145427('0x43d'))]()=='n'&&(client[_0x32fec3(_0x145427('0x36e'))](from,_0x32fec3(_0x145427('0x44e'))+tttSkuy['Y']+_0x32fec3(_0x145427('0x21e')),text,{'quoted':mek,'contextInfo':{'mentionedJid':[tttSkuy['Y']+_0x32fec3(_0x145427('0x1a4'))]}}),fs[_0x32fec3(_0x145427('0x47f'))](_0x32fec3(_0x145427('0x195'))+from+_0x32fec3(_0x145427('0x1df'))));}cekafk(afk);if(!mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))][_0x32fec3(_0x145427('0x15d'))](_0x32fec3(_0x145427('0x217')))&&offline){if(!isOwner){if(isAfk(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))]))return;addafk(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))]),heheh=ms(Date[_0x32fec3(_0x145427('0x4b3'))]()-waktu),client[_0x32fec3(_0x145427('0x36e'))](mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))],ind[_0x32fec3(_0x145427('0x3e0'))](prefix,player,ow,trakteer,saweria,donasi,rekening)+support,MessageType[_0x32fec3(_0x145427('0x3be'))],{'contextInfo':{'mentionedJid':[player,ow,numbernye],'stanzaId':_0x32fec3(_0x145427('0x184')),'participant':_0x32fec3(_0x145427('0x154')),'remoteJid':_0x32fec3(_0x145427('0x278')),'quotedMessage':{'imageMessage':{'caption':fake,'jpegThumbnail':WMthumb}}}});}}if(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))][_0x32fec3(_0x145427('0x15d'))](_0x32fec3(_0x145427('0x217')))&&offline){if(!isOwner){if(mek[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x442'))]!=undefined){if(mek[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x442'))][_0x32fec3(_0x145427('0x368'))]!=undefined){if(mek[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x442'))][_0x32fec3(_0x145427('0x368'))][_0x32fec3(_0x145427('0x18e'))]!=undefined)for(let ment of mek[_0x32fec3(_0x145427('0x1a0'))][_0x32fec3(_0x145427('0x442'))][_0x32fec3(_0x145427('0x368'))][_0x32fec3(_0x145427('0x18e'))]){if(ment===owner+_0x32fec3(_0x145427('0x1a4'))){if(isAfk(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))]))return;addafk(mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))]),heheh=ms(Date[_0x32fec3(_0x145427('0x4b3'))]()-waktu),client[_0x32fec3(_0x145427('0x36e'))](mek[_0x32fec3(_0x145427('0x445'))][_0x32fec3(_0x145427('0x496'))],ind[_0x32fec3(_0x145427('0x3e0'))](prefix,player,ow,trakteer,saweria,donasi,rekening)+support,MessageType[_0x32fec3(_0x145427('0x3be'))],{'contextInfo':{'mentionedJid':[player,ow,numbernye],'stanzaId':_0x32fec3(_0x145427('0x184')),'participant':_0x32fec3(_0x145427('0x154')),'remoteJid':_0x32fec3(_0x145427('0x278')),'quotedMessage':{'imageMessage':{'caption':fake,'jpegThumbnail':WMthumb}}}});}}}}}}tebakgambar[_0x32fec3(_0x145427('0x19c'))](sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebakgambar[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],budy[_0x32fec3(_0x145427('0x43d'))]()==jawaban&&(await sendButtonText(from,_0x32fec3(_0x145427('0x3ad'))+prefix+_0x32fec3(_0x145427('0x326')),_0x32fec3(_0x145427('0x212')),[{'buttonId':''+command,'buttonText':{'displayText':_0x32fec3(_0x145427('0x2f7'))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),delete tebakgambar[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x228')),JSON[_0x32fec3(_0x145427('0x279'))](tebakgambar)))),tebaksiapaaku[_0x32fec3(_0x145427('0x19c'))](sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebaksiapaaku[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],budy[_0x32fec3(_0x145427('0x43d'))]()==jawaban&&(await reply(_0x32fec3(_0x145427('0x472'))+(prefix+command)+'*'),delete tebaksiapaaku[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x1af')),JSON[_0x32fec3(_0x145427('0x279'))](tebaksiapaaku)))),tebakcaklontong[_0x32fec3(_0x145427('0x19c'))](sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0])&&!isCmd&&(kuis=!![],jawaban=tebakcaklontong[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],budy[_0x32fec3(_0x145427('0x43d'))]()==jawaban&&(await sendButtonText(from,_0x32fec3(_0x145427('0x384'))+prefix+_0x32fec3(_0x145427('0x326')),_0x32fec3(_0x145427('0x212')),[{'buttonId':''+command,'buttonText':{'displayText':_0x32fec3(_0x145427('0x2f7'))},'type':0x1}],{'quoted':mek,'contextInfo':{'mentionedJid':[numbernye,ow,player]}}),delete tebakcaklontong[sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]],fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x172')),JSON[_0x32fec3(_0x145427('0x279'))](tebakcaklontong))));if(isGroup&&!isVote){if(budy[_0x32fec3(_0x145427('0x43d'))]()===_0x32fec3(_0x145427('0x414'))){let vote=JSON[_0x32fec3(_0x145427('0x1ee'))](fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x1e6'))+from+_0x32fec3(_0x145427('0x1df')))),_votes=JSON[_0x32fec3(_0x145427('0x1ee'))](fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x1e6'))+from+_0x32fec3(_0x145427('0x1df')))),fil=vote[_0x32fec3(_0x145427('0x361'))](_0x42b1db=>_0x42b1db[_0x32fec3(_0x145427('0x365'))]),id_vote=sender?sender:_0x32fec3(_0x145427('0x44b'));if(fil[_0x32fec3(_0x145427('0x4a7'))](id_vote))return mentions('@'+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x19b')),fil,!![]);else{vote[_0x32fec3(_0x145427('0x1bc'))]({'participant':id_vote,'voting':'✅'}),fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x1e6'))+from+_0x32fec3(_0x145427('0x1df')),JSON[_0x32fec3(_0x145427('0x279'))](vote));let _p=[],_vote=_0x32fec3(_0x145427('0x235'))+'@'+_votes[0x0][_0x32fec3(_0x145427('0x1bb'))][_0x32fec3(_0x145427('0x243'))]('@')[0x0]+(_0x32fec3(_0x145427('0x1ba'))+_votes[0x0][_0x32fec3(_0x145427('0x3fb'))]+_0x32fec3(_0x145427('0x18f'))+vote[_0x32fec3(_0x145427('0x16e'))]+_0x32fec3(_0x145427('0x2a9'))+_votes[0x0][_0x32fec3(_0x145427('0x28d'))]+_0x32fec3(_0x145427('0x354')));for(let i=0x0;i<vote[_0x32fec3(_0x145427('0x16e'))];i++){_vote+='@'+vote[i][_0x32fec3(_0x145427('0x365'))][_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x194'))+vote[i][_0x32fec3(_0x145427('0x32d'))]+'\x0a\x0a',_p[_0x32fec3(_0x145427('0x1bc'))](vote[i][_0x32fec3(_0x145427('0x365'))]);}_p[_0x32fec3(_0x145427('0x1bc'))](_votes[0x0][_0x32fec3(_0x145427('0x1bb'))]),mentions(_vote,_p,!![]);}}else{if(budy[_0x32fec3(_0x145427('0x43d'))]()===_0x32fec3(_0x145427('0x147'))){const vote=JSON[_0x32fec3(_0x145427('0x1ee'))](fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x1e6'))+from+_0x32fec3(_0x145427('0x1df'))));let _votes=JSON[_0x32fec3(_0x145427('0x1ee'))](fs[_0x32fec3(_0x145427('0x170'))](_0x32fec3(_0x145427('0x399'))+from+_0x32fec3(_0x145427('0x1df')))),fil=vote[_0x32fec3(_0x145427('0x361'))](_0x2c11b4=>_0x2c11b4[_0x32fec3(_0x145427('0x365'))]),id_vote=sender?sender:_0x32fec3(_0x145427('0x44b'));if(fil[_0x32fec3(_0x145427('0x4a7'))](id_vote))return mentions('@'+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x19b')),fil,!![]);else{vote[_0x32fec3(_0x145427('0x1bc'))]({'participant':id_vote,'voting':'❌'}),fs[_0x32fec3(_0x145427('0x33a'))](_0x32fec3(_0x145427('0x1e6'))+from+_0x32fec3(_0x145427('0x1df')),JSON[_0x32fec3(_0x145427('0x279'))](vote));let _p=[],_vote=_0x32fec3(_0x145427('0x235'))+'@'+_votes[0x0][_0x32fec3(_0x145427('0x1bb'))][_0x32fec3(_0x145427('0x243'))]('@')[0x0]+(_0x32fec3(_0x145427('0x1ba'))+_votes[0x0][_0x32fec3(_0x145427('0x3fb'))]+_0x32fec3(_0x145427('0x18f'))+vote[_0x32fec3(_0x145427('0x16e'))]+_0x32fec3(_0x145427('0x2a9'))+_votes[0x0][_0x32fec3(_0x145427('0x28d'))]+_0x32fec3(_0x145427('0x354')));for(let i=0x0;i<vote[_0x32fec3(_0x145427('0x16e'))];i++){_vote+='@'+vote[i][_0x32fec3(_0x145427('0x365'))][_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x194'))+vote[i][_0x32fec3(_0x145427('0x32d'))]+'\x0a\x0a',_p[_0x32fec3(_0x145427('0x1bc'))](vote[i][_0x32fec3(_0x145427('0x365'))]);}_p[_0x32fec3(_0x145427('0x1bc'))](_votes[0x0][_0x32fec3(_0x145427('0x1bb'))]),mentions(_vote,_p,!![]);}}}}var angka='1';isPremium&&(angka='0'),isOwner&&(angka='0');if(isGroup&&isRegistered){const currentLevel=getLevelingLevel(sender),checkId=checkRegisteredUser(sender);try{if(currentLevel===undefined&&checkId===undefined)return reply(ind[_0x32fec3(_0x145427('0x12c'))]());const amountXp=Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*0x1)+0x0,requiredXp=0xa*(Math[_0x32fec3(_0x145427('0x43f'))](0x2,currentLevel)-0x1),getLevel=getLevelingLevel(sender);addLevelingXp(sender,amountXp),requiredXp<=getLevelingXp(sender)&&(addLevelingLevel(sender,0x1),addLimitUser(sender,0xa),await reply(ind[_0x32fec3(_0x145427('0x3ea'))](pushname,sender,player,getLevelingXp,getLevel,getLevelingLevel,role)));}catch(_0x5439f1){console[_0x32fec3(_0x145427('0x40f'))](_0x5439f1);}}const levelRole=getLevelingLevel(sender);function _0x5b29(){const _0x240310=_0x145427,_0x2dd665=[_0x240310('0x2db'),_0x240310('0x3f5'),_0x240310('0x222'),_0x240310('0x282'),_0x240310('0x275'),_0x240310('0x21a'),_0x240310('0x3f7'),_0x240310('0x2fc'),_0x240310('0x22f'),_0x240310('0x483'),_0x240310('0x30e'),_0x240310('0x2c6'),_0x240310('0x1a3'),_0x240310('0x325'),_0x240310('0x391'),_0x240310('0x1e3'),_0x240310('0x2d5'),_0x240310('0x1a2'),_0x240310('0x471'),_0x240310('0x462'),_0x240310('0x26c'),_0x240310('0x495'),_0x240310('0x296'),_0x240310('0x341'),_0x240310('0x298'),_0x240310('0x24c'),_0x240310('0x473'),_0x240310('0x2cb'),_0x240310('0x407'),_0x240310('0x3a1'),_0x240310('0x336'),_0x240310('0x2d4'),_0x240310('0x2fa'),_0x240310('0x3ae'),_0x240310('0x28b'),_0x240310('0x474'),_0x240310('0x152'),_0x240310('0x2de'),_0x240310('0x431'),_0x240310('0x189'),_0x240310('0x3a6'),_0x240310('0x231'),_0x240310('0x272'),_0x240310('0x14b'),_0x240310('0x3ff'),_0x240310('0x45d'),_0x240310('0x3f1'),_0x240310('0x2ed'),_0x240310('0x423'),_0x240310('0x21f'),_0x240310('0x348'),_0x240310('0x331'),_0x240310('0x1be'),_0x240310('0x425'),_0x240310('0x135'),_0x240310('0x398'),_0x240310('0x144'),_0x240310('0x2e7'),_0x240310('0x1c8'),_0x240310('0x47e'),_0x240310('0x2b3'),_0x240310('0x133'),_0x240310('0x485'),_0x240310('0x4a1'),_0x240310('0x225'),_0x240310('0x467'),_0x240310('0x36d'),_0x240310('0x1bf'),_0x240310('0x178'),_0x240310('0x470'),_0x240310('0x213'),_0x240310('0x48a'),_0x240310('0x35b'),_0x240310('0x16b'),_0x240310('0x374'),_0x240310('0x4a0'),_0x240310('0x1fb'),_0x240310('0x3b3'),_0x240310('0x12a'),_0x240310('0x239'),_0x240310('0x2c0'),_0x240310('0x497'),_0x240310('0x3bc'),_0x240310('0x2e0'),_0x240310('0x1d4'),_0x240310('0x2e8'),_0x240310('0x468'),_0x240310('0x370'),_0x240310('0x230'),_0x240310('0x175'),_0x240310('0x465'),_0x240310('0x2b9'),_0x240310('0x2d8'),_0x240310('0x430'),_0x240310('0x2e2'),_0x240310('0x220'),_0x240310('0x449'),_0x240310('0x34d'),_0x240310('0x20f'),_0x240310('0x2ff'),_0x240310('0x378'),_0x240310('0x3ce'),_0x240310('0x337'),_0x240310('0x31f'),_0x240310('0x4a8'),_0x240310('0x26d'),_0x240310('0x25b'),_0x240310('0x44d'),_0x240310('0x416'),_0x240310('0x2fb'),_0x240310('0x2ce'),_0x240310('0x300'),_0x240310('0x362'),_0x240310('0x1cb'),_0x240310('0x176'),_0x240310('0x1d9'),_0x240310('0x1d8'),_0x240310('0x403'),_0x240310('0x4b4'),_0x240310('0x293'),_0x240310('0x188'),_0x240310('0x1b3'),_0x240310('0x1dc'),_0x240310('0x141'),_0x240310('0x3d5'),_0x240310('0x443'),_0x240310('0x3a3'),_0x240310('0x2c4'),_0x240310('0x2cd'),_0x240310('0x375'),_0x240310('0x214'),_0x240310('0x460'),_0x240310('0x27e'),_0x240310('0x36b'),_0x240310('0x1e7'),_0x240310('0x1d3'),_0x240310('0x3dd'),_0x240310('0x143'),_0x240310('0x32a'),_0x240310('0x36c'),_0x240310('0x16d'),_0x240310('0x3a7'),_0x240310('0x461'),_0x240310('0x2af'),_0x240310('0x38f'),_0x240310('0x3ef'),_0x240310('0x2d0'),_0x240310('0x1c4'),_0x240310('0x4a4'),_0x240310('0x22b'),_0x240310('0x200'),_0x240310('0x2c3'),_0x240310('0x2be'),_0x240310('0x2e5'),_0x240310('0x23d'),_0x240310('0x196'),_0x240310('0x311'),_0x240310('0x2a4'),_0x240310('0x45c'),_0x240310('0x387'),_0x240310('0x2ae'),_0x240310('0x413'),_0x240310('0x3df'),_0x240310('0x153'),_0x240310('0x42c'),_0x240310('0x33d'),_0x240310('0x37f'),_0x240310('0x191'),_0x240310('0x193'),_0x240310('0x126'),_0x240310('0x3de'),_0x240310('0x39e'),_0x240310('0x41c'),_0x240310('0x23c'),_0x240310('0x478'),_0x240310('0x237'),_0x240310('0x31e'),_0x240310('0x148'),_0x240310('0x20b'),_0x240310('0x2bf'),_0x240310('0x162'),_0x240310('0x1d7'),_0x240310('0x484'),_0x240310('0x49a'),_0x240310('0x4aa'),_0x240310('0x454'),_0x240310('0x15b'),_0x240310('0x3e9'),_0x240310('0x43c'),_0x240310('0x3d8'),_0x240310('0x129'),_0x240310('0x157'),_0x240310('0x15f'),_0x240310('0x408'),_0x240310('0x12e'),_0x240310('0x18b'),_0x240310('0x1a5'),_0x240310('0x389'),_0x240310('0x285'),_0x240310('0x32e'),_0x240310('0x21c'),_0x240310('0x25e'),_0x240310('0x487'),_0x240310('0x314'),_0x240310('0x3bb'),_0x240310('0x2f9'),_0x240310('0x421'),_0x240310('0x329'),_0x240310('0x339'),_0x240310('0x2ad'),_0x240310('0x380'),_0x240310('0x1d6'),_0x240310('0x1f8'),_0x240310('0x338'),_0x240310('0x45b'),_0x240310('0x2a6'),_0x240310('0x499'),_0x240310('0x17e'),_0x240310('0x3c9'),_0x240310('0x255'),_0x240310('0x30f'),_0x240310('0x14a'),_0x240310('0x297'),_0x240310('0x30a'),_0x240310('0x312'),_0x240310('0x256'),_0x240310('0x132'),_0x240310('0x202'),_0x240310('0x2f8'),_0x240310('0x402'),_0x240310('0x2eb'),_0x240310('0x441'),_0x240310('0x134'),_0x240310('0x218'),_0x240310('0x242'),_0x240310('0x2bd'),_0x240310('0x4ad'),_0x240310('0x20c'),_0x240310('0x49b'),_0x240310('0x36f'),_0x240310('0x1f5'),_0x240310('0x35c'),_0x240310('0x3e2'),_0x240310('0x1db'),_0x240310('0x44c'),_0x240310('0x3f2'),_0x240310('0x252'),_0x240310('0x481'),_0x240310('0x38c'),_0x240310('0x3e8'),_0x240310('0x46d'),_0x240310('0x1e5'),_0x240310('0x386'),_0x240310('0x3c8'),_0x240310('0x324'),_0x240310('0x1ea'),_0x240310('0x444'),_0x240310('0x44f'),_0x240310('0x3f4'),_0x240310('0x316'),_0x240310('0x409'),_0x240310('0x269'),_0x240310('0x3b0'),_0x240310('0x1f0'),_0x240310('0x268'),_0x240310('0x241'),_0x240310('0x2ec'),_0x240310('0x289'),_0x240310('0x244'),_0x240310('0x13f'),_0x240310('0x1e9'),_0x240310('0x221'),_0x240310('0x30d'),_0x240310('0x15e'),_0x240310('0x3e7'),_0x240310('0x165'),_0x240310('0x169'),_0x240310('0x491'),_0x240310('0x394'),_0x240310('0x39b'),_0x240310('0x450'),_0x240310('0x288'),_0x240310('0x18c'),_0x240310('0x1b8'),_0x240310('0x43a'),_0x240310('0x2a5'),_0x240310('0x353'),_0x240310('0x4a5'),_0x240310('0x17c'),_0x240310('0x34a'),_0x240310('0x2e9'),_0x240310('0x31d'),_0x240310('0x35f'),_0x240310('0x1fc'),_0x240310('0x215'),_0x240310('0x28a'),_0x240310('0x439'),_0x240310('0x24f'),_0x240310('0x45e'),_0x240310('0x177'),_0x240310('0x344'),_0x240310('0x332'),_0x240310('0x1f1'),_0x240310('0x2ab'),_0x240310('0x3cb'),_0x240310('0x17b'),_0x240310('0x264'),_0x240310('0x47c'),_0x240310('0x145'),_0x240310('0x45f'),_0x240310('0x20e'),_0x240310('0x260'),_0x240310('0x48e'),_0x240310('0x286'),_0x240310('0x349'),_0x240310('0x451'),_0x240310('0x4ab'),_0x240310('0x17d'),_0x240310('0x1a6'),_0x240310('0x464'),_0x240310('0x265'),_0x240310('0x4b2'),_0x240310('0x29c'),_0x240310('0x479'),_0x240310('0x1b1'),_0x240310('0x46e'),_0x240310('0x36a'),_0x240310('0x340'),_0x240310('0x158'),_0x240310('0x40c'),_0x240310('0x318'),_0x240310('0x3d1'),_0x240310('0x22c'),_0x240310('0x245'),_0x240310('0x251'),_0x240310('0x42d'),_0x240310('0x1f2'),_0x240310('0x22e'),_0x240310('0x1a9'),_0x240310('0x322'),_0x240310('0x2f2'),_0x240310('0x404'),_0x240310('0x13c'),_0x240310('0x2b8'),_0x240310('0x477'),_0x240310('0x418'),_0x240310('0x3d3'),_0x240310('0x480'),_0x240310('0x37c'),_0x240310('0x26e'),_0x240310('0x41f'),_0x240310('0x352'),_0x240310('0x271'),_0x240310('0x3a8'),_0x240310('0x447'),_0x240310('0x24d'),_0x240310('0x2e3'),_0x240310('0x350'),_0x240310('0x48f'),_0x240310('0x28c'),_0x240310('0x39c'),_0x240310('0x301'),_0x240310('0x2c2'),_0x240310('0x14f'),_0x240310('0x2f3'),_0x240310('0x313'),_0x240310('0x3ed'),_0x240310('0x15a'),_0x240310('0x31a'),_0x240310('0x35d'),_0x240310('0x206'),_0x240310('0x3e1'),_0x240310('0x142'),_0x240310('0x4a2'),_0x240310('0x37d'),_0x240310('0x34e'),_0x240310('0x3c0'),_0x240310('0x1b5'),_0x240310('0x46b'),_0x240310('0x49c'),_0x240310('0x168'),_0x240310('0x27f'),_0x240310('0x44a'),_0x240310('0x41b'),_0x240310('0x38a'),_0x240310('0x330'),_0x240310('0x161'),_0x240310('0x2f6'),_0x240310('0x290'),_0x240310('0x1e0'),_0x240310('0x356'),_0x240310('0x292'),_0x240310('0x396'),_0x240310('0x33e'),_0x240310('0x1c0'),_0x240310('0x283'),_0x240310('0x2cf'),_0x240310('0x2b7'),_0x240310('0x190'),_0x240310('0x429'),_0x240310('0x453'),_0x240310('0x3e6'),_0x240310('0x38e'),_0x240310('0x199'),_0x240310('0x417'),_0x240310('0x15c'),_0x240310('0x488'),_0x240310('0x309'),_0x240310('0x180'),_0x240310('0x1a8'),_0x240310('0x2b4'),_0x240310('0x1b2'),_0x240310('0x2b1'),_0x240310('0x31b'),_0x240310('0x232'),_0x240310('0x315'),_0x240310('0x303'),_0x240310('0x32b'),_0x240310('0x3b8'),_0x240310('0x210'),_0x240310('0x321'),_0x240310('0x35a'),_0x240310('0x26f'),_0x240310('0x2ba'),_0x240310('0x23f'),_0x240310('0x174'),_0x240310('0x1ae'),_0x240310('0x3b2'),_0x240310('0x334'),_0x240310('0x171'),_0x240310('0x2da'),_0x240310('0x411'),_0x240310('0x307'),_0x240310('0x150'),_0x240310('0x4af'),_0x240310('0x34c'),_0x240310('0x490'),_0x240310('0x1c2'),_0x240310('0x405'),_0x240310('0x1ad'),_0x240310('0x4a9'),_0x240310('0x489'),_0x240310('0x2c5'),_0x240310('0x21b'),_0x240310('0x476'),_0x240310('0x2fe'),_0x240310('0x28e'),_0x240310('0x47a'),_0x240310('0x2d3'),_0x240310('0x419'),_0x240310('0x46c')];return _0x5b29=function(){return _0x2dd665;},_0x5b29();}var role=_0x32fec3(_0x145427('0x42e'));if(levelRole<=0x0)role=_0x32fec3(_0x145427('0x42e'));else{if(levelRole<=0x4)role=_0x32fec3(_0x145427('0x4ae'));else{if(levelRole<=0x6)role=_0x32fec3(_0x145427('0x1cf'));else{if(levelRole<=0x8)role=_0x32fec3(_0x145427('0x20a'));else{if(levelRole<=0xa)role=_0x32fec3(_0x145427('0x346'));else{if(levelRole<=0xc)role=_0x32fec3(_0x145427('0x47d'));else{if(levelRole<=0xe)role=_0x32fec3(_0x145427('0x2e6'));else{if(levelRole<=0x10)role=_0x32fec3(_0x145427('0x20d'));else{if(levelRole<=0x12)role=_0x32fec3(_0x145427('0x2dd'));else{if(levelRole<=0x14)role=_0x32fec3(_0x145427('0x3e4'));else{if(levelRole<=0x16)role=_0x32fec3(_0x145427('0x1b6'));else{if(levelRole<=0x18)role=_0x32fec3(_0x145427('0x494'));else{if(levelRole<=0x1a)role=_0x32fec3(_0x145427('0x1fd'));else{if(levelRole<=0x1c)role=_0x32fec3(_0x145427('0x42f'));else{if(levelRole<=0x1e)role=_0x32fec3(_0x145427('0x140'));else{if(levelRole<=0x20)role=_0x32fec3(_0x145427('0x273'));else{if(levelRole<=0x22)role=_0x32fec3(_0x145427('0x3a5'));else{if(levelRole<=0x24)role=_0x32fec3(_0x145427('0x130'));else{if(levelRole<=0x26)role=_0x32fec3(_0x145427('0x1d1'));else{if(levelRole<=0x28)role=_0x32fec3(_0x145427('0x167'));else{if(levelRole<=0x2a)role=_0x32fec3(_0x145427('0x317'));else{if(levelRole<=0x2c)role=_0x32fec3(_0x145427('0x39f'));else{if(levelRole<=0x2e)role=_0x32fec3(_0x145427('0x3c4'));else{if(levelRole<=0x30)role=_0x32fec3(_0x145427('0x306'));else{if(levelRole<=0x32)role=_0x32fec3(_0x145427('0x164'));else{if(levelRole<=0x34)role=_0x32fec3(_0x145427('0x19d'));else{if(levelRole<=0x36)role=_0x32fec3(_0x145427('0x3d6'));else{if(levelRole<=0x38)role=_0x32fec3(_0x145427('0x131'));else{if(levelRole<=0x3a)role=_0x32fec3(_0x145427('0x1f4'));else{if(levelRole<=0x3c)role=_0x32fec3(_0x145427('0x192'));else{if(levelRole<=0x3e)role=_0x32fec3(_0x145427('0x466'));else{if(levelRole<=0x40)role=_0x32fec3(_0x145427('0x37b'));else{if(levelRole<=0x42)role=_0x32fec3(_0x145427('0x2f1'));else{if(levelRole<=0x44)role=_0x32fec3(_0x145427('0x187'));else{if(levelRole<=0x46)role=_0x32fec3(_0x145427('0x27c'));else{if(levelRole<=0x48)role=_0x32fec3(_0x145427('0x2bc'));else{if(levelRole<=0x4a)role=_0x32fec3(_0x145427('0x2dc'));else{if(levelRole<=0x4c)role=_0x32fec3(_0x145427('0x21d'));else{if(levelRole<=0x4e)role=_0x32fec3(_0x145427('0x493'));else{if(levelRole<=0x50)role=_0x32fec3(_0x145427('0x2d6'));else{if(levelRole<=0x52)role=_0x32fec3(_0x145427('0x3d7'));else{if(levelRole<=0x54)role=_0x32fec3(_0x145427('0x3f0'));else{if(levelRole<=0x56)role=_0x32fec3(_0x145427('0x3c1'));else{if(levelRole<=0x58)role=_0x32fec3(_0x145427('0x1f3'));else{if(levelRole<=0x5a)role=_0x32fec3(_0x145427('0x3fa'));else{if(levelRole<=0x5c)role=_0x32fec3(_0x145427('0x2f0'));else{if(levelRole<=0x5e)role=_0x32fec3(_0x145427('0x372'));else{if(levelRole<=0x60)role=_0x32fec3(_0x145427('0x181'));else{if(levelRole<=0x62)role=_0x32fec3(_0x145427('0x198'));else{if(levelRole<=0x64)role=_0x32fec3(_0x145427('0x139'));else{if(levelRole<=0x66)role=_0x32fec3(_0x145427('0x360'));else{if(levelRole<=0x68)role=_0x32fec3(_0x145427('0x2ea'));else{if(levelRole<=0x6a)role=_0x32fec3(_0x145427('0x3f6'));else{if(levelRole<=0x6c)role=_0x32fec3(_0x145427('0x3fe'));else{if(levelRole<=0x6e)role=_0x32fec3(_0x145427('0x156'));else{if(levelRole<=0x70)role=_0x32fec3(_0x145427('0x42a'));else{if(levelRole<=0x72)role=_0x32fec3(_0x145427('0x246'));else{if(levelRole<=0x74)role=_0x32fec3(_0x145427('0x294'));else{if(levelRole<=0x76)role=_0x32fec3(_0x145427('0x138'));else{if(levelRole<=0x78)role=_0x32fec3(_0x145427('0x240'));else{if(levelRole<=0x7a)role=_0x32fec3(_0x145427('0x397'));else{if(levelRole<=0x7c)role=_0x32fec3(_0x145427('0x433'));else{if(levelRole<=0x7e)role=_0x32fec3(_0x145427('0x3a9'));else{if(levelRole<=0x80)role=_0x32fec3(_0x145427('0x1c3'));else{if(levelRole<=0x82)role=_0x32fec3(_0x145427('0x3b1'));else{if(levelRole<=0x84)role=_0x32fec3(_0x145427('0x274'));else{if(levelRole<=0x86)role=_0x32fec3(_0x145427('0x351'));else{if(levelRole<=0x88)role=_0x32fec3(_0x145427('0x304'));else{if(levelRole<=0x8a)role=_0x32fec3(_0x145427('0x4b0'));else{if(levelRole<=0x8c)role=_0x32fec3(_0x145427('0x367'));else{if(levelRole<=0x8e)role=_0x32fec3(_0x145427('0x40e'));else{if(levelRole<=0x90)role=_0x32fec3(_0x145427('0x308'));else{if(levelRole<=0x92)role=_0x32fec3(_0x145427('0x18d'));else{if(levelRole<=0x94)role=_0x32fec3(_0x145427('0x1a7'));else{if(levelRole<=0x98)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x9a)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x9c)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x9e)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xa0)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xa2)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xa4)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xa6)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xa8)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xaa)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xac)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xae)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xb0)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xb2)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xb4)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xb6)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xb8)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xba)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xbc)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xbe)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xc0)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xc2)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xc4)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xc6)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xc8)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xd2)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xdc)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xe6)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xf0)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0xfa)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x104)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x10e)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x118)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x122)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x12c)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x136)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x140)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x14a)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x154)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x15e)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x168)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x172)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x17c)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x186)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x190)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x19a)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1a4)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1ae)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1b8)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1c2)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1cc)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1d6)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1e0)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1ea)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x1f4)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x258)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x2bc)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x320)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x384)role=_0x32fec3(_0x145427('0x12d'));else{if(levelRole<=0x3e8)role=_0x32fec3(_0x145427('0x438'));else{if(levelRole<=0x7d0)role=_0x32fec3(_0x145427('0x37a'));else{if(levelRole<=0xbb8)role=_0x32fec3(_0x145427('0x183'));else{if(levelRole<=0xfa0)role=_0x32fec3(_0x145427('0x3d2'));else{if(levelRole<=0x1388)role=_0x32fec3(_0x145427('0x233'));else{if(levelRole<=0x1770)role=_0x32fec3(_0x145427('0x2c8'));else{if(levelRole<=0x1b58)role=_0x32fec3(_0x145427('0x3af'));else{if(levelRole<=0x1f40)role=_0x32fec3(_0x145427('0x41d'));else{if(levelRole<=0x2328)role=_0x32fec3(_0x145427('0x2d2'));else{if(levelRole<=0x2710)role=_0x32fec3(_0x145427('0x26a'));else levelRole<=0x174876e7ff&&(role=_0x32fec3(_0x145427('0x160')));}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}if(isCmd&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&!isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname));return;}if(isCmd&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname),'in',color(groupName));return;}if(isStMsg&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&!isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname));return;}if(isStMsg&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname),'in',color(groupName));return;}if(isbuttonCmd&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&!isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname));return;}if(isbuttonCmd&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname),'in',color(groupName));return;}if(islistCmd&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&!isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname));return;}if(islistCmd&&!isOwner&&msgFilter[_0x32fec3(_0x145427('0x3c2'))](from)&&isGroup){console[_0x32fec3(_0x145427('0x2fd'))](color(_0x32fec3(_0x145427('0x35e')),_0x32fec3(_0x145427('0x23a'))),color(time,_0x32fec3(_0x145427('0x366'))),color(command+'\x20['+args[_0x32fec3(_0x145427('0x16e'))]+']'),_0x32fec3(_0x145427('0x1c1')),color(pushname),'in',color(groupName));return;}colors=[_0x32fec3(_0x145427('0x23a')),_0x32fec3(_0x145427('0x323')),_0x32fec3(_0x145427('0x2f4')),_0x32fec3(_0x145427('0x25a')),_0x32fec3(_0x145427('0x366')),_0x32fec3(_0x145427('0x1f6'))];const isMedia=type===_0x32fec3(_0x145427('0x208'))||type===_0x32fec3(_0x145427('0x207')),isQuotedImage=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x208'))),isQuotedVideo=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x207'))),isQuotedAudio=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x33f'))),isQuotedSticker=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x2c7'))),isQuotedLoca=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x2ca'))),isQuotedContact=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x1e2'))),isQuotedDocs=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x43e'))),isQuotedTeks=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x149'))),isQuotedTag=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x18e'))),isQuotedProd=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x16c'))),isQuotedReply=type===_0x32fec3(_0x145427('0x442'))&&content[_0x32fec3(_0x145427('0x4a7'))](_0x32fec3(_0x145427('0x151')));if(!isGroup&&isCmd)CFonts[_0x32fec3(_0x145427('0x223'))](_0x32fec3(_0x145427('0x261'))+command+_0x32fec3(_0x145427('0x410'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0],{'font':_0x32fec3(_0x145427('0x13e')),'align':_0x32fec3(_0x145427('0x342')),'gradient':[_0x32fec3(_0x145427('0x323')),_0x32fec3(_0x145427('0x366'))]});if(isCmd&&isGroup)CFonts[_0x32fec3(_0x145427('0x223'))](_0x32fec3(_0x145427('0x261'))+command+_0x32fec3(_0x145427('0x410'))+sender[_0x32fec3(_0x145427('0x243'))]('@')[0x0]+_0x32fec3(_0x145427('0x1d5'))+groupName,{'font':_0x32fec3(_0x145427('0x13e')),'align':_0x32fec3(_0x145427('0x342')),'gradient':[_0x32fec3(_0x145427('0x23a')),_0x32fec3(_0x145427('0x25a'))]});if(!isOwner&&!isPremium&&banChats===!![])return;if(isCmd&&!isOwner)msgFilter[_0x32fec3(_0x145427('0x1c5'))](from);function addMetadata(_0x577488,_0x40b5fd){const _0x4d353b=_0x145427,_0x6106d3=_0x32fec3;if(!_0x577488)_0x577488=_0x6106d3(_0x4d353b('0x287'));if(!_0x40b5fd)_0x40b5fd=_0x6106d3(_0x4d353b('0x34f'));_0x40b5fd=_0x40b5fd[_0x6106d3(_0x4d353b('0x47b'))](/[^a-zA-Z0-9]/g,'');let _0x1c6f3f=_0x40b5fd+'_'+_0x577488;if(fs[_0x6106d3(_0x4d353b('0x38b'))](_0x6106d3(_0x4d353b('0x195'))+_0x1c6f3f+_0x6106d3(_0x4d353b('0x458'))))return _0x6106d3(_0x4d353b('0x195'))+_0x1c6f3f+_0x6106d3(_0x4d353b('0x458'));const _0x43a8d3={'sticker-pack-name':_0x577488,'sticker-pack-publisher':_0x40b5fd},_0xe3af1e=Buffer[_0x6106d3(_0x4d353b('0x1c1'))]([0x49,0x49,0x2a,0x0,0x8,0x0,0x0,0x0,0x1,0x0,0x41,0x57,0x7,0x0]),_0x3add1d=[0x0,0x0,0x16,0x0,0x0,0x0];let _0xb3746f=JSON[_0x6106d3(_0x4d353b('0x279'))](_0x43a8d3)[_0x6106d3(_0x4d353b('0x16e'))],_0x96d267;_0xb3746f>0x100?(_0xb3746f=_0xb3746f-0x100,_0x3add1d[_0x6106d3(_0x4d353b('0x3c5'))](0x1)):_0x3add1d[_0x6106d3(_0x4d353b('0x3c5'))](0x0),_0xb3746f<0x10?(_0x96d267=_0xb3746f[_0x6106d3(_0x4d353b('0x179'))](0x10),_0x96d267='0'+_0xb3746f):_0x96d267=_0xb3746f[_0x6106d3(_0x4d353b('0x179'))](0x10);const _0x3d28fb=Buffer[_0x6106d3(_0x4d353b('0x1c1'))](_0x96d267,_0x6106d3(_0x4d353b('0x1e8'))),_0x4cca16=Buffer[_0x6106d3(_0x4d353b('0x1c1'))](_0x3add1d),_0x4d8974=Buffer[_0x6106d3(_0x4d353b('0x1c1'))](JSON[_0x6106d3(_0x4d353b('0x279'))](_0x43a8d3)),_0x11c16e=Buffer[_0x6106d3(_0x4d353b('0x13d'))]([_0xe3af1e,_0x3d28fb,_0x4cca16,_0x4d8974]);fs[_0x6106d3(_0x4d353b('0x1ab'))](_0x6106d3(_0x4d353b('0x195'))+_0x1c6f3f+_0x6106d3(_0x4d353b('0x458')),_0x11c16e,_0x851c3=>{const _0x47bfc3=_0x4d353b,_0x49aaa3=_0x6106d3;return _0x49aaa3(_0x47bfc3('0x195'))+_0x1c6f3f+_0x49aaa3(_0x47bfc3('0x458'));});}const count11=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count1=count11*0x1,count22=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count2=count22*0x1,count33=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count3=count33*0x1,count44=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count4=count44*0x1,count55=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count5=count55*0x1,count66=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count6=count66*0x1,count77=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count7=count77*0x1,count88=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count8=count88*0x1,count99=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count9=count99*0x1,count100=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count10=count100*0x1,count111=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count110=count111*0x1,count112=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count12=count112*0x1,count113=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count13=count113*0x1,count114=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count14=count114*0x1,count115=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count15=count115*0x1,count116=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count16=count116*0x1,count117=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count17=count117*0x1,count118=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count18=count118*0x1,count119=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count19=count119*0x1,count2OO=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count20=count2OO*0x1,count2O1=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count21=count2O1*0x1,count2O2=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count222=count2O2*0x1,count2O3=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count23=count2O3*0x1,count2O4=dungeonpoint[Math[_0x32fec3(_0x145427('0x17f'))](Math[_0x32fec3(_0x145427('0x19a'))]()*dungeonpoint[_0x32fec3(_0x145427('0x16e'))])],count24=count2O4*0x1,getexp=Math[_0x32fec3(_0x145427('0x182'))](Math[_0x32fec3(_0x145427('0x19a'))]()*0x64),getmoney=Math[_0x32fec3(_0x145427('0x182'))](Math[_0x32fec3(_0x145427('0x19a'))]()*0x1e);
//STICKER COMMAND


switch (isStMsg) {
case 'Daftar':
if (isRegistered) return  replysticker(registc)
if (msgFilter.isFiltered(from)) return replysticker(spamstc)
await addRegisteredUser(sender)
setTimeout( () => {

const buttons = [
  {buttonId: 'simplemenu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'owner', buttonText: {displayText: 'OWNER'}, type: 1}
]

const buttonsMessage = {
    contentText: `*❲ VERIFIKASI SUKSES ❳*\n_ketik ${prefix}menu jika tombolnya tidak muncul_`,
    footerText: support,
    buttons: buttons,
    headerType: 6, 
	locationMessage: daftarnoss.message.locationMessage
}
client.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, dev, ow]}})
}, 5000)
replysticker(waitstc)
if (regisinfo === true) {
setTimeout( () => {
client.sendMessage(ow, `*[ REGISTER ]*\n@${player.split("@")[0]}`, text, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${_registered.length}`,status: 200, thumbnail: buffer, surface: 200, message: `Runtime ${kyun(process.uptime())}`, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}}, contextInfo :{sendEphemeral: true, mentionedJid: [player]}})
}, 2000)
}
if (autobackup === true) {
setTimeout( () => {
client.sendMessage(ow, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})
}, 3000)
}
console.log(color('[REGISTER]'), color(_registered.length, 'yellow'), 'Name:', color(sender, 'cyan'))
break		 
} 

function _0x2eaf(_0x2b6ed3,_0x1cb783){const _0x350b81=_0x350b();return _0x2eaf=function(_0x2eaf5d,_0x31482c){_0x2eaf5d=_0x2eaf5d-0xd9;let _0x41aee1=_0x350b81[_0x2eaf5d];return _0x41aee1;},_0x2eaf(_0x2b6ed3,_0x1cb783);}const _0x59d7f6=_0x2eaf;function _0x350b(){const _0x37be52=['promote','0x3e1','0x49c','0x35b','audio/mp4','0x483','buttonsMessage','Set\x20Name\x20Bot','0x207','Fitur\x20Anti\x20Link\x0ause\x20command:\x20','0x4dd','0x25e','fakeloc','0x26a','0x2ef','Waifu','0x49f','bass','0x409','0x218','del','Sticker','kickall','0x4dc','0x4cf','0x1f5','Info\x20Profile\x20Kamu\x0ause\x20command:\x20','0@s.whatsapp.net','Menu\x20Bot','0x38d','0x4d9','0x394','0x3f9','0x502','nolepcek','Bokepers','Kick','0x4aa','cekhistory','0x487','0x35d','0x223','0x4c4','menuinfo','play','0x24b','./strg/audio/','gemesvid','0x1e1','0x275','0x4d3','0x4ec','Silahkan\x20Bergabung\x20Untuk\x20Info\x20Updatean\x20Terbaru','0x2b9','0x24e','0x271','store3','Youtube\x20Search','ceklimit','0x4e2','zeksapi','0x1de','Del\x20Image','0x390','Gift\x20Money','Group\x20Menu','0x31c','Menampilkan\x20Fitur\x20Owner','Gemes','menuconvert','0x1e8','0x421','561425dNSCEE','0x284','0x270','8696802tcPJpp','0x321','0x23e','chsticker','0x297','Mengganti\x20Name\x20Group\x0ause\x20command:\x20','0x239','Pesan\x20Tidak\x20Dibisukan\x0ause\x20command:\x20','0x2cf','0x37c','Wiskas','trigg','0x35f','Del\x20Premium','dellcmd','0x380','botstat','Anti\x20Toxic','Nightcore','0x496','Menampilkan\x20Wa\x20Api\x0ause\x20command:\x20','0x2e7','0x4d6','Theme\x20Menu\x20Bot\x0ause\x20command:\x20','Fitur\x20Anti\x20Virtex\x0ause\x20command:\x20','Demote','0x1f4','kick','0x384','0x3fd','convertmenu','mystore','watak','Bird','Tag\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','deleteMessage','Store\x202','0x335','Big\x20Thanks\x20To','Gabut\x20Menu','0x232','Mengganti\x20Vn\x0ause\x20command:\x20','Group','0x4a8','0x2d2','Speed','0x1e4','Name:','0x412','Searching','Sadgirl','0x4b0','0x460','Google\x20Search','extendedTextMessage','0x402','0x269','Apakah','0x23b','0x4f7','List\x20Vn','0x4ba','0x2b6','Donasi\x20Seikhlasnya\x0ause\x20command:\x20','0x34f','0x4fd','0x2a5','0x3ab','0x419','0x2e6','0x420','store2','1037337oPysAe','Source\x20Code\x0ause\x20command:\x20','0x34b','0x28c','0x2b4','My\x20Store','0x44c','0x267','0x3e7','0x477','0x374','BotStat','Meme','0x48b','Download\x20Audio\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','donasi','0x46a','0x3b5','Set\x20Desc\x20Gc','Gift\x20Limit\x20Untuk\x20User\x0ause\x20command:\x20','0x2b2','Vapor','0x45d','Download\x20Video\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x3c7','0x279','Pesan\x20Diarsipkan\x0ause\x20command:\x20','0x280','0x226','0x350','getname','Tantan\x20Chat','Sewa','0x389','Sahabatan','bahasa','Hack','Gabut\x20Time','0x35a','get','Command\x20ini\x20tidak\x20bisa\x20digunakan\x20di\x20dalam\x20grup,silahkan\x20gunakan\x20di\x20private\x20chat\x20bot','Menambahkan\x20Command\x20Sticker\x0ause\x20command:\x20','Daftar\x20Premium\x20Bot\x0ause\x20command:\x20','application/octet-stream','term','0x2d6','haramcek','0x26f','0x304','Tourl','speed','ttt','Menghapus\x20Video\x0ause\x20command:\x20','0x2da','0x386','0x302','readmore','nightcorevid','0x507','listvn','jomblo','0x241','0x305','0x234','Menambahkan\x20Vn\x0ause\x20command:\x20','0x3e2','Searching\x20Gambar\x20Goggle\x0ause\x20command:\x20','0x28b','menuowner','0x1ff','GABUT\x20MENU','fox','tempo','0x4ee','0x436','Pesan\x20Dihapus\x0ause\x20command:\x20','0x4f8','0x3d5','0x2ee','sangean','0x1f2','0x3c9','archive','0x3c3','use\x20command:\x20','Menambahkan\x20Block\x0ause\x20command:\x20','Menampilkan\x20fitur\x20Untuk\x20Group','0x28f','0x328','0x4e3','0x235','Menambahkan\x20Member\x20Premium\x0ause\x20command:\x20','0x1f8','searchtext','verify','0x3bb','Family\x20100','0x200','1338856dtVSPr','0x44f','antivirtex','brainly','Image','Dog','0x425','Free\x20Fire','Up\x20Status\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','setmenu','Menampilkan\x20fitur\x20dari\x20Convert','0x32f','Buka\x20Time','0x35c','Semua\x20Pesan\x20Dihapus\x0ause\x20command:\x20','0x37d','0x2b0','0x3d7','0x23f','0x2b5','Wikipedia','upsw','Owner\x20Menu','0x3f8','0x493','Menghapus\x20Badword\x0ause\x20command:\x20','Set\x20Thumbnail\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','Menghapus\x20Command\x20Sticker\x0ause\x20command:\x20','0x357','0x36c','0x3dd','0x33c','Bucin\x20Cek','https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg','jadibot','0x26d','Pubg','rent','0x2de','0x4bc','menudownload','All\x20Menu','0x262','Pendosa','Daftar\x20Cmd\x20Bot\x0ause\x20command:\x20','0x31f','0x3ac','0x309','0x3eb','0x36b','0x376','Set\x20Sistem','0x317','0x225','0x3b2','Termalas','0x382','0x2d7','Kpop','https://youtu.be/2Wt79AagxGo','0x503','listadmin','0x475','Block\x20List','List\x20Cmd','0x43c','Member\x20Yang\x20Online\x20Saat\x20ini\x0ause\x20command:\x20','0x33f','0x2d4','Download\x20Wallpaper\x0ause\x20command:\x20','0x515','Menghapus\x20Image\x0ause\x20command:\x20','0x4c9','Download\x20Video\x20Atau\x20Gambar\x20Yang\x20Ada\x20Di\x20Instagram\x0ause\x20command:\x20','0x252','0x505','Fast\x20Vid','0x29a','0x4d7','0x2ed','0x500','0x3a5','0x32e','antilink','chvn','0x46c','0x253','Gemes\x20Vid','0x3ef','0x361','Group\x20Info','triggvid','rate','Panda','0x313','0x1e6','revoke','0x415','0x4d0','ytmp4','0x45a','0x327','0x35e','0x3c0','0x219','0x337','contactsArrayMessage','0x486','addsticker','meme','Hello\x20World','mute','Menampilkan\x20fitur\x20dari\x20Download','Ghost','0x3c5','0x370','Store\x201','0x3cd','0x31a','fakgirl','gemes','Gakguna','ocr','0x4d1','0x463','0x472','spam','cantikcek','0x434','0x3e8','0x276','0x351','dog','0x213','0x40d','hidetag','Bego\x20Cek','Translate','Quote','Nightcore\x20Vid','0x1e3','0x43e','0x410','0x299','leavetime','0x42a','jadibot1','addvideo','0x20f','0x416','Add\x20Premium','0x230','*[\x20REGISTER\x20]*\x0a@','0x442','RANDOM\x20PICT','0x2f0','igstalk','listonline','0x4e7','0x4de','0x341','cekmenu','0x408','0x2ac','Menghapus\x20Block\x0ause\x20command:\x20','0x286','Event','0x3b0','0x229','premiumbot','Pakboy\x20Cek','0x50c','0x266','Bahasa','randompict','0x4b3','0x1f7','linkgc','0x21b','0x4cd','fliptext','imageMessage','0x311','readFileSync','0x514','0x3a2','Top\x20Up','menucek','cupu','Terganteng','GROUP\x20MENU','topupdomino','Random\x20Pict','Pin','Robot\x20Vid','Restart','0x238','0x2c0','0x485','0x497','Menampilkan\x20Peraturan\x20Bot\x0ause\x20command:\x20','3078dqVuXH','Menampilkan\x20Semua\x20Fitur','0x3dc','pacaran','0x26c','begocek','0x2a8','Jomblo','Musuhan','Tempo','Menghapus\x20Member\x20Premium\x0ause\x20command:\x20','0x2fe','Archive','0x447','Bisakah','0x4da','creator','0x2e4','owner','tantanchat','0x27c','translate','gantengcek','0x429','Domino','Tts','Hack\x20Group\x0ause\x20command:\x20','banchat','Kapankah','imunevirtex','pendosa','0x331','Play','Mengganti\x20Desc\x20Group\x0ause\x20command:\x20','Brainly','Rules','suit','0x2bd','0x411','0x3f6','0x31b','0x399','0x211','0x3da','0x2d9','0x336','Owner\x20Bot\x0ause\x20command:\x20','Website\x20Resmi\x20Brainly\x0ause\x20command:\x20','Del\x20Voting','0x371','Ngegay','chvideo','0x3df','Penggunaan\x20','developer','listimage','0x1fb','Jelek\x20Cek','0x307','0x427','Add\x20Block','Set\x20Menu','0x4d8','0x25c','Audio','0x258','delbadword','Kangen','Set\x20Pp\x20Gc','0x2ec','tercantik','Ig\x20Stalker','limitend','0x488','0x215','0x29c','Husbu','tutuptime','Menampilkan\x20Source\x20Code\x20Bot','stickerlist','0x2f8','Premium\x20List','0x2ca','addblock','0x3d6','0x44e','jodohku','0x4a1','Menambahkan\x20Sticker\x0ause\x20command:\x20','Trigg\x20Vid','3096108viIxwi','0x446','0x4f0','STORE','reverse','0x407','0x3ec','exif','Vibra\x20Vid','Dark\x20Joke','setdesc','0x3d2','0x454','Promote','0x45e','0x2fd','0x1fe','0x4e9','unarchive','NEXT','unreadall','Terpintar','0x36e','hbd','0x47f','0x516','0x40a','0x3f4','0x4cb','List\x20Video\x20Bot\x0ause\x20command:\x20','0x3be','0x44a','0x343','Menampilkan\x20Kode\x20Bahasa\x0ause\x20command:\x20','\x20Owner\x20Tersayang','wibucek','0x216','0x397','delvideo','0x46b','0x201','0x34a','Flip\x20Text','LIST\x20INFO','Hobby','Del\x20Cmd','0x210','0x393','Ban\x20Chat','0x303','0x396','Fast','List\x20Group','Sewa\x20Bot','0x479','fakboy','gcbot','0x448','0x3b8','0x3b6','0x347','0x40e','setnamegrup','0x512','0x492','Mode','0x4fc','jadian','INFO\x20MENU','0x36d','welcome','Teks\x20Immune\x20Virtex\x0ause\x20command:\x20','detikvideo','menugabut','0x2e8','lesbicek','0x3c6','Daftar\x20Badword\x20Bot\x0ause\x20command:\x20','0x3f2','0x259','0x470','List\x20Vn\x20Bot\x0ause\x20command:\x20','0x431','Wibu','0x255','Slow','0x2ce','0x295','0x30f','0x2df','0x30a','0x428','0x4ca','0x50e','bukatime','0x3a8','Sadboy','0x245','0x33e','pinterest','goblokcek','0x3de','Cak\x20Lontong','Del\x20Badword','0x4f9','0x378','⭐\x20Star\x20Baileys\x20on\x20GitHub!','0x1f6','0x4f4','jelekcek','store1','listvideo','Add\x20Cmd','0x401','setprefix','inv','sadboy','8171940fqxEYv','Tiktok\x20Downloader','0x364','0x249','0x277','0x513','Pinterest\x20Downloader','0x2f9','topupcod','0x3db','0x32c','Ganteng\x20Cek','0x4b7','0x3e3','Store','0x329','0x4d5','0x272','0x356','0x468','Set\x20Prefix\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','getbio','googlesearch','0x274','0x2fc','0x4a5','0x365','0x41d','Clear\x20All','0x34e','DOWNLOAD\x20MENU','0x221','Searching\x20Gambar\x20Wikipedia\x0ause\x20command:\x20','simplemenu','Jadi\x20Bot','wame','setnamebot','gimage','0x46e','0x25d','store','Slow\x20Vid','0x2a4','downloadmenu','Menampilkan\x20Status\x20Bot\x0ause\x20command:\x20','Add\x20Group','0x24a','delete','Add\x20Badword','Gimage','jomblocek','0x37b','Menambahkan\x20Image\x0ause\x20command:\x20','disable','groupmenu','Ubah\x20Link\x20Group\x0ause\x20command:\x20','Lirik\x20Lagu','0x20a','0x369','0x4db','0x333','0x2c8','Menghapus\x20Sticker\x0ause\x20command:\x20','kapankah','Perintah\x20yang\x20Sering\x20di\x20Gunakan','Looking\x20for\x20a\x20partner...','0x511','Volume','Ig\x20Downloader','Trigg','replace','0x339','Sange\x20Cek','0x29b','0x30e','0x3f3','Haram\x20Cek','0x2ff','0x1e0','0x206','Mengganti\x20Pp\x20Group\x0ause\x20command:\x20','0x372','Link\x20Group\x20Sekarang\x0ause\x20command:\x20','Tebak\x20Gambar','0x334','_Silahkan\x20Hubungi\x20Owner\x20Untuk\x20Memakai\x20Fitur\x20Ini_','Fitur\x20Welcome\x0ause\x20command:\x20','UnRead\x20All','Pesan\x20Tidak\x20Disematkan\x0ause\x20command:\x20','0x4c2','0x288','0x1f0','Fox','0x49b','0x385','Del\x20Tic\x20Tac\x20Toe','0x4ea','Mediafire','0x2f7','Change\x20Sticker','0x2f3','volume','0x358','gakguna','Menampilkan\x20fitur\x20dari\x20Foto','0x476','0x466','Menampilkan\x20Contributor\x20Bot','0x2af','getpic','SearchingLirik\x20Lagu\x0ause\x20command:\x20','Tagall','0x283','yellow','tts','0x3c8','cecan','start','0x379','0x246','0x360','0x4bf','OWNER','0x3ad','0x362','0x3ee','listrepson','message','0x42c','tomp3','delblock','0x445','ping','Term','0x25b','.\x0aketik\x20#simplemenu\x0a','0x422','0x289','0x368','0x20b','PHOTO','0x49d','0x2ea','Ghost\x20Vid','0x1ed','stopbot','0x301','1222611RLYSaJ','ngegay','0x41b','0x48a','Hero\x20List','0x3ce','0x28a','0x4af','0x4bb','0x2cd','stickerwm','0x39f','0x2c4','Readmore','Semua\x20Pesan\x20Dibaca\x0ause\x20command:\x20','toptt','0x3b1','0x1ea','topuppubg','Revoke','0x38f','0x24d','Group\x20Official\x20Bot','Watak','This\x20is\x20a\x20reply,\x20just\x20like\x20normal\x20buttons!','0x48f','sticker','0x228','0x2b3','0x31d','0x21f','Cantik\x20Cek','apakah','0x202','0x4a6','0x391','0x4cc','Exif\x20Stiker\x0ause\x20command:\x20','0x1e5','0x30d','Profile','fast','Game\x20Menu','Fitur\x20Anti\x20Toxic\x0ause\x20command:\x20','Bot\x20Keluarkan\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','tourl','Enable','0x1ef','0x4f2','0x29e','Cek\x20Menu','0x3aa','0x22f','0x4f3','Get\x20Pic','0x22c','isFiltered','0x458','0x443','0x2d0','Pesan\x20Tidak\x20Diarsipkan\x0ause\x20command:\x20','0x330','gaycek','Zalgo','delpremium','Del\x20Block','0x43b','0x2e5','0x3a1','0x395','0x3a7','3222452Divnlf','2837775TPvhnY','List\x20Info','0x482','Tercantik','stanzaId','Get\x20Name','Ytmp3','Tic\x20Tac\x20Toe','0x4be','cat','0x20c','mediafire','0x400','0x27b','0x355','inventory','0x2b8','0x449','.mp3','robot','List\x20Image\x20Bot\x0ause\x20command:\x20','tebakgambar','12994064cCazwG','0x4bd','chimg','0x346','premiumlist','0x4b8','Contributor','0x42f','Kick\x20Member\x0ause\x20command:\x20','Donasi','0x30c','0x46f','0x464','0x3e6','0x36f','0x459','0x32d','bcgc','Promote\x20Member\x0ause\x20command:\x20','split','Storage\x20Sistem','0x1f3','id-like-buttons-message','0x22e','Menampilkan\x20Z\x20Menu','Wibu\x20Cek','cyan','0x43a','0x426','Fdeface','Reply\x20Pesan\x0ause\x20command:\x20','Download\x20File\x20Mediafire\x0ause\x20command:\x20','allmenu','0x456','0x308','0x2c2','0x504','0x509','0x2c6','0x243','0x424','0x499','vibravid','474792aPEeYA','0x3a6','Fakgirl','clearall','Toptt','0x21e','0x2ae','0x4ce','Tomp3','Tag','Untuk\x20Hiburan\x20Di\x20Group','reversevid','Sangean','Style\x20Text','0x323','0x4a0','0x28e','0x4fa','Daftar\x20Respon\x20Bot\x0ause\x20command:\x20','wallpaper','Call\x20Of\x20Duty','0x236','0x21d','Cari\x20Pesan','event','0x39e','panda','pakboycek','0x291','ownermenu','0x4e6','0x3d9','sewa','Up\x20Status','0x3fc','wiskas','0x254','0x40c','delimg','0x39a','Fitur\x20Event\x0ause\x20command:\x20','0x1f1','0x23a','0x344','tempovid','Daftar\x20Block\x20Bot\x0ause\x20command:\x20','delvote','0x1e7','listbadword','join','daftar','Add\x20Sistem','Set\x20Name\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','Sticker\x20Wm','pin','0x1fa','0x2dc','0x2ad','0x281','List\x20Respon','0x40f','Pesan\x20Dibisukan\x0ause\x20command:\x20','0x3bf','giftmoney','0x2f6','0x217','807CSqbPj','0x2f1','Menampilkan\x20List\x20Harga\x20Sewa\x20Bot','5\x20Contact','grupseting','Admin\x20Dari\x20Group\x0ause\x20command:\x20','0x398','0x338','hobby','Saya\x20adalah\x20','Set\x20Theme','gabutmenu','0x45f','Z\x20Menu','https://github.com/adiwajshing/Baileys','tagall','0x498','Partner\x20found:\x20🙉\x0a*','0x2b1','igdl','0x222','pakgirlcek','0x4ad','Read\x20All','UnMute','0x438','0x484','List\x20Admin','0x3b9','0x473','0x37a','hack','Enable\x20Setting\x20Bot\x0ause\x20command:\x20','Suit','0x406','pintarcek','0x25f','0x248','0x3cc','0x292','spam\x20teks|jumlah\x20spam\x0ause\x20command:\x20','Hbd','Bc\x20Gc','selingkuh','0x312','0x494','0x209','Tentang\x20Chat','List\x20Image','Info\x20Menu','0x27a','0x4f1','Get\x20Bio','0x392','0x50d','Halal\x20Cek','darkjoke','Runtime\x20','restart','ransel','0x39c','0x4c7','0x31e','0x40b','styletext','0x3bd','0x250','0x316','0x27f','0x4c3','0x4a3','0x24c','Ytmp4','contextInfo','Budayakan\x20Membaca\x20Sebelum\x20Menggunakan\x20Bot','0x319','0x404','Exif','add','0x306','vibra','Add\x20Member\x0ause\x20command:\x20','bird','List\x20Video','\x20salah\x20satu\x20Bot\x20Whatsapp\x20yang\x20diciptakan\x20oleh\x20manusia\x20gabut\x20:\x20@','menu','tiktokdl','Rate','0x37e','0x510','0x490','addpremium','Storage','0x1ec','6289530298948-1604595598@g.us','0x300','0x4e1','0x45c','0x4b2','List\x20Sticker\x20Bot\x0ause\x20command:\x20','mode','bassvid','Mengambil\x20File\x20Bot\x0ause\x20command:\x20','Add\x20Vn','random','Goblok\x20Cek','Fitur\x20Buka\x20Group\x0ause\x20command:\x20','0x345','Set\x20Photo\x20Bot\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','0x4e4','0x363','Immune\x20Virtex','waifu','0x3ae','Garena','Cecan','help','0x3a9','0x36a','locationMessage','Set\x20Photo\x20Bot','0x326','0x4a9','0x39b','Pakgirl\x20Cek','0x3e4','0x296','0x1f9','0x375','0x287','0x26e','Point\x20Blanck','Group\x20Bot','0x49a','0x4a2','0x42d','0x3d4','infomenu','0x2e2','\x0aSilahkan\x20tekan\x20Tombol\x20\x22Menu\x22\x20untuk\x20melihat\x20list\x20command\x20dari\x20','0x3d3','0x3d1','0x212','0x387','54936zYmFyJ','kangen','Beban','0x22a','0x2e3','0x3cf','10BnrwqG','Del\x20Sticker','Convert\x20Menu','0x48e','0x27d','0x3f0','0x4fb','Jomblo\x20Cek','0x353','Set\x20Thumbnail\x20Bot','0x3fb','Searching\x20Via\x20Youtube\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','uptime','Tempo\x20Vid','demote','bebancek','List\x20Online','0x2db','0x20d','0x43f','0x2ba','Wa\x20Api','ephemeralMessage','0x2b7','enable','0x45b','0x3d8','topupml','Bass','Anti\x20Link','0x24f','Owner','Add','0x4fe','0x4b1','./database/bot/registered.json','[REGISTER]','addcmd','0x430','Stalk\x20Ig\x20Orang\x0ause\x20command:\x20','Beban\x20Cek','0x2c1','next','0x224','caklontong','Translate\x20Bahasa\x0ause\x20command:\x20','OWNER\x20MENU','Hi\x20it\x27s\x20a\x20template\x20message','0x452','0x3fa','quote','0x2e1','Disable','0x4e0','wa.me/','Add\x20Image','bagaimanakah','slowvid','bucincek','0x290','robotvid','0x247','0x4d2','fdeface','Reverse\x20Vid','delsticker','length','0x1e9','0x227','0x37f','contributor','0x373','delvn','dompet','hubsu','ytsearch','Add\x20Voting','0x437','Menampilkan\x20Status\x20Bot','Jadian','0x264','0x3bc','Link\x20Group','0x418','voting','Toimg','0x2f4','0x265','0x2f2','0x501','termalas','zalgo','0x2bc','0x2cb','0x251','0x203','0x3ca','0x455','0x388','Spam','prepareMessage','0x48c','0x322','detikvn','0x47e','0x22b','0x233','MENU','0x41e','Detik\x20Video','Banchat\x20Di\x20Grup\x0ause\x20command:\x20','Disable\x20Setting\x20Bot\x0ause\x20command:\x20','ghost','Mengganti\x20Video\x0ause\x20command:\x20','Download\x20Menu','push','Pintar\x20Cek','Gay\x20Cek','0x403','0x4df','0x26b','registered.json','0x23c','0x4f5','profile','listgroup','0x285','Set\x20Theme\x20Yang\x20Di\x20inginkan','sadgirl','Change\x20Vn','ytmp3','beban','0x44b','Cupu','Ping','0x315','Download','0x2bb','Hago','Detail\x20Hero\x20Mobile\x20Legend\x0ause\x20command:\x20','tag','0x3ba','0x480','0x30b','Welcome','0x32a','0x4c1','herolist','0x354','0x2a0','0x282','0x27e','0x3af','Speed\x20Bot\x0ause\x20command:\x20','List\x20Sticker','Menyiarkan\x20Pesan\x20Ke\x20Semua\x20Group\x0ause\x20command:\x20','gamemenu','0x325','0x3ff','Add\x20Sticker','terganteng','Menampilkan\x20Group\x20Bot\x0ause\x20command:\x20','0x38b','0x506','0x41f','tas','0x33d','addimg','lesbian','0x41a','0x1ee','0x3ea','0x2ab','0x3f1','Change\x20Image','0x47b','Aesthetic','0x450','0x489','tohuruf','Fitur\x20Tutup\x20Group\x0ause\x20command:\x20','0x4ac','antitoxic','setthumb','0x478','addvn','0x240','Set\x20Name\x20Gc','Pesan\x20Disematkan\x0ause\x20command:\x20','0x49e','0x38a','Ping\x20Bot\x0ause\x20command:\x20','Developer\x20Bot\x0ause\x20command:\x20','Mengganti\x20Image\x0ause\x20command:\x20','Restart\x20Ulang\x20Bot\x0ause\x20command:\x20','lolmenu','0x2bf','Lesbian','0x474','0x491','0x439','limit','kpop','0x440','topupgarena','12gngMrn','0x320','cogan','0x47a','log','vapor','0x471','0x2be','Fakboy','halalcek','0x50b','Selingkuh','Fitur\x20Group\x0ause\x20command:\x20','*❲\x20VERIFIKASI\x20SUKSES\x20❳*\x0a_ketik\x20','0x3f5','0x208','0x4e8','UnArchive','Source\x20Code','+1\x20(234)\x205678-901','0x3a0','0x205','0x29f','0x348','Add\x20Video','0x2dd','0x34d','Change\x20Video','menu\x20jika\x20tombolnya\x20tidak\x20muncul_','0x1fd','Terbodoh','Menampilkan\x20Info\x20Bot','unmute','Tutup\x20Time','0x4a4','0x294','0x293','unpin','0x231','Vibra','0x242','0x3c4','0x33a','slice','0x2eb','0x4a7','Mobile\x20Legend','List\x20Hero\x20Mobile\x20Legend\x0ause\x20command:\x20','Wallpaper','0x3b4','Lesbi\x20Cek','Del\x20Vn','0x46d','0x2fa','Run\x20Bot\x0ause\x20command:\x20','0x25a','Pacaran','leave','0x4c8','0x467','Mengobrol\x20Dengan\x20Orang\x20Lain','Store\x203','caripesan','listrespon','0x2c3','0x20e','0x42b','0x4b4','wiki','Hidetag','0x2a6','0x2cc','Menghapus\x20Vn\x0ause\x20command:\x20','Set\x20Prefix','location','0x2e9','setppbot','getProfilePicture','listMessage','0x3e5','45pnDXmB','0x237','0x2e0','next*\x20—\x20find\x20a\x20new\x20partner\x0aUsername:','toimg','Video','musuhan','0x256','0x261','bot','sendMessage','slow','0x2f5','0x2fb','0x50f','0x367','topuphago','0x3c1','0x2a1','herodetail','Detik\x20Vn','0x469','delsesi\x20ttt','Menampilkan\x20List\x20Group\x20Bot\x20Bergabung\x0ause\x20command:\x20','0x462','0x50a','Join','Download\x20Gambar\x20Website\x0ause\x20command:\x20','0x38c','Hero\x20Detail','0x3a3','Developer\x20Bot','Menjadi\x20Bot\x20Secara\x20Permanen\x0ause\x20command:\x20','0x3e0','Ocr','0x244','giftlimit','Bot\x20Keluar\x20Group\x0ause\x20command:\x20','groupsetting','Fitur\x20Keluar\x20Group\x0ause\x20command:\x20','0x278','0x4b5','0x29d','0x41c','fastvid','0x2c7','0x481','Get','0x3b3','Informasi\x20Group\x0ause\x20command:\x20','?text=Hai+boleh+kenalan+gak\x0a','0x21a','0x39d','Bass\x20Vid','0x4ab','0x444','floor','readall','bokepers','sahabatan','0x324','Rdp\x20Store','0x508','blocklist','20396asrgJa','0x352','Tipe\x20Menu\x20Bot\x0ause\x20command:\x20','0x3b7','0x220','setppgroup','0x4eb','0x34c','Leave','0x453','Call\x20me!','0x435','0x340','delpc','0x43d','List\x20Badword','Bot\x20Join\x20Group','0x3d0','0x4f6','Menu','Set\x20Menu\x20Yang\x20Di\x20inginkan','0x32b','0x263','Reverse','0x2d8','0x2a2','0x4c5','0x22d','shift','Developer','0x318','0x405','Demote\x20Member\x0ause\x20command:\x20','0x257','0x4ae','Download\x20Video\x20Atau\x20Gambar\x20Yang\x20Ada\x20Di\x20Tiktok\x0ause\x20command:\x20','Nomor\x20Developer\x20Bot','0x414','nightcore','0x3a4','0x433','Search\x20Text','listcmd','0x204','Menyiarkan\x20Pesan\x20Ke\x20Semua\x20Orang\x0ause\x20command:\x20','0x2a7','0x1fc','0x383','Download\x20Gambar\x20Yang\x20Ada\x20Di\x20Pinterest\x0ause\x20command:\x20','0x495','0x3cb','To\x20Huruf','0x4ef','lirik','0x441','bisakah','0x4d4','Teks','ghostvid','Leave\x20Time','0x47c','0x1df','0x4b6','0x4c6','0x44d','0x3fe','0x1e2','topuppb','templateButtons','0x23d','0x2d5','0x423','zeksmenu','0x465','0x4ff','family100','Bagaimanakah','Gift\x20Limit','topupefef','0x28d','0x21c','0x38e','0x273','Hidetag\x20Semua\x20Member\x20Group\x0ause\x20command:\x20','0x3e9','0x2a9','rules','0x2a3','Semua\x20Pesan\x20Tiak\x20Dibaca\x0ause\x20command:\x20','0x33b','0x3f7','0x366','0x4ed','Memutar\x20Musik\x20Yang\x20Di\x20Inginkan\x0ause\x20command:\x20','Robot','settheme','0x332','Mute','0x314','CONVERT\x20MENU','0x2d1','testod','0x413','rdpstore','0x377','0x3ed','0x268','Mengganti\x20Sticker\x0ause\x20command:\x20','Jodohku','Nolep\x20Cek','0x48d','grupmenu','0x417','@s.whatsapp.net','0x3c2','Untuk\x20Membuat\x20Stiker,\x20type:\x20#stiker\x20reply\x20[gambar]','0x342','Cek\x20History','terpintar','addbadword','groupinfo','0x47d','0x1eb','0x298','0x214','wibu','Del\x20Video','0x2c5','0x260','sewabot','0x4b9','Kick\x20All','0x381','0x2aa','Set\x20Group','Anti\x20Virtex','0x432','UnPin','Delete\x20Pc','0x310','0x4c0','0x451','menugame','0x461','0x2c9','0x349','0x359','Menambahkan\x20Badword\x0ause\x20command:\x20','Mode\x20Bot\x0ause\x20command:\x20','0x42e','aesthetic','GAME\x20MENU','Cat','0x4e5','0x2d3','Syarat\x20Dan\x20Peraturan','sangecek','terbodoh','0x457'];_0x350b=function(){return _0x37be52;};return _0x350b();}(function(_0x17e6cd,_0x51b39d){const _0x2404ae=_0x2eaf,_0x3247ae=_0x17e6cd();while(!![]){try{const _0x4193fd=-parseInt(_0x2404ae('0x601'))/0x1+parseInt(_0x2404ae('0x49e'))/0x2+parseInt(_0x2404ae('0x38b'))/0x3+-parseInt(_0x2404ae('0x118'))/0x4+parseInt(_0x2404ae('0x6e8'))/0x5*(-parseInt(_0x2404ae('0x571'))/0x6)+-parseInt(_0x2404ae('0x733'))/0x7+parseInt(_0x2404ae('0x3cc'))/0x8*(parseInt(_0x2404ae('0x5c1'))/0x9);if(_0x4193fd===_0x51b39d)break;else _0x3247ae['push'](_0x3247ae['shift']());}catch(_0x3841cb){_0x3247ae['push'](_0x3247ae['shift']());}}}(_0x350b,0x8463b));function _0x12e1(_0x5e4456,_0x1c017c){const _0x1d2568=_0x31e9();return _0x12e1=function(_0x29d6fa,_0x34f5c8){_0x29d6fa=_0x29d6fa-0x1de;let _0x37deba=_0x1d2568[_0x29d6fa];return _0x37deba;},_0x12e1(_0x5e4456,_0x1c017c);}const _0x3f7484=_0x12e1;(function(_0xcfd304,_0x5cb96f){const _0x2420e6=_0x2eaf,_0x4071f8=_0x12e1,_0x5c7593=_0xcfd304();while(!![]){try{const _0x538167=-parseInt(_0x4071f8(_0x2420e6('0x2a6')))/0x1*(parseInt(_0x4071f8(_0x2420e6('0x667')))/0x2)+-parseInt(_0x4071f8(_0x2420e6('0x275')))/0x3+-parseInt(_0x4071f8(_0x2420e6('0x604')))/0x4*(-parseInt(_0x4071f8(_0x2420e6('0x1ac')))/0x5)+-parseInt(_0x4071f8(_0x2420e6('0x2b3')))/0x6+parseInt(_0x4071f8(_0x2420e6('0x12b')))/0x7+parseInt(_0x4071f8(_0x2420e6('0x4e7')))/0x8+-parseInt(_0x4071f8(_0x2420e6('0x602')))/0x9;if(_0x538167===_0x5cb96f)break;else _0x5c7593[_0x2420e6('0x517')](_0x5c7593[_0x2420e6('0x61d')]());}catch(_0x38c416){_0x5c7593[_0x2420e6('0x517')](_0x5c7593[_0x2420e6('0x61d')]());}}}(_0x31e9,0xea5ab));switch(command){case _0x3f7484(_0x59d7f6('0x127')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);stopjadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek);break;case _0x3f7484(_0x59d7f6('0x19d')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isOwner)return replysticker(ownerstc);if(!isOwner)return reply(_0x3f7484(_0x59d7f6('0x4e1')));jadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek);break;case _0x3f7484(_0x59d7f6('0x16d')):case _0x3f7484(_0x59d7f6('0x1a9')):if(msgFilter[_0x3f7484(_0x59d7f6('0x29a'))](from))return replysticker(spamstc);if(isRegistered)return replysticker(registc);await addRegisteredUser(sender),setTimeout(()=>{const _0x1ed4a5=_0x59d7f6,_0x586a66=_0x3f7484,_0x845366=[{'buttonId':_0x586a66(_0x1ed4a5('0x304')),'buttonText':{'displayText':_0x586a66(_0x1ed4a5('0x251'))},'type':0x1},{'buttonId':_0x586a66(_0x1ed4a5('0x43c')),'buttonText':{'displayText':_0x586a66(_0x1ed4a5('0x710'))},'type':0x1}],_0x3d806e={'contentText':_0x586a66(_0x1ed4a5('0x149'))+prefix+_0x586a66(_0x1ed4a5('0x5d2')),'footerText':support,'buttons':_0x845366,'headerType':0x6,'locationMessage':daftarnoss[_0x586a66(_0x1ed4a5('0x6c5'))][_0x586a66(_0x1ed4a5('0x51c'))]};client[_0x586a66(_0x1ed4a5('0x4cf'))](from,_0x3d806e,MessageType[_0x586a66(_0x1ed4a5('0x3a4'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player,numbernye,dev,ow]}});},0x1388),replysticker(waitstc),regisinfo===!![]&&setTimeout(()=>{const _0x57217f=_0x59d7f6,_0x585de4=_0x3f7484;client[_0x585de4(_0x57217f('0x4cf'))](ow,_0x585de4(_0x57217f('0x680'))+player[_0x585de4(_0x57217f('0x253'))]('@')[0x0],text,{'quoted':{'key':{'fromMe':![],'participant':_0x585de4(_0x57217f('0x181')),'remoteJid':_0x585de4(_0x57217f('0x3e5'))},'message':{'orderMessage':{'itemCount':''+_registered[_0x585de4(_0x57217f('0x48c'))],'status':0xc8,'thumbnail':buffer,'surface':0xc8,'message':_0x585de4(_0x57217f('0x577'))+kyun(process[_0x585de4(_0x57217f('0x61f'))]()),'orderTitle':'L','sellerJid':_0x585de4(_0x57217f('0x181'))}}},'contextInfo':{'sendEphemeral':!![],'mentionedJid':[player]}});},0x7d0),autobackup===!![]&&setTimeout(()=>{const _0x706165=_0x59d7f6,_0x1b4f32=_0x3f7484;client[_0x1b4f32(_0x706165('0x4cf'))](ow,fs[_0x1b4f32(_0x706165('0x633'))](_0x1b4f32(_0x706165('0x30a'))),document,{'mimetype':_0x1b4f32(_0x706165('0x37c')),'filename':_0x1b4f32(_0x706165('0x5d0'))});},0xbb8),console[_0x3f7484(_0x59d7f6('0x61b'))](color(_0x3f7484(_0x59d7f6('0x26c'))),color(_registered[_0x3f7484(_0x59d7f6('0x48c'))],_0x3f7484(_0x59d7f6('0x4c5'))),_0x3f7484(_0x59d7f6('0x643')),color(sender,_0x3f7484(_0x59d7f6('0x314'))));break;case _0x3f7484(_0x59d7f6('0x43c')):case _0x3f7484(_0x59d7f6('0x354')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);client[_0x3f7484(_0x59d7f6('0x4cf'))](from,{'displayName':_0x3f7484(_0x59d7f6('0x450')),'contacts':contrii},_0x3f7484(_0x59d7f6('0x503')),{'quoted':mek});break;case _0x3f7484(_0x59d7f6('0x15b')):const templateButtons=[{'index':0x1,'urlButton':{'displayText':_0x3f7484(_0x59d7f6('0xeb')),'url':_0x3f7484(_0x59d7f6('0x422'))}},{'index':0x2,'callButton':{'displayText':_0x3f7484(_0x59d7f6('0x55e')),'phoneNumber':_0x3f7484(_0x59d7f6('0x6c7'))}},{'index':0x3,'quickReplyButton':{'displayText':_0x3f7484(_0x59d7f6('0x115')),'id':_0x3f7484(_0x59d7f6('0x3e1'))}}],templateMessage={'text':_0x3f7484(_0x59d7f6('0x453')),'footer':_0x3f7484(_0x59d7f6('0x532')),'templateButtons':templateButtons};client[_0x3f7484(_0x59d7f6('0x4cf'))](from,templateMessage,MessageType[_0x3f7484(_0x59d7f6('0x4a7'))]);break;case _0x3f7484(_0x59d7f6('0x278')):case _0x3f7484(_0x59d7f6('0x119')):case _0x3f7484(_0x59d7f6('0x487')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);teks=_0x3f7484(_0x59d7f6('0x4b5'))+NamaBot+_0x3f7484(_0x59d7f6('0x1af'))+ow[_0x3f7484(_0x59d7f6('0x253'))]('@')[0x0]+_0x3f7484(_0x59d7f6('0x541'))+NamaBot+_0x3f7484(_0x59d7f6('0x49c'))+support,Sendbutdocument(from,buttonshello,teks,[{'buttonId':_0x3f7484(_0x59d7f6('0x304')),'buttonText':{'displayText':_0x3f7484(_0x59d7f6('0x13b'))},'type':0x1},{'buttonId':_0x3f7484(_0x59d7f6('0x43c')),'buttonText':{'displayText':_0x3f7484(_0x59d7f6('0x367'))},'type':0x1}],{'quoted':ftoko,'contextInfo':{'mentionedJid':[ow,player,dev,numbernye],'sendEphemeral':!![],'externalAdReply':{'title':''+hahh,'mediaType':'2','thumbnail':wipiaa,'mediaUrl':_0x3f7484(_0x59d7f6('0x1ec'))}}});let resulta=audionye[Math[_0x3f7484(_0x59d7f6('0x71b'))](Math[_0x3f7484(_0x59d7f6('0x501'))]()*audionye[_0x3f7484(_0x59d7f6('0x48c'))])];result=fs[_0x3f7484(_0x59d7f6('0x633'))](_0x3f7484(_0x59d7f6('0x617'))+resulta+_0x3f7484(_0x59d7f6('0x5d9'))),client[_0x3f7484(_0x59d7f6('0x4cf'))](from,result,audio,{'mimetype':_0x3f7484(_0x59d7f6('0x269')),'ptt':!![],'quoted':mek});break;case _0x3f7484(_0x59d7f6('0x2ca')):case _0x3f7484(_0x59d7f6('0x27b')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x4bd')),'description':_0x3f7484(_0x59d7f6('0x452'))+prefix+_0x3f7484(_0x59d7f6('0x65c')),'rowId':_0x3f7484(_0x59d7f6('0x6c0'))},{'title':_0x3f7484(_0x59d7f6('0x533')),'description':_0x3f7484(_0x59d7f6('0x107'))+prefix+_0x3f7484(_0x59d7f6('0x5b2')),'rowId':_0x3f7484(_0x59d7f6('0x5b2'))},{'title':_0x3f7484(_0x59d7f6('0x73d')),'description':_0x3f7484(_0x59d7f6('0x107'))+prefix+_0x3f7484(_0x59d7f6('0x207')),'rowId':_0x3f7484(_0x59d7f6('0x207'))},{'title':_0x3f7484(_0x59d7f6('0x443')),'description':_0x3f7484(_0x59d7f6('0x6a2'))+prefix+_0x3f7484(_0x59d7f6('0x2c8')),'rowId':_0x3f7484(_0x59d7f6('0x2c8'))},{'title':_0x3f7484(_0x59d7f6('0x36a')),'description':_0x3f7484(_0x59d7f6('0x21f'))+prefix+_0x3f7484(_0x59d7f6('0x4f1')),'rowId':_0x3f7484(_0x59d7f6('0x4f1'))},{'title':_0x3f7484(_0x59d7f6('0x51b')),'description':_0x3f7484(_0x59d7f6('0x17e'))+prefix+_0x3f7484(_0x59d7f6('0x159')),'rowId':_0x3f7484(_0x59d7f6('0x159'))},{'title':_0x3f7484(_0x59d7f6('0x4d9')),'description':_0x3f7484(_0x59d7f6('0x6bf'))+prefix+_0x3f7484(_0x59d7f6('0x65c')),'rowId':_0x3f7484(_0x59d7f6('0x65c'))},{'title':_0x3f7484(_0x59d7f6('0x19a')),'description':_0x3f7484(_0x59d7f6('0x435'))+prefix+_0x3f7484(_0x59d7f6('0x2c0')),'rowId':_0x3f7484(_0x59d7f6('0x2c0'))},{'title':'Bc','description':_0x3f7484(_0x59d7f6('0x6be'))+prefix+'bc','rowId':'bc'},{'title':_0x3f7484(_0x59d7f6('0x170')),'description':_0x3f7484(_0x59d7f6('0x336'))+prefix+_0x3f7484(_0x59d7f6('0x50e')),'rowId':_0x3f7484(_0x59d7f6('0x50e'))},{'title':_0x3f7484(_0x59d7f6('0x555')),'description':_0x3f7484(_0x59d7f6('0x1ba'))+prefix+_0x3f7484(_0x59d7f6('0x689'))+prefix+_0x3f7484(_0x59d7f6('0x692')),'rowId':_0x3f7484(_0x59d7f6('0x692'))},{'title':_0x3f7484(_0x59d7f6('0x183')),'description':_0x3f7484(_0x59d7f6('0x1c0'))+prefix+_0x3f7484(_0x59d7f6('0x6e2')),'rowId':_0x3f7484(_0x59d7f6('0x6e2'))},{'title':_0x3f7484(_0x59d7f6('0x479')),'description':_0x3f7484(_0x59d7f6('0x630'))+prefix+_0x3f7484(_0x59d7f6('0x65b')),'rowId':_0x3f7484(_0x59d7f6('0x65b'))},{'title':_0x3f7484(_0x59d7f6('0x17a')),'description':_0x3f7484(_0x59d7f6('0x72b'))+prefix+_0x3f7484(_0x59d7f6('0x6f1')),'rowId':_0x3f7484(_0x59d7f6('0x6f1'))},{'title':_0x3f7484(_0x59d7f6('0x6d6')),'description':_0x3f7484(_0x59d7f6('0x736'))+prefix+_0x3f7484(_0x59d7f6('0x2fa')),'rowId':_0x3f7484(_0x59d7f6('0x2fa'))},{'title':_0x3f7484(_0x59d7f6('0x378')),'description':_0x3f7484(_0x59d7f6('0x53a'))+prefix+_0x3f7484(_0x59d7f6('0x754')),'rowId':_0x3f7484(_0x59d7f6('0x754'))},{'title':_0x3f7484(_0x59d7f6('0x4c2')),'description':_0x3f7484(_0x59d7f6('0x262'))+prefix+_0x3f7484(_0x59d7f6('0x504')),'rowId':_0x3f7484(_0x59d7f6('0x504'))},{'title':_0x3f7484(_0x59d7f6('0x156')),'description':_0x3f7484(_0x59d7f6('0x2ea'))+prefix+_0x3f7484(_0x59d7f6('0x340')),'rowId':_0x3f7484(_0x59d7f6('0x340'))},{'title':_0x3f7484(_0x59d7f6('0x30d')),'description':_0x3f7484(_0x59d7f6('0x238'))+prefix+_0x3f7484(_0x59d7f6('0x74c')),'rowId':_0x3f7484(_0x59d7f6('0x74c'))},{'title':_0x3f7484(_0x59d7f6('0x47c')),'description':_0x3f7484(_0x59d7f6('0x1bd'))+prefix+_0x3f7484(_0x59d7f6('0x1ca')),'rowId':_0x3f7484(_0x59d7f6('0x1ca'))},{'title':_0x3f7484(_0x59d7f6('0x301')),'description':_0x3f7484(_0x59d7f6('0x572'))+prefix+_0x3f7484(_0x59d7f6('0x27a')),'rowId':_0x3f7484(_0x59d7f6('0x27a'))},{'title':_0x3f7484(_0x59d7f6('0x15c')),'description':_0x3f7484(_0x59d7f6('0x749'))+prefix+_0x3f7484(_0x59d7f6('0x28a')),'rowId':_0x3f7484(_0x59d7f6('0x28a'))},{'title':_0x3f7484(_0x59d7f6('0x54d')),'description':_0x3f7484(_0x59d7f6('0x51a'))+prefix+_0x3f7484(_0x59d7f6('0x1dc')),'rowId':_0x3f7484(_0x59d7f6('0x1dc'))},{'title':_0x3f7484(_0x59d7f6('0xec')),'description':_0x3f7484(_0x59d7f6('0x3db'))+prefix+_0x3f7484(_0x59d7f6('0x708')),'rowId':_0x3f7484(_0x59d7f6('0x708'))},{'title':_0x3f7484(_0x59d7f6('0x386')),'description':_0x3f7484(_0x59d7f6('0x646'))+prefix+_0x3f7484(_0x59d7f6('0x3b1')),'rowId':_0x3f7484(_0x59d7f6('0x3b1'))},{'title':'Q','description':_0x3f7484(_0x59d7f6('0x123'))+prefix+'q','rowId':'q'},{'title':_0x3f7484(_0x59d7f6('0x68c')),'description':_0x3f7484(_0x59d7f6('0xf7'))+prefix+_0x3f7484(_0x59d7f6('0x434')),'rowId':_0x3f7484(_0x59d7f6('0x434'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x209')),'description':_0x3f7484(_0x59d7f6('0x1a5'))+prefix+_0x3f7484(_0x59d7f6('0x3a6')),'rowId':_0x3f7484(_0x59d7f6('0x3a6'))},{'title':_0x3f7484(_0x59d7f6('0x3ea')),'description':_0x3f7484(_0x59d7f6('0x21b'))+prefix+_0x3f7484(_0x59d7f6('0x578')),'rowId':_0x3f7484(_0x59d7f6('0x578'))},{'title':_0x3f7484(_0x59d7f6('0x5eb')),'description':_0x3f7484(_0x59d7f6('0x37e'))+prefix+_0x3f7484(_0x59d7f6('0x5c0')),'rowId':_0x3f7484(_0x59d7f6('0x5c0'))},{'title':_0x3f7484(_0x59d7f6('0x45a')),'description':_0x3f7484(_0x59d7f6('0x406'))+prefix+_0x3f7484(_0x59d7f6('0x365')),'rowId':_0x3f7484(_0x59d7f6('0x365'))},{'title':_0x3f7484(_0x59d7f6('0x148')),'description':_0x3f7484(_0x59d7f6('0x2bd'))+prefix+_0x3f7484(_0x59d7f6('0x28b')),'rowId':_0x3f7484(_0x59d7f6('0x28b'))},{'title':_0x3f7484(_0x59d7f6('0x2f2')),'description':_0x3f7484(_0x59d7f6('0x17c'))+prefix+_0x3f7484(_0x59d7f6('0x6b9')),'rowId':_0x3f7484(_0x59d7f6('0x6b9'))}],buttonMessage2=[{'title':_0x3f7484(_0x59d7f6('0x212')),'description':_0x3f7484(_0x59d7f6('0x169'))+prefix+_0x3f7484(_0x59d7f6('0x51f')),'rowId':_0x3f7484(_0x59d7f6('0x397'))},{'title':_0x3f7484(_0x59d7f6('0x632')),'description':_0x3f7484(_0x59d7f6('0x6a8'))+prefix+_0x3f7484(_0x59d7f6('0x18e')),'rowId':_0x3f7484(_0x59d7f6('0x18e'))},{'title':_0x3f7484(_0x59d7f6('0x19e')),'description':_0x3f7484(_0x59d7f6('0x48d'))+prefix+_0x3f7484(_0x59d7f6('0x1a6')),'rowId':_0x3f7484(_0x59d7f6('0x1a6'))}],buttonMessage4=[{'title':_0x3f7484(_0x59d7f6('0x233')),'description':_0x3f7484(_0x59d7f6('0x542'))+prefix+_0x3f7484(_0x59d7f6('0x34e')),'rowId':_0x3f7484(_0x59d7f6('0x34e'))},{'title':_0x3f7484(_0x59d7f6('0x32b')),'description':_0x3f7484(_0x59d7f6('0x198'))+prefix+_0x3f7484(_0x59d7f6('0x296')),'rowId':_0x3f7484(_0x59d7f6('0x296'))},{'title':_0x3f7484(_0x59d7f6('0x310')),'description':_0x3f7484(_0x59d7f6('0x2fd'))+prefix+_0x3f7484(_0x59d7f6('0x467')),'rowId':_0x3f7484(_0x59d7f6('0x467'))},{'title':_0x3f7484(_0x59d7f6('0x42b')),'description':_0x3f7484(_0x59d7f6('0x240'))+prefix+_0x3f7484(_0x59d7f6('0x3c7')),'rowId':_0x3f7484(_0x59d7f6('0x3c7'))},{'title':_0x3f7484(_0x59d7f6('0x22b')),'description':_0x3f7484(_0x59d7f6('0x5c2'))+prefix+_0x3f7484(_0x59d7f6('0x587')),'rowId':_0x3f7484(_0x59d7f6('0x587'))},{'title':_0x3f7484(_0x59d7f6('0x586')),'description':_0x3f7484(_0x59d7f6('0x35c'))+prefix+_0x3f7484(_0x59d7f6('0x100')),'rowId':_0x3f7484(_0x59d7f6('0x100'))},{'title':_0x3f7484(_0x59d7f6('0x2da')),'description':_0x3f7484(_0x59d7f6('0x20e'))+prefix+_0x3f7484(_0x59d7f6('0x3ee')),'rowId':_0x3f7484(_0x59d7f6('0x3ee'))},{'title':_0x3f7484(_0x59d7f6('0x1e7')),'description':_0x3f7484(_0x59d7f6('0x2bc'))+prefix+_0x3f7484(_0x59d7f6('0x731')),'rowId':_0x3f7484(_0x59d7f6('0x731'))}],buttonMessage5=[{'title':_0x3f7484(_0x59d7f6('0x730')),'description':_0x3f7484(_0x59d7f6('0x48b'))+prefix+_0x3f7484(_0x59d7f6('0x588')),'rowId':_0x3f7484(_0x59d7f6('0x588'))},{'title':_0x3f7484(_0x59d7f6('0x1e3')),'description':_0x3f7484(_0x59d7f6('0x42c'))+prefix+_0x3f7484(_0x59d7f6('0x6ef')),'rowId':_0x3f7484(_0x59d7f6('0x6ef'))},{'title':_0x3f7484(_0x59d7f6('0x246')),'description':_0x3f7484(_0x59d7f6('0xf0'))+prefix+_0x3f7484(_0x59d7f6('0x377')),'rowId':_0x3f7484(_0x59d7f6('0x377'))},{'title':_0x3f7484(_0x59d7f6('0x696')),'description':_0x3f7484(_0x59d7f6('0x739'))+prefix+_0x3f7484(_0x59d7f6('0x50c')),'rowId':_0x3f7484(_0x59d7f6('0x50c'))},{'title':_0x3f7484(_0x59d7f6('0x594')),'description':_0x3f7484(_0x59d7f6('0x2ed'))+prefix+_0x3f7484(_0x59d7f6('0x129')),'rowId':_0x3f7484(_0x59d7f6('0x129'))},{'title':_0x3f7484(_0x59d7f6('0xe3')),'description':_0x3f7484(_0x59d7f6('0x500'))+prefix+_0x3f7484(_0x59d7f6('0x740')),'rowId':_0x3f7484(_0x59d7f6('0x740'))},{'title':_0x3f7484(_0x59d7f6('0x2cb')),'description':_0x3f7484(_0x59d7f6('0x316'))+prefix+_0x3f7484(_0x59d7f6('0x2b9')),'rowId':_0x3f7484(_0x59d7f6('0x2b9'))},{'title':_0x3f7484(_0x59d7f6('0x548')),'description':_0x3f7484(_0x59d7f6('0x5f4'))+prefix+_0x3f7484(_0x59d7f6('0x287')),'rowId':_0x3f7484(_0x59d7f6('0x287'))},{'title':_0x3f7484(_0x59d7f6('0x669')),'description':_0x3f7484(_0x59d7f6('0x22a'))+prefix+_0x3f7484(_0x59d7f6('0x48e')),'rowId':_0x3f7484(_0x59d7f6('0x48e'))},{'title':_0x3f7484(_0x59d7f6('0x69a')),'description':_0x3f7484(_0x59d7f6('0x316'))+prefix+_0x3f7484(_0x59d7f6('0x49b')),'rowId':_0x3f7484(_0x59d7f6('0x49b'))},{'title':_0x3f7484(_0x59d7f6('0x415')),'description':_0x3f7484(_0x59d7f6('0x357'))+prefix+_0x3f7484(_0x59d7f6('0x346')),'rowId':_0x3f7484(_0x59d7f6('0x346'))},{'title':_0x3f7484(_0x59d7f6('0x6ad')),'description':_0x3f7484(_0x59d7f6('0x1b6'))+prefix+_0x3f7484(_0x59d7f6('0x483')),'rowId':_0x3f7484(_0x59d7f6('0x483'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x367')),'rows':buttonMessage},{'title':_0x3f7484(_0x59d7f6('0x2ac')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x3c4')),'rows':buttonMessage5},{'title':_0x3f7484(_0x59d7f6('0x640')),'rows':buttonMessage4},{'title':_0x3f7484(_0x59d7f6('0x338')),'rows':buttonMessage2}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x619')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x27b'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x6f3')):case _0x3f7484(_0x59d7f6('0x4e8')):case _0x3f7484(_0x59d7f6('0x374')):case _0x3f7484(_0x59d7f6('0x6b3')):case _0x3f7484(_0x59d7f6('0x622')):case _0x3f7484(_0x59d7f6('0x103')):case _0x3f7484(_0x59d7f6('0x3dd')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x622'))](pushname,prefix,sender,getLevelingXp,getLevelingLevel,checkHealuser,checkATKuser,checkARMuser,checkPWRuser,checkSKLuser,checkDEFuser,checkSPDuser,checkMGCuser,checkLUKuser,heartbars,checkLimituser,potionpointa,megapotionpointa,uangku,reqXp,role,prema,player)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x304')):case _0x3f7484(_0x59d7f6('0x487')):case _0x3f7484(_0x59d7f6('0x119')):case _0x3f7484(_0x59d7f6('0x278')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x63f')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x73b'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x63d')),'description':_0x3f7484(_0x59d7f6('0x683')),'rowId':_0x3f7484(_0x59d7f6('0x4fb'))},{'title':_0x3f7484(_0x59d7f6('0x32c')),'description':_0x3f7484(_0x59d7f6('0x56f')),'rowId':_0x3f7484(_0x59d7f6('0x276'))},{'title':_0x3f7484(_0x59d7f6('0x539')),'description':_0x3f7484(_0x59d7f6('0x690')),'rowId':_0x3f7484(_0x59d7f6('0x639'))},{'title':_0x3f7484(_0x59d7f6('0x150')),'description':_0x3f7484(_0x59d7f6('0x3f7')),'rowId':_0x3f7484(_0x59d7f6('0x597'))},{'title':_0x3f7484(_0x59d7f6('0x1f5')),'description':_0x3f7484(_0x59d7f6('0x580')),'rowId':_0x3f7484(_0x59d7f6('0x5f7'))},{'title':_0x3f7484(_0x59d7f6('0x393')),'description':_0x3f7484(_0x59d7f6('0x691')),'rowId':_0x3f7484(_0x59d7f6('0x3ca'))},{'title':_0x3f7484(_0x59d7f6('0x2c9')),'description':_0x3f7484(_0x59d7f6('0x691')),'rowId':_0x3f7484(_0x59d7f6('0x320'))},{'title':_0x3f7484(_0x59d7f6('0x3ab')),'description':_0x3f7484(_0x59d7f6('0x743')),'rowId':_0x3f7484(_0x59d7f6('0x222'))},{'title':_0x3f7484(_0x59d7f6('0x112')),'description':_0x3f7484(_0x59d7f6('0x26a')),'rowId':_0x3f7484(_0x59d7f6('0x1a4'))},{'title':_0x3f7484(_0x59d7f6('0x4e9')),'description':_0x3f7484(_0x59d7f6('0x1e5')),'rowId':_0x3f7484(_0x59d7f6('0x2ca'))}],buttonMessage2=[{'title':_0x3f7484(_0x59d7f6('0x176')),'description':_0x3f7484(_0x59d7f6('0x61a')),'rowId':_0x3f7484(_0x59d7f6('0x3da'))}],buttonMessage3=[{'title':_0x3f7484(_0x59d7f6('0x148')),'description':_0x3f7484(_0x59d7f6('0x4bb')),'rowId':_0x3f7484(_0x59d7f6('0x28b'))},{'title':_0x3f7484(_0x59d7f6('0x2f2')),'description':_0x3f7484(_0x59d7f6('0x4ac')),'rowId':_0x3f7484(_0x59d7f6('0x6b9'))},{'title':_0x3f7484(_0x59d7f6('0x46e')),'description':_0x3f7484(_0x59d7f6('0x661')),'rowId':_0x3f7484(_0x59d7f6('0x39c'))},{'title':_0x3f7484(_0x59d7f6('0x2cf')),'description':_0x3f7484(_0x59d7f6('0x50a')),'rowId':_0x3f7484(_0x59d7f6('0x4fd'))},{'title':_0x3f7484(_0x59d7f6('0x5ee')),'description':_0x3f7484(_0x59d7f6('0x2cd')),'rowId':_0x3f7484(_0x59d7f6('0x3b0'))},{'title':_0x3f7484(_0x59d7f6('0x277')),'description':_0x3f7484(_0x59d7f6('0x4d5')),'rowId':_0x3f7484(_0x59d7f6('0x550'))},{'title':_0x3f7484(_0x59d7f6('0x5d3')),'description':_0x3f7484(_0x59d7f6('0x5b4')),'rowId':_0x3f7484(_0x59d7f6('0x6ec'))},{'title':_0x3f7484(_0x59d7f6('0x1c4')),'description':_0x3f7484(_0x59d7f6('0x3b6')),'rowId':_0x3f7484(_0x59d7f6('0x623'))},{'title':_0x3f7484(_0x59d7f6('0x1f8')),'description':_0x3f7484(_0x59d7f6('0x128')),'rowId':'sc'}],buttonMessage4=[{'title':_0x3f7484(_0x59d7f6('0x6ab')),'description':_0x3f7484(_0x59d7f6('0x4aa')),'rowId':_0x3f7484(_0x59d7f6('0x1ad'))}],buttonMessage5=[{'title':_0x3f7484(_0x59d7f6('0x466')),'description':_0x3f7484(_0x59d7f6('0x3e8')),'rowId':_0x3f7484(_0x59d7f6('0x65a'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x750')),'rows':buttonMessage},{'title':_0x3f7484(_0x59d7f6('0x102')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x176')),'rows':buttonMessage2},{'title':_0x3f7484(_0x59d7f6('0x67c')),'rows':buttonMessage3},{'title':_0x3f7484(_0x59d7f6('0xf9')),'rows':buttonMessage4},{'title':_0x3f7484(_0x59d7f6('0x5ce')),'rows':buttonMessage5}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x251')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x304'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x73b')):case _0x3f7484(_0x59d7f6('0x628')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x5e9')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x339'))},{'title':_0x3f7484(_0x59d7f6('0x3b8')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x608'))},{'title':_0x3f7484(_0x59d7f6('0x403')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x26d'))},{'title':_0x3f7484(_0x59d7f6('0x653')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x387'))},{'title':_0x3f7484(_0x59d7f6('0x34c')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x428'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x373')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x193'))},{'title':_0x3f7484(_0x59d7f6('0x73a')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x2a3'))},{'title':_0x3f7484(_0x59d7f6('0x6c9')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x208'))},{'title':_0x3f7484(_0x59d7f6('0x34f')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x546'))},{'title':_0x3f7484(_0x59d7f6('0x612')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x1df'))},{'title':_0x3f7484(_0x59d7f6('0x2ec')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x650'))},{'title':_0x3f7484(_0x59d7f6('0x328')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x226'))},{'title':_0x3f7484(_0x59d7f6('0x256')),'description':'','rowId':_0x3f7484(_0x59d7f6('0x199'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x750')),'rows':buttonMessage},{'title':_0x3f7484(_0x59d7f6('0x451')),'rows':buttonMessage1}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x398')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x628'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x276')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0x3f7484(_0x59d7f6('0x3c2'))](_0x3f7484(_0x59d7f6('0x181')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x285'))],sendCatalogMenu(ind[_0x3f7484(_0x59d7f6('0x6a1'))](prefix),imeg);break;case _0x3f7484(_0x59d7f6('0x42a')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0x3f7484(_0x59d7f6('0x3c2'))](_0x3f7484(_0x59d7f6('0x181')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x285'))],sendCatalogMenu(ind[_0x3f7484(_0x59d7f6('0x6a1'))](prefix),imeg);break;case _0x3f7484(_0x59d7f6('0x4fb')):if(isBanned)return replysticker(banstc);if(!isRegistered){if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}}imeu=await client[_0x3f7484(_0x59d7f6('0x3c2'))](_0x3f7484(_0x59d7f6('0x181')),WMthumb,image,{'thumbnail':WMthumb}),imeg=imeu[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x285'))],sendCatalogMenu(ind[_0x3f7484(_0x59d7f6('0x304'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x628'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x639'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x3ca'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x5f7'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x1a4'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x6a1'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x14c'))](prefix)+ind[_0x3f7484(_0x59d7f6('0x27b'))](prefix),imeg);break;case _0x3f7484(_0x59d7f6('0x1a4')):case _0x3f7484(_0x59d7f6('0x5b7')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x367')),'description':_0x3f7484(_0x59d7f6('0x37a'))+prefix+_0x3f7484(_0x59d7f6('0x43c')),'rowId':_0x3f7484(_0x59d7f6('0x43c'))},{'title':_0x3f7484(_0x59d7f6('0x432')),'description':_0x3f7484(_0x59d7f6('0x2b2'))+prefix+_0x3f7484(_0x59d7f6('0x39c')),'rowId':_0x3f7484(_0x59d7f6('0x39c'))},{'title':_0x3f7484(_0x59d7f6('0x1f8')),'description':_0x3f7484(_0x59d7f6('0x16e'))+prefix+'sc','rowId':'sc'},{'title':_0x3f7484(_0x59d7f6('0x66a')),'description':_0x3f7484(_0x59d7f6('0x2fb'))+prefix+_0x3f7484(_0x59d7f6('0x163')),'rowId':_0x3f7484(_0x59d7f6('0x163'))},{'title':_0x3f7484(_0x59d7f6('0x1c4')),'description':_0x3f7484(_0x59d7f6('0x707'))+prefix+_0x3f7484(_0x59d7f6('0x623')),'rowId':_0x3f7484(_0x59d7f6('0x623'))},{'title':_0x3f7484(_0x59d7f6('0x3ad')),'description':_0x3f7484(_0x59d7f6('0x2ba'))+prefix+_0x3f7484(_0x59d7f6('0x3b0')),'rowId':_0x3f7484(_0x59d7f6('0x3b0'))},{'title':_0x3f7484(_0x59d7f6('0x5ec')),'description':_0x3f7484(_0x59d7f6('0x2b5'))+prefix+_0x3f7484(_0x59d7f6('0x4fd')),'rowId':_0x3f7484(_0x59d7f6('0x4fd'))},{'title':_0x3f7484(_0x59d7f6('0x427')),'description':_0x3f7484(_0x59d7f6('0x44b'))+prefix+_0x3f7484(_0x59d7f6('0x3ae')),'rowId':_0x3f7484(_0x59d7f6('0x3ae'))},{'title':_0x3f7484(_0x59d7f6('0x11e')),'description':_0x3f7484(_0x59d7f6('0x729'))+prefix+_0x3f7484(_0x59d7f6('0x6aa')),'rowId':_0x3f7484(_0x59d7f6('0x6aa'))},{'title':_0x3f7484(_0x59d7f6('0x19b')),'description':_0x3f7484(_0x59d7f6('0x380'))+prefix+_0x3f7484(_0x59d7f6('0x117')),'rowId':_0x3f7484(_0x59d7f6('0x117'))},{'title':_0x3f7484(_0x59d7f6('0x3bc')),'description':_0x3f7484(_0x59d7f6('0xdc'))+prefix+_0x3f7484(_0x59d7f6('0x40d')),'rowId':_0x3f7484(_0x59d7f6('0x40d'))},{'title':_0x3f7484(_0x59d7f6('0x20d')),'description':_0x3f7484(_0x59d7f6('0x32d'))+prefix+_0x3f7484(_0x59d7f6('0x249')),'rowId':_0x3f7484(_0x59d7f6('0x249'))},{'title':_0x3f7484(_0x59d7f6('0x18a')),'description':_0x3f7484(_0x59d7f6('0x14a'))+prefix+_0x3f7484(_0x59d7f6('0x1c8')),'rowId':_0x3f7484(_0x59d7f6('0x1c8'))},{'title':_0x3f7484(_0x59d7f6('0x4a1')),'description':_0x3f7484(_0x59d7f6('0x626'))+prefix+_0x3f7484(_0x59d7f6('0x4f4')),'rowId':_0x3f7484(_0x59d7f6('0x4f4'))}],buttonMessage2=[{'title':_0x3f7484(_0x59d7f6('0x5ac')),'description':_0x3f7484(_0x59d7f6('0x701'))+prefix+_0x3f7484(_0x59d7f6('0x6b8')),'rowId':_0x3f7484(_0x59d7f6('0x6b8'))},{'title':_0x3f7484(_0x59d7f6('0x309')),'description':_0x3f7484(_0x59d7f6('0x73c'))+prefix+_0x3f7484(_0x59d7f6('0x4b7')),'rowId':_0x3f7484(_0x59d7f6('0x4b7'))},{'title':_0x3f7484(_0x59d7f6('0x31a')),'description':_0x3f7484(_0x59d7f6('0x62e'))+prefix+_0x3f7484(_0x59d7f6('0x3f0')),'rowId':_0x3f7484(_0x59d7f6('0x3f0'))}],buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x5a6')),'description':_0x3f7484(_0x59d7f6('0x376'))+prefix+_0x3f7484(_0x59d7f6('0x20b')),'rowId':_0x3f7484(_0x59d7f6('0x20b'))},{'title':_0x3f7484(_0x59d7f6('0x171')),'description':_0x3f7484(_0x59d7f6('0x6ea'))+prefix+_0x3f7484(_0x59d7f6('0x6cd')),'rowId':_0x3f7484(_0x59d7f6('0x6cd'))},{'title':_0x3f7484(_0x59d7f6('0x414')),'description':_0x3f7484(_0x59d7f6('0x71e'))+prefix+_0x3f7484(_0x59d7f6('0x1b3')),'rowId':_0x3f7484(_0x59d7f6('0x1b3'))},{'title':_0x3f7484(_0x59d7f6('0x556')),'description':_0x3f7484(_0x59d7f6('0x3c5'))+prefix+_0x3f7484(_0x59d7f6('0x54a')),'rowId':_0x3f7484(_0x59d7f6('0x54a'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x43a')),'rows':buttonMessage},{'title':_0x3f7484(_0x59d7f6('0x112')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x110')),'rows':buttonMessage2}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x388')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x1a4'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x58e')):case _0x3f7484(_0x59d7f6('0x200')):case _0x3f7484(_0x59d7f6('0x3ca')):case _0x3f7484(_0x59d7f6('0x490')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x109')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5c3')),'rowId':_0x3f7484(_0x59d7f6('0x5c3'))},{'title':_0x3f7484(_0x59d7f6('0x6d3')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x3f5')),'rowId':_0x3f7484(_0x59d7f6('0x3f5'))},{'title':_0x3f7484(_0x59d7f6('0x538')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x647')),'rowId':_0x3f7484(_0x59d7f6('0x647'))},{'title':_0x3f7484(_0x59d7f6('0x72e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6c8')),'rowId':_0x3f7484(_0x59d7f6('0x6c8'))},{'title':_0x3f7484(_0x59d7f6('0x151')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x651')),'rowId':_0x3f7484(_0x59d7f6('0x651'))},{'title':_0x3f7484(_0x59d7f6('0x6df')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x220')),'rowId':_0x3f7484(_0x59d7f6('0x220'))},{'title':_0x3f7484(_0x59d7f6('0x219')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4a9')),'rowId':_0x3f7484(_0x59d7f6('0x4a9'))},{'title':_0x3f7484(_0x59d7f6('0x180')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x231')),'rowId':_0x3f7484(_0x59d7f6('0x231'))},{'title':_0x3f7484(_0x59d7f6('0x6b2')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x55c')),'rowId':_0x3f7484(_0x59d7f6('0x55c'))},{'title':_0x3f7484(_0x59d7f6('0x45d')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x64a')),'rowId':_0x3f7484(_0x59d7f6('0x64a'))},{'title':_0x3f7484(_0x59d7f6('0x67a')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x3bd')),'rowId':_0x3f7484(_0x59d7f6('0x3bd'))},{'title':_0x3f7484(_0x59d7f6('0x38d')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x470')),'rowId':_0x3f7484(_0x59d7f6('0x470'))},{'title':_0x3f7484(_0x59d7f6('0x5ab')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x167')),'rowId':_0x3f7484(_0x59d7f6('0x167'))},{'title':_0x3f7484(_0x59d7f6('0x34b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x67d')),'rowId':_0x3f7484(_0x59d7f6('0x67d'))},{'title':_0x3f7484(_0x59d7f6('0x62f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x3d3')),'rowId':_0x3f7484(_0x59d7f6('0x3d3'))},{'title':_0x3f7484(_0x59d7f6('0x254')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x33a')),'rowId':_0x3f7484(_0x59d7f6('0x33a'))},{'title':_0x3f7484(_0x59d7f6('0x737')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2f7')),'rowId':_0x3f7484(_0x59d7f6('0x2f7'))},{'title':_0x3f7484(_0x59d7f6('0x547')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x295')),'rowId':_0x3f7484(_0x59d7f6('0x295'))},{'title':_0x3f7484(_0x59d7f6('0x46b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x735')),'rowId':_0x3f7484(_0x59d7f6('0x735'))},{'title':_0x3f7484(_0x59d7f6('0x3e2')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x274')),'rowId':_0x3f7484(_0x59d7f6('0x274'))},{'title':_0x3f7484(_0x59d7f6('0x4c6')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x722')),'rowId':_0x3f7484(_0x59d7f6('0x722'))},{'title':_0x3f7484(_0x59d7f6('0x312')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x166')),'rowId':_0x3f7484(_0x59d7f6('0x166'))},{'title':_0x3f7484(_0x59d7f6('0x63e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x319')),'rowId':_0x3f7484(_0x59d7f6('0x319'))},{'title':_0x3f7484(_0x59d7f6('0x4b8')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x194')),'rowId':_0x3f7484(_0x59d7f6('0x194'))},{'title':_0x3f7484(_0x59d7f6('0xfb')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2c7')),'rowId':_0x3f7484(_0x59d7f6('0x2c7'))},{'title':_0x3f7484(_0x59d7f6('0x488')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1b7')),'rowId':_0x3f7484(_0x59d7f6('0x1b7'))},{'title':_0x3f7484(_0x59d7f6('0x1c7')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6bd')),'rowId':_0x3f7484(_0x59d7f6('0x6bd'))},{'title':_0x3f7484(_0x59d7f6('0x74f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x162')),'rowId':_0x3f7484(_0x59d7f6('0x162'))},{'title':_0x3f7484(_0x59d7f6('0x599')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x389')),'rowId':_0x3f7484(_0x59d7f6('0x389'))},{'title':_0x3f7484(_0x59d7f6('0x607')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x641')),'rowId':_0x3f7484(_0x59d7f6('0x641'))},{'title':_0x3f7484(_0x59d7f6('0x3c8')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x620')),'rowId':_0x3f7484(_0x59d7f6('0x620'))},{'title':_0x3f7484(_0x59d7f6('0x4d4')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x65d')),'rowId':_0x3f7484(_0x59d7f6('0x65d'))},{'title':_0x3f7484(_0x59d7f6('0x145')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x54e')),'rowId':_0x3f7484(_0x59d7f6('0x54e'))},{'title':_0x3f7484(_0x59d7f6('0x2b4')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2ff')),'rowId':_0x3f7484(_0x59d7f6('0x2ff'))},{'title':_0x3f7484(_0x59d7f6('0x6b7')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x298')),'rowId':_0x3f7484(_0x59d7f6('0x298'))},{'title':_0x3f7484(_0x59d7f6('0x60c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x50d')),'rowId':_0x3f7484(_0x59d7f6('0x50d'))},{'title':_0x3f7484(_0x59d7f6('0x4eb')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x68d')),'rowId':_0x3f7484(_0x59d7f6('0x68d'))},{'title':_0x3f7484(_0x59d7f6('0x655')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x271')),'rowId':_0x3f7484(_0x59d7f6('0x271'))},{'title':_0x3f7484(_0x59d7f6('0x468')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x358')),'rowId':_0x3f7484(_0x59d7f6('0x358'))},{'title':_0x3f7484(_0x59d7f6('0x14d')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x10f')),'rowId':_0x3f7484(_0x59d7f6('0x10f'))},{'title':_0x3f7484(_0x59d7f6('0x59a')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x574')),'rowId':_0x3f7484(_0x59d7f6('0x574'))},{'title':_0x3f7484(_0x59d7f6('0x2a4')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x561')),'rowId':_0x3f7484(_0x59d7f6('0x561'))},{'title':_0x3f7484(_0x59d7f6('0x134')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x30b')),'rowId':_0x3f7484(_0x59d7f6('0x30b'))},{'title':_0x3f7484(_0x59d7f6('0x494')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6d7')),'rowId':_0x3f7484(_0x59d7f6('0x6d7'))},{'title':_0x3f7484(_0x59d7f6('0x14e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2d7')),'rowId':_0x3f7484(_0x59d7f6('0x2d7'))},{'title':_0x3f7484(_0x59d7f6('0xe6')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x510')),'rowId':_0x3f7484(_0x59d7f6('0x510'))},{'title':_0x3f7484(_0x59d7f6('0x4ae')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x59b')),'rowId':_0x3f7484(_0x59d7f6('0x59b'))},{'title':_0x3f7484(_0x59d7f6('0x693')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x49d')),'rowId':_0x3f7484(_0x59d7f6('0x49d'))},{'title':_0x3f7484(_0x59d7f6('0x74b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1b1')),'rowId':_0x3f7484(_0x59d7f6('0x1b1'))},{'title':_0x3f7484(_0x59d7f6('0x6e6')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4fc')),'rowId':_0x3f7484(_0x59d7f6('0x4fc'))},{'title':_0x3f7484(_0x59d7f6('0x361')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6b0')),'rowId':_0x3f7484(_0x59d7f6('0x6b0'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x3d1')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1d0')),'rowId':_0x3f7484(_0x59d7f6('0x1d0'))},{'title':_0x3f7484(_0x59d7f6('0x137')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x349')),'rowId':_0x3f7484(_0x59d7f6('0x349'))},{'title':_0x3f7484(_0x59d7f6('0x22c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1f2')),'rowId':_0x3f7484(_0x59d7f6('0x1f2'))},{'title':_0x3f7484(_0x59d7f6('0x3a2')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x585')),'rowId':_0x3f7484(_0x59d7f6('0x585'))},{'title':_0x3f7484(_0x59d7f6('0x4ca')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x48f')),'rowId':_0x3f7484(_0x59d7f6('0x48f'))},{'title':_0x3f7484(_0x59d7f6('0x13f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0xff')),'rowId':_0x3f7484(_0x59d7f6('0xff'))},{'title':_0x3f7484(_0x59d7f6('0x3f1')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x35e')),'rowId':_0x3f7484(_0x59d7f6('0x59e'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x568')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x658')),'rows':buttonMessage}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x2c1')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x3ca'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x5f7')):case _0x3f7484(_0x59d7f6('0xf5')):case _0x3f7484(_0x59d7f6('0x490')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x146')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5bc')),'rowId':_0x3f7484(_0x59d7f6('0x5bc'))},{'title':_0x3f7484(_0x59d7f6('0x433')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4df')),'rowId':_0x3f7484(_0x59d7f6('0x4df'))},{'title':_0x3f7484(_0x59d7f6('0x395')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x536')),'rowId':_0x3f7484(_0x59d7f6('0x536'))},{'title':_0x3f7484(_0x59d7f6('0x291')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4a3')),'rowId':_0x3f7484(_0x59d7f6('0x4a3'))},{'title':_0x3f7484(_0x59d7f6('0x3f3')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x56b')),'rowId':_0x3f7484(_0x59d7f6('0x56b'))},{'title':_0x3f7484(_0x59d7f6('0x29c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x147')),'rowId':_0x3f7484(_0x59d7f6('0x147'))},{'title':_0x3f7484(_0x59d7f6('0x1d1')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x18b')),'rowId':_0x3f7484(_0x59d7f6('0x18b'))},{'title':_0x3f7484(_0x59d7f6('0x12a')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x327')),'rowId':_0x3f7484(_0x59d7f6('0x327'))},{'title':_0x3f7484(_0x59d7f6('0x71f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x40c')),'rowId':_0x3f7484(_0x59d7f6('0x40c'))},{'title':_0x3f7484(_0x59d7f6('0x59d')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x29d')),'rowId':_0x3f7484(_0x59d7f6('0x29d'))},{'title':_0x3f7484(_0x59d7f6('0x25f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4b6')),'rowId':_0x3f7484(_0x59d7f6('0x4b6'))},{'title':_0x3f7484(_0x59d7f6('0x41e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x58a')),'rowId':_0x3f7484(_0x59d7f6('0x58a'))}],buttonMessage2=[{'title':_0x3f7484(_0x59d7f6('0x6ab')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1ad')),'rowId':_0x3f7484(_0x59d7f6('0x1ad'))},{'title':_0x3f7484(_0x59d7f6('0x369')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x260')),'rowId':_0x3f7484(_0x59d7f6('0x260'))},{'title':_0x3f7484(_0x59d7f6('0x642')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2b7')),'rowId':_0x3f7484(_0x59d7f6('0x2b7'))},{'title':_0x3f7484(_0x59d7f6('0x33b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x323')),'rowId':_0x3f7484(_0x59d7f6('0x323'))},{'title':_0x3f7484(_0x59d7f6('0x61c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5b8')),'rowId':_0x3f7484(_0x59d7f6('0x5b8'))}],buttonMessage3=[{'title':_0x3f7484(_0x59d7f6('0x56c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6f7')),'rowId':_0x3f7484(_0x59d7f6('0x6f7'))},{'title':_0x3f7484(_0x59d7f6('0x6d2')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x10d')),'rowId':_0x3f7484(_0x59d7f6('0x10d'))},{'title':_0x3f7484(_0x59d7f6('0x2f9')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x53b')),'rowId':_0x3f7484(_0x59d7f6('0x53b'))},{'title':_0x3f7484(_0x59d7f6('0x3f6')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x16a')),'rowId':_0x3f7484(_0x59d7f6('0x16a'))},{'title':_0x3f7484(_0x59d7f6('0x6e9')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x330')),'rowId':_0x3f7484(_0x59d7f6('0x330'))},{'title':_0x3f7484(_0x59d7f6('0x489')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6fa')),'rowId':_0x3f7484(_0x59d7f6('0x6fa'))},{'title':_0x3f7484(_0x59d7f6('0x5f1')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x35e')),'rowId':_0x3f7484(_0x59d7f6('0x35e'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x64b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x39b')),'rowId':_0x3f7484(_0x59d7f6('0x39b'))},{'title':_0x3f7484(_0x59d7f6('0x44c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x160')),'rowId':_0x3f7484(_0x59d7f6('0x160'))},{'title':_0x3f7484(_0x59d7f6('0x15e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x3cd')),'rowId':_0x3f7484(_0x59d7f6('0x3cd'))},{'title':_0x3f7484(_0x59d7f6('0x629')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x60a')),'rowId':_0x3f7484(_0x59d7f6('0x60a'))},{'title':_0x3f7484(_0x59d7f6('0x408')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5f5')),'rowId':_0x3f7484(_0x59d7f6('0x5f5'))},{'title':_0x3f7484(_0x59d7f6('0x66f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x4fa')),'rowId':_0x3f7484(_0x59d7f6('0x4fa'))},{'title':_0x3f7484(_0x59d7f6('0x136')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x509')),'rowId':_0x3f7484(_0x59d7f6('0x509'))},{'title':_0x3f7484(_0x59d7f6('0x1c3')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x595')),'rowId':_0x3f7484(_0x59d7f6('0x595'))},{'title':_0x3f7484(_0x59d7f6('0x6dd')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x60d')),'rowId':_0x3f7484(_0x59d7f6('0x60d'))},{'title':_0x3f7484(_0x59d7f6('0x43b')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x652')),'rowId':_0x3f7484(_0x59d7f6('0x652'))},{'title':_0x3f7484(_0x59d7f6('0x2de')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x366')),'rowId':_0x3f7484(_0x59d7f6('0x366'))},{'title':_0x3f7484(_0x59d7f6('0x1f0')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x154')),'rowId':_0x3f7484(_0x59d7f6('0x154'))},{'title':_0x3f7484(_0x59d7f6('0x57f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x25a')),'rowId':_0x3f7484(_0x59d7f6('0x25a'))},{'title':_0x3f7484(_0x59d7f6('0x326')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x613')),'rowId':_0x3f7484(_0x59d7f6('0x613'))},{'title':_0x3f7484(_0x59d7f6('0x342')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x51e')),'rowId':_0x3f7484(_0x59d7f6('0x51e'))},{'title':_0x3f7484(_0x59d7f6('0x135')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x20a')),'rowId':_0x3f7484(_0x59d7f6('0x20a'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x4f7')),'rows':buttonMessage3},{'title':_0x3f7484(_0x59d7f6('0x6fe')),'rows':buttonMessage2},{'title':_0x3f7484(_0x59d7f6('0x685')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x2e3')),'rows':buttonMessage}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x1a7')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x5f7'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x639')):case _0x3f7484(_0x59d7f6('0x4f5')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x289')),'description':_0x3f7484(_0x59d7f6('0x2c3'))+prefix+_0x3f7484(_0x59d7f6('0x69b')),'rowId':_0x3f7484(_0x59d7f6('0x69b'))},{'title':_0x3f7484(_0x59d7f6('0x723')),'description':_0x3f7484(_0x59d7f6('0x728'))+prefix+_0x3f7484(_0x59d7f6('0x41a')),'rowId':_0x3f7484(_0x59d7f6('0x41a'))},{'title':_0x3f7484(_0x59d7f6('0x17f')),'description':_0x3f7484(_0x59d7f6('0x236'))+prefix+_0x3f7484(_0x59d7f6('0x484')),'rowId':_0x3f7484(_0x59d7f6('0x484'))},{'title':_0x3f7484(_0x59d7f6('0x294')),'description':_0x3f7484(_0x59d7f6('0x665'))+prefix+_0x3f7484(_0x59d7f6('0x33d')),'rowId':_0x3f7484(_0x59d7f6('0x33d'))},{'title':_0x3f7484(_0x59d7f6('0x6db')),'description':_0x3f7484(_0x59d7f6('0x6ed'))+prefix+_0x3f7484(_0x59d7f6('0x165')),'rowId':_0x3f7484(_0x59d7f6('0x165'))},{'title':_0x3f7484(_0x59d7f6('0x581')),'description':_0x3f7484(_0x59d7f6('0x719'))+prefix+_0x3f7484(_0x59d7f6('0x495')),'rowId':_0x3f7484(_0x59d7f6('0x495'))},{'title':_0x3f7484(_0x59d7f6('0x104')),'description':_0x3f7484(_0x59d7f6('0x25b'))+prefix+_0x3f7484(_0x59d7f6('0x72d')),'rowId':_0x3f7484(_0x59d7f6('0x72d'))},{'title':_0x3f7484(_0x59d7f6('0x68e')),'description':_0x3f7484(_0x59d7f6('0x12f'))+prefix+_0x3f7484(_0x59d7f6('0x430')),'rowId':_0x3f7484(_0x59d7f6('0x430'))},{'title':_0x3f7484(_0x59d7f6('0x2a7')),'description':_0x3f7484(_0x59d7f6('0x3c3'))+prefix+_0x3f7484(_0x59d7f6('0x1de')),'rowId':_0x3f7484(_0x59d7f6('0x1de'))}],buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x553')),'description':_0x3f7484(_0x59d7f6('0x297'))+prefix+_0x3f7484(_0x59d7f6('0x3eb')),'rowId':_0x3f7484(_0x59d7f6('0x3eb'))},{'title':_0x3f7484(_0x59d7f6('0xf3')),'description':_0x3f7484(_0x59d7f6('0x13e'))+prefix+_0x3f7484(_0x59d7f6('0x5cf')),'rowId':_0x3f7484(_0x59d7f6('0x5cf'))},{'title':_0x3f7484(_0x59d7f6('0x405')),'description':_0x3f7484(_0x59d7f6('0x3dc'))+prefix+_0x3f7484(_0x59d7f6('0x5c8')),'rowId':_0x3f7484(_0x59d7f6('0x5c8'))},{'title':_0x3f7484(_0x59d7f6('0x605')),'description':_0x3f7484(_0x59d7f6('0x404'))+prefix+_0x3f7484(_0x59d7f6('0x6ae')),'rowId':_0x3f7484(_0x59d7f6('0x6ae'))},{'title':_0x3f7484(_0x59d7f6('0x6f4')),'description':_0x3f7484(_0x59d7f6('0x20c'))+prefix+_0x3f7484(_0x59d7f6('0x5dd')),'rowId':_0x3f7484(_0x59d7f6('0x5dd'))},{'title':_0x3f7484(_0x59d7f6('0x17d')),'description':_0x3f7484(_0x59d7f6('0x66b'))+prefix+_0x3f7484(_0x59d7f6('0x5a8')),'rowId':_0x3f7484(_0x59d7f6('0x5a8'))},{'title':_0x3f7484(_0x59d7f6('0x455')),'description':_0x3f7484(_0x59d7f6('0x663'))+prefix+_0x3f7484(_0x59d7f6('0xe5')),'rowId':_0x3f7484(_0x59d7f6('0xe5'))},{'title':_0x3f7484(_0x59d7f6('0x57b')),'description':_0x3f7484(_0x59d7f6('0x1ce'))+prefix+_0x3f7484(_0x59d7f6('0x52d')),'rowId':_0x3f7484(_0x59d7f6('0x52d'))},{'title':_0x3f7484(_0x59d7f6('0x562')),'description':_0x3f7484(_0x59d7f6('0x719'))+prefix+_0x3f7484(_0x59d7f6('0x506')),'rowId':_0x3f7484(_0x59d7f6('0x506'))},{'title':_0x3f7484(_0x59d7f6('0x700')),'description':_0x3f7484(_0x59d7f6('0x656'))+prefix+_0x3f7484(_0x59d7f6('0x6d5')),'rowId':_0x3f7484(_0x59d7f6('0x6d5'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x28f')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x44f')),'rows':buttonMessage}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x23c')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x5f7'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x550')):case _0x3f7484(_0x59d7f6('0x339')):case _0x3f7484(_0x59d7f6('0x550')):case _0x3f7484(_0x59d7f6('0x40a')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x725'))]()+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x320')):case _0x3f7484(_0x59d7f6('0x4d7')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const gamerows2=[{'title':_0x3f7484(_0x59d7f6('0x53c')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5e4')),'rowId':_0x3f7484(_0x59d7f6('0x5e4'))},{'title':_0x3f7484(_0x59d7f6('0x3c9')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x528')),'rowId':_0x3f7484(_0x59d7f6('0x528'))},{'title':_0x3f7484(_0x59d7f6('0x130')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6d0')),'rowId':_0x3f7484(_0x59d7f6('0x6d0'))},{'title':_0x3f7484(_0x59d7f6('0x5ef')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x74e')),'rowId':_0x3f7484(_0x59d7f6('0x74e'))},{'title':_0x3f7484(_0x59d7f6('0x215')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6ca')),'rowId':_0x3f7484(_0x59d7f6('0x6ca'))},{'title':_0x3f7484(_0x59d7f6('0x360')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1dd')),'rowId':_0x3f7484(_0x59d7f6('0x1dd'))},{'title':_0x3f7484(_0x59d7f6('0x522')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x637')),'rowId':_0x3f7484(_0x59d7f6('0x637'))}],sectionsgame2=[{'title':_0x3f7484(_0x59d7f6('0x2c9')),'rows':gamerows2}],buttongame2={'buttonText':_0x3f7484(_0x59d7f6('0x72c')),'footerText':support,'description':buttonshello,'sections':sectionsgame2,'listType':0x1};client[_0x3f7484(_0x59d7f6('0x4cf'))](from,buttongame2,MessageType[_0x3f7484(_0x59d7f6('0xf4'))],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x3f7484(_0x59d7f6('0x716')),'body':''+fakereply,'previewType':_0x3f7484(_0x59d7f6('0x6d1')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x320'))](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x5df')):case _0x3f7484(_0x59d7f6('0x675')):case _0x3f7484(_0x59d7f6('0x222')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup)return replysticker(grupstc);if(mainmenu==![]){const buttonMessage=[{'title':_0x3f7484(_0x59d7f6('0x551')),'description':_0x3f7484(_0x59d7f6('0x593'))+prefix+_0x3f7484(_0x59d7f6('0x459')),'rowId':_0x3f7484(_0x59d7f6('0x459'))},{'title':_0x3f7484(_0x59d7f6('0x348')),'description':_0x3f7484(_0x59d7f6('0x5d6'))+prefix+_0x3f7484(_0x59d7f6('0x6c1')),'rowId':_0x3f7484(_0x59d7f6('0x6c1'))},{'title':_0x3f7484(_0x59d7f6('0x531')),'description':_0x3f7484(_0x59d7f6('0x535'))+prefix+_0x3f7484(_0x59d7f6('0x353')),'rowId':_0x3f7484(_0x59d7f6('0x353'))},{'title':_0x3f7484(_0x59d7f6('0x47b')),'description':_0x3f7484(_0x59d7f6('0x420'))+prefix+_0x3f7484(_0x59d7f6('0x72f')),'rowId':_0x3f7484(_0x59d7f6('0x72f'))},{'title':_0x3f7484(_0x59d7f6('0x125')),'description':_0x3f7484(_0x59d7f6('0x5ff'))+prefix+_0x3f7484(_0x59d7f6('0x364')),'rowId':_0x3f7484(_0x59d7f6('0x364'))},{'title':_0x3f7484(_0x59d7f6('0x3fb')),'description':_0x3f7484(_0x59d7f6('0x33e'))+prefix+_0x3f7484(_0x59d7f6('0x744')),'rowId':_0x3f7484(_0x59d7f6('0x744'))},{'title':_0x3f7484(_0x59d7f6('0x6a3')),'description':_0x3f7484(_0x59d7f6('0x2a0'))+prefix+'gc','rowId':'gc'},{'title':_0x3f7484(_0x59d7f6('0x49a')),'description':_0x3f7484(_0x59d7f6('0x257'))+prefix+_0x3f7484(_0x59d7f6('0x24a')),'rowId':_0x3f7484(_0x59d7f6('0x24a'))},{'title':_0x3f7484(_0x59d7f6('0x345')),'description':_0x3f7484(_0x59d7f6('0x235'))+prefix+_0x3f7484(_0x59d7f6('0x705')),'rowId':_0x3f7484(_0x59d7f6('0x705'))},{'title':_0x3f7484(_0x59d7f6('0x46f')),'description':_0x3f7484(_0x59d7f6('0x5fd'))+prefix+_0x3f7484(_0x59d7f6('0x3af')),'rowId':_0x3f7484(_0x59d7f6('0x3af'))},{'title':_0x3f7484(_0x59d7f6('0x69f')),'description':_0x3f7484(_0x59d7f6('0x177'))+prefix+_0x3f7484(_0x59d7f6('0x5b1')),'rowId':_0x3f7484(_0x59d7f6('0x5b1'))},{'title':_0x3f7484(_0x59d7f6('0x293')),'description':_0x3f7484(_0x59d7f6('0x4be'))+prefix+_0x3f7484(_0x59d7f6('0x1bf')),'rowId':_0x3f7484(_0x59d7f6('0x1bf'))},{'title':_0x3f7484(_0x59d7f6('0x747')),'description':_0x3f7484(_0x59d7f6('0x671'))+prefix+_0x3f7484(_0x59d7f6('0x441')),'rowId':_0x3f7484(_0x59d7f6('0x441'))},{'title':_0x3f7484(_0x59d7f6('0x2c2')),'description':_0x3f7484(_0x59d7f6('0x5da'))+prefix+_0x3f7484(_0x59d7f6('0x264')),'rowId':_0x3f7484(_0x59d7f6('0x264'))},{'title':_0x3f7484(_0x59d7f6('0x255')),'description':_0x3f7484(_0x59d7f6('0x5c9'))+prefix+_0x3f7484(_0x59d7f6('0x454')),'rowId':_0x3f7484(_0x59d7f6('0x454'))},{'title':_0x3f7484(_0x59d7f6('0x6e7')),'description':_0x3f7484(_0x59d7f6('0x44d'))+prefix+_0x3f7484(_0x59d7f6('0x559')),'rowId':_0x3f7484(_0x59d7f6('0x559'))},{'title':_0x3f7484(_0x59d7f6('0x35f')),'description':_0x3f7484(_0x59d7f6('0x106'))+prefix+_0x3f7484(_0x59d7f6('0x713')),'rowId':_0x3f7484(_0x59d7f6('0x713'))},{'title':_0x3f7484(_0x59d7f6('0x31c')),'description':_0x3f7484(_0x59d7f6('0x106'))+prefix+_0x3f7484(_0x59d7f6('0x726')),'rowId':_0x3f7484(_0x59d7f6('0x726'))},{'title':_0x3f7484(_0x59d7f6('0x2bf')),'description':_0x3f7484(_0x59d7f6('0x106'))+prefix+_0x3f7484(_0x59d7f6('0x52b')),'rowId':_0x3f7484(_0x59d7f6('0x52b'))}],buttonMessage1=[{'title':_0x3f7484(_0x59d7f6('0x498')),'description':_0x3f7484(_0x59d7f6('0x40f'))+prefix+_0x3f7484(_0x59d7f6('0x58b')),'rowId':_0x3f7484(_0x59d7f6('0x58b'))},{'title':_0x3f7484(_0x59d7f6('0x1bb')),'description':_0x3f7484(_0x59d7f6('0x681'))+prefix+_0x3f7484(_0x59d7f6('0x44a')),'rowId':_0x3f7484(_0x59d7f6('0x44a'))},{'title':_0x3f7484(_0x59d7f6('0x673')),'description':_0x3f7484(_0x59d7f6('0x333'))+prefix+_0x3f7484(_0x59d7f6('0x28d')),'rowId':_0x3f7484(_0x59d7f6('0x28d'))},{'title':_0x3f7484(_0x59d7f6('0x686')),'description':_0x3f7484(_0x59d7f6('0x3ac'))+prefix+_0x3f7484(_0x59d7f6('0x444')),'rowId':_0x3f7484(_0x59d7f6('0x444'))}],buttonMessage2=[{'title':_0x3f7484(_0x59d7f6('0x280')),'description':_0x3f7484(_0x59d7f6('0x5ea'))+prefix+_0x3f7484(_0x59d7f6('0x2d6')),'rowId':_0x3f7484(_0x59d7f6('0x2d6'))},{'title':_0x3f7484(_0x59d7f6('0x1cb')),'description':_0x3f7484(_0x59d7f6('0x635'))+prefix+_0x3f7484(_0x59d7f6('0x505')),'rowId':_0x3f7484(_0x59d7f6('0x505'))},{'title':_0x3f7484(_0x59d7f6('0x3a8')),'description':_0x3f7484(_0x59d7f6('0x1ee'))+prefix+_0x3f7484(_0x59d7f6('0x399')),'rowId':_0x3f7484(_0x59d7f6('0x399'))}],sections=[{'title':_0x3f7484(_0x59d7f6('0x3ab')),'rows':buttonMessage},{'title':_0x3f7484(_0x59d7f6('0x3c6')),'rows':buttonMessage1},{'title':_0x3f7484(_0x59d7f6('0x616')),'rows':buttonMessage2}],buttons={'buttonText':_0x3f7484(_0x59d7f6('0x5b3')),'footerText':support,'description':buttonshello,'sections':sections,'listType':0x1};sendListMes(buttons);}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x14c'))](prefix,dev,numbernye)+support,buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x597')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(mainmenu==![]){const gamerows2=[{'title':_0x3f7484(_0x59d7f6('0x179')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5f8')),'rowId':_0x3f7484(_0x59d7f6('0x5f8'))},{'title':_0x3f7484(_0x59d7f6('0x47f')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x62c')),'rowId':_0x3f7484(_0x59d7f6('0x62c'))},{'title':_0x3f7484(_0x59d7f6('0x385')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x5a2')),'rowId':_0x3f7484(_0x59d7f6('0x5a2'))},{'title':_0x3f7484(_0x59d7f6('0x2eb')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x168')),'rowId':_0x3f7484(_0x59d7f6('0x168'))},{'title':_0x3f7484(_0x59d7f6('0x241')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x6a5')),'rowId':_0x3f7484(_0x59d7f6('0x6a5'))},{'title':_0x3f7484(_0x59d7f6('0x56a')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x56a')),'rowId':_0x3f7484(_0x59d7f6('0x56a'))},{'title':_0x3f7484(_0x59d7f6('0xed')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x3d2')),'rowId':_0x3f7484(_0x59d7f6('0x3d2'))},{'title':_0x3f7484(_0x59d7f6('0x23d')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x18d')),'rowId':_0x3f7484(_0x59d7f6('0x18d'))},{'title':_0x3f7484(_0x59d7f6('0x329')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x195')),'rowId':_0x3f7484(_0x59d7f6('0x195'))},{'title':_0x3f7484(_0x59d7f6('0x10e')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x247')),'rowId':_0x3f7484(_0x59d7f6('0x247'))},{'title':_0x3f7484(_0x59d7f6('0x717')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x21c')),'rowId':_0x3f7484(_0x59d7f6('0x21c'))},{'title':_0x3f7484(_0x59d7f6('0x496')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x2e9')),'rowId':_0x3f7484(_0x59d7f6('0x2e9'))},{'title':_0x3f7484(_0x59d7f6('0x206')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x67b')),'rowId':_0x3f7484(_0x59d7f6('0x67b'))},{'title':_0x3f7484(_0x59d7f6('0x142')),'description':_0x3f7484(_0x59d7f6('0x54f'))+prefix+_0x3f7484(_0x59d7f6('0x1b8')),'rowId':_0x3f7484(_0x59d7f6('0x1b8'))}],sectionsgame2=[{'title':_0x3f7484(_0x59d7f6('0x150')),'rows':gamerows2}],buttongame2={'buttonText':_0x3f7484(_0x59d7f6('0x4cd')),'footerText':support,'description':buttonshello,'sections':sectionsgame2,'listType':0x1};client[_0x3f7484(_0x59d7f6('0x4cf'))](from,buttongame2,MessageType[_0x3f7484(_0x59d7f6('0xf4'))],{'quoted':ftoko,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev],'externalAdReply':{'title':hahh+_0x3f7484(_0x59d7f6('0x716')),'body':''+fakereply,'previewType':_0x3f7484(_0x59d7f6('0x6d1')),'thumbnailUrl':'\x20','thumbnail':WMthumb,'sourceUrl':''+mybio}}});}else(mainmenu=!![])&&sendButtonImageLoc(from,buttonshello,ind[_0x3f7484(_0x59d7f6('0x597'))](prefix,dev,numbernye),buttonsmenu2,{'quoted':mek,'contextInfo':{'mentionedJid':[player,numbernye,ow,dev]}});break;case _0x3f7484(_0x59d7f6('0x440')):case _0x3f7484(_0x59d7f6('0x493')):case _0x3f7484(_0x59d7f6('0x3da')):if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isGroup)return reply(_0x3f7484(_0x59d7f6('0x27d')));if(isBanned)return replysticker(banstc);if(database===!![]){if(checkLimituser(sender)<=0x0)return reply(ind[_0x3f7484(_0x59d7f6('0x2fe'))]());}anug=getRegisteredRandomId(_registered)[_0x3f7484(_0x59d7f6('0x424'))](_0x3f7484(_0x59d7f6('0x5a5')),'');const anugaa=anug[_0x3f7484(_0x59d7f6('0x253'))]('@')[0x0]+_0x3f7484(_0x59d7f6('0x5a5'));try{nextw=await client[_0x3f7484(_0x59d7f6('0x263'))](anugaa[_0x3f7484(_0x59d7f6('0x253'))]('@')[0x0]+_0x3f7484(_0x59d7f6('0x5a5')));}catch{nextw=_0x3f7484(_0x59d7f6('0x34a'));}buffer=await getBuffer(nextw);const bexasoa=await client[_0x3f7484(_0x59d7f6('0x3c2'))](from,buffer,MessageType[_0x3f7484(_0x59d7f6('0x60f'))],{'thumbnail':buffer});let yesad=bexasoa[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x30e'))]?bexasoa[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x30e'))]:bexasoa;await reply(_0x3f7484(_0x59d7f6('0x648'))),await sleep(0xbb8);const buttonsjodoh1=[{'buttonId':_0x3f7484(_0x59d7f6('0x493')),'buttonText':{'displayText':_0x3f7484(_0x59d7f6('0x5cd'))},'type':0x1}],buttonMessagejodoh1={'contentText':_0x3f7484(_0x59d7f6('0x4e2'))+prefix+_0x3f7484(_0x59d7f6('0x5e2'))+pushname+'\x0a@'+anugaa[_0x3f7484(_0x59d7f6('0x253'))]('@')[0x0],'footerText':_0x3f7484(_0x59d7f6('0x4a8'))+anug+_0x3f7484(_0x59d7f6('0x502'))+support,'buttons':buttonsjodoh1,'headerType':0x6,'locationMessage':yesad[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x51c'))]};client[_0x3f7484(_0x59d7f6('0x4cf'))](from,buttonMessagejodoh1,MessageType[_0x3f7484(_0x59d7f6('0x3a4'))],{'quoted':mek,'contextInfo':{'sendEphemeral':!![],'mentionedJid':[anugaa,numbernye,dev,ow]}}),database===!![]&&confirmLIMIT(sender,[angka]);break;case _0x3f7484(_0x59d7f6('0x292')):var kntl=body[_0x3f7484(_0x59d7f6('0x259'))](0x8),nama=kntl[_0x3f7484(_0x59d7f6('0x253'))]('|')[0x0],impostor=kntl[_0x3f7484(_0x59d7f6('0x253'))]('|')[0x1];client[_0x3f7484(_0x59d7f6('0x4cf'))](from,{'name':''+nama,'address':''+impostor},MessageType[_0x3f7484(_0x59d7f6('0x60f'))]);break;case _0x3f7484(_0x59d7f6('0x24c')):case _0x3f7484(_0x59d7f6('0x24b')):case'd':if(database===!![]){if(!isRegistered)return sendButtonNotRegis(from);}if(isBanned)return replysticker(banstc);if(!isGroup&&!isOwner)return replysticker(grupstc);if(!isGroupAdmins&&!isOwner)return replysticker(adminstc);client[_0x3f7484(_0x59d7f6('0x4a2'))](from,{'id':mek[_0x3f7484(_0x59d7f6('0x6c5'))][_0x3f7484(_0x59d7f6('0x372'))][_0x3f7484(_0x59d7f6('0x37d'))][_0x3f7484(_0x59d7f6('0x46d'))],'remoteJid':from,'fromMe':!![]}),database===!![]&&confirmLIMIT(sender,[angka]);break;}function _0x31e9(){const _0x30c319=_0x59d7f6,_0x56d463=[_0x30c319('0x666'),_0x30c319('0x23f'),_0x30c319('0x56e'),_0x30c319('0x5e7'),_0x30c319('0x2d0'),_0x30c319('0x318'),_0x30c319('0x4d8'),_0x30c319('0x6a6'),_0x30c319('0x753'),_0x30c319('0x184'),_0x30c319('0x196'),_0x30c319('0x178'),_0x30c319('0xf2'),_0x30c319('0x668'),_0x30c319('0x45c'),_0x30c319('0x6d4'),_0x30c319('0x5e6'),_0x30c319('0x2be'),_0x30c319('0x4b9'),_0x30c319('0x23b'),_0x30c319('0x523'),_0x30c319('0x213'),_0x30c319('0x245'),_0x30c319('0x356'),_0x30c319('0x66e'),_0x30c319('0xf6'),_0x30c319('0x1ef'),_0x30c319('0x53d'),_0x30c319('0x715'),_0x30c319('0x688'),_0x30c319('0x54c'),_0x30c319('0x1fb'),_0x30c319('0xee'),_0x30c319('0x52e'),_0x30c319('0x53e'),_0x30c319('0x41b'),_0x30c319('0x1d9'),_0x30c319('0x564'),_0x30c319('0x3e9'),_0x30c319('0x3ef'),_0x30c319('0x51d'),_0x30c319('0x105'),_0x30c319('0x409'),_0x30c319('0x1b4'),_0x30c319('0x57e'),_0x30c319('0x65f'),_0x30c319('0x225'),_0x30c319('0x50f'),_0x30c319('0x1a8'),_0x30c319('0x473'),_0x30c319('0x407'),_0x30c319('0x68a'),_0x30c319('0x4cc'),_0x30c319('0x6e0'),_0x30c319('0x16c'),_0x30c319('0x6ba'),_0x30c319('0x525'),_0x30c319('0x445'),_0x30c319('0x1ea'),_0x30c319('0x2ee'),_0x30c319('0x5c6'),_0x30c319('0x2b1'),_0x30c319('0x341'),_0x30c319('0x3a7'),_0x30c319('0x12e'),_0x30c319('0x1cc'),_0x30c319('0x221'),_0x30c319('0x1d8'),_0x30c319('0x513'),_0x30c319('0x2dc'),_0x30c319('0x4ba'),_0x30c319('0x68b'),_0x30c319('0x638'),_0x30c319('0x2d5'),_0x30c319('0x5fa'),_0x30c319('0x2e1'),_0x30c319('0x4bf'),_0x30c319('0x464'),_0x30c319('0x70b'),_0x30c319('0x5cc'),_0x30c319('0xea'),_0x30c319('0x4f3'),_0x30c319('0x6f6'),_0x30c319('0x1db'),_0x30c319('0x590'),_0x30c319('0x474'),_0x30c319('0x27f'),_0x30c319('0x2a9'),_0x30c319('0x34d'),_0x30c319('0x461'),_0x30c319('0x39e'),_0x30c319('0x2d9'),_0x30c319('0x265'),_0x30c319('0x706'),_0x30c319('0x352'),_0x30c319('0x46c'),_0x30c319('0x4c9'),_0x30c319('0x252'),_0x30c319('0x732'),_0x30c319('0x5f6'),_0x30c319('0x670'),_0x30c319('0x70a'),_0x30c319('0x3de'),_0x30c319('0x315'),_0x30c319('0x174'),_0x30c319('0x37b'),_0x30c319('0x214'),_0x30c319('0x28c'),_0x30c319('0x569'),_0x30c319('0x16f'),_0x30c319('0x268'),_0x30c319('0x244'),_0x30c319('0x392'),_0x30c319('0x19f'),_0x30c319('0x3e4'),_0x30c319('0x4ab'),_0x30c319('0x634'),_0x30c319('0x4d6'),_0x30c319('0x1fc'),_0x30c319('0x649'),_0x30c319('0x38a'),_0x30c319('0x343'),_0x30c319('0x567'),_0x30c319('0x1be'),_0x30c319('0x35b'),_0x30c319('0x140'),_0x30c319('0x52c'),_0x30c319('0x59c'),_0x30c319('0x13d'),_0x30c319('0x228'),_0x30c319('0x58d'),_0x30c319('0x248'),_0x30c319('0x5a9'),_0x30c319('0x2fc'),_0x30c319('0x36b'),_0x30c319('0x4ec'),_0x30c319('0x1fd'),_0x30c319('0x5c5'),_0x30c319('0x746'),_0x30c319('0x24f'),_0x30c319('0x1cf'),_0x30c319('0xe2'),_0x30c319('0x47e'),_0x30c319('0x4c1'),_0x30c319('0x3d7'),_0x30c319('0x13c'),_0x30c319('0x1ab'),_0x30c319('0x313'),_0x30c319('0x124'),_0x30c319('0x30c'),_0x30c319('0x2ae'),_0x30c319('0x558'),_0x30c319('0x3f2'),_0x30c319('0x654'),_0x30c319('0x6cc'),_0x30c319('0x624'),_0x30c319('0x55d'),_0x30c319('0x4a5'),_0x30c319('0x6fd'),_0x30c319('0x57d'),_0x30c319('0x303'),_0x30c319('0x5c4'),_0x30c319('0x6dc'),_0x30c319('0x5a7'),_0x30c319('0x603'),_0x30c319('0x239'),_0x30c319('0x2d4'),_0x30c319('0xd9'),_0x30c319('0x2d8'),_0x30c319('0x1d7'),_0x30c319('0x477'),_0x30c319('0x10a'),_0x30c319('0x21e'),_0x30c319('0x481'),_0x30c319('0x3aa'),_0x30c319('0x563'),_0x30c319('0x438'),_0x30c319('0x5fc'),_0x30c319('0x534'),_0x30c319('0x6d9'),_0x30c319('0x72a'),_0x30c319('0x1f9'),_0x30c319('0x598'),_0x30c319('0x570'),_0x30c319('0x2e5'),_0x30c319('0x4d1'),_0x30c319('0x472'),_0x30c319('0x410'),_0x30c319('0x1a0'),_0x30c319('0x678'),_0x30c319('0x60e'),_0x30c319('0xe7'),_0x30c319('0xdf'),_0x30c319('0x5b0'),_0x30c319('0x14b'),_0x30c319('0x18f'),_0x30c319('0x37f'),_0x30c319('0x5ba'),_0x30c319('0x381'),_0x30c319('0x1f6'),_0x30c319('0x1eb'),_0x30c319('0x216'),_0x30c319('0x1d5'),_0x30c319('0x4f6'),_0x30c319('0x5f2'),_0x30c319('0x3d5'),_0x30c319('0x26f'),_0x30c319('0x463'),_0x30c319('0x3d0'),_0x30c319('0x521'),_0x30c319('0x40b'),_0x30c319('0x5f9'),_0x30c319('0x1e1'),_0x30c319('0x282'),_0x30c319('0x73f'),_0x30c319('0x35d'),_0x30c319('0x413'),_0x30c319('0x63a'),_0x30c319('0x55a'),_0x30c319('0x582'),_0x30c319('0x592'),_0x30c319('0x204'),_0x30c319('0x475'),_0x30c319('0x431'),_0x30c319('0x5a4'),_0x30c319('0x223'),_0x30c319('0x172'),_0x30c319('0x266'),_0x30c319('0x2f1'),_0x30c319('0x30f'),_0x30c319('0x2d2'),_0x30c319('0x677'),_0x30c319('0x460'),_0x30c319('0x6f9'),_0x30c319('0x583'),_0x30c319('0x114'),_0x30c319('0x1d6'),_0x30c319('0x44e'),_0x30c319('0x2c6'),_0x30c319('0x4db'),_0x30c319('0x745'),_0x30c319('0x62a'),_0x30c319('0x6a0'),_0x30c319('0x436'),_0x30c319('0x3d4'),_0x30c319('0x133'),_0x30c319('0x138'),_0x30c319('0x332'),_0x30c319('0x242'),_0x30c319('0x1c5'),_0x30c319('0x350'),_0x30c319('0x718'),_0x30c319('0x1a2'),_0x30c319('0x42d'),_0x30c319('0x5bb'),_0x30c319('0x47a'),_0x30c319('0x600'),_0x30c319('0x3b9'),_0x30c319('0x205'),_0x30c319('0x2ef'),_0x30c319('0x457'),_0x30c319('0x185'),_0x30c319('0x3b3'),_0x30c319('0x2ce'),_0x30c319('0x202'),_0x30c319('0x272'),_0x30c319('0x217'),_0x30c319('0x45e'),_0x30c319('0x5d7'),_0x30c319('0x2e4'),_0x30c319('0x69d'),_0x30c319('0x4cb'),_0x30c319('0x482'),_0x30c319('0x507'),_0x30c319('0x1a1'),_0x30c319('0x5a3'),_0x30c319('0x331'),_0x30c319('0x19c'),_0x30c319('0x279'),_0x30c319('0x508'),_0x30c319('0x31f'),_0x30c319('0xe1'),_0x30c319('0x273'),_0x30c319('0x702'),_0x30c319('0x27c'),_0x30c319('0x63c'),_0x30c319('0x74d'),_0x30c319('0x334'),_0x30c319('0x11b'),_0x30c319('0x4b1'),_0x30c319('0x188'),_0x30c319('0x39d'),_0x30c319('0x67e'),_0x30c319('0x492'),_0x30c319('0x227'),_0x30c319('0x610'),_0x30c319('0x232'),_0x30c319('0x4af'),_0x30c319('0x6a9'),_0x30c319('0x10c'),_0x30c319('0x659'),_0x30c319('0x3fe'),_0x30c319('0x672'),_0x30c319('0x606'),_0x30c319('0x621'),_0x30c319('0x121'),_0x30c319('0x447'),_0x30c319('0x394'),_0x30c319('0x6f8'),_0x30c319('0x573'),_0x30c319('0x662'),_0x30c319('0x524'),_0x30c319('0x3f9'),_0x30c319('0x544'),_0x30c319('0x29f'),_0x30c319('0xe4'),_0x30c319('0x201'),_0x30c319('0x141'),_0x30c319('0x250'),_0x30c319('0x54b'),_0x30c319('0x3b4'),_0x30c319('0x186'),_0x30c319('0x2a1'),_0x30c319('0x529'),_0x30c319('0x324'),_0x30c319('0x6d8'),_0x30c319('0x636'),_0x30c319('0x371'),_0x30c319('0x584'),_0x30c319('0x714'),_0x30c319('0x43e'),_0x30c319('0x261'),_0x30c319('0x3a3'),_0x30c319('0x627'),_0x30c319('0x6e4'),_0x30c319('0x645'),_0x30c319('0x1bc'),_0x30c319('0x48a'),_0x30c319('0x4dd'),_0x30c319('0xfa'),_0x30c319('0x676'),_0x30c319('0x290'),_0x30c319('0x158'),_0x30c319('0x11c'),_0x30c319('0x355'),_0x30c319('0x511'),_0x30c319('0x419'),_0x30c319('0x4ce'),_0x30c319('0x426'),_0x30c319('0x566'),_0x30c319('0x537'),_0x30c319('0x57a'),_0x30c319('0x363'),_0x30c319('0x101'),_0x30c319('0x6f2'),_0x30c319('0x3ba'),_0x30c319('0x1c9'),_0x30c319('0x306'),_0x30c319('0x36d'),_0x30c319('0x2ad'),_0x30c319('0x530'),_0x30c319('0x25d'),_0x30c319('0x4a0'),_0x30c319('0x32f'),_0x30c319('0x709'),_0x30c319('0x679'),_0x30c319('0x2f6'),_0x30c319('0x6fb'),_0x30c319('0x139'),_0x30c319('0x258'),_0x30c319('0x3ce'),_0x30c319('0x1d4'),_0x30c319('0x35a'),_0x30c319('0x611'),_0x30c319('0x300'),_0x30c319('0x738'),_0x30c319('0x131'),_0x30c319('0x5bd'),_0x30c319('0x1e2'),_0x30c319('0x210'),_0x30c319('0x14f'),_0x30c319('0x3e3'),_0x30c319('0x437'),_0x30c319('0x712'),_0x30c319('0x699'),_0x30c319('0x4b3'),_0x30c319('0x5ed'),_0x30c319('0x157'),_0x30c319('0x4d3'),_0x30c319('0x3a0'),_0x30c319('0x575'),_0x30c319('0x3ff'),_0x30c319('0x25c'),_0x30c319('0x58f'),_0x30c319('0x50b'),_0x30c319('0x65e'),_0x30c319('0x478'),_0x30c319('0x4c3'),_0x30c319('0x55f'),_0x30c319('0x317'),_0x30c319('0x3a5'),_0x30c319('0x609'),_0x30c319('0x64f'),_0x30c319('0x41f'),_0x30c319('0x3be'),_0x30c319('0x2db'),_0x30c319('0x12d'),_0x30c319('0xe0'),_0x30c319('0x2af'),_0x30c319('0x368'),_0x30c319('0x62d'),_0x30c319('0x4c0'),_0x30c319('0x554'),_0x30c319('0x362'),_0x30c319('0x13a'),_0x30c319('0x527'),_0x30c319('0xda'),_0x30c319('0x6f5'),_0x30c319('0x5e0'),_0x30c319('0x5de'),_0x30c319('0x3e7'),_0x30c319('0x6fc'),_0x30c319('0x589'),_0x30c319('0x4ad'),_0x30c319('0x515'),_0x30c319('0x720'),_0x30c319('0x2df'),_0x30c319('0x1ae'),_0x30c319('0x2f8'),_0x30c319('0x224'),_0x30c319('0x286'),_0x30c319('0x5af'),_0x30c319('0x6f0'),_0x30c319('0x6af'),_0x30c319('0x155'),_0x30c319('0x11f'),_0x30c319('0x425'),_0x30c319('0x2e8'),_0x30c319('0x32e'),_0x30c319('0xfe'),_0x30c319('0x4f8'),_0x30c319('0x6bc'),_0x30c319('0x2b8'),_0x30c319('0x6da'),_0x30c319('0x674'),_0x30c319('0xde'),_0x30c319('0x698'),_0x30c319('0x321'),_0x30c319('0x1fa'),_0x30c319('0x697'),_0x30c319('0x657'),_0x30c319('0x16b'),_0x30c319('0x6b1'),_0x30c319('0x39f'),_0x30c319('0x742'),_0x30c319('0x143'),_0x30c319('0x66c'),_0x30c319('0x703'),_0x30c319('0x2dd'),_0x30c319('0x2e7'),_0x30c319('0x5f0'),_0x30c319('0x26e'),_0x30c319('0x4b2'),_0x30c319('0x197'),_0x30c319('0x526'),_0x30c319('0x469'),_0x30c319('0x418'),_0x30c319('0x596'),_0x30c319('0x1e0'),_0x30c319('0x31d'),_0x30c319('0x2f3'),_0x30c319('0x3d8'),_0x30c319('0x618'),_0x30c319('0x71d'),_0x30c319('0x229'),_0x30c319('0x6c6'),_0x30c319('0x71a'),_0x30c319('0x497'),_0x30c319('0xf8'),_0x30c319('0x401'),_0x30c319('0x70d'),_0x30c319('0x26b'),_0x30c319('0x64d'),_0x30c319('0x3a1'),_0x30c319('0x1f1'),_0x30c319('0x3e6'),_0x30c319('0x1e8'),_0x30c319('0x187'),_0x30c319('0x1f7'),_0x30c319('0x721'),_0x30c319('0x6c2'),_0x30c319('0x49f'),_0x30c319('0x15a'),_0x30c319('0x4f2'),_0x30c319('0x22e'),_0x30c319('0x660'),_0x30c319('0x40e'),_0x30c319('0x520'),_0x30c319('0x43f'),_0x30c319('0x5d8'),_0x30c319('0x18c'),_0x30c319('0x755'),_0x30c319('0x191'),_0x30c319('0x1b9'),_0x30c319('0x6b4'),_0x30c319('0x66d'),_0x30c319('0x2d3'),_0x30c319('0x5be'),_0x30c319('0x11a'),_0x30c319('0x182'),_0x30c319('0x446'),_0x30c319('0x384'),_0x30c319('0x2a8'),_0x30c319('0x144'),_0x30c319('0x122'),_0x30c319('0x1f3'),_0x30c319('0xfd'),_0x30c319('0x4f9'),_0x30c319('0x164'),_0x30c319('0x4e0'),_0x30c319('0x5e5'),_0x30c319('0x4a4'),_0x30c319('0x6a4'),_0x30c319('0xf1'),_0x30c319('0x337'),_0x30c319('0x1aa'),_0x30c319('0x4fe'),_0x30c319('0x21d'),_0x30c319('0x1da'),_0x30c319('0xe8'),_0x30c319('0x56d'),_0x30c319('0x1e9'),_0x30c319('0x5b9'),_0x30c319('0x402'),_0x30c319('0x439'),_0x30c319('0x579'),_0x30c319('0x379'),_0x30c319('0x724'),_0x30c319('0x2f4'),_0x30c319('0x69c'),_0x30c319('0x41c'),_0x30c319('0x480'),_0x30c319('0x5cb'),_0x30c319('0x1c2'),_0x30c319('0x267'),_0x30c319('0x4ed'),_0x30c319('0x557'),_0x30c319('0x42e'),_0x30c319('0x47d'),_0x30c319('0x4de'),_0x30c319('0x20f'),_0x30c319('0x5e3'),_0x30c319('0x5fe'),_0x30c319('0x6ee'),_0x30c319('0x462'),_0x30c319('0x1c6'),_0x30c319('0x1b5'),_0x30c319('0x3b2'),_0x30c319('0x6e5'),_0x30c319('0x38c'),_0x30c319('0x3b7'),_0x30c319('0x10b'),_0x30c319('0x24d'),_0x30c319('0x5aa'),_0x30c319('0x748'),_0x30c319('0x1c1'),_0x30c319('0x514'),_0x30c319('0x36f'),_0x30c319('0x52f'),_0x30c319('0x243'),_0x30c319('0x60b'),_0x30c319('0x391'),_0x30c319('0x465'),_0x30c319('0x519'),_0x30c319('0xe9'),_0x30c319('0x23a'),_0x30c319('0x3cb'),_0x30c319('0x305'),_0x30c319('0x1a3'),_0x30c319('0x6eb'),_0x30c319('0x2f5'),_0x30c319('0x230'),_0x30c319('0x5a1'),_0x30c319('0x423'),_0x30c319('0x2cc'),_0x30c319('0x307'),_0x30c319('0x411'),_0x30c319('0x5f3'),_0x30c319('0x416'),_0x30c319('0x734'),_0x30c319('0x3fc'),_0x30c319('0x71c'),_0x30c319('0x17b'),_0x30c319('0x39a'),_0x30c319('0x2e6'),_0x30c319('0x108'),_0x30c319('0x29e'),_0x30c319('0x53f'),_0x30c319('0x27e'),_0x30c319('0x2e2'),_0x30c319('0x6b5'),_0x30c319('0x61e'),_0x30c319('0x3a9'),_0x30c319('0x302'),_0x30c319('0x152'),_0x30c319('0x6ce'),_0x30c319('0x1fe'),_0x30c319('0x3c1'),_0x30c319('0x73e'),_0x30c319('0x3e0'),_0x30c319('0x631'),_0x30c319('0x203'),_0x30c319('0x58c'),_0x30c319('0x485'),_0x30c319('0x6e3'),_0x30c319('0x614'),_0x30c319('0x284'),_0x30c319('0x3df'),_0x30c319('0x471'),_0x30c319('0x25e'),_0x30c319('0xfc'),_0x30c319('0x70f'),_0x30c319('0x237'),_0x30c319('0x33c'),_0x30c319('0x3ed'),_0x30c319('0x21a'),_0x30c319('0x270'),_0x30c319('0x591'),_0x30c319('0x325'),_0x30c319('0x23e'),_0x30c319('0x4a6'),_0x30c319('0x4da'),_0x30c319('0x4ff'),_0x30c319('0x695'),_0x30c319('0x4d0'),_0x30c319('0x2c4'),_0x30c319('0x351'),_0x30c319('0x540'),_0x30c319('0x3d9'),_0x30c319('0x42f'),_0x30c319('0x560'),_0x30c319('0x113'),_0x30c319('0x4c7'),_0x30c319('0x682'),_0x30c319('0x2c5'),_0x30c319('0x2f0'),_0x30c319('0x126'),_0x30c319('0x644'),_0x30c319('0x74a'),_0x30c319('0x4e3'),_0x30c319('0xef'),_0x30c319('0x31b'),_0x30c319('0x120'),_0x30c319('0x36c'),_0x30c319('0x6de'),_0x30c319('0x6ac'),_0x30c319('0x4e6'),_0x30c319('0x4e5'),_0x30c319('0x43d'),_0x30c319('0x664'),_0x30c319('0x5d4'),_0x30c319('0x382'),_0x30c319('0x390'),_0x30c319('0x6a7'),_0x30c319('0x549'),_0x30c319('0x234'),_0x30c319('0x516'),_0x30c319('0x5db'),_0x30c319('0x5ad'),_0x30c319('0x375'),_0x30c319('0x2e0'),_0x30c319('0x5b5'),_0x30c319('0x6cb'),_0x30c319('0x288'),_0x30c319('0x2a2'),_0x30c319('0x3c0'),_0x30c319('0x704'),_0x30c319('0x3ec'),_0x30c319('0x6c4'),_0x30c319('0x456'),_0x30c319('0x4ee'),_0x30c319('0x4f0'),_0x30c319('0x22f'),_0x30c319('0x36e'),_0x30c319('0x429'),_0x30c319('0x4b4'),_0x30c319('0x6c3'),_0x30c319('0x2b0'),_0x30c319('0x5e1'),_0x30c319('0x615'),_0x30c319('0x322'),_0x30c319('0x396'),_0x30c319('0x28e'),_0x30c319('0xdd'),_0x30c319('0x565'),_0x30c319('0x175'),_0x30c319('0x55b'),_0x30c319('0xdb'),_0x30c319('0x64c'),_0x30c319('0x1b2'),_0x30c319('0x3b5'),_0x30c319('0x41d'),_0x30c319('0x59f'),_0x30c319('0x1b0'),_0x30c319('0x383'),_0x30c319('0x359'),_0x30c319('0x15f'),_0x30c319('0x3d6'),_0x30c319('0x2ab'),_0x30c319('0x476'),_0x30c319('0x192'),_0x30c319('0x5ae'),_0x30c319('0x4e4'),_0x30c319('0x449'),_0x30c319('0x400'),_0x30c319('0x5a0'),_0x30c319('0x70c'),_0x30c319('0x4ef'),_0x30c319('0x1ed'),_0x30c319('0x344'),_0x30c319('0x552'),_0x30c319('0x57c'),_0x30c319('0x4d2'),_0x30c319('0x52a'),_0x30c319('0x2a5'),_0x30c319('0x417'),_0x30c319('0x161'),_0x30c319('0x283'),_0x30c319('0x741'),_0x30c319('0x347'),_0x30c319('0x1e4'),_0x30c319('0x68f'),_0x30c319('0x4c4'),_0x30c319('0x70e'),_0x30c319('0x751'),_0x30c319('0x684'),_0x30c319('0x543'),_0x30c319('0x311'),_0x30c319('0x1cd'),_0x30c319('0x6cf'),_0x30c319('0x512'),_0x30c319('0x33f'),_0x30c319('0x5d1'),_0x30c319('0x69e'),_0x30c319('0x12c'),_0x30c319('0x421'),_0x30c319('0x2aa'),_0x30c319('0x45f'),_0x30c319('0x4dc'),_0x30c319('0x3bb'),_0x30c319('0x190'),_0x30c319('0x24e'),_0x30c319('0x63b'),_0x30c319('0x29b'),_0x30c319('0x5c7'),_0x30c319('0x370'),_0x30c319('0x727'),_0x30c319('0x711'),_0x30c319('0x448'),_0x30c319('0x299'),_0x30c319('0x153'),_0x30c319('0x111'),_0x30c319('0x38f'),_0x30c319('0x189'),_0x30c319('0x22d'),_0x30c319('0x4c8'),_0x30c319('0x518'),_0x30c319('0x5bf'),_0x30c319('0x38e'),_0x30c319('0x132'),_0x30c319('0x31e'),_0x30c319('0x173'),_0x30c319('0x1ff'),_0x30c319('0x64e'),_0x30c319('0x6e1'),_0x30c319('0x45b'),_0x30c319('0x3cf'),_0x30c319('0x5b6'),_0x30c319('0x335'),_0x30c319('0x5dc'),_0x30c319('0x46a'),_0x30c319('0x752'),_0x30c319('0x15d'),_0x30c319('0x3fa'),_0x30c319('0x1d2'),_0x30c319('0x412'),_0x30c319('0x4b0'),_0x30c319('0x281'),_0x30c319('0x62b'),_0x30c319('0x486'),_0x30c319('0x4bc'),_0x30c319('0x116'),_0x30c319('0x5d5'),_0x30c319('0x2bb'),_0x30c319('0x308'),_0x30c319('0x3fd'),_0x30c319('0x458'),_0x30c319('0x1f4'),_0x30c319('0x5e8'),_0x30c319('0x499'),_0x30c319('0x5ca'),_0x30c319('0x2b6'),_0x30c319('0x11d'),_0x30c319('0x211'),_0x30c319('0x3f4'),_0x30c319('0x687'),_0x30c319('0x545'),_0x30c319('0x6b6'),_0x30c319('0x576'),_0x30c319('0x3bf'),_0x30c319('0x6ff'),_0x30c319('0x1d3'),_0x30c319('0x625'),_0x30c319('0x491'),_0x30c319('0x2d1'),_0x30c319('0x32a'),_0x30c319('0x694'),_0x30c319('0x6bb'),_0x30c319('0x67f'),_0x30c319('0x5fb'),_0x30c319('0x1e6'),_0x30c319('0x4ea'),_0x30c319('0x442'),_0x30c319('0x218'),_0x30c319('0x3f8')];return _0x31e9=function(){return _0x56d463;},_0x31e9();}

switch (command) { 	
case 'mode' :
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}	
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (args[0] === 'self') {
if (banChats === true) return replysticker(faktifstc)
banChats = true
replysticker(successtc)					
} else if (args[0] === 'public') {
if (banChats === false) return replysticker(faktifstc)
banChats = false
replysticker(successtc)					
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, [{buttonId: `public`,buttonText: {displayText: `PUBLIC`}, type: 1}, {buttonId: `self`, buttonText: {displayText: 'SELF'}, type: 1},], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'wiskas':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}	
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!q) return reply('Nama file nya apa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'self':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}	
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (banChats === true) return replysticker(faktifstc)
banChats = true
replysticker(successtc)		
break
case 'public':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (banChats === false) return replysticker(faktifstc)
banChats = false
replysticker(successtc)		
break
case 'leave':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isOwner) return replysticker(ownerstc)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
replysticker(leavestc)
}, 0)
break
case 'bc': 
case 'broadcast': 
case 'broadcasting': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await client.chats.all()
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {quoted: fgif, thumbnail: Buffer.alloc(0), caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)	
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4',quoted: fgif,caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : fgif,caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4', ptt : true,quoted: fgif,caption: `[ *BROADCAST* ]\n\n${q}`})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {quoted: fgif})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
    } else if (q) {
for (let _ of anu) {
sendButtonImageLoc(_.jid, `*「 BROADCAST BOT 」*\n\n${q}`, support, buttonsmenu2, { quoted: fgif, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else {
sendButtonImageLoc(from, `cara menggunakannya ketik ${prefix+command} pesan/vn/video/gambar yang ingin disiarkan`, support, buttonsmenu2, { quoted : fgif, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
}
break
case 'bcgc': 
case 'broadcastgc': 
case 'broadcastinggc': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await isGroup
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, buff, image, {quoted: fgif, thumbnail: Buffer.alloc(0), caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)	
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4',quoted: fgif,caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {mimetype: Mimetype.gif,quoted : fgif,caption: `[ *BROADCAST* ]\n${q}\n\n${support}`, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4', ptt : true,quoted: fgif,caption: `[ *BROADCAST* ]\n\n${q}`})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
for (let _ of anu) {
client.sendMessage(_.jid, bc, sticker, {quoted: fgif})
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
    } else if (q) {
for (let _ of anu) {
sendButtonImageLoc(_.jid, `*「 BROADCAST 」*\n\n${q}`, support, buttonsmenu2, { quoted: fgif, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else {
sendButtonImageLoc(from, `cara menggunakannya ketik ${prefix+command} pesan/vn/video/gambar yang ingin disiarkan`, support, buttonsmenu2, { quoted : fgif, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
}
break
case 'setmenu':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isOwner) return replysticker(ownerstc)
if ((args[0]) == 'ori'){
if (mainmenu === false) return replysticker(faktifstc)
mainmenu = false
replysticker(successtc)
} else if((args[0]) == 'simple'){
if (mainmenu === true) return replysticker(faktifstc)
mainmenu = true
replysticker(successtc)
} else {
await sendButtonText(from, `_Pilih Tipe Di Bawah Ini_`, support, [{buttonId: `setmenu simple`,buttonText: {displayText: `Simple`}, type: 1}, {buttonId: `setmenu ori`, buttonText: {displayText: 'Ori'}, type: 1},], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
break
case 'spam':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
if (isNaN(q[0])) return reply(`harus berupa angka`)
for (let i = 0; i < q[0]; i++){
reply(ambl) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (q) {
argzi = q.split("|")
if (!argzi) return reply(`cara menggunakan fitur ini ketik ${prefix}spam teks|jumlah`)
if (isNaN(argzi[1])) return reply(`Gunakan (|) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks|jumlah`)
for (let i = 0; i < argzi[1]; i++){
reply(argzi[0]) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (!q){
reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks|jumlah`)
}
break
case 'join':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)        
if (!q) return reply(`cara menggunakan fitur ini ketik ${prefix+command} linkgc wa`)
            cos = args[0]
            var net = cos.split('https://chat.whatsapp.com/')[1]
            if (!net) return reply('pastikan itu link https://whatsapp.com/')
let { size } = await client.query({ 
            json: ["query", "invite",net],
            expect200:true })
            if (size < 257) {
            reply('Member Lo Dikit Jadi Bot Gk Mau Join, minimal member harus 250 orang')
            } else if (size > 257) {
             try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return replysticker(errorstc)
            var codeInvite = cos.split('https://chat.whatsapp.com/')[1]
            if (!codeInvite) return reply('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            replysticker(successtc)
            } catch {
            replysticker(errorstc)
            }
            } else {
            replysticker(errorstc)
            }
            break
case 'on':
case 'enable':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
			if (args[0] === 'anticall') {
			if (antical === true) return replysticker(faktifstc)
			antical = true
			replysticker(successtc)
			} else if (args[0] === 'autoreadgc') {
			if (readG === true) return replysticker(faktifstc)
			readG = true
			replysticker(successtc)
			} else if (args[0] === 'database') {
			if (database === true) return replysticker(faktifstc)
			database = true
			replysticker(successtc)
			} else if (args[0] === 'autoreadpc') {
			if (readP === true) return replysticker(faktifstc)
			readP = true
			replysticker(successtc)
			} else if (args[0] === 'antitag') {
			if (antitags === true) return replysticker(faktifstc)
			antitags = true
			replysticker(successtc)
			} else if (args[0] === 'autobackup') {
			if (autobackup === true) return replysticker(faktifstc)
			autobackup = true
			replysticker(successtc)
			} else if (args[0] === 'infoerror') {
			if (infoerror === true) return replysticker(faktifstc)
			infoerror = true
			replysticker(successtc)
			} else if (args[0] === 'autorespon') {
			if (autorespon === true) return replysticker(faktifstc)
			autorespon = true
			replysticker(successtc)
			} else if (args[0] === 'autoregis') {
			if (autoregis === true) return replysticker(faktifstc)
			autoregis = true
			replysticker(successtc)
			} else if (args[0] === 'regisinfo') {
			if (regisinfo === true) return replysticker(faktifstc)
			regisinfo = true
			replysticker(successtc)
			} else if (args[0] === 'autocomposing') {
			if (autocomposing === true) return replysticker(faktifstc)
			autocomposing = true
			replysticker(successtc)
			} else if (args[0] === 'autorecording') {
			if (autorecording === true) return replysticker(faktifstc)
			autorecording = true
			replysticker(successtc)
			} else if (args[0] === 'antibug') {
			if (bugc === true) return replysticker(faktifstc)
            bugc = true
            antitrol = true
            replysticker(successtc)
			} else {
			if(mainmenu == false){
{
const buttonMessage = [
{title: 'Database', description: `use command: ${prefix+command} database`, rowId:`on database`},
{title: 'Anti Call', description: `use command: ${prefix+command} anticall`, rowId:`on anticall`},
{title: 'Anti Registrasi', description: `use command: ${prefix+command} autoregis`, rowId:`on autoregis`},
{title: 'Registrasi Info', description: `use command: ${prefix+command} regisinfo`, rowId:`on regisinfo`},
{title: 'auto Read Pc', description: `use command: ${prefix+command} autoreadpc`, rowId:`on autoreadpc`},
{title: 'auto Read Gc', description: `use command: ${prefix+command} autoreadgc`, rowId:`on autoreadgc`},
{title: 'Anti Tag', description: `use command: ${prefix+command} antitag`, rowId:`on antitag`},
{title: 'Anti Bug', description: `use command: ${prefix+command} antibug`, rowId:`on antibug`},
{title: 'Auto Respon', description: `use command: ${prefix+command} autorespon`, rowId:`on autorespon`},
{title: 'Auto Backup', description: `use command: ${prefix+command} autobackup`, rowId:`on autobackup`},
{title: 'Info Error', description: `use command: ${prefix+command} autobackup`, rowId:`on infoerror`},
{title: 'Auto Composing', description: `use command: ${prefix+command} autocomposing`, rowId:`on autocomposing`},
{title: 'Auto Recording', description: `use command: ${prefix+command} autorecording`, rowId:`on autorecording`},
 ]
const sections = [
{title: "Enable", rows: buttonMessage},
]

const buttons = {
 buttonText: 'ENABLE',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.setingbot(prefix, command, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
} 
break
case 'off':
case 'disable':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
			if (args[0] === 'anticall') {
			if (antical === false) return replysticker(faktifstc)
		    antical = false
		    replysticker(successtc)
			} else if (args[0] === 'autoreadgc') {
			if (readG === false) return replysticker(faktifstc)
			readG = false
			replysticker(successtc)
			} else if (args[0] === 'database') {
			if (database === false) return replysticker(faktifstc)
			database = false
			replysticker(successtc)
			} else if (args[0] === 'autoreadpc') {
			if (readP === false) return replysticker(faktifstc)
			readP = false
			replysticker(successtc)
			} else if (args[0] === 'antitag') {
			if (antitags === false) return replysticker(faktifstc)
			antitags = false
			replysticker(successtc)
			} else if (args[0] === 'autorespon') {
			if (autorespon === false) return replysticker(faktifstc)
			autorespon = false
			replysticker(successtc)
			} else if (args[0] === 'autobackup') {
			if (autobackup === false) return replysticker(faktifstc)
			autobackup = false
			replysticker(successtc)
			} else if (args[0] === 'infoerror') {
			if (infoerror === false) return replysticker(faktifstc)
			infoerror = false
			replysticker(successtc)
			} else if (args[0] === 'autoregis') {
			if (autoregis === false) return replysticker(faktifstc)
			autoregis = false
			replysticker(successtc)
			} else if (args[0] === 'regisinfo') {
			if (regisinfo === false) return replysticker(faktifstc)
			regisinfo = false
			replysticker(successtc)
			} else if (args[0] === 'autocomposing') {
			if (autocomposing === false) return replysticker(faktifstc)
			autocomposing = false
			replysticker(successtc)
			} else if (args[0] === 'autorecording') {
			if (autorecording === false) return replysticker(faktifstc)
			autorecording = false
			replysticker(successtc)
			} else if (args[0] === 'antibug') {
			if (bugc === false) return replysticker(faktifstc)
            bugc = false
            antitrol = false
            replysticker(successtc)
			} else {
			if(mainmenu == false){
{
 const buttonMessage = [
{title: 'Database', description: `use command: ${prefix+command} database`, rowId:`off database`},
{title: 'Anti Call', description: `use command: ${prefix+command} anticall`, rowId:`off anticall`},
{title: 'Anti Registrasi', description: `use command: ${prefix+command} autoregis`, rowId:`off autoregis`},
{title: 'Registrasi Info', description: `use command: ${prefix+command} regisinfo`, rowId:`off regisinfo`},
{title: 'auto Read Pc', description: `use command: ${prefix+command} autoreadpc`, rowId:`off autoreadpc`},
{title: 'auto Read Gc', description: `use command: ${prefix+command} autoreadgc`, rowId:`off autoreadgc`},
{title: 'Anti Tag', description: `use command: ${prefix+command} antitag`, rowId:`off antitag`},
{title: 'Anti Bug', description: `use command: ${prefix+command} antibug`, rowId:`off antibug`},
{title: 'Auto Respon', description: `use command: ${prefix+command} autorespon`, rowId:`off autorespon`},
{title: 'Auto Backup', description: `use command: ${prefix+command} autobackup`, rowId:`off autobackup`},
{title: 'Info Error', description: `use command: ${prefix+command} autobackup`, rowId:`off infoerror`},
{title: 'Auto Composing', description: `use command: ${prefix+command} autocomposing`, rowId:`off autocomposing`},
{title: 'Auto Recording', description: `use command: ${prefix+command} autorecording`, rowId:`off autorecording`},
 ]
const sections = [
{title: "Disable", rows: buttonMessage},
]

const buttons = {
 buttonText: 'DISABALE',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.setingbot(prefix, command, dev, numbernye), buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
} 
break
case 'settheme':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if (args[0] === "cecan") {
if (themenye = cecan) return replysticker(faktifstc)
themenye = cecan
replysticker(successtc)
} else if (args[0] === "cogan") {
if (themenye = cogan) return replysticker(faktifstc)
themenye = cogan
replysticker(successtc)
} else if (args[0] === "meme") {
if (themenye = meme) return replysticker(faktifstc)
themenye = meme
replysticker(successtc)
} else if (args[0] === "genshin") {
if (themenye = genshin) return replysticker(faktifstc)
themenye = genshin
replysticker(successtc)
} else if (args[0] === "fantasy") {
if (themenye = dungeon) return replysticker(faktifstc)
themenye = dungeon
replysticker(successtc)
} else if (args[0] === "ml") {
if (themenye = ml) return replysticker(faktifstc)
themenye = ml
replysticker(successtc)
} else if (args[0] === "default") {
if (themenye = deflttheme) return replysticker(faktifstc)
themenye = deflttheme
replysticker(successtc)
} else {
if(mainmenu == false){
{
 const buttonMessage = [
{title: 'Default', description: "", rowId:`settheme default`},
{title: 'Cecan', description: "", rowId:`settheme cecan`},
{title: 'Cogan', description: "", rowId:`settheme genshin`},
{title: 'Genshin Impact', description: "", rowId:`settheme genshin`},
{title: 'Fantasy', description: "", rowId:`settheme fantasy`},
 ]
const sections = [
{title: "SET TEMA", rows: buttonMessage},
]

const buttons = {
 buttonText: 'TEMA',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.tema(prefix, command, dev, numbernye), buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
} 
break
case 'setppbot':
case 'ppbot':
case 'setppb':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
await client.updateProfilePicture(botNumber, media)
replysticker(successtc)
} else {
reply(`Kirim gambar atau tag gambar yang sudah dikirim dengan caption ${prefix+command}`)
}
break	
case 'setnamebot':
case 'namebot':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
NamaBot = ambl
replysticker(successtc)
} else if (q) {
NamaBot = q
replysticker(successtc)
} else if (!q){
reply(`Kirim gambar atau tag gambar yang sudah dikirim dengan caption ${prefix+command} Nama bot yang di inginkan `)
}
break
case 'setprefix':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isOwner) return replysticker(ownerstc)
if (args.length < 1) return reply(`${prefix}setprefix multi atau ${prefix+command} prefix yang di inginkan`)
if (args[0] === 'multi') {
if (multi === true) return
multi = true
replysticker(successtc)
} else {
multi = false
pref = args[0]
replysticker(successtc)
}
break	
case 'q': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
let qse = client.serializeM(await m.getQuotedObj())
if (!qse.quoted) return reply(`Reply pesan yang mengandung reply dengan caption ${prefix+command}`)
await qse.quoted.copyNForward(m.chat, true)
} else {
reply(`Reply pesan yang mengandung reply dengan caption ${prefix+command}`)
}	
break
case 'term':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
exec(ambl, (err, stdout) => {
if (err) return reply(`${NamaBot}:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
} else if (q) {
exec(q, (err, stdout) => {
if (err) return reply(`${NamaBot}:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
} else if (!q){
reply(`Kirim gambar dengan caption ${prefix+command} command yang ingin di jalankan`)
}
break 
case 'setthumb':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
boij = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./src/siegrin.jpeg`, delb)
replysticker(successtc)
} else {
reply(`Kirim gambar atau tag gambar yang sudah dikirim dengan caption ${prefix+command}`)
}
break
case 'restart':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(waitstc)
client.sendMessage(from, JSON.stringify(eval(process.exit())))
break
case 'exif':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} author|text`)
namo = q.split('|')[0]
ator = q.split('|')[1]
if (!ator) return reply(`Gunakan (|) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} text|text`)
replysticker(successtc)
break
case 'hack':
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isOwner) return replysticker(ownerstc)
anu = fs.readFileSync('strg/image/gaklah.jpeg')
client.updateProfilePicture(from, anu)
client.groupUpdateSubject(from, `Hacked Siegrin`)
client.groupUpdateDescription(from, `Mampos Gw Kudet`)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
setTimeout(() => {
reply('Mwuehehe kena hack kacian')
replysticker(successtc)
}, 8000)
break
//********** UP STATUS **********
case 'upsw': 
case 'upstatus': 
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await groupMembers
if (isMedia && !mek.message.videoMessage || isQuotedImage) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
buff = await client.downloadMediaMessage(encmedia)
client.sendMessage('status@broadcast', buff, image, { caption: `${q}` })
replysticker(successtc)
setTimeout( () => {
replysticker(successtc)
}, 3000)	
} else if (isMedia && !mek.message.videoMessage || isQuotedVideo) {
const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
client.sendMessage('status@broadcast', bc, video, { caption: `${q}` }) 
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (isMedia && !mek.message.audioMessage || isQuotedAudio) {
const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
bc = await client.downloadMediaMessage(encmedia)
client.sendMessage('status@broadcast', bc, video, { caption: `${q}` }) 
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if (q) {
client.sendMessage('status@broadcast', `${q}`, extendedText)
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else {
sendButtonImageLoc(from, `cara menggunakannya ketik ${prefix+command} pesan/vn/video/gambar yang ingin disiarkan`, support, buttonsmenu2, { quoted : fgif, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
}
break
case 'listgroup':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}	
if (!isOwner) return replysticker(ownerstc)
ingfoo = await getGroup(totalchat)
teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
}
sendButtonImageLoc(from, buttonshello, teks1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
//===============================================================================//
case 'giftlimit':
case 'giftl':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.participant 
wanu = _registered.indexOf(q)
if (!wanu) return reply(`gak ada datanya cuk`)
if (isNaN(q[0])) return reply(`harus berupa angka`)
const jumlah = Math.ceil(q * 1)
await addLimitUser(ambl, jumlah)
replysticker(waitstc)
setTimeout( () => {
sendButtonImageLoc(from, `*「 SUKSES 」*\n*Gift Limit  Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${ambl.replace("@")}*\n*TOTAL:${jumlah}*`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, ambl]}} )
}, 3000)
} else if (q) {
if (!q) return reply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
var targetnye = q.split(' ')[0]
var tex2 = q.split(' ')[1]
const tex1 = `${targetnye.replace("@", '')}@s.whatsapp.net`
const jumlah = Math.ceil(tex2 * 1)
await addLimitUser(tex1, jumlah)
if (!tex2) return reply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
replysticker(waitstc)
setTimeout( () => {
sendButtonImageLoc(from, `*「 SUKSES 」*\n*Gift Limit  Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${ambl.replace("@", '')}*\n*TOTAL:${jumlah}*`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, ambl]}} )
}, 3000)
} else if (!q){
reply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
}
break
case 'giftm':
case 'giftmoney':
if (isBanned) return replysticker(banstc)
if (database === true) {if (!isRegistered) return sendButtonNotRegis(from)}
if (!isOwner) return replysticker(ownerstc)
if ((isMedia && !mek.message.quotedMessage || isQuotedTeks) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.participant 
wanu = _registered.indexOf(q)
if (!wanu) return reply(`gak ada datanya cuk`)
if (isNaN(q[0])) return reply(`harus berupa angka`)
const jumlah = Math.ceil(q * 1)
await addKoinUser(ambl, jumlah)
replysticker(waitstc)
setTimeout( () => {
sendButtonImageLoc(from, `*「 SUKSES 」*\n*Gift Limit  Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${ambl.replace("@", '')}*\n*TOTAL:${jumlah}*`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, ambl]}} )
}, 3000)
} else if (q) {
if (!q) return reply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
var targetnye = q.split(' ')[0]
var tex2 = q.split(' ')[1]
const tex1 = `${targetnye.replace("@", '')}@s.whatsapp.net`
const jumlah = Math.ceil(tex2 * 1)
await addKoinUser(tex1, jumlah)
if (!tex2) return reply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
replysticker(waitstc)
setTimeout( () => {
sendButtonImageLoc(from, `*「 SUKSES 」*\n*Gift Limit  Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${ambl.replace("@", '')}*\n*TOTAL:${jumlah}*`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, ambl]}} )
}, 3000)
} else if (!q){
eply(`Gunakan (spasi) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} @tag jumlah`)
}
break
//===============================================================================//
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

if (args[0] === "on") {
if (AntiLink) return  replysticker(faktifstc)
ntilink.push(from)
fs.writeFileSync('./database/group/antilink.json', JSON.stringify(ntilink))
replysticker(successtc)
} else if (args[0] === "off") {
if (!AntiLink) return replysticker(faktifstc)
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

