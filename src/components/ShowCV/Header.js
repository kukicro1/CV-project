import React from 'react'

const Header = ({ generalInfo }) => {
  return (
    <div className='header'>
      <h1>
        {generalInfo.firstName} {generalInfo.lastName}
      </h1>
    </div>
  )
}

// class Header extends Component {
//   render() {
//     const { generalInfo } = this.props
//     return (
//       <div className='header'>
//         <h1>
//           {generalInfo.firstName} {generalInfo.lastName}
//         </h1>
//       </div>
//     )
//   }
// }

export default Header
