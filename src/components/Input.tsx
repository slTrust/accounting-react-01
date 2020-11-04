import React from 'react';
import styled from 'styled-components';

const Lablel = styled.label`
  display:flex;
  align-items:center;
  >span{ 
    margin-right:16px;
    white-space:nowrap;
  }
  >input{
    display:block;
    width:100%;
    height: 44px;
    background:none;
    border:none;
  }
`;
/*
定义 Input组件的 接受的参数 
为 lable 和 input标签的所有属性
& 代表 “加上”
*/
type Props = {
  label: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
const Input: React.FC<Props> = (props) => {
  const { label, children, ...rest } = props;
  return (
    <Lablel>
      <span>{props.label}</span>
      <input {...rest} />
    </Lablel>
  );
}

export default Input;