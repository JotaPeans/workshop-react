"use client";

import Produto, { ProdutoProps } from "@/components/Produto";
import { useEffect, useState } from "react";

const Cart = () => {
  const [cart, setCart] = useState<ProdutoProps[]>();

  useEffect(() => {
    const produtos = JSON.parse(window.localStorage.getItem("cart") ?? "[]");
    setCart(produtos);
  }, []);

  return (
    <main>
      {cart?.map((produto) => {
        return (
          <Produto
            id={produto.id}
            title={produto.title}
            image={produto.image}
            price={produto.price}
          />
        )
      })}
    </main>
  );
};

export default Cart;
