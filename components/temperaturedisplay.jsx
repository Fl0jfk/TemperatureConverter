import { TextInput, Text, View } from 'react-native'
import { styles } from './temperaturedisplay.style.js'

export function TemperatureDisplay ({ value, unit }){
    return (
        <Text style={styles.text}>
            {value} {unit}
        </Text>
        
    )        
}