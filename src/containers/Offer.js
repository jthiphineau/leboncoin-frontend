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
        "https://leboncoin-backend-jt.herokuapp.com/offer/" + id
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
          <span>{data.title}</span>
        </div>
      )}
    </div>
  );
};

export default Offer;
