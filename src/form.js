import React from 'react';
import Data from './data'
import Table from './table';
import TableEmployee from './TableEmployee';

import { ReactSearchAutocomplete } from 'react-search-autocomplete'

import DataTable from 'react-data-table-component';


import { Container, Row, Col } from 'react-grid-system';

import AutoComplete from './Autocomplete'

class Form extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this);


        this.state = {
            firstName: '',
            lastName: '',
            address: '',
            gender: '',
            applicable: '',
            submit: '',
            data: [
                { id: 1, name: 'abhi' },
                { id: 2, name: 'ram' },
                { id: 3, name: 'sugu' }
            ],
            EmpColumns: [
                { name: 'id', selector: 'id', sortable: true, },
                { name: 'name', selector: 'name', sortable: true, right: true, },
                { name: 'department', selector: 'department', sortable: true, right: true, },
                { name: 'salary', selector: 'salary', sortable: true, right: true, },

            ],
            EmpData: [
                { id: 1, name: 'messi', department: 'front end', salary: 20000 },
                { id: 2, name: 'rono', department: 'backend end', salary: 25000 },
                { id: 3, name: 'neymar', department: 'testing', salary: 15000 },
                { id: 4, name: 'ineasta', department: 'front end', salary: 20000 }
            ],




            // EmployeeDetails: []


        }
        this.handleOnSelect = this.handleOnSelect.bind(this);
    }

    EmployeeDetails = []
    // ListAll=this.props.EmpData
    ListAll = [
        { id: 1, name: 'messi', department: 'front end', salary: 20000 },
        { id: 2, name: 'rono', department: 'backend end', salary: 25000 },
        { id: 3, name: 'neymar', department: 'testing', salary: 15000 },
        { id: 4, name: 'ineasta', department: 'front end', salary: 20000 }
    ]


    columns = [
        { name: 'id', selector: 'id', sortable: true, },
        { name: 'name', selector: 'name', sortable: true, right: true, }
    ];

    // EmpColumns = [];
    // EmpData = [];

    // items = [
    //     { id: 1, name: 'abhi' },
    //     { id: 2, name: 'ram' },
    //     { id: 3, name: 'sugu' }
    // ]





    // data=[{ 'id': 1, 'name': 'abhi' },
    // { 'id': 2, 'name': 'ram' },
    // { 'id': 3, 'name': 'sugu' }]





    firstNameChangeHandler = (event) => {
        debugger;

        this.setState({ 'firstName': event.target.value })

    }

    lastNameChangeHandler = (event) => {

        this.setState({ 'lastName': event.target.value })

    }
    addressChangeHandler = (event) => {


        this.setState({ 'address': event.target.value })

    }
    isApplicable = (event) => {
        debugger;
        this.setState({ 'applicable': event.target.value })
        // if(event.target.value==""){

        //     this.setState({ 'applicable': "yes" })
        // }
        // else{

        // }
    }

    genderChange = (event) => {

        this.setState({ 'gender': event.target.value })

    }

    handleSubmit = (event) => {
        this.setState({ 'submit': this.state.value })
        event.preventDefault();
    }
    addItem = () => {
        debugger
        let add = { 'id': 4, 'name': 'fakru' }

        let test = this.state.data;
        test.push(add);
        this.setState({ 'data': test })

    }

    removeData = () => {
        debugger;
        //    this.state.list.filter(element=>(element.name!='abhi'));
        this.setState({ 'data': this.state.data.filter(element => (element.name !== 'ram')) })
    }

    handleChange = (state) => {
        debugger
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', state.selectedRows);

    };


    //autocomplete

    handleOnSearch = (string, results) => {

        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)

    }

    handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        let newlist = { id: 5, name: 'list all employee details' }
        let arr = this.state.EmpData;

        arr.push(newlist);
        this.setState({ 'EmpData': arr })
        debugger;

        if (item.id !== 5) {

            this.EmployeeDetails.push(item)
            // console.log(this.state.EmployeeDetails)

            // this.setState({ 'EmpData': this.state.EmpData.filter(element => (element.id == item.id)) })
            this.setState({ 'EmployeeDetails': this.EmployeeDetails.filter(element => (element.id == item.id)) })
            this.EmployeeDetails.pop(item)

        }
        else {
            // this.EmployeeDetails.push(item)
            this.setState({ 'EmployeeDetails': this.ListAll.filter(element => (element.id !== item.id)) })

        }




    }

    handleOnFocus = () => {
        console.log('Focused')
    }

    //table employee

    handleChange = (state) => {
        debugger
        // You can use setState or dispatch with something like Redux so we can use the retrieved data
        console.log('Selected Rows: ', state.selectedRows);

    };

    render() {
        return (
            // <form onSubmit={this.handleSubmit}>
            <div>
                <h1>new react Component</h1>
                <div>first name</div>
                <div> <input type="text" value={this.state.firstName} onChange={this.firstNameChangeHandler}></input></div>
                <div>last name</div>
                <div> <input type="text" value={this.state.lastName} onChange={this.lastNameChangeHandler}></input></div>

                <div>address</div>
                <div> <textarea value={this.state.address} onChange={this.addressChangeHandler}></textarea></div>
                <p>

                    <label>Is applicable</label>
                    <input type="checkbox" value="yes" onChange={this.isApplicable}></input>
                </p>
                <p>
                    gender:
                   <label> male </label><input name="gender" type="radio" value="male" onChange={this.genderChange}></input>
                    <label> female </label> <input name="gender" type="radio" value="female" onChange={this.genderChange}></input>
                </p>
                <input type="submit" value="submit" ></input>

                <Data firstName={this.state.firstName} lastName={this.state.lastName}
                    address={this.state.address} gender={this.state.gender} applicable={this.state.applicable}>

                </Data>

                <Container>
                    <Row>
                        <Col sm={6} style={{ border: "solid", borderColor: 'yellow' }}>
                            <input type="submit" value="add" onClick={this.addItem}>

                            </input>
                            <input type="submit" value="remove" onClick={this.removeData}>

                            </input>

                            <select>
                                {this.state.data.map((items) =>
                                    (<option key={items.id} id={items.id}>{items.name}</option>))}
                            </select>
                            <table>
                                {/* <thread> */}
                                <tr>
                                    <th>id </th>
                                    <th>name </th>
                                </tr>
                                {/* </thread> */}

                                <tbody>

                                    {this.state.data.map((items) => (


                                        <tr> <td key={items.id}>{items.id}</td>
                                            <td>{items.name}</td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>

                        </Col>
                        <Col sm={6} style={{ border: 'solid', borderColor: 'yellow' }}>
                            <Table data={this.state.data} columns={this.columns}></Table>
                        </Col>
                        {/* <Col sm={4}>
                        </Col> */}

                    </Row>

                </Container>


                <Container style={{ marginTop: "10px" }}>

                    <Row >
                        <Col sm={6} style={{ border: "solid" }}>
                            <h2 style={{ color: "blue" }}>Employee names</h2>

                            <ReactSearchAutocomplete
                                // items={this.EmployeeDetails}
                                items={this.state.EmpData}
                                onSearch={this.handleOnSearch}
                                onSelect={this.handleOnSelect}
                                onFocus={this.handleOnFocus}
                                autoFocus
                            />
                            {/* <AutoComplete EmpData={this.state.EmpData} EmpColumns={this.state.EmpColumns}></AutoComplete> */}

                        </Col>

                        <Col sm={6} style={{ border: "solid" }}>
                            <h2 style={{ color: "blue" }}>Employee details</h2>

                            <DataTable
                                title="Employee table"
                                columns={this.state.EmpColumns}
                                data={this.state.EmployeeDetails}
                                selectableRows // add for checkbox selection
                                Clicked
                                Selected={this.handleChange}

                            />
                            {/* <TableEmployee EmpColumns={this.state.EmpColumns}
                                EmpData={this.state.EmpData} ></TableEmployee> */}


                        </Col>
                        {/* <Col sm={ }>
                            One of three columns</Col> */}

                    </Row>
                </Container>

            </div>
            // </form>
        )
    }
}
export default Form;



// fname
// lname
// address
// applicable 
// gender
// submit button 