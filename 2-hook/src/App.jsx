import MyReact from "./lib/MyReact";

function NameField() {
  const [firstName, setFirstName] = MyReact.useName('user1');

  function handleChange(e) {
    setFirstName(e.target.value);
  }

  return <input value={firstName} onChange={handleChange}/>
}

export default () => <NameField />;
