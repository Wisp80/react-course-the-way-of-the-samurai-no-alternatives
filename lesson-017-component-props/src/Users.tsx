import {UserCard} from './UserCard.tsx';

export function Users() {
    const defaultAvatar = 'https://placehold.co/128?text=no+photo'
    const users = [
        {
            id: 1,
            name: 'John',
            age: 32,
            email: 'john@gmail.com',
            avatar: 'https://tinyurl.com/4ez2s7mt',
        },
        {
            id: 2,
            name: 'Alice',
            age: 17,
            email: 'alice@yahoo.com',
            avatar: 'https://tinyurl.com/ynyx9nhu',
        },
        {id: 3, name: 'Mike', age: 44, email: 'mike@hotmail.com'},
        {
            id: 4,
            name: 'Sarah',
            age: 29,
            email: 'sarah@gmail.com',
            avatar: 'https://tinyurl.com/yyktspmh',
        },
    ];

    return <div
    style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '30px',
        width: '60%',
    }}>
        {users.map((user) => (
            <UserCard key={user.id} user={user} defaultAvatar={defaultAvatar}/>
        ))}
    </div>;
}