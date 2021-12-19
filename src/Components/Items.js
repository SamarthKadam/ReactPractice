import Itemlist from "./ItemList";
function Items(props)
{
    return(
        <div className="ItemsContainer">
            {
         props.datalist.map((data,index)=>{
             return <Itemlist setdata={props.setdata} data={data} key={index+1}></Itemlist>
         })
            }
        </div>
    )
}
export default Items;