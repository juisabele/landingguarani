$("#post-btn").click(function(){
$.ajax({
    url: "https://p2d9wvdfk9.execute-api.us-west-2.amazonaws.com/prod/leads",
    type: "POST",
    data: $("#formCaptcha").serialize(),
    success: console.log('sucesso'),
    error: console.log('oi')
});
})