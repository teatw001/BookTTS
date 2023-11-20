import express from "express";
import config from "config";
import dateFormat from "dateformat";
import qs from "qs";
import crypto from "crypto";

function sortObject(obj) {
  var keys = Object.keys(obj);
  keys.sort();
  var sortedObject = {};
  keys.forEach(function (key) {
    sortedObject[key] = obj[key];
  });
  return sortedObject;
}

const router = express.Router();

router.get("/payment", function (req, res, next) {
  var ipAddr =
    req.headers["x-forwarded-for"] ||
    req.connection.remoteAddress ||
    req.socket.remoteAddress ||
    req.connection.socket.remoteAddress;

  var tmnCode = "ANVDSZQD";
  var secretKey = "RLVZDNYBZLOBMJXKQJNZCMQIAEYHWIYZ";
  var vnpUrl = " https://sandbox.vnpayment.vn/paymentv2/vpcpay.html";
  var returnUrl = "http://localhost:4200/";

  var date = new Date();
  var createDate = dateFormat(date, "yyyymmddHHmmss");
  var orderId = dateFormat(date, "HHmmss");
  var amount = "1000";
  var bankCode = "NCB";
  var SecureHashType = "SHA256";
  var orderInfo = "Thanh toán hóa đơn";
  var orderType = "billpayment";
  var locale = "vn";

  var currCode = "VND";
  var vnp_Params = {};
  vnp_Params["vnp_Version"] = "2.1.0";
  vnp_Params["vnp_Command"] = "pay";
  vnp_Params["vnp_TmnCode"] = tmnCode;
  vnp_Params["vnp_Locale"] = locale;
  vnp_Params["vnp_CurrCode"] = currCode;
  vnp_Params["SecureHashType"] = SecureHashType;
  vnp_Params["vnp_TxnRef"] = orderId;
  vnp_Params["vnp_OrderInfo"] = orderInfo;
  vnp_Params["vnp_OrderType"] = orderType;
  vnp_Params["vnp_Amount"] = amount * 100;
  vnp_Params["vnp_ReturnUrl"] = returnUrl;
  vnp_Params["vnp_IpAddr"] = ipAddr;
  vnp_Params["vnp_CreateDate"] = createDate;
  if (bankCode !== null && bankCode !== "") {
    vnp_Params["vnp_BankCode"] = bankCode;
  }

  // Sử dụng hàm sortObject
  vnp_Params = sortObject(vnp_Params);

  var signData = qs.stringify(vnp_Params, { encode: false });
  var hmac = crypto.createHmac("sha512", secretKey);
  var signed = hmac.update(Buffer.from(signData, "utf-8")).digest("hex");
  vnp_Params["vnp_SecureHash"] = signed;
  vnpUrl += "?" + qs.stringify(vnp_Params, { encode: false });

  // In ra để kiểm tra
  console.log(vnpUrl);
  // Chú ý: res.redirect(vnpUrl) thay vì return vnpUrl để chuyển hướng trình duyệt đến URL
  res.redirect(vnpUrl);
});

export default router;
