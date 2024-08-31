import s from './Profile.module.css'

const Profile = ({user}) => {
  return (
  <div className={s.wrapper}>
<div className={s.secondwrapper}> 
<img className={s.img}
src= {user.avatar}
alt="User avatar"
/>
<p className={s.username}>{user.username}</p>
<p className={s.p}>@{user.tag}</p>
<p className={s.p}>{user.location}</p>
</div>

<ul className={s.ul}>
<li className={s.li}>
<span>Followers</span>
<span className={s.stats}>{user.stats.followers}</span>
</li>
<li className={s.li} >
<span>Views</span>
<span className={s.stats}>{user.stats.views}</span>
</li>
<li className={s.li}>
<span>Likes</span>
<span className={s.stats}>{user.stats.likes}</span>
</li>
</ul>
</div>

  )
}
export default Profile
