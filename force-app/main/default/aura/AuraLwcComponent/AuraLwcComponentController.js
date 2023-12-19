({
    callmsg : function(component, event) {
        var msg =event.getParam('msg');
        console.log('msg'+msg);
        component.set("v.message",msg)
    }
})
