/**
 * Created by ddxx on 2018/1/16.
 * antd 自定义主题配置
 */
"use strict";

const defTheme = {
    'primary-color': '#078A45',
    'link-color': '#22A262',

    // Background color for `<body>`
    // 'body-background': '#2E657D',
    // 'component-background': '#224E69',
    // 'text-color': '#111111',
    // 'font-size-base' : '14px',
    //
    // 'background-color-base' : '#224E69',
    // 'background-color-light' : '#062142',
    //
    // 'heading-color': '#153755',
    //
    // // Border color
    // 'border-color-base': '#2E657D',
    //
    // // ICONFONT
    // 'icon-url': '/iconfont',
    //
    // //button
    // 'btn-default-bg': '#153755',
    //
    // //form
    // 'label-color' : '#ECECEC',
    //
    // //input
    // 'input-bg' : '#2E657D',
    // 'input-border-color': '#062142',
    //
    // // table
    // 'table-row-hover-bg': '#2E657D',
    // 'table-selected-row-bg': '#153755',
    //
    // //popover
    // 'popover-bg': '#ad352d',
    // 'popover-color': '#FFFFFF',
};

const springTheme = {
    'primary-color': '#D03B33',
    'link-color': '#D03B33',

    // Background color for `<body>`
    'body-background': '#A00000',
    'component-background': '#A00000',
    'text-color': '#FFFFFF',
    'font-size-base' : '14px',

    'background-color-base' : '#A00000',
    'background-color-light' : '#920000',

    'heading-color': '#D23D30',

    // Border color
    'border-color-base': '#db8949',

    // ICONFONT
    'icon-url': '/iconfont',

    //button
    'btn-default-bg': '#ad352d',

    //form
    'label-color' : '#ECECEC',

    //input
    'input-bg' : '#ad352d',
    'input-border-color': '#db8949',

    // table
    'table-row-hover-bg': '#920000',
    'table-selected-row-bg': '#af0000',

    //popover
    'popover-bg': '#ad352d',
    'popover-color': '#FFFFFF',
};

module.exports = theme => {
    if (theme === 'def') {
        return defTheme;
    } else if (theme == 'spring') {
        return springTheme;
    }
}

