import { Boton } from './Boton';
import { Scene } from './Scene';
import { TorusModel } from './models/TorusModel';

export const Bloque5 = () => {
  return (
    <div className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center my-10 gap-5">
      <div className="flex flex-col items-center lg:items-end justify-center text-center">
        <h3 className="text-3xl text-principal">
          El cambio es el resultado de la presión insuperable del mercado
        </h3>
        <span className="italic text-xl text-principal">Ted Colne</span>
        <h4 className="mb-3">¿Estás listo para el cambio?</h4>
        <Boton btn={'Contactanos'} />
      </div>
      <div>
        <Scene>
          <TorusModel />
        </Scene>
      </div>
    </div>
  );
};
