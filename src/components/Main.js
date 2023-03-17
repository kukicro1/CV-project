import React, { useState } from 'react'
import CVForm from './CVForm/CVForm'
import uniqid from 'uniqid'
import ShowCV from './ShowCV/ShowCV'
import InputEducation from './CVForm/InputEducation'
import ShowEducationInput from './ShowCV/ShowEducationInput'
import InputExperience from './CVForm/InputExperience'
import ShowExperienceInput from './ShowCV/ShowExperienceInput'

const Main = () => {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    personalInfo: '',
  })

  const [education, setEducation] = useState({
    university: '',
    degree: '',
    generation: '',
    subject: '',
  })

  const [experience, setExperience] = useState({
    company: '',
    position: '',
    from: '',
    to: '',
  })

  const [componentCount, setComponentCount] = useState({
    id: uniqid(),
    educationFormComponents: [
      <InputEducation
        key={uniqid()}
        id={0}
        handleEducationInput={handleEducationInput}
        onDelete={deleteEducationHandler}
      />,
    ],
    experienceFormComponents: [
      <InputExperience
        key={uniqid()}
        id={0}
        handleExperienceInput={handleExperienceInput}
        onDelete={deleteExperienceHandler}
      />,
    ],
    showEducationComponents: [
      <ShowEducationInput key={uniqid()} id={0} education={education} />,
    ],
    showExperienceComponents: [
      <ShowExperienceInput key={uniqid()} id={0} experience={experience} />,
    ],
  })

  function handleInput(e) {
    const target = e.target
    const name = target.name
    console.log(experience)
    setGeneralInfo({
      ...generalInfo,
      [name]: target.value,
    })
  }

  function addEducationHandler() {
    const newEducation = {
      university: '',
      degree: '',
      generation: '',
      subject: '',
    }
    setEducation(() => ({
      university: '',
      degree: '',
      generation: '',
      subject: '',
    }))
    setComponentCount((prevComponentCount) => {
      return {
        ...prevComponentCount,
        id: uniqid(),
        educationFormComponents: [
          ...prevComponentCount.educationFormComponents,
          <InputEducation
            key={uniqid()}
            id={componentCount.id}
            handleEducationInput={handleEducationInput}
            onDelete={deleteEducationHandler}
          />,
        ],
        showEducationComponents: [
          ...prevComponentCount.showEducationComponents,
          <ShowEducationInput
            key={uniqid()}
            id={componentCount.id}
            education={newEducation}
          />,
        ],
        experienceFormComponents: [
          ...prevComponentCount.experienceFormComponents,
        ],
        showExperienceComponents: [
          ...prevComponentCount.showExperienceComponents,
        ],
      }
    })
  }

  function deleteEducationHandler(e, id) {
    e.preventDefault()
    setComponentCount((prevComponentCount) => {
      return {
        ...prevComponentCount,
        educationFormComponents:
          prevComponentCount.educationFormComponents.filter((component) => {
            return component.props.id !== id
          }),
        showEducationComponents:
          prevComponentCount.showEducationComponents.filter((component) => {
            return component.props.id !== id
          }),
        experienceFormComponents: [
          ...prevComponentCount.experienceFormComponents,
        ],
        showExperienceComponents: [
          ...prevComponentCount.showExperienceComponents,
        ],
      }
    })
  }

  function handleEducationInput(e, id) {
    const target = e.target
    const name = target.name
    const value = target.value
    let updatedEducation = {}
    setEducation((prevEducation) => {
      updatedEducation = { ...prevEducation, [name]: value }
      return updatedEducation
    })
    setComponentCount((prevComponentCount) => {
      const updatedShowEducationComponents =
        prevComponentCount.showEducationComponents.map((component) => {
          if (component.props.id === id) {
            return (
              <ShowEducationInput
                key={component.key}
                id={component.props.id}
                education={updatedEducation}
              />
            )
          } else {
            return component
          }
        })
      return {
        ...prevComponentCount,
        showEducationComponents: updatedShowEducationComponents,
        showExperienceComponents: [
          ...prevComponentCount.showExperienceComponents,
        ],
      }
    })
  }

  function addExperienceHandler(e) {
    const newExperience = {
      company: '',
      position: '',
      from: '',
      to: '',
    }
    setExperience(() => ({
      company: '',
      position: '',
      from: '',
      to: '',
    }))
    setComponentCount((prevComponentCount) => {
      return {
        ...prevComponentCount,
        id: uniqid(),
        educationFormComponents: [
          ...prevComponentCount.educationFormComponents,
        ],
        showEducationComponents: [
          ...prevComponentCount.showEducationComponents,
        ],
        experienceFormComponents: [
          ...prevComponentCount.experienceFormComponents,
          <InputExperience
            key={uniqid()}
            id={componentCount.id}
            handleExperienceInput={handleExperienceInput}
            onDelete={deleteExperienceHandler}
          />,
        ],
        showExperienceComponents: [
          ...prevComponentCount.showExperienceComponents,
          <ShowExperienceInput
            key={uniqid()}
            id={componentCount.id}
            experience={newExperience}
          />,
        ],
      }
    })
  }

  function deleteExperienceHandler(e, id) {
    e.preventDefault()
    setComponentCount((prevComponentCount) => {
      return {
        educationFormComponents: [
          ...prevComponentCount.educationFormComponents,
        ],
        showEducationComponents: [
          ...prevComponentCount.showEducationComponents,
        ],
        experienceFormComponents:
          prevComponentCount.experienceFormComponents.filter((component) => {
            return component.props.id !== id
          }),
        showExperienceComponents:
          prevComponentCount.showExperienceComponents.filter((component) => {
            return component.props.id !== id
          }),
      }
    })
  }

  function handleExperienceInput(e, id) {
    const target = e.target
    const name = target.name
    const value = target.value
    let updatedExperience = {}
    setExperience((prevExperience) => {
      updatedExperience = { ...prevExperience, [name]: value }
      return updatedExperience
    })
    setComponentCount((prevComponentCount) => {
      const updatedShowExperienceComponents =
        prevComponentCount.showExperienceComponents.map((component) => {
          if (component.props.id === id) {
            return (
              <ShowExperienceInput
                key={component.key}
                id={component.props.id}
                experience={updatedExperience}
              />
            )
          } else {
            return component
          }
        })
      return {
        ...prevComponentCount,
        showEducationComponents: [
          ...prevComponentCount.showEducationComponents,
        ],
        showExperienceComponents: updatedShowExperienceComponents,
      }
    })
  }

  // function handleLoad (e) {
  //   console.log('clicked load')
  // }

  function handleReset() {
    setGeneralInfo({
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      personalInfo: '',
    })
    setEducation({
      university: '',
      degree: '',
      generation: '',
      subject: '',
    })
    setExperience({
      company: '',
      position: '',
      from: '',
      to: '',
    })
    setComponentCount({
      id: uniqid(),
      educationFormComponents: [
        <InputEducation
          key={uniqid()}
          id={0}
          handleEducationInput={handleEducationInput}
          onDelete={deleteEducationHandler}
        />,
      ],
      experienceFormComponents: [
        <InputExperience
          key={uniqid()}
          id={0}
          handleExperienceInput={handleExperienceInput}
          onDelete={deleteExperienceHandler}
        />,
      ],
      showEducationComponents: [
        <ShowEducationInput
          key={uniqid()}
          id={0}
          education={{
            university: '',
            degree: '',
            generation: '',
            subject: '',
          }}
        />,
      ],
      showExperienceComponents: [
        <ShowExperienceInput
          key={uniqid()}
          id={0}
          experience={{
            company: '',
            position: '',
            from: '',
            to: '',
          }}
        />,
      ],
    })
    // this.setState(
    //   () => ({
    //     componentCount: {
    //       ...componentCount,
    //       showEducationComponents: [
    //         <ShowEducationInput key={uniqid()} id={0} education={education} />,
    //       ],
    //       showExperienceComponents: [
    //         <ShowExperienceInput
    //           key={uniqid()}
    //           id={0}
    //           experience={experience}
    //         />,
    //       ],
    //     },
    //   })
    // )
  }

  return (
    <div className='main'>
      <CVForm
        handleInput={handleInput}
        addEducationHandler={addEducationHandler}
        addExperienceHandler={addExperienceHandler}
        // handleLoad={handleLoad}
        handleReset={handleReset}
        componentCount={componentCount}
      ></CVForm>
      <ShowCV
        generalInfo={generalInfo}
        experience={experience}
        componentCount={componentCount}
      ></ShowCV>
    </div>
  )
}

