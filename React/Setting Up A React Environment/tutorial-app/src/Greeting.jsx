export default function Greeting(props) {
  let name = props.name;
  let message = props.message;
  return (
    <>
      <h1>Hello, {name}! {message}.</h1>
    </>
  );
}
