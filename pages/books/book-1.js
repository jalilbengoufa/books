
import React, { Component } from 'react';
import { Document, Page } from 'react-pdf';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles'
class Book extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numPages: 47,
            pageNumber: 1,
          }
          this.next = this.next.bind(this);
          this.back = this.back.bind(this);
    }
  
    
    onDocumentLoadSuccess = ({ numPages }) => {
        this.setState({ numPages });
    }
    
    render() {
      const { pageNumber, numPages } = this.state;
      return (
        <div>
         
        
            <Grid >
            <   Grid  style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} item xs={12}>
                    <Document style={{justifyContent: 'center'}} file="https://books-rose.now.sh/the_little_prince.pdf" onLoadSuccess={this.onDocumentLoadSuccess}>
                    <Page pageNumber={pageNumber} />
                    </Document>
             
                </Grid>
                <Grid  style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} item xs={12}>
                    <ButtonGroup color="primary" aria-label="outlined primary button group">
                        <Button   onClick={this.back} color="primary"> Previous</Button>
                        <Button   onClick={this.next} color="primary"> Next</Button>
                    </ButtonGroup>
                </Grid>
                <Grid  style={{display: 'flex',alignItems: 'center',justifyContent: 'center'}} item xs={12}>
                    <p>Page {pageNumber} of {numPages}</p>
                </Grid>
            </Grid>
        </div>
      );
    }
    next(e) {    
        e.preventDefault();   
      this.setState(state => ({ pageNumber: this.state.pageNumber+1    })); 
    }
    back(e) {    
        e.preventDefault();   
        this.setState(state => ({ pageNumber: this.state.pageNumber+1   })); 
      }
}

export default function First() {
    return <Book/>
} 