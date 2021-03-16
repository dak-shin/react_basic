
const Image = (props) => <img src={props.src} alt=""/>;

const Name = (props) => <h3>{props.title}</h3>;

const Price = (props) => <h4 style={{color:'blue',fontSize:'0.75rem',fontFamily:'fantasy'}}>Rs. {props.amt}</h4>;

const Gpu = ({src, name, amt, children}) => {

  const clickMe = (msg) => {console.log(msg)};

  return (<div className="gpu">
      <Image src={src} />
      <Name title={name}/>
      <Price amt={amt}/>
      <p>{children}</p>
      <button type='button' onClick={() =>clickMe('HELLO')}>Click Me</button>
    </div>
    );
}

export default Gpu;