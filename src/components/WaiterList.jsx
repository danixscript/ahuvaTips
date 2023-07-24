import * as React from 'react';
import ButtonRemove from './ButtonRemove';

 function WaiterList(props) {
  return (
    <div className="list grid">
      <h2>רשימת עובדים</h2>
  {props.list.map((e)=>{
    return(
     <div className="name flexRow bet" key={props.name}>
        <h3>   {e.name}
           </h3>
           <p>   
           {e.houer}:{e.dateStart}</p>
           <p>   
           {e.toHouer}:{e.dateEnd}</p>
           <p>  
            {e.job == 'Washing'? 'שוטף':
            e.job == 'cook' ? 'טבח':
            e.job == 'waiter' ? 'מלצר':
            e.job == 'hostess'? 'מארחת':''
             }
           
           </p>
           <ButtonRemove func={props.removeWaiter} waiter={e.name} />
     </div>
    )
  })}
    </div>
  
  );
}
export default WaiterList