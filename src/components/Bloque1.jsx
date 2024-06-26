import { Boton } from './Boton';
import { Scene } from './Scene';
import { SphereModel } from './models/SphereModel';

export const Bloque1 = () => {
  return (
    <div className="font-nunito py-10 lg:py-28 flex flex-col lg:flex-row-reverse justify-center items-center gap-5 text-center text-lg">
      <div>
        <Scene>
          <SphereModel />
        </Scene>
      </div>
      <div className="lg:flex flex-col gap-2 mb-5 text-center content-center items-center">
        <p>
          ¿Estás cansado de esas agencias que te hacen perder el tiempo
          revisando publicaciones?
        </p>
        <p>
          ¿Tu agencia solo te da pretextos de por qué no está generando más
          prospectos o ventas para tu negocio?
        </p>
        <p>Llegaste al lugar indicado.</p>
        <p className='mb-3'>
          Da clic aquí y agenda un diagnóstico de marketing totalmente{' '}
          <span className="font-roboto font-bold text-secondary">GRATIS</span>
        </p>
        <Boton btn="Agendar Diagnóstico" />
      </div>
    </div>
  );
};
