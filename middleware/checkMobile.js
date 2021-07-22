export default function(ctx) {
    let userAgent = '';
    if (ctx.req) {
        userAgent = ctx.req.headers['user-agent'];
    } else {
        userAgent = navigator.userAgent;
    }
    ctx.isMobile = !!/mobile/i.test(userAgent)
}