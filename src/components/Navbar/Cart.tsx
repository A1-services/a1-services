"use client";
import { CartStorage } from "@/util/Cart";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Button,
} from "@nextui-org/react";
import { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { cartContext } from "@/context/cart";

function Cart() {
  const { isOpen, onClose, onOpen, onOpenChange } = useDisclosure();
  const { cart } = useContext(cartContext);

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
                      <div key={p.id}>{p.title}</div>
                    ))}
                  </>
                )}
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
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
