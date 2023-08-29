import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import hotBackground from './assets/hot.png'
import { InputTemperature } from './components/inputtemperature';

export default function App() {
  return (
    <ImageBackground source={hotBackground} style={s.container}>
      <View style={s.workspace}>
        <View>
          <Text>Température</Text>
        </View>
        <InputTemperature defaultValue={"12"}/>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
