import FriendListItem from './FriendListItem.jsx';
import 'index.css';

const Friends = ({ friends }) => {
  return (
    <div class="friends">
      <ul class="friend-list">
        {friends.map(friend => (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        ))}
      </ul>
    </div>
  );
};

export default Friends;
