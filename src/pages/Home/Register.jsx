import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {

   const {createUser} = useContext(AuthContext);

   const handleRegister = (e) => {
      e.preventDefault();
      console.log(e.currentTarget);
      const form = new FormData(e.currentTarget);
      const name = form.get("name");
      const email = form.get("email");
      const photo = form.get("photo");
      const password = form.get("password");
      console.log(name, email, photo ,password);

      createUser(email, password)
      .then(result =>{
         console.log(result.user)
      })
      .catch(error =>{
         console.error(error);
      })
   };
   return (
      <div>
         <Navbar></Navbar>

         <div>
            <h1 className="text-center text-3xl my-10">Please Register!</h1>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 mx-auto">
               <form onSubmit={handleRegister} className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Name</span>
                     </label>
                     <input
                        type="text"
                        placeholder="your name"
                        name="name"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Photo Url</span>
                     </label>
                     <input
                        type="text"
                        placeholder="photo Url"
                        name="photo"
                        className="input input-bordered"
                        required
                     />
                  </div>
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
                  <div className="form-control mt-3">
                     <button className="btn btn-primary">Register</button>
                  </div>
               </form>
               <p className="text-center mb-2">
                  Already have an account?{" "}
                  <Link className="text-blue-600 font-bold" to={"/login"}>
                     {" "}
                     Login
                  </Link>
               </p>
            </div>
         </div>
      </div>
   );
};

export default Register;
