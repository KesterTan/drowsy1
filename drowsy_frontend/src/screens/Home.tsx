import React, {useState} from 'react'
import { SafeAreaView } from 'react-native'
// import {View} from 'react-native'

interface Props {
  filePath: string;
}
const Home: React.FC<Props> = ({ filePath }) => {
  filePath = "/assets/linegraph.jpeg"
  const [imageSrc, setImageSrc] = useState('');

  React.useEffect(() => {
    setImageSrc(URL.createObjectURL(new Blob([filePath])));
  }, [filePath]);

  return (
    <SafeAreaView>
       <div>
        <img src={imageSrc} alt="Image" />
      </div>
    </SafeAreaView> 
  );
}; 

export default Home;