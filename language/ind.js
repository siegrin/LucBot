const f = "❒"
const jual1 = "250"
const jual2 = "350"
const jual3 = "450"
const prefix = "!"
const bi = "*│* ▸" 
const bu = "*╰────────────⦁*"   
const fs = require('fs') 
const setting = JSON.parse(fs.readFileSync('./settings.json'))
linkgc1 = setting.linkgc1
linkgc2 = setting.linkgc2
linkgc3 = setting.linkgc3
linkgc4 = setting.linkgc4
linkgc5 = setting.linkgc5



exports.simplemenu = (prefix) => { 
return `*╭─❲ TANTAN CHAT ❳*
${bi}${prefix}start
${bi}${prefix}next
${bu}

*╭─❲ MENU ❳*
${bi}${prefix}convertmenu
${bi}${prefix}downloadmenu
${bi}${prefix}gabutmenu
${bi}${prefix}zeksmenu
${bi}${prefix}groupmenu
${bi}${prefix}infomenu
${bi}${prefix}ownermenu
${bu}

*╭─❲ TENTANG BOT ❳*
${bi}${prefix}store
${bi}${prefix}setmenu
${bi}${prefix}owner
${bi}${prefix}rules
${bi}${prefix}gcbot
${bi}${prefix}sewa
${bi}${prefix}join
${bi}${prefix}botstat
${bi}${prefix}sc
${bu}

*╭─❲ BIG THANK TO ❳*
${bi}${prefix}contributor
${bi}${prefix}team
${bi}${prefix}support
${bu}\n`
}

exports.downloadmenu = (prefix) => { 
return `*╭─❲ DOWNLOADER ❳*
${bi}${prefix}play
${bi}${prefix}ytmp3
${bi}${prefix}ytmp4
${bi}${prefix}igdl
${bi}${prefix}tiktokdl
${bi}${prefix}mediafire
${bi}${prefix}pinterest
${bi}${prefix}surah
${bi}${prefix}playstore
${bi}${prefix}linkwa
${bi}${prefix}wallpaper
${bu}

*╭─❲ INTERNET ❳*
${bi}${prefix}ytsearch
${bi}${prefix}igstalk
${bi}${prefix}brainly
${bi}${prefix}herolist
${bi}${prefix}herodetail
${bi}${prefix}lirik
${bi}${prefix}google
${bi}${prefix}gimage
${bi}${prefix}wiki
${bi}${prefix}translate
${bu}\n`
}
exports.randompict = (prefix, dev, numbernye) => { 
return `
${bi}${prefix}meme
${bi}${prefix}darkjoke
${bi}${prefix}quote
${bi}${prefix}aesthetic
${bi}${prefix}cecan
${bi}${prefix}cogan
${bi}${prefix}hubsu
${bi}${prefix}cat
${bi}${prefix}dog
${bi}${prefix}bird
${bi}${prefix}fox
${bi}${prefix}panda
${bi}${prefix}kpop
${bu}\n`
}

exports.infomenu = (prefix, dev, numbernye) => { 
return `*╭─❲ INFO MENU ❳*
${bi}${prefix}store 
${bi}${prefix}owner 
${bi}${prefix}developer 
${bi}${prefix}rules 
${bi}${prefix}sc 
${bi}${prefix}youtube 
${bi}${prefix}tiktok 
${bi}${prefix}twitter 
${bi}${prefix}donasi 
${bi}${prefix}jadibot 
${bi}${prefix}ping
${bi}${prefix}gcbot
${bi}${prefix}speed
${bi}${prefix}status
${bi}${prefix}wame
${bi}${prefix}bahasa
${bi}${prefix}sewa
${bi}${prefix}request
${bi}${prefix}profile
${bi}${prefix}imunevirtex
${bu}

*╭─❲ LIST INFO ❳*
${bi}${prefix}premiumlist 
${bi}${prefix}blocklist 
${bi}${prefix}listbadword 
${bu}

*╭─❲ LIST STORAGE ❳*
${bi}${prefix}listvn
${bi}${prefix}stickerlist 
${bi}${prefix}listvideo
${bi}${prefix}listimage
${bu}\n`
}

exports.grupseting = (prefix, dev, numbernye) => { 
return `*╭─❲ GROUP SETTING ❳*
${bi}${prefix}welcome
${bi}${prefix}banchat
${bi}${prefix}event 
${bi}${prefix}antilink
${bi}${prefix}antivirtex 
${bi}${prefix}antitoxic
${bi}${prefix}group
${bi}${prefix}bukatime 
${bi}${prefix}tutuptime
${bi}${prefix}leavetime
${bu}

*╭─❲ INFO GROUP ❳*
${bi}${prefix}admin
${bi}${prefix}add 
${bi}${prefix}kick 
${bi}${prefix}voting 
${bi}${prefix}delvote 
${bi}${prefix}promote 
${bi}${prefix}demote 
${bi}${prefix}setppgroup
${bi}${prefix}setnamegrup
${bi}${prefix}setdesc 
${bi}${prefix}revoke 
${bi}${prefix}linkgrup
${bi}${prefix}listonline
${bi}${prefix}grupinfo
${bu}\n`
}

