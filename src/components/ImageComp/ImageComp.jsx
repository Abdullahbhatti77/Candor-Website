import React from 'react';
import { Image } from 'antd';

const ImageComp = (props) => {
    let { src, width, height, preview } = props;

    src =
        src ||
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png';
    width = width || 100;
    height = height || 100;
    preview = preview;

    return <Image width={width} height={height} src={src} preview={preview} />;
};

export default ImageComp;
