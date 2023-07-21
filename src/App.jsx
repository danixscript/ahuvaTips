
import './App.css';
import TipTable from './components/TipTable';
import InputSide from './components/InputSide';
import WaiterList from './components/WaiterList';
import { useState } from 'react';

function App() {

const [WaiterArray,setWaiterArray] = useState([])
const [TipMoney,setTipMoney] = useState(0)
const [tableArray,setTableArray] = useState([])

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
  console.log(WaiterArray,TipMoney);
let arrTable = []
for(let i =0; i < WaiterArray.length; i++){
  var a = new Date(WaiterArray[i].houer );
var b = new Date( WaiterArray[i].toHouer);
var hours = Math.abs(b - a) / 36e5;

// console.log(WaiterArray[i].name,'--',hours)
WaiterArray[i].sumHours = hours
arrTable.push(WaiterArray[i])


}
setTableArray(arrTable)
console.log(tableArray)
  
}


  return (
    <div className="flexCol center">
      <br />
      <div className="flexRowToCol  bet w70">

      <InputSide getMoneyTip={getMoneyTip} startCalc={startCalc} clearAll={clearAll} waiterFilter={waiterFilter}/>

      <WaiterList list={WaiterArray} removeWaiter={removeWaiter}/>
      </div>
      <br />

     <div className="w80">
     <TipTable array={tableArray} />
     </div>
   
    </div>
  );
}

export default App;
