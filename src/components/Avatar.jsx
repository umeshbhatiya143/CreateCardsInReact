import React from "react";

function Avatar(props) {
  return (
    <div>
      <img src={props.img} alt="avatar_img" className="circle-img" />
    </div>
  );
}
export default Avatar;
