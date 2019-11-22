const wrap = (line, maxLen) => {
    if (line === '') {
        return ''
    } 
    let divided = line.split(' ')
    let count = 0
    let resultStr = ''
    for (let i = 0; i < divided.length; i++) {
        let currWord = divided[i]
        if (currWord.length > maxLen) {
            return 'you lose'
        }
        if (count + currWord.length > maxLen) {
            resultStr += '\n'
            count = 0
        }
        if (count + currWord.length <= maxLen) {
            count += currWord.length
            resultStr += currWord
            if (count < maxLen) {
                count++
                resultStr += " "
            }
        }
    }
    return resultStr
}

module.exports = wrap