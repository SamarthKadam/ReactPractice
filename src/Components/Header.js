import './Header.css'
function Header(props)
{
    return(
        <div className="HeaderBar">
            <div className='LeftHead'>{props.content}</div>
            <div className='RightHead'>{props.content1}</div>
        </div>
    )

}
export default Header;