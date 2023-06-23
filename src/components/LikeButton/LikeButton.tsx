import "./LikeButton.css";
import { useState } from "react";
import { BiSolidLike, BiLike } from "react-icons/bi";

const LikeButton = () => {
  const [button, setButton] = useState({
    liked: false,
    icon: <BiLike/>
  })

  const handleClick = () => {
    if (button.liked === true) {
      setButton({...button, liked: false, icon: <BiLike/>})
      console.log('unliked')
    }
    else {
      setButton({...button, liked: true, icon: <BiSolidLike/>})
      console.log('liked')
    }
  }


  return (
    <>
      <div onClick={handleClick}>
        LikeButton {button.icon}
      </div>
    </>
  );
};

export default LikeButton;
