import "./Itemlist.css";
import { FcApproval } from "react-icons/fc";
import { FcCheckmark } from "react-icons/fc";
import { AiFillPlusCircle} from "react-icons/ai";
import { AiFillMinusCircle } from "react-icons/ai";
function Itemlist({ data, setdata ,DeleteItem}) {
  const increment = function (item) {
      data.data.count++;
    //   setdata(data);
    setdata((data)=>{
        return [...data];
    })
  };
  const decrement = function (dat) {
      if(data.data.count===0)
      {
          setdata((data)=>{
              return [...data];
          });
      }
      else{
          data.data.count--;
          setdata((data)=>{
              return [...data];
          })
      }
  };

  return (
    <div className="SingleItem">
      <div className="Imgcontainer adH">
        <img className="reduceimg" src={data.img} alt="" />
      </div>
      <div className="ContentofProduct adH">
        <div className="HeadingProduct Pad">{data.data.what}</div>
        <div className="ProductQuantity Pad">{data.data.gram}</div>
        {data.data.vegan ? (
          <FcApproval className="Pad adjust"></FcApproval>
        ) : (
          <FcCheckmark className="Pad adjust"></FcCheckmark>
        )}
      </div>
      <div className="ProductConunt adH">
        <div className="Operation">
          <AiFillPlusCircle
            onClick={() => {
              increment(data.data.id);
            }}
            className="buttonicon"
          ></AiFillPlusCircle>
          <div className="CountofNum">{data.data.count}</div>
          <AiFillMinusCircle
            onClick={() => {
              decrement(data.data.id);
            }}
            className="buttonicon"
          ></AiFillMinusCircle>
        </div>
      </div>
      <div className="ProductPriceContainer adH">
          <div className="ProductPrice Pad">{`Rs ${data.data.price*(data.data.count)}`}</div>
          <div className="Suggestion Pad">Save for later</div>
          <div onClick={()=>{DeleteItem(data.data.id)}} className="RemovingSug Pad" >Remove</div>
      </div>
    </div>
  );
}
export default Itemlist;
