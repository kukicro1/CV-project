import React from 'react'
import Header from './Header'
import MainContent from './MainContent'
import PersonalDetails from './PersonalDetails'

const ShowCV = ({ generalInfo, componentCount }) => {
  return (
    <div className='showCV'>
      <Header generalInfo={generalInfo} />
      <div className='CVContainer'>
        <MainContent
          generalInfo={generalInfo}
          componentCount={componentCount}
        />
        <PersonalDetails generalInfo={generalInfo} />
      </div>
    </div>
  )
}

// class ShowCV extends Component {
//   render() {
//     const { generalInfo, componentCount } = this.props
//     return (
//       <div className='showCV'>
//         <Header generalInfo={generalInfo} />
//         <div className='CVContainer'>
//           <MainContent
//             generalInfo={generalInfo}
//             componentCount={componentCount}
//           />
//           <PersonalDetails generalInfo={generalInfo} />
//         </div>
//       </div>
//     )
//   }
// }

export default ShowCV
