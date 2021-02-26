import React from 'react';
import DataTable from 'react-data-table-component';

class Table extends React.Component {

   

    // constructor(props) {
    //     super(props)


    // }


    render() {
        return (
            <div>
                <DataTable
                    title="table"
                    columns={this.props.columns}
                    data={this.props.data}
                    selectableRows // add for checkbox selection
                    Clicked
                    Selected={this.props.handleChange}


                />

            </div>


        )
    }
}
export default Table;