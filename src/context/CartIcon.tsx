import { ShoppingBag } from "lucide-react";
import clsx from "clsx";
import { useCartUI } from "./useCartUI";

/**
 * Icône de panier avec badge dynamique.
 */
const CartIcon = () => {
  const { itemCount, cartColor, badgeTextColor } = useCartUI();

  return (
    <div
      className={clsx(
        "relative p-2 rounded-full transition-colors duration-200",
        cartColor
      )}
      aria-label={`Panier (${itemCount})`}
    >
      <ShoppingBag className="text-white" />
      <span
        className={clsx(
          "absolute -top-1 -right-1 bg-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold border",
          badgeTextColor,
          itemCount > 1 ? "border-olive-700" : "border-stone-700"
        )}
        style={{ minWidth: 20 }}
        aria-live="polite"
      >
        {itemCount}
      </span>
    </div>
  );
};

export default CartIcon;
