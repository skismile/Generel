import UserProfile from "./userprofile";

export function Main() {
  const userData = {
    name: "Sk Ismile",
    avatar_url:
      "https://media-exp1.licdn.com/dms/image/C4E03AQE8UozSn8sl3w/profile-displayphoto-shrink_400_400/0/1649146034556?e=1664409600&v=beta&t=01Lx9l7zuFDK4Oy9zh_K0LKkrUOzzHfj6yJxL6HNfJk",
    title: "Software Engineer",
    skillsets: [
      {
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png",
        skill: "ReactJS"
      },
      {
        icon: "https://www.techuz.com/images/nodejs-icon.svg",
        skill: "NodeJS"
      },
      {
        icon:
          "https://www.brcline.com/wp-content/uploads/2020/06/javascript-logo.png",
        skill: "JavaScript"
      },
      {
        icon:
          "https://tsh.io/wp-content/uploads/2020/10/react-hooks-best-practices-lead_.jpg",
        skill: "ReactHooks"
      },
      {
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/640px-HTML5_logo_and_wordmark.svg.png",
        skill: "HTML"
      },
      {
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
        skill: "CSS"
      },
      {
        icon:
          "https://images.credly.com/images/df2afab3-45fd-418c-aff7-92e4507255ea/blob.png",
        skill: "MongoDB"
      },
      {
        icon:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1200px-Python-logo-notext.svg.png",
        skill: "Python"
      }
    ]
  };

  return (
    <div className="main">
      <UserProfile userData={userData} />
    </div>
  );
}
