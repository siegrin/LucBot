const {
    WAConnection: _WAConnection,
   MessageType,
   Presence,
   MessageOptions,
   Mimetype,
   WALocationMessage,
   WA_MESSAGE_STUB_TYPES,
   ReconnectMode,
   ProxyAgent,
   GroupSettingChange,
   waChatKey,
   mentionedJid,
   processTime,
   processTicksAndRejections,
   ECONNABORTED,
   apikey,
   WA_DEAFULT_EPHEMERAL,
   DataView,
   TypedArray,
   device,
   Browser
} = require('@adiwajshing/baileys')
const { wait,simih,getBuffer, h2k, generateMessageID, getGroupAdmins, getRandom, start, info, success, banner, close } = require('./lib/bot/functions')
const simple = require('./lib/bot/simple.js')
const { color, bgcolor } = require('./lib/bot/color')
const fs = require("fs-extra")
const WAConnection = simple.WAConnection(_WAConnection)
const figlet = require('figlet')
const moment = require("moment-timezone")
const gcdetect = JSON.parse(fs.readFileSync('./src/gcdetect.json'))
const chalk = require('chalk')
const welkom = JSON.parse(fs.readFileSync('./database/group/welkom.json'))
const antilinkk = JSON.parse(fs.readFileSync('./database/group/antilink.json'))
const setting = JSON.parse(fs.readFileSync('./settings.json'))
const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product, buttonsMessage } = MessageType
baterai = 'unknown'
charging = 'unknown'
randomserver = ['Chrome','Safari','Firefox','Opera']
const randomserverku = randomserver[Math.floor(Math.random() * (randomserver.length))]
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss')			
const wita = moment.tz('Asia/Makassar').format('HH:mm:ss')			
const wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')	

var date = new Date();

var tahun = date.getFullYear();
var bulan1 = date.getMonth();
var tanggal = date.getDate();
var hari = date.getDay();
var jams = date.getHours();
var menit = date.getMinutes(); 
var detik = date.getSeconds();
var waktoo = date.getHours();

switch(hari) {
case 0: hari = 'Minggu'; break;
case 1: hari = 'Senin'; break;
case 2: hari = 'Selasa'; break;
case 3: hari = 'Rabu'; break;
case 4: hari = 'Kamis'; break;
case 5: hari = 'Jum`at'; break;
case 6: hari = 'Sabtu'; break;
}

switch(bulan1) { 
case 0: bulan1 = 'clientuari'; break;
case 1: bulan1 = 'Februari'; break; 
case 2: bulan1 = 'Maret'; break;
case 3: bulan1 = 'April'; break;
case 4: bulan1 = 'Mei'; break;
case 5: bulan1 = 'Juni'; break;
case 6: bulan1 = 'Juli'; break;
case 7: bulan1 = 'Agustus'; break;
case 8: bulan1 = 'September'; break;
case 9: bulan1 = 'Oktober'; break; 
case 10: bulan1 = 'November'; break;
case 11: bulan1 = 'Desember'; break; 
}

switch(jams){
case 0: pada = "Malem"; break;
case 1: pada = "Malem"; break;
case 2: pada = "Malem"; break;
case 3: pada = "Pagi"; break;
case 4: pada = "Pagi"; break;
case 5: pada = "Pagi"; break;
case 6: pada = "Pagi"; break;
case 7: pada = "Pagi"; break;
case 8: pada = "Pagi"; break;
case 9: pada = "Pagi"; break;
case 10: pada = "Pagi"; break;
case 11: pada = "Siang"; break;
case 12: pada = "Siang"; break;
case 13: pada = "Siang"; break;
case 14: pada = "Siang"; break;
case 15: pada = "Sore"; break;
case 16: pada = "Sore"; break;
case 17: pada = "Sore"; break;
case 18: pada = "Malem"; break;
case 19: pada = "Malem"; break;
case 20: pada = "Malem"; break;
case 21: pada = "Malem"; break;
case 22: pada = "Malem"; break;
case 23: pada = "Malem"; break;
}

