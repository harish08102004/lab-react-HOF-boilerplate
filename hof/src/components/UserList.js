function UserList(props) {
    return (
        <div> 
            <div>{console.log(props.data)}</div> 
        {props.data.map((arr)=>(
            <p>
                <span>ID: {arr.id}</span>
                <span>Name: {arr.name}</span>
                <span>User Type: {arr.user_type}</span>
            </p>
        ))}
    </div>
    );
  }
  
  export default UserList;