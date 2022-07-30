import Modal from "@mui/material/Modal";
import { useState } from "react";
import { alphabets } from "../data";
import "./alphabetSelector.css";

const AlphabetSelector = (props) => {
	const [modalToggle, setModalToggle] = useState(false);

	return (
		<>
			<div onClick={() => setModalToggle(true)} className="toggleModal">
				<p>{props.selectedAlphabet}</p>
			</div>
			<Modal
				className="modal"
				open={modalToggle}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<>
					<div className="selectorContainer">
						{alphabets.map((alphabet) => {
							return (
								<p
									key={alphabet}
									className={`selectAlphabet ${
										props.selectedAlphabet === alphabet ? "rounded" : ""
									}`}
									onClick={() => {
										props.changeAlphabet(alphabet);
										setModalToggle(false);
									}}
								>
									{alphabet}
								</p>
							);
						})}
					</div>
				</>
			</Modal>
		</>
	);
};

export default AlphabetSelector;
