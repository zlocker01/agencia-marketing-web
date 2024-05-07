import { Card5 } from "./Card5";
import { Boton } from "./Boton";
export const Bloque8 = () => {
  return (
    <>
      <h2 className="font-bold text-2xl text-principal text-center mt-10 mb-5">
        ¿Qué podemos hacer por tu negocio?
      </h2>
      <div className="flex flex-col justify-center items-center mb-10 mx-3">
        <div className="lg:flex justify-between">
          <Card5
            title="Marketing digital"
            body="Hacemos campañas en redes sociales y buscadores, desarrollamos tu  sitio web y páginas de aterrizaje para generar prospectos o clientes y les damos seguimiento vía correo electrónico y Whatsapp para que solo tengas que concentrarte en cerrarlos."
            icon="fa-solid fa-filter-circle-dollar"
          />
          <Card5
            title="Desarrollo web"
            body="Creamos sitios web efectivos con estrategia de posicionamiento orgánico en buscadores y mensajes publicitarios que te ayuden a tener más clientes."
            icon="fa-solid fa-desktop"
          />
          <Card5
            title="Automatizaciones"
            body="Si ya tienes un sitio web y campañas en redes sociales que te dan buenos resultados, podemos automatizar el Whatsapp de tu negocio para que optimices la atención a tus clientes y no tengas que contratar miles de vendedores."
            icon="fa-brands fa-bots"
          />
        </div>
        <Boton btn="Contactanos" />
      </div>
    </>
  );
}
