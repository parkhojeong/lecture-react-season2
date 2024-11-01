import MyReact from "./lib/MyReact";

function NameField() {
  const [firstName, setFirstName] = MyReact.useState('user1');
  const [lastName, setLastName] = MyReact.useState('kim');

  function handleChange(e) {
    setFirstName(e.target.value);
  }

  return <>
    <input value={firstName} onChange={handleChange}/>
    <input value={lastName} onChange={handleChange}/>
  </>
}

export default () => <NameField/>;
