import React from 'react'
import ContactForm from './components/ContactForm'

const App = () => {
  return (
    <div>
      <ContactForm />
    </div>
  )
}

export default App





















// import React from 'react'
// import CssInJsx from './CssInJsx'

// import styled from 'styled-components'
// import ContactForm from './components/ContactForm'
// console.log(styled);

// const H1 = styled.h1`
//   color: red;
//   font-size: 20px;
// `;
// const H2 = styled.h2`
//   color: blue;
//   font-size: 20px;
// `;
// const Form = styled.form`
//   width: 500px;
//   height: 500px;
//   background-color: #efefef;
//   color: white;
//   padding: 10px;
//   margin: 20px; 
// `;
// const Button = styled.button`
// background: purple;
// padding: 10px;
// margin: 10px;
// border-none;
// color: #fff;`;

// const Input = styled.input`
// width: 90%;
// padding: 10px;
// margin: 10px 0px;
// border: none;
// color: #fff;`


// const Div = styled.div`
// padding:0;
// margin:0;
// background-color: black;`
// const App = () => {
//   return (
//     <div >

//       {/* <H1>hello h1 style is comin from tiled component</H1> */}
//       {/* <H2>heelo h2</H2> */}
//       {/* <CssInJsx /> */}
//       {/* <Form action="">
//         <Input type="text" placeholder='enter username' />
//         <Button >View More</Button>
//       </Form> */}
//       <ContactForm />
//     </div>
//   )
// }


// export default App

// limitiation of inline style with js cannot add pseudo-selectors , media querries, keyFrames, etc
// let styles = {
//   background: '#673AB7',
//   color:  '#111',
//   fontSize: 20,
//   margin: 10,
//   padding: 0,
//   // :hover: "",
// }
