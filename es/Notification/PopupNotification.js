import { a as __awaiter } from '../tslib.es6-8e295639.js';
import React, { useState, useCallback, useMemo } from 'react';
import { B as Button, M as Modal } from '../Modal-1cd20619.js';
import styled from 'styled-components';
import '../_lineOverflow-0f5e92ab.js';
import 'components/atoms/Button';
import 'components/atoms/Button/ButtonAction';
import 'components/atoms/Icon';
import 'react-dom';

var PopupNotification = React.memo(({ title, message, type, fnOk, fnYes, fnNo }) => {
    const [isLoading, setIsLoading] = useState(false);
    const _handleCloseNotification = useCallback((fn) => () => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        fn && (yield fn());
        setIsLoading(false);
    }), []);
    const buttonType = useMemo(() => new Map()
        .set("normal", React.createElement(WrapButton, { disable: isLoading },
        React.createElement(Button, { fnClick: _handleCloseNotification(fnOk) }, "OK")))
        .set("yes/no", React.createElement(WrapButton, { disable: isLoading },
        React.createElement(Button, { error: true, fnClick: _handleCloseNotification(fnYes) }, "Yes"),
        React.createElement(Button, { normal: true, fnClick: _handleCloseNotification(fnNo) }, "No"))), [_handleCloseNotification, fnNo, fnOk, fnYes, isLoading]);
    return (React.createElement(Modal, { styled: {
            maxWidth: "400px",
        }, show: true, noFooter: true, heading: title },
        React.createElement(Wrap, null,
            React.createElement("p", null, message),
            buttonType.get(type))));
});
const Wrap = styled.div `
  padding-bottom: 20px;

  p {
    margin: 0 auto 12px;
    max-width: 300px;
    text-align: center;
  }
`;
const WrapButton = styled.div `
  display: flex;
  justify-content: center;

  ${({ disable }) => disable &&
    `
    button: {
      user-select: none;
      pointer-events: none;
      opacity: .5;
    }
  `};
`;

export { PopupNotification as default };
//# sourceMappingURL=PopupNotification.js.map
