import './App.css';
function App() {
  return <div>
    <CardWrapper>
      <div>
      Hi there
      </div>
    </CardWrapper>
    <CardWrapper>
      <div>
      Hello There
      </div>
    </CardWrapper>
    <CardWrapper>
      <div>
      Hi Mr.
      </div>
    </CardWrapper>
    <CardWrapper>
        <TextComponent/>
    </CardWrapper>
  </div>
}

function CardWrapper({children}) {
  return <div className='inner' style={{ border: "2px solid white" }}>
  {children}
  </div>
}

function TextComponent(){
  return <div>
    Hi from text component 
  </div>
}


export default App