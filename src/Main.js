import React, { Component } from "react";
import { HexGrid, Layout, Hexagon, Text } from 'react-hexgrid';
import "./Main.css";
import Post from './Post/Post';
import data from './Post/data.json';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div className="main">
        <HexGrid width={this.state.width} height={this.state.height}>
          <Layout size={{ x: 10, y: 10 }} flat={true} spacing={1.05} origin={{ x: 0, y: 0 }}>
            <Hexagon className="name" q={0} r={0} s={0} fill>
              <Text x={0} y={-1}>Chen</Text>
              <Text y={0} y={4}>Qian</Text>
            </Hexagon>
            <a href="https://github.com/cherylqian" target="_blank" rel="noopener noreferrer">
              <Hexagon className="github" q={0} r={-1} s={1}>
                <Text className="icon" y={4}>&#xf09b;</Text>
              </Hexagon>
            </a>
            <a href="https://www.linkedin.com/in/chen-qian/" target="_blank" rel="noopener noreferrer">
              <Hexagon className="linkedin" q={1} r={-1} s={0}>
                <Text className="icon" y={3.5}>&#xf0e1;</Text>
              </Hexagon>
            </a>
            <a href={window.location.href + "files/resume.pdf"}>
              <Hexagon className="resume" q={-1} r={1} s={0}>
                <Text className="icon" y={3.5}>&#xf016;</Text>
              </Hexagon>
            </a>
            <a href="mailto:chenq2@illinois.edu">
              <Hexagon className="mail" q={1} r={0} s={-1}>
                <Text className="icon" y={3.5}>&#xf003;</Text>
              </Hexagon>
            </a>
            <Hexagon q={-1} r={0} s={1} fill/>
            <Hexagon q={0} r={1} s={-1} fill/>

            {
              data.posts.map(post => {
                return <Post post={post} key={post.label}/>
              })
            }
            <Hexagon q={2} r={-1} s={0} fill/>

            <Hexagon q={-3} r={-1} s={1} fill/>
            <Hexagon q={-4} r={0} s={0} fill/>

          </Layout>
        </HexGrid>
      </div>
    );
  }
}

export default Main;
