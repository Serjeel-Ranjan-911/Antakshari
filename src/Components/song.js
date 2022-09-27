import { songs } from "../data";
import { useState, useEffect } from "react";
import { MdOutlineShuffleOn } from "react-icons/md";
const Song = (props) => {
	const [songData, setSongData] = useState({
		title: "",
		start: "",
		primaryColor: "#fff",
		source: "",
		startPhrase: "",
	});

	const getRandomIndex = (max) => {
		return Math.floor(Math.random() * Math.floor(max));
	};

	const changeSong = () => {
		if (songs[props.selectedAlphabet].length === 0) {
			return;
		}
		const song =
			songs[props.selectedAlphabet][
				getRandomIndex(songs[props.selectedAlphabet].length)
			];
		setSongData(song);
		props.changePageColor(song.primaryColor);
	};

	useEffect(() => {
		changeSong();
	}, [props.selectedAlphabet]);

	return (
		<>
			{songs[props.selectedAlphabet].length !== 0 ? (
				<>
					<h1 className="songTitle">{songData.startPhrase}</h1>
					<div class="card">
						{songData.source.length > 0 && (
							<iframe
								width="100%"
								height="100%"
								src={songData.source + `?start=${songData.start}`}
								title={songData.title}
							></iframe>
						)}

						<p
							style={{ backgroundColor: songData.primaryColor }}
							class="alphabet"
						>
							{props.selectedAlphabet}
						</p>
					</div>
					<MdOutlineShuffleOn className="nextIcon" onClick={changeSong} />
				</>
			) : (
				<h1 className="songTitle">No suggestions 😟</h1>
			)}
		</>
	);
};

export default Song;
