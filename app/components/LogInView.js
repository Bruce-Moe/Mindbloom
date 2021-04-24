export default function LogInView(logInSetter) {
  console.log("Hello");
  const handleSubmit = () => {
    logInSetter(true);
  };
}
