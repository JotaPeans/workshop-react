import Image from "next/image";

export interface ProdutoProps {
  id: number;
  price: number;
  title: string;
  image: string;
}

const Produto = ({ id, image, price, title }: ProdutoProps) => {
  return (
    <div className="w-full min-w-72 max-w-72 h-[500px] rounded-lg border border-zinc-300 p-4 flex flex-col gap-6">
      <Image
        src={image}
        alt=""
        width={2000}
        height={2000}
        className="w-full h-full max-h-72 object-cover"
      />

      <p className="font-medium text-xl text-center">{title}</p>

      <p className="text-orange-500 font-bold text-2xl">R$ {price}</p>

      <button
        onClick={() => {
          let cart = JSON.parse(window.localStorage.getItem("cart") ?? "[]");

          cart.push({ id: id, image: image, price: price, title: title });

          window.localStorage.setItem("cart", JSON.stringify(cart));
        }}
        className="w-full rounded-lg bg-orange-500 p-4 text-white font-bold"
      >
        Adicionar ao carrinho
      </button>
    </div>
  );
};

export default Produto;
