import { useNavigate } from "@solidjs/router";
import { Component } from "solid-js";
import { createStore } from "solid-js/store";
import { login } from "../service/cognito.service";

import styles from "./Login.module.css";

const Login: Component = () => {
  const navigate = useNavigate();
  const [form, setForm] = createStore<{ email: string; password: string }>({
    email: "",
    password: "",
  });

  const updateFormField = (fieldName: string) => (event: Event) => {
    const inputElement = event.currentTarget as HTMLInputElement;
    setForm({
      [fieldName]: inputElement.value,
    });
  };

  const handleLogin = async () => {
    try {
      const valid = await login(form.email, form.password);
      if (!valid) {
        throw Error("User not found");
      }
      navigate("/", { replace: true });
    } catch (e) {
      alert(e);
    }
  };

  return (
    <div class={styles.container}>
      <form class={styles.form}>
        <h3>Gestione casa</h3>
        <div>
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={form.email}
            onChange={updateFormField("email")}
          />
        </div>
        <div>
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            name="passaword"
            value={form.password}
            onChange={updateFormField("password")}
          />
        </div>
        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
