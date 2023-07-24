
import './App.css';
import TipTable from './components/TipTable';
import InputSide from './components/InputSide';
import WaiterList from './components/WaiterList';
import { useState } from 'react';

function App() {
const [WaiterArray,setWaiterArray] = useState([])
const [TipMoney,setTipMoney] = useState(0)
const [TipMoneyForHour,setTipMoneyForHour] = useState(0)
const [tableArray,setTableArray] = useState([])
const [sumWaitersHours,setSumWaitersHours] = useState(0)
function waiterFilter(e){
  let flag = false

for(let i = 0; i < WaiterArray.length; i++){
  if(e.name == WaiterArray[i].name){
    flag = true
    alert('מלצר כבר קיים')
    return
  }
 

}
if(e.name == '' || e.houer == '' || e.toHouer == ''){
  flag = true
  return
}

  console.log(e)
  if(!flag){
    setWaiterArray([...WaiterArray , e])
  }


}

function removeWaiter(e){
  console.log(e)

const arr = WaiterArray.filter((waiter)=>{
  return waiter.name !=  e
})
setWaiterArray(arr)
}
function clearAll(){
  setWaiterArray([])
}
function getMoneyTip(e){
  console.log(e)
  setTipMoney(e.target.value)
  console.log(TipMoney)
}
function startCalc(){
let arrTable = []
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
today = mm + ',' + dd ;
let sum = 0
for(let i =0; i < WaiterArray.length; i++){
var a = new Date('08-23 ' +WaiterArray[i].houer);
var b = new Date('08-23 ' + WaiterArray[i].toHouer);
var hours = Math.abs( b - a) / 36e5;

// console.log(WaiterArray[i].name,'--',hours)
WaiterArray[i].sumHours = hours

sum += hours
arrTable.push(WaiterArray[i])



}

let tipFoeHour = TipMoney / sum
setTipMoneyForHour(tipFoeHour)

setSumWaitersHours(sum)
setTableArray(arrTable)



  
}



  return (
    <div className="flexCol center">
      <div className="nav">
       <p>אהובה סגירת טיפים</p>
       <p>שינוי</p>
      </div>
      <br />
      <div className="flexRowToCol  bet w70">

      <InputSide getMoneyTip={getMoneyTip} startCalc={startCalc} clearAll={clearAll} waiterFilter={waiterFilter}/>

      <WaiterList list={WaiterArray} removeWaiter={removeWaiter}/>
      </div>
      <br />

     <div className="w80">
     <TipTable TipMoneyForHour={TipMoneyForHour} sumWaitersHours={sumWaitersHours} array={tableArray} />
     </div>
   
    </div>
  );
}

export default App;
