import React from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import { Button } from 'reactstrap';

const columns = [{
    dataField: 'id',
    text: 'ID',
    headerStyle: () => {
        return { width: "5%" };
    }
}, {
    dataField: 'nama',
    text: 'Nama'
}, {
    dataField: 'alamat',
    text: 'Alamat'
}, {
    dataField: 'link',
    text: 'Aksi',
    formatter: (rowContent, row) => {
        return(
            <div className="space-x-2">
                <Button color="info" className="mr-2">Detail</Button>
                <Button color="success" className="mr-2">Edit</Button>
                <Button color="danger" className="mr-2">Hapus</Button>
            </div>
        );
    }
}]



const TableComponent = (props) => {
  return (
    <BootstrapTable keyField='id' data={ props.users } columns={ columns } />
  )
}

export default TableComponent