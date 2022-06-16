import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
   const [count, setCount] = useState(0);

   return (
      <div className="App">
         <header className="App-header">
            <img
               src="https://c.tenor.com/57i8r2Mg1nQAAAAi/goodgoodgeneral-mental-health.gif"
               className="App-logo"
               alt="logo"
            />
            <p>
               This site is a work in progress. <br />I am planning to make this
               my online portfolio/resume.
            </p>
            <p>
               For now, go check out my own personal website{" "}
               <a
                  className="App-link"
                  href="https://deveshanand.com/"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  deveshanand.com
               </a>
               , which is more of a mixture of my{" "}
               <a className="App-link" href="https://deveshanand.com/blog/">
                  blogs
               </a>
               , or my taste in{" "}
               <a className="App-link" href="https://deveshanand.com/music/">
                  music
               </a>
               .
            </p>
         </header>
      </div>
   );
}

export default App;
