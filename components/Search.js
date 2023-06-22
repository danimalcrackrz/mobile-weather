import { View, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { useRecoilState } from 'recoil'
import { QUERYSTATE } from '../atoms'

const Search = () => {
  const [query, setQuery] = useRecoilState(QUERYSTATE)

  return (
    <View className='mb-4 flex-row items-center'>
      <TextInput
        placeholder='Enter a City...'
        placeholderTextColor='black'
        keyboardAppearance='dark'
        value={query}
        onChangeText={setQuery}
        className='border-2 p-4 rounded-full w-full'
      />
    </View>
  )
}

export default Search