exports.convertmenu = (prefix, dev, numbernye) => { 
return `*╭─❲ CONVERT TEKS  ❳*
${bi}${prefix}zalgo
${bi}${prefix}vapor
${bi}${prefix}styletext
${bi}${prefix}fdeface
${bi}${prefix}readmore
${bi}${prefix}fliptext
${bi}${prefix}tohuruf
${bu}

*╭─❲ CONVERT IMAGE  ❳*
${bi}${prefix}sticker
${bi}${prefix}emoji
${bi}${prefix}stickerwm
${bi}${prefix}tourl
${bi}${prefix}toimg
${bi}${prefix}ocr
${bi}${prefix}fakeloc
${bu}

*╭─❲ CONVERT AUDIO ❳*
${bi}${prefix}tts
${bi}${prefix}detikvn
${bi}${prefix}volume
${bi}${prefix}tomp3
${bi}${prefix}toptt
${bi}${prefix}gemes
${bi}${prefix}nightcore
${bi}${prefix}fast
${bi}${prefix}reverse
${bi}${prefix}slow
${bi}${prefix}trigg
${bi}${prefix}bass
${bi}${prefix}gemuk
${bi}${prefix}tupai
${bi}${prefix}tempo
${bi}${prefix}vibra
${bi}${prefix}ghost
${bi}${prefix}robot
${bu}

*╭─❲ CONVERT VIDEO ❳*
${bi}${prefix}gemesvid
${bi}${prefix}nightcorevid
${bi}${prefix}fastvid
${bi}${prefix}reversevid
${bi}${prefix}slowvid
${bi}${prefix}triggvid
${bi}${prefix}bassvid
${bi}${prefix}gemukvid
${bi}${prefix}tupaivid
${bi}${prefix}vibravid
${bi}${prefix}tempovid
${bi}${prefix}ghostvid
${bi}${prefix}robotvid
${bi}${prefix}detikvideo
${bu}\n`
}

exports.gabutmenu = (prefix, dev, numbernye) => { 
return `*╭─❲ GABUT TIME ❳*
${bi}${prefix}getpic
${bi}${prefix}getbio
${bi}${prefix}getname
${bi}${prefix}tag
${bi}${prefix}hbd
${bi}${prefix}searchtext
${bu}

*╭─❲ CEK MENU ❳*
${bi}${prefix}pacaran
${bi}${prefix}kangen
${bi}${prefix}ngegay
${bi}${prefix}lesbian
${bi}${prefix}selingkuh 
${bi}${prefix}jadian
${bi}${prefix}sahabatan
${bi}${prefix}musuhan
${bi}${prefix}terganteng
${bi}${prefix}tercantik
${bi}${prefix}terpintar
${bi}${prefix}cupu
${bi}${prefix}terbodoh
${bi}${prefix}termalas
${bi}${prefix}gakguna
${bi}${prefix}sangean
${bi}${prefix}bokepers
${bi}${prefix}pendosa
${bi}${prefix}jomblo
${bi}${prefix}fakboy
${bi}${prefix}fakgirl
${bi}${prefix}sadboy
${bi}${prefix}sadgirl
${bi}${prefix}wibu
${bi}${prefix}jodohku
${bi}${prefix}beban
${bi}${prefix}watak
${bi}${prefix}hobby
${bi}${prefix}rate
${bi}${prefix}sangecek
${bi}${prefix}gaycek
${bi}${prefix}lesbicek
${bi}${prefix}gantengcek
${bi}${prefix}jelekcek
${bi}${prefix}cantikcek
${bi}${prefix}bucincek
${bi}${prefix}bebancek
${bi}${prefix}goblokcek
${bi}${prefix}pakgirlcek
${bi}${prefix}pakboycek
${bi}${prefix}haramcek
${bi}${prefix}halalcek
${bi}${prefix}nolepcek
${bi}${prefix}wibucek
${bi}${prefix}jomblocek
${bi}${prefix}pintarcek
${bi}${prefix}begocek
${bi}${prefix}bisakah
${bi}${prefix}kapankah
${bi}${prefix}bagaimanakah
${bi}${prefix}apakah
${bu}\n`
}

