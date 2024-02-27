import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
color: #111;
width: 400px;
height: 400px;
padding: 10px;
border: 1px solid #111`
const Div = styled.div`
    margin: 10px 0;
    padding: 10px;
`
const ContactForm = () => {
  return (
    <div>
        <section>
            <article>
            <h1>Content</h1>
            <Main>
            <div className="form-group">
                <label htmlFor="">Email :</label>
                <input type="text" name='email' placeholder='email ' />
            </div>
            </Main>
            </article>
        </section>
    </div>
  )
}

export default ContactForm






























// import React from 'react'
// import styled from 'styled-components'


// const Div = styled.div`
// background-color: white;
// padding: 50px;
// `

// const Article = styled.article`
// display: flex;
// flex-direction: row;
// justify-content: space-between;
// `

// const Aside = styled.aside`
// width: 50%;
// height: 70vh;
// background-color: inherit;
// padding: 50px;
// display: flex;
// flex-direction: column;
// gap: 5vh;

// `

// const Main = styled.main`
//     flex: 1;
//     font-size: 25px;
// `
// const H1 = styled.h1`
// font-size: 7.5em;`

// const P1 = styled.p`
// font-size: 25px;
// line-spacing: 1em;
// color: gray;
// padding: 15px;
// padding-left: 4px;
// `
// const Form = styled.form`
//     margin-top: 50px;
//     height: 60vh;
//     width: 30vw;
//     padding: 30px;
//     text-align: center;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     background-color: white;
//     font-size: 29px;
//     gap: 3vh;
//     box-Shadow: 2px 2px 7px gray;
// `
// const Div2 = styled.div`
// display: flex;
// flex-direction: row;
// justify-content: space-around;
// `
// const Input = styled.input`
// height: 5vh;
// width: 20vw;
// border-radius: 5px;
// outline: none;
// background-color: #fff;
// border: 1px solid gray;



// `
// const Span = styled.span`
//     color: #3D70CB;
//     font-size: 1em;
//     word-spacing: 5px;
// `

// const Button = styled.button`
// height: 5vh;
// width: 20vw;
// border-radius: 5px;
// outline: none;
// background-color: #3D70CB;
// color: #ffffff;
// `
// const ContactForm = () => {
//   return (
//         <Div>
//             <Article>
//                 <Aside>
//                     <H1>Assign <br /> <Span>batches</Span> </H1>
//                     <P1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur sapiente accusamus voluptas facere minus blanditiis totam saepe ut, iste voluptates quae unde tempora itaque assumenda cupiditate quod alias maxime in. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, necessitatibus!</P1>
//                 </Aside>
//                 <Main>
//                     <Form action="">
//                         <Input type="text"  name="trainerName" placeholder=' Trainer Name' />
//                         <Input type="text" name='batchCode' placeholder=' Batch Code' />
//                         <Input type="text" name='course' placeholder=' Course ' />
//                         <Input type="date" name='date'  />
//                         <Input type="time" name='time' />

//                         <Button> Create Batch</Button>
//                     </Form>
//                 </Main>
//             </Article>
//         </Div>

//   )
// }

// export default ContactForm























// import React from 'react'
// import style from 'styled-components'



// const Section = style.section`
// width: 100%;
// height: 100vh `;


// const Article = style.article`
// width: 90%;
// height: inherit;
// margin: 0 auto;
// display: flex;
// align-items: center;
// justify-content: center;
// `
// const H1 = style.h1`
// padding: 10px;
// color: #111;
// font-size: 20px;
// text-transform: uppercase;
// font-weight: 600;
// letter-spacing: 1.6px;
// font-style: revert-layer;
// color: #009688;`

// // const Form  = style.form`
// // width: 30vw;
// // background-color:;
// // `

// // const Fieldset = style.fieldset`
// //     width: 100%;
// //     height: 10vh;
// //     padding: 10px;
// //     border: 2px solid blueviolet;
// //     outline: none;
// //     color: #111;
// //     font-size: 1em;`

// const Aside = style.aside`
// position: relative;
// width: 200px;
// height: 10vh;
// `
// const Input = style.input`
//     width: 100%;
//     padding: 10px;
//     border: 2px solid blueviolet;
//     background: #1d2b3a;
//     outline: none;
//     color: #fff;
//     font-size: 1em;
// `

// const Span = style.span`
//     position: absolute;
//     left: 5px;
//     padding: 10px;
//     pointer-events: none;
//     color: #8f8a8a;
//     text-transform: uppercase;
//     transition: 0.5s;
//     `
    
// const ContactForm = () => {
//   return (
//         // <Section>
//             // <Article>
//                 // <Form>
//                     {/* <aside>
//                         <div>
//                         <Fieldset>
//                         <legend>first Name</legend>
//                         <input type="text" name="firstName" placeholder="First Name" required />
//                         </Fieldset>

//                         <Fieldset>
//                         <legend>last Name</legend>
//                         <input type="text" name="lastName" placeholder="Last Name" required />
//                         </Fieldset>
//                         </div>
//                     </aside>
//                     <Fieldset>
//                     <legend>Email address</legend>
//                     <input type="email" name="email" placeholder="Email address" required />
//                     </Fieldset>

//                     <Fieldset>
//                     <legend>Password</legend>
//                     <input type="password" name="password" placeholder="Password" required />
//                     </Fieldset> */}


// //                     <Aside>
// //                     <Input type="text" required = "required" />
// //                     <Span>Last Name</Span>
// //                     </Aside>

// //                 {/* </Form> */}
      
// //             </Article>
// //         </Section>
// //   )
// // }

// // export default ContactForm
