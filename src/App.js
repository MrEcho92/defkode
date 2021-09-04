import React from "react";
import axios from "axios";
import Nav from './components/Nav/Nav.component';
import Footer from './components/Footer/footer.component';
import Content from './components/Content/content.component';
import "./App.css";

const App = () => {


  const handleFetch = () => {
    axios
      .get("/api/blogs/") //Proxy in json/api/blogs
      .then((res) => {
        this.setState({ blogs: res.data });
      })
      .catch((error) => console.log(error));
  };

    return (
      <div className="App">
        <Nav />
        <Content />
        <Footer />
      </div>
    );
  }

export default App;
