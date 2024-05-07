/* eslint-disable react/prop-types */
export function Card5({ icon, title, body }) {
  return (
    <div className="flex flex-col items-center justify-center lg:w-1/4 font-bold w-auto m-5 lg:mx-0 text-principal">
      <i className={`${icon} my-5 text-8xl`}></i>
      <h3 className="text-2xl text-center ">{title}</h3>
      <p className="text-center text-text-secondary">{body}</p>
    </div>
  );
}
