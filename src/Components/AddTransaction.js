import React, { useState } from "react";
 function AddTransaction(){

    const[text,setText] = useState('');
    const[amount,setAmount] = useState(0);
     return(
         <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <labl>Text</labl>
                    <input type="text"  value={text} onChange={(e) => setText(e.target.value)} placeholder="Enter text"/>
                </div><br/>
                <div className="form-control">
                    <labl>Amount<br/><br/>
                        (negative - expense, positive - income)
                    </labl>
                    <input type="text"  value={amount} onChange={(e) => setAmount(e.target.value)} placeholder="Enter text"/>
                </div>
                <button className="btn">Add transaction </button>
            </form>
         </div>
     )
 }
 export default AddTransaction