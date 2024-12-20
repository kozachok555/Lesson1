fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json')
    .then(res => {
        if(res.status !== 200){
            throw Error(`status: ${res.status}`)
        }
        return res.json()
    })
    .then(result =>{
        const usdRate = result.find((e) => e.cc === "USD")
        console.log(usdRate.rate)
        
    })
    .catch(e => console.error({e}))

async function fecthResponse() {
    try{
        const response = await fetch('https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json');
        if(response.status === 200){
            const data = await response.json()
            const usdRate = data.find((e) => e.cc === "USD")
            console.log(usdRate.rate)
        }
    }catch(e){
        console.log({e})
    }
}
const root = document.body;
async function fetchResponseAvatar() {
    const response = await fetch(`https://api.github.com/users/kozachok555`)
    const data = await response.json()
    const image = document.createElement("img")
    image.setAttribute("src",`${data.avatar_url}`)
    root.appendChild(image)
}
fetchResponseAvatar()