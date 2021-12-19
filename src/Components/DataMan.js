
import './DataMan.css'
function DataMan({data})
{
    let total=0;
    let totalitem=0;
    data.forEach((elem)=> {
        total=total+(elem.data.count*elem.data.price);
        totalitem=totalitem+(elem.data.count);
        <elem className="data count"></elem>
    });
    return (
        <div className='BottomPar'>
        <div className="BottomTotal">
            <div className='DataHold'>
                <div className='List'>
                    <div className='subtotal'>Sub-Total</div>
                    <div className='TotalItems'>{`${totalitem} items`}</div>
                </div>
                <div className='TotalPriceofCart'>{`Rs ${total}`}</div>
            </div>
            <button className='checkoutbutton'>Checkout</button>
        </div>
        </div>
    )
}
export default DataMan