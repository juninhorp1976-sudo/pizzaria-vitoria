import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [abrirCarrinho, setAbrirCarrinho] = useState(false);
  const [abrirAdmin, setAbrirAdmin] = useState(false);
  const [nomeCliente, setNomeCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");

  const produtos = [
    {
      nome: "Calabresa",
      preco: 39.9,
      descricao: "Pizza com calabresa, queijo e cebola.",
      imagem:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Frango com Catupiry",
      preco: 44.9,
      descricao: "Pizza com frango, catupiry e queijo.",
      imagem:
        "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Portuguesa",
      preco: 49.9,
      descricao: "Pizza com presunto, ovo, queijo e cebola.",
      imagem:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Hambúrguer",
      preco: 15.9,
      descricao: "Hambúrguer com queijo e molho especial.",
      imagem:
        "https://moinhoglobo.com.br/wp-content/uploads/2019/05/16-hamburguer.jpeg",
    },
  ];

  const bebidas = [
    {
      nome: "Coca-Cola 2L",
      preco: 12,
      descricao: "Refrigerante gelado.",
      imagem:
        "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=1200&auto=format&fit=crop",
    },
    {
      nome: "Guaraná 2L",
      preco: 10,
      descricao: "Guaraná gelado.",
      imagem:
        "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  const adicionarCarrinho = (item) => {
    setCarrinho([...carrinho, item]);
  };

  const removerCarrinho = (indexRemover) => {
    setCarrinho(carrinho.filter((_, index) => index !== indexRemover));
  };

  const total = carrinho.reduce((total, item) => total + item.preco, 0);

  const mensagemWhatsApp = encodeURIComponent(
    `🍕 NOVO PEDIDO

👤 Nome: ${nomeCliente}
📍 Endereço: ${endereco}
💳 Pagamento: ${pagamento}

🛒 Pedido:
${carrinho
  .map((item, index) => `${index + 1}. ${item.nome} - R$ ${item.preco.toFixed(2)}`)
  .join("\n")}

💰 Total: R$ ${total.toFixed(2)}`
  );

  return (
    <div
      onClick={() => setAbrirCarrinho(false)}
      style={{
        backgroundColor: "#111",
        minHeight: "100vh",
        color: "white",
        fontFamily: "Arial",
      }}
    >
      <header
        style={{
          background: "linear-gradient(to right, red, orange)",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>🍕 Império Pizza</h1>

        <button
          onClick={(e) => {
            e.stopPropagation();
            setAbrirCarrinho(!abrirCarrinho);
          }}
          style={{
            background: "transparent",
            border: "none",
            color: "white",
            fontSize: "28px",
            cursor: "pointer",
            position: "relative",
          }}
        >
          🛒
          <span
            style={{
              position: "absolute",
              top: "-8px",
              right: "-12px",
              backgroundColor: "red",
              color: "white",
              borderRadius: "50%",
              padding: "2px 7px",
              fontSize: "12px",
              fontWeight: "bold",
            }}
          >
            {carrinho.length}
          </span>
        </button>
      </header>

      {abrirCarrinho && (
        <section
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "fixed",
            top: "80px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "90vw",
            maxWidth: "360px",
            maxHeight: "450px",
            overflowY: "auto",
            backgroundColor: "#1a1a1a",
            padding: "20px",
            borderRadius: "15px",
            zIndex: 9999,
            boxSizing: "border-box",
            boxShadow: "0 0 20px black",
          }}
        >
          <button
            onClick={() => setAbrirCarrinho(false)}
            style={{
              float: "right",
              background: "red",
              color: "white",
              border: "none",
              borderRadius: "8px",
              padding: "5px 8px",
              cursor: "pointer",
            }}
          >
            X
          </button>

          <h2 style={{ color: "yellow" }}>Carrinho</h2>

          {carrinho.length === 0 ? (
            <p>Seu carrinho está vazio.</p>
          ) : (
            <>
              {carrinho.map((item, index) => (
                <div
                  key={index}
                  style={{
                    backgroundColor: "#222",
                    padding: "10px",
                    marginTop: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <p>{item.nome}</p>
                  <p>R$ {item.preco.toFixed(2)}</p>

                  <button
                    onClick={() => removerCarrinho(index)}
                    style={{
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
              ))}

              <h3 style={{ color: "yellow" }}>
                Total: R$ {total.toFixed(2)}
              </h3>

              <input
                type="text"
                placeholder="Seu nome"
                value={nomeCliente}
                onChange={(e) => setNomeCliente(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  border: "none",
                  boxSizing: "border-box",
                }}
              />

              <input
                type="text"
                placeholder="Seu endereço"
                value={endereco}
                onChange={(e) => setEndereco(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  border: "none",
                  boxSizing: "border-box",
                }}
              />

              <select
                value={pagamento}
                onChange={(e) => setPagamento(e.target.value)}
                style={{
                  width: "100%",
                  padding: "10px",
                  marginTop: "10px",
                  borderRadius: "8px",
                  border: "none",
                  boxSizing: "border-box",
                }}
              >
                <option value="">Forma de pagamento</option>
                <option value="Pix">Pix</option>
                <option value="Cartão">Cartão</option>
                <option value="Dinheiro">Dinheiro</option>
              </select>

              <a
                href={`https://wa.me/5581995353406?text=${mensagemWhatsApp}`}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  marginTop: "15px",
                  backgroundColor: "green",
                  color: "white",
                  padding: "15px",
                  borderRadius: "10px",
                  textAlign: "center",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                Finalizar Pedido
              </a>
            </>
          )}
        </section>
      )}

      <section style={{ textAlign: "center", padding: "80px 20px" }}>
        <h2 style={{ fontSize: "40px", color: "yellow" }}>
          A Melhor Pizza da Cidade
        </h2>
        <p>Massa crocante e muito recheio.</p>
        {new Date().getHours() < 17 && (
  <div
    style={{
      backgroundColor: "red",
      color: "white",
      padding: "15px",
      borderRadius: "10px",
      marginTop: "20px",
      fontWeight: "bold",
      maxWidth: "400px",
      marginInline: "auto",
    }}
  >
    🚫 Estamos fechados no momento.
    <br />
    ⏰ Voltamos às 17h.
  </div>
)}
      </section>

      <section style={{ padding: "20px" }}>
        <h2 style={{ textAlign: "center", color: "yellow" }}>Cardápio</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {produtos.map((produto, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={produto.imagem}
                alt={produto.nome}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3 style={{ color: "orange" }}>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <strong style={{ color: "yellow" }}>
                  R$ {produto.preco.toFixed(2)}
                </strong>

                <button
                  onClick={() => adicionarCarrinho(produto)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "red",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
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

      <section style={{ padding: "20px", backgroundColor: "#181818" }}>
        <h2 style={{ textAlign: "center", color: "cyan" }}>🥤 Bebidas</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "15px",
          }}
        >
          {bebidas.map((bebida, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#222",
                borderRadius: "15px",
                overflow: "hidden",
              }}
            >
              <img
                src={bebida.imagem}
                alt={bebida.nome}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px", textAlign: "center" }}>
                <h3>{bebida.nome}</h3>
                <p>{bebida.descricao}</p>
                <strong style={{ color: "yellow" }}>
                  R$ {bebida.preco.toFixed(2)}
                </strong>

                <button
                  onClick={() => adicionarCarrinho(bebida)}
                  style={{
                    width: "100%",
                    marginTop: "10px",
                    padding: "10px",
                    backgroundColor: "green",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
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
    </div>
  );
}
                  <button
  onClick={() => setAbrirAdmin(!abrirAdmin)}
  style={{
    position: "fixed",
    bottom: "20px",
    left: "20px",
    backgroundColor: "black",
    color: "white",
    border: "2px solid orange",
    padding: "12px",
    borderRadius: "10px",
    cursor: "pointer",
    zIndex: "9999",
  }}
>
  ⚙️ Admin
</button>

{abrirAdmin && (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "#222",
      padding: "20px",
      borderRadius: "15px",
      width: "300px",
      zIndex: "99999",
    }}
  >
    <h2 style={{ color: "orange" }}>⚙️ Painel Admin</h2>

    <input
      placeholder="Nome do produto"
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
      }}
    />

    <input
      placeholder="Preço"
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
      }}
    />

    <input
      placeholder="URL da imagem"
      style={{
        width: "100%",
        padding: "10px",
        marginTop: "10px",
      }}
    />

    <button
      style={{
        width: "100%",
        padding: "12px",
        marginTop: "15px",
        backgroundColor: "orange",
        border: "none",
        color: "black",
        fontWeight: "bold",
        cursor: "pointer",
      }}
    >
      Adicionar Produto
    </button>
  </div>
)}