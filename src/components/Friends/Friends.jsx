import { FriendListItem } from './FriendListItem.jsx';
import css from './Friends.module.css';

export const Friends = ({ friends }) => {
  return (
    <div className={css.friendsContainer}>
      <ul className={css.friendList}>
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
