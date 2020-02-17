import React, { useState } from "react";
import axios from "axios";

const Publish = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [file, setFile] = useState("");

  return (
    <div>
      <span>Déposer une annonce</span>
      <form>
        <span>Titre de l'annonce*</span>
        <input
          type="text"
          value={title}
          onChange={event => {
            setTitle(event.target.value);
          }}
        />
        <span>Texte de l'annonce*</span>
        <input
          type="text"
          value={description}
          onChange={event => {
            setDescription(event.target.value);
          }}
        />
        <span>Prix*</span>
        <input
          type="number"
          value={price}
          onChange={event => {
            setPrice(event.target.value);
          }}
        />
        <input
          type="file"
          onChange={event => {
            setFile(event.taget.files[0]);
          }}
        />
        <button type="submit">Valider</button>
      </form>
    </div>
  );
};

export default Publish;
