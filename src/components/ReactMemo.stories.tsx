import {memo, useState} from "react";

export default {
    title: 'ReactMemo demo',
}


const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}

const UsersSecret = (props: {users: Array<string>} ) => {
    return <div>
        {props.users.map((u, i) =>
            <div key={i}>{u}</div>)}
    </div>
}

const Users = memo(UsersSecret);

export const Example1 = () => {
    const [counter, setCounter] = useState(0);
    const [users, setUsers] = useState(["Dimych", "Valera", "Artem"]);

    const addUser = () => {
        const newUsers = [...users, "Sveta " + new Date().getTime()];
        setUsers(newUsers)
    }

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter  count={counter}/>
        <Users  users={users}/>
    </>


}