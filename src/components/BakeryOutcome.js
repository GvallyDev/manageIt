import React from 'react'

const  BakeryOutcome = ({
    totalBougthBags,
    totalBagsSold,
    totalIncome,
    starterr}) => {

        console.log(totalIncome);
    return (
        <div>
            <table className='outcome-container'>  
    <tr className='outcome-container'>  
        <th>Date</th>  
        <th>total bags</th>  
        <th>cost</th>  
      
    </tr>  

    <tr style={{background:'#75bd75'}} >
    <td>total</td>
    <td>{totalBougthBags}</td>
    <td>{totalBougthBags * 51}</td>
</tr>

</table>  

<table className='outcome-container'>  
    <tr className='outcome-container'>  
        <th>Net profit</th>  
        <th>Profit per bag</th>  
   
    </tr>  
    <tr style={{background:'#75bd75'}} >
    <td>{totalIncome - totalBougthBags * 51}</td>
    <td>{(totalIncome - totalBougthBags * 51) / totalBagsSold | 0}</td>

</tr>



</table>  
     
        </div>
    )
}

export default BakeryOutcome