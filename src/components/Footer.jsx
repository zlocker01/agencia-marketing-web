/* eslint-disable react/prop-types */
export const Footer = ({ name, mail, year }) => {
  return (
    <footer className="bg-black text-[#bcb9b9]">
      <div className="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
        <div className="flex flex-row justify-between max-[767px]:flex-col max-[767px]:items-start">
          <div className="w-full max-w-[560px] max-[991px]:mr-4 max-[991px]:flex-initial max-[767px]:mr-0">
            <h2 className="font-roboto text-3xl font-semibold text-white md:text-5xl">
              <span className="text-[#1353fe]">{name}</span> Lorem ipsum dolor
              sit
            </h2>
          </div>
          <div className="max-[991px]:ml-4 max-[991px]:flex-none max-[767px]:ml-0 max-[767px]:mt-8">
            <div className="font-nunito mb-4 flex max-w-[272px] items-start justify-start">
              <img
                src="https://assets.website-files.com/63904f663019b0d8edf8d57c/639973cbfd61dff0af234a64_Message.svg"
                alt=""
                className="mr-3 inline-block w-6"
              />
              <p>{mail}</p>
            </div>
          </div>
        </div>
        <div className="md:mt-5 flex flex-row justify-between max-[991px]:items-center max-[767px]:flex-col max-[767px]:items-start max-[479px]:flex-col-reverse">
          <div className="flex flex-row gap-5 text-2xl">
            <i className="fa-brands fa-facebook hover:text-principal cursor-pointer"></i>
            <i className="fa-brands fa-instagram hover:text-principal cursor-pointer"></i>
            <i className="fa-brands fa-github hover:text-principal cursor-pointer"></i>
          </div>
          <div className="max-[991px]:flex-none mt-3 lg:mt-0">
            <p className="font-nunito text-[#bcb9b9] max-[479px]:text-sm">
              © Copyright {year}. Todos los Derechso Reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
