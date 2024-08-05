"use client";

import { useEffect, useState, useTransition } from "react";

import Produto, { ProdutoProps } from "@/components/Produto";

export default function Home() {
  const [produtos, setProdutos] = useState<ProdutoProps[]>();

  useEffect(() => {
    (async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      
      setProdutos(data);
    })()
  }, []);

  return (
    <main className="flex-1 flex items-center justify-center gap-4 flex-wrap p-8">
      {produtos?.map((produto) => {
        return (
          <Produto
            image={produto.image}
            id={produto.id}
            price={produto.price}
            title={produto.title}
          ></Produto>
        );
      })}
    </main>
  );
}
