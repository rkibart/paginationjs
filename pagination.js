// Stwórz funkcję paginateArray
// która przyjmuję array do paginacji dataEntries oraz settings o kluczach { actualPageIdx=9, entriesOnPage=50 }
// - actualPageIdx to index wybranej strony
// - entriesOnPage to maksymalna zwracana ilość elementów z dataEntries dla wybranej strony

// który zwraca entriesOnSelectedPage:
// - entriesOnSelectedPage to array z odpowiednią ilością elementów z danej strony



// poniższa funkcja zwraca "shalow copy" odpowiedniego fragmentu array dataEntries
// lub pustą macierz gdy dataEntries jest pusta, entriesOnPage = 0 lub actualPageIdx jest za wysoki
// w przypadku błędnych danych wejściowych wyrzuca błąd

// jesli byłoby uzasadnione zwrócenie niezależnej macierzy entriesOnSelectedPage przy braku informacji o strukturze dataEntry
// skorzystałbym z funkcji do głębokiego kopiowania z bibliotek lodash lub rdfc

const paginateArray = (dataEntries, settings = {}) => {
    
    
    //na początek sprawdzimy co dostaliśmy
    const {actualPageIdx, entriesOnPage} = settings

    if(!Array.isArray(dataEntries)) {
        throw TypeError('The first argument must be an array')
    } 

    if(actualPageIdx === undefined || entriesOnPage === undefined) {
        throw new Error ('The second argument must be an object with keys: "actualPageIdx" , "entriesOnPage"')
    }
    
    if(!Number.isInteger(actualPageIdx) || actualPageIdx <= 0) { // przyjmuję że strony liczymy od 1
        throw new Error('The "actualPageIdx" key must be a positive integer')
    }
    
    if(!Number.isInteger(entriesOnPage) || entriesOnPage < 0) {
        throw new Error('The "entriesOnPage" key must be a non-negative integer')
    }
    let entriesOnSelectedPage =[]
    
    const indexStart = (actualPageIdx - 1) * entriesOnPage
    const indexEnd = indexStart + entriesOnPage

    return entriesOnSelectedPage = dataEntries.slice(indexStart, indexEnd)
}

 




