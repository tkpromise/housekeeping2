var xml2json = require('xml2json.min.js');
Page ({
    data: {

    },
    onLoad:function(options) {
        let xml = '' +
    '<?xml version="1.0" encoding="utf-8"?>' +
    '<soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">' +
    '<soap:Body>' +
    '<GetCurrentRoomStatusGraph xmlns="www.mingyansoft.com">' +
    '<nChainID>1</nChainID>' +
    '<nRoomTypeID>1</nRoomTypeID>' +
    '<lsRoomNo>' +
    '<string>8205</string>' +
    '<string>8209</string>' +
    '</lsRoomNo>' +
    '</GetCurrentRoomStatusGraph>' +
    '</soap:Body>' +
    '</soap:Envelope>'
        //console.log(xml2json(xml))
        //console.log(xml)
        wx.cloud.callFunction({
            name: 'roomstatus',
            complete:res => {
              console.log(res)
              console.log('--------')
              console.log(xml2json(res.result))
              this.setData({
                result:xml2json(res.result)

              })
            }
        })
    }
    
})

