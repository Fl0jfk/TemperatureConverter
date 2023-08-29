import { TextInput, Text, View } from 'react-native'
import { styles } from './inputtemperature.style.js'

export function InputTemperature ({ defaultValue, onChangeText, unit }){
    
    return (
        <View style={styles.view}>
            <TextInput 
                style={styles.input} 
                keyboardType="numeric" 
                placeholder='Tape une température' 
                maxLength={4} 
                defaultValue={defaultValue} 
                onChangeText={onChangeText}
            />
            <Text style={styles.unit}>{unit}</Text>
        </View>
        
    )        
}