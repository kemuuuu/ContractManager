({
    init : function(c, e, h) {
        c.set('v.columns',[
            {label: '取引先名', fieldName: 'Account["Name"]', type: 'text'},
            {label: '契約開始日', fieldName: 'StartDate', type: 'date'},
            {label: '契約 期間(月)', fieldName: 'ContractTerm', type: 'number'},
            {label: '状況', fieldName: 'Status', type: 'text'},
            {label: '終了通知', fieldName: 'OwnerExpirationNotice', type: 'text'}
        ])
        h.initHelper(c, e, h)
    }
})
