import React from 'react'
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

const columns = [{
    dataField: 'productName',
    text: 'Product Name'
  }, {
    dataField: 'unitPrice',
    text: 'Unit Price'
  }, {
    dataField: 'unitsInStock',
    text: 'Units In Stock'
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
  
//http://brpsoft.co.uk/services2/products
//http://localhost:8080/products

    componentDidMount() {
      fetch("http://brpsoft.co.uk/services2/products")
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              products: result
            });
            console.log('Product data: ' + result);
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
            <BootstrapTable keyField='productName' 
                tableStyle={ { background: '#00ff00' } } 
                headerStyle={ { background: '#00ff00' } } 
                bodyStyle={ { background: '#00ff00' } }
                data={ products } 
                columns={ columns } 
                striped hover 
                pagination={ paginationFactory() } 
                />
        );
      }
    }
  }

  export default DataGridComp;