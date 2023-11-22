import React, { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [postedNeeds, setPostedNeeds] = useState([]);
  const [postedOffers, setPostedOffers] = useState([]);
  const [userData, setUserData] = useState({
    name: 'Demo User',
    // ... other user data
  });

  const addPostedNeed = (newNeed) => {
    setPostedNeeds([...postedNeeds, newNeed]);
  };

  const deletePostedNeed = (needId) => {
    const updatedNeeds = postedNeeds.filter((need, index) => index !== needId);
    setPostedNeeds(updatedNeeds);
  };

  const addPostedOffer = (newOffer) => {
    setPostedOffers([...postedOffers, newOffer]);
  };

  const deletePostedOffer = (offerId) => {
    const updatedOffers = postedOffers.filter((offer, index) => index !== offerId);
    setPostedOffers(updatedOffers);
  };

  const updateUserData = (newUserData) => {
    setUserData(newUserData);
  };

  return (
    <AppContext.Provider
      value={{
        postedNeeds,
        postedOffers,
        userData,
        addPostedNeed,
        deletePostedNeed,
        addPostedOffer,
        deletePostedOffer,
        updateUserData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