// class Main extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       generalInfo: {
//         firstName: '',
//         lastName: '',
//         email: '',
//         phoneNumber: '',
//         personalInfo: '',
//       },
//       education: {
//         university: '',
//         degree: '',
//         generation: '',
//         subject: '',
//       },
//       experience: {
//         company: '',
//         position: '',
//         from: '',
//         to: '',
//       },
//       componentCount: {
//         id: uniqid(),
//         educationFormComponents: [
//           <InputEducation
//             key={uniqid()}
//             id={0}
//             handleEducationInput={this.handleEducationInput}
//             onDelete={this.deleteEducationHandler}
//           />,
//         ],
//         experienceFormComponents: [
//           <InputExperience
//             key={uniqid()}
//             id={0}
//             handleExperienceInput={this.handleExperienceInput}
//             onDelete={this.deleteExperienceHandler}
//           />,
//         ],
//         showEducationComponents: [],
//         showExperienceComponents: [],
//       },
//     }

//     this.state.componentCount.showEducationComponents = [
//       <ShowEducationInput
//         key={uniqid()}
//         id={0}
//         education={this.state.education}
//       />,
//     ]

//     this.state.componentCount.showExperienceComponents = [
//       <ShowExperienceInput
//         key={uniqid()}
//         id={0}
//         experience={this.state.experience}
//       />,
//     ]
//   }

