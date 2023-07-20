import css from './Friends.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={css.friendsItem}>
      <span
        className={css.status}
        style={{
          backgroundColor: isOnline ? '#48ae4b' : 'tomato',
        }}
      ></span>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </li>
  );
};
