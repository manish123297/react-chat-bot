import React, { useEffect, useState } from 'react';

const DogPicture = () => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    fetch('https://images.ctfassets.net/uwf0n1j71a7j/5lurfooL9DloPVx9fRPyus/e15a2e21159678c3053230c88d101ac0/nightlife_in_bangkok.png')
      .then((res) => res.json())
      .then((data) => {
        setImageUrl(data.message);
      });
  }, []);

  return (
    <div>
      <img    style={{width:"300px",height: "250px",marginLeft:"50px"}} src="https://images.ctfassets.net/uwf0n1j71a7j/5lurfooL9DloPVx9fRPyus/e15a2e21159678c3053230c88d101ac0/nightlife_in_bangkok.png" alt='thailand' />
    </div>
  );
};

export default DogPicture;