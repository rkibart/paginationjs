// Stwórz funkcję paginateArray
// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony



// poniższa funkcja zwraca "shalow copy" odpowiedniego fragmentu array dataEntries
// lub pustą macierz gdy dataEntries jest pusta, entriesOnPage = 0 lub actualPageIdx jest za wysoki
// w przypadku błędnych danych wejściowych zwraca undefined

// jesli byłoby uzasadnione zwrócenie niezależnej macierzy entriesOnSelectedPage przy braku informacji o strukturze dataEntry
// skorzystałbym z funkcji do głębokiego kopiowania z bibliotek lodash lub rdfc

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

 