exports.menuowner = (prefix, dev, numbernye) => { 
return `*╭─❲ WELCOME OWNER ❳*
${bi}${prefix}mode
${bi}${prefix}restart
${bi}${prefix}exif
${bi}${prefix}hack
${bi}${prefix}join
${bi}${prefix}upsw
${bi}${prefix}wiskas
${bi}${prefix}term
${bi}${prefix}leave
${bi}${prefix}bc
${bi}${prefix}bcgc
${bi}${prefix}spam
${bi}${prefix}enable
${bi}${prefix}disable
${bi}${prefix}clearall
${bi}${prefix}deletepc
${bi}${prefix}readall
${bi}${prefix}unreadall
${bi}${prefix}pin
${bi}${prefix}unpin
${bi}${prefix}mute
${bi}${prefix}unmute
${bi}${prefix}archive
${bi}${prefix}unarchive
${bi}${prefix}kickall
${bi}${prefix}virtex
${bu}

*╭─❲ SET BOT ❳*
${bi}${prefix}setnamebot
${bi}${prefix}setppbot
${bi}${prefix}setprefix
${bi}${prefix}setmenu
${bi}${prefix}settheme
${bu}

*╭─❲ LIST ❳*
${bi}${prefix}listgroup
${bi}${prefix}listcmd
${bi}${prefix}listrespon
${bu}

*╭─❲ SISTEM ❳*
${bi}${prefix}premium
${bi}${prefix}unpremium
${bi}${prefix}block
${bi}${prefix}unblock
${bi}${prefix}cmd
${bi}${prefix}uncmd
${bi}${prefix}badword
${bi}${prefix}unbadword
${bu}

*╭─❲ SISTEM STORAGE ❳*
${bi}${prefix}addimg
${bi}${prefix}delimg
${bi}${prefix}chimg
${bi}${prefix}addvn
${bi}${prefix}delvn
${bi}${prefix}chvn
${bi}${prefix}addsticker
${bi}${prefix}delsticker
${bi}${prefix}chsticker
${bi}${prefix}addvideo
${bi}${prefix}delvideo
${bi}${prefix}chivideo
${bu}\n`
}

exports.mystore = (prefix, command, dev, numbernye) => { 
return `*╭─❲ WELCOME STORE ❳*
${bi}${prefix}sewabot
${bi}${prefix}rdpstore
${bi}${prefix}store1
${bi}${prefix}store2
${bi}${prefix}store3
${bu}

*╭─❲ TOP UP STORE ❳*
${bi}${prefix}sewabot
${bi}${prefix}rdpstore
${bi}${prefix}store1
${bi}${prefix}store2
${bi}${prefix}store3
${bu}\n
${bi}${prefix}topuphago
${bi}${prefix}topupgarena
${bi}${prefix}topuppb
${bi}${prefix}topupcod
${bi}${prefix}topuppubg
${bi}${prefix}topupdomino
${bi}${prefix}topupml
${bi}${prefix}topupefef
${bu}
\n`
}

exports.rdpstore = () => { 
return `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
     🕷️ READY KEBUTUHAN BOT WA 🕷️
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
💻 LIST RDP 💻

RAM 2GB CORE 1 : 30K
RAM 4GB CORE 2 : 50K
RAM 8GB : 75K
Remote Desktop Protocol (sering disingkat menjadi RDP) adalah sebuah protokol jaringan yang digunakan oleh Microsoft Windows Terminal Services dan Remote Desktop.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🤖 JASA SEWA BOT 🤖

✅ FAST RESPON
✅ 24 JAM)
✅ NO DELAY
💰 10K/BULAN
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
☎️ NOMOR KOSONG ☎️

✅ NOMOR (+62)
✅ 1x VERIFIKASI
✅ PERMANEN
✅ BERGARANSI
💰 3K / NOMOR
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
\n`}

exports.store2 = () => { 
return `‣‌🇯‌‌🇦‌‌🇸‌‌🇦‌•‌🇸‌‌🇭‌‌🇦‌‌🇷‌‌🇪‌
┏━━━━━━━━━━━━━━━━━━
┃  MENYEDIAKAN 
┃ JASA SHARE & JASA FULL IN MEMBER
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 50 GRUP
┃•1× SHARE : 500
┃•2× SHARE : 1.000
┃•3× SHARE : 1.500
┃•4× SHARE : 2.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 100 GRUP
┃•1× SHARE : 1.000
┃•2× SHARE : 2.000
┃•3× SHARE : 3.000
┃•4× SHARE : 4.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 150 GRUP
┃•1× SHARE : 1.500
┃•2× SHARE : 3.000
┃•3× SHARE : 4.500
┃•4× SHARE : 6.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 200 GRUP
┃•1× SHARE : 2.000
┃•2× SHARE : 4.000
┃•3× SHARE : 6.000
┃•4× SHARE : 8.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 256 GRUP
┃•1× SHARE : 2.500
┃•2× SHARE : 5.000
┃•3× SHARE : 7.500
┃•4× SHARE : 10.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ PAKET FULL IN MEMBER
┃•[50 MEMBER : 5.000]
┃•[100 MEMBER : 8.000]
┃•[150 MEMBER : 10.000]
┃•[200 MEMBER : 12.000]
┃•[257 MEMBER : 15.000]
┗━━━━━━━━━━━━━━━━━━━
💳PAYMENT
💸GOPAY
💸DANA
\n`
}

