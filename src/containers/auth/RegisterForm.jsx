import AuthForm from '../../components/auth/AuthForm';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { chagneInput, initializeForm, register } from '../../modules/auth';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
    const [error, setError] = useState(null);
    const { form, registerSuccess, registerError } = useSelector(({ auth }) => ({
        form: auth.register,
        registerSuccess: auth.registerSuccess,
        registerError: auth.registerError,
    }));
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const onChange = (e) => {
        const { name, value } = e.target;
        dispatch(chagneInput({ form: 'register', key: name, value: value }));
    };
    const onSubmit = (e) => {
        e.preventDefault();
        const { username, password, passwordConfirm } = form;
        if ([username, password, passwordConfirm].includes('')) {
            setError('빈 칸을 모두 입력해주세요.');
            return;
        }
        if (password !== passwordConfirm) {
            setError('비밀번호가 일치하지 않습니다.');
            dispatch(chagneInput({ form: 'register', key: 'password', value: '' }));
            dispatch(chagneInput({ form: 'register', key: 'passwordConfirm', value: '' }));
            return;
        }
        dispatch(register({ username: username, password: password }));
    };
    const onGoBack = () => {
        navigate('/');
    };

    useEffect(() => {
        dispatch(initializeForm('register'));
    }, [dispatch]);

    useEffect(() => {
        if (registerError) {
            if (!registerError.response) {
                setError('회원가입 실패');
                return;
            }
            if (registerError.response.status === 409) {
                setError('이미 존재하는 계정입니다.');
                return;
            }
            setError('회원가입 실패');
            return;
        }
        if (registerSuccess) {
            setError('회원가입 성공');
            return;
        }
    }, [registerError, registerSuccess, dispatch]);

    return (
        <div>
            <AuthForm type="register" form={form} onChange={onChange} onSubmit={onSubmit} error={error} onGoBack={onGoBack} />
        </div>
    );
};

export default RegisterForm;
