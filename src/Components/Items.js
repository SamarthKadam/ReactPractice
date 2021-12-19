import Itemlist from "./ItemList";
function Items(props)
{
    if(props.datalist.length===0)
    {
        return(<h2 className="EmptyCart">Cart is empty</h2>);
    }

    return(
        <div className="ItemsContainer">
            {
         props.datalist.map((data,index)=>{
             return <Itemlist DeleteItem={props.DeleteItem} setdata={props.setdata} data={data} key={index+1}></Itemlist>
         })
            }
        </div>)
}
export default Items;