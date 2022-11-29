import Frame from "./components/frame/Frame";

function App() {
  return (
    <div className="App">
      <Frame title={"Nasil bir ocponent yapilir"} text={"ilk basta bir objenin oldugunu dusunelim.."}>
        <div style={{backgorund:"#000",height:"50vh"}}></div>
      </Frame>
    </div>
  );
}

export default App;
