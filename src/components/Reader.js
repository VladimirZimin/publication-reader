import React, { Component } from "react";
import Controls from "./Controls";
import Publication from "./Publication";
import Progress from "./Progress";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  width: 700px;
`;

export default class Reader extends Component {
  state = {
    publicationIndex: 0,
  };

  changeIndex = (value) => {
    this.setState((prevState) => ({
      publicationIndex: prevState.publicationIndex + value,
    }));
  };

  render() {
    const { publicationIndex } = this.state;
    const { items } = this.props;
    const current = items[publicationIndex];

    return (
      <Wrapper>
        <Controls
          onChange={this.changeIndex}
          current={publicationIndex + 1}
          total={items.length}
        />
        <Progress current={publicationIndex + 1} total={items.length} />
        <Publication publication={current} />
      </Wrapper>
    );
  }
}
