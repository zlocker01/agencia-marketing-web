/* eslint-disable react/prop-types */
export const Card = ({ title, text }) => {
    return (
      <div className="flex flex-col justify-between items-center gap-1 my-3 lg:my-0 max-w-sm">
        <img className="bg-red-500 rounded-full max-w-32" src="/imagenes/trying-to-come-up-with-a-new-avatar-for-my-various-social-v0-wby69l6e1lsb1.webp" alt="desarrollador web" />
        <h3 className="font-roboto font-bold">{title}</h3>
        <p className="font-nunito">{text}</p>
      </div>
    );
  };