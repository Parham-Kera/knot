import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import "./login.css";
import { Link } from "react-router-dom";

export default function App() {
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    password: yup.string().min(8).max(16).required("Password is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="Form-card">
      <form onSubmit={handleSubmit(onSubmit)} className="Form-body">
        <div className="Form-card-header">
          <h1> Log-in</h1>
        </div>

        <div className="Form-card-body-input">
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email")}
          />
          <label className="label">Email</label>
        </div>
        {errors.email && <span className="error">{errors.email.message}</span>}

        <div className="Form-card-body-input">
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password")}
          />
          <label className="label">Password</label>
        </div>
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <div className="Form-card-body-submit">
          <input type="submit" className="submit" value="Sign-up" />
          <Link to="/signup" className="login">
            Create an Account
          </Link>
        </div>
      </form>
    </div>
  );
}
