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
const withTabs = (propsName) => (WrappedComponent) =>
  class TabsHoc extends React.PureComponent {
    render() {
      const {tabs} = this.props[propsName];

      return (
        <TabsWrapper>
          <Tabs>
            {tabs.map((t) => (<TabItem key={t.id} to={t.to}>{t.text}</TabItem>))}
          </Tabs>
          <Card>
            <WrappedComponent {...this.props}/>
          </Card>
        </TabsWrapper>
      );
    }

    static propTypes = {
      propsName: PropTypes.objectOf(PropTypes.shape({
        tabs: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.shape({
          id: PropTypes.string.isRequired,
          text: PropTypes.string.isRequired,
          to: PropTypes.string.isRequired,
        }))).isRequired,
      })),
    };
  };

export { withTabs };

