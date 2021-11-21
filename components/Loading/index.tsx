import React from 'react';
import logoImg from 'components/util/assets/images/logo.svg';

/**
 * Loading
 * @props
 *  small
 */
export interface LoadingProps {
  small?: boolean;
}

export function Loading(props: LoadingProps): JSX.Element {
  return (
    <div className='w-loading'>
      <div className={`w-loading-eclipse ${props.small ? 'small' : ''}`}>
        <div />
      </div>
    </div>
  );
}

/**
 * Loading bound with icon
 */
export function LoadingBall(): JSX.Element {
  return (
    <div className='w-loading-ball'>
      <div className='w-loading-ball-logo'>
        <img src={logoImg} alt='manage time' />
      </div>
      <div className='w-loading-ball-shadow' />
    </div>
  );
}

/**
 * Loading someone is typing
 */
export function LoadingSomeoneTyping(): JSX.Element {
  return (
    <div className='w-loading-typing'>
      <div />
      <div />
      <div />
    </div>
  );
}

export { default as LoadingComponent } from './LoadingComponent';
export { default as LoadingList } from './LoadingList';
export { default as LoadingModal } from './LoadingModal';