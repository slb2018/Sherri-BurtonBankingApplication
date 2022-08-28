function Withdraw(){
  const ctx = React.useContext(UserContext); 
  const [update, setUpdate] = React.useState('false');
  const [value, setValue] = React.useState("");
  const [show, setShow] = React.useState(true);
  let data = ctx.users[ctx.users.length-1].balance;

  const handleTextChange = (event) => {
    setValue(event.target.value);
  }; 

  function handleWithdraw(){
    let balance = document.getElementById("balance").value;
    if (balance > 0 && data >= balance && !isNaN(balance)) {
    data -= Number(balance);
    setUpdate(true);
    setShow(false);
    ctx.users[0].balance = data
    setValue("")
    }
    else{
      alert("Transaction Failed!");
    }
  }

  return (
    <Card
    txtcolor="black"
    header="Withdraw"
    body= {
      <>
          <h5>{update ? "Balance: " + data : "Balance: "+ data}</h5>
          <h6>Withdraw Amount:</h6>
          <input type="number" width="200" id="balance" onChange={handleTextChange} value={value}></input>
          <button type="submit" disabled={ value ?false:true} className="btn btn-light" onClick={handleWithdraw}>Withdraw</button>
      </>}
    />    
  );
};