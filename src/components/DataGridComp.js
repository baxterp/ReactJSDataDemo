import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';
import styled from 'styled-components';

const columns = [{
    dataField: 'productName',
    text: 'Product Name', 
    sort: true
  }, {
    dataField: 'unitPrice',
    text: 'Unit Price', 
    sort: true,
    formatter: (value, row) => (
      <span>
        £{value}
      </span>
    )}, {
    dataField: 'unitsInStock',
    text: 'Units In Stock', 
    sort: true
  }];

class DataGridComp extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        error: null,
        isLoaded: false,
        products: []
      };
    }
  
    componentDidMount() {
      fetch("/getproducts")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result
            });
            console.log('Product data: ');
            console.log(result);
          },

          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
        )
    }
  
    render() {
      const { error, isLoaded, products } = this.state;
      if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        return (
          <Styles>
            <BootstrapTable keyField='productName' 
                bootstrap4
                data={ products } 
                columns={ columns } 
                striped 
                hover
                pagination={ paginationFactory() } >
                </BootstrapTable>
          </Styles>
        );
      }
    }
  }

  export default DataGridComp;

  const Styles = styled.div`

  thead {
    font-size:14pt;
  }
  

`
