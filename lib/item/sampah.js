const fs = require('fs') 
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))


/********** FUNCTION kerangajaib ***************/

        const addKerangajaibUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kerangajaib += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkKerangajaibuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].kerangajaib
            }
        }
         
         const confirmKERANGAJAIB = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kerangajaib -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
	/********** FUNCTION jamur ***************/

        const addJamurUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].jamur += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkJamuruser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].jamur
            }
        }
         
         const confirmJAMUR = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].jamur -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION daunmaple ***************/


        const addDaunmapleUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daunmaple += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkDaunmapleuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].daunmaple
            }
        }
         
         const confirmDAUNMAPLE = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daunmaple -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
/********** FUNCTION daun ***************/


        const addDaunUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkDaunuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].daun
            }
        }
         
         const confirmDAUN = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION daun1 ***************/

        const addDaun1User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun1 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkDaun1user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].daun1
            }
        }
         
         const confirmDAUN1 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun1 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION daun2 ***************/

        const addDaun2User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun2 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkDaun2user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].daun2
            }
        }
         
         const confirmDAUN2 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].daun2 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	

/********** FUNCTION daun2 ***************/

        const addClover3User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].clover3 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkClover3user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].clover3
            }
        }
         
         const confirmCLOVER3 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].clover3 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }			
 /********** FUNCTION daun2 ***************/

        const addClover4User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].clover4 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkClover4user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].clover4
            }
        }
         
         const confirmCLOVER4 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].clover4 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }			
        /********** FUNCTION kayu ***************/

        const addKayuUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kayu += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkKayuuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].kayu
            }
        }
         
         const confirmKAYU = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kayu -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION bibit ***************/

        const addBibitUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].bibit += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkBibituser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].bibit
            }
        }
         
         const confirmBIBIT = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].bibit -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION puzzle ***************/

        const addPuzzleUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].puzzle += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPuzzleuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].puzzle
            }
        }
         
         const confirmPUZZLE = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].puzzle -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		

module.exports = {
	addKerangajaibUser,
	checkKerangajaibuser,
	confirmKERANGAJAIB,
	addJamurUser,
	checkJamuruser,
	confirmJAMUR,
	addDaunmapleUser,
	checkDaunmapleuser,
	confirmDAUNMAPLE,
	addDaunUser,
	checkDaunuser,
	confirmDAUN,
	addDaun1User,
	checkDaun1user,
	confirmDAUN1,
	addDaun2User,
	checkDaun2user,
	confirmDAUN2,
	addClover3User,
	checkClover3user,
	confirmCLOVER3,
	addClover4User,
	checkClover4user,
	confirmCLOVER4,
	addKayuUser,
	checkKayuuser,
	confirmKAYU,
	addBibitUser,
	checkBibituser,
	confirmBIBIT,
	addPuzzleUser,
	checkPuzzleuser,
	confirmPUZZLE
}