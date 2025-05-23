"use client";

import { Button } from "@heroui/button";
import React from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  ModalFooter,
} from "@heroui/modal";
import NotificationsTable from "./NotificationsTable";
import { useAppSelector } from "@/libs/constants/AppFunctions";

interface Props {
  username: string;
  isOpen: boolean;
  onOpenChange: (isOpen: boolean) => void;
}

export default function NotificationsModal(props: Props) {
  const { username, isOpen, onOpenChange } = props;
  if (!username) return null;

  const loginInfo = useAppSelector((state) => state.loginReducer.value);

  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className=" mt-4"
      scrollBehavior="inside"
      hideCloseButton
      backdrop="opaque"
      size="lg"
      placement="top-center"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1 justify-between">
              <div className=" flex flex-row gap-2 items-center text-center">
                <p>Notifications</p>
                {!!loginInfo.unread_count && (
                  <div className="relative max-w-fit min-w-min inline-flex items-center justify-between box-border whitespace-nowrap px-1 h-6 text-tiny rounded-full bg-default/40 text-default-700">
                    <span className="flex-1 text-inherit font-normal px-1">
                      {loginInfo.unread_count}
                    </span>
                  </div>
                )}
              </div>
            </ModalHeader>
            <ModalBody className=" pb-4">
              <NotificationsTable {...props} />
            </ModalBody>

            <ModalFooter>
              <Button color="danger" variant="flat" onPress={onClose} size="sm">
                Close
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
