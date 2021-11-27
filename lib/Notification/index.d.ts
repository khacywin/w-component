/**
 * NOTIFICATIONS
 * @props message - (default) - (error) - (success)
 */
import React from "react";
interface Props {
    default?: boolean;
    error?: boolean;
    white?: boolean;
    success?: boolean;
    id?: string | number;
}
interface PropsWrp extends Props {
    open?: boolean;
}
interface PropsComponent extends PropsWrp {
    message: string | JSX.Element;
    fnOff: (id?: string | number) => void;
}
declare const _default: React.MemoExoticComponent<(props: PropsComponent) => JSX.Element>;
export default _default;
