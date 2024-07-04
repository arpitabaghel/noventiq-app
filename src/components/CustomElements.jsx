import * as React from 'react';
import Select, { selectClasses } from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { Divider, createTheme, useMediaQuery } from '@mui/material';
import { useTranslation } from 'react-i18next';
import { ArrowDropDown } from '@mui/icons-material';
import Switch from '@mui/joy/Switch';
import Typography from '@mui/joy/Typography';

export const CustomSelect =({setData})=> {
  const { i18n} = useTranslation();
  const theme = createTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  const width = isSmall ? 170:240;

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setData((prevVal) => ({
      ...prevVal,
      language: lng
    }));
  };
  return (
    <Select 
    defaultValue={i18n.language}
    onChange={(_,value)=>changeLanguage(value)}
      placeholder="Select a Language"
       size={isSmall ? "sm":"md"}
      indicator={<React.Fragment><Divider orientation="vertical" ></Divider> <ArrowDropDown /></React.Fragment>}
      sx={{
        height:25,
        width: width,
        [`& .${selectClasses.indicator}`]: {
          transition: '0.2s',
          [`&.${selectClasses.expanded}`]: {
            transform: 'rotate(-180deg)',
          },
        },
      }}
    >
      <Option value="en">English</Option>
      <Option value="hi">Hindi</Option>
    </Select>
  );
}

export const CustomSwitch = ({checked,setData})=>{
  const { t} = useTranslation();
  const handleChange=(isChecked)=>{
    setData((prevVal) => ({
      ...prevVal,remember_me:isChecked
    }));
  }
  return(<Typography component="label" className="switch-remember" startDecorator={ <Switch sx={{
    "--Switch-trackWidth": "35px",
    "--Switch-trackHeight": "20px",
    "--Switch-thumbSize": "13px"
}}
checked={checked}
onChange={(event) => handleChange(event.target.checked)}

/>}>
    <span>{t('rememberMe')}</span>
  </Typography>)
}