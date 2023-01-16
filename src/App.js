import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import TableComponent from './components/TableComponent'

export default class App extends Component {
  state = {
    title: "Daisyyy",
    users: [
      {
        id: 1,
        nama: 'Adit',
        alamat: 'Aceh',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 2,
        nama: 'Pratama',
        alamat: 'Kepang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 3,
        nama: 'Cahya',
        alamat: 'Jepara',
        umur: 45,
        nohp: '0821731'
      },
      {
        id: 4,
        nama: 'Adit',
        alamat: 'Aceh',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 5,
        nama: 'Pratama',
        alamat: 'Kepang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 6,
        nama: 'Cahya',
        alamat: 'Jepara',
        umur: 45,
        nohp: '0821731'
      },
      {
        id: 7,
        nama: 'Adit',
        alamat: 'Aceh',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 8,
        nama: 'Pratama',
        alamat: 'Kepang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 9,
        nama: 'Cahya',
        alamat: 'Jepara',
        umur: 45,
        nohp: '0821731'
      },
      {
        id: 10,
        nama: 'Adit',
        alamat: 'Aceh',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 11,
        nama: 'Pratama',
        alamat: 'Kepang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 12,
        nama: 'Cahya',
        alamat: 'Jepara',
        umur: 45,
        nohp: '0821731'
      },
      
    ]
  }

  render() {
    return (
      <div className="p-4">
        <NavbarComponent />
        <JumbotronComponent title={this.state.title} />
        <TableComponent users={this.state.users}/>
      </div>
    )
  }
}
