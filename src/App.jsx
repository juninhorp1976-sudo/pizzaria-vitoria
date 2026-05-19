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

  const removerCarrinho = (indexRemover) => {
  setCarrinho(carrinho.filter((_, index) => index !== indexRemover));
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
      >
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
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop"
    alt="Coca-Cola"
    style={{
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3>Coca-Cola</h3>
  <p>2 Litros</p>
  <strong>R$ 12,00</strong>

  <button
    onClick={() =>
      adicionarCarrinho({
        nome: "Coca-Cola 2L",
        preco: 12.0,
      })
    }
    style={{
      width: "100%",
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Comprar
  </button>
</div>

    <div
  style={{
    backgroundColor: "#222",
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
  }}
>
  <img
    src="https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1200&auto=format&fit=crop"
    alt="Guaraná"
    style={{
      width: "100%",
      height: "250px",
      objectFit: "cover",
      borderRadius: "10px",
    }}
  />

  <h3>Guaraná</h3>
  <p>2 Litros</p>
  <strong>R$ 10,00</strong>

  <button
    onClick={() =>
      adicionarCarrinho({
        nome: "Guaraná 2L",
        preco: 10.0,
      })
    }
    style={{
      width: "100%",
      marginTop: "10px",
      padding: "10px",
      backgroundColor: "green",
      color: "white",
      border: "none",
      borderRadius: "10px",
      cursor: "pointer",
      fontWeight: "bold",
    }}
  >
    Comprar
  </button>
</div>
  </div>
</section>
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

                <div>
  <span>R$ {item.preco.toFixed(2)}</span>

  <button
  onClick={() => removerCarrinho(index)}
  style={{
    marginLeft: "10px",
    backgroundColor: "red",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "6px 10px",
    cursor: "pointer",
  }}
>
  remover
</button>
</div>
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