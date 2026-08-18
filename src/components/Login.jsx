import { useState } from "react";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });

    setErrors({
      ...errors,
      [name]: "",
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password =
        "Password must be at least 8 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Login submitted!");

    console.log(formData);
  };

  return (
    <div className="form-container">

      <h2>Welcome Back</h2>

      <p className="form-subtitle">
        Login to your account
      </p>

      <form onSubmit={handleSubmit}>

        <div className="input-group">

          <label>Email Address</label>

          <input
            type="email"
            name="email"
            placeholder="Enter email address"
            value={formData.email}
            onChange={handleChange}
          />

          {errors.email && (
            <span className="error">
              {errors.email}
            </span>
          )}

        </div>

        <div className="input-group">

          <label>Password</label>

          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
          />

          {errors.password && (
            <span className="error">
              {errors.password}
            </span>
          )}

        </div>

        <button type="submit">
          Login
        </button>

      </form>

      <p className="switch-text">
        Don't have an account?{" "}
        <a href="/register">Register</a>
      </p>

    </div>
  );
}

export default Login;