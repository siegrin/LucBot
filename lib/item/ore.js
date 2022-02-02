const fs = require('fs') 
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))

/********** FUNCTION BERLIAN ***************/

        const addBerlianUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].berlian += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkBerlianuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].berlian
            }
        }
         
         const confirmBERLIAN = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].berlian -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
	/********** FUNCTION EMAS ***************/

        const addEmasUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].emas += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkEmasuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].emas
            }
        }
         
         const confirmEMAS = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].emas -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION PERAK ***************/

        const addPerakUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].perak += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPerakuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].perak
            }
        }
         
         const confirmPERAK = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].perak -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION PERUNGGU ***************/

        const addPerungguUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].perunggu += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPerungguuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].perunggu
            }
        }
         
         const confirmPERUNGGU = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].perunggu -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION IRON ***************/

        const addIronUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].iron += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkIronuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].iron
            }
        }
         
         const confirmIRON = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].iron -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION BRICK ***************/
        const addBrickUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].brick += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkBrickuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].brick
            }
        }
         
         const confirmBRICK = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].brick -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	

/********** FUNCTION BRICK ***************/

        const addStoneUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].stone += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkStoneuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].stone
            }
        }
         
         const confirmSTONE = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].stone -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }			

module.exports = {
	addBerlianUser,
	checkBerlianuser,
	confirmBERLIAN,
	addEmasUser,
	checkEmasuser,
	confirmEMAS,
	addPerakUser,
	checkPerakuser,
	confirmPERAK,
	addPerungguUser,
	checkPerungguuser,
	confirmPERUNGGU,
	addIronUser,
	checkIronuser,
	confirmIRON,
	addBrickUser,
	checkBrickuser,
	confirmBRICK,
	addStoneUser,
	checkStoneuser,
	confirmSTONE
}