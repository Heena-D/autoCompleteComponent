import "./App.css";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div className="App">
      <Autocomplete
        id="combo-box-demo"
        options={arr}
        getOptionLabel={option => option}
        value={fruit}
        onChange={(event, value) => {
          setFruit(value);
        }}
        renderInput={params => (
          <TextField
            {...params}
            label="Search fruit name"
            variant="outlined"
            fullWidth
          />
        )}
      />

      {fruit && <h6>You selected {fruit}</h6>}
    </div>
  );
}

const arr = ["Apple", "Mango", "Kiwi", "Strawberry", "Melon", "Custard Apple"];

export default App;
