import * as React from 'react';
import { mount } from 'enzyme';


import App from '../src/components/App';
import data from '../src/components/data/data';
import { Btn, Select, MemberCard } from '../src/components/common';

describe('Member Enrollment', () => {
  describe('render', () => {
    test('should render without throwing an error', () => {
      const wrapper = mount(<App />);
      expect(wrapper.exists()).toBe(true);
    });


    test('Should render 3 cards', () => {
      const wrapper = mount(<App />);
      expect(wrapper.find('.card').length).toEqual(3);
    });

    test('render card and select', () => {
      const headerInfo = data.membership.cards[0].header;
      const mockFunction = jest.fn();
      const wrapper = mount(
        <MemberCard
          handler={mockFunction}
          selectedId="writer-publisher"
          headerData={headerInfo}
        >
          <div>hello</div>
          <div>hello</div>
        </MemberCard>,
      );

      wrapper.find('.card').simulate('click');
      expect(mockFunction).toHaveBeenCalled();
    });

    test('render select and change', () => {
      const { publisherOptions } = data.membership;
      const mockFunction = jest.fn();
      const wrapper = mount(<Select handler={mockFunction} options={publisherOptions} />);
      wrapper.find('select').simulate('change');
      expect(mockFunction.mock.calls.length).toEqual(1);
    });

    test('render Button and select', () => {
      const mockFunction = jest.fn();
      const wrapper = mount(<Btn handler={mockFunction}>hello</Btn>);
      wrapper.find('button').simulate('click');
      expect(mockFunction).toHaveBeenCalled();
    });
  });
});
