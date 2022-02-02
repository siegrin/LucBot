const fs = require('fs') 
const _apelhijau = JSON.parse(fs.readFileSync('./database/adventure/buah/apelhijau.json'))
const _apelmerah = JSON.parse(fs.readFileSync('./database/adventure/buah/apelmerah.json'))
const _jambu = JSON.parse(fs.readFileSync('./database/adventure/buah/jambu.json'))
const _jeruk = JSON.parse(fs.readFileSync('./database/adventure/buah/jeruk.json'))
const _lemon = JSON.parse(fs.readFileSync('./database/adventure/buah/lemon.json'))
const _pisang = JSON.parse(fs.readFileSync('./database/adventure/buah/pisang.json'))
const _semangka = JSON.parse(fs.readFileSync('./database/adventure/buah/semangka.json'))
const _anggur = JSON.parse(fs.readFileSync('./database/adventure/buah/anggur.json'))
const _strawberry = JSON.parse(fs.readFileSync('./database/adventure/buah/strawberry.json'))
const _blueberry = JSON.parse(fs.readFileSync('./database/adventure/buah/blueberry.json'))
const _melon = JSON.parse(fs.readFileSync('./database/adventure/buah/melon.json'))
const _cherry = JSON.parse(fs.readFileSync('./database/adventure/buah/cherry.json'))
const _peach = JSON.parse(fs.readFileSync('./database/adventure/buah/peach.json'))
const _mangga = JSON.parse(fs.readFileSync('./database/adventure/buah/mangga.json'))
const _nanas = JSON.parse(fs.readFileSync('./database/adventure/buah/nanas.json'))
const _kelapa = JSON.parse(fs.readFileSync('./database/adventure/buah/kelapa.json'))
const _kiwi = JSON.parse(fs.readFileSync('./database/adventure/buah/kiwi.json'))
const _tomat = JSON.parse(fs.readFileSync('./database/adventure/buah/tomat.json'))
const _terong = JSON.parse(fs.readFileSync('./database/adventure/buah/terong.json'))
const _alpukat = JSON.parse(fs.readFileSync('./database/adventure/buah/alpukat.json'))
const _kol = JSON.parse(fs.readFileSync('./database/adventure/buah/kol.json'))
const _sawi = JSON.parse(fs.readFileSync('./database/adventure/buah/sawi.json'))
const _timun = JSON.parse(fs.readFileSync('./database/adventure/buah/timun.json'))
const _cabe = JSON.parse(fs.readFileSync('./database/adventure/buah/cabe.json'))
const _paprika = JSON.parse(fs.readFileSync('./database/adventure/buah/paprika.json'))
const _jagung = JSON.parse(fs.readFileSync('./database/adventure/buah/jagung.json'))
const _wortel = JSON.parse(fs.readFileSync('./database/adventure/buah/wortel.json'))
const _zaitun = JSON.parse(fs.readFileSync('./database/adventure/buah/zaitun.json'))
const _bawang = JSON.parse(fs.readFileSync('./database/adventure/buah/bawang.json'))
const _bombay = JSON.parse(fs.readFileSync('./database/adventure/buah/bombay.json'))
const _kentang = JSON.parse(fs.readFileSync('./database/adventure/buah/kentang.json'))
const _ubi = JSON.parse(fs.readFileSync('./database/adventure/buah/ubi.json'))
/********** FUNCTION apelhijau ***************/
const addApelHijau = (sender) => {
        	const obj = {id: sender, apelhijau : 0}
            _apelhijau.push(obj)
            fs.writeFileSync('./database/adventure/buah/apelhijau.json', JSON.stringify(_apelhijau))
        }

        const addApelHijauUser = (sender, amount) => {
        	let position = false
            Object.keys(_apelhijau).forEach((i) => {
                if (_apelhijau[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _apelhijau[position].apelhijau += amount
                fs.writeFileSync('./database/adventure/buah/apelhijau.json', JSON.stringify(_apelhijau))
            }
        }
		
		const checkApelHijauuser = (sender) => {
        	let position = false
            Object.keys(_apelhijau).forEach((i) => {
                if (_apelhijau[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _apelhijau[position].apelhijau
            }
        }
         
         const confirmAPELHIJAU = (sender, amount) => {
             let position = false
            Object.keys(_apelhijau).forEach((i) => {
                if (_apelhijau[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _apelhijau[position].apelhijau -= amount
                fs.writeFileSync('./database/adventure/buah/apelhijau.json', JSON.stringify(_apelhijau))
            }
        }
/********** FUNCTION apelmerah ***************/
const addApelMerah = (sender) => {
        	const obj = {id: sender, apelmerah : 0}
            _apelmerah.push(obj)
            fs.writeFileSync('./database/adventure/buah/apelmerah.json', JSON.stringify(_apelmerah))
        }

        const addApelMerahUser = (sender, amount) => {
        	let position = false
            Object.keys(_apelmerah).forEach((i) => {
                if (_apelmerah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _apelmerah[position].apelmerah += amount
                fs.writeFileSync('./database/adventure/buah/apelmerah.json', JSON.stringify(_apelmerah))
            }
        }
		
		const checkApelMerahuser = (sender) => {
        	let position = false
            Object.keys(_apelmerah).forEach((i) => {
                if (_apelmerah[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _apelmerah[position].apelmerah
            }
        }
         
         const confirmAPELMERAH = (sender, amount) => {
             let position = false
            Object.keys(_apelmerah).forEach((i) => {
                if (_apelmerah[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _apelmerah[position].apelmerah -= amount
                fs.writeFileSync('./database/adventure/buah/apelmerah.json', JSON.stringify(_apelmerah))
            }
        }
	/********** FUNCTION jambu ***************/
const addJambu = (sender) => {
        	const obj = {id: sender, jambu : 0}
            _jambu.push(obj)
            fs.writeFileSync('./database/adventure/buah/jambu.json', JSON.stringify(_jambu))
        }

        const addJambuUser = (sender, amount) => {
        	let position = false
            Object.keys(_jambu).forEach((i) => {
                if (_jambu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jambu[position].jambu += amount
                fs.writeFileSync('./database/adventure/buah/jambu.json', JSON.stringify(_jambu))
            }
        }
		
		const checkJambuuser = (sender) => {
        	let position = false
            Object.keys(_jambu).forEach((i) => {
                if (_jambu[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _jambu[position].jambu
            }
        }
         
         const confirmJAMBU = (sender, amount) => {
             let position = false
            Object.keys(_jambu).forEach((i) => {
                if (_jambu[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jambu[position].jambu -= amount
                fs.writeFileSync('./database/adventure/buah/jambu.json', JSON.stringify(_jambu))
            }
        }
/********** FUNCTION jeruk ***************/
const addJeruk = (sender) => {
        	const obj = {id: sender, jeruk : 0}
            _jeruk.push(obj)
            fs.writeFileSync('./database/adventure/buah/jeruk.json', JSON.stringify(_jeruk))
        }

        const addJerukUser = (sender, amount) => {
        	let position = false
            Object.keys(_jeruk).forEach((i) => {
                if (_jeruk[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jeruk[position].jeruk += amount
                fs.writeFileSync('./database/adventure/buah/jeruk.json', JSON.stringify(_jeruk))
            }
        }
		
		const checkJerukuser = (sender) => {
        	let position = false
            Object.keys(_jeruk).forEach((i) => {
                if (_jeruk[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _jeruk[position].jeruk
            }
        }
         
         const confirmJERUK = (sender, amount) => {
             let position = false
            Object.keys(_jeruk).forEach((i) => {
                if (_jeruk[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jeruk[position].jeruk -= amount
                fs.writeFileSync('./database/adventure/buah/jeruk.json', JSON.stringify(_jeruk))
            }
        }
/********** FUNCTION lemon ***************/
const addLemon = (sender) => {
        	const obj = {id: sender, lemon : 0}
            _lemon.push(obj)
            fs.writeFileSync('./database/adventure/buah/lemon.json', JSON.stringify(_lemon))
        }

        const addLemonUser = (sender, amount) => {
        	let position = false
            Object.keys(_lemon).forEach((i) => {
                if (_lemon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lemon[position].lemon += amount
                fs.writeFileSync('./database/adventure/buah/lemon.json', JSON.stringify(_lemon))
            }
        }
		
		const checkLemonuser = (sender) => {
        	let position = false
            Object.keys(_lemon).forEach((i) => {
                if (_lemon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _lemon[position].lemon
            }
        }
         
         const confirmLEMON = (sender, amount) => {
             let position = false
            Object.keys(_lemon).forEach((i) => {
                if (_lemon[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _lemon[position].lemon -= amount
                fs.writeFileSync('./database/adventure/buah/lemon.json', JSON.stringify(_lemon))
            }
        }	
/********** FUNCTION pisang ***************/
const addPisang = (sender) => {
        	const obj = {id: sender, pisang : 0}
            _pisang.push(obj)
            fs.writeFileSync('./database/adventure/buah/pisang.json', JSON.stringify(_pisang))
        }

        const addPisangUser = (sender, amount) => {
        	let position = false
            Object.keys(_pisang).forEach((i) => {
                if (_pisang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pisang[position].pisang += amount
                fs.writeFileSync('./database/adventure/buah/pisang.json', JSON.stringify(_pisang))
            }
        }
		
		const checkPisanguser = (sender) => {
        	let position = false
            Object.keys(_pisang).forEach((i) => {
                if (_pisang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _pisang[position].pisang
            }
        }
         
         const confirmPISANG = (sender, amount) => {
             let position = false
            Object.keys(_pisang).forEach((i) => {
                if (_pisang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _pisang[position].pisang -= amount
                fs.writeFileSync('./database/adventure/buah/pisang.json', JSON.stringify(_pisang))
            }
        }	

/********** FUNCTION semangka ***************/
const addSemangka = (sender) => {
        	const obj = {id: sender, semangka : 0}
            _semangka.push(obj)
            fs.writeFileSync('./database/adventure/buah/semangka.json', JSON.stringify(_semangka))
        }

        const addSemangkaUser = (sender, amount) => {
        	let position = false
            Object.keys(_semangka).forEach((i) => {
                if (_semangka[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _semangka[position].semangka += amount
                fs.writeFileSync('./database/adventure/buah/semangka.json', JSON.stringify(_semangka))
            }
        }
		
		const checkSemangkauser = (sender) => {
        	let position = false
            Object.keys(_semangka).forEach((i) => {
                if (_semangka[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _semangka[position].semangka
            }
        }
         
         const confirmSEMANGKA = (sender, amount) => {
             let position = false
            Object.keys(_semangka).forEach((i) => {
                if (_semangka[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _semangka[position].semangka -= amount
                fs.writeFileSync('./database/adventure/buah/semangka.json', JSON.stringify(_semangka))
            }
        }			
/********** FUNCTION anggur ***************/
const addAnggur = (sender) => {
        	const obj = {id: sender, anggur : 0}
            _anggur.push(obj)
            fs.writeFileSync('./database/adventure/buah/anggur.json', JSON.stringify(_anggur))
        }

        const addAnggurUser = (sender, amount) => {
        	let position = false
            Object.keys(_anggur).forEach((i) => {
                if (_anggur[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _anggur[position].anggur += amount
                fs.writeFileSync('./database/adventure/buah/anggur.json', JSON.stringify(_anggur))
            }
        }
		
		const checkAngguruser = (sender) => {
        	let position = false
            Object.keys(_anggur).forEach((i) => {
                if (_anggur[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _anggur[position].anggur
            }
        }
         
         const confirmANGGUR = (sender, amount) => {
             let position = false
            Object.keys(_anggur).forEach((i) => {
                if (_anggur[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _anggur[position].anggur -= amount
                fs.writeFileSync('./database/adventure/buah/anggur.json', JSON.stringify(_anggur))
            }
        }
	/********** FUNCTION strawberry ***************/
const addStrawberry = (sender) => {
        	const obj = {id: sender, strawberry : 0}
            _strawberry.push(obj)
            fs.writeFileSync('./database/adventure/buah/strawberry.json', JSON.stringify(_strawberry))
        }

        const addStrawberryUser = (sender, amount) => {
        	let position = false
            Object.keys(_strawberry).forEach((i) => {
                if (_strawberry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _strawberry[position].strawberry += amount
                fs.writeFileSync('./database/adventure/buah/strawberry.json', JSON.stringify(_strawberry))
            }
        }
		
		const checkStrawberryuser = (sender) => {
        	let position = false
            Object.keys(_strawberry).forEach((i) => {
                if (_strawberry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _strawberry[position].strawberry
            }
        }
         
         const confirmSTRAWBERRY = (sender, amount) => {
             let position = false
            Object.keys(_strawberry).forEach((i) => {
                if (_strawberry[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _strawberry[position].strawberry -= amount
                fs.writeFileSync('./database/adventure/buah/strawberry.json', JSON.stringify(_strawberry))
            }
        }
/********** FUNCTION blueberry ***************/
const addBlueberry = (sender) => {
        	const obj = {id: sender, blueberry : 0}
            _blueberry.push(obj)
            fs.writeFileSync('./database/adventure/buah/blueberry.json', JSON.stringify(_blueberry))
        }

        const addBlueberryUser = (sender, amount) => {
        	let position = false
            Object.keys(_blueberry).forEach((i) => {
                if (_blueberry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _blueberry[position].blueberry += amount
                fs.writeFileSync('./database/adventure/buah/blueberry.json', JSON.stringify(_blueberry))
            }
        }
		
		const checkBlueberryuser = (sender) => {
        	let position = false
            Object.keys(_blueberry).forEach((i) => {
                if (_blueberry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _blueberry[position].blueberry
            }
        }
         
         const confirmBLUEBERRY = (sender, amount) => {
             let position = false
            Object.keys(_blueberry).forEach((i) => {
                if (_blueberry[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _blueberry[position].blueberry -= amount
                fs.writeFileSync('./database/adventure/buah/blueberry.json', JSON.stringify(_blueberry))
            }
        }
/********** FUNCTION melon ***************/
const addMelon = (sender) => {
        	const obj = {id: sender, melon : 0}
            _melon.push(obj)
            fs.writeFileSync('./database/adventure/buah/melon.json', JSON.stringify(_melon))
        }

        const addMelonUser = (sender, amount) => {
        	let position = false
            Object.keys(_melon).forEach((i) => {
                if (_melon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _melon[position].melon += amount
                fs.writeFileSync('./database/adventure/buah/melon.json', JSON.stringify(_melon))
            }
        }
		
		const checkMelonuser = (sender) => {
        	let position = false
            Object.keys(_melon).forEach((i) => {
                if (_melon[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _melon[position].melon
            }
        }
         
         const confirmMELON = (sender, amount) => {
             let position = false
            Object.keys(_melon).forEach((i) => {
                if (_melon[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _melon[position].melon -= amount
                fs.writeFileSync('./database/adventure/buah/melon.json', JSON.stringify(_melon))
            }
        }	
/********** FUNCTION cherry ***************/
const addCherry = (sender) => {
        	const obj = {id: sender, cherry : 0}
            _cherry.push(obj)
            fs.writeFileSync('./database/adventure/buah/cherry.json', JSON.stringify(_cherry))
        }

        const addCherryUser = (sender, amount) => {
        	let position = false
            Object.keys(_cherry).forEach((i) => {
                if (_cherry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cherry[position].cherry += amount
                fs.writeFileSync('./database/adventure/buah/cherry.json', JSON.stringify(_cherry))
            }
        }
		
		const checkCherryuser = (sender) => {
        	let position = false
            Object.keys(_cherry).forEach((i) => {
                if (_cherry[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _cherry[position].cherry
            }
        }
         
         const confirmCHERRY = (sender, amount) => {
             let position = false
            Object.keys(_cherry).forEach((i) => {
                if (_cherry[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cherry[position].cherry -= amount
                fs.writeFileSync('./database/adventure/buah/cherry.json', JSON.stringify(_cherry))
            }
        }	

/********** FUNCTION peach ***************/
const addPeach = (sender) => {
        	const obj = {id: sender, peach : 0}
            _peach.push(obj)
            fs.writeFileSync('./database/adventure/buah/peach.json', JSON.stringify(_peach))
        }

        const addPeachUser = (sender, amount) => {
        	let position = false
            Object.keys(_peach).forEach((i) => {
                if (_peach[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _peach[position].peach += amount
                fs.writeFileSync('./database/adventure/buah/peach.json', JSON.stringify(_peach))
            }
        }
		
		const checkPeachuser = (sender) => {
        	let position = false
            Object.keys(_peach).forEach((i) => {
                if (_peach[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _peach[position].peach
            }
        }
         
         const confirmPEACH = (sender, amount) => {
             let position = false
            Object.keys(_peach).forEach((i) => {
                if (_peach[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _peach[position].peach -= amount
                fs.writeFileSync('./database/adventure/buah/peach.json', JSON.stringify(_peach))
            }
        }	
/********** FUNCTION mangga ***************/
const addMangga = (sender) => {
        	const obj = {id: sender, mangga : 0}
            _mangga.push(obj)
            fs.writeFileSync('./database/adventure/buah/mangga.json', JSON.stringify(_mangga))
        }

        const addManggaUser = (sender, amount) => {
        	let position = false
            Object.keys(_mangga).forEach((i) => {
                if (_mangga[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _mangga[position].mangga += amount
                fs.writeFileSync('./database/adventure/buah/mangga.json', JSON.stringify(_mangga))
            }
        }
		
		const checkManggauser = (sender) => {
        	let position = false
            Object.keys(_mangga).forEach((i) => {
                if (_mangga[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _mangga[position].mangga
            }
        }
         
         const confirmMANGGA = (sender, amount) => {
             let position = false
            Object.keys(_mangga).forEach((i) => {
                if (_mangga[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _mangga[position].mangga -= amount
                fs.writeFileSync('./database/adventure/buah/mangga.json', JSON.stringify(_mangga))
            }
        }
	/********** FUNCTION nanas ***************/
const addNanas = (sender) => {
        	const obj = {id: sender, nanas : 0}
            _nanas.push(obj)
            fs.writeFileSync('./database/adventure/buah/nanas.json', JSON.stringify(_nanas))
        }

        const addNanasUser = (sender, amount) => {
        	let position = false
            Object.keys(_nanas).forEach((i) => {
                if (_nanas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _nanas[position].nanas += amount
                fs.writeFileSync('./database/adventure/buah/nanas.json', JSON.stringify(_nanas))
            }
        }
		
		const checkNanasuser = (sender) => {
        	let position = false
            Object.keys(_nanas).forEach((i) => {
                if (_nanas[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _nanas[position].nanas
            }
        }
         
         const confirmNANAS = (sender, amount) => {
             let position = false
            Object.keys(_nanas).forEach((i) => {
                if (_nanas[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _nanas[position].nanas -= amount
                fs.writeFileSync('./database/adventure/buah/nanas.json', JSON.stringify(_nanas))
            }
        }
/********** FUNCTION kelapa ***************/
const addKelapa = (sender) => {
        	const obj = {id: sender, kelapa : 0}
            _kelapa.push(obj)
            fs.writeFileSync('./database/adventure/buah/kelapa.json', JSON.stringify(_kelapa))
        }

        const addKelapaUser = (sender, amount) => {
        	let position = false
            Object.keys(_kelapa).forEach((i) => {
                if (_kelapa[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kelapa[position].kelapa += amount
                fs.writeFileSync('./database/adventure/buah/kelapa.json', JSON.stringify(_kelapa))
            }
        }
		
		const checkKelapauser = (sender) => {
        	let position = false
            Object.keys(_kelapa).forEach((i) => {
                if (_kelapa[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kelapa[position].kelapa
            }
        }
         
         const confirmKELAPA = (sender, amount) => {
             let position = false
            Object.keys(_kelapa).forEach((i) => {
                if (_kelapa[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kelapa[position].kelapa -= amount
                fs.writeFileSync('./database/adventure/buah/kelapa.json', JSON.stringify(_kelapa))
            }
        }
/********** FUNCTION kiwi ***************/
const addKiwi = (sender) => {
        	const obj = {id: sender, kiwi : 0}
            _kiwi.push(obj)
            fs.writeFileSync('./database/adventure/buah/kiwi.json', JSON.stringify(_kiwi))
        }

        const addKiwiUser = (sender, amount) => {
        	let position = false
            Object.keys(_kiwi).forEach((i) => {
                if (_kiwi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kiwi[position].kiwi += amount
                fs.writeFileSync('./database/adventure/buah/kiwi.json', JSON.stringify(_kiwi))
            }
        }
		
		const checkKiwiuser = (sender) => {
        	let position = false
            Object.keys(_kiwi).forEach((i) => {
                if (_kiwi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kiwi[position].kiwi
            }
        }
         
         const confirmKIWI = (sender, amount) => {
             let position = false
            Object.keys(_kiwi).forEach((i) => {
                if (_kiwi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kiwi[position].kiwi -= amount
                fs.writeFileSync('./database/adventure/buah/kiwi.json', JSON.stringify(_kiwi))
            }
        }	
/********** FUNCTION tomat ***************/
const addTomat = (sender) => {
        	const obj = {id: sender, tomat : 0}
            _tomat.push(obj)
            fs.writeFileSync('./database/adventure/buah/tomat.json', JSON.stringify(_tomat))
        }

        const addTomatUser = (sender, amount) => {
        	let position = false
            Object.keys(_tomat).forEach((i) => {
                if (_tomat[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _tomat[position].tomat += amount
                fs.writeFileSync('./database/adventure/buah/tomat.json', JSON.stringify(_tomat))
            }
        }
		
		const checkTomatuser = (sender) => {
        	let position = false
            Object.keys(_tomat).forEach((i) => {
                if (_tomat[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _tomat[position].tomat
            }
        }
         
         const confirmTOMAT = (sender, amount) => {
             let position = false
            Object.keys(_tomat).forEach((i) => {
                if (_tomat[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _tomat[position].tomat -= amount
                fs.writeFileSync('./database/adventure/buah/tomat.json', JSON.stringify(_tomat))
            }
        }	

/********** FUNCTION terong ***************/
const addTerong = (sender) => {
        	const obj = {id: sender, terong : 0}
            _terong.push(obj)
            fs.writeFileSync('./database/adventure/buah/terong.json', JSON.stringify(_terong))
        }

        const addTerongUser = (sender, amount) => {
        	let position = false
            Object.keys(_terong).forEach((i) => {
                if (_terong[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _terong[position].terong += amount
                fs.writeFileSync('./database/adventure/buah/terong.json', JSON.stringify(_terong))
            }
        }
		
		const checkTeronguser = (sender) => {
        	let position = false
            Object.keys(_terong).forEach((i) => {
                if (_terong[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _terong[position].terong
            }
        }
         
         const confirmTERONG = (sender, amount) => {
             let position = false
            Object.keys(_terong).forEach((i) => {
                if (_terong[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _terong[position].terong -= amount
                fs.writeFileSync('./database/adventure/buah/terong.json', JSON.stringify(_terong))
            }
        }			
/********** FUNCTION alpukat ***************/
const addAlpukat = (sender) => {
        	const obj = {id: sender, alpukat : 0}
            _alpukat.push(obj)
            fs.writeFileSync('./database/adventure/buah/alpukat.json', JSON.stringify(_alpukat))
        }

        const addAlpukatUser = (sender, amount) => {
        	let position = false
            Object.keys(_alpukat).forEach((i) => {
                if (_alpukat[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _alpukat[position].alpukat += amount
                fs.writeFileSync('./database/adventure/buah/alpukat.json', JSON.stringify(_alpukat))
            }
        }
		
		const checkAlpukatuser = (sender) => {
        	let position = false
            Object.keys(_alpukat).forEach((i) => {
                if (_alpukat[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _alpukat[position].alpukat
            }
        }
         
         const confirmALPUKAT = (sender, amount) => {
             let position = false
            Object.keys(_alpukat).forEach((i) => {
                if (_alpukat[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _alpukat[position].alpukat -= amount
                fs.writeFileSync('./database/adventure/buah/alpukat.json', JSON.stringify(_alpukat))
            }
        }
	/********** FUNCTION kol ***************/
const addKol = (sender) => {
        	const obj = {id: sender, kol : 0}
            _kol.push(obj)
            fs.writeFileSync('./database/adventure/buah/kol.json', JSON.stringify(_kol))
        }

        const addKolUser = (sender, amount) => {
        	let position = false
            Object.keys(_kol).forEach((i) => {
                if (_kol[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kol[position].kol += amount
                fs.writeFileSync('./database/adventure/buah/kol.json', JSON.stringify(_kol))
            }
        }
		
		const checkKoluser = (sender) => {
        	let position = false
            Object.keys(_kol).forEach((i) => {
                if (_kol[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kol[position].kol
            }
        }
         
         const confirmKOL = (sender, amount) => {
             let position = false
            Object.keys(_kol).forEach((i) => {
                if (_kol[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kol[position].kol -= amount
                fs.writeFileSync('./database/adventure/buah/kol.json', JSON.stringify(_kol))
            }
        }
/********** FUNCTION sawi ***************/
const addSawi = (sender) => {
        	const obj = {id: sender, sawi : 0}
            _sawi.push(obj)
            fs.writeFileSync('./database/adventure/buah/sawi.json', JSON.stringify(_sawi))
        }

        const addSawiUser = (sender, amount) => {
        	let position = false
            Object.keys(_sawi).forEach((i) => {
                if (_sawi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _sawi[position].sawi += amount
                fs.writeFileSync('./database/adventure/buah/sawi.json', JSON.stringify(_sawi))
            }
        }
		
		const checkSawiuser = (sender) => {
        	let position = false
            Object.keys(_sawi).forEach((i) => {
                if (_sawi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _sawi[position].sawi
            }
        }
         
         const confirmSAWI = (sender, amount) => {
             let position = false
            Object.keys(_sawi).forEach((i) => {
                if (_sawi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _sawi[position].sawi -= amount
                fs.writeFileSync('./database/adventure/buah/sawi.json', JSON.stringify(_sawi))
            }
        }
/********** FUNCTION timun ***************/
const addTimun = (sender) => {
        	const obj = {id: sender, timun : 0}
            _timun.push(obj)
            fs.writeFileSync('./database/adventure/buah/timun.json', JSON.stringify(_timun))
        }

        const addTimunUser = (sender, amount) => {
        	let position = false
            Object.keys(_timun).forEach((i) => {
                if (_timun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _timun[position].timun += amount
                fs.writeFileSync('./database/adventure/buah/timun.json', JSON.stringify(_timun))
            }
        }
		
		const checkTimunuser = (sender) => {
        	let position = false
            Object.keys(_timun).forEach((i) => {
                if (_timun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _timun[position].timun
            }
        }
         
         const confirmTIMUN = (sender, amount) => {
             let position = false
            Object.keys(_timun).forEach((i) => {
                if (_timun[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _timun[position].timun -= amount
                fs.writeFileSync('./database/adventure/buah/timun.json', JSON.stringify(_timun))
            }
        }	
/********** FUNCTION cabe ***************/
const addCabe = (sender) => {
        	const obj = {id: sender, cabe : 0}
            _cabe.push(obj)
            fs.writeFileSync('./database/adventure/buah/cabe.json', JSON.stringify(_cabe))
        }

        const addCabeUser = (sender, amount) => {
        	let position = false
            Object.keys(_cabe).forEach((i) => {
                if (_cabe[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cabe[position].cabe += amount
                fs.writeFileSync('./database/adventure/buah/cabe.json', JSON.stringify(_cabe))
            }
        }
		
		const checkCabeuser = (sender) => {
        	let position = false
            Object.keys(_cabe).forEach((i) => {
                if (_cabe[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _cabe[position].cabe
            }
        }
         
         const confirmCABE = (sender, amount) => {
             let position = false
            Object.keys(_cabe).forEach((i) => {
                if (_cabe[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _cabe[position].cabe -= amount
                fs.writeFileSync('./database/adventure/buah/cabe.json', JSON.stringify(_cabe))
            }
        }	

/********** FUNCTION paprika ***************/
const addPaprika = (sender) => {
        	const obj = {id: sender, paprika : 0}
            _paprika.push(obj)
            fs.writeFileSync('./database/adventure/buah/paprika.json', JSON.stringify(_paprika))
        }

        const addPaprikaUser = (sender, amount) => {
        	let position = false
            Object.keys(_paprika).forEach((i) => {
                if (_paprika[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paprika[position].paprika += amount
                fs.writeFileSync('./database/adventure/buah/paprika.json', JSON.stringify(_paprika))
            }
        }
		
		const checkPaprikauser = (sender) => {
        	let position = false
            Object.keys(_paprika).forEach((i) => {
                if (_paprika[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _paprika[position].paprika
            }
        }
         
         const confirmPAPRIKA = (sender, amount) => {
             let position = false
            Object.keys(_paprika).forEach((i) => {
                if (_paprika[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _paprika[position].paprika -= amount
                fs.writeFileSync('./database/adventure/buah/paprika.json', JSON.stringify(_paprika))
            }
        }	
/********** FUNCTION jagung ***************/
const addJagung = (sender) => {
        	const obj = {id: sender, jagung : 0}
            _jagung.push(obj)
            fs.writeFileSync('./database/adventure/buah/jagung.json', JSON.stringify(_jagung))
        }

        const addJagungUser = (sender, amount) => {
        	let position = false
            Object.keys(_jagung).forEach((i) => {
                if (_jagung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jagung[position].jagung += amount
                fs.writeFileSync('./database/adventure/buah/jagung.json', JSON.stringify(_jagung))
            }
        }
		
		const checkJagunguser = (sender) => {
        	let position = false
            Object.keys(_jagung).forEach((i) => {
                if (_jagung[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _jagung[position].jagung
            }
        }
         
         const confirmJAGUNG = (sender, amount) => {
             let position = false
            Object.keys(_jagung).forEach((i) => {
                if (_jagung[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _jagung[position].jagung -= amount
                fs.writeFileSync('./database/adventure/buah/jagung.json', JSON.stringify(_jagung))
            }
        }
	/********** FUNCTION wortel ***************/
const addWortel = (sender) => {
        	const obj = {id: sender, wortel : 0}
            _wortel.push(obj)
            fs.writeFileSync('./database/adventure/buah/wortel.json', JSON.stringify(_wortel))
        }

        const addWortelUser = (sender, amount) => {
        	let position = false
            Object.keys(_wortel).forEach((i) => {
                if (_wortel[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _wortel[position].wortel += amount
                fs.writeFileSync('./database/adventure/buah/wortel.json', JSON.stringify(_wortel))
            }
        }
		
		const checkWorteluser = (sender) => {
        	let position = false
            Object.keys(_wortel).forEach((i) => {
                if (_wortel[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _wortel[position].wortel
            }
        }
         
         const confirmWORTEL = (sender, amount) => {
             let position = false
            Object.keys(_wortel).forEach((i) => {
                if (_wortel[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _wortel[position].wortel -= amount
                fs.writeFileSync('./database/adventure/buah/wortel.json', JSON.stringify(_wortel))
            }
        }
/********** FUNCTION zaitun ***************/
const addZaitun = (sender) => {
        	const obj = {id: sender, zaitun : 0}
            _zaitun.push(obj)
            fs.writeFileSync('./database/adventure/buah/zaitun.json', JSON.stringify(_zaitun))
        }

        const addZaitunUser = (sender, amount) => {
        	let position = false
            Object.keys(_zaitun).forEach((i) => {
                if (_zaitun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _zaitun[position].zaitun += amount
                fs.writeFileSync('./database/adventure/buah/zaitun.json', JSON.stringify(_zaitun))
            }
        }
		
		const checkZaitunuser = (sender) => {
        	let position = false
            Object.keys(_zaitun).forEach((i) => {
                if (_zaitun[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _zaitun[position].zaitun
            }
        }
         
         const confirmZAITUN = (sender, amount) => {
             let position = false
            Object.keys(_zaitun).forEach((i) => {
                if (_zaitun[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _zaitun[position].zaitun -= amount
                fs.writeFileSync('./database/adventure/buah/zaitun.json', JSON.stringify(_zaitun))
            }
        }
/********** FUNCTION bawang ***************/
const addBawang = (sender) => {
        	const obj = {id: sender, bawang : 0}
            _bawang.push(obj)
            fs.writeFileSync('./database/adventure/buah/bawang.json', JSON.stringify(_bawang))
        }

        const addBawangUser = (sender, amount) => {
        	let position = false
            Object.keys(_bawang).forEach((i) => {
                if (_bawang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bawang[position].bawang += amount
                fs.writeFileSync('./database/adventure/buah/bawang.json', JSON.stringify(_bawang))
            }
        }
		
		const checkBawanguser = (sender) => {
        	let position = false
            Object.keys(_bawang).forEach((i) => {
                if (_bawang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bawang[position].bawang
            }
        }
         
         const confirmBAWANG = (sender, amount) => {
             let position = false
            Object.keys(_bawang).forEach((i) => {
                if (_bawang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bawang[position].bawang -= amount
                fs.writeFileSync('./database/adventure/buah/bawang.json', JSON.stringify(_bawang))
            }
        }	
/********** FUNCTION bombay ***************/
const addBombay = (sender) => {
        	const obj = {id: sender, bombay : 0}
            _bombay.push(obj)
            fs.writeFileSync('./database/adventure/buah/bombay.json', JSON.stringify(_bombay))
        }

        const addBombayUser = (sender, amount) => {
        	let position = false
            Object.keys(_bombay).forEach((i) => {
                if (_bombay[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bombay[position].bombay += amount
                fs.writeFileSync('./database/adventure/buah/bombay.json', JSON.stringify(_bombay))
            }
        }
		
		const checkBombayuser = (sender) => {
        	let position = false
            Object.keys(_bombay).forEach((i) => {
                if (_bombay[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _bombay[position].bombay
            }
        }
         
         const confirmBOMBAY = (sender, amount) => {
             let position = false
            Object.keys(_bombay).forEach((i) => {
                if (_bombay[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _bombay[position].bombay -= amount
                fs.writeFileSync('./database/adventure/buah/bombay.json', JSON.stringify(_bombay))
            }
        }	

/********** FUNCTION kentang ***************/
const addKentang = (sender) => {
        	const obj = {id: sender, kentang : 0}
            _kentang.push(obj)
            fs.writeFileSync('./database/adventure/buah/kentang.json', JSON.stringify(_kentang))
        }

        const addKentangUser = (sender, amount) => {
        	let position = false
            Object.keys(_kentang).forEach((i) => {
                if (_kentang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kentang[position].kentang += amount
                fs.writeFileSync('./database/adventure/buah/kentang.json', JSON.stringify(_kentang))
            }
        }
		
		const checkKentanguser = (sender) => {
        	let position = false
            Object.keys(_kentang).forEach((i) => {
                if (_kentang[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _kentang[position].kentang
            }
        }
         
         const confirmKENTANG = (sender, amount) => {
             let position = false
            Object.keys(_kentang).forEach((i) => {
                if (_kentang[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _kentang[position].kentang -= amount
                fs.writeFileSync('./database/adventure/buah/kentang.json', JSON.stringify(_kentang))
            }
        }	
		/********** FUNCTION ubi ***************/
const addUbi = (sender) => {
        	const obj = {id: sender, ubi : 0}
            _ubi.push(obj)
            fs.writeFileSync('./database/adventure/buah/ubi.json', JSON.stringify(_ubi))
        }

        const addUbiUser = (sender, amount) => {
        	let position = false
            Object.keys(_ubi).forEach((i) => {
                if (_ubi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ubi[position].ubi += amount
                fs.writeFileSync('./database/adventure/buah/ubi.json', JSON.stringify(_ubi))
            }
        }
		
		const checkUbiuser = (sender) => {
        	let position = false
            Object.keys(_ubi).forEach((i) => {
                if (_ubi[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _ubi[position].ubi
            }
        }
         
         const confirmUBI = (sender, amount) => {
             let position = false
            Object.keys(_ubi).forEach((i) => {
                if (_ubi[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _ubi[position].ubi -= amount
                fs.writeFileSync('./database/adventure/buah/ubi.json', JSON.stringify(_ubi))
            }
        }	
module.exports = {
	addApelHijau,
	addApelHijauUser,
	checkApelHijauuser,
	confirmAPELHIJAU,
	addApelMerah,
	addApelMerahUser,
	checkApelMerahuser,
	confirmAPELMERAH,
	addJambu,
	addJambuUser,
	checkJambuuser,
	confirmJAMBU,
	addJeruk,
	addJerukUser,
	checkJerukuser,
	confirmJERUK,
	addLemon,
	addLemonUser,
	checkLemonuser,
	confirmLEMON,
	addPisang,
	addPisangUser,
	checkPisanguser,
	confirmPISANG,
	addSemangka,
	addSemangkaUser,
	checkSemangkauser,
	confirmSEMANGKA,
	addAnggur,
	addAnggurUser,
	checkAngguruser,
	confirmANGGUR,
	addStrawberry,
	addStrawberryUser,
	checkStrawberryuser,
	confirmSTRAWBERRY,
	addBlueberry,
	addBlueberryUser,
	checkBlueberryuser,
	confirmBLUEBERRY,
	addMelon,
	addMelonUser,
	checkMelonuser,
	confirmMELON,
	addCherry,
	addCherryUser,
	checkCherryuser,
	confirmCHERRY,
	addPeach,
	addPeachUser,
	checkPeachuser,
	confirmPEACH,
	addMangga,
	addManggaUser,
	checkManggauser,
	confirmMANGGA,
	addNanas,
	addNanasUser,
	checkNanasuser,
	confirmNANAS,
	addKelapa,
	addKelapaUser,
	checkKelapauser,
	confirmKELAPA,
	addKiwi,
	addKiwiUser,
	checkKiwiuser,
	confirmKIWI,
	addTomat,
	addTomatUser,
	checkTomatuser,
	confirmTOMAT,
	addTerong,
	addTerongUser,
	checkTeronguser,
	confirmTERONG,
	addAlpukat,
	addAlpukatUser,
	checkAlpukatuser,
	confirmALPUKAT,
	addKol,
	addKolUser,
	checkKoluser,
	confirmKOL,
	addSawi,
	addSawiUser,
	checkSawiuser,
	confirmSAWI,
	addTimun,
	addTimunUser,
	checkTimunuser,
	confirmTIMUN,
	addCabe,
	addCabeUser,
	checkCabeuser,
	confirmCABE,
	addPaprika,
	addPaprikaUser,
	checkPaprikauser,
	confirmPAPRIKA,
	addJagung,
	addJagungUser,
	checkJagunguser,
	confirmJAGUNG,
	addWortel,
	addWortelUser,
	checkWorteluser,
	confirmWORTEL,
	addZaitun,
	addZaitunUser,
	checkZaitunuser,
	confirmZAITUN,
	addBawang,
	addBawangUser,
	checkBawanguser,
	confirmBAWANG,
	addBombay,
	addBombayUser,
	checkBombayuser,
	confirmBOMBAY,
	addKentang,
	addKentangUser,
	checkKentanguser,
	confirmKENTANG,
	addUbi,
	addUbiUser,
	checkUbiuser,
	confirmUBI
}