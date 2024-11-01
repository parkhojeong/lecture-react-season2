import MyReact from "./lib/MyReact";

function NameField() {
  const [firstName, setFirstName] = MyReact.useState('user1');
  const [lastName, setLastName] = MyReact.useState('kim');

  function handleChangeFirstName(e) {
    setFirstName(e.target.value);
  }

  function handleChangeLastName(e) {
    setLastName(e.target.value);
  }

  return <>
    <input value={firstName} onChange={handleChangeFirstName}/>
    <input value={lastName} onChange={handleChangeLastName}/>
  </>
}

export default () => <NameField/>;
