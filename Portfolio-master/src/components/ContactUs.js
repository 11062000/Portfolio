import React, { Component } from 'react';
export default class ContactUs extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="contact">
        <h1>Contact Me:</h1>
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below 
              </p>
            </div>
          </div>
          <form action="">
           <label htmlFor="">Name: </label> <input type="text" name="" id="" />
           <label htmlFor="">Email: </label> <input type="text" name="" id="" />
           <label htmlFor="">Message: </label> <textarea name="" id="" cols="30" rows="10"></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
        );
  }
}