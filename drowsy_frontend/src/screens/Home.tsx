import React, {useState} from 'react'
// import {View} from 'react-native'

interface Props {
  filePath: string;
}
const Home: React.FC<Props> = ({ filePath }) => {
  filePath = "assets/linegraph.jpeg"
  const [imageSrc, setImageSrc] = useState('');

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