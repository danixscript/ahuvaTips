import * as React from 'react';
import ButtonRemove from './ButtonRemove';

 function WaiterList(props) {
  return (
    <div className="list grid">
      <h2>רשימת מלצרים</h2>
  {props.list.map((e)=>{
    return(
     <div className="name flexRow bet" key={props.name}>
        <h3>   {e.name}
           </h3>
           <p>   
           {e.houer}</p>
           <p>   
           {e.toHouer}</p>
           <ButtonRemove func={props.removeWaiter} waiter={e.name} />
     </div>
    )
  })}
    </div>
  
  );
}
export default WaiterList