//   handleInput = (e) => {
//     const target = e.target
//     const name = target.name
//     this.setState({
//       generalInfo: {
//         ...this.state.generalInfo,
//         [name]: target.value,
//       },
//     })
//   }

//   addEducationHandler = () => {
//     const newEducation = {
//       university: '',
//       degree: '',
//       generation: '',
//       subject: '',
//     }
//     this.setState((prevState) => ({
//       education: {
//         university: '',
//         degree: '',
//         generation: '',
//         subject: '',
//       },
//       componentCount: {
//         id: uniqid(),
//         educationFormComponents: [
//           ...prevState.componentCount.educationFormComponents,
//           <InputEducation
//             key={uniqid()}
//             id={this.state.componentCount.id}
//             handleEducationInput={this.handleEducationInput}
//             onDelete={this.deleteEducationHandler}
//           />,
//         ],
//         showEducationComponents: [
//           ...prevState.componentCount.showEducationComponents,
//           <ShowEducationInput
//             key={uniqid()}
//             id={this.state.componentCount.id}
//             education={newEducation}
//           />,
//         ],
//         experienceFormComponents: [
//           ...prevState.componentCount.experienceFormComponents,
//         ],
//         showExperienceComponents: [
//           ...prevState.componentCount.showExperienceComponents,
//         ],
//       },
//     }))
//   }

//   deleteEducationHandler = (e, id) => {
//     e.preventDefault()
//     this.setState((prevState) => ({
//       componentCount: {
//         educationFormComponents:
//           prevState.componentCount.educationFormComponents.filter(
//             (component) => {
//               return component.props.id !== id
//             }
//           ),
//         showEducationComponents:
//           prevState.componentCount.showEducationComponents.filter(
//             (component) => {
//               return component.props.id !== id
//             }
//           ),
//         experienceFormComponents: [
//           ...prevState.componentCount.experienceFormComponents,
//         ],
//         showExperienceComponents: [
//           ...prevState.componentCount.showExperienceComponents,
//         ],
//       },
//     }))
//   }

//   handleEducationInput = (e, id) => {
//     const target = e.target
//     const name = target.name
//     const value = target.value
//     this.setState((prevState) => {
//       const updatedEducation = { ...prevState.education, [name]: value }
//       const updatedShowEducationComponents =
//         prevState.componentCount.showEducationComponents.map((component) => {
//           if (component.props.id === id) {
//             return (
//               <ShowEducationInput
//                 key={component.key}
//                 id={component.props.id}
//                 education={updatedEducation}
//               />
//             )
//           } else {
//             return component
//           }
//         })
//       return {
//         education: updatedEducation,
//         componentCount: {
//           ...prevState.componentCount,
//           showEducationComponents: updatedShowEducationComponents,
//           showExperienceComponents: [
//             ...prevState.componentCount.showExperienceComponents,
//           ],
//         },
//       }
//     })
//   }

//   addExperienceHandler = (e) => {
//     const newExperience = {
//       company: '',
//       position: '',
//       from: '',
//       to: '',
//     }
//     this.setState((prevState) => ({
//       experience: {
//         company: '',
//         position: '',
//         from: '',
//         to: '',
//       },
//       componentCount: {
//         id: uniqid(),
//         educationFormComponents: [
//           ...prevState.componentCount.educationFormComponents,
//         ],
//         showEducationComponents: [
//           ...prevState.componentCount.showEducationComponents,
//         ],
//         experienceFormComponents: [
//           ...prevState.componentCount.experienceFormComponents,
//           <InputExperience
//             key={uniqid()}
//             id={this.state.componentCount.id}
//             handleExperienceInput={this.handleExperienceInput}
//             onDelete={this.deleteExperienceHandler}
//           />,
//         ],
//         showExperienceComponents: [
//           ...prevState.componentCount.showExperienceComponents,
//           <ShowExperienceInput
//             key={uniqid()}
//             id={this.state.componentCount.id}
//             experience={newExperience}
//           />,
//         ],
//       },
//     }))
//   }