var tampilHari = '' + hari + ', ' + tanggal + ' ' + bulan1 + ' ' + tahun; 
var tampilJam = '' + 'Jams : ' + jams + ':' + menit + ':' + detik + ' Wib';
tampilTanggal = hari + " "+ tanggal + " " + bulan1 + " " + tahun; 
tampilWaktu =jams + ":" + menit + ":" + detik;



var ase = new Date();
var waktoonyabro = ase.getHours(); 
switch(waktoonyabro){
case 0: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 1: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 2: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 3: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 4: waktoonyabro = `Selamat Pagi Owner..✨`; break; 
case 5: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 6: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 7: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 8: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 9: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 10: waktoonyabro = `Selamat Pagi Owner..✨`; break;
case 11: waktoonyabro = `Selamat Siang Owner..🔥`; break; 
case 12: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 13: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 14: waktoonyabro = `Selamat Siang Owner..🔥`; break;
case 15: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 16: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 17: waktoonyabro = `Selamat Sore Owner..🌇`; break;
case 18: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 19: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 20: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 21: waktoonyabro = `Selamat Malam Owner..🌃`; break;
case 22: waktoonyabro = `Selamat Malam Owner..🌃`; break; 
case 23: waktoonyabro = `Selamat Malam Owner..🌃`; break;
}

var tampilUcapan = '' + waktoonyabro;

//nocache
require('./index.js')
nocache('./index.js', module => console.log(`${module} is now updated!`))


