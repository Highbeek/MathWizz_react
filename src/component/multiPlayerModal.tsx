// MultiplayerModal.tsx

import React, { useState } from "react";
import Modal from "react-modal";
import { AiOutlineClose } from "react-icons/ai";

const MultiplayerModal = ({
  isOpen,
  onRequestClose,
  tokens,
  generateToken,
  pairWithToken,
}) => {
  const [generatedToken, setGeneratedToken] = useState<number | null>(null);
  const [enteredToken, setEnteredToken] = useState("");
  const [isPaired, setIsPaired] = useState(false);

  const handlePairClick = () => {
    if (tokens.includes(enteredToken)) {
      setIsPaired(true);
      pairWithToken(enteredToken);
    } else {
      setIsPaired(false);
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="mymodal bg-white p-4 rounded-lg text-center top-4 right-4 w-48"
      overlayClassName="myoverlay fixed inset-0 bg-black bg-opacity-50 flex justify-end items-start"
    >
      <h2 className="text-sm font-bold mb-2">Multiplayer</h2>
      {generatedToken !== null ? (
        <p className="text-xs text-gray-600 mb-4">
          Generated: {generatedToken}
        </p>
      ) : (
        <div className="mb-4">
          <input
            type="text"
            value={enteredToken}
            onChange={(e) => setEnteredToken(e.target.value)}
            className="border rounded w-full p-1 mt-2 text-sm"
            placeholder="Enter token"
          />
        </div>
      )}
      {generatedToken === null && (
        <button
          className="btn bg-blue-500 text-xs text-white py-1 px-2 rounded hover:bg-blue-600 transition"
          onClick={() => {
            const newToken = Math.floor(Math.random() * 900000) + 100000;
            setGeneratedToken(newToken);
            generateToken(newToken);
          }}
        >
          Generate
        </button>
      )}
      <button
        className="btn bg-green-500 text-xs text-white py-1 px-2 rounded hover:bg-green-600 transition mt-2"
        onClick={handlePairClick}
      >
        Pair
      </button>
      {isPaired && <p className="text-xs text-green-500 mt-2">Paired!</p>}

      <AiOutlineClose onClick={onRequestClose}className="cursor-pointer" />
    </Modal>
  );
};

export default MultiplayerModal;
