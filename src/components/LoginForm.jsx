import React, { useState } from "react"
import { useTranslation } from 'react-i18next';
import Input from '@mui/joy/Input';
import { MailOutlined, LockOutlined, VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { Button, FormHelperText, Grid, Link, Typography } from "@mui/material";
import { styled } from '@mui/system';
import { CustomSelect, CustomSwitch } from "./CustomElements";
import { Credentials, EmailRegex, PublicEmailProviders } from "../Constants";

const StyledButton = styled(Button)({
    backgroundColor: 'black',
    color: 'white',
    width: '40%',
    height: '40px',
    textTransform: 'capitalize',
    ":hover": { backgroundColor: 'black' },
    ":disabled":{color: 'white'}
});

const LoginForm = () => {
    const { t, i18n } = useTranslation();
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
        language: i18n.language,
        remember_me: false
    })
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setLoginData({
            ...loginData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loginData.email === Credentials.email && loginData.password === Credentials.password) {
            alert(t('welcomeMsg'))
        } else {
            alert(t('incorrectCreds'))
        }
    }

    /* Checks the provided email is of public provider */
    const checkEmailDomain = () => {
        const domain = loginData.email.split('@')[1];
        return PublicEmailProviders.includes(domain)
    }

    /* Checks the provided email is valid && its domain is not by public provider   */
    const validateEmail = () => {
        if (!loginData.email.length) {
            return 'validationMessage.required';
        }
        if (!EmailRegex.test(loginData.email)) {
            return 'validationMessage.invalidEmail';
        }
        if (checkEmailDomain()) {
            return 'validationMessage.noPublicProvider'
        }
        return ''
    }

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <div className="login-form">

                <Grid container rowSpacing={2}
                    direction="row"
                    justifyContent="center"
                    alignItems="center">
                    <Grid item xs={4}>
                        <Typography variant="body1" component="label" htmlFor="email">
                            <strong>{t('email')}:</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Input id="email" name="email"
                            startDecorator={<MailOutlined />}
                            size="md" 
                            value={loginData.email}
                            onChange={(e) => handleChange(e)}
                            onBlur={() => setError(validateEmail())}
                        />
                        {error ? <FormHelperText error>{t(error)}</FormHelperText> : ''}
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="body1" component="label" htmlFor="password">
                            <strong>{t('password')}:</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
                            startDecorator={<LockOutlined />}
                            onChange={(e) => handleChange(e)}
                            size="sm" 
                            endDecorator={
                                <span onClick={() => setShowPassword(!showPassword)} style={{ paddingTop: '5px' }}>{showPassword ? <VisibilityOffOutlined /> : <VisibilityOutlined />}</span>
                            }
                        />
                        <div className="password-link">
                            <Link href='https://noventiq.com/'>
                                {t('forgotPassword')}
                            </Link>
                        </div>
                    </Grid>

                    <Grid item xs={4}>
                        <Typography variant="body1" component="label" htmlFor="language">
                            <strong>{t('language')}:</strong>
                        </Typography>
                    </Grid>
                    <Grid item xs={8}>
                        <CustomSelect setData={setLoginData} />
                        <CustomSwitch checked={loginData.remember_me} setData={setLoginData} />
                    </Grid>
                </Grid>
            </div>
            <StyledButton type="submit" disabled={error}>{t('logIn')}</StyledButton>
        </form>

    )
}
export default LoginForm;