import './App.css';
import Weather from "./Weather"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App container">
     <div className="wrapper mt-5 mx-auto">


      <Weather/>


     </div>
     <small className="footnote">
      <a href="https://github.com/f5623/">This project </a>
      is coded by <a href="https://github.com/f5623">Fafa</a> as
      <a href="https://www.shecodes.io/"> SheCodes </a> React workshop final project.
     </small>
    </div>
  );
}
