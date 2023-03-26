import axios from 'axios';


export const getWeatherData = async (lat, lng) => {
    try {
      if (lat && lng) {
        const { data } = await axios.get('https://community-open-weather-map.p.rapidapi.com/find', {
          params: { lat:lat, lon: lng },
          headers: {
            'x-rapidapi-key': '2814ae84ffmsh5dc787f4ee0d736p1eb681jsn6229c9320d6a',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
          },
        });
  
        return data;
      }
    } catch (error) {
      console.log(error);
    }
  };