import React, { Component } from 'react'
import JumbotronComponent from './components/JumbotronComponent'
import NavbarComponent from './components/NavbarComponent'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import DetailUserContainer from './containers/DetailUserContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import EditUserContainer from './containers/EditUserContainer'

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
        nama: 'Budi',
        alamat: 'Kejayan',
        umur: 13,
        nohp: '0198293829'
      },
      {
        id: 5,
        nama: 'Jajang',
        alamat: 'Sawojajar',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 6,
        nama: 'Rahmat',
        alamat: 'Jombang',
        umur: 45,
        nohp: '0821731'
      },
      {
        id: 7,
        nama: 'Bandang',
        alamat: 'Gandong',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 8,
        nama: 'Jadtmiko',
        alamat: 'Konang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 9,
        nama: 'Andre',
        alamat: 'Kebumen',
        umur: 45,
        nohp: '0821731'
      },
      {
        id: 10,
        nama: 'Jalal',
        alamat: 'Gondang',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 11,
        nama: 'Umar',
        alamat: 'Gresik',
        umur: 24,
        nohp: '0198293829'
      },
      {
        id: 12,
        nama: 'Tatang',
        alamat: 'Kebumen',
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
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeContainer users={this.state.users}/>}/>
            <Route path='/detail/:id' element={<DetailUserContainer />} />
            <Route path='/edit/:id' element={<EditUserContainer />} />
            <Route path='/create' element={<CreateUserContainer />} />
          </Routes>
        </BrowserRouter>
      </div>
    )
  }
}
