import { Card2 } from "./Card2"
export const Bloque4 = () => {
  return (
    <div className="text-center py-5 w-full">
      <h2 className="font-roboto font-bold text-2xl text-principal">
        ¿Por qué elegirnos como tu agencia?
      </h2>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-4 m-5">
        <Card2
          text={
            'No nos interesa llenarnos de clientes, nos interesa darle la atención que se merece a cada uno de nuestros clientes.'
          }
        />
        <Card2
          text={
            'Seremos tu departamento de marketing por menos de lo que cobraría un diseñador, un marketero y un desarrollador web (Y mejor aún sin que tengas que darnos prestaciones, aguinaldo, utilidades, etc.)'
          }
        />
        <Card2
          text={
            'No trabajamos con plazos forzosos, nuestro objetivo es que estés satisfecho con los resultados y trabajemos juntos el mayor tiempo posible.'
          }
        />
        <Card2
          text={
            'Hablamos tu mismo idioma, no somos de dar choros y decirte que hubo mil likes, 1,000 clics en tus publicaciones, te decimos cuánto se vendió.'
          }
        />
      </div>
    </div>
  );
}
