import React, {useState} from 'react'
// import {View} from 'react-native'

interface Props {
  filePath: string;
}
const Home: React.FC<Props> = ({ filePath }) => {
  const [imageSrc, setImageSrc] = useState('');
  filePath = "Users/andrewcheng/drowsy1/drowsy_frontend/assets/linegraph.jpeg"

  React.useEffect(() => {
    setImageSrc(URL.createObjectURL(new Blob([filePath])));
  }, [filePath]);

  return (
    <div>
      <img src={imageSrc} alt="Image" />
    </div>
  );
};

export default Home;