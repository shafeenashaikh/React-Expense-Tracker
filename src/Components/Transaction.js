import React from "react";

function Transaction({transaction}){
    return(
        <div>
            <li className="minus">
                    {transaction.text}<span>-4000</span>
                    <button className="delete-btn">X</button>
                </li>
        </div>
    )
}
export default Transaction