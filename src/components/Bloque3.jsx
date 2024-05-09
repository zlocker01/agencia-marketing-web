import { Boton } from "./Boton"
export const Bloque3 = () => {
  return (
    <div className="text-center py-5">
      <h2 className="font-roboto font-bold text-2xl text-principal">
        Somos tu Agencia ideal si...
      </h2>
      <ul className="font-nunito py-5 mb-5 flex flex-col justify-center items-center gap-5">
        <li>
          <svg
            className="w-full h-10 text-principal"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="2"
              d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
            ></path>
          </svg>
          Buscas una agencia enfocada en generar prospectos para tu negocio.
        </li>
        <li>
          <i className="fa-regular fa-face-angry w-full h-10 text-principal text-3xl"></i>
          No te gusta perder tiempo revisando publicaciones.
        </li>
        <li>
          <svg
            className="w-full h-10 text-principal"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              fillRule="evenodd"
              d="M20.337 3.664c.213.212.354.486.404.782.294 1.711.657 5.195-.906 6.76-1.77 1.768-8.485 5.517-10.611 6.683a.987.987 0 0 1-1.176-.173l-.882-.88-.877-.884a.988.988 0 0 1-.173-1.177c1.165-2.126 4.913-8.841 6.682-10.611 1.562-1.563 5.046-1.198 6.757-.904.296.05.57.191.782.404ZM5.407 7.576l4-.341-2.69 4.48-2.857-.334a.996.996 0 0 1-.565-1.694l2.112-2.111Zm11.357 7.02-.34 4-2.111 2.113a.996.996 0 0 1-1.69-.565l-.422-2.807 4.563-2.74Zm.84-6.21a1.99 1.99 0 1 1-3.98 0 1.99 1.99 0 0 1 3.98 0Z"
              clipRule="evenodd"
            ></path>
          </svg>
          Estás dispuesto a intentar cosas diferentes para lograr mejores
          resultados.
        </li>
        <li>
          <svg
            className="w-full h-10 text-principal"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 4.5V19a1 1 0 0 0 1 1h15M7 10l4 4 4-4 5 5m0 0h-3.207M20 15v-3.207"
            ></path>
          </svg>
          Has trabajado con otras agencias y no te dieron los resultados que
          esperabas.
        </li>
        <Boton btn="Contactanos" />
      </ul>
    </div>
  );
}
