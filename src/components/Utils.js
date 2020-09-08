import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

// Utils
import Colors from './../utils/Style/Colors';

export const View = styled.View`
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height};
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${(props) => props.padding}px;
    `}
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${(props) => props.paddingTop}px;
    `}
  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: ${(props) => props.paddingBottom}px;
    `}
  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: ${(props) => props.paddingLeft}px;
    `}
  ${(props) =>
    props.paddingRight &&
    css`
      padding-right: ${(props) => props.paddingRight}px;
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${(props) => props.align};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${(props) => props.justify};
    `}
    ${(props) =>
    props.background &&
    css`
      background-color: ${(props) => props.background};
    `}
`;

View.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  background: PropTypes.string,
};

export const Row = styled(View)`
  flex-direction: row;
`;

export const Text = styled.Text`
  ${(props) =>
    props.color &&
    css`
      color: ${props.color};
    `}
  ${(props) =>
    props.size &&
    css`
      font-size: ${props.size}px;
    `}
`;
Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

Text.defaultProps = {
  color: Colors.text,
  size: 16,
};

export const Container = styled(View)`
  flex: 1;
  padding-horizontal: 16px;
`;
