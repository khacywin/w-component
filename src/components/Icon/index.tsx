import React from 'react';
import styled from 'styled-components';

// import colorSVG from 'helps/colorSVG';


interface IconProps {
  small?: boolean;
  normal?: boolean;
  big?: boolean;
  biggest?: boolean;
  bigger?: boolean;
  color?: string;
  src?: string;
  icon?: string;
}

export default React.memo((props: IconProps) => {
  return (
    <Icon
      className='icon'
      src={props.src}
      biggest={props.biggest}
      color={props.color}
      big={props.big}
      small={props.small}
      bigger={props.bigger}
      normal={props.normal}
    >
      {props.icon && <i className={props.icon} />}
    </Icon>
  );
});

const Icon = styled.div<IconProps>`
  display: inline-block;
  text-align: center;

  ${(props) => props.src && `
    background-image: url('${props.src}');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    width: 15px;
    height: 15px;

    ${props.bigger && `
      width: 24px;
      height: 24px;
    `}

    ${props.biggest && `
      width: 32px;
      height: 32px;
    `}

    ${props.small && `
      width: 10px;
      height: 10px;
    `}

    ${props.big && `
      width: 20px;
      height: 20px;
    `}
  `}
 
  i{
    text-align: center;
  }

  ${(props) => !!props.color && `
    i:before {
      color: ${props.color};
    }
  `};

  ${(props) =>
    props.bigger
      ? `
    i{
      font-size: 24px;
    }
  `
      : props.biggest
        ? `
    i{
      font-size: 32px;
    }
    `
        : props.small
          ? `
    i{
      font-size: 10px;
    }
  `
          : props.big
            ? `
    i{
      font-size: 20px;
    }
  `
            : `
    i{
      font-size: 15px;
    }
  `};
`;
