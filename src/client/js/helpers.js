function isUrl(text){
    if(!text || text.length == 0) throw new Error('text is required.')
    const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expression);
    return text.match(regex)?true:false;
}

export { isUrl }