import { ImageBackground, Text, View } from 'react-native';
import { s } from './App.style';
import hotBackground from './assets/hot.png'
import coldBackground from './assets/cold.png'
import { InputTemperature } from './components/inputtemperature';
import { TemperatureDisplay } from './components/temperaturedisplay';
import { useEffect, useState } from 'react';
import { DEFAULT_TEMPERATURE, DEFAULT_UNIT } from './constant.js'
import { getOppositUnit, convertTemperatureTo, isIceTemperature } from './temperature-service';
import { ButtonConvert } from './components/buttonconvert';

export default function App() {
  const [value, setValue] = useState(DEFAULT_TEMPERATURE);
  const [currentUnit, setCurrentUnit] = useState(DEFAULT_UNIT);
  const oppositeUnit = getOppositUnit(currentUnit);
  const [ currentBackground, setCurrentBackground ] = useState();
  useEffect(() => {
    const  temperatureAsFloat = Number.parseFloat(value)
    if(!isNaN(temperatureAsFloat)){
     const isColdBackground = isIceTemperature(value, currentUnit)
     setCurrentBackground(isColdBackground ? coldBackground : hotBackground)
    }
  }, [value])
  function getConvertedTemperature(){
    const valueAsFloat = Number.parseFloat(value);
    return isNaN(valueAsFloat) ? "" : convertTemperatureTo(oppositeUnit, valueAsFloat).toFixed(1);
  };
    return (
    <ImageBackground source={currentBackground} style={s.container}>
      <View style={s.workspace}>
        <TemperatureDisplay value={getConvertedTemperature()} unit={oppositeUnit}/>
        <InputTemperature onChangeText={setValue} defaultValue={DEFAULT_TEMPERATURE} unit={currentUnit}/>
        <View>
          <ButtonConvert onPress={()=>{setCurrentUnit(oppositeUnit)}} unit={currentUnit}/>
        </View>
      </View>
    </ImageBackground>
  );
}
