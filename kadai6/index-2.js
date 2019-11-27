const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.paese(str2))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.paese(str3))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.paese(str4))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.paese(str5))
} catch (error) {
    console.log(error)
}

try {
    console.log(JSON.paese(str6))
} catch (error) {
    console.log(error)
}