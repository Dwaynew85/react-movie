import React from 'react';
// Styles
import { Wrapper, Content } from './Grid.styles';

const Grid = ({ header, children}) => (
    <Wraper>
        <h1>{header}</h1>
        <Content>{children}</Content>
    </Wraper>
)