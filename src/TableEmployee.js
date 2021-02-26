// import React from 'react';
// import DataTable from 'react-data-table-component';

// class TableEmployee extends React.Component {



//     constructor(props) {
//         super(props)

//         this.state = {
//             // EmpColumns :[
//             //     { name: 'id', selector: 'id', sortable: true, },
//             //     { name: 'name', selector: 'name', sortable: true, right: true, },
//             //     { name: 'department', selector: 'department', sortable: true, right: true, },
//             //     { name: 'salary', selector: 'salary', sortable: true, right: true, },

//             // ],
//             // EmpData:[
//             //     { id: 1, name: 'messi', department: 'front end', salary: 20000 },
//             //     { id: 2, name: 'rono', department: 'backend end', salary: 25000 },
//             //     { id: 3, name: 'neymar', department: 'testing', salary: 15000 },
//             //     { id: 4, name: 'ineasta', department: 'front end', salary: 20000 }
//             // ]
//         }
//     }
//     // EmpColumns={this.props.EmpColumns}
//     // EmpData={this.props.EmpData}

//     handleChange = (state) => {
//         debugger
//         // You can use setState or dispatch with something like Redux so we can use the retrieved data
//         console.log('Selected Rows: ', state.selectedRows);

//     };

//     render() {
//         return (
//             <div>
                  
//                 <DataTable
                   
//                     title="employee table"
//                     columns={this.props.EmpColumns}
//                     data={this.props.EmpData}
//                     selectableRows // add for checkbox selection
//                     Clicked
//                     Selected={this.handleChange}


//                 />
                

//             </div>


//         )
//     }
// }
// export default TableEmployee;