import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Offers = () => {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://leboncoin-api.herokuapp.com/api/offer/with-count"
      );
      setData(response.data);

      setIsLoading(false);
    };

    fetchData();
  }, []);

  console.log(data);

  return (
    <div className="background">
      <div className="main-container">
        <div className="search-container">
          <form>
            <div>
              <input type="text" placeholder="Que recherchez-vous?" />
            </div>
          </form>
          <button className="search-button">Recherher</button>
        </div>
        <div>
          {isLoading === true ? (
            <p>En cours de chargement ...</p>
          ) : (
            <div>
              <ul>
                {data.offers.map((offer, index) => {
                  return (
                    <li key={offer._id}>
                      <Link to={"/offer/" + offer._id}>
                        <div className="offer-container">
                          <div className="img-container">
                            <img src={offer.pictures} alt={offer.title} />
                          </div>
                          <div>
                            <p>{offer.title}</p>
                            <p>{offer.price} €</p>
                            <p>{offer.created}</p>
                          </div>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Offers;
