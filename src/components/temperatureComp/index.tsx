import React from "react";
import { SCALENAMEENUM, TemperatureInput } from "./TemperatureInput";
interface CalStateInfo {
  temperature: string;
  scale: SCALENAMEENUM;
}
class Calculator extends React.Component {
  state: CalStateInfo;
  constructor(props?: any) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = { temperature: "", scale: SCALENAMEENUM.c };
  }

  handleCelsiusChange(temperature: string) {
    this.setState({ scale: SCALENAMEENUM.c, temperature });
  }

  handleFahrenheitChange(temperature: string) {
    this.setState({ scale: SCALENAMEENUM.f, temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale !== SCALENAMEENUM.c ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale !== SCALENAMEENUM.f ? tryConvert(temperature, toFahrenheit) : temperature;
    //使用子组件调用父组件函数实现状态提升
    return (
      <div>
        <TemperatureInput scale={SCALENAMEENUM.c}
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange}/>
        <TemperatureInput scale={SCALENAMEENUM.f}
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange}/>
      </div>
    );
  }
}
function tryConvert(temperature: string, convert: (v: number) => number) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return "";
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

function toCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32;
}

export { Calculator };
