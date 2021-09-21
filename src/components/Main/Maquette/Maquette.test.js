import React from "react";
import { shallow } from "enzyme";
import Modal from "./Maquette";

describe("Modal", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Modal />);
    expect(wrapper).toMatchSnapshot();
  });
});
