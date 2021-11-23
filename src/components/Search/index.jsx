import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDigimonsThunk } from "../../store/modules/digimons/thunks";

export const Search = () => {
  const [input, setInput] = useState();
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const handleSearch = () => {
    setError(false);
    dispatch(addDigimonsThunk(input, setError));
    setInput("");
  };

  return (
    <div>
      <h2>Procure pelo seu Digimon!</h2>
      {error && <p style={{ color: "red" }}>Digimon não existe</p>}
      <div>
        <input
          value={input}
          onChange={(event) => setInput(event.target.value)}
          placeholder="Procure seu Digimon"
        />
        <button onClick={() => handleSearch()}>Pesquisar</button>
      </div>
    </div>
  );
};
