import React from 'react';

// Design
import * as Utils from './Utils';

// Utils
import Colors from './../utils/Style/Colors';

export const ErrorText = () => (
  <Utils.View>
    <Utils.Text color={Colors.error}>
      Algo deu errado no fetch dos dados, por favor tente novamente.
    </Utils.Text>
  </Utils.View>
);

export default ErrorText;
