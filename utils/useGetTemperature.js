import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { WEATHERSTATE, QUERYSTATE } from '../atoms'

export const useGetTemperature = () => {
  const [currentTemperature, setCurrentTemperature] =
    useRecoilState(WEATHERSTATE)
  const query = useRecoilValue(QUERYSTATE)

  useEffect(() => {
    const getTemperature = async () => {
      const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${
        query === '' || query.length <= 2 ? 'dallas' : query
      }`
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key':
            '1bdf16303amsh20eda7b1f755003p1ed7f6jsncef45f53350d',
          'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com',
        },
      }

      try {
        const response = await fetch(url, options)
        const result = await response.json()
        setCurrentTemperature(result)
      } catch (error) {
        console.error(error)
      }
    }

    getTemperature()
  }, [query, setCurrentTemperature])
}
