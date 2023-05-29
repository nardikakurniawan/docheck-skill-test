import React from 'react';

type ItemContextType = {
  name: string;
  qty: number;
  price: number | string;
};

export const ItemContext = React.createContext<ItemContextType>({
  name: '',
  qty: 0,
  price: '',
});

export const ItemProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const itemData = { name: 'Bread', qty: 20, price: '$3' };

  return (
    <ItemContext.Provider value={itemData}>{children}</ItemContext.Provider>
  );
};
