import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header'; //Include Heder
import Footer from './Footer'; //Include Footer
import Card from 'react-bootstrap/Card';
import Carousel from 'react-bootstrap/Carousel';
import Block from './Block';
import 'tachyons';
import ButtonGroup from 'react-bootstrap/esm/ButtonGroup';
import Button from './Button';
class App extends Component {

  render() {
    return (
      <div className="maincontainer">
        <Header></Header>
        <Block></Block>
        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={process.env.PUBLIC_URL + "/Assets/Top Corusal.png"}
              alt="First slide"
            />
            <Carousel.Caption>

            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <form className="form-bg">
          <h3>
            Are you looking for
        </h3>
          Personal Conveyance<input type="radio" name="my-choice"  ></input>
          Commercial Purpose<input type="radio" name="my-choice"></input>
        </form>

        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 ">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0">Cat</h1>
                </div>
                <div class="dtc tr">
                  <h2 class="f5 mv0">$1,000</h2>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                and touch water with paw then recoil in horror.
              </p>
            </div>
        </article>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 ">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0">Cat</h1>
                </div>
                <div class="dtc tr">
                  <h2 class="f5 mv0">$1,000</h2>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                and touch water with paw then recoil in horror.
              </p>
            </div>
        </article>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 ">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0">Cat</h1>
                </div>
                <div class="dtc tr">
                  <h2 class="f5 mv0">$1,000</h2>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                and touch water with paw then recoil in horror.
              </p>
            </div>
        </article>
        <article class="br2 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw5 ">
          <img src="http://placekitten.com/g/600/300" class="db w-100 br2 br--top" alt="Photo of a kitten looking menacing."/>
            <div class="pa2 ph3-ns pb3-ns">
              <div class="dt w-100 mt1">
                <div class="dtc">
                  <h1 class="f5 f4-ns mv0">Cat</h1>
                </div>
                <div class="dtc tr">
                  <h2 class="f5 mv0">$1,000</h2>
                </div>
              </div>
              <p class="f6 lh-copy measure mt2 mid-gray">
                If it fits, i sits burrow under covers. Destroy couch leave hair everywhere,
                and touch water with paw then recoil in horror.
              </p>
            </div>
        </article>



          <Footer></Footer>
      </div>
    )
  };
}
export default App;