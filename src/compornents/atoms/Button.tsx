import { memo } from 'react';
import { AppButton } from "@/compornents/atoms/modules.style";
import './styles/button.css';
import { type } from 'os';
import { Primary } from './Button.stories';
import { border } from '@chakra-ui/react';

export const Button: React.FC<Props> = memo(
  ({type, size, label, ...props}) => {
    // ボタンタイプによる色とスタイルの決定
    let bg = "primary";
    let color = "black";
    let borderColor = "";
    switch(type){
      case "secondary":
        bg = "white";
        color = "primary";
        borderColor = "primary";
        break;
        case "accent":
          bg = "accent";
          break;
        case "logout":
          borderColor = "white";
          break;
    }

  // 変数bordercolorがあれば、propsにborder・bordercolorを設定
  const chakraButtonProps = {...props};
  if(borderColor){
    Object.assign(chakraButtonProps, {
      border: "2px",
      borderColor: borderColor,
    });
  }

  return(
    <AppButton
      fontSize = {size === "small" ? "lg" : "2xl"}
      p="12px 24px"
        buttonsize={size}
        bg={bg}
        color={color}
        {...chakraButtonProps}
    >
      {label}

    </AppButton>
  );
  
  });

Button.displayName = "Button";

