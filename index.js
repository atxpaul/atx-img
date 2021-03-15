#!/usr/bin/env node

/*
*atximg
*A cli for optimize images
*
* @author atxpaul <https://twitter.com/code4paul>
*
**/

const resizeOptimizeImages = require('resize-optimize-images');
const globby = require('globby');
const alert = require('atx-alerts');
const ora = require('ora');

const init = require('./utils/init');
const cli = require('./utils/cli')
const log = require('./utils/log')

const spinner=ora({text:''})
const input=cli.input;
const flags=cli.flags;
const {clear,debug,source,width,quality}=flags;

(async()=>{
    init({clear});
    input.includes('help') && cli.showHelp(0);

    if(source){
        const images = await globby(source)
        const options = {
            images:images,
            width:width?width:1920,
            quality:quality?quality:90
    };
    spinner.start(`Images are getting resized and optimized`);
    await resizeOptimizeImages(options);
    spinner.succeed(`Images were resized and optimized succesfully`);
    }
    else {
        alert({
            type:`error`,
            msg:`You forgot to specify --source flag`
        })
    }


    debug && log (images);
    debug && log (flags);
})();