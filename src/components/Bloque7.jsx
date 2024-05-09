import { Card4 } from "./Card4";
export const Bloque7 = () => {
  return (
    <>
      <h2 className="font-roboto font-bold text-2xl text-principal text-center mt-10 mb-5">
        ¿Para qué tipo de negocios podemos trabajar?
      </h2>
      <div className="bg-principal text-text py-5 ">
        <div className="flex lg:flex-row flex-wrap justify-center lg:flex lg:flex-col lg:items-center lg:gap-8">
          <Card4
            title="Negocios del sector educativo"
            body="Ayudamos a las primarias, secundarias, preparatorias, universidades, escuelas de idiomas, escuelas de manejo y academias de cualquier tipo a obtener más prospectos."
            icon="fa-solid fa-school"
          />
          <Card4
            title="Negocios del sector salud"
            body="Ayudamos a las clínicas o médicos especialistas a obtener más pacientes."
            icon="fa-solid fa-hospital"
          />
          <Card4
            title="Negocios de comercio minorista"
            body="Ayudamos a las marcas de ropa, juguetes, zapatos, artículos deportivos, perfumerías, etc a incrementar sus ventas."
            icon="fa-solid fa-bag-shopping"
          />
          <Card4
            title="Negocios de la industria automotriz"
            body="Ayudamos a las agencias de autos a obtener más prospectos."
            icon="fa-solid fa-car-rear"
          />
        </div>
      </div>
    </>
  );
}
