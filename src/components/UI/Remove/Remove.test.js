import React from "react";

import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";

import Remove from "../Remove/Remove";

configure({ adapter: new Adapter() });

let wrapper;
let div;

beforeEach(() => {
    wrapper = shallow(<Remove />);
})

describe('component <Remove />', () => {

    it("should exist <div> and <svg>", () => {
        expect(wrapper.find('div')).toHaveLength(1)
        div = wrapper.find('div')
        expect(div.find('svg')).toHaveLength(1)
    });

    it('should render the <svg>', () => {
        expect(div.contains(
            <svg
                className="remove-user"
                width="2em"
                height="2em"
                viewBox="0 0 16 16"
            >
                <path fill="evenodd" d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6.146-2.854a.5.5 0 0 1 .708 0L14 6.293l1.146-1.147a.5.5 0 0 1 .708.708L14.707 7l1.147 1.146a.5.5 0 0 1-.708.708L14 7.707l-1.146 1.147a.5.5 0 0 1-.708-.708L13.293 7l-1.147-1.146a.5.5 0 0 1 0-.708z" />
            </svg>
        )).toEqual(true)
    })
});
