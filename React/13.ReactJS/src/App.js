import React, { Component } from "react";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";


class App extends Component {


  constructor(props){
    super(props);

    this.state={
      show:true
    };

  }


  render(){

    return(

      <div>

        <h1>Blogger Application</h1>


        {
          this.state.show ?
          <BookDetails />
          :
          <BlogDetails />
        }


        <CourseDetails />


      </div>

    );

  }

}


export default App;
