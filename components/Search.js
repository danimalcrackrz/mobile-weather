import {
  KeyboardAvoidingView,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native'
import React, { useState } from 'react'
import { useRecoilState } from 'recoil'
import { useGetTemperature } from '../utils/useGetTemperature'
import { Ionicons } from '@expo/vector-icons'
import { QUERYSTATE } from '../atoms'

const Search = () => {
  const [query, setQuery] = useRecoilState(QUERYSTATE)
  const [searchVisible, setSearchVisible] = useState(false)

  const handleSearch = () => {
    setSearchVisible(!searchVisible)
  }

  return (
    <KeyboardAvoidingView className='mb-4 flex-row items-center justify-end'>
      {searchVisible && (
        <TextInput
          placeholder='Enter a City...'
          keyboardAppearance='dark'
          value={query}
          onChangeText={setQuery}
          className='border-2 p-4 rounded-full w-5/6 mr-2'
        />
      )}
      <TouchableOpacity className='p-4' onPress={handleSearch}>
        <Ionicons name='search' size={30} color='black' />
      </TouchableOpacity>
    </KeyboardAvoidingView>
  )
}

export default Search
