/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { TabItem, Tabs } from 'components/Tab';

const TabsWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

const createTabsArray = (tabs, tabsObj) => {
  const arr = [];
  tabs.forEach((t) => {
    if (tabsObj[t]) {
      arr.push({id: t, ...tabsObj[t]});
    }
  });

  return arr;
};
const TabContentWrapper = styled.div`
  height: 100%;
  overflow-y: scroll;
  padding: 2px;
`;
const withTabs = (propsName) => (tabsArr) => (WrappedComponent) =>
  class TabsHoc extends React.PureComponent {
    render() {
      const {tabs} = this.props[propsName];

      return (
        <TabsWrapper>
          <Tabs>
            {createTabsArray(tabs, tabsArr).map((t) => (<TabItem key={t.id} to={t.to}>{t.text}</TabItem>))}
          </Tabs>
          <TabContentWrapper>
            <WrappedComponent {...this.props}/>
          </TabContentWrapper>
        </TabsWrapper>
      );
    }

    static propTypes = {
      propsName: PropTypes.objectOf(PropTypes.shape({
        tabs: PropTypes.array.isRequired,
      })),
    };
  };

export { withTabs };