const starts = async (client = new WAConnection()) => {
	client.logger.level = 'warn'
	client.version = [2, 2143, 4]
	console.log(color(`\x1b[1;37m> ${tampilUcapan}\n`,'green'))
console.log(color('\n> WIB ','silver'), color(`${time}`,'mediumseagreen'))
console.log(color('> WITA ','silver'), color(`${wita}`,'mediumseagreen'))
console.log(color('> WIT ','silver'), color(`${wit}`,'mediumseagreen'))
console.log(color('> HARI ','silver'), color(`${tampilHari}\n`,'mediumseagreen'))
	console.log(color(']','white'),color('----------------','blue'),color('CONNECTED','green'),color('----------------','blue'),color('[','white'));
	console.log('\x0A');
	
	console.log('\x0A');console.log(color(']','white'),color('----------------','blue'),color('SIEGRIN','green'),color('----------------','blue'),color('[','white'));console.log('\x0A');
	console.log(color('Subscribe','red'),color('&','white'),color('Support','red'),color('CHANNEL GUA','yellow'),color('SIEGRIN','white'));console.log(color('Thanks Buat Kalian Yang Sudah Subscribe T_T','cyan'));
	console.log('\x0A');
	console.log(color('©2021 LUCBOT. All Right Reversed.','white'));
	console.log('\x0A');
	console.log(color(']','white'),color('----------------','blue'),color('SIEGRIN','green'),color('----------------','blue'),color('[','white'));
client.browserDescription = [ 'SIEGRIN HERE', `${randomserverku}`, '3.0' ]
	client.on('qr', () => {
	console.log(color('[','white'), color('!','red'), color(']','white'), color('SCAN QR NYA'))
})
	client.on('credentials-updated', () => {
		fs.writeFileSync('./session.json', JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
		info('2', 'Luc Bot Asisstan Loading...')
	})
	fs.existsSync('./session.json') && client.loadAuthInfo('./session.json')
	client.on('connecting', () => {
		start('2', 'CONNECT')
	})
	client.on('open', () => {
		success('2', 'Tersambung')
	})
    
	// session
	await client.connect({
		timeoutMs: 30 * 100000
	})
	fs.writeFileSync(`./session.json`, JSON.stringify(client.base64EncodedAuthInfo(), null, '\t'))
 

client.on("CB:Call", json => {
if (antical === false) return
let call;
calling = JSON.parse(JSON.stringify(json))
call = calling[1].from
client.sendMessage(call, `Sulit Dimengerti Semoga Hari Suram`, MessageType.text)
.then(() => client.blockUser(call, "add"))
})
    client.on('CB:Blocklist', json => {                                                                  
        if (blocked.length > 2) return
        for (let i of json[1].blocklist) {
            blocked.push(i.replace('c.us','s.whatsapp.net'))
        }
    })
	// Baterai
	client.on('CB:action,,battery', json => {
		global.batteryLevelStr = json[2][0][1].value
		global.batterylevel = parseInt(batteryLevelStr)
		baterai = batterylevel
		if (json[2][0][1].live == 'true') charging = true
		if (json[2][0][1].live == 'false') charging = false
		console.log(json[2][0][1])
		console.log('Baterai : ' + batterylevel + '%')
	})
	global.batrei = global.batrei ? global.batrei : []
	client.on('CB:action,,battery', json => {
		const batteryLevelStr = json[2][0][1].value
		const batterylevel = parseInt(batteryLevelStr)
		global.batrei.push(batterylevel)
	})

	// Send Message
const sendButImage = async (id, text1, desc1, gam1, but = [], options = {}) => {
      kma = gam1;
      mhan = await client.prepareMessage(id, kma, MessageType.image);
       buttonMessages = {
        imageMessage: mhan.message.imageMessage,
        contentText: text1,
        footerText: desc1,
        buttons: but,
        headerType: 4,
      }
      client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
    }
const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {
kma = gam1
mhan = await client.prepareMessage(id, kma, location)
const buttonMessages = {
locationMessage: mhan.message.locationMessage,
contentText: text1,
footerText: desc1,
buttons: but,
headerType: 6,
}
client.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)
}

const Sendbutdocument = async(id, text1, desc1, file1, doc1, but = [], options = {}) => {
media = file1
kma = doc1
mhan = await client.prepareMessage(id, media, document, kma)
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

   // owner

    const numbernye = "0@s.whatsapp.net"
const dev = "0@s.whatsapp.net"

    client.on('chat-update', async (message) => {
        require('./index.js')(client, message)
    })     

client.on("group-update", async (anu) => {
    metdata = await client.groupMetadata(anu.jid);
	if (!welkom.includes(anu.jid)) return
    if (anu.announce == "false") {
      teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Opened ] - In ${metdata.subject}`);
    } else if (anu.announce == "true") {
      teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Closed ] - In ${metdata.subject}`);
    } else if (!anu.desc == "") {
      tag = anu.descOwner.split("@")[0] + "@s.whatsapp.net";
      teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${
        anu.descOwner.split("@")[0]
      }\n� Deskripsi Baru : ${anu.desc}`;
      client.sendMessage(metdata.id, teks, MessageType.text, {
        contextInfo: { mentionedJid: [tag] },
      });
      console.log(`- [ Group Description Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "false") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    } else if (anu.restrict == "true") {
      teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`;
      client.sendMessage(metdata.id, teks, MessageType.text);
      console.log(`- [ Group Setting Change ] - In ${metdata.subject}`);
    }
  });

client.on('group-participants-update', async (anu) => {
	try {
		if (!welkom.includes(anu.jid)) return
		mdata = await client.groupMetadata(anu.jid)
		console.log(anu)
		if (anu.action == 'add') {
			num = anu.participants[0]
			try {
				ppUrl = await client.getProfilePicture(num)
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
			   const mediaimgen = await client.prepareMessage(id, img, MessageType.location, {thumbnail: img})
let buttonloc2 = mediaimgen.message["ephemeralMessage"] ? mediaimgen.message.ephemeralMessage : mediaimgen
			   Sendbutdocument(anu.jid, `Bergabung Pada Jam: ${time}`, `@${num.split('@')[0]}\n*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${dev.split("@")[0]}*`, fs.readFileSync('./lib/LUCBOT.pdf'), {mimetype:Mimetype.pdf, thumbnail: img, filename:`WELCOME ANAK AYAM`, pageCount: 9999 }, [{buttonId:'menu',buttonText:{displayText:'WELCOME'},type:1}], {contextInfo: { mentionedJid: [ow,num,dev,numbernye], sendEphemeral: true, externalAdReply:{title:`Selamat Datang Di Group: ${mdata.subject}`,mediaType:"2",thumbnail:img ,mediaUrl:`https://www.youtube.com/watch?v=sfAy8TH-q-E`}}})
			} else if (anu.action == 'remove') {
			num = anu.participants[0]
			try {
				ppUrl = await client.getProfilePicture(num)
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				const mediaimgen = await client.prepareMessage(id, img, MessageType.location, {thumbnail: img})
let buttonloc2 = mediaimgen.message["ephemeralMessage"] ? mediaimgen.message.ephemeralMessage : mediaimgen
			   Sendbutdocument(anu.jid, `Keluar Pada Jam: ${time}`, `@${num.split('@')[0]}\n*Support Nekopoi.Care*\n*Offical Bot By @${numbernye.split("@")[0]}*\n*Powered By @${dev.split("@")[0]}*`, fs.readFileSync('./lib/LUCBOT.pdf'), {mimetype:Mimetype.pdf, thumbnail: img, filename:`SAYONARA BEBAN`, pageCount: 9999 }, [{buttonId:'menu',buttonText:{displayText:'SAYONARA'},type:1}], {contextInfo: { mentionedJid: [ow,num,dev,numbernye], sendEphemeral: true, externalAdReply:{title:`Beban Keluar Di Group: ${mdata.subject}`,mediaType:"2",thumbnail:img ,mediaUrl:`https://www.youtube.com/watch?v=sfAy8TH-q-E`}}})
			} else if (anu.action == 'promote') {
			num = anu.participants[0]
			try {
				ppUrl = await client.getProfilePicture(num)
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `「 PROMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Member -> Admin\nGroup : ${mdata.subject}`
				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SELAMAT KAK`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
			} else if (anu.action == 'demote') {
			num = anu.participants[0]
			try {
				ppUrl = await client.getProfilePicture(num)
				} catch {
					ppUrl = 'https://i.ibb.co/6BRf4Rc/Hans-Bot-No-Profile.png'
				}
				img = await getBuffer(ppUrl)
				teks = `「 DEMOTE - DETECTED 」\n\nNama : @${num.split("@")[0]}\nStatus : Admin -> Member\nGroup : ${mdata.subject}`
				sendButImage(anu.jid, teks, ``, img,but = [{buttonId: `Hello World!`, buttonText: {displayText: `SABAR YA`}, type: 1}], options = {contextInfo: {mentionedJid: [num]}})
			}
		} catch (e) {

			console.log(e)

			}

		})
		
client.on('group-update', async (anu) => {
	try { 
	if (!welkom.includes(anu.jid)) return
	console.log(anu)
	from = anu.jid
	group = await client.groupMetadata(anu.jid)
	if (!anu.desc == '') {
		tag = anu.descOwner.replace('@c.us', '@s.whatsapp.net')
		client.sendMessage(group.id, `Group Description Change\n\n• Admin : @${tag.split("@")[0]}\n• Group : ${group.subject}\n• descTime : ${anu.descTime}\n• descID : ${anu.descId}\n• descNew : ${anu.desc}`, MessageType.text, {contextInfo: { mentionedJid: [tag]}})
		} else if (!anu.restrict == '') {
			client.sendMessage(group.id, `Group Restrict Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• restrict : ${anu.restrict}`, MessageType.text)
			} else if (!anu.announce == '') {
				client.sendMessage(group.id, `Group Announce Change\n\n• Group : ${group.subject}\n• groupId : ${anu.jid}\n• announce : ${anu.announce}`, MessageType.text)
				} 
					} catch(err) {
						e = String(err)
						console.log(e)
						}

	})

}

/**
 * Uncache if there is file change
 * @param {string} module Module name or path
 * @param {function} cb <optional> 
 */
function nocache(module, cb = () => { }) {
    console.log('Module', `'${module}'`, 'is now being watched for changes')
    fs.watchFile(require.resolve(module), async () => {
        await uncache(require.resolve(module))
        cb(module)
    })
}

/**
 * Uncache a module
 * @param {string} module Module name or path
 */
function uncache(module = '.') {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(module)]
            resolve()
        } catch (e) {
            reject(e)
        }
    })
}

starts()