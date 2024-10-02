import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count1: 0,
      info: {
        name: "user",
        avatar_url: "",
      },
    };
  }

  async componentDidMount() {
    let data = await fetch("https://api.github.com/users/prachi0513");
    data = await data.json();
    // console.log(data);

    this.setState({
      info: {
        name: data.name,
        avatar_url: data.avatar_url,
      },
    });
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    const { count1 } = this.state;
    const { name, avatar_url } = this.state.info;
    return (
      <div>
        <button
          onClick={() => {
            this.setState({
              count1: count1 + 1,
              count2: count2 + 3,
            });
          }}
        >
          Increase count
        </button>
        <h2>{name}</h2>
        <img src={avatar_url} alt="label" />
      </div>
    );
  }
}

export default UserClass;
