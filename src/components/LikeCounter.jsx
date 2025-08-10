import { useState, useEffect } from 'react';

function LikeCounter() {
  const [likes, setLikes] = useState(0);

  function darOLike() {
    setLikes(likes + 1);
    console.log(likes);
  }

  useEffect(() => {
    if (likes > 9) {
      alert(`Parabéns, você recebeu ${likes} likes`);
    }
  }, [likes]);

  return (
    <div>
      <p>Quantidade de Likes: {likes}</p>
      <button onClick={darOLike}>Like</button>
    </div>
  );
}

export default LikeCounter;
