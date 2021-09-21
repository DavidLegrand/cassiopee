import App from "./App";
import { shallow } from "enzyme";

describe("App", () => {
  test("Renders", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toBeTruthy();
    expect(wrapper).toMatchSnapshot();
  });
});
