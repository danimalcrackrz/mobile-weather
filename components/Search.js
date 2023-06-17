import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React from 'react'
import { useRecoilState } from 'recoil'
import { useUpdateWeather } from '../utils/updateWeather'
import { Ionicons } from '@expo/vector-icons'
import { QUERYSTATE } from '../atoms'

const Search = () => {
  const [query, setQuery] = useRecoilState(QUERYSTATE)

  return (
    <KeyboardAvoidingView className='border-2 rounded-full mb-4 flex-row items-center justify-between p-4'>
      <TextInput
        placeholder='Enter a City...'
        keyboardAppearance='dark'
        value={query}
        onChangeText={setQuery}
      />
      <TouchableOpacity onPress={useUpdateWeather}>
        <Ionicons name='search' size={24} color='black' />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Search
