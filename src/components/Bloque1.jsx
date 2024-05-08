import { Boton } from './Boton';
import { Scene } from './Scene';
import { SphereModel } from './models/SphereModel';

export const Bloque1 = () => {
  return (
    <div className=" py-10 lg:py-28 flex flex-col lg:flex-row-reverse justify-center items-center gap-5 text-center text-lg">
        <Scene>
          <SphereModel />
        </Scene>
      <div>
        <div className="lg:flex flex-col gap-2 mb-5">
          <p>
            ¿Estás cansado de esas agencias que te hacen perder el tiempo
            revisando publicaciones?
          </p>
          <p>
            ¿Tu agencia solo te da pretextos de por qué no está generando más
            prospectos o ventas para tu negocio?
          </p>
          <p>Llegaste al lugar indicado.</p>
          <p>
            Da clic aquí y agenda un diagnóstico de marketing totalmente{' '}
            <span className="font-bold text-secondary">GRATIS</span>
          </p>
        </div>
      </div>
        <Boton btn="Agendar Diagnóstico" />
    </div>
  );
};
