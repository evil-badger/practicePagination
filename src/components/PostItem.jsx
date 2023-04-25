
const PostItem = ({
    title,
    body,
    id
}) => {
    return (
        <div style={{width:"300px",height:"300px", margin:"10px 10px", backgroundColor:"#CCC"}}>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>{body}</p>
        </div>
    )
}

export default PostItem