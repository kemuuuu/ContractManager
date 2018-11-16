({
    initHelper: function(c, e, h) {
        const action = c.get('c.fetchTodayContracts')
        action.setCallback(this, function(res) {
            const state = res.getState();
            if (state === 'SUCCESS') c.set('v.todayContracts', res.getReturnValue())
            else alert('READ CONTRACTS ERROR')
            console.log(c.get('v.todayContracts'))
            h.fetchTomorrow();
        });
        $A.enqueueAction(action)
    },

    fetchTomorrow: function(c) {
        
    }
})
