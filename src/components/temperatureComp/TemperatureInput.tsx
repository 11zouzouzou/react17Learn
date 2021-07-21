import React from "react";
interface TemperatureInfo {
  temperature: string;
  scale: SCALENAMEENUM;
}
export enum SCALENAMEENUM {
  c = "Celsius",
  f = "Fahrenheit",
}
class TemperatureInput extends React.Component<{ scale: SCALENAMEENUM; temperature: string; onTemperatureChange: (v: string) => void } | undefined> {
  // state: TemperatureInfo;
  constructor(props?: Readonly<{ scale: SCALENAMEENUM; temperature: string; onTemperatureChange: (v: string) => void }>) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.state = { temperature: "", scale: SCALENAMEENUM.c };
  }

  handleChange(e: any) {
    // this.setState({ temperature: e.target.value });
    this.props.onTemperatureChange(e.target.value);

  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input value={temperature} onChange={this.handleChange}></input>
      </fieldset>
    );
  }
}

export { TemperatureInput };
