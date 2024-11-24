"use client";

import { Menu } from "@/components/Menu";
import { ISala } from "@/interfaces";
import axios from "axios";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from "@/components/Footer";

export default function Sala({ params }: { params: { id: string } }) {
  const [sala, setSala] = useState<ISala>();

  useEffect(() => {
    console.log(process.env.APP_URL + "/ambientes");
    axios
      .get(process.env.APP_URL + "/ambientes", {
        // /salas?id=132
        params: {
          id: params.id,
        },
      })
      .then((dados) => {
        setSala(dados.data[0]);
      })
      .catch((erro) => {
        console.log("erro");
        console.log(erro);
      });
  }, [params]);

  return (
    <>
      <Menu />
      <div className="container mt-4 mb-5" style={{ paddingLeft: "6%", paddingRight: "6%" }}>
        {sala ? (
          <>
            <h1>Sala</h1>
            <div className="row">
              <div className="col-md-4">
                {/* <img
                  style={{
                    width: '100%'
                  }}
                  src={`/imagens/${sala.imagemg}`}
                /> */}
              </div>
              <div className="col-md-6">
                <h3>{sala.nome}</h3>
                <p style={{ textDecoration: "line-through" }}>
                  R$ {sala.tipo}
                </p>
                <p style={{ color: "red", fontWeight: "bold" }}>
                  R$ {sala.status}
                </p>

                <form>
                  <input
                    type="number"
                    name="quantidade"
                    defaultValue={1}
                    min="1"
                    required
                    className="form-control mb-3"
                  />

                  <button type="submit" className="btn btn-success w-100">
                    Adicionar ao carrinho
                  </button>
                </form>
              </div>
            </div>
          </>
        ) : (
          <h2>Nenhuma sala encontrada :/</h2>
        )}
      </div>
      <Footer />
    </>
  );
}
