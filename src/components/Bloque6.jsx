import { Card3 } from "./Card3";
export const Bloque6 = () => {
  return (
    <div id="servicios">
      <h2 className="font-bold text-2xl text-principal text-center">
        ¿Cómo trabajamos?
      </h2>
      <div className="lg:flex lg:flex-row lg:items-center lg:content-center text-center my-10">
        <Card3
          icon={'fa-solid fa-chart-simple'}
          text={
            'Hacemos un diagnóstico de tu empresa para entender qué vendes, quiénes son tus clientes, qué les gusta de tu producto o servicio y qué puede estar impidiendo que tengas nuevos clientes o que los mantengas.'
          }
        />
        <Card3
          icon={'fa-solid fa-bullseye'}
          text={
            'Creamos una estrategia basada en el comportamiento de compra de tus usuarios para guiarlos paso a paso hasta finalizar su compra.'
          }
        />
        <Card3
          icon={'fa-solid fa-comments-dollar'}
          text={
            'Desarrollamos los mensajes, anuncios y páginas de aterrizaje para atraer nuevos clientes o prospectos.'
          }
        />
        <Card3
          icon={'fa-solid fa-filter-circle-dollar'}
          text={
            'Hacemos pruebas para ver qué funciona y qué no y así tomar decisiones basadas en datos, no en suposiciones, con el objetivo de optimizar tus resultados y que tu dinero se invierta de manera efectiva.'
          }
        />
      </div>
    </div>
  );
}
