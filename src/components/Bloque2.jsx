import { Card } from "./Card";
export const Bloque2 = () => {
  return (
    <div className=" bg-principal text-text py-5 text-center text-lg">
      <h2 className="font-bold text-3xl pb-5">Permitenos Presentarnos</h2>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        <Card
          title={'Jesus Rojas'}
          text={'Marketero especializado en creación de campañas en redes sociales y embudos de venta.'}
        />
        <Card
          title={'Diego Beristain'}
          text={'Desarrollador senior de sitios web, landing pages y chatbots para agilizar la operación de tu negocio.'}
        />
      </div>
    </div>
  );
}
