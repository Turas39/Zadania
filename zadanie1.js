
const processText = (text, { uppercase = false, reverse = false, removeSpecialChars = false } = {}) =>{
if(uppercase)
{
    text = text.toUpperCase()
}
if(removeSpecialChars)
{
    text = text.replace(/[^a-zA-Z0-9\s]/g, '');
}
if(reverse)
{
    text = text.split('').reverse().join('');
}
console.log(`przetwarzany tekst:  ${text}`)
}
processText('Hello World!', { uppercase: true, removeSpecialChars: true });
