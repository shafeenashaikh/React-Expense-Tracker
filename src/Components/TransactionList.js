import React,{useContext} from "react";
import { GlobalContext } from "../Context/GlobalState";
import Transaction from "./Transaction";

function TransactionList(){

    const {transaction} = useContext(GlobalContext);

    return(
        <div>
            <h3>History</h3>
            <ul className="list">
                {transaction.map(transaction => (<Transaction transaction={transaction} key={transaction.id}/>))}
               
            </ul>
        </div>
    )
}
export default TransactionList