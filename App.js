import { SafeAreaView } from 'react-native'
import Homescreen from './screens/Homescreen'
import { RecoilRoot } from 'recoil'

export default function App() {
  return (
    <RecoilRoot>
      <SafeAreaView>
        <Homescreen />
      </SafeAreaView>
    </RecoilRoot>
  )
}
