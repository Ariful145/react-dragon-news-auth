import { Link, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {

   const {signIn} = useContext(AuthContext);
   const location = useLocation();
   const navigate = useNavigate();
   console.log("location from login page", location);

   const handleLogin = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const email = form.get('email');
      const password = form.get('password');
      console.log(email, password);

      signIn(email, password)
      .then(result=>{
         navigate(location?.state ? location.state : '/');
         console.log(result.user);
      })
      .catch(error=>{
         console.error(error);
      })
   };
   return (
      <div>
         <Navbar></Navbar>

         <div>
            <h1 className="text-center text-3xl my-10">Please Login!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
               <form onSubmit={handleLogin} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        placeholder="email"
                        name="email"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Password</span>
                     </label>
                     <input
                        type="password"
                        placeholder="password"
                        name="password"
                        className="input input-bordered"
                        required
                     />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>
                  </div>
                  <div className="form-control mt-6">
                     <button className="btn btn-primary">Login</button>
                  </div>
               </form>
               <p className="text-center mb-4">
                  Do not have an account please{" "}
                  <Link className="text-blue-600 font-bold" to={"/register"}>
                     {" "}
                     Register
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Login;
