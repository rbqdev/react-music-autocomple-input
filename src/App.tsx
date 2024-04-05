import "./App.css";

import { AutocompleteBandsController } from "./features/AutocompleteBands";

function App() {
  return (
    <div className="app">
      <div className="app--content">
        <h1>Music Bands Autocomplete</h1>
        <AutocompleteBandsController />
      </div>
    </div>
  );
}

export default App;
