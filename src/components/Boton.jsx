/* eslint-disable react/prop-types */
export const Boton = ({ btn }) => {
  return (
    <button
      type="button"
      className="text-white bg-gradient-to-r from-blue-400 principal to-secondary hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-secondary dark:focus:ring-secondary font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 w-11/12 lg:w-auto"
    >
      {btn}
    </button>
  );
}