exports.store1 = (prefix, command, dev, numbernye) => { 
return `Haloo ini iklan bot mau ngenalin sesuatu nih...

Jadi disini iklan bot buka jasa mengubah foto kamu menjadi pixelart seperti di atas! Ga cuma foto lho! Karakter di game juga bisa! Dan ga cuma itu! Kamu juga bisa menjualnya sebagai NFT!

Harga
Rp20,000 (kepala - bahu)
Rp30,000 (kepala - pinggang)
Rp50,000 full body

custom background +Rp10,000

Apa manfaatnya?
1. Kamu bisa menggunakannya untuk profile mu!

2. Art ini bisa kamu gunakan sebagai NFT

3. Art ini bisa menjadi hadiah ulangtahun teman mu!

Buat kamu yang mau order yuk langsung chat nomer dibawah ini
\n`
}

exports.setingbot = (prefix, command, dev, numbernye) => { 
return `*╭─❲ WELCOME OWNER ❳*
${bi}${prefix+command} database
${bi}${prefix+command} anticall
${bi}${prefix+command} autoregis
${bi}${prefix+command} regisinfo
${bi}${prefix+command} infoerror
${bi}${prefix+command} autoreadpc
${bi}${prefix+command} autoreadgc
${bi}${prefix+command} antibug
${bi}${prefix+command} antitag
${bi}${prefix+command} autorespon
${bi}${prefix+command} autobackup
${bi}${prefix+command} autocomposing
${bi}${prefix+command} autorecording
${bu}\n`
}

exports.hxmenu = (prefix, dev, numbernye) => { 
return `*╭─❲ GACHA MENU ❳*
${bi}${prefix}chara
${bi}${prefix}cecan
${bi}${prefix}cogan
${bi}${prefix}husbu
${bi}${prefix}waifu
${bi}${prefix}loli
${bu}\n`
}

exports.gamemenu = (prefix, dev, numbernye) => { 
return `*╭─❲ GAME MENU ❳*
${bi}${prefix}ttt
${bi}${prefix}delsesi ttt
${bi}${prefix}cekhistory
${bi}${prefix}caklontong
${bi}${prefix}tebakgambar
${bi}${prefix}family100
${bi}${prefix}suit 
${bu}
`}


exports.levelup = (pushname, sender, player, getLevelingXp, getLevel, getLevelingLevel, role) => {
	return`*「 LEVEL UP」*
Hai ${bi}${pushname}
\`\`\`╭──────────────────────
${bi}❏CONGRATULATION
╰─────────────────────╮  
╭─────────────────────╯
${bi}❏ Nama :${bi}${pushname}
${bi}❏ Nomer:@${bi}${player.split("@")[0]}
${bi}❏ Xp:${getLevelingXp(sender)}
${bi}❏ Role:${role}
${bi}❏ Limit:+10
${bi}❏ PremLimit:+5
${bi}❏ Level Up:${getLevel} > ${getLevelingLevel(sender)}
╰─────────────────────╯\`\`\``
}

exports.lvlnul = () => {
	return`\`\`\`LEVELMU MASIH KOSONG\`\`\``
}

exports.inventory = (pushname, prefix, sender, getLevelingXp, getLevelingLevel, checkHealuser, checkATKuser, checkARMuser, checkPWRuser, checkSKLuser, checkDEFuser, checkSPDuser, checkMGCuser, checkLUKuser, heartbars, checkLimituser, potionpointa, megapotionpointa, uangku, reqXp, role, prema, player) => {
return `*「 INFO USER 」*
Status:${prema}
Nomer:@${player.split("@")[0]}
Uangmu:Rp.${uangku}.-
Role:${role}
Level:
*「 HEART BARS 」*
${heartbars}
*「 STAT 」*
LV:${getLevelingLevel(sender)}
EXP:${getLevelingXp(sender)}/${reqXp}
ATK:${checkATKuser(sender)}
ARM:${checkARMuser(sender)}
HP:${checkHealuser(sender)}
PWR:${checkPWRuser(sender)}
SKL:${checkSKLuser(sender)}
DEF:${checkDEFuser(sender)}
SPD:${checkSPDuser(sender)}
MGC:${checkMGCuser(sender)}
LUK:${checkLUKuser(sender)}
*「 RANSEL 」*
Limit:${checkLimituser(sender)}
${potionpointa}    
${megapotionpointa}
*「 STORAGE 」*
${prefix}use
${prefix}akuarium
${prefix}kebun
${prefix}biokimia otw
${prefix}transfer tag|nominal\n`
}

