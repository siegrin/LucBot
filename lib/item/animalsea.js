const fs = require('fs') 
const _registered = JSON.parse(fs.readFileSync('./database/bot/registered.json'))
/********** FUNCTION KURAKURA ***************/

        const addKurakuraUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kurakura += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkKurakurauser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].kurakura
            }
        }
         
         const confirmKURAKURA = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kurakura -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION GURITA ***************/

        const addGuritaUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].gurita += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkGuritauser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].gurita
            }
        }
         
         const confirmGURITA = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].gurita -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION CUMICUMI ***************/

        const addCumicumiUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].cumicumi += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkCumicumiuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].cumicumi
            }
        }
         
         const confirmCUMICUMI = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].cumicumi -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION UDANG ***************/


        const addUdangUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].udang += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkUdanguser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].udang
            }
        }
         
         const confirmUDANG = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].udang -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION LOBSTER ***************/
		

        const addLobsterUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].lobster += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkLobsteruser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].lobster
            }
        }
         
         const confirmLOBSTER = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].lobster -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION KEPITING ***************/

        const addKepitingUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kepiting += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkKepitinguser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].kepiting
            }
        }
         
         const confirmKEPITING = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].kepiting -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }			
		/********** FUNCTION PUFFERFISH ***************/
        const addPufferfishUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pufferfish += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPufferfishuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].pufferfish
            }
        }
         
         const confirmPUFFERFISH = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].pufferfish -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
/********** FUNCTION IKAN ***************/

        const addIkanUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ikan += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkIkanuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].ikan
            }
        }
         
         const confirmIKAN = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ikan -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION IKAN2 ***************/

        const addIkan2User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ikan2 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkIkan2user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].ikan2
            }
        }
         
         const confirmIKAN2 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].ikan2 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION LUMBALUMBA ***************/
        const addLumbalumbaUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].lumbalumba += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkLumbalumbauser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].lumbalumba
            }
        }
         
         const confirmLUMBALUMBA = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].lumbalumba -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION PAUS ***************/
        const addPausUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].paus += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPaususer = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].paus
            }
        }
         
         const confirmPAUS = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].paus -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION PAUS2 ***************/


        const addPaus2User = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].paus2 += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkPaus2user = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].paus2
            }
        }
         
         const confirmPAUS2 = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].paus2 -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }		
		/********** FUNCTION HIU ***************/

        const addHiuUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].hiu += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkHiuuser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].hiu
            }
        }
         
         const confirmHIU = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].hiu -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }	
/********** FUNCTION SEADOG ***************/
        const addSeadogUser = (sender, amount) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].seadog += amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }
		
		const checkSeadoguser = (sender) => {
        	let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id === sender) {
                    position = i
                }
            })
            if (position !== false) {
                return _registered[position].seadog
            }
        }
         
         const confirmSEADOG = (sender, amount) => {
             let position = false
            Object.keys(_registered).forEach((i) => {
                if (_registered[i].id == sender) {
                    position = i
                }
            })
            if (position !== false) {
                _registered[position].seadog -= amount
                fs.writeFileSync('./database/bot/registered.json', JSON.stringify(_registered))
            }
        }				

module.exports = {
	addKurakuraUser,
	checkKurakurauser,
	confirmKURAKURA,
	addGuritaUser,
	checkGuritauser,
	confirmGURITA,
	addCumicumiUser,
	checkCumicumiuser,
	confirmCUMICUMI,
	addUdangUser,
	checkUdanguser,
	confirmUDANG,
	addLobsterUser,
	checkLobsteruser,
	confirmLOBSTER,
	addKepitingUser,
	checkKepitinguser,
	confirmKEPITING,
	addPufferfishUser,
	checkPufferfishuser,
	confirmPUFFERFISH,
	addIkanUser,
	checkIkanuser,
	confirmIKAN,
	addIkan2User,
	checkIkan2user,
	confirmIKAN2,
	addLumbalumbaUser,
	checkLumbalumbauser,
	confirmLUMBALUMBA,
	addPausUser,
	checkPaususer,
	confirmPAUS,
	addPaus2User,
	checkPaus2user,
	confirmPAUS2,
	addHiuUser,
	checkHiuuser,
	confirmHIU,
	addSeadogUser,
	checkSeadoguser,
	confirmSEADOG
}