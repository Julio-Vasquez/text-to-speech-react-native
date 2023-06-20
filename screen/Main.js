import { useState } from 'react'
import { speak } from 'expo-speech'
import { Button, Input, Text, View } from 'native-base'

import { styles } from './styles'

export default function Main() {
  const [text, setText] = useState('Carlos')

  const speakText = ({ text }) => {
    const config = { language: 'es' }
    speak(text, config)
  }

  const handleClick = () => {
    speakText({ text })
  }

  const handleChange = text => {
    setText(text)
  }

  return (
    <View style={styles.container}>
      <View style={styles.items}>
        <Text bold style={styles.text}>
          Escriba aqui el texto que quiere que sea leido
        </Text>
      </View>
      <View style={styles.items}>
        <Input
          variant="rounded"
          placeholder="texto ..."
          onChangeText={handleChange}
          style={styles.text}
        />
      </View>
      <View style={styles.actions}>
        <Button
          style={styles.actions.button}
          onPress={handleClick}
          size="md"
          variant="solid"
          colorScheme="green"
        >
          Reproducir
        </Button>
      </View>
    </View>
  )
}
