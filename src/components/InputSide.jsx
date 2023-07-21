
import '../App.css';
import ButtonSend from './ButtonSend';
import InputText from './InputText';
import ButtonSuccess from './ButtonSuccess';
import ButtonDelAll from './ButtonDelAll';
import { useState } from 'react';

function InputSide(props) {
    const [waiter,setWaiter] = useState({name:'',houer:'',toHouer:''});
  

        function writeWaiterName(e){

        setWaiter({...waiter,name:e.target.value})
        }
        function writeWaiterHouer(e){

        setWaiter({...waiter,houer:e.target.value})
        }

        function writeWaiterToHouer(e){

        setWaiter({...waiter,toHouer:e.target.value})
        }

function clearWaiterState(){
    setWaiter({name:'',houer:'',toHouer:''})
}





  return (
    <div className="flexCol center">
      <br />
     <div className="flexCol center InputDiv">
     <div className="flexCol center">
      <InputText func={writeWaiterName} valueW={waiter.name} type="שם מלצר" />   
   <div className="flexRow">
     <InputText func={writeWaiterHouer} inputType={'time'} valueW={waiter.houer}  type=" משעה" />   __ <InputText inputType={'time'} valueW={waiter.toHouer} func={writeWaiterToHouer}  type="עד שעה"/> 
 
   </div>
  <div className="flexRow bet w70">
 <ButtonSuccess clear={clearWaiterState} func={props.waiterFilter} waiter={waiter} /> <ButtonDelAll func={props.clearAll}/> 
  </div>
        
        </div>

<br /><br /><br />

     <div className="InputSend flexCol center">
      <InputText func={props.getMoneyTip} inputType={'number'} type='סכום כל הטיפים'/>
     <ButtonSend func={props.startCalc} />
     </div>
     </div>



   
   
    </div>
  );
}

export default InputSide;