//   deleteExperienceHandler = (e, id) => {
//     e.preventDefault()
//     this.setState((prevState) => ({
//       componentCount: {
//         educationFormComponents: [
//           ...prevState.componentCount.educationFormComponents,
//         ],
//         showEducationComponents: [
//           ...prevState.componentCount.showEducationComponents,
//         ],
//         experienceFormComponents:
//           prevState.componentCount.experienceFormComponents.filter(
//             (component) => {
//               return component.props.id !== id
//             }
//           ),
//         showExperienceComponents:
//           prevState.componentCount.showExperienceComponents.filter(
//             (component) => {
//               return component.props.id !== id
//             }
//           ),
//       },
//     }))
//   }

//   handleExperienceInput = (e, id) => {
//     const target = e.target
//     const name = target.name
//     const value = target.value
//     this.setState((prevState) => {
//       const updatedExperience = { ...prevState.experience, [name]: value }
//       const updatedShowExperienceComponents =
//         prevState.componentCount.showExperienceComponents.map((component) => {
//           if (component.props.id === id) {
//             return (
//               <ShowExperienceInput
//                 key={component.key}
//                 id={component.props.id}
//                 experience={updatedExperience}
//               />
//             )
//           } else {
//             return component
//           }
//         })
//       return {
//         experience: updatedExperience,
//         componentCount: {
//           ...prevState.componentCount,
//           showEducationComponents: [
//             ...prevState.componentCount.showEducationComponents,
//           ],
//           showExperienceComponents: updatedShowExperienceComponents,
//         },
//       }
//     })
//   }

//   handleLoad = (e) => {
//     console.log('clicked load')
//   }

//   handleReset = () => {
//     this.setState(
//       {
//         generalInfo: {
//           firstName: '',
//           lastName: '',
//           email: '',
//           phoneNumber: '',
//           personalInfo: '',
//         },
//         education: {
//           university: '',
//           degree: '',
//           generation: '',
//           subject: '',
//         },
//         experience: {
//           company: '',
//           position: '',
//           from: '',
//           to: '',
//         },
//         componentCount: {
//           id: uniqid(),
//           educationFormComponents: [
//             <InputEducation
//               key={uniqid()}
//               id={0}
//               handleEducationInput={this.handleEducationInput}
//               onDelete={this.deleteEducationHandler}
//             />,
//           ],
//           experienceFormComponents: [
//             <InputExperience
//               key={uniqid()}
//               id={0}
//               handleExperienceInput={this.handleExperienceInput}
//               onDelete={this.deleteExperienceHandler}
//             />,
//           ],
//           showEducationComponents: [
//             <ShowEducationInput
//               key={uniqid()}
//               id={0}
//               education={{
//                 university: '',
//                 degree: '',
//                 generation: '',
//                 subject: '',
//               }}
//             />,
//           ],
//           showExperienceComponents: [
//             <ShowExperienceInput
//               key={uniqid()}
//               id={0}
//               experience={{
//                 company: '',
//                 position: '',
//                 from: '',
//                 to: '',
//               }}
//             />,
//           ],
//         },
//       },
//       () => ({
//         componentCount: {
//           ...this.state.componentCount,
//           showEducationComponents: [
//             <ShowEducationInput
//               key={uniqid()}
//               id={0}
//               education={this.state.education}
//             />,
//           ],
//           showExperienceComponents: [
//             <ShowExperienceInput
//               key={uniqid()}
//               id={0}
//               experience={this.state.experience}
//             />,
//           ],
//         },
//       })
//     )
//   }

//   render() {
//     const { generalInfo, experience, componentCount } = this.state
//     return (
//       <div className='main'>
//         <CVForm
//           handleInput={this.handleInput}
//           addEducationHandler={this.addEducationHandler}
//           addExperienceHandler={this.addExperienceHandler}
//           handleLoad={this.handleLoad}
//           handleReset={this.handleReset}
//           componentCount={componentCount}
//         ></CVForm>
//         <ShowCV
//           generalInfo={generalInfo}
//           experience={experience}
//           componentCount={componentCount}
//         ></ShowCV>
//       </div>
//     )
//   }
// }

export default Main