exports.ransel = (pushname, prefix, sender, getLevelingXp, getLevelingLevel, checkHealuser, heartbars, checkLimituser, checkpremLimituser, potionpointa, megapotionpointa, berlianpointa, emaspointa, perakpointa, perunggupointa, ironpointa, brickpointa, stonepointa, kerangajaibnpointa, jamurpointa, daunmaplepointa, daunpointa, daun1pointa, daun2pointa, clover3pointa, clover4pointa, kayupointa, bibitpointa, puzzlepointa, uangku, reqXp, role, fake, prema, player, tampilHari) => {
return `

*「 INFO USER 」*

Status:${bi}${prema}
Nomer:@${bi}${player.split("@")[0]}
Uangmu:Rp.${uangku}.-
XP:${getLevelingXp(sender)}/${reqXp}
Role:${role}
Level:${getLevelingLevel(sender)}

*「 RANSEL 」*

${heartbars}
Energy:${checkHealuser(sender)}
Limit:${checkLimituser(sender)}
Premlimit:${checkpremLimituser(sender)}
${bi}${prefix}akuarium
${bi}${prefix}kebun
${bi}${prefix}biokimia otw
${bi}${prefix}use
${bi}${prefix}transfer tag|nominal
${bi}${potionpointa}    
${megapotionpointa}

*「 ORE 」*

${emaspointa}      
${bi}${perakpointa} 
${bi}${perunggupointa} 
${ironpointa}   
${brickpointa} 
${stonepointa}   

*「 MYTHICAL ORE 」*

${berlianpointa}

*「 TRASH 」*

${kerangajaibnpointa}    
${daunpointa}
${jamurpointa}
${daun1pointa}
${daun2pointa}
${daunmaplepointa}    
${clover3pointa}
${kayupointa}
${clover4pointa}
${bibitpointa}
${bi}${puzzlepointa}`}

exports.bahasa = () => {
return `List Bahasa Untuk Command ${prefix}tts kode bahasa teks
  af: Afrikaans
  sq: Albanian
  ar: Arabic
  hy: Armenian
  ca: Catalan
  zh: Chinese
  zh-cn: Chinese (Mandarin/China)
  zh-tw: Chinese (Mandarin/Taiwan)
  zh-yue: Chinese (Cantonese)
  hr: Croatian
  cs: Czech
  da: Danish
  nl: Dutch
  en: English
  en-au: English (Australia)
  en-uk: English (United Kingdom)
  en-us: English (United States)
  eo: Esperanto
  fi: Finnish
  fr: French
  de: German
  el: Greek
  ht: Haitian Creole
  hi: Hindi
  hu: Hungarian
  is: Icelandic
  id: Indonesian
  it: Italian
  ja: Japanese
  ko: Korean
  la: Latin
  lv: Latvian
  mk: Macedonian
  no: Norwegian
  pl: Polish
  pt: Portuguese
  pt-br: Portuguese (Brazil)
  ro: Romanian
  ru: Russian
  sr: Serbian
  sk: Slovak
  es: Spanish
  es-es: Spanish (Spain)
  es-us: Spanish (United States)
  sw: Swahili
  sv: Swedish
  ta: Tamil
  th: Thai
  tr: Turkish
  vi: Vietnamese
  cy: Welsh\n`
}

exports.donasi = (prefix, player, ow, trakteer, saweria, donasi, rekening) => { 
	return `*╭─❲ DONASI ❳*
${bi} *Trakteer:* ${trakteer}
${bi} *Saweria:* ${saweria}
${bi} *All Payment:* ${donasi}
${bu}\n`}

exports.rules = (player, hahh, dev) => { 
	return `Sebelum Kamu menggunakan Bot ini Baca dulu beberapa Syarat Ketentuan,Peraturan Bot dan Kebijikan Privasi

Syarat Ketentuan
1.Bot akan keluar dari group apabila sudah waktunya keluar.
2.Bot dapan mem-ban users secara sepihak terlepas dari users salah atau tidak.
3.Bot tidak akan bertanggungjawab atas apapun yang users lakukan terhadap fitur bot.
4.Jika semisalkan bot di keluarkan dari group, maka masa periode di anggap sudah berakhir. Jika bot di keluarkan oleh owner atas 1 2 alasan semisal spam dari user maka silahkan kontak owner. @${dev.split("@")[0]}
5.Bot akan memberlakukan hukuman: block atau ban terhadap users yang melanggar peraturan.
6.Bertanggung jawab atas kesalahan fatal dalam programing maupun owner.
7.Jika user dalam masa penggunaan, maka secara otomatis user telah men-setujui peraturan dan syarat ketentuan Bot


Peraturan Bot
1.Users dilarang menelpon maupun memvideo call nomor bot.
2.Users dilarang mengirimkan berbagai bug, virtex, dll ke nomor bot.
3.Users diharap tidak melakukan spam dalam penggunaan bot.
4.Users dilarang menambahkan nomor bot secara illegal, untuk menambahkan silahkan hubungi owner.
5.Users diharap untuk tidak menyalah gunakan fitur fitur bot.

Kebijakan Privasi
1.Tidak akan merekam data riwayat chat user.
2.Tidak akan menyebarkan nomor users.
3.Bot tidak akan menyimpan media yang dikirimkan oleh users.
4.Bot tidak akan menyalah gunakan data data users.
5.Owner Bot berhak melihat data riwayat chat users.
6.Owner Bot berhak melihat status users.
7.Owner Bot dapat melihat riwayat chat, dan media yang dikirimkan users.

-Luc
-Siegrin

Peraturan: 19 Juli 2021\n
`}

