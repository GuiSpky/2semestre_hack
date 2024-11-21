import { Card } from "@/components/Card";
import { Menu } from "@/components/Menu";
import { ISala } from "@/interfaces";
import axios from "axios";

interface IReqSala {
  data: Array<ISala>
}

export default async function Home() {

  const { data }: IReqSala = await axios.get(
    process.env.NEXT_PUBLIC_API_URL
    +
    '/salas'
  )

  return (
    <>
      <Menu />
      <div
        style={{
          paddingLeft: '6%',
          paddingRight: '6%',
        }}
      >
        <h2>Ambientes</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}
        >
          {
            data.map((sala) => (
              <Card
                key={sala.id}
                id={sala.id}
                imagemg={sala.imagemg}
                nome={sala.nome}
                descricao={sala.descricao}
                status={sala.status}
                tipo={sala.tipo}
              />
            ))
          }
          {/* {
            // exemplooooo
            data.map(() => {
              return()
            })
          } */}


        </div>
        
      </div>
    </>
    
  );
}

