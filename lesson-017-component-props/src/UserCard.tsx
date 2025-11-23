export function UserCard(props) {

    return (
        <div style={{
            border: '5px solid black',
            padding: '5px'
        }}>
            <img src={props.user.avatar ? props.user.avatar : props.defaultAvatar} alt="avatar"/>

            <div>name: {props.user.name}</div>
            <div>age: {props.user.age < 18 ? '🔞' + props.user.age : props.user.age}</div>
            <div>email: {props.user.email}</div>
        </div>
    );
}
