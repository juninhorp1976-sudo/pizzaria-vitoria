import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);

  const pizzas = [
    {
      nome: "Calabresa",
      preco: 39.9,
      imagem:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Frango com Catupiry",
      preco: 44.9,
      imagem:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Portuguesa",
      preco: 49.9,
      imagem:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Hambúrguer",
      preco: 15.9,
      imagem:
        "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg",
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
        <h1>🍕 Pizzaria Vitória</h1>

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

        <p style={{ fontSize: "22px" }}>
          Massa crocante e muito recheio.
        </p>
      </section>

      {/* CARDÁPIO */}
      <section style={{ padding: "40px" }}>
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            color: "yellow",
          }}
        >
          Cardápio
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "30px",
            marginTop: "40px",
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
    height: "220px",
    objectFit: "cover",
    borderRadius: "20px 20px 0 0",
  }}
/>

              <div style={{ padding: "20px" }}>
                <h3 style={{ fontSize: "30px", color: "orange" }}>
                  {pizza.nome}
                </h3>

                <p style={{ fontSize: "25px", color: "yellow" }}>
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
  href={`https://wa.me/5581999999999?text=Olá,%20quero%20finalizar%20meu%20pedido`}
  target="_blank"
  rel="noreferrer"
  style={{
    display: "block",
    width: "100%",
    marginTop: "20px",
    backgroundColor: "green",
    color: "white",
    padding: "20px",
    borderRadius: "15px",
    textAlign: "center",
    textDecoration: "none",
    fontSize: "25px",
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