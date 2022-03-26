
const today = new Date();
let date=0;
let month = 0;
const dateValid =(number)=>{
    if (number<10){
        return '0'+ number;
    }
    else{
        return number
    }
}
const lastMonth = today.getFullYear()+'-'+(dateValid(today.getMonth()))+'-'+(dateValid(today.getDate()));
const currentMonth = today.getFullYear()+'-'+(dateValid(today.getMonth()+1))+'-'+(dateValid(today.getDate()));
console.log(lastMonth,currentMonth )

const compareBtcRate=(currency)=>{
    const url=`https://api.coindesk.com/v1/bpi/historical/close.json?start=${lastMonth}&end=${currentMonth}&currency=${currency}`;
   fetch(url)
   .then(res=> res.json())
   .then(data=> getMaxValue(data.bpi))
}

const getMaxValue = (datas)=>{
  
    const dates = Object.keys(datas);
    console.log(dates)
const btcRate = dates.map(date=>{
    
})
}
compareBtcRate('usd')