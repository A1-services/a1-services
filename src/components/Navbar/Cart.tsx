"use client";
import { CartStorage } from "@/util/Cart";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Link,
  Button,
  Image
} from "@nextui-org/react";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from "@/context/cart";

function Cart() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const { cart, removeItemCart } = useContext(cartContext);

  return (
    <>
      <Button onClick={onOpen} isIconOnly>
        <FaCartShopping className="h-[18px] w-[18px] text-primary" />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Cart</ModalHeader>
              <ModalBody>
                {cart.length === 0 ? (
                  <>No items</>
                ) : (
                  <>
                    {cart.map((p) => (
                      <div className="flex justify-between items-center" key={p.id}>
                        <Button className="bg-red-600 p-3 rounded text-white" onClick={() => removeItemCart(p.id)}>X</Button>
                        <p className="text-text">{p.title}</p>
                        <Image className="w-[100px] h-[100px]" src={p.image} alt="Product"/>
                      </div>
                    ))}
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button href="/cart" color="primary" as={Link} onPress={onClose}>
                  Buy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
