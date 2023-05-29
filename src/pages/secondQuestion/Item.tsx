import { useContext } from 'react';
import { ItemContext } from './ItemContext';

function Item() {
  const { name, qty, price } = useContext(ItemContext);

  return (
    <>
      <div className="w-[40%] md:w-[14%] mx-auto bg-gray-200 shadow-md p-2 rounded-md hover:transform hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
        <h1 className="text-2xl font-bold">{name}</h1>
        <div className="flex justify-between items-center">
          <p>{qty}pcs</p>
          <p>{price}</p>
        </div>
      </div>
    </>
  );
}

export default Item;
