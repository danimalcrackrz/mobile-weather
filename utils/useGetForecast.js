import { useRecoilState } from 'recoil'
import { FORECASTSTATE } from '../atoms'
import { useEffect } from 'react'

export const useGetForecast = () => {
  const [forecast, setForecast] = useRecoilState(FORECASTSTATE)

  useEffect(() => {
    const getForecast = async () => {
      const url =
        //TODO: query should not be hardcoded as dallas
        'https://weatherapi-com.p.rapidapi.com/forecast.json?q=dallas&days=5'
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
        const {
          forecast: { forecastday },
        } = result
        setForecast(forecastday)
      } catch (error) {
        console.error(error)
      }
    }

    getForecast()
  }, []) // Empty dependency array to run only once

  return forecast
}
