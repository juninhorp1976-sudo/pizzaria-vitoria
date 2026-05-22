import { useState } from "react";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [abrirCarrinho, setAbrirCarrinho] = useState(false);
  const [mensagemCarrinho, setMensagemCarrinho] = useState("");
  const [novoNome, setNovoNome] = useState("");
  const [novoPreco, setNovoPreco] = useState("");
  const [novaImagem, setNovaImagem] = useState("");
  const [logadoAdmin, setLogadoAdmin] = useState(false);
  const [senhaDigitada, setSenhaDigitada] = useState("");
  const [cargo, setCargo] = useState("Membro");
  const senhaAdmin = "1976";
  const [abrirAdmin, setAbrirAdmin] = useState(false);
  const [nomeCliente, setNomeCliente] = useState("");
  const [endereco, setEndereco] = useState("");
  const [pagamento, setPagamento] = useState("");

  const [produtos, setProdutos] = useState([
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
  ]);

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
  <div
    style={{
      display: "flex",
      alignItems: "center",
    }}
  >
    <button
  onClick={(e) => {
    e.stopPropagation();
    setAbrirAdmin(true);
  }}
  style={{
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    backgroundColor: "transparent",
    color: "transparent",
    border: "none",
    cursor: "pointer",
  }}
>
  ⚙️
</button>

    <h1
      style={{
        margin: 0,
        marginLeft: "10px",
        fontSize: "32px",
        fontWeight: "bold",
      }}
    >
      🍕 Império Pizza
    </h1>
  </div>

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
      width: "92vw",
      maxWidth: "390px",
      maxHeight: "520px",
      overflowY: "auto",
      background: "linear-gradient(180deg, #2b2b2b, #111)",
      padding: "20px",
      borderRadius: "25px",
      zIndex: 9999,
      boxSizing: "border-box",
      boxShadow: "0 0 30px rgba(0,0,0,0.8)",
      border: "1px solid orange",
    }}
  >
    <button
      onClick={() => setAbrirCarrinho(false)}
      style={{
        float: "right",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "50%",
        width: "32px",
        height: "32px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      X
    </button>

    <h2 style={{ color: "orange", marginTop: 0 }}>
      🛒 Seu Carrinho
    </h2>

    {carrinho.length === 0 ? (
      <p style={{ color: "#ccc" }}>Seu carrinho está vazio.</p>
    ) : (
      <>
        {carrinho.map((item, index) => (
         <div
  key={index}
  style={{
    backgroundColor: "#1f1f1f",
    padding: "12px",
    marginTop: "12px",
    borderRadius: "15px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    border: "1px solid #333",
  }}
>
  <img
    src={item.imagem}
    alt={item.nome}
    style={{
      width: "70px",
      height: "70px",
      objectFit: "cover",
      borderRadius: "12px",
    }}
  />

  <div style={{ flex: 1 }}>
    <strong style={{ color: "white" }}>
      {item.nome}
    </strong>

    <p style={{ color: "yellow", margin: "5px 0" }}>
      R$ {item.preco.toFixed(2)}
    </p>

    <button
      onClick={() => removerCarrinho(index)}
      style={{
        backgroundColor: "#ff3333",
        color: "white",
        border: "none",
        borderRadius: "10px",
        padding: "8px 10px",
        cursor: "pointer",
        fontWeight: "bold",
      }}
    >
      remover
    </button>
  </div>
</div>
        ))}

        <h3
          style={{
            color: "yellow",
            textAlign: "center",
            backgroundColor: "#222",
            padding: "12px",
            borderRadius: "15px",
          }}
        >
          Total: R$ {total.toFixed(2)}
        </h3>
<input
  type="text"
  placeholder="Seu nome"
  value={nomeCliente}
  onChange={(e) => setNomeCliente(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
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
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    boxSizing: "border-box",
  }}
/>

<select
  value={pagamento}
  onChange={(e) => setPagamento(e.target.value)}
  style={{
    width: "100%",
    padding: "12px",
    marginTop: "10px",
    borderRadius: "10px",
    border: "none",
    boxSizing: "border-box",
  }}
>
  <option value="">Forma de pagamento</option>
  <option value="Pix">Pix</option>
  <option value="Cartão">Cartão</option>
  <option value="Dinheiro">Dinheiro</option>
</select>

        {/* Seu nome
            Seu endereço
            Forma de pagamento */}

        <a
  onClick={(e) => {
    if (nomeCliente.trim() === "") {
      e.preventDefault();
      alert("Digite seu nome para finalizar o pedido!");
      return;
    }

    if (endereco.trim() === "") {
      e.preventDefault();
      alert("Digite seu endereço para finalizar o pedido!");
      return;
    }

    if (pagamento.trim() === "") {
      e.preventDefault();
      alert("Escolha a forma de pagamento!");
      return;
    }
  }}
  href={`https://wa.me/5581995353406?text=${mensagemWhatsApp}`}
  target="_blank"
  rel="noreferrer"
  style={{
    display: "block",
    marginTop: "15px",
    background: "linear-gradient(to right, green, limegreen)",
    color: "white",
    padding: "15px",
    borderRadius: "15px",
    textAlign: "center",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
  }}
>
  ✅ Finalizar Pedido
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
    ⏰ Voltamos às 16:50h.
  </div>
)}
      </section>

      <section style={{ padding: "20px" }}>
  <h2 style={{ textAlign: "center", color: "yellow" }}>
    Cardápio
  </h2>

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
          <h3 style={{ color: "orange" }}>
            {produto.nome}
          </h3>

          <p>{produto.descricao}</p>

          <strong style={{ color: "yellow" }}>
            R$ {produto.preco.toFixed(2)}
          </strong>

          <button
            onClick={() => {
              adicionarCarrinho(produto);

              setMensagemCarrinho(
                "✅ Adicionado ao carrinho"
              );

              setTimeout(() => {
                setMensagemCarrinho("");
              }, 1800);
            }}
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

          {cargo === "Dono" && (
            <button
              onClick={() => {
                const novosProdutos = produtos.filter(
                  (_, i) => i !== index
                );

                setProdutos(novosProdutos);
              }}
              style={{
                width: "100%",
                marginTop: "8px",
                padding: "10px",
                backgroundColor: "black",
                color: "white",
                border: "1px solid red",
                borderRadius: "10px",
                cursor: "pointer",
              }}
            >
              🗑️ Remover Produto
            </button>
          )}
        </div>
      </div>
    ))}
  </div>
