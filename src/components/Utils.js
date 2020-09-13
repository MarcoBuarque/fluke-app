import {ActivityIndicator, RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import styled, {css} from 'styled-components';

// Utils
import Colors from './../utils/Style/Colors';

export const View = styled.View`
  ${(props) =>
    props.flex &&
    css`
      flex: ${props.flex};
    `}
  ${(props) =>
    props.color &&
    css`
      background-color: ${props.color};
    `}
  ${(props) =>
    props.width &&
    css`
      width: ${props.width}px;
    `}
  ${(props) =>
    props.height &&
    css`
      height: ${props.height}px;
    `}
  ${(props) =>
    props.padding &&
    css`
      padding: ${props.padding}px;
    `}
  ${(props) =>
    props.paddingTop &&
    css`
      padding-top: ${props.paddingTop}px;
    `}
  ${(props) =>
    props.paddingBottom &&
    css`
      padding-bottom: ${props.paddingBottom}px;
    `}
  ${(props) =>
    props.paddingLeft &&
    css`
      padding-left: ${props.paddingLeft}px;
    `}
  ${(props) =>
    props.paddingRight &&
    css`
      padding-right: ${props.paddingRight}px;
    `}
  ${(props) =>
    props.align &&
    css`
      align-items: ${props.align};
    `}
  ${(props) =>
    props.justify &&
    css`
      justify-content: ${props.justify};
    `}
    ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `}
    ${(props) =>
    props.borderWidth &&
    css`
      border-width: ${props.borderWidth};
    `}
    ${(props) =>
    props.borderColor &&
    css`
      border-color: ${props.borderColor};
    `}
    ${(props) =>
    props.borderRadius &&
    css`
      border-radius: ${props.borderRadius}px;
    `}
`;

View.propTypes = {
  color: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  align: PropTypes.string,
  justify: PropTypes.string,
  background: PropTypes.string,
  borderWidth: PropTypes.number,
  borderColor: PropTypes.string,
  borderRadius: PropTypes.number,
};

// View.defaultProps = {
//   color: Colors.background,
// };

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
    ${(props) =>
    props.secondary &&
    css`
      color: ${Colors.secondaryText};
    `}
`;
Text.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
  secondary: PropTypes.string,
};

Text.defaultProps = {
  color: Colors.text,
  size: 16,
};

export const Container = styled(View).attrs((props) => ({
  background: props.color,
}))`
  padding: 16px;
`;

Container.propTypes = {
  colors: PropTypes.string,
};

Container.defaultProps = {
  color: Colors.background,
};

export const SafeAre = styled.SafeAreaView`
  flex: 1;
  ${(props) =>
    props.background &&
    css`
      background-color: ${props.background};
    `}
`;
SafeAre.propTypes = {
  background: PropTypes.string,
};

SafeAre.defaultProps = {
  background: Colors.background,
};

export const LoadingIndicator = styled(ActivityIndicator).attrs((props) => ({
  size: 'large',
  color: Colors.secondaryText,
}))``;

export const RefreshControlStyled = styled(RefreshControl).attrs((props) => ({
  colors: [Colors.secondaryText],
}))``;
