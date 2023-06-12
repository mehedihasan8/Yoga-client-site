import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";

const Social = () => {
  const { signInGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const signInWithGoogle = () => {
    // console.log("click");
    signInGoogle()
      .then((result) => {
        const user = result.user;
        // console.log(user);
        Swal.fire(
          "Account Create Success!",
          "You clicked the button!",
          "success"
        );
        const saveUser = {
          name: user.displayName,
          image: user.photoURL,
          email: user.email,
          role: "student",
        };

        // console.log(saveUser);

        fetch("https://summer-camping-server.vercel.app/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(saveUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            Swal.fire("Login Success!", "You clicked the button!", "success");
            navigate(from, { replace: true });
          });
      })
      .catch((error) => {
        // console.log(error.message);
      });
  };
  return (
    <>
      <button
        onClick={() => signInWithGoogle()}
        className="mt-6 border rounded-md py-2 text-sm text-gray-800 bg-gray-100 hover:bg-gray-200 z-10"
      >
        <span>Sign In with Google </span>
      </button>
      {/* {error && <p className="text-center text-red-500">{error.message}</p>} */}
    </>
  );
};

export default Social;
