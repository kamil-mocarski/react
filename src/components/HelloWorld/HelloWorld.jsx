import React from 'react';
import PropTypes from 'prop-types';
import './HelloWorld.scss';
import { aaaa } from './style';


export const DEFAULT_CLASS = 'hello-world';
export const TEST_CLASS = 'hello-world-test';
const helloParagraphStyle = {
    marginBottom: 24,
    textAlgin: 'center',
    color: 'green',
    fontSize: 65
   };


const HelloWorld = ({ additionalClass, children, name, lastName }) => (
    <>
<p style={helloParagraphStyle}
    className={additionalClass}>
        

    Hello World! {name} {lastName}!
    </p>
    <div dangerouslySetInnerHTML={{__html: '<p>test html</p>'}}></div>
    </>
);

HelloWorld.propTypes = {
additionalClass: PropTypes.string,
name: PropTypes.string,
lastName: PropTypes.string
};

HelloWorld.deafaultProps = {
    additionalClass: DEFAULT_CLASS,
    name: null,
    lastName: null
};

export default HelloWorld;