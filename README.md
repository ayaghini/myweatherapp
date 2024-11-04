# WeatherApp

WeatherApp is a responsive, user-friendly web application built with React, Vite, and Axios. It allows users to check the current weather and forecast data for any city using the OpenWeather API. The application supports hourly and daily forecast intervals, providing a comprehensive weather overview.

## Features
- **Current Weather**: Displays real-time weather data for a selected city.
- **Hourly Forecast**: Provides an hourly weather forecast for the next 12 hours.
- **Daily Forecast**: Displays a daily weather forecast for up to 7 days.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **Error Handling**: User-friendly error messages for various scenarios (e.g., city not found, network issues).
- **Environment Variables**: Securely stores API keys using a `.env` file.

## Installation and Setup
1. **Clone the repository**:
    ```bash
    git clone https://github.com/yourusername/weather-app.git
    cd weather-app
    ```

2. **Install dependencies**:
    ```bash
    npm install
    ```

3. **Create a `.env` file** in the root of the project and add your OpenWeather API key:
    ```env
    VITE_OPENWEATHER_API_KEY=your_api_key_here
    ```

4. **Run the development server**:
    ```bash
    npm run dev
    ```

5. **Open the app**:
   Navigate to `http://localhost:5173` in your web browser.


## Usage
1. **Enter a city name** in the input field and click the "Get Weather" button.
2. **Select a forecast interval** (Current, Hourly, Daily) from the dropdown to view detailed weather data.
3. **Check the error messages** if an issue occurs (e.g., invalid city, network problem).

## Technologies Used
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Axios**: For making HTTP requests.
- **OpenWeather API**: For fetching weather and forecast data.

## Enhancements
Future improvements could include:
- Adding a search history feature.
- Implementing a dark mode for better usability.

## License
This project is open source and available under the [MIT License](LICENSE).

## Contributing
Contributions are welcome! Please submit a pull request or open an issue to discuss changes.

## Contact
For questions or suggestions, please reach out at here at github.

