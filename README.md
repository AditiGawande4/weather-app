# Weather App 🌦️

The Weather App is a simple and interactive tool to fetch real-time weather updates for cities worldwide. Built with HTML, CSS, JavaScript, and Bootstrap, the app integrates with RapidAPI's Weather API to provide users with essential weather details such as temperatures, air conditions, and sun information. The responsive design powered by Bootstrap ensures a seamless experience across devices.

---

## Demo 🎥

[![Weather App Demo](assets/weather-demo.gif)](https://www.youtube.com/watch?v=1ivanspG59E)

Click the image above to watch a demo of the Weather App!


---

## Features ✨

- **City Search**: Enter a city name to get live weather updates.
- **Detailed Information**:
  - Temperatures (Current, Min, Max, Feels Like)
  - Air Conditions (Humidity, Wind Speed)
  - Sun Info (Sunrise and Sunset times)
- **Preloaded Data**: Displays weather details for preset cities like Chicago and London.
- **Responsive Design**: Optimized for various screen sizes.

---

## Getting Started 🚀

### Prerequisites

- A modern web browser (e.g., Chrome, Firefox).
- An API key from [RapidAPI](https://rapidapi.com).

### Running the App Locally

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/weather-app.git
2. Navigate to the project directory:
   ```bash
   cd weather-app
3. Open index.html in your preferred web browser

## API Integration 🌐
This project uses RapidAPI's Weather API to fetch real-time weather data.

### Setting up your API Key:
Update the API key in the script.js file. Replace 'your-api-key' with your actual API key from RapidAPI.:
  ```bash
    const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'your-api-key',
        'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
    }
    };