exports.gcofficial = (player, hahh) => { 
	return `Silahkan join Group Official Bot,sekedar senang-senang dan mengetahui Update terbaru Dari Bot

Group 1
${linkgc1}

Group 2
${linkgc2}

Group 3
${linkgc3}

Group 4
${linkgc4}

Group 5
${linkgc5}

*Jika ada informasi penting mengenai bot atau semacamnya kemungkinan akan di share di group.*\n
`}

exports.store2 = () => { 
return `‣‌🇯‌‌🇦‌‌🇸‌‌🇦‌•‌🇸‌‌🇭‌‌🇦‌‌🇷‌‌🇪‌
┏━━━━━━━━━━━━━━━━━━
┃  MENYEDIAKAN 
┃ JASA SHARE & JASA FULL IN MEMBER
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 50 GRUP
┃•1× SHARE : 500
┃•2× SHARE : 1.000
┃•3× SHARE : 1.500
┃•4× SHARE : 2.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 100 GRUP
┃•1× SHARE : 1.000
┃•2× SHARE : 2.000
┃•3× SHARE : 3.000
┃•4× SHARE : 4.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 150 GRUP
┃•1× SHARE : 1.500
┃•2× SHARE : 3.000
┃•3× SHARE : 4.500
┃•4× SHARE : 6.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 200 GRUP
┃•1× SHARE : 2.000
┃•2× SHARE : 4.000
┃•3× SHARE : 6.000
┃•4× SHARE : 8.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ 🛒PAKET 256 GRUP
┃•1× SHARE : 2.500
┃•2× SHARE : 5.000
┃•3× SHARE : 7.500
┃•4× SHARE : 10.000
┃▰▰▰▰▰▰▰▰▰▰▰▰▰▰
┃ PAKET FULL IN MEMBER
┃•[50 MEMBER : 5.000]
┃•[100 MEMBER : 8.000]
┃•[150 MEMBER : 10.000]
┃•[200 MEMBER : 12.000]
┃•[257 MEMBER : 15.000]
┗━━━━━━━━━━━━━━━━━━━
💳PAYMENT
💸GOPAY
💸DANA
\n`
}

exports.premiumbot = () => { 
	return `*╭─❲ List Sewa ❳*       
${bi}1 Grup/ 30 Hari
${bi}- Rp. 15,000 Dana,GOPAY
${bi}1 Grup/ 30 Hari
${bi}- Rp. 20,000 Pulsa Telkomsel
${bu}

*╭─❲ FEATURE ❳*
${bi}✅ ON 24 JAM
${bi}✅ WELCOME ON/OFF
${bi}✅ ANTILINK ON/OFF
${bi}✅ ONLY ADMIN ON/OFF
${bi}✅ GABUT MENU
${bi}✅ MEDIA MENU
${bi}✅ BUILD STICKER
${bi}✅ TAGALL SYSTEM
${bi}✅ HIDETAG SYSTEM
${bi}✅ ADD OTHERS
${bu}

Kalau mau sewa silahkan chat Owner Bot
`}

exports.rpdstore = () => { 
return `▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
     🕷️ READY KEBUTUHAN BOT WA 🕷️
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
💻 LIST RDP 💻

RAM 2GB CORE 1 : 30K
RAM 4GB CORE 2 : 50K
RAM 8GB : 70K
Remote Desktop Protocol (sering disingkat menjadi RDP) adalah sebuah protokol jaringan yang digunakan oleh Microsoft Windows Terminal Services dan Remote Desktop.
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
🤖 JASA SEWA BOT 🤖

✅ FAST RESPON
✅ 24 JAM)
✅ NO DELAY
💰 10K/BULAN
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
☎️ NOMOR KOSONG ☎️

✅ NOMOR (+62)
✅ 1x VERIFIKASI
✅ PERMANEN
✅ BERGARANSI
💰 3K / NOMOR
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
\n
`}