</section>

{mensagemCarrinho && (
  <div
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      backgroundColor: "rgba(0,0,0,0.85)",
      color: "white",
      padding: "20px 35px",
      borderRadius: "18px",
      fontSize: "20px",
      fontWeight: "bold",
      zIndex: 999999,
      boxShadow: "0 0 30px rgba(0,0,0,0.6)",
      
    }}
  >
    {mensagemCarrinho}
  </div>
)}


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
                  onClick={() => {
  adicionarCarrinho(bebida);

  setMensagemCarrinho("✅ Adicionado ao carrinho");

  setTimeout(() => {
    setMensagemCarrinho("");
  }, 1800);
}}
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



      {abrirAdmin && (
  <div
    onClick={(e) => e.stopPropagation()}
    style={{
      position: "fixed",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "linear-gradient(180deg, #2b2b2b, #111)",
      padding: "25px",
      borderRadius: "22px",
      width: "92vw",
      maxWidth: "360px",
      zIndex: 99999,
      boxSizing: "border-box",
      boxShadow: "0 0 30px black",
      border: "1px solid orange",
      textAlign: "center",
    }}
  >
    <button
      onClick={() => setAbrirAdmin(false)}
      style={{
        float: "right",
        backgroundColor: "red",
        color: "white",
        border: "none",
        borderRadius: "8px",
        padding: "6px 10px",
        cursor: "pointer",
      }}
    >
      X
    </button>

    {!logadoAdmin ? (
  <>
    <h2 style={{ color: "orange" }}>🔐 Login Admin</h2>

    <p style={{ color: "#ccc" }}>
      Digite a senha para acessar o painel.
    </p>

    <input
      type="password"
      placeholder="Senha admin"
      value={senhaDigitada}
      onChange={(e) => setSenhaDigitada(e.target.value)}
      style={{
        width: "100%",
        padding: "14px",
        marginTop: "15px",
        borderRadius: "12px",
        border: "none",
        boxSizing: "border-box",
      }}
    />
        <button
          onClick={() => {
            if (senhaDigitada === senhaAdmin) {
              setLogadoAdmin(true);
              setCargo("Dono");
              setSenhaDigitada("");
            } else {
              alert("Senha incorreta");
            }
          }}
          style={{
            width: "100%",
            padding: "14px",
            marginTop: "15px",
            background: "linear-gradient(to right, orange, yellow)",
            border: "none",
            borderRadius: "12px",
            color: "black",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Entrar
        </button>
      </>
    ) : (
      <>
        <h2 style={{ color: "orange" }}>⚙️ Painel Admin</h2>
        <p style={{ color: "white" }}>
          Cargo atual: <strong style={{ color: "orange" }}>{cargo}</strong>
        </p>

        
        <button
  onClick={() => {
    const novoProduto = {
      nome: novoNome,
      preco: parseFloat(novoPreco),
      descricao: "Novo produto",
      imagem: novaImagem,
    };

    setProdutos([...produtos, novoProduto]);

    setNovoNome("");
    setNovoPreco("");
    setNovaImagem("");

    alert("Produto adicionado!");
  }}  
>
  ➕ Adicionar Produto
</button>

        <button
          onClick={() => setLogadoAdmin(false)}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "10px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "12px",
          }}
        >
          Sair
        </button>
      </>
    )}
  </div>
)}
      </div>
  );
}



