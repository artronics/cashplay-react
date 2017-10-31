/* eslint-disable react/prefer-stateless-function */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Card from 'components/Card';
import { TabItem, Tabs } from 'components/Tab';

const TabsWrapper = styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;

// const convertTabsToArray = (tabs) => {
//   const arr = [];
//   Object.keys(tabs).forEach((t) => {
//     if (tabs[t]) {
//       arr.push({id: t, ...tabs[t]});
//     }
//   });
//
//   return arr;
// };
const createTabsArray = (tabs, tabsObj) => {
  const arr = [];
  tabs.forEach((t) => {
    if (tabsObj[t]) {
      arr.push({id: t, ...tabsObj[t]});
    }
  });

  return arr;
};
const withTabs = (propsName) => (tabsArr) => (WrappedComponent) =>
  class TabsHoc extends React.PureComponent {
    render() {
      const {tabs} = this.props[propsName];

      return (
        <TabsWrapper>
          <Tabs>
            {createTabsArray(tabs, tabsArr).map((t) => (<TabItem key={t.id} to={t.to}>{t.text}</TabItem>))}
          </Tabs>
          <Card>
            <WrappedComponent {...this.props}/>
          </Card>
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

