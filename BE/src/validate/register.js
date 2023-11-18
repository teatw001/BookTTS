import joi from "joi";

function errorMessages(fieldName) {
    return {
        'string.base': `${fieldName} phải là chuỗi`,
        'string.empty': `${fieldName} không được để trống`,
        'string.email': `${fieldName} phải là email`,
        'string.min': `${fieldName} phải dài hơn 6 ký tự`,

        "number.base": `${fieldName} phải là số`,
        "number.empty": `${fieldName} là bắt buộc`,
        "number.min": `${fieldName} phải lớn hơn 0`,

        'array.base': `${fieldName} phải là mảng`,
        'array.min': `${fieldName} không được để trống`,
        'object.base': `${fieldName} phải là đối tượng`,

        'any.required': `${fieldName} là bắt buộc`,
        "any.only": `${fieldName} không khớp`,
    };
}

export const registerSchema = joi.object({
    name: joi.string().required().messages(errorMessages("Tên")),
    email: joi.string().email().required().messages(errorMessages("Email")),
    phone: joi.string().required().messages(errorMessages("Số điện thoại")),
    address: joi.string().required().messages(errorMessages("Địa chỉ")),
    password: joi.string().required().min(6).messages(errorMessages("Mật khẩu")),
    confirmPassword: joi.string().valid(joi.ref("password")).required().messages(errorMessages("Xác nhận mật khẩu")),
});