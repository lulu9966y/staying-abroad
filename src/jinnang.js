import React from 'react';
import './jinnang.css';
import Header from './components/header';
import Footer from './components/footer';
import SchoolList from './components/school-list';

class Jinnang extends React.Component {
  render() {
    return (
      <div className="App">
      <Header />
      <SchoolList />
      <Footer kind="jinnang" />
      </div>
    );
  }
}

export default Jinnang;
