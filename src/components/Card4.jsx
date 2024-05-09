/* eslint-disable react/prop-types */
export const Card4 = ({ title, icon, body}) => {
  return (
    <div className="flex flex-col items-center justify-center lg:w-1/4 font-bold w-auto m-5 lg:mx-0 ">
      <h3 className="font-roboto text-2xl text-center">{title}</h3>
      <i className={`${icon} font-nunito my-5 text-8xl`}></i>
      <p className="font-nunito text-center">{body}</p>
    </div>
  );
}
