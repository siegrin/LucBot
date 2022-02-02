const fs = require('fs') 
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
/********** FUNCTION pohoncactus ***************/

        const addPohonCactusUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohoncactus += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPohonCactususer = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pohoncactus
            }
        }
         
         const confirmPOHONCACTUS = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohoncactus -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
	/********** FUNCTION pohonnatal ***************/


        const addPohonNatalUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohonnatal += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPohonNataluser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pohonnatal
            }
        }
         
         const confirmPOHONNATAL = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohonnatal -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION pohoncemara ***************/


        const addPohonCemaraUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohoncemara += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPohonCemarauser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pohoncemara
            }
        }
         
         const confirmPOHONCEMARA = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohoncemara -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION pohon ***************/


        const addPohonUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohon += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPohonuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pohon
            }
        }
         
         const confirmPOHON = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohon -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION bambu ***************/


        const addBambuUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].bambu += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkBambuuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].bambu
            }
        }
         
         const confirmBAMBU = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].bambu -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION padi ***************/

        const addPadiUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].padi += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPadiuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].padi
            }
        }
         
         const confirmPADI = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].padi -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	

/********** FUNCTION pohonkelapa ***************/


        const addPohonKelapaUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohonkelapa += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPohonKelapauser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pohonkelapa
            }
        }
         
         const confirmPOHONKELAPA = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pohonkelapa -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }			

module.exports = {
	addPohonCactusUser,
	checkPohonCactususer,
	confirmPOHONCACTUS,
	addPohonNatalUser,
	checkPohonNataluser,
	confirmPOHONNATAL,
	addPohonCemaraUser,
	checkPohonCemarauser,
	confirmPOHONCEMARA,
	addPohonUser,
	checkPohonuser,
	confirmPOHON,
	addBambuUser,
	checkBambuuser,
	confirmBAMBU,
	addPadiUser,
	checkPadiuser,
	confirmPADI,
	addPohonKelapaUser,
	checkPohonKelapauser,
	confirmPOHONKELAPA
}