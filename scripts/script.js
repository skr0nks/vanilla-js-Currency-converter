// const RATES = {
//     usd: 0.014,
//     eur: 0.013
// }

// const convert = (rub , currency ) =>{
//     if(!RATES[currency]){
//         return null;
//     }
//     return rub *  RATES[currency];
// }

valueInputNode.oninput = () =>{
//     const rub = Number(valueInputNode.value)
//     const currency = currencySelectorNode.value
//     const result = convert(rub, currency)
//     console.log(result)
// }









const mainF = async () =>{
const axios_response = await axios.get('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/latest/USD')

    console.log(axios_response)
}


// axios
//     .get('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/latest/USD')
//     .then((response)=>{
//         console.log(response)
//     })




let rates = {
}
let usd_value = document.getElementById('cur-rate-dollar')
let eur_value = document.getElementById('cur-rate-eur')
let input_Amount = document.querySelector('.input-amount')
// let from_select = document.getElementById('from')
let to_select = document.getElementById('to')
let find_diff = document.querySelector('.find-dif')



const pr = async()=>{
    const response = await fetch('https://www.cbr-xml-daily.ru/daily_json.js')
    const data = await response.json()
    rates.USD = data.Valute.USD;
    rates.EUR = data.Valute.EUR;

    usd_value.textContent = rates.USD.Value.toFixed(2)
    eur_value.textContent = rates.EUR.Value.toFixed(2)

    if(rates.USD.Value > rates.USD.Previous){
        usd_value.style.color = 'red'
    }else{
        usd_value.style.color = 'green'
    }

    if(rates.EUR.Value >rates.EUR.Previous){
        eur_value.style.color = 'red'
    }else{
        eur_value.style.color = 'green'
    }


}
pr()

// попробовать через addEvenet 'keyup' написать функцию 
input_Amount.oninput = () =>{
    find_diff.textContent =  parseFloat((input_Amount.value)/rates[to_select.value].Value).toFixed(2)
console.log(rates[to_select.value].Value)
}





// fetch('https://v6.exchangerate-api.com/v6/a90f76dc5d731b90f79a09ed/codes').then(function(result){
//     return(result.json())
// }).then(function(data){
//     console.log(data)
// })










// import variables from "/js/variables.js";
// import state from "/js/state.js";

// const {success, selects} = variables;

// const renderCodelist = () =>{
//     selects.forEach((select)=>{
//         state.codes.forEach(([code])=>{
//             const element = document.createElement('option')
//             element.value =code;
//             element.innerText = code;
//             select.insertAdjacentElement('beforeend', element);
//         })
//     })

// }

// const fetchCodes = async ()  =>{
//     try{
//     const response = await fetch(`${state.url}/codes`)
//     const data = await response.json()
//     if(data.result == success){
//         state.codes = data.supported_codes
//         renderCodelist()
//     }
//     console.log(response)
//     }catch(err){
//         console.log(err)
//     }
// }
// fetchCodes();
