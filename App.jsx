import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import hotBackground from './assets/hot.png'
import { InputTemperature } from './components/inputtemperature';
import { TemperatureDisplay } from './components/temperaturedisplay';
import { useState } from 'react';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from './constant.js'
import { getOppositUnit, convertTemperatureTo } from './temperature-service';

export default function App() {
  const [value, setValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);
  function getConvertedTemperature(){
    const valueAsFloat = Number.parseFloat(value);
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  };
    return (
    <ImageBackground source={hotBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay value={getConvertedTemperature()} unit={oppositeUnit}/>
        <InputTemperature onChangeText={setValue} defaultValue={DEFAULT_TEMPERATURE}/>
        <View>
          <Text>Button</Text>
        </View>
      </View>
    </ImageBackground>
  );
}
