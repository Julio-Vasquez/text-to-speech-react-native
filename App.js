import { useFonts } from 'expo-font'
import { NativeBaseProvider, Box } from 'native-base'

import Main from './screen/Main'
import Loading from './components/Loading'
import Poppins from './assets/fonts/poppins.ttf'

export default function App() {
  const [loaded] = useFonts({ Poppins })

  return (
    <NativeBaseProvider>
      {loaded ? (
        <Box flex={1} bg="#fff" alignItems="center" justifyContent="center">
          <Main />
        </Box>
      ) : (
        <Loading />
      )}
    </NativeBaseProvider>
  )
}
