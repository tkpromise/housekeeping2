// 云函数入口文件
const cloud = require('wx-server-sdk')
const got = require("got")

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  let xml = '' +
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<soap:Body>' +
    '<GetCurrentRoomStatusGraph xmlns="www.mingyansoft.com">' +
    '<nChainID>1</nChainID>' +
    '<nRoomTypeID>1</nRoomTypeID>' +
    '<lsRoomNo>' +
    '<string>8202</string>' +
    '<string>8203</string>' +
    '<string>8205</string>' +
    '<string>8806</string>' +
    '</lsRoomNo>' +
    '</GetCurrentRoomStatusGraph>' +
    '</soap:Body>' +
    '</soap:Envelope>'
  let postResponse = await got('http://114.55.172.147:9702/MobileHouseKeepingService.asmx?op=GetCurrentRoomStatusGraph', {
    method: 'POST',
    headers: {
      'Content-Type': 'text/xml; charset=utf-8'
    },
    body: xml,
  })

  return postResponse.body
}
