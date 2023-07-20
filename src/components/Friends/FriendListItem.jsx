import './FriendListItem.css';
// import 'index.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
    return (
        <li class="friends-item">
            <span class={`status ${isOnline ? 'online' : 'offline'}`}> </span>
            <img class="avatar" src={avatar} alt="User avatar" width="48" />
            <p class="name">{name}</p>
        </li>
    );
};

export default FriendListItem
