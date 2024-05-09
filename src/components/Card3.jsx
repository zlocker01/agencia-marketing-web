/* eslint-disable react/prop-types */
export const Card3 = ({ icon, text }) => {
    return (
      <div className="font-nunito flex flex-col items-center justify-center bg-principal rounded-md mx-5 my-2 p-10 text-text lg:w-[300px] lg:h-[300px] shadow-md shadow-slate-400">
        <i className={`${icon} mb-5 text-3xl`}></i>
        <p className="text-text text-start">{text}</p>
      </div>
    );
  }
  