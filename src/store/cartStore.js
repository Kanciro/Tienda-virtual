import { map } from 'nanostores';

export const cartItems = map({});

export function addCartItem({ id, nombre, precio, imagen_principal }) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    cartItems.setKey(id, { id, nombre, precio, imagen_principal, quantity: 1 });
  }
  console.log("Carrito actualizado:", cartItems.get());
}