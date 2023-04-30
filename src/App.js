import { GlobalStyle } from "GlobalStyle";
import Reader from "components/Reader";
import publications from "./publications.json";

function App() {
  return (
    <>
      <GlobalStyle />
      <Reader items={publications} />
    </>
  );
}

export default App;
