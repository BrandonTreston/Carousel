import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './app.css';
import './images';
import { images } from './images';
import { heading } from './images';
import { summary } from './images';



class Container extends React.Component{
    render(){
        return<div>
            <div id="top">
            <FlexContainerA image="https://i.vimeocdn.com/video/595198868_505x160.jpg" headingText="MONSOON III"/>
            </div>
            <div id="middle">
            <FlexContainerB image="https://i.vimeocdn.com/video/589972810_530x315.jpg" headingText="BEAMS"/>
            </div>
            <div id="bottom">
            <FlexContainerA image="https://i.vimeocdn.com/video/590587169_530x315.jpg" headingText="Move 2" />
            </div>
            <div className="carousel">
                <CarouselSlider />
            </div>
        </div>
    ;}
}
class FlexContainerA extends React.Component {
    render(){
        const {image} = this.props;
        const {headingText} = this.props;
        return<div className="flexContainer">
        <img src={image} alt="" />
        <div>
            <Heading2 name={headingText}/>
            <FillerText />
        </div>
        </div>
    }
}
class FlexContainerB extends React.Component {
    render(){
        const {image} = this.props;
        const {headingText} = this.props;
        return<div className="flexContainerMid">
        <img src={image} alt="" />
        <div>
            <Heading2 name={headingText}/>
            <FillerText />
        </div>
        </div>
    }
}

class FillerText extends React.Component{
    render(){
        return<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
    }
}
class TextContent extends React.Component{
    render(){
        return<p>{this.props.content}</p>
    }
}
class Heading2 extends React.Component{

    render(){
        return<h2>{this.props.name}</h2>
    }
}
class CarouselImage extends Component {
    render() {
        const color = {
                        /* code to get the dominant color of { image } */
        };

        const style = {
            backgroundColor: "black"
        };
        const { heading } = this.props;
        const { summary } = this.props;
        const { image } = this.props;
        const background = {
            backgroundImage: 'url(' + image +')'
          };
        return (
            <div className="backgroundDiv" style={ background }>
                <div className="backgroundContainer" >
                    <div className="box" >
                        <div>
                            <img alt="" src={ image }/>
                        </div>
                        <div>
                            <Heading2 name={ heading } />
                            <TextContent content={ summary }/>
                            <Buttons buttonColor={style}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

class CarouselSlider extends React.Component{
   
    constructor (props) {
    super(props);

        this.state = {
            currentIndex: 0
        };
        this.nextSlide = this.nextSlide.bind(this);
        this.previousSlide = this.previousSlide.bind(this)
      }

      previousSlide(){
        const size = images.length - 1;
        const { currentIndex } = this.state;
        const shouldResetIndex = currentIndex === 0;
        const index =  shouldResetIndex ? size : currentIndex - 1;
        this.setState({currentIndex: index});
      }
      nextSlide(){
        const size = images.length - 1;
        const { currentIndex } = this.state;
        const shouldResetIndex = currentIndex === size;
        const index =  shouldResetIndex ? 0 : currentIndex + 1;
        this.setState({currentIndex: index});
      }

    render(){
        return(
            <div>
                <Arrow direction="Left" clickFunction={this.previousSlide} glyph="&#8249;" />
                <Arrow direction="Right" clickFunction={ this.nextSlide } glyph="&#8250;" />
                <CarouselImage image={ images[this.state.currentIndex] }
                               summary={ summary[this.state.currentIndex] }
                               heading={ heading[this.state.currentIndex] }/>
            </div>
        );
    }
}

const Arrow = ({ direction, clickFunction, glyph }) => (
    <div
      className={ `slideArrow ${direction}` }
      onClick={ clickFunction }>
      { glyph }
    </div>
  );

class Buttons extends React.Component{
    render(){
        const {buttonColor} = this.props;
        return<div className="buttons">
            <button className="buy" style={buttonColor}><img alt="" id="buyButtonImage"/>Buy Now</button>
            <button className="trailer">Watch Trailer</button>
        </div>
    }
}

ReactDOM.render(<Container />, document.getElementById('root'));