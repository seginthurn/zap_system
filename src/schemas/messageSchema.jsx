import * as yup from 'yup';

const messageSchema = yup.object().shape({
    channel: yup
        .string()
        .required(),
    trigger: yup
        .string()
        .required(),
    timer: yup
        .string()
        .matches(/\d\d:\d\d/)
        .required(),
    message: yup
        .string()
        .required(),
});

export default messageSchema;


