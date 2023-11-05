"use client";
import { useState } from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import "../styles/index.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { loginSuccess, activeLogOut } from "../redux/authSlice";
import axios, { AxiosRequestConfig } from "axios";
import { useRouter } from "next/navigation";
import { urlAuthUserLogin } from "../components/url";
export default function Auth() {
  interface IUser {
    username: string;
    password: string;
    confirmPassword: string;
  }
  const { data: session } = useSession();
  console.log({ session });
  const [rightPanel, setRightPanel] = useState<any>();
  const [dataUser, setDataUser] = useState<IUser>({
    username: "",
    password: "",
    confirmPassword: "",
  });
  const [msg, setMsg] = useState<string>("");
  const dispatch = useDispatch();
  const selecttor = useSelector(
    (state: RootState) => state.auth.actionLogin.currentUser
  );
  const router = useRouter();
  const handleRighPanel = () => {
    setRightPanel("right-panel-active");
  };
  const handleRemovePanel = () => {
    setRightPanel("");
  };
  const handleLogin = async () => {
    try {
      const config: AxiosRequestConfig = {
        method: "POST",
        url: `http://localhost:8080/auth/login`,
        data: {
          username: dataUser.username,
          password: dataUser.password,
        },
      };
      await axios(config).then((res) => {
        dispatch(loginSuccess(res.data));
        router.push("/home");
        setMsg("Welcome!");
      });
    } catch (error) {
      setMsg("username or password is not correct");
      console.log("invalid login", error);
    }
  };
  const handleRegister = () => {
    if (dataUser.password === dataUser.confirmPassword) {
    } else {
      console.log("failed");
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDataUser({ ...dataUser, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="main_form">
        <div className={`container ${rightPanel}`}>
          <div className="form-container sign-up-container">
            <div className="div_form">
              <h1>create new account</h1>
              <input
                type="text"
                placeholder="Name"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                onChange={handleChange}
              />
              <button onClick={handleRegister}>Submit</button>
            </div>
          </div>
          <div className="form-container sign-in-container">
            <div className="div_form">
              <h1 style={{ color: "red" }}>{msg}</h1>
              <h1>Sign in</h1>
              {/* <div className="social-container">
                <a href="#" className="social">
                  <i className="fab fa-facebook-f" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-google-plus-g" />
                </a>
                <a href="#" className="social">
                  <i className="fab fa-linkedin-in" />
                </a>
              </div> */}
              <span>or use your account</span>
              <input
                type="email"
                placeholder="Username"
                name="username"
                onChange={handleChange}
              />
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
              <p>Forgot your password?</p>
              <button onClick={() => signIn()}>Submit</button>
            </div>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button
                  className="ghost"
                  id="signIn"
                  onClick={handleRemovePanel}
                >
                  Log In
                </button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp" onClick={handleRighPanel}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
