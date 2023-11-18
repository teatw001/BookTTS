import joi from "joi";
function errorMessages(fieldName) {
  return {
    "string.base": `${fieldName} phải là chuỗi`,
    "string.empty": `${fieldName} không được để trống`,
    "string.email": `${fieldName} phải là email`,
    "string.min": `${fieldName} phải dài hơn 6 ký tự`,

    "number.base": `${fieldName} phải là số`,
    "number.empty": `${fieldName} là bắt buộc`,
    "number.min": `${fieldName} phải lớn hơn 0`,

    "array.base": `${fieldName} phải là mảng`,
    "array.min": `${fieldName} không được để trống`,
    "object.base": `${fieldName} phải là đối tượng`,

    "any.required": `${fieldName} là bắt buộc`,
    "any.only": `${fieldName} không khớp`,
  };
}

export const productSchema = joi
  .object({
    name: joi.string().required().messages(errorMessages("Tên")),
    price: joi.number().min(1).required().messages(errorMessages("Giá")),
    isInFlashSale: joi.boolean().required(),
    original_price: joi
      .number()
      .min(1)
      .required()
      .messages(errorMessages("Giá gốc")),
    short_description: joi
      .string()
      .required()
      .messages(errorMessages("Mô tả ngắn")),
    description: joi.string().required().messages(errorMessages("Mô tả")),
    brand: joi.string().required().messages(errorMessages("Danh mục")),
    quantity_sold: joi
      .number()
      .min(1)
      .required()
      .messages(errorMessages("Số lượng")),
    authors: joi.string().required().messages(errorMessages("Tác giả")),
    rating_average: joi
      .number()
      .min(1)
      .required()
      .messages(errorMessages("Đánh giá")),
    images: joi
      .array()
      .min(1)
      .required()
      .items(
        joi.object({
          _id: joi.string().optional(),
          poster: joi.string().required(),
          base_url: joi.string().required().messages(errorMessages("Ảnh gốc")),
          is_gallery: joi.boolean().optional(),
          label: joi.string().allow(null).optional(),
          large_url: joi.string().optional(),
          medium_url: joi.string().optional(),
          position: joi.string().allow(null).optional(),
          small_url: joi.string().optional(),
          thumbnail_url: joi.string().optional(),
        })
      )
      .messages(errorMessages("Ảnh")),
    specifications: joi
      .array()
      .optional()

      .items(
        joi.object({
          _id: joi.string().optional(),
          name: joi.string().messages(errorMessages("Tên thông số")),
          attributes: joi
            .array()

            .items(
              joi.object({
                _id: joi.string().optional(),
                code: joi.string().messages(errorMessages("Code")),
                name: joi.string().messages(errorMessages("Name")),
                value: joi.string().messages(errorMessages("Value")),
              })
            )
            .messages(errorMessages("Thuộc tính")),
        })
      )
      .messages(errorMessages("Thông số")),
  })
  .unknown(true);
