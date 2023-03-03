import "./App.css";
import { WeatherProvider } from "./context/WeatherContext";
import Container from "./components/Container";
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return <div className="App">
    <WeatherProvider>
    <Container/>
    </WeatherProvider>
  </div>;
}

export default App;

//
