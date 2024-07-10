import "./App.css";
import TipTable from "./components/TipTable";
import InputSide from "./components/InputSide";
import WaiterList from "./components/WaiterList";
import { useEffect, useState } from "react";
import WorkerTable from "./components/WorkerTable";
import PopUp from "./components/PopUp";

function App() {
  const [WaiterArray, setWaiterArray] = useState([]);
  const [WorkersArray, setWorkersArray] = useState([]);
  const [TableWorkersArray, setTableWorkersArray] = useState([]);
  const [TipMoney, setTipMoney] = useState(0);
  const [TipMoneyForHour, setTipMoneyForHour] = useState(0);
  const [tableArray, setTableArray] = useState([]);
  const [sumWaitersHours, setSumWaitersHours] = useState(0);
  const [sumCookHoursState, setSumCookHours] = useState(0);
  const [PopUpState, setPopUp] = useState({active:false,txt:''});

   
  function waiterFilter(e) {
    let flag = false;
    for (let i = 0; i < WaiterArray.length; i++) {
      if (e.name == WaiterArray[i].name) {
        flag = true;
        setPopUp({active:true,txt:'המלצר כבר קיים'})
        return;
      }
    }
    if (e.name == "" || e.houer == "" || e.toHouer == "") {
      flag = true;
      setPopUp({active:true,txt:"נא למלא את כל הפרטים"})

      return;
    }
    if (!flag) {
      setWaiterArray([...WaiterArray, e]);
    }
  }

  function removeWaiter(e) {
    console.log(e);

    const arr = WaiterArray.filter((waiter) => {
      return waiter.name != e;
    });
    setWaiterArray(arr);
  }

  function clearAll() {
    setWaiterArray([]);
  }
  function getMoneyTip(e) {
    console.log(e);
    setTipMoney(e.target.value);
    console.log(TipMoney);
  }

  function startCalc() {
    let arrTable = [];
    let workersTable = [];
    // var today = new Date();
    // var dd = String(today.getDate()).padStart(2, "0");
    // var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    // today = mm + "," + dd;
    let sum = 0;
    let sumCookHours = 0

    for (let i = 0; i < WaiterArray.length; i++) {
      var a = new Date(WaiterArray[i].dateStart+' ' + WaiterArray[i].houer);
      var b = new Date(WaiterArray[i].dateEnd +' '+ WaiterArray[i].toHouer);
      var hours = Math.abs(b - a) / 36e5;

      

      WaiterArray[i].sumHours = hours;

      if(WaiterArray[i].job == 'waiter'){
        sum += hours;
      }else if(WaiterArray[i].job == 'cook'){
        sumCookHours += hours
      }
      

      if (WaiterArray[i].job == "waiter") {
        arrTable.push(WaiterArray[i]);
      } else {
        workersTable.push(WaiterArray[i]);
      }
    }
let hafrasha = sum * 6
    let tipFoeHour = (TipMoney - hafrasha) / sum;
    
    setTipMoneyForHour(tipFoeHour );
    setSumWaitersHours(sum);
    setSumCookHours(sumCookHours)
    setTableWorkersArray(workersTable);
    setTableArray(arrTable);
  }

  function clearPopUp(){
    setPopUp({active:false,txt:''})
  }

  return (
    <div className="flexCol center">
      {
PopUpState.active == true ?
<div><PopUp txt={PopUpState.txt} func={clearPopUp}/></div>
:''
      }
      <div className="nav w100">
        <p>אהובה סגירת טיפים</p>
      </div>
      <br />
      <div className="flexCol  bet w70">
        <InputSide
          getMoneyTip={getMoneyTip}
          startCalc={startCalc}
          clearAll={clearAll}
          waiterFilter={waiterFilter}
          list={WaiterArray} 
          removeWaiter={removeWaiter}
        />

        {/* <WaiterList list={WaiterArray} removeWaiter={removeWaiter} /> */}
      </div>
      <br />

      <div className="w80">
        <TipTable
          TipMoneyForHour={TipMoneyForHour}
          sumWaitersHours={sumWaitersHours}
          array={tableArray}
        />
      </div>
      <br />
      <br />
      <br />
      <div className="w80">
        <WorkerTable array={TableWorkersArray} sumCookHoursState={sumCookHoursState} />
      </div>
      <br /><br /><br /><br /><br />
    </div>
  );
}

export default App;
