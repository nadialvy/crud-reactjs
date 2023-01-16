import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Button, Container } from "reactstrap";
import ToolkitProvider, {
  Search,
} from "react-bootstrap-table2-toolkit/dist/react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator";

const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "nama",
    text: "Nama",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "Alamat",
    sort: true,
  },
  {
    dataField: "link",
    text: "Aksi",
    formatter: (rowContent, row) => {
      return (
        <div className="">
          <Button color="info" className="mr-2">
            Detail
          </Button>
          <Button color="success" className="mr-2">
            Edit
          </Button>
          <Button color="danger" className="mr-2">
            Hapus
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];

const TableComponent = (props) => {
  return (
    <Container>
      <ToolkitProvider
        bootstrap4
        keyField="id"
        data={props.users}
        columns={columns}
        defaultSorted={defaultSorted}
        search
      >
        {(props) => (
          <div>
            <SearchBar {...props.searchProps} />
            <hr />
            <BootstrapTable {...props.baseProps} pagination={ paginationFactory() } />
          </div>
        )}
      </ToolkitProvider>
    </Container>
  );
};

export default TableComponent;