exports.dmhago = (prefix) => { 
return `*「 HAGO 」*
• VIA ID
• LEGAL 100%
• PROSES 1-3 MENIT

*6 💎 Rp 2.000*
*45 💎 Rp 15.000*
*90 💎 Rp 30.000*
*225 💎 Rp 74.000*
*375 💎 Rp 121.000*
*900 💎 Rp 291.000*
*1650 💎 Rp 531.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmgarena = (prefix) => { 
return `*「 GARENA 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *33 SHELL 💰 Rp 10.000*
☂ *66 SHELL 💰 Rp 20.000*
☂ *99 SHELL 💰 Rp 30.000*
☂ *165 SHELL 💰 Rp 50.000*
☂ *330 SHELL 💰 Rp 100.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmpb = (prefix) => { 
return `*「 POINT BLANK 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *1200 PB CASH 💸 Rp 10.000*
☂ *2400 PB CASH 💸 Rp 20.000*
☂ *6000 PB CASH 💸 Rp 50.000*
☂ *12000 PB CASH 💸 Rp 95.000*
☂ *24000 PB CASH 💸 Rp 200.000*
☂ *36000 PB CASH 💸 Rp 280.000*
☂ *60000 PB CASH 💸 Rp 480.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmcod = (prefix) => { 
return `*「 CALL OF DUTY 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *31 CP 💸 Rp 5.000*
☂ *62 CP 💸 Rp 10.000*
☂ *127 CP 💸 Rp 20.000*
☂ *317 CP 💸 Rp 50.000*
☂ *634 CP 💸 Rp 90.000*
☂ *1373 CP 💸 Rp 195.000*
☂ *1901 CP 💸 Rp 250.000*
☂ *3300 CP 💸 Rp 395.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmpubg = (prefix) => { 
return `*「 PUBG 」*
• VIA ID
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *53 UC 💸 Rp 10.000*
☂ *105 UC 💸 Rp 22.000*
☂ *131 UC 💸 Rp 29.000*
☂ *263 UC 💸 Rp 48.500*
☂ *530 UC 💸 Rp 96.000*
☂ *825 UC 💸 Rp 143.000*
☂ *1100 UC 💸 Rp 187.000*
☂ *1925 UC 💸 Rp 319.430*
☂ *2200 UC 💸 Rp 372.680*
☂ *2463 UC 💸 Rp 422.230*
☂ *2730 UC 💸 Rp 456.180*
☂ *3025 UC 💸 Rp 502.205*
☂ *3300 UC 💸 Rp 552.205*
☂ *3563 UC 💸 Rp 602.680*
☂ *3830 UC 💸 Rp 632.180*
☂ *4125 UC 💸 Rp 687.180*
☂ *4400 UC 💸 Rp 732.180*
☂ *4663 UC 💸 Rp 776.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmdomino = (prefix) => { 
return `*「 DOMINO 」*
• VIA ID + NICK
• LEGAL 100%
• PROSES 1-5 MENIT
• STOK UNLIMITED

☂ *30M Koin Emas-D Rp 6.000*
☂ *60M Koin Emas-D Rp 12.000*
☂ *90M Koin Emas-D Rp 18.000*
☂ *100M Koin Emas-D Rp 19.500*
☂ *200M Koin Emas-D Rp 31.000*
☂ *400M Koin Emas-D Rp 62.000*
☂ *430M Koin Emas-D Rp 68.000*
☂ *500M Koin Emas-D Rp 81.500*
☂ *2B Koin Emas-D Rp 251.000*
☂ *4B Koin Emas-D Rp 502.000*
☂ *6B Koin Emas-D Rp 753.000*
☂ *8B Koin Emas-D Rp 1.004.000*
☂ *10B Koin Emas-D Rp 1.255.000*
☂ *12B Koin Emas-D Rp 1.506.000*
☂ *14B Koin Emas-D Rp 1.757.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.dmml = (prefix) => { 
return `*「 MOBILE LEGEND 」*
• VIA ID & SERVER
• LEGAL 100%
• PROSES 1-5 MENIT

☂ *86 💎 Rp 20.000*
☂ *172 💎 Rp 39.500*
☂ *257 💎 Rp 58.000*
☂ *344 💎 Rp 78.000*
☂ *429 💎 Rp 97.500*
☂ *514 💎 Rp 116.000*
☂ *600 💎 Rp 135.400*
☂ *706 💎 Rp 156.614*
☂ *878 💎 Rp 194.282*
☂ *963 💎 Rp 213.897*
☂ *1412 💎 Rp 310.756*
☂ *2195 💎 Rp 455.170*
☂ *3688 💎 Rp 760.000*
☂ *4394 💎 Rp 890.982*
☂ *5532 💎 Rp 1.145.000*
☂ *9288 💎 Rp 1.901.000*

*Starlight Membership Bonus 12 💎 Rp 97.000*
*Twilight Pass [PROMO ]  Rp 97.000*
*Starlight Membership  Rp 127.000*
*Twilight  Rp 127.000*
*Starlight Membership Plus [PROMO ] Rp 200.000*
*Mobile Legend Member Plus Rp 285.000*
\n
`}

exports.dmefef = (prefix) => { 
return `*「 FREE FIRE 」*
• VIA ID
• LEGAL 100%
• PROSES 1-7 MENIT

☂ *50 💎 Rp 7.789*
☂ *70 💎 Rp 10.000*
☂ *100 💎 Rp 15.500*
☂ *140 💎 Rp 19.500*
☂ *210 💎 Rp 28.522*
☂ *355 💎 Rp 46.500*
☂ *500 💎 Rp 66.500*
☂ *720 💎 Rp 92.740*
☂ *1000 💎 Rp 129.104*
☂ *1440 💎 Rp 183.200*
☂ *2000 💎 Rp 250.400*

*Member Mingguan Rp 28.800*
*Member Bulanan Rp 138.000*

Note : 
• Harga sewaktu waktu berubah
• Pastikan ID Sudah benar
• Pemesanan lebih tinggal x kan saja
• Kesalahan Pengirim data tidak ada reff
\n
`}

exports.growtopiashop = (prefix) => { 
return `WELCOME TO STORE
Ram      |   Core  |  Price
4GB      |    2    |  150WL
8GB      |    3    |  250WL
16GB     |    4    |  350WL
32GB     |    5    |  500WL

Garansi : 3Day
World depo : 
Vps Made By : 
note : Panel sus no Reff
Expired : 25 - 30Day
Buy?DM : wa.me/6289530298948?text=bang+buy+vps

Sell GTBOT : 8DL

Sell panel
Azure Pay as you go : 13DL
Linode : 17dl
Azure FT : 9dl

Jual Cpp versi terbaru 3.81

Sell Source Anti 7DL
Sell Source tools 7DL

Proctect By Frost 
Price
Sedang : 3DL
Kuat.     : 5DL

Tools DDOS By Frost 
Price
sedang : 3DL
Kuat.     : 5DL

Jual paket server price?dibawah
4GB | biasa | 400WL
4GB | pro.  | 500WL
4GB | super.| 600WL

8GB | biasa.| 500WL
8GB | pro.  | 600WL
8GB | super.| 700WL

16GB | biasa.| 600WL
16GB | pro.  | 700WL
16GB | super | 800WL
Paket Super Free Proctect
\n
`}

exports.zeksapi = (prefix) => { 
return `*╭─❲ ZEKS ❳*
${bi}${prefix}zestetikpic
${bi}${prefix}zmemeindo
${bi}${prefix}zdarkjokes
${bi}${prefix}znickepep 
${bi}${prefix}zrandomquran 
${bi}${prefix}zpantun 
${bi}${prefix}zquote   
${bi}${prefix}zfml 
${bu}

*╭─❲ MENU ❳*
${bi}${prefix}ztribunews 
${bi}${prefix}zliputan6 
${bi}${prefix}zfoxnews 
${bu}

*╭─❲ MENU IMAGE 2 ❳*
${bi}${prefix}zqrencode
${bi}${prefix}zbarcode 
${bi}${prefix}zhartatahta 
${bi}${prefix}zbneon 
${bi}${prefix}znaruto 
${bi}${prefix}zmatrix 
${bi}${prefix}zgneon 
${bi}${prefix}zbreakwall 
${bi}${prefix}zdropwater 
${bi}${prefix}zbneon 
${bi}${prefix}zflowertext 
${bi}${prefix}zthundertext 
${bi}${prefix}zcrosslogo 
${bi}${prefix}zsilktext 
${bi}${prefix}zflametext 
${bi}${prefix}zglowtext 
${bi}${prefix}zsmoketext 
${bi}${prefix}zskytext
${bi}${prefix}zlithgtext
${bi}${prefix}zcrismes
${bi}${prefix}ztfire
${bi}${prefix}ztpantai
${bi}${prefix}zepep
${bi}${prefix}zgplaybutton
${bi}${prefix}zsplaybutton
${bi}${prefix}ztext3dbox
${bi}${prefix}ztext3d
${bi}${prefix}zlogobp
${bi}${prefix}zleavest
${bi}${prefix}ztlight
${bi}${prefix}zwolflogo
${bi}${prefix}zpubglogo
${bi}${prefix}zcslogo
${bi}${prefix}zsnowwrite
${bi}${prefix}zwatercolour
${bi}${prefix}zlogoaveng
${bi}${prefix}zphlogo
${bi}${prefix}zmarvellogo
${bi}${prefix}zgtext
${bi}${prefix}zwatercolour
${bi}${prefix}zretro
${bi}${prefix}zphub
${bi}${prefix}zmagernulis  
${bi}${prefix}znulis  
${bi}${prefix}zbrand-logo  
${bu}

*╭─❲ SEARCHING ❳*
${bi}${prefix}zsgplay
${bi}${prefix}zsearchsticker
${bi}${prefix}zwiki
${bi}${prefix}zfilm/2
${bi}${prefix}zhappymod
${bi}${prefix}zkbbi
${bi}${prefix}zbrainly
${bi}${prefix}zspotify
${bu}

*╭─❲ MINIGAME ❳*
${bi}${prefix}ztebakgambar
${bi}${prefix}zsiapaaku
${bi}${prefix}zcaklontong
${bu}

*╭─❲ PRIMBON ❳*
${bi}${prefix}zartimimpi
${bi}${prefix}zartinama
${bi}${prefix}zprimbonjodoh
${bu}

*╭─❲ OTHER ❳*
${bi}${prefix}zjadwaltv
${bi}${prefix}zurlshort
${bi}${prefix}zurlshort-all
${bi}${prefix}ztts
${bi}${prefix}zjadwalsholat
${bu}
\n
`}