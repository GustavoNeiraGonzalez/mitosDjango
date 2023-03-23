import axios from 'axios';
import React from 'react';
import { Navigate } from 'react-router-dom';

export default function withAuth(ComponentToProtect) {
    return class extends React.Component {
      constructor() {
        super();
        this.state = {
          loading: true,
          redirect: false,
        };
      }

      componentDidMount() {
        const token = localStorage.getItem("token");
        const tokenHeader = {headers:{ Authorization: token }};
        console.log(tokenHeader)
    
        axios.get('http://127.0.0.1:8000/checkToken', tokenHeader)
          .then(res => {
            if (res.status === 200) {
              this.setState({ loading: false });
            } else {
              const error = new Error(res.error);
              throw error;
            }
          })
          .catch(err => {
            console.error(err);
            this.setState({ loading: false, redirect: true });
          });
      }
  
      render() {
        const { loading, redirect } = this.state;
        if (loading) {
          return null;
        }
        if (redirect) {
          return <Navigate to="/login" />;
        }
        return <ComponentToProtect {...this.props} />;
      }
    }
  }