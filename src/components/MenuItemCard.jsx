import { useCart } from '../context/CartContext'

const MenuItemCard = ({ item }) => {
  const { addToCart } = useCart()

  return (
    <div className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-start border border-gray-100">
      <div className="flex-1">
        <h3 className="font-bold">{item.name}</h3>
        <p className="text-gray-600 text-sm mt-1">{item.description}</p>
        <p className="font-bold mt-2">KSh {item.price}</p>
      </div>
      <div className="ml-4 flex flex-col items-end">
        {item.image && (
          <img
            src={item.image}
            alt={item.name}
            className="w-20 h-20 object-cover rounded"
          />
        )}
        <button
          onClick={() => addToCart(item)}
          className="mt-2 btn-primary text-sm px-3 py-1"
        >
          Add +
        </button>
      </div>
    </div>
  )
}

export default MenuItemCard