
import './DataMan.css'
function DataMan({data})
{
    let total=0;
    console.log(data);
    data.forEach((elem)=> {
        total=total+(elem.data.count*elem.data.price);
    });
    console.log(total);
    return (
        <div className='BottomPar'>
        <div className="BottomTotal">
            <div className='DataHold'>
                <div className='List'>
                    <div className='subtotal'>Sub-Total</div>
                    <div className='TotalItems'>{`${data.length} items`}</div>
                </div>
                <div className='TotalPriceofCart'>{`Rs ${total}`}</div>
            </div>
            <button className='checkoutbutton'>Checkout</button>
        </div>
        </div>
    )
}
export default DataMan