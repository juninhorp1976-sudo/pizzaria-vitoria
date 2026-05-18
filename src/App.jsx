import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  const pizzas = [
    {
  nome: "Calabresa",
  preco: 39.9,
  descricao: "Pizza com calabresa, queijo e cebola.",
  imagem:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
},
    {
  nome: "Frango com catupiry",
  preco: 39.9,
  descricao: "Pizza com calabresa, queijo e cebola.",
  imagem:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
},
    {
  nome: "portuguesa",
  preco: 39.9,
  descricao: "Pizza com calabresa, queijo e cebola.",
  imagem:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
},
    {
  nome: "hamburguer",
  preco: 39.9,
  descricao: "Pizza com calabresa, queijo e cebola.",
  imagem:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
},
  ];

  const adicionarCarrinho = (pizza) => {
    setCarrinho([...carrinho, pizza]);
  };

  const total = carrinho.reduce((total, item) => total + item.preco, 0);

  return (
    <div
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      {/* TOPO */}
      <header
        style={{
          background: "linear-gradient(to right, red, orange)",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🍕 Império Pizza </h1>

        <div>
          🛒 {carrinho.length}
        </div>
      </header>

      {/* BANNER */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
        }}
      >
        <h2 style={{ fontSize: "50px", color: "yellow" }}>
          A Melhor Pizza da Cidade
        </h2>

        <p style={{ fontSize: window.innerWidth < 768 ? "16px" : "22px", }}>
          Massa crocante e muito recheio.
        </p>

        <a
         href="#bebidas"
         style={{
         display: "inline-block",
         marginTop: "20px",
         backgroundColor: "orange",
         color: "black",
         padding: "12px 20px",
         borderRadius: "10px",
         textDecoration: "none",
         fontWeight: "bold",
         }}
>
        Ver Bebidas 🥤
</a>

      </section>

      {/* CARDÁPIO */}
      <section style={{ padding: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: window.innerWidth < 768 ? "18px" : "26px",
            color: "yellow",
            imagem:
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
          }}
        >
          Cardápio
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
  window.innerWidth < 768
    ? "repeat(2, 1fr)"
    : "repeat(auto-fit,minmax(250px,1fr))", 
            gap: "10px",
            marginTop: "20px",
          }}
        >
          {pizzas.map((pizza, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <img
  src={pizza.imagem}
  alt={pizza.nome}
  style={{
    width: "100%",
    height: window.innerWidth < 768 ? "110px" : "250px",
    objectFit: "cover",
    borderRadius: "20px 20px 0 0",
  }}
/>

              <div style={{ padding: "10px" }}>
                <h3 style={{ fontSize: "14px", color: "orange" }}>
                  {pizza.nome}
                </h3>
              <p
                style={{
                color: "#ccc",
                fontSize: "13px",
                marginTop: "5px",
              }}
              >
              {pizza.descricao}
              </p>
                

                <p style={{ fontSize: "15px", color: "yellow" }}>
                  R$ {pizza.preco.toFixed(2)}
                </p>

                <button
                  onClick={() => adicionarCarrinho(pizza)}
                  style={{
                    width: "100%",
                    padding: "15px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "18px",
                    cursor: "pointer",
                  }}
                >
                  Comprar
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

           <section
  id="bebidas"
  style={{
    padding: "40px 20px",
    backgroundColor: "#181818",
    imagem:
    "https://images.tcdn.com.br/img/img_prod/1082210/coca_coca_2l_pack_8_1_1_2380938e61e93125191ebc11919fc1d7.png",
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "cyan",
      fontSize: "35px",
      imagem:
    "https://i.pinimg.com/736x/43/a5/e0/43a5e054595bee9a2ee05a20f68c281a.jpg",
    }}
  >
    🥤 Bebidas
  </h2>

  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "15px",
      marginTop: "30px",
    }}
  >
    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h3>Coca-Cola</h3>
      <p>2 Litros</p>
      <strong>R$ 12,00</strong>
    </div>

    <div
      style={{
        backgroundColor: "#222",
        padding: "20px",
        borderRadius: "15px",
        textAlign: "center",
      }}
    >
      <h3>Guaraná</h3>
      <p>2 Litros</p>
      <strong>R$ 10,00</strong>
    </div>
  </div>
</section>

      {/* CARRINHO */}
      <section
        style={{
          padding: "40px",
          backgroundColor: "#1a1a1a",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "yellow",
            fontSize: "40px",
          }}
        >
          🛒 Carrinho
        </h2>

        {carrinho.length === 0 ? (
          <p style={{ textAlign: "center" }}>
            Seu carrinho está vazio.
          </p>
        ) : (
          <div style={{ maxWidth: "700px", margin: "0 auto" }}>
            {carrinho.map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#222",
                  padding: "20px",
                  marginTop: "15px",
                  borderRadius: "10px",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <span>{item.nome}</span>

                <span>R$ {item.preco.toFixed(2)}</span>
              </div>
            ))}

            <h3
              style={{
                textAlign: "right",
                marginTop: "20px",
                color: "yellow",
              }}
            >
              Total: R$ {total.toFixed(2)}
              <a
  href={`https://wa.me/5581995353406?text=${encodeURIComponent(
    `🍕 NOVO PEDIDO\n\n${carrinho
      .map(
        (item, index) =>
          `${index + 1}️⃣ ${item.nome} - R$ ${item.preco.toFixed(2)}`
      )
      .join("\n")}\n\n💰 Total: R$ ${total.toFixed(2)}`
  )}`}
  target="_blank"
  rel="noreferrer"
  style={{
    display: "block",
    width: "100%",
    marginTop: "20px",
    backgroundColor: "green",
    color: "white",
    padding: "15px",
    borderRadius: "12px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "18px",
    fontWeight: "bold",
  }}
>
  Finalizar Pedido
</a>
            </h3>
          </div>
        )}
      </section>
    </div>
  );
}