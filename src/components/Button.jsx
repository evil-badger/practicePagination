const Button=({title, onClickFunc})=>{
    return(
        <button onClick={onClickFunc}>{title}</button>
    )
}

export default Button