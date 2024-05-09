import { Scene } from './Scene';
import { DodecaModel } from './models/DodecaModel';

/* eslint-disable react/prop-types */
export const Hero = ({ title, body }) => {
  return (
    <section className="font-roboto bg-principal text-text h-dvh">
      <div className="hero container-fluid text-center">
        <div className="flex justify-center content-center py-20">
          <Scene>
            <DodecaModel />
          </Scene>
        </div>
        <h2 className="font-bold text-3xl">{title}</h2>
        <h3 className="text-2xl">{body}</h3>
      </div>
    </section>
  );
};
