import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const Offer = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/" + id
      );
      setData(response.data);
      setIsLoading(false);
    };

    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading === true ? (
        <p>En cours de chargement ...</p>
      ) : (
        <div>
          <div>
            <img src={data.pictures} alt={data.title} />
            <p>{data.title}</p>
            <p>{data.price} €</p>
            <p>{data.created}</p>
            <p>{data.description}</p>
          </div>
          <div>
            <p>{data.creator.account.username}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
