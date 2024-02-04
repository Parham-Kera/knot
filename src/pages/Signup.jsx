import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState, useRef } from "react";
import { useForm } from "react-hook-form";
import "./login.css";
import { Link } from "react-router-dom";

export default function App() {
  const schema = yup.object().shape({
    fname: yup.string().required("First name is required"),
    lname: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Email is not valid")
      .required("Email is required"),
    username: yup.string().min(4).required("Username is required"),
    password: yup.string().min(8).max(16).required("Password is required"),
    cpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  return (
    <div className="Form-card">
      <form onSubmit={handleSubmit(onSubmit)} className="Form-body">
        <div className="Form-card-header">
          <h1> Sign-up</h1>
        </div>

        <div className="Form-card-body-input">
          <input
            type="text"
            placeholder="First name"
            className="input"
            {...register("fname")}
          />

          <label className="label" htmlFor="fname">
            {" "}
            First Name
          </label>
        </div>
        {errors.fname && <span className="error">{errors.fname.message}</span>}

        <div className="Form-card-body-input">
          <input
            type="text"
            placeholder="Last name"
            className="input"
            aria-errormessage="Plese enter your last name!"
            {...register("lname")}
          />
          <label className="label" htmlFor="lname">
            Last Name
          </label>
        </div>
        {errors.lname && <span className="error">{errors.lname.message}</span>}

        <div className="Form-card-body-input">
          <input
            type="email"
            placeholder="Email"
            className="input"
            {...register("email")}
          />
          <label className="label" htmlFor="email">
            Email
          </label>
        </div>
        {errors.email && <span className="error">{errors.email.message}</span>}

        <div className="Form-card-body-input">
          <input
            type="text"
            placeholder="Username"
            className="input"
            {...register("username")}
          />
          <label className="label" htmlFor="username">
            Username
          </label>
        </div>
        {errors.username && (
          <span className="error">{errors.username.message}</span>
        )}

        <div className="Form-card-body-input">
          <input
            type="password"
            placeholder="Password"
            className="input"
            {...register("password")}
          />
          <label className="label" htmlFor="password">
            Password
          </label>
        </div>
        {errors.password && (
          <span className="error">{errors.password.message}</span>
        )}

        <div className="Form-card-body-input">
          <input
            type="password"
            placeholder="Confirm Password"
            className="input"
            {...register("cpassword")}
          />
          <label htmlFor="cpassword" className="label">
            Confirm Password
          </label>
        </div>
        <div className="ecp">
          {errors.cpassword && (
            <span className="error">{errors.cpassword.message}</span>
          )}
        </div>

        <div className="Form-card-body-submit">
          <input type="submit" className="submit" value="Sign-up" />
          <Link to="/login" className="login">
            Already have an account?
          </Link>
        </div>
      </form>
    </div>
  );
}
