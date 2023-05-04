import React from 'react';
import { Checkbox } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import { useState } from 'react';

const CheckboxComp = () => {
    // return <Checkbox className="p-4">Checkbox</Checkbox>;
    const [check, setCheck] = useState(false);
    return (
        <>
            <input
                id="cstm-checkbox"
                type="checkbox"
                className=""
                hidden
                value={check}
                onChange={(e) => {
                    setCheck(e.target.checked);
                }}
            />
            <span>
                <label
                    htmlFor="cstm-checkbox"
                    className={`rounded-[8px] border-[#3A37A6] border-[2px] border-solid flex items-center justify-center w-[25px] h-[25px] ${
                        check && 'bg-[#3A37A6]'
                    }`}
                >
                    {check && (
                        <CheckOutlined
                            className={`text-[1.10rem] mb-0 ${
                                check && 'text-white'
                            }`}
                        />
                    )}
                </label>
            </span>
        </>
    );
};

export default CheckboxComp;
