import React, { Component } from 'react';
import { Button } from '@material-ui/core';


class CustomerTable extends Component {
    render() {
      return (
        <div>
            <div>
            <div className="tablelistbtn">
            <div><Button className="tablebtn">1</Button></div>
            <div><Button className="tablebtn">2</Button></div>
            <div><Button className="tablebtn">3</Button></div>
            <div><Button className="tablebtn">4</Button></div>
            </div>
            <div className="tablelistbtn">
            <div><Button className="tablebtn">1</Button></div>
            <div><Button className="tablebtn">2</Button></div>
            <div><Button className="tablebtn">3</Button></div>
            <div><Button className="tablebtn">4</Button></div>
            </div>

            </div>
        </div>    
      );
    }
  }
  
export default CustomerTable;