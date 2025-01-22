import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    // This is going to be a server side form, that is why we get the button inside a form, then we can use its
    // action attribute to send the form data to the server.
    <form action={signInAction}>
      <button className="flex items-center gap-6 text-lg border border-primary-300 px-10 py-4 font-medium">
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          height="24"
          width="24"
        />
        <span>Continue with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
