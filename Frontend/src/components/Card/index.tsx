"use client";
import Image from "next/image";
import { ISala } from "@/interfaces";
import { useRouter } from "next/navigation";
import 'bootstrap/dist/css/bootstrap.min.css';

export const Card = (props: ISala) => {
  const router = useRouter();

  return (
    <div className="card text-center p-3" style={{ maxWidth: "18rem", margin: "18px" }}>
      <h3>{props.nome}</h3>
      <Image
        src={`http://127.0.0.1:8000/storage/${props.foto}`}
        alt={props.nome}
        width={250}
        height={200}
        className="card-img-top"
      />
      <h5 className="text-primary mt-2">{props.tipo}</h5>
      <p
        className={`font-weight-bold mt-2 ${getStatusClass(props.status)}`}
        style={{ textTransform: "capitalize" }}
      >
        {props.status}
      </p>
      <button
        onClick={() => {
          router.push("/sala/" + props.id);
        }}
        className="btn btn-dark mt-3 w-100"
      >
        Detalhes
      </button>
    </div>
  );
};

// Função para determinar a cor do status
const getStatusClass = (status: string) => {
  switch (status.toLowerCase()) {
    case "disponível":
      return "text-success";
    case "reservado":
      return "text-warning";
    case "em manutenção":
      return "text-danger";
    default:
      return "text-dark";
  }
};
