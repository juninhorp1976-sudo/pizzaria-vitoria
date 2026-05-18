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
    
  }}
>
  <h2
    style={{
      textAlign: "center",
      color: "cyan",
      fontSize: "35px",

    }}
  >
    🥤 Bebidas
  </h2>

  <div>.</div>
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(2,1fr)",
      gap: "15px",
      marginTop: "30px",
    }}
  
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
        <div
  style={{
    backgroundColor: "#222",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
  }}
>
  <img
    src="https://images.tcdn.com.br/img/img_prod/1082210/coca_coca_2l_pack_8_1_1_2380938e61e93125191ebc11919fc1d7.png"
    alt="Coca-Cola"
    style={{
      width: "100%",
      height: "120px",
      objectFit: "cover",
      borderRadius: "10px",
      marginBottom: "10px",
    }}
  />

  <h3>Coca-Cola</h3>
  <p>2 Litros</p>
  <strong>R$ 12,00</strong>
</div>

  <img
  src="data:image/webp;base64,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"
  alt="Guaraná"
  style={{
    width: "100%",
    height: "120px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  }}
/>

      <h3>Guaraná</h3>
      <p>2 Litros</p>
      <strong>R$ 10,00</strong>
   
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