/// <reference types="react" />
/**
 * Loading
 * @props
 *  small
 */
export interface LoadingProps {
    small?: boolean;
}
export declare function Loading(props: LoadingProps): JSX.Element;
/**
 * Loading bound with icon
 */
export declare function LoadingBall(): JSX.Element;
/**
 * Loading someone is typing
 */
export declare function LoadingSomeoneTyping(): JSX.Element;
export { default as LoadingComponent } from './LoadingComponent';
export { default as LoadingList } from './LoadingList';
export { default as LoadingModal } from './LoadingModal';
