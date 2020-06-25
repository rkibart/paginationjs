// Stwórz funkcję paginateArray
const paginateArray = (dataEntries, settings = {}) => {
    
    
    //na początek sprawdzimy co dostaliśmy
    const {actualPageIdx, entriesOnPage} = settings
    
    if(!Array.isArray(dataEntries)) {
        return undefined
    } 
    
    if(!Number.isInteger(actualPageIdx) || actualPageIdx <= 0) { // przyjmuję że strony liczymy od 1
        return undefined
    }
    
    if(!Number.isInteger(entriesOnPage) || entriesOnPage < 0) {
        return undefined
    }
    let entriesOnSelectedPage =[]
    
    const indexStart = (actualPageIdx - 1) * entriesOnPage
    const indexEnd = indexStart + entriesOnPage

    return entriesOnSelectedPage = dataEntries.slice(indexStart, indexEnd)
}

// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony

const arrayOfEntries = []



for(let i = 0; i < 1040; i++) {
    
    arrayOfEntries.push({
        arrayIndex: i,
        entryIndex: i+1,
        dimensions: {
            x: Math.floor(Math.random()*5),
            y: Math.floor(Math.random()*9) + 1,
            square: function() {
                return this.x * this.y
            }
        }
    })
}

const settings1 = { actualPageIdx:9, entriesOnPage:50 }
const settings2 = { actualPageIdx:0, entriesOnPage:5 }
const settings3 = { actualPageIdx:50, entriesOnPage:0 }
const settings4 = { actualPageIdx:51, entriesOnPage:10 }
const settings5 = { actualPageIdx:11, entriesOnPage:100 }
const settings6 = { actualPageIdx:-1, entriesOnPage:-5 }
const settings7 = { actualPageIdx:'tyiti', entriesOnPage:100 }

const result1 = paginateArray(arrayOfEntries,settings1)
const result2 = paginateArray(arrayOfEntries,settings2)
const result3 = paginateArray(arrayOfEntries,settings3)
const result4 = paginateArray(arrayOfEntries,settings4)
const result5 = paginateArray(arrayOfEntries,settings5)
const result6 = paginateArray(arrayOfEntries,settings6)
const result7 = paginateArray(arrayOfEntries,settings7)
const result8 = paginateArray([],settings1)
const result9 = paginateArray(arrayOfEntries,{})
const result10 = paginateArray(arrayOfEntries)
const result10 = paginateArray()

