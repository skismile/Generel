import { useState } from "react";

export default function UserProfile({ userData }) {
  const { name, avatar_url, title, skillsets } = userData;
  const [follow, setFollow] = useState(false);
  return (
    <div>
      <div className="container">
        <div className="leftCont">
          <div className="idendity">
            <h1>{name}</h1>
            <button onClick={() => setFollow(!follow)}>
              {follow ? "Unfollow" : "Follow"}
            </button>
            <h3>{title}</h3>
          </div>
          <div className="skill">
            {skillsets.map((ele) => {
              return (
                <div className="skillbox">
                  <img
                    width="30%"
                    height="50%"
                    src={ele.icon}
                    alt={ele.skill}
                  />
                  <p>{ele.skill}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="rightCont">
          <img src={avatar_url} alt={name} />
        </div>
      </div>
    </div>
  );
}
