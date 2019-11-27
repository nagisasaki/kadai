const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

// str1 のパース結果
try {
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
    // abcという文字例は正しい JSONではないから。
    // 正しくは　"abc"
}

try {
    console.log(JSON.parse(str2))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str3))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str4))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str5))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.parse(str6))
} catch (error) {
    console.log(error)
}
