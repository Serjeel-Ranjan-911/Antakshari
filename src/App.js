import { useEffect, useState } from "react";
import "./App.css";

import { alphabets, songs } from "./data";
import Song from "./Components/song";
import AlphabetSelector from "./Components/alphabetSelector";

function App() {
	const [pageColor, setPageColor] = useState("#ff2929d9");
	const [selectedAlphabet, setSelectedAlphabet] = useState("क");

	useEffect(() => {
		console.log(selectedAlphabet);
	}, [selectedAlphabet]);

	return (
		<div style={{ backgroundColor: pageColor }} className="App">
			<Song
				selectedAlphabet={selectedAlphabet}
				changePageColor={(color) => setPageColor(color)}
			/>
			<AlphabetSelector
				selectedAlphabet={selectedAlphabet}
				changeAlphabet={(alpha) => setSelectedAlphabet(alpha)}
			/>
		</div>
	);
}

export default App;
