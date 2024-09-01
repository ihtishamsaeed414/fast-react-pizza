import formatCurrency from 'react';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './updateItemQuantity';
import { getCurrentCartQuantityById } from './cartSlice';
import { useSelector } from 'react-redux';
function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;
  const currentQuantity = useSelector(getCurrentCartQuantityById(pizzaId));

  return (
    <li className="sm:felx py-3 sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:gap-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity
          pizzaId={pizzaId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
