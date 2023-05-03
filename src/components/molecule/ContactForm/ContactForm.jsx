// import PropTypes from "prop-types";

import { useForm } from "../../../hooks/useForm";

// Utilizar el hook de la libreria que da Fernando en el curso

export const ContactForm = ({
  fields = {
    username: "",
    email: "",
    phoneNumber: "",
  },
}) => {
  const {
    formState,
    onInputChange,
    username,
    email,
    phoneNumber,
    onResetForm,
  } = useForm(fields);

  return (
    <>
      <hr />
      <form action="">
        {/* Crear FieldForm para cada label */}
        <label htmlFor="username">
          <span>Nombre y Apellido</span>
          <input
            type="text"
            className="form-control"
            name="username"
            placeholder="Nombre y Apellido"
            autoComplete="name"
            required="required"
            value={username}
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          <input
            type="number"
            className="form-control mt-2"
            name="phoneNumber"
            placeholder="Celular"
            value={phoneNumber}
            onChange={onInputChange}
          />
        </label>
        <label htmlFor="email">
          <input
            type="email"
            className="form-control mt-2"
            name="email"
            placeholder="Email"
            value={email}
            onChange={onInputChange}
          />
        </label>

        <button onClick={onResetForm} className="btn btn-primary mt-2">
          Borrar
        </button>
      </form>
      <hr />
    </>
  );
};

// ContactForm.propTypes = {
//   fields: PropTypes.object.isRequired,
// };
