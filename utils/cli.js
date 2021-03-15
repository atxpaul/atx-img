const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
    source:{
        type:`string`,
        alias:`s`,
        desc: `Source file or directory for images`,
    },
    width:{
        type:`number`,
        alias:`w`,
        desc: `Width of images and pixeles`,
    },
    quality:{
        type:`number`,
        alias:`q`,
        desc: `Quality of images`,
    },
    clear:{
        type:`boolean`,
        default:true,
        alias:`c`,
        desc: `Clear the console`,
    },
    debug:{
        type:`boolean`,
        default:false,
        alias:`d`,
        desc:`Print debug info`
    },
    version:{
        type:`boolean`,
        default:false,
        alias:`v`,
        desc: `Print CLI info`
    }
}

const commands = {
    help:{
        desc: `Print help info`
    }
}

const helpText = meowHelp({
    name:`atx-img`,
    flags,
    commands,
})

const options = {
    inferType:true,
    description:false,
    hardRejection:false,
    flags
}

module.exports = meow(helpText,options)
