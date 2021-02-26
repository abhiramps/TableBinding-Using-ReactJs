// import React from 'react';
// import { ReactSearchAutocomplete } from 'react-search-autocomplete'

// class AutoComplete extends React.Component {

//     constructor(props) {
//         super(props)

//         this.state = {
//             // data: [
//             //     { id: 1, name: 'abhi' },
//             //     { id: 2, name: 'ram' },
//             //     { id: 3, name: 'sugu' }
//             // ],
//             EmployeeDetails: this.props.EmpData
//         }
//     }


//     handleOnSearch = (string, results) => {

//         // onSearch will have as the first callback parameter
//         // the string searched and for the second the results.
//         console.log(string, results)

//     }

//     handleOnSelect = (item) => {
//         // the item selected
//         console.log(item)
//         // this.state.EmployeeDetails.push(item)
      
//         // console.log(this.state.EmployeeDetails)
//         debugger;
//         // this.setState({' EmployeeDetails':item})
//     }

//     handleOnFocus = () => {
//         console.log('Focused')
//     }

//     render() {
//         return (
//             <div>
//                 <p>
//                 </p>
//                 <ReactSearchAutocomplete
//                     // items={this.EmployeeDetails}
//                     items={this.props.EmpData}
//                     onSearch={this.handleOnSearch}
//                     onSelect={this.handleOnSelect}
//                     onFocus={this.handleOnFocus}
//                     autoFocus
//                 />

//             </div>


//         )
//         // return({this.state.EmployeeDetails})
//     }
// }
// export default AutoComplete;