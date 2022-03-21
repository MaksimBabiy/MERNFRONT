import React from 'react';
import { Form, Icon, Input } from 'antd';


const FormField = ({touched,type, errors,name, icon, values, handleBlur,handleChange,placeholder}) => {
    return ( 
        <Form.Item 
        validateStatus={!touched[name] ? '' : errors[name] ? 'error' : 'success'} 
        hasFeedback
        help={!touched[name] ? '' : errors[name]}>
            <Input
              id={name}
              type={type}
              size="large"
              prefix={<Icon type={icon} style={{ color: 'rgba(0,0,0,.25)' }} />}
              placeholder={placeholder}
              value={values[name]}
              onChange={handleChange}
              onBlur={handleBlur}
            />
        </Form.Item>
     );
}
 
export default FormField;