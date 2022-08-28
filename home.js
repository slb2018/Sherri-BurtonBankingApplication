function Home(){
  return (
    <Card
      txtcolor="black"
      header="Burton Bank"
      title="Welcome!"
      text="Use the navigation bar to view your account information."
      body={(<img src="texas.png" className="img-fluid" alt="Responsive image" />)}
    />    
  );  
}

document.body.style.backgroundColor = "silver";
