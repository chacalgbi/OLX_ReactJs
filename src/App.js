import './App.css';
import React from 'react';
import { connect } from 'react-redux';

function Page(props) {
  return (
    <div>
      Olá
    </div>
  );
}

const mapStateToProps = (state) =>{
  return{
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) =>{
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Page);
