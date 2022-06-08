import React, {useState} from 'react'
import { Button, Drawer } from "antd";


const Cart = (drawer, toggle) => {
    const [visible, setVisible] = useState(false);

    const showDrawer = () => {
      setVisible(true);
    };

    const onClose = () => {
      setVisible(false);
    };

    return (
      <>
        <Button type="text" onClick={showDrawer} style={{ marginTop: "-10px" }}>
          cart
        </Button>
        <Drawer
          title="/ &ensp; your cart."
          placement="right"
          onClose={onClose}
          visible={visible}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </>
    );
 
}

export default Cart

